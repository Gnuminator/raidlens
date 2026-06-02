// Persists credentials and common inputs to localStorage so they survive page reloads.
// This is a private single-user tool: values (INCLUDING API keys and the WCL secret) are
// stored UNENCRYPTED in this browser only, never transmitted anywhere. The "Remember"
// toggle controls whether anything is written. All access is wrapped in try/catch so the
// tool degrades gracefully when localStorage is unavailable (e.g. some file:// contexts).

const RL_STORAGE_KEY = 'raidlens.settings.v1';

// Input element IDs that get persisted.
const RL_PERSIST_FIELDS = ['clientId', 'clientSecret', 'anthropicKey', 'reportUrl', 'refReportUrl', 'refFightId'];

function rlStorageAvailable() {
  try {
    const t = '__rl_test__';
    localStorage.setItem(t, '1');
    localStorage.removeItem(t);
    return true;
  } catch (e) {
    return false;
  }
}

function saveSettings() {
  if (!rlStorageAvailable()) return;
  const toggle = document.getElementById('rememberToggle');
  if (toggle && !toggle.checked) return;
  const data = {};
  RL_PERSIST_FIELDS.forEach(id => {
    const el = document.getElementById(id);
    if (el) data[id] = el.value;
  });
  try { localStorage.setItem(RL_STORAGE_KEY, JSON.stringify(data)); } catch (e) { /* quota / blocked */ }
}

function loadSettings() {
  if (!rlStorageAvailable()) return false;
  let data;
  try { data = JSON.parse(localStorage.getItem(RL_STORAGE_KEY) || 'null'); } catch (e) { data = null; }
  if (!data) return false;
  let loadedAny = false;
  RL_PERSIST_FIELDS.forEach(id => {
    const el = document.getElementById(id);
    if (el && typeof data[id] === 'string' && data[id] !== '') { el.value = data[id]; loadedAny = true; }
  });
  return loadedAny;
}

function clearSettings() {
  try { localStorage.removeItem(RL_STORAGE_KEY); } catch (e) { /* ignore */ }
  // Wipe the sensitive fields from the form too; leave URLs so the user can keep working.
  ['clientSecret', 'anthropicKey'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  const note = document.getElementById('storageNote');
  if (note) note.textContent = 'Saved data cleared from this device.';
}

function initStorage() {
  const note = document.getElementById('storageNote');
  if (!rlStorageAvailable()) {
    if (note) note.textContent = 'Local storage unavailable here — settings will not persist.';
    return;
  }
  const loaded = loadSettings();
  if (note && loaded) note.textContent = 'Loaded saved settings from this device.';

  RL_PERSIST_FIELDS.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', saveSettings);
  });

  const toggle = document.getElementById('rememberToggle');
  if (toggle) {
    toggle.addEventListener('change', () => {
      if (toggle.checked) { saveSettings(); if (note) note.textContent = 'Remembering on this device.'; }
      else { clearSettings(); }
    });
  }
}

// Scripts load at the end of <body>, so this listener still fires after parsing.
document.addEventListener('DOMContentLoaded', initStorage);
