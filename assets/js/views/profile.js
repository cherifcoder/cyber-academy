import { state, setName, resetProgress, levelInfo, badgeStats } from '../store.js';
import { esc, openModal, toast, confirmDialog, initials, fmtTime } from '../ui.js';

export function openProfileModal() {
  const lvl = levelInfo();
  const badges = badgeStats();
  const body = `
    <div class="flex mb-3" style="gap:14px">
      <div class="avatar" style="width:56px;height:56px;font-size:20px" id="pf-avatar">${esc(initials(state.user.name))}</div>
      <div>
        <b style="font-size:16px">${esc(state.user.name || 'Apprenti anonyme')}</b><br>
        <span class="small muted">${esc(lvl.name)} · ${state.xp} XP</span>
      </div>
    </div>
    <label class="field"><span>Nom affiché sur le certificat</span>
      <input type="text" id="pf-name" maxlength="60" value="${esc(state.user.name)}" placeholder="Ex. Bourama K." autocomplete="off">
    </label>
    <label class="field"><span>Rôle / objectif</span>
      <input type="text" id="pf-role" maxlength="60" value="${esc(state.user.role)}" placeholder="Apprenti Red Teamer">
    </label>
    <div class="grid grid-3" style="gap:10px;margin:18px 0">
      <div class="card pad-sm"><small class="dim">Modules</small><br><b>${Object.keys(state.completed).length}/8</b></div>
      <div class="card pad-sm"><small class="dim">Badges</small><br><b>${badges.unlocked}/${badges.total}</b></div>
      <div class="card pad-sm"><small class="dim">Étude</small><br><b>${fmtTime(state.study.seconds)}</b></div>
    </div>
    <p class="small dim">Données stockées localement dans votre navigateur (LocalStorage). Aucun compte, aucun serveur.</p>
    <div class="flex-between mt-2">
      <button class="btn btn-danger btn-sm" id="pf-reset" type="button">Réinitialiser la progression</button>
      <span class="small dim">v1.0</span>
    </div>`;

  const { root, close } = openModal({
    title: 'Profil',
    body,
    footer: `<button class="btn btn-ghost" data-close type="button">Annuler</button><button class="btn btn-primary" id="pf-save" type="button">Enregistrer</button>`
  });

  const nameInput = root.querySelector('#pf-name');
  const roleInput = root.querySelector('#pf-role');
  nameInput.addEventListener('input', () => {
    root.querySelector('#pf-avatar').textContent = initials(nameInput.value);
  });
  nameInput.focus();

  root.querySelector('#pf-save').addEventListener('click', () => {
    if (!nameInput.value.trim()) {
      toast('Indiquez un nom (même un pseudonyme)', 'error');
      nameInput.focus();
      return;
    }
    setName(nameInput.value);
    state.user.role = roleInput.value.trim().slice(0, 60) || 'Apprenti Red Teamer';
    close();
    toast(`Profil mis à jour — bienvenue ${esc(state.user.name)}`, 'success', '✓');
    window.dispatchEvent(new CustomEvent('ca:profile-changed'));
  });

  root.querySelector('#pf-reset').addEventListener('click', () => {
    confirmDialog(
      "Toute votre progression (XP, modules, badges, rapports, temps d'étude) sera définitivement effacée. Le thème est conservé.",
      () => {
        close();
        resetProgress();
        window.dispatchEvent(new CustomEvent('ca:profile-changed'));
      },
      { confirmLabel: 'Tout effacer' }
    );
  });
}
