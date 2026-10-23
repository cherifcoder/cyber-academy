import { renderDashboard } from './views/dashboard.js';
import { moduleView } from './views/module.js';
import { renderLabsPage, renderLabPage } from './views/labsPage.js';
import { renderToolbox } from './views/toolbox.js';
import { renderFlashcards } from './views/flashcards.js';
import { renderBadges } from './views/badges.js';
import { renderCertificate } from './views/certificate.js';
import { renderReport } from './views/report.js';
import { esc } from './ui.js';

function notFound(route) {
  const label = route?.id || (route?.name && route.name !== 'not-found' && route.name !== 'dashboard' ? route.name : '');
  return {
    title: 'Page introuvable',
    nav: '',
    route: route || { name: 'not-found' },
    html: `<div class="empty" style="margin-top:48px">
      <span class="empty-ico">⚠</span>
      <h2>Page introuvable</h2>
      <p class="muted">${label
        ? `La section « ${esc(label)} » est introuvable.`
        : 'Cette adresse ne correspond à aucune section de Cyber Academy.'}</p>
      <a class="btn btn-primary" href="#/">Retour au tableau de bord</a>
    </div>`
  };
}

export function parseHash(hash) {
  const clean = String(hash || '').replace(/^#/, '').split('?')[0];
  if (!clean || clean === '/') return { name: 'dashboard', nav: 'dashboard' };
  const seg = clean.split('/').filter(Boolean);

  if (seg[0] === 'module' && seg[1]) return { name: 'module', id: decodeURIComponent(seg[1]), nav: `module:${seg[1]}` };
  if (seg[0] === 'lab' && seg[1]) return { name: 'lab', id: decodeURIComponent(seg[1]), nav: 'labs' };
  if (seg[0] === 'labs') return { name: 'labs', nav: 'labs' };
  if (seg[0] === 'toolbox') return { name: 'toolbox', nav: 'toolbox' };
  if (seg[0] === 'flashcards') return { name: 'flashcards', nav: 'flashcards' };
  if (seg[0] === 'badges') return { name: 'badges', nav: 'badges' };
  if (seg[0] === 'certificate') return { name: 'certificate', nav: 'certificate' };
  if (seg[0] === 'report') return { name: 'report', nav: 'report' };
  return { name: 'not-found', nav: '' };
}

function build(route) {
  switch (route.name) {
    case 'dashboard':
      return { ...renderDashboard(), nav: route.nav, route };
    case 'module': {
      const view = moduleView(route.id);
      if (!view) return null;
      return { ...view, nav: `module:${route.id}`, route };
    }
    case 'labs':
      return { ...renderLabsPage(), nav: route.nav, route };
    case 'lab': {
      const view = renderLabPage(route.id);
      return { ...view, nav: 'labs', route };
    }
    case 'toolbox':
      return { ...renderToolbox(), nav: route.nav, route };
    case 'flashcards':
      return { ...renderFlashcards(), nav: route.nav, route };
    case 'badges':
      return { ...renderBadges(), nav: route.nav, route };
    case 'certificate':
      return { ...renderCertificate(), nav: route.nav, route };
    case 'report':
      return { ...renderReport(), nav: route.nav, route };
    default:
      return null;
  }
}

/**
 * Initialise le routeur par hash.
 * @param {HTMLElement} viewEl conteneur principal
 * @param {{ onRender?: (result:object, route:object, viewEl:HTMLElement) => void }} options
 */
export function initRouter(viewEl, { onRender } = {}) {
  const handle = () => {
    // Ignore les ancres internes (#view, #print-root…) utilisées pour l'accessibilité.
    if (location.hash && !location.hash.startsWith('#/')) return;

    const route = parseHash(location.hash);
    const result = build(route) || notFound(route);

    viewEl.innerHTML = result.html;
    document.title = `${result.title} — Cyber Academy`;
    window.scrollTo({ top: 0, behavior: 'auto' });

    if (typeof result.mount === 'function') {
      try {
        result.mount(viewEl);
      } catch (err) {
        console.error('[Cyber Academy] Erreur de montage de la vue', err);
      }
    }

    if (onRender) onRender(result, route, viewEl);
  };

  window.addEventListener('hashchange', handle);

  if (!location.hash || location.hash === '#') {
    history.replaceState(null, '', '#/');
  }
  handle();

  return handle;
}
