import { BADGES } from '../data/badges.js';
import { state, badgeStats } from '../store.js';
import { esc } from '../ui.js';

export function renderBadges() {
  const stats = badgeStats();
  const unlocked = BADGES.filter((b) => state.badges.includes(b.id));
  const locked = BADGES.filter((b) => !state.badges.includes(b.id));
  const p = Math.round((stats.unlocked / stats.total) * 100);

  const card = (b, on) => `
    <div class="badge-card ${on ? 'unlocked' : ''}">
      <div class="badge-ico">${on ? b.icon : '🔒'}</div>
      <div style="min-width:0">
        <b>${esc(b.name)}</b>
        <small>${esc(on ? b.desc : b.hint)}</small>
      </div>
      ${on ? '<span class="pill pill-lime" style="margin-left:auto">OK</span>' : '<span class="lock" aria-hidden="true">🔒</span>'}
    </div>`;

  const html = `
    <div class="mod-head">
      <div class="kicker">Récompenses</div>
      <h1>Badges</h1>
      <p class="mod-sub">Chaque badge récompense une étape concrète : un module validé, un atelier réussi, un quiz sans faute, un rapport généré. Ils sont conservés localement avec votre progression.</p>
      <div class="mod-meta">
        <span class="pill pill-lime">${stats.unlocked} débloqués</span>
        <span class="pill">${stats.total - stats.unlocked} restants</span>
        <span class="pill pill-cyan">${p} %</span>
      </div>
      <div class="bar bar-lg mt-2" style="max-width:480px"><i style="width:${p}%"></i></div>
    </div>

    <div class="section-title">Débloqués (${unlocked.length})</div>
    ${unlocked.length ? `<div class="grid grid-2">${unlocked.map((b) => card(b, true)).join('')}</div>` : `<div class="empty"><span class="empty-ico">🔒</span>Aucun badge pour l'instant.<br><span class="small">Validez un module pour commencer.</span></div>`}

    <div class="section-title">À débloquer (${locked.length})</div>
    <div class="grid grid-2">${locked.map((b) => card(b, false)).join('')}</div>`;

  return { title: 'Badges', html };
}
