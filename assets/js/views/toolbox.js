import { TOOLS, TOOL_CATEGORIES, CHEATSHEET, HARDENING_CHECKLIST } from '../data/tools.js';
import { state, viewTool } from '../store.js';
import { esc, openModal, copyText, downloadFile, toast, printHtml, codeBlock } from '../ui.js';

export function renderToolbox() {
  let query = '';
  let cat = 'Tous';
  let cheatQuery = '';

  const html = `
    <div class="mod-head">
      <div class="kicker">Ressources</div>
      <h1>Boîte à outils</h1>
      <p class="mod-sub">Fiches de référence, commandes usuelles et checklist de durcissement. Tout est utilisable hors ligne : copiez, adaptez, pratiquez en lab.</p>
    </div>

    <div class="toolbar">
      <input type="search" id="tb-search" placeholder="Rechercher un outil, une commande…" aria-label="Rechercher un outil">
      <select id="tb-cat" aria-label="Filtrer par catégorie">
        ${TOOL_CATEGORIES.map((c) => `<option value="${esc(c)}">${esc(c)}</option>`).join('')}
      </select>
      <span class="result-count" id="tb-count"></span>
    </div>
    <div class="grid grid-auto" id="tb-grid"></div>

    <div class="section-title">Cheatsheet — commandes usuelles</div>
    <div class="toolbar">
      <input type="search" id="cs-search" placeholder="Filtrer les commandes…" aria-label="Filtrer les commandes">
    </div>
    <div class="grid grid-2" style="align-items:start" id="cs-grid"></div>

    <div class="section-title">Checklist de durcissement</div>
    <div class="card">
      <div class="flex-between flex-wrap mb-2" style="gap:12px">
        <div>
          <b>Hardening — application web</b>
          <p class="small muted mb-0">Cochez les points appliqués, puis téléchargez la checklist ou imprimez-la.</p>
        </div>
        <div class="flex">
          <button class="btn btn-sm btn-ghost" id="hc-all" type="button">Tout cocher</button>
          <button class="btn btn-sm btn-primary" id="hc-dl" type="button">⬇ Télécharger</button>
          <button class="btn btn-sm" id="hc-print" type="button">🖨 Imprimer</button>
        </div>
      </div>
      <div class="grid grid-2" style="gap:18px;align-items:start">
        ${HARDENING_CHECKLIST.map((group, gi) => `
          <div>
            <h4 style="font-size:13px;color:var(--cyan);letter-spacing:.08em;text-transform:uppercase">${esc(group.cat)}</h4>
            ${group.items.map((item, ii) => `
              <label class="check"><input type="checkbox" data-hc="${gi}-${ii}"><span>${esc(item)}</span></label>`).join('')}
          </div>`).join('')}
      </div>
    </div>

    <p class="small dim center mt-3">Les outils offensifs doivent être utilisés uniquement sur des cibles autorisées. Les commandes sont fournies à titre pédagogique.</p>`;

  const renderTools = (root) => {
    const grid = root.querySelector('#tb-grid');
    const q = query.toLowerCase();
    const list = TOOLS.filter((t) => {
      const okCat = cat === 'Tous' || t.cat === cat;
      const hay = `${t.name} ${t.desc} ${t.commands.map((c) => c.cmd + ' ' + c.desc).join(' ')}`.toLowerCase();
      return okCat && (!q || hay.includes(q));
    });
    root.querySelector('#tb-count').textContent = `${list.length} outil${list.length > 1 ? 's' : ''}`;
    if (!list.length) {
      grid.innerHTML = `<div class="empty" style="grid-column:1/-1"><span class="empty-ico">🔍</span>Aucun outil ne correspond à « ${esc(query)} ».</div>`;
      return;
    }
    grid.innerHTML = list.map((t) => `
      <button class="tool-card" type="button" data-tool="${esc(t.id)}">
        <div class="tc-top"><span class="tc-ico">${t.icon}</span><span class="tc-name">${esc(t.name)}</span><span class="tc-cat">${esc(t.cat.replace(' (lab)', ''))}</span></div>
        <div class="tc-desc">${esc(t.desc)}</div>
        <div class="tc-cmd">${esc(t.commands[0]?.cmd || '')}</div>
      </button>`).join('');

    grid.querySelectorAll('[data-tool]').forEach((card) => {
      card.addEventListener('click', () => openTool(card.dataset.tool));
    });
  };

  const renderCheatsheet = (root) => {
    const grid = root.querySelector('#cs-grid');
    const q = cheatQuery.toLowerCase();
    const groups = CHEATSHEET.map((g) => ({
      ...g,
      items: g.items.filter((i) => !q || `${i.cmd} ${i.desc}`.toLowerCase().includes(q))
    })).filter((g) => g.items.length);

    if (!groups.length) {
      grid.innerHTML = `<div class="empty" style="grid-column:1/-1"><span class="empty-ico">⌘</span>Aucune commande trouvée.</div>`;
      return;
    }
    grid.innerHTML = groups.map((g) => `
      <div class="card pad-sm">
        <div class="card-head" style="margin-bottom:8px"><h3 style="font-size:13px;letter-spacing:.1em;text-transform:uppercase;color:var(--cyan)">${esc(g.cat)}</h3></div>
        ${g.items.map((i) => `
          <div class="cmd-row">
            <code>${esc(i.cmd)}</code>
            <span>${esc(i.desc)}</span>
            <button class="icon-btn cp" type="button" data-copy-cmd="${esc(i.cmd)}" title="Copier" style="width:30px;height:30px;font-size:12px">⧉</button>
          </div>`).join('')}
      </div>`).join('');

    grid.querySelectorAll('[data-copy-cmd]').forEach((b) => {
      b.addEventListener('click', () => copyText(b.dataset.copyCmd));
    });
  };

  const openTool = (id) => {
    const t = TOOLS.find((x) => x.id === id);
    if (!t) return;
    viewTool(id);
    const body = `
      <div class="flex mb-2" style="gap:12px;align-items:flex-start">
        <div class="stat-ico" style="font-size:22px">${t.icon}</div>
        <div>
          <span class="pill pill-cyan">${esc(t.cat)}</span>
          <p class="small muted" style="margin:6px 0 0">${esc(t.desc)}</p>
        </div>
      </div>
      ${t.install ? `<div class="field-label">Installation</div>${codeBlock(t.install, 'bash', 'installation')}` : ''}
      <div class="field-label mt-2">Commandes essentielles</div>
      <div class="table-wrap"><table class="tbl">
        <thead><tr><th>Commande</th><th>À quoi ça sert</th><th></th></tr></thead>
        <tbody>${t.commands.map((c, i) => `
          <tr><td class="mono" style="color:var(--cyan-2)">${esc(c.cmd)}</td><td>${esc(c.desc)}</td>
          <td><button class="icon-btn" type="button" data-modal-copy="${i}" style="width:28px;height:28px;font-size:11px">⧉</button></td></tr>`).join('')}
        </tbody>
      </table></div>
      ${t.tips?.length ? `<div class="callout tip" style="margin-top:16px"><span class="co-ico">💡</span><div><b class="co-title">Bon à savoir</b><ul style="margin:6px 0 0;padding-left:18px">${t.tips.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></div></div>` : ''}`;

    const { root } = openModal({ title: t.name, body, wide: true, footer: `<button class="btn btn-ghost" data-close type="button">Fermer</button>` });
    root.querySelectorAll('[data-modal-copy]').forEach((b) => {
      b.addEventListener('click', () => {
        const c = t.commands[Number(b.dataset.modalCopy)];
        if (c) copyText(c.cmd);
      });
    });
  };

  return {
    title: 'Boîte à outils',
    html,
    mount(root) {
      renderTools(root);
      renderCheatsheet(root);

      root.querySelector('#tb-search').addEventListener('input', (e) => { query = e.target.value; renderTools(root); });
      root.querySelector('#tb-cat').addEventListener('change', (e) => { cat = e.target.value; renderTools(root); });
      root.querySelector('#cs-search').addEventListener('input', (e) => { cheatQuery = e.target.value; renderCheatsheet(root); });

      const boxes = Array.from(root.querySelectorAll('[data-hc]'));
      const buildChecklist = () => {
        const lines = ['# Checklist de durcissement — application web', '', `Généré le ${new Date().toLocaleDateString('fr-FR')}`, ''];
        HARDENING_CHECKLIST.forEach((g, gi) => {
          lines.push(`## ${g.cat}`, '');
          g.items.forEach((item, ii) => {
            const cb = root.querySelector(`[data-hc="${gi}-${ii}"]`);
            lines.push(`- [${cb?.checked ? 'x' : ' '}] ${item}`);
          });
          lines.push('');
        });
        lines.push('---', 'Cyber Academy — à adapter au contexte de chaque application.');
        return lines.join('\n');
      };

      root.querySelector('#hc-all').addEventListener('click', () => {
        const allChecked = boxes.every((b) => b.checked);
        boxes.forEach((b) => { b.checked = !allChecked; });
        toast(allChecked ? 'Checklist vidée' : 'Checklist complète cochée', 'info');
      });
      root.querySelector('#hc-dl').addEventListener('click', () => {
        downloadFile('checklist-durcissement-web.md', buildChecklist(), 'text/markdown;charset=utf-8');
        toast('Checklist téléchargée', 'success');
      });
      root.querySelector('#hc-print').addEventListener('click', () => {
        const md = buildChecklist();
        const htmlDoc = `<div class="report-preview"><h1>Checklist de durcissement — application web</h1><p class="rp-meta">Généré le ${esc(new Date().toLocaleDateString('fr-FR'))}</p>${HARDENING_CHECKLIST.map((g, gi) => `<h2>${esc(g.cat)}</h2><ul>${g.items.map((item, ii) => `<li>${root.querySelector(`[data-hc="${gi}-${ii}"]`)?.checked ? '☑' : '☐'} ${esc(item)}</li>`).join('')}</ul>`).join('')}</div>`;
        printHtml(htmlDoc);
      });
      if ((state.meta.toolsViewed || []).length) {
        // pas de rendu supplémentaire : le compteur de badges se met à jour via le store
      }
    }
  };
}
