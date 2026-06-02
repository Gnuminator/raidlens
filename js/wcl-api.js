async function getToken() {
  const id = document.getElementById('clientId').value.trim();
  const secret = document.getElementById('clientSecret').value.trim();
  if (!id || !secret) throw new Error('Enter your WarcraftLogs client ID and secret.');
  const creds = btoa(`${id}:${secret}`);
  const resp = await fetch('https://www.warcraftlogs.com/oauth/token', {
    method: 'POST',
    headers: { 'Authorization': `Basic ${creds}`, 'Content-Type': 'application/x-www-form-urlencoded' },
    body: 'grant_type=client_credentials'
  });
  if (!resp.ok) {
    const txt = await resp.text().catch(() => '');
    throw new Error(`WCL auth failed (${resp.status}). Check your client ID and secret. ${txt}`);
  }
  const data = await resp.json();
  return data.access_token;
}

async function wclQuery(query, variables) {
  if (!accessToken) accessToken = await getToken();
  const resp = await fetch('https://www.warcraftlogs.com/api/v2/client', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables })
  });
  if (!resp.ok) throw new Error(`WCL API error: ${resp.status}`);
  const data = await resp.json();
  if (data.errors) throw new Error(data.errors.map(e => e.message).join(', '));
  return data.data;
}

async function fetchDmgTable(fight) {
  const q = `query($code:String!,$start:Float!,$end:Float!,$fightIds:[Int]!){reportData{report(code:$code){
    table(startTime:$start,endTime:$end,fightIDs:$fightIds,dataType:DamageTaken,killType:All)
  }}}`;
  const data = await wclQuery(q, { code: reportCode, start: fight.startTime, end: fight.endTime, fightIds: [fight.id] });
  const raw = data.reportData.report.table;
  const parsed = raw ? (typeof raw === 'string' ? JSON.parse(raw) : raw) : {};
  return parsed.data || parsed;
}

async function fetchDeaths(fight) {
  const q = `query($code:String!,$start:Float!,$end:Float!,$fightIds:[Int]!){reportData{report(code:$code){
    events(startTime:$start,endTime:$end,fightIDs:$fightIds,dataType:Deaths,limit:300){data}
  }}}`;
  const data = await wclQuery(q, { code: reportCode, start: fight.startTime, end: fight.endTime, fightIds: [fight.id] });
  return data.reportData.report.events.data || [];
}

// Cached by repo path (not spec name) so shared spec names don't collide.
const specGuideCache = {};

// "death-knight" -> "Death Knight". Class slug is the 4th path segment:
// guides/classes/{role}/{class-slug}/{spec}.md
function prettyClassFromGuidePath(path) {
  const slug = (path.split('/')[3]) || '';
  return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

async function loadSpecGuides(specs) {
  const RAW_BASE = 'https://raw.githubusercontent.com/Gnuminator/raidlens/main/';
  const results = {};

  // Expand present specs into {label, path} jobs. Shared spec names (array values)
  // produce one job per candidate path, labelled by class so they don't overwrite.
  const jobs = [];
  const seenPaths = new Set();
  for (const spec of specs) {
    const entry = SPEC_GUIDE_PATHS[spec];
    if (!entry) continue;
    const paths = Array.isArray(entry) ? entry : [entry];
    const multi = paths.length > 1;
    paths.forEach(path => {
      if (seenPaths.has(path)) return;
      seenPaths.add(path);
      const label = multi ? `${spec} (${prettyClassFromGuidePath(path)})` : spec;
      jobs.push({ label, path });
    });
  }

  await Promise.all(jobs.map(async ({ label, path }) => {
    if (specGuideCache[path] !== undefined) {
      if (specGuideCache[path]) results[label] = specGuideCache[path];
      return;
    }
    try {
      const resp = await fetch(RAW_BASE + path);
      if (!resp.ok) { specGuideCache[path] = null; return; }
      const md = await resp.text();
      specGuideCache[path] = md;
      results[label] = md;
    } catch(e) {
      specGuideCache[path] = null;
    }
  }));

  return results;
}

async function fetchInterruptEvents(fight) {
  const allEvents = [];
  let nextPageTimestamp = null;
  for (let page = 0; page < 10; page++) {
    const startTime = nextPageTimestamp !== null ? nextPageTimestamp : fight.startTime;
    const q = `query($code:String!,$start:Float!,$end:Float!,$fightIds:[Int]!){reportData{report(code:$code){
      events(startTime:$start,endTime:$end,fightIDs:$fightIds,dataType:Interrupts,limit:300){data,nextPageTimestamp}
    }}}`;
    const data = await wclQuery(q, { code: reportCode, start: startTime, end: fight.endTime, fightIds: [fight.id] });
    const result = data.reportData.report.events;
    (result.data || []).forEach(ev => allEvents.push(ev));
    if (!result.nextPageTimestamp || result.nextPageTimestamp >= fight.endTime) break;
    nextPageTimestamp = result.nextPageTimestamp;
  }
  return allEvents;
}

async function fetchCastEvents(fight, spellIds) {
  const allEvents = [];
  let nextPageTimestamp = null;
  if (spellIds.length === 0) return allEvents;
  for (let page = 0; page < 10; page++) {
    const startTime = nextPageTimestamp !== null ? nextPageTimestamp : fight.startTime;
    const q = `query($code:String!,$start:Float!,$end:Float!,$fightIds:[Int]!){reportData{report(code:$code){
      events(startTime:$start,endTime:$end,fightIDs:$fightIds,dataType:Casts,limit:300){data,nextPageTimestamp}
    }}}`;
    const data = await wclQuery(q, { code: reportCode, start: startTime, end: fight.endTime, fightIds: [fight.id] });
    const result = data.reportData.report.events;
    (result.data || []).forEach(ev => {
      if (spellIds.includes(ev.abilityGameID)) allEvents.push(ev);
    });
    if (!result.nextPageTimestamp || result.nextPageTimestamp >= fight.endTime) break;
    nextPageTimestamp = result.nextPageTimestamp;
  }
  return allEvents;
}

async function fetchAvoidableEvents(fight, spellIds) {
  const allEvents = [];
  let nextPageTimestamp = null;
  const ids = Object.keys(spellIds).map(Number);
  if (ids.length === 0) return allEvents;

  for (let page = 0; page < 10; page++) {
    const startTime = nextPageTimestamp !== null ? nextPageTimestamp : fight.startTime;
    const q = `query($code:String!,$start:Float!,$end:Float!,$fightIds:[Int]!){reportData{report(code:$code){
      events(startTime:$start,endTime:$end,fightIDs:$fightIds,dataType:DamageTaken,limit:300){data,nextPageTimestamp}
    }}}`;
    const data = await wclQuery(q, { code: reportCode, start: startTime, end: fight.endTime, fightIds: [fight.id] });
    const result = data.reportData.report.events;
    const events = result.data || [];
    events.forEach(ev => {
      if (ids.includes(ev.abilityGameID)) allEvents.push(ev);
    });
    if (!result.nextPageTimestamp || result.nextPageTimestamp >= fight.endTime) break;
    nextPageTimestamp = result.nextPageTimestamp;
  }
  return allEvents;
}
