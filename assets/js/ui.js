/* Helpers UI partagés */

export const qs = (sel, root = document) => root.querySelector(sel);
export const qsa = (sel, root = document) => Array.from(root.querySelectorAll(sel));

export function esc(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function attr(value) { return esc(value); }

const PATTERNS = {
  bash: /(#[^\n]*)|('(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*")|(\b(?:sudo|apt|cd|ls|cat|grep|egrep|find|curl|wget|nmap|dig|whois|chmod|chown|echo|for|do|done|if|then|fi|else|export|source|python3|go|npm|npx|git|docker|systemctl|ss|ps|id|whoami|uname|getcap|systemctl|journalctl|useradd|userdel|rm|cp|mv|mkdir|tar|zip|unzip|base64|openssl|ssh|scp|nc)\b)|(\b\d+(?:\.\d+)?\b)/g,
  http: /(^[A-Z]{3,7} \S+ HTTP\/[\d.]+$)|(^[A-Za-z-]+:.*$)|(\b\d{3}\b)/gm,
  sql: /(--[^\n]*)|('(?:\\.|[^'\\])*')|(\b(?:SELECT|FROM|WHERE|UNION|INSERT|UPDATE|DELETE|DROP|CREATE|TABLE|AND|OR|ORDER|GROUP|LIMIT|OFFSET|JOIN|ON|NULL|SLEEP|EXEC|xp_cmdshell)\b)|(\b\d+\b)/gi,
  php: /(\/\/[^\n]*|#[^\n]*|\/\*[\s\S]*?\*\/)|('(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*")|(\$[A-Za-z_]\w*|\b(?:function|return|if|else|foreach|for|while|include|require|echo|new|class|public|private|static|use|namespace|true|false|null)\b)|(\b\d+\b)/g,
  javascript: /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|('(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*"|`(?:\\.|[^`\\])*`)|(\b(?:const|let|var|function|return|if|else|for|while|await|async|import|export|from|new|class|try|catch|throw|true|false|null|undefined|typeof|of|in)\b)|(\b\d+\b)/g,
  xml: /(<!--[\s\S]*?-->)|('(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*")|(<\/?[\w:-]+|\/?>|<!DOCTYPE|<!ENTITY|SYSTEM|PUBLIC)|(\b\d+\b)/g,
  html: /(<!--[\s\S]*?-->)|('[^']*'|"[^"]*")|(<\/?[\w:-]+|\/?>)|(\b\d+\b)/g,
  powershell: /(#[^\n]*)|('(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*")|(\b(?:Get|Set|New|Remove|Where|Select|ForEach|If|Else|Try|Catch|Write|whoami|reg|wmic|icacls|cmdkey|systeminfo|net)\b)|(\b\d+\b)/gi,
  nginx: /(#[^\n]*)|('(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*")|(\b(?:server|listen|server_name|add_header|location|root|proxy_pass|if|return|include|ssl_protocols|ssl_ciphers|server_tokens)\b)|(\b\d+\b)/g,
  text: /(#[^\n]*)|('(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*")|(\b(?:AV|AC|PR|UI|S|C|I|A|CVSS|Impact|Exploitability|ISS|Roundup)\b)|(\b\d+(?:\.\d+)?\b)/g
};

export function highlight(code, lang = 'text') {
  const re = PATTERNS[lang];
  if (!re) return esc(code);
  re.lastIndex = 0;
  let out = '';
  let last = 0;
  let m;
  let guard = 0;
  while ((m = re.exec(String(code))) && guard++ < 20000) {
    out += esc(String(code).slice(last, m.index));
    const cls = m[1] ? 'tok-c' : m[2] ? 'tok-s' : m[3] ? 'tok-k' : 'tok-n';
    out += `<span class="${cls}">${esc(m[0])}</span>`;
    last = m.index + m[0].length;
    if (m[0].length === 0) re.lastIndex++;
  }
  out += esc(String(code).slice(last));
  return out;
}

export function codeBlock(code, lang = 'text', title = '') {
  const label = title || lang.toUpperCase();
  return `<div class="code">
    <div class="code-head"><span class="code-dots" aria-hidden="true"><i></i><i></i><i></i></span><span>${esc(label)}</span><button class="code-copy" type="button" data-copy>COPIER</button></div>
    <pre><code>${highlight(code, lang)}</code></pre>
  </div>`;
}

export function termBlock(lines, title = 'terminal') {
  const body = lines.map((l) => {
    if (typeof l === 'string') return `<div class="term-line">${l}</div>`;
    let html = '';
    if (l.cmd !== undefined) {
      html += `<div class="term-line"><span class="p">$</span> <span class="cmd">${esc(l.cmd)}</span></div>`;
    }
    (l.out || []).forEach((o) => {
      const cls = o.startsWith('!!') ? 'err' : o.startsWith('~~') ? 'warn' : o.startsWith('++') ? 'ok' : o.startsWith('##') ? 'hl' : o.startsWith('..') ? 'mut' : '';
      const txt = cls ? o.slice(2) : o;
      html += `<div class="term-line"><span class="${cls}">${esc(txt)}</span></div>`;
    });
    return html;
  }).join('');
  return `<div class="term">
    <div class="term-head"><span aria-hidden="true">▚</span> ${esc(title)} <span class="spacer"></span> lab</div>
    <div class="term-body">${body}</div>
  </div>`;
}

let toastTimer = 0;
export function toast(message, type = 'info', icon) {
  const root = document.getElementById('toast-root');
  if (!root) return;
  const ico = icon || (type === 'success' ? '✓' : type === 'error' ? '✕' : type === 'xp' ? '✦' : 'ℹ');
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.innerHTML = `<span class="t-ico" aria-hidden="true">${esc(ico)}</span><div>${message}</div>`;
  root.appendChild(el);
  const id = ++toastTimer;
  setTimeout(() => {
    if (id > 0) el.classList.add('out');
    setTimeout(() => el.remove(), 260);
  }, type === 'xp' ? 3200 : 3600);
}

export function openModal({ title, body, footer = '', wide = false, onMount }) {
  const root = document.getElementById('modal-root');
  root.innerHTML = `<div class="modal-scrim" data-close>
    <div class="modal ${wide ? 'wide' : ''}" role="dialog" aria-modal="true" aria-label="${attr(title)}">
      <div class="modal-head"><h3>${esc(title)}</h3><button class="modal-close" type="button" data-close aria-label="Fermer">×</button></div>
      <div class="modal-body">${body}</div>
      ${footer ? `<div class="modal-actions">${footer}</div>` : ''}
    </div>
  </div>`;
  const scrim = root.firstElementChild;
  const close = () => { root.innerHTML = ''; document.removeEventListener('keydown', onKey); };
  const onKey = (e) => { if (e.key === 'Escape') close(); };
  scrim.addEventListener('click', (e) => {
    if (e.target.hasAttribute('data-close')) close();
  });
  document.addEventListener('keydown', onKey);
  scrim.querySelector('.modal-close')?.focus();
  if (onMount) onMount(scrim, close);
  return { root: scrim, close };
}

export function confirmDialog(message, onConfirm, { danger = true, title = 'Confirmer', confirmLabel = 'Confirmer' } = {}) {
  const { root, close } = openModal({
    title,
    body: `<p class="muted" style="margin:0">${message}</p>`,
    footer: `<button class="btn btn-ghost" data-cancel type="button">Annuler</button><button class="btn ${danger ? 'btn-danger' : 'btn-primary'}" data-ok type="button">${esc(confirmLabel)}</button>`
  });
  root.querySelector('[data-cancel]').addEventListener('click', close);
  root.querySelector('[data-ok]').addEventListener('click', () => { close(); onConfirm(); });
}

export async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    toast('Copié dans le presse-papiers', 'success');
  } catch {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); toast('Copié', 'success'); }
    catch { toast('Copie impossible', 'error'); }
    ta.remove();
  }
}

export function downloadFile(filename, content, mime = 'text/plain;charset=utf-8') {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}

export function fmtTime(seconds) {
  const s = Math.max(0, Math.round(seconds));
  if (s < 60) return `${s} s`;
  const m = Math.floor(s / 60);
  if (m < 60) return `${m} min`;
  const h = Math.floor(m / 60);
  const rm = m % 60;
  return rm ? `${h} h ${rm} min` : `${h} h`;
}

export function fmtDate(ts = Date.now()) {
  return new Date(ts).toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' });
}

export function fmtDateTime(ts = Date.now()) {
  return new Date(ts).toLocaleString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
}

export function relTime(ts) {
  const diff = Date.now() - ts;
  const min = Math.floor(diff / 60000);
  if (min < 1) return "à l'instant";
  if (min < 60) return `il y a ${min} min`;
  const h = Math.floor(min / 60);
  if (h < 24) return `il y a ${h} h`;
  const d = Math.floor(h / 24);
  if (d < 30) return `il y a ${d} j`;
  return fmtDate(ts);
}

export function pct(part, total) {
  if (!total) return 0;
  return Math.max(0, Math.min(100, Math.round((part / total) * 100)));
}

export function printHtml(html) {
  const root = document.getElementById('print-root');
  root.innerHTML = html;
  window.print();
  setTimeout(() => { root.innerHTML = ''; }, 800);
}

export function initials(name) {
  const n = (name || '').trim();
  if (!n) return 'R';
  return n.split(/\s+/).slice(0, 2).map((w) => w[0]).join('').toUpperCase();
}
