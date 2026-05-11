function showStatus(msg) {
  document.getElementById('statusDiv').classList.add('visible');
  document.getElementById('statusText').textContent = msg;
}
function hideStatus() {
  document.getElementById('statusDiv').classList.remove('visible');
}
function showError(msg) {
  const el = document.getElementById('errorDiv');
  el.textContent = msg;
  el.classList.add('visible');
}
function clearError() {
  const el = document.getElementById('errorDiv');
  el.textContent = '';
  el.classList.remove('visible');
}

function extractCode(url) {
  const m = url.match(/reports\/([A-Za-z0-9]+)/);
  return m ? m[1] : null;
}

function fmt(n) {
  if (n >= 1e9) return (n/1e9).toFixed(1) + 'B';
  if (n >= 1e6) return (n/1e6).toFixed(1) + 'M';
  if (n >= 1e3) return Math.round(n/1e3) + 'k';
  return String(Math.round(n));
}

function fmtTs(ms) {
  const m = Math.floor(ms / 60000);
  const s = Math.floor((ms % 60000) / 1000);
  return `${m}:${s.toString().padStart(2,'0')}`;
}

function toggleExpand(id) {
  const el = document.getElementById(id);
  const chevron = document.getElementById(id + '-chevron');
  if (!el) return;
  const open = el.style.display !== 'none';
  el.style.display = open ? 'none' : 'block';
  if (chevron) chevron.textContent = open ? '▶' : '▼';
}
