import { LABS, mountLab } from './labs.js';
import { MODULES } from '../data/course.js';
import { state } from '../store.js';
import { esc } from '../ui.js';

export function renderLabsPage() {
  const doneCount = LABS.filter((l) => state.labs[l.id]?.done).length;
  const html = `
    <div class="mod-head">
      <div class="kicker">Pratique</div>
      <h1>Ateliers interactifs</h1>
      <p class="mod-sub">Dix simulateurs pour manipuler les concepts sans risque : analyse Nmap, fuzzing, SQLi, XSS, falsification de requête, élévation de privilèges, CVSS, durcissement et identités réseau (IP, MAC, IMEI).</p>
      <div class="mod-meta">
        <span class="pill pill-lime">${doneCount}/${LABS.length} terminés</span>
        <span class="pill pill-amber">+20 XP par atelier</span>
      </div>
    </div>
    <div class="grid grid-auto">
      ${LABS.map((l) => {
        const done = state.labs[l.id]?.done;
        return `<a class="mod-card ${done ? 'done' : ''}" href="#/lab/${l.id}">
          <div class="mc-top">
            <div class="mc-num">${done ? '✓' : l.icon}</div>
            <div style="flex:1;min-width:0">
              <div class="mc-title">${esc(l.title)}</div>
              <div class="mc-sub">${esc(l.tag)}</div>
            </div>
          </div>
          <div class="mc-desc">${esc(l.desc)}</div>
          <div class="mc-foot"><span>${done ? 'Validé' : 'À pratiquer'}</span><span class="spacer"></span><span>+20 XP</span></div>
        </a>`;
      }).join('')}
    </div>
    <div class="callout legal mt-3">
      <span class="co-ico">⚖️</span>
      <div><b class="co-title">Cadre d'utilisation</b>
      Ces simulateurs n'émettent aucune requête réseau réelle. Les techniques présentées doivent être reproduites uniquement sur des applications volontairement vulnérables ou dans le cadre d'une autorisation écrite.</div>
    </div>`;
  return { title: 'Ateliers', html };
}

export function renderLabPage(id) {
  const meta = LABS.find((l) => l.id === id);
  if (!meta) {
    return { title: 'Atelier introuvable', html: `<div class="empty"><span class="empty-ico">⚠</span>Atelier inconnu.<br><a href="#/labs">Retour aux ateliers</a></div>` };
  }
  const module = MODULES.find((m) => m.blocks.some((b) => b.t === 'lab' && b.id === id));
  const done = state.labs[id]?.done;
  const html = `
    <div class="flex-between flex-wrap mb-2" style="gap:10px">
      <a class="btn btn-ghost btn-sm" href="#/labs">← Ateliers</a>
      <span class="pill ${done ? 'pill-lime' : 'pill-amber'}">${done ? '✓ Validé' : 'Non validé'} · +20 XP</span>
    </div>
    <div class="mod-head">
      <div class="kicker">${esc(meta.tag)}</div>
      <h1>${esc(meta.title)}</h1>
      <p class="mod-sub">${esc(meta.desc)}</p>
      ${module ? `<div class="mod-meta"><span class="pill">Module ${module.num} — ${esc(module.short)}</span><a class="pill pill-cyan" href="#/module/${module.id}">Ouvrir le module →</a></div>` : ''}
    </div>
    <div id="lab-mount"></div>
    <div class="callout legal mt-3">
      <span class="co-ico">⚖️</span>
      <div><b class="co-title">Rappel</b>Cet atelier est une simulation pédagogique. Aucune cible réelle n'est contactée.</div>
    </div>`;
  return {
    title: meta.title,
    html,
    mount(root) {
      mountLab(root.querySelector('#lab-mount'), id, {
        onDone: () => {
          const badge = root.querySelector('.pill.pill-amber');
          if (badge) { badge.className = 'pill pill-lime'; badge.textContent = '✓ Validé · +20 XP'; }
        }
      });
    }
  };
}
