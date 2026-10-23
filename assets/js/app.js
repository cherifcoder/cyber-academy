import { MODULES } from './data/course.js';
import {
  state, subscribe, toggleTheme, addStudy, resetProgress,
  globalProgress, completedCount, moduleProgress, levelInfo, save
} from './store.js';
import {
  esc, initials, fmtTime, confirmDialog, copyText
} from './ui.js';
import { initRouter, parseHash } from './router.js';
import { openProfileModal } from './views/profile.js';

/* ------------------------------- refs ------------------------------- */
const sidebar = document.getElementById('sidebar');
const nav = document.getElementById('nav');
const view = document.getElementById('view');
const scrim = document.getElementById('scrim');
const menuBtn = document.getElementById('menu-btn');
const themeBtn = document.getElementById('theme-btn');
const profileBtn = document.getElementById('profile-btn');
const resetBtn = document.getElementById('reset-btn');
const topbarTitle = document.getElementById('topbar-title');
const xpChip = document.getElementById('xp-chip');
const timeChip = document.getElementById('time-chip');
const sideProgress = document.getElementById('side-progress');
const sideProgressBar = document.getElementById('side-progress-bar');

let currentNav = 'dashboard';
let routerHandle = null;

/* ------------------------------- thème ------------------------------ */
function applyTheme() {
  document.documentElement.dataset.theme = state.theme === 'light' ? 'light' : 'dark';
  syncThemeButton();
}

function syncThemeButton() {
  const dark = state.theme !== 'light';
  themeBtn.textContent = dark ? '◐' : '☼';
  themeBtn.setAttribute('aria-label', dark ? 'Passer au thème clair' : 'Passer au thème sombre');
  themeBtn.title = dark ? 'Thème clair' : 'Thème sombre';
}

/* ------------------------------- nav -------------------------------- */
const navLink = (key, href, icon, label) => `
  <a href="${href}" data-nav="${key}">
    <span class="nav-ico" aria-hidden="true">${icon}</span>
    <span class="nav-txt">${esc(label)}</span>
  </a>`;

function renderNav() {
  const modules = MODULES.map((m) => {
    const p = moduleProgress(m.id);
    const done = !!state.completed[m.id];
    const label = p > 0 ? `${p}%` : '';
    return `<a href="#/module/${m.id}" data-nav="module:${m.id}" class="${done ? 'done' : ''}">
      <span class="nav-ico" aria-hidden="true">${m.icon}</span>
      <span class="nav-txt">${m.num}. ${esc(m.short)}</span>
      <span class="nav-count" ${label ? '' : 'hidden'}>${label}</span>
    </a>`;
  }).join('');

  nav.innerHTML = `
    <div class="nav-label">Général</div>
    ${navLink('dashboard', '#/', '◈', 'Tableau de bord')}

    <div class="nav-label">Parcours — <span id="nav-done">${completedCount()}</span>/${MODULES.length}</div>
    ${modules}

    <div class="nav-label">Pratique</div>
    ${navLink('labs', '#/labs', '⌬', 'Ateliers pratiques')}
    ${navLink('toolbox', '#/toolbox', '⚒', 'Boîte à outils')}
    ${navLink('flashcards', '#/flashcards', '▤', 'Flashcards')}

    <div class="nav-label">Suivi</div>
    ${navLink('report', '#/report', '▦', "Rapport d'audit")}
    ${navLink('certificate', '#/certificate', '◎', 'Certificat')}
    ${navLink('badges', '#/badges', '◆', 'Badges')}`;

  updateNavProgress();
  setActiveNav(currentNav);
}

function updateNavProgress() {
  const doneEl = document.getElementById('nav-done');
  if (doneEl) doneEl.textContent = completedCount();

  MODULES.forEach((m) => {
    const link = nav.querySelector(`a[data-nav="module:${m.id}"]`);
    if (!link) return;
    const done = !!state.completed[m.id];
    const p = moduleProgress(m.id);
    link.classList.toggle('done', done);
    const badge = link.querySelector('.nav-count');
    if (badge) {
      badge.textContent = p > 0 ? `${p}%` : '';
      badge.hidden = p <= 0;
    }
  });
}

function setActiveNav(key) {
  currentNav = key || '';
  nav.querySelectorAll('a[data-nav]').forEach((a) => {
    const on = a.dataset.nav === currentNav;
    a.classList.toggle('active', on);
    if (on) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  });
}

/* ------------------------------ topbar ------------------------------ */
function updateChrome() {
  xpChip.textContent = `${state.xp} XP`;
  timeChip.textContent = fmtTime(state.study.seconds);

  const lvl = levelInfo();
  const xpWrap = xpChip.closest('.chip');
  if (xpWrap) xpWrap.title = `${state.xp} XP · Niveau : ${lvl.name}`;

  const p = globalProgress();
  sideProgress.textContent = `${p} %`;
  sideProgressBar.style.width = `${p}%`;

  profileBtn.textContent = initials(state.user.name);
  profileBtn.title = state.user.name || 'Profil';
  profileBtn.setAttribute('aria-label', state.user.name ? `Profil de ${state.user.name}` : 'Profil utilisateur');
}

/* ------------------------------ drawer ------------------------------ */
function setMenu(open) {
  sidebar.classList.toggle('open', open);
  scrim.hidden = !open;
  menuBtn.setAttribute('aria-expanded', String(open));
}

/* ------------------------------ boot -------------------------------- */
let studyBuffer = 0;

function flushStudy() {
  if (studyBuffer > 0) {
    addStudy(studyBuffer);
    studyBuffer = 0;
    save(true);
  }
}

function startStudyTimer() {
  setInterval(() => {
    if (document.visibilityState !== 'visible') return;
    studyBuffer++;
    if (studyBuffer >= 15) flushStudy();
  }, 1000);

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') flushStudy();
  });
  window.addEventListener('pagehide', flushStudy);
}

function boot() {
  applyTheme();
  renderNav();
  updateChrome();
  startStudyTimer();

  routerHandle = initRouter(view, {
    onRender(result) {
      topbarTitle.textContent = result.title;
      setActiveNav(result.nav);
      updateNavProgress();
      updateChrome();
      setMenu(false);
    }
  });

  menuBtn.addEventListener('click', () => {
    setMenu(!sidebar.classList.contains('open'));
  });
  scrim.addEventListener('click', () => setMenu(false));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setMenu(false);
  });
  nav.addEventListener('click', (e) => {
    if (e.target.closest('a')) setMenu(false);
  });

  themeBtn.addEventListener('click', () => {
    toggleTheme();
    syncThemeButton();
  });

  profileBtn.addEventListener('click', openProfileModal);

  resetBtn.addEventListener('click', () => {
    confirmDialog(
      "Toute votre progression (XP, modules, badges, rapports, temps d'étude) sera définitivement effacée. Le thème et votre nom sont conservés.",
      () => {
        resetProgress();
        renderNav();
        updateChrome();
        if (routerHandle) routerHandle();
      },
      { confirmLabel: 'Tout effacer', title: 'Réinitialiser la progression' }
    );
  });

  // Copie des blocs de code (bouton « COPIER » généré par codeBlock()).
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.code [data-copy]');
    if (!btn) return;
    const code = btn.closest('.code')?.querySelector('pre code');
    if (code) copyText(code.textContent || '');
  });

  subscribe((type) => {
    updateChrome();
    if (type === 'theme') {
      syncThemeButton();
      return;
    }
    if (type === 'study') return;
    updateNavProgress();
  });

  window.addEventListener('ca:profile-changed', () => {
    renderNav();
    updateChrome();
    const route = parseHash(location.hash);
    if ((route.name === 'dashboard' || route.name === 'certificate') && routerHandle) {
      routerHandle();
    }
  });

  // les toasts de badges sont émis par le store
  window.addEventListener('ca:quiz-passed', () => {
    updateNavProgress();
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
