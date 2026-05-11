async function loadRefKill() {
  const url = document.getElementById('refReportUrl').value.trim();
  const fightId = parseInt(document.getElementById('refFightId').value.trim());
  const statusEl = document.getElementById('refKillStatus');

  if (!url && !fightId) { statusEl.textContent = 'Enter a report URL and fight ID.'; return; }
  const code = extractCode(url);
  if (!code) { statusEl.textContent = 'Could not parse report code from URL.'; return; }
  if (!fightId) { statusEl.textContent = 'Enter the fight ID (from ?fight= in the URL).'; return; }

  statusEl.style.color = 'var(--muted)';
  statusEl.textContent = 'Fetching kill data...';

  try {
    const q1 = `query($code:String!){reportData{report(code:$code){
      fights(killType:All){id,startTime,endTime,kill,encounterID}
    }}}`;
    const d1 = await wclQuery(q1, { code });
    const fight = (d1.reportData.report.fights || []).find(f => f.id === fightId);
    if (!fight) { statusEl.textContent = `Fight ID ${fightId} not found in that report.`; statusEl.style.color = 'var(--danger)'; return; }
    if (!fight.kill) { statusEl.textContent = `Fight ${fightId} is not a kill. Please use a kill.`; statusEl.style.color = 'var(--warn)'; return; }

    const q2 = `query($code:String!,$start:Float!,$end:Float!,$fightIds:[Int]!){reportData{report(code:$code){
      table(startTime:$start,endTime:$end,fightIDs:$fightIds,dataType:DamageTaken,killType:All)
    }}}`;
    const d2 = await wclQuery(q2, { code, start: fight.startTime, end: fight.endTime, fightIds: [fightId] });
    const raw = d2.reportData.report.table;
    const parsed = raw ? (typeof raw === 'string' ? JSON.parse(raw) : raw) : {};
    const tableData = parsed.data || parsed;

    const abilities = new Set();
    if (tableData && tableData.entries) {
      tableData.entries.forEach(entry => {
        if (entry.abilities) {
          entry.abilities.forEach(ab => { if (ab.name) abilities.add(ab.name); });
        }
      });
    }

    refKillAbilities = abilities;
    statusEl.style.color = 'var(--ok)';
    statusEl.textContent = `Loaded. ${abilities.size} abilities found in kill log.`;
    console.log('Reference kill abilities:', [...abilities].sort().join(', '));
  } catch(e) {
    statusEl.style.color = 'var(--danger)';
    statusEl.textContent = 'Failed: ' + e.message;
  }
}

async function loadReport() {
  clearError();
  document.getElementById('resultsSection').classList.add('hidden');
  document.getElementById('fightSection').classList.add('hidden');
  document.getElementById('pullSection').classList.add('hidden');
  document.getElementById('analyzeSection').classList.add('hidden');
  accessToken = null;

  const url = document.getElementById('reportUrl').value.trim();
  reportCode = extractCode(url);
  if (!reportCode) { showError('Could not find a report code in that URL. It should look like /reports/AbCdEfGh'); return; }

  showStatus('Authenticating with WarcraftLogs...');
  try { accessToken = await getToken(); } catch(e) { hideStatus(); showError(e.message); return; }

  showStatus('Loading report fights...');
  try {
    const q1 = `query($code:String!){reportData{report(code:$code){
      fights(killType:All){id,name,encounterID,startTime,endTime,kill,fightPercentage,difficulty}
    }}}`;
    const data1 = await wclQuery(q1, { code: reportCode });
    const report1 = data1.reportData.report;
    allFights = (report1.fights || []).filter(f => f.encounterID && f.encounterID > 0);

    actors = [];
    if (allFights.length > 0) {
      showStatus('Loading player roster...');
      try {
        const q2 = `query($code:String!){reportData{report(code:$code){
          masterData{
            actors(type:"Player"){id,name,subType,server}
          }
        }}}`;
        const data2 = await wclQuery(q2, { code: reportCode });
        const masterActors = data2.reportData.report.masterData.actors || [];
        masterActors.forEach(a => actors.push({
          id: a.id,
          name: a.name,
          subType: a.subType,
          server: a.server,
          role: null
        }));
        console.log(`Loaded ${actors.length} players from masterData`);
      } catch(e) { console.warn('Could not load masterData actors:', e.message); }
    }

    const bossMap = {};
    allFights.forEach(f => { if (!bossMap[f.encounterID]) bossMap[f.encounterID] = f.name; });

    const sel = document.getElementById('fightSelect');
    sel.innerHTML = '<option value="">-- choose a boss --</option>';
    Object.entries(bossMap).forEach(([id, name]) => {
      const opt = document.createElement('option');
      opt.value = id; opt.textContent = name;
      sel.appendChild(opt);
    });

    document.getElementById('fightSection').classList.remove('hidden');
    hideStatus();
    if (Object.keys(bossMap).length === 0) showError('No boss fights found in this report.');
  } catch(e) { hideStatus(); showError('Failed to load report: ' + e.message); }
}

function onFightChange() {
  const encId = parseInt(document.getElementById('fightSelect').value);
  if (!encId) return;
  currentEncounterId = encId;
  const pulls = allFights.filter(f => f.encounterID === encId);
  selectedPulls = new Set(pulls.map(f => f.id));
  renderPullTags(pulls);
  document.getElementById('pullSection').classList.remove('hidden');
  document.getElementById('analyzeSection').classList.remove('hidden');
  document.getElementById('refKillSection').classList.remove('hidden');
  document.getElementById('resultsSection').classList.add('hidden');
  refKillAbilities = null;
  document.getElementById('refKillStatus').textContent = '';
  document.getElementById('refKillStatus').style.color = 'var(--muted)';
}

function renderPullTags(pulls) {
  const container = document.getElementById('pullTags');
  container.innerHTML = '';
  pulls.forEach((f, i) => {
    const tag = document.createElement('span');
    const isKill = f.kill;
    // fightPercentage = boss HP remaining (e.g. 19 means boss was at 19% HP remaining)
    const pct = isKill ? 'Kill' : (f.fightPercentage != null ? `${f.fightPercentage.toFixed(0)}% left` : '?');
    tag.className = 'tag' + (selectedPulls.has(f.id) ? ' active' : '') + (isKill ? ' kill' : '');
    tag.textContent = `P${i+1} ${pct}`;
    tag.title = `Fight ID: ${f.id}`;
    tag.dataset.id = f.id;
    tag.dataset.kill = isKill ? '1' : '0';
    tag.onclick = () => {
      if (selectedPulls.has(f.id)) selectedPulls.delete(f.id);
      else selectedPulls.add(f.id);
      tag.className = 'tag' + (selectedPulls.has(f.id) ? ' active' : '') + (isKill ? ' kill' : '');
    };
    container.appendChild(tag);
  });
}

function selectAllPulls() {
  allFights.filter(f => f.encounterID === currentEncounterId).forEach(f => selectedPulls.add(f.id));
  renderPullTags(allFights.filter(f => f.encounterID === currentEncounterId));
}
function clearPulls() {
  selectedPulls.clear();
  renderPullTags(allFights.filter(f => f.encounterID === currentEncounterId));
}
function selectWipesOnly() {
  const pulls = allFights.filter(f => f.encounterID === currentEncounterId);
  selectedPulls = new Set(pulls.filter(f => !f.kill).map(f => f.id));
  renderPullTags(pulls);
}
