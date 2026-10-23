import { MODULES, MODULE_BY_ID } from '../data/course.js';
import { QUIZZES } from '../data/quizzes.js';
import { state } from '../store.js';
import { esc, codeBlock, termBlock, fmtDateTime } from '../ui.js';
import { createQuiz } from './quiz.js';
import { mountLab } from './labs.js';

export function renderBlock(b) {
  switch (b.t) {
    case 'p':
      return `<div class="block"><div class="block-body">${b.x}</div></div>`;
    case 'h':
      return `<div class="block"><h2>${esc(b.x)}</h2></div>`;
    case 'ul':
      return `<div class="block"><div class="block-body"><ul>${b.x.map((i) => `<li>${i}</li>`).join('')}</ul></div></div>`;
    case 'ol':
      return `<div class="block"><div class="block-body"><ol>${b.x.map((i) => `<li>${i}</li>`).join('')}</ol></div></div>`;
    case 'code':
      return `<div class="block">${b.title ? `<h3>${esc(b.title)}</h3>` : ''}${codeBlock(b.x, b.lang || 'text', b.title)}</div>`;
    case 'term':
      return `<div class="block">${b.title ? `<h3>${esc(b.title)}</h3>` : ''}${termBlock(b.x, b.title || 'terminal')}</div>`;
    case 'table':
      return `<div class="block"><div class="table-wrap"><table class="tbl">
        <thead><tr>${b.head.map((h) => `<th>${esc(h)}</th>`).join('')}</tr></thead>
        <tbody>${b.rows.map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody>
      </table></div></div>`;
    case 'callout':
      return `<div class="block"><div class="callout ${b.v || 'info'}">
        <span class="co-ico">${b.v === 'legal' ? '⚖️' : b.v === 'danger' ? '☠' : b.v === 'warn' ? '⚠' : b.v === 'tip' ? '🛡️' : 'ℹ'}</span>
        <div>${b.title ? `<b class="co-title">${esc(b.title)}</b>` : ''}${b.x}</div>
      </div></div>`;
    case 'mini':
      return `<div class="block"><div class="mini-grid">${b.items.map((i) => `
        <div class="mini ${i.v || ''}"><h4>${esc(i.h)}</h4><p>${i.p}</p></div>`).join('')}</div></div>`;
    case 'steps':
      return `<div class="block"><div class="steps">${b.items.map((s) => `
        <div class="step"><h4>${esc(s.h)}</h4><p>${s.p}</p></div>`).join('')}</div></div>`;
    case 'lab':
      return `<div class="block"><div class="lab-slot" data-lab="${esc(b.id)}"></div></div>`;
    default:
      return '';
  }
}

function statusCard(mod) {
  const done = state.completed[mod.id];
  const quiz = QUIZZES[mod.quiz];
  const best = state.quizzes[mod.quiz]?.best ?? 0;
  const total = quiz?.questions.length || 0;
  if (done) {
    return `<div class="card glow" id="module-status" style="border-color:rgba(124,255,107,.35)">
      <div class="flex-between flex-wrap">
        <div class="flex">
          <div class="stat-ico lime" style="font-size:20px">✓</div>
          <div><b>Module validé</b><br><span class="small muted">Le ${fmtDateTime(done.at)} · meilleur score ${done.score}/${total}</span></div>
        </div>
        <span class="pill pill-lime">+${mod.xp} XP</span>
      </div>
    </div>`;
  }
  return `<div class="card" id="module-status">
    <div class="card-head"><h3 class="mb-0">Validation du module</h3><span class="spacer"></span><span class="pill pill-amber">En cours</span></div>
    <p class="small muted mb-2">Réussissez le quiz avec au moins <b>${quiz?.pass ?? 70} %</b> pour valider ce module et débloquer ses ${mod.xp} XP. Votre meilleur score actuel : <b>${best}/${total}</b>.</p>
    <div class="bar"><i style="width:${total ? Math.round((best / total) * 100) : 0}%"></i></div>
  </div>`;
}

export function moduleView(modId) {
  const mod = MODULE_BY_ID[modId];
  if (!mod) return null;
  const idx = MODULES.findIndex((m) => m.id === modId);
  const prev = MODULES[idx - 1];
  const next = MODULES[idx + 1];
  const quiz = QUIZZES[mod.quiz];
  const done = !!state.completed[modId];

  const html = `
    <div class="mod-head">
      <div class="kicker">Module ${mod.num} / ${MODULES.length} · ${esc(mod.short)}</div>
      <h1>${esc(mod.title)}</h1>
      <p class="mod-sub">${esc(mod.summary)}</p>
      <div class="mod-meta">
        <span class="pill ${done ? 'pill-lime' : 'pill-cyan'}">${done ? '✓ Validé' : 'À compléter'}</span>
        <span class="pill">${esc(mod.icon)} ${mod.duration} min</span>
        <span class="pill pill-amber">+${mod.xp} XP</span>
        <span class="pill">${quiz ? quiz.questions.length : 0} questions</span>
      </div>
    </div>

    <div class="objectives">
      <h3>Objectifs pédagogiques</h3>
      <ul>${mod.objectives.map((o) => `<li>${esc(o)}</li>`).join('')}</ul>
    </div>

    ${mod.blocks.map(renderBlock).join('')}

    <div class="section-title">Évaluation & validation</div>
    <div id="quiz-slot"></div>
    <div class="mt-2" id="status-wrap">${statusCard(mod)}</div>

    <div class="flex-between flex-wrap mt-3" style="gap:12px">
      ${prev ? `<a class="btn btn-ghost" href="#/module/${prev.id}">← ${esc(prev.short)}</a>` : '<span></span>'}
      ${next ? `<a class="btn" href="#/module/${next.id}">${esc(next.short)} →</a>` : `<a class="btn btn-primary" href="#/certificate">Générer mon certificat →</a>`}
    </div>`;

  return {
    title: `Module ${mod.num} — ${mod.short}`,
    html,
    mount(root) {
      root.querySelectorAll('.lab-slot').forEach((slot) => mountLab(slot, slot.dataset.lab));

      const slot = root.querySelector('#quiz-slot');
      if (slot && quiz) {
        const quizEl = createQuiz(mod.quiz, {
          onFinish: () => {
            const wrap = root.querySelector('#status-wrap');
            if (wrap) wrap.innerHTML = statusCard(mod);
            const top = root.querySelector('.mod-meta .pill');
            if (top && state.completed[mod.id]) {
              top.className = 'pill pill-lime';
              top.textContent = '✓ Validé';
            }
          }
        });
        slot.appendChild(quizEl);
      }
    }
  };
}
