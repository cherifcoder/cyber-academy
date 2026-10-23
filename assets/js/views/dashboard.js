import { MODULES, TOTAL_XP } from '../data/course.js';
import { BADGES } from '../data/badges.js';
import { QUIZZES } from '../data/quizzes.js';
import {
  state, globalProgress, completedCount, currentModule, moduleProgress,
  levelInfo, badgeStats
} from '../store.js';
import { esc, fmtTime, relTime, pct } from '../ui.js';
import { openProfileModal } from './profile.js';

export function renderDashboard() {
  const name = state.user.name || 'Apprenti';
  const progress = globalProgress();
  const done = completedCount();
  const lvl = levelInfo();
  const badges = badgeStats();
  const next = currentModule();
  const nextProgress = moduleProgress(next.id);
  const quiz = QUIZZES[next.quiz];

  const unlocked = BADGES.filter((b) => state.badges.includes(b.id));
  const locked = BADGES.filter((b) => !state.badges.includes(b.id));
  const shownBadges = [...unlocked.slice(-4).reverse(), ...locked.slice(0, 4)];

  const html = `
    <section class="hero">
      <div>
        <div class="hero-kicker">◈ Parcours Web Pentest &amp; Security</div>
        <h1>Bonjour ${esc(name)}, <span>prêt à auditer ?</span></h1>
        <p>Huit modules pour apprendre le pentest web, de la reconnaissance au rapport d'audit, et la défense applicative. Tout se pratique dans des environnements de laboratoire autorisés.</p>
        <div class="hero-actions">
          <a class="btn btn-primary btn-lg" href="#/module/${next.id}">
            ${done === 0 ? 'Commencer le parcours' : done >= MODULES.length ? 'Revoir le parcours' : 'Reprendre le parcours'} →
          </a>
          <a class="btn btn-ghost btn-lg" href="#/toolbox">Boîte à outils</a>
          ${!state.user.name ? '<button class="btn btn-ghost btn-lg" id="dash-profile" type="button">Personnaliser</button>' : ''}
        </div>
      </div>
      <div class="hero-side">
        <div class="ring" style="--p:${progress}">
          <div class="ring-in"><b>${progress}%</b><small>progression</small></div>
        </div>
        <div class="hero-level">
          <b>${esc(lvl.name)}</b>
          <small>${lvl.next ? `${lvl.toNext} XP avant ${esc(lvl.next.name)}` : 'Niveau maximal atteint'}</small>
        </div>
      </div>
    </section>

    <div class="grid grid-4 mt-3">
      <div class="stat">
        <div class="stat-ico lime">✓</div>
        <div class="stat-body"><b>${done}<span class="dim" style="font-size:14px">/${MODULES.length}</span></b><small>Modules validés</small></div>
      </div>
      <div class="stat">
        <div class="stat-ico">✦</div>
        <div class="stat-body"><b>${state.xp}</b><small>Points XP</small></div>
      </div>
      <div class="stat">
        <div class="stat-ico magenta">◷</div>
        <div class="stat-body"><b>${fmtTime(state.study.seconds)}</b><small>Temps d'étude</small></div>
      </div>
      <div class="stat">
        <div class="stat-ico amber">🎖️</div>
        <div class="stat-body"><b>${badges.unlocked}<span class="dim" style="font-size:14px">/${badges.total}</span></b><small>Badges débloqués</small></div>
      </div>
    </div>

    <div class="section-title">Prochaine étape</div>
    <div class="card glow" style="display:grid;grid-template-columns:1fr auto;gap:20px;align-items:center">
      <div>
        <div class="flex" style="gap:10px;flex-wrap:wrap">
          <span class="pill pill-cyan">Module ${next.num}</span>
          <span class="pill">${next.duration} min</span>
          <span class="pill pill-amber">+${next.xp} XP</span>
          ${nextProgress > 0 ? `<span class="pill pill-lime">${nextProgress}% effectué</span>` : ''}
        </div>
        <h2 class="mt-1" style="font-size:21px">${esc(next.title)}</h2>
        <p class="muted small mb-2" style="max-width:75ch">${esc(next.summary)}</p>
        <div class="bar" style="max-width:420px"><i style="width:${nextProgress}%"></i></div>
      </div>
      <a class="btn btn-primary" href="#/module/${next.id}">${nextProgress > 0 ? 'Continuer' : 'Ouvrir'} →</a>
    </div>

    <div class="section-title">Parcours complet</div>
    <div class="grid grid-auto">
      ${MODULES.map((m) => {
        const p = moduleProgress(m.id);
        const isDone = !!state.completed[m.id];
        const q = QUIZZES[m.quiz];
        return `<a class="mod-card ${isDone ? 'done' : ''}" href="#/module/${m.id}">
          <div class="mc-top">
            <div class="mc-num">${isDone ? '✓' : String(m.num).padStart(2, '0')}</div>
            <div style="flex:1;min-width:0">
              <div class="mc-title">${esc(m.short)}</div>
              <div class="mc-sub">${m.duration} min · ${q ? q.questions.length : 0} questions</div>
            </div>
            ${isDone ? '<span class="mc-check">✓</span>' : ''}
          </div>
          <div class="mc-desc">${esc(m.summary.split('.')[0])}.</div>
          <div class="bar bar-sm"><i style="width:${p}%"></i></div>
          <div class="mc-foot"><span>${m.icon} Module ${m.num}</span><span class="spacer"></span><span>${p}%</span></div>
        </a>`;
      }).join('')}
    </div>

    <div class="grid grid-2 mt-3" style="align-items:start">
      <div class="card">
        <div class="card-head">
          <h3 class="mb-0">Badges</h3>
          <span class="spacer"></span>
          <a class="small" href="#/badges">Tout voir →</a>
        </div>
        <div class="grid" style="gap:10px">
          ${shownBadges.map((b) => {
            const on = state.badges.includes(b.id);
            return `<div class="badge-card ${on ? 'unlocked' : ''}">
              <div class="badge-ico">${on ? b.icon : '🔒'}</div>
              <div style="min-width:0"><b>${esc(b.name)}</b><small>${esc(on ? b.desc : b.hint)}</small></div>
            </div>`;
          }).join('')}
        </div>
      </div>

      <div class="grid" style="gap:16px">
        <div class="card">
          <div class="card-head"><h3 class="mb-0">Activité récente</h3></div>
          ${state.activity.length ? `<div class="activity">
            ${state.activity.slice(0, 6).map((a) => `<div class="act-row"><span class="act-dot"></span><span>${esc(a.text)}</span><time>${relTime(a.at)}</time></div>`).join('')}
          </div>` : `<div class="empty" style="padding:26px"><span class="empty-ico">◌</span>Aucune activité pour le moment.<br><span class="small">Ouvrez un module pour commencer.</span></div>`}
        </div>

        <div class="card" style="background:linear-gradient(150deg,rgba(255,200,87,.08),var(--bg-2));border-color:rgba(255,200,87,.3)">
          <div class="flex-between flex-wrap" style="gap:12px">
            <div>
              <span class="pill pill-amber">Certificat</span>
              <h3 class="mt-1 mb-0" style="font-size:17px">Certificat de fin de parcours</h3>
              <p class="small muted mb-0">${done}/${MODULES.length} modules validés. Générez un certificat à votre nom, téléchargeable en PNG ou imprimable.</p>
            </div>
            <a class="btn" href="#/certificate">Générer</a>
          </div>
        </div>

        <div class="card pad-sm">
          <div class="flex-between">
            <div><b style="font-size:13.5px">Profil</b><br><span class="small muted">${esc(state.user.name || 'Nom non défini')}</span></div>
            <button class="btn btn-sm btn-ghost" id="dash-edit-profile" type="button">Modifier</button>
          </div>
        </div>
      </div>
    </div>

    <p class="small dim center mt-3" style="max-width:80ch;margin-left:auto;margin-right:auto">
      Cyber Academy est une plateforme pédagogique. Les techniques présentées doivent être utilisées exclusivement dans des environnements de laboratoire (DVWA, Juice Shop, WebGoat, Metasploitable, CTF) ou dans le cadre d'une mission écrite et autorisée.
    </p>`;

  return {
    title: 'Tableau de bord',
    html,
    mount(root) {
      root.querySelector('#dash-profile')?.addEventListener('click', openProfileModal);
      root.querySelector('#dash-edit-profile')?.addEventListener('click', openProfileModal);
    }
  };
}
