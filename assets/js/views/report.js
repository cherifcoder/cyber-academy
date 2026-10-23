import { state, save, saveReport, deleteReport } from '../store.js';
import { esc, attr, fmtDate, toast, confirmDialog, printHtml, downloadFile } from '../ui.js';
import { severityOf } from '../cvss.js';

const SEV_ORDER = ['critical', 'high', 'medium', 'low', 'info'];
const SEV_LABEL = { critical: 'Critique', high: 'Élevée', medium: 'Moyenne', low: 'Faible', info: 'Info' };
const CLASSIFICATIONS = [
  'Public',
  'Interne',
  'Confidentiel — Diffusion restreinte',
  'Secret'
];

const uid = (prefix) => `${prefix}_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;

function todayIso() {
  const d = new Date();
  const p = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

function blankFinding(severity = 'high') {
  return {
    id: uid('f'),
    title: '',
    severity,
    cvss: '',
    vector: '',
    desc: '',
    poc: '',
    impact: '',
    fix: '',
    refs: ''
  };
}

function defaultModel() {
  return {
    id: '',
    title: "Audit de sécurité applicative",
    client: '',
    consultant: state.user.name || '',
    start: todayIso(),
    end: todayIso(),
    version: '1.0',
    classification: CLASSIFICATIONS[2],
    scope: '',
    summary: '',
    findings: [blankFinding('high')],
    createdAt: 0,
    updatedAt: 0
  };
}

const clone = (obj) => JSON.parse(JSON.stringify(obj));

function sanitizeSeverity(value) {
  return SEV_ORDER.includes(value) ? value : 'info';
}

function normalizeFinding(f = {}) {
  return {
    ...blankFinding(sanitizeSeverity(f.severity)),
    ...f,
    id: f.id || uid('f'),
    severity: sanitizeSeverity(f.severity)
  };
}

function nl2br(value) {
  return esc(value).replace(/\r?\n/g, '<br>');
}

function severityLabel(sev) {
  return SEV_LABEL[sanitizeSeverity(sev)];
}

function scoreOf(f) {
  const n = parseFloat(String(f.cvss ?? '').replace(',', '.'));
  return Number.isFinite(n) ? Math.max(0, Math.min(10, n)) : null;
}

function frDate(iso) {
  if (!iso) return '—';
  const parts = String(iso).split('-').map(Number);
  if (parts.length !== 3 || parts.some((n) => !Number.isFinite(n))) return String(iso);
  return fmtDate(new Date(parts[0], parts[1] - 1, parts[2]));
}

function periodLabel(start, end) {
  if (!start && !end) return '—';
  if (start && end && start !== end) return `du ${frDate(start)} au ${frDate(end)}`;
  return frDate(start || end);
}

function sortFindings(m) {
  return m.findings
    .filter((f) => String(f.title || '').trim() || String(f.desc || '').trim())
    .slice()
    .sort((a, b) => SEV_ORDER.indexOf(a.severity) - SEV_ORDER.indexOf(b.severity));
}

/* ------------------------------------------------------------------ */
/* Aperçu du rapport                                                   */
/* ------------------------------------------------------------------ */

function findingHtml(f, i) {
  const sev = sanitizeSeverity(f.severity);
  return `<div class="rp-finding rp-${sev}">
    <h3>4.${i + 1} ${esc(f.title || 'Constat sans titre')}</h3>
    <p class="rp-meta">
      <span class="sev ${sev}">${esc(severityLabel(sev))}</span>
      &nbsp;·&nbsp; Score CVSS : <b>${esc(f.cvss || '—')}</b>
      ${f.vector ? `&nbsp;·&nbsp; <code>${esc(f.vector)}</code>` : ''}
    </p>
    <p><b>Description.</b> ${f.desc ? nl2br(f.desc) : '—'}</p>
    <p><b>Preuve / PoC.</b></p>
    <pre>${esc(f.poc || '—')}</pre>
    <p><b>Impact.</b> ${f.impact ? nl2br(f.impact) : '—'}</p>
    <p><b>Remédiation.</b> ${f.fix ? nl2br(f.fix) : '—'}</p>
    <p class="rp-meta"><b>Références :</b> ${esc(f.refs || 'OWASP Top 10 / CWE')}</p>
  </div>`;
}

function previewBody(m) {
  const list = sortFindings(m);
  const counts = SEV_ORDER.reduce((acc, s) => {
    acc[s] = list.filter((f) => f.severity === s).length;
    return acc;
  }, {});
  const total = list.length;
  const weak = counts.low + counts.info;

  return `
    <h1>${esc(m.title || "Rapport d'audit de sécurité applicative")}</h1>
    <p class="rp-meta">Cyber Academy · Modèle de rapport d'audit · Généré le ${esc(fmtDate())}</p>

    <table>
      <tbody>
        <tr><th>Client</th><td>${esc(m.client || '—')}</td><th>Consultant</th><td>${esc(m.consultant || '—')}</td></tr>
        <tr><th>Période</th><td>${esc(periodLabel(m.start, m.end))}</td><th>Version</th><td>${esc(m.version || '1.0')}</td></tr>
        <tr><th>Classification</th><td colspan="3">${esc(m.classification || 'Confidentiel')}</td></tr>
      </tbody>
    </table>

    <h2>1. Synthèse exécutive</h2>
    <p>${m.summary ? nl2br(m.summary) : '<span class="rp-meta">Synthèse à compléter.</span>'}</p>
    <p class="rp-meta">${total} constat(s) documenté(s) — ${counts.critical} critique(s), ${counts.high} élevé(s), ${counts.medium} moyen(s), ${weak} faible(s)/info.</p>

    <h2>2. Périmètre et méthodologie</h2>
    <p>${m.scope ? nl2br(m.scope) : '<span class="rp-meta">Périmètre à définir.</span>'}</p>
    <p class="rp-meta">Méthodologie : PTES, OWASP Web Security Testing Guide (WSTG) et notation CVSS v3.1. Les tests ont été conduits exclusivement sur des environnements autorisés, dans le cadre d'une autorisation écrite préalable.</p>

    <h2>3. Synthèse des vulnérabilités</h2>
    <table>
      <thead><tr><th>Critique</th><th>Élevée</th><th>Moyenne</th><th>Faible</th><th>Info</th><th>Total</th></tr></thead>
      <tbody><tr><td>${counts.critical}</td><td>${counts.high}</td><td>${counts.medium}</td><td>${counts.low}</td><td>${counts.info}</td><td><b>${total}</b></td></tr></tbody>
    </table>
    ${total ? `<table>
      <thead><tr><th>Réf.</th><th>Constat</th><th>Sévérité</th><th>CVSS</th></tr></thead>
      <tbody>${list.map((f, i) => `<tr><td>4.${i + 1}</td><td>${esc(f.title || '—')}</td><td>${esc(severityLabel(f.severity))}</td><td>${esc(f.cvss || '—')}</td></tr>`).join('')}</tbody>
    </table>` : ''}

    <h2>4. Détail des constats</h2>
    ${total ? list.map(findingHtml).join('') : '<p class="rp-meta">Aucun constat renseigné pour le moment.</p>'}

    <h2>5. Recommandations prioritaires</h2>
    ${total ? `<ol>${list.map((f) => `<li><b>${esc(f.title || 'Constat')}</b> — ${esc(f.fix || 'Remédiation à définir.')}</li>`).join('')}</ol>` : '<p class="rp-meta">—</p>'}

    <h2>6. Cadre légal et limites</h2>
    <p>Ce rapport a été produit dans le cadre d'une mission autorisée par écrit ou d'un environnement de laboratoire volontairement vulnérable. Les techniques décrites ne doivent jamais être utilisées contre des systèmes sans autorisation explicite. Les résultats reflètent l'état du périmètre à la date des tests et ne garantissent pas l'absence d'autres vulnérabilités.</p>
    <p class="rp-meta">Document généré localement par Cyber Academy. Support pédagogique ne constituant pas une certification professionnelle officielle. Aucune donnée n'est transmise à un serveur.</p>
  `;
}

/* ------------------------------------------------------------------ */
/* Formulaire                                                          */
/* ------------------------------------------------------------------ */

const textField = (label, key, value, placeholder = '', type = 'text') => `
  <label class="field"><span>${esc(label)}</span>
    <input type="${type}" data-meta="${attr(key)}" value="${attr(value || '')}" placeholder="${attr(placeholder)}" maxlength="200" autocomplete="off">
  </label>`;

function metaCard(m) {
  return `<div class="card mb-2">
    <div class="card-head">
      <h3 class="mb-0">Informations du rapport</h3>
      <span class="spacer"></span>
      <span class="pill pill-cyan">Aperçu en direct</span>
    </div>

    <label class="field"><span>Titre du rapport</span>
      <input type="text" data-meta="title" value="${attr(m.title)}" maxlength="140" placeholder="Audit de sécurité applicative" autocomplete="off">
    </label>

    <div class="grid grid-2" style="gap:0 16px">
      ${textField('Client', 'client', m.client, 'Ex. ACME SAS')}
      ${textField('Consultant', 'consultant', m.consultant, state.user.name || 'Votre nom')}
    </div>

    <div class="grid grid-3" style="gap:0 16px">
      <label class="field"><span>Date de début</span><input type="date" data-meta="start" value="${attr(m.start)}"></label>
      <label class="field"><span>Date de fin</span><input type="date" data-meta="end" value="${attr(m.end)}"></label>
      ${textField('Version', 'version', m.version, '1.0')}
    </div>

    <label class="field"><span>Classification</span>
      <select data-meta="classification">
        ${CLASSIFICATIONS.map((c) => `<option value="${attr(c)}" ${c === m.classification ? 'selected' : ''}>${esc(c)}</option>`).join('')}
      </select>
    </label>

    <label class="field"><span>Périmètre et méthodologie</span>
      <textarea data-meta="scope" rows="3" placeholder="URL testées, environnements (DVWA, Juice Shop, CTF…), dates et outils utilisés.">${esc(m.scope)}</textarea>
    </label>

    <label class="field" style="margin-bottom:0"><span>Synthèse exécutive</span>
      <textarea data-meta="summary" rows="4" placeholder="Résumé de haut niveau pour la direction : risques majeurs, tendances, priorité des corrections.">${esc(m.summary)}</textarea>
    </label>
  </div>`;
}

function findingCard(f) {
  const sev = sanitizeSeverity(f.severity);
  return `<div class="finding" data-fid="${attr(f.id)}">
    <div class="finding-head">
      <span class="sev ${sev}">${esc(severityLabel(sev))}</span>
      <input type="text" data-field="title" value="${attr(f.title)}" placeholder="Titre du constat — ex. Injection SQL dans la recherche" maxlength="160">
      <button class="icon-btn" type="button" data-act="remove-finding" title="Supprimer ce constat" aria-label="Supprimer ce constat">×</button>
    </div>

    <div class="grid grid-3" style="gap:0 12px">
      <label class="field"><span>Sévérité</span>
        <select data-field="severity">
          ${SEV_ORDER.map((s) => `<option value="${s}" ${s === sev ? 'selected' : ''}>${esc(SEV_LABEL[s])}</option>`).join('')}
        </select>
      </label>
      <label class="field"><span>Score CVSS</span>
        <input type="number" data-field="cvss" value="${attr(f.cvss)}" min="0" max="10" step="0.1" placeholder="0.0 – 10.0">
      </label>
      <label class="field"><span>Vecteur</span>
        <input type="text" data-field="vector" value="${attr(f.vector)}" placeholder="CVSS:3.1/AV:N/…" autocomplete="off">
      </label>
    </div>

    <label class="field"><span>Description</span>
      <textarea data-field="desc" rows="2" placeholder="Description technique et contexte du constat.">${esc(f.desc)}</textarea>
    </label>

    <div class="grid grid-2" style="gap:0 12px">
      <label class="field"><span>Preuve / PoC</span>
        <textarea data-field="poc" rows="4" placeholder="Requête HTTP, payload, capture ou commande — sans données sensibles réelles.">${esc(f.poc)}</textarea>
      </label>
      <label class="field"><span>Impact</span>
        <textarea data-field="impact" rows="4" placeholder="Conséquences métier et techniques : fuite, compromission, disponibilité…">${esc(f.impact)}</textarea>
      </label>
    </div>

    <label class="field"><span>Remédiation</span>
      <textarea data-field="fix" rows="2" placeholder="Mesure corrective concrète et vérifiable.">${esc(f.fix)}</textarea>
    </label>

    <label class="field" style="margin-bottom:0"><span>Références</span>
      <input type="text" data-field="refs" value="${attr(f.refs)}" placeholder="OWASP Top 10 A03:2021 · CWE-89" autocomplete="off">
    </label>
  </div>`;
}

function findingsCard(m) {
  return `<div class="card">
    <div class="card-head">
      <h3 class="mb-0">Constats (${m.findings.length})</h3>
      <span class="spacer"></span>
      <button class="btn btn-sm" type="button" data-act="add-finding">＋ Ajouter un constat</button>
    </div>
    <p class="small muted">Le score CVSS met automatiquement à jour la sévérité. Triez vos constats du plus critique au plus faible dans le rapport final.</p>
    <div id="findings-list">
      ${m.findings.length
        ? m.findings.map(findingCard).join('')
        : '<div class="empty" style="padding:26px"><span class="empty-ico">◌</span>Aucun constat pour le moment.<br><span class="small">Ajoutez une vulnérabilité pour construire le rapport.</span></div>'}
    </div>
    ${m.findings.length ? '<button class="btn btn-ghost btn-sm btn-block mt-1" type="button" data-act="add-finding">＋ Ajouter un constat</button>' : ''}
  </div>`;
}

function actionsCard(m) {
  const options = state.reports.length
    ? state.reports.map((r) => `<option value="${attr(r.id)}" ${r.id === m.id ? 'selected' : ''}>${esc(r.title || 'Sans titre')} · ${esc(fmtDate(r.updatedAt || r.createdAt || Date.now()))}</option>`).join('')
    : '<option value="">Aucun brouillon enregistré</option>';

  return `<div class="card pad-sm">
    <div class="card-head" style="margin-bottom:12px">
      <h3 class="mb-0">Rapport</h3>
      <span class="spacer"></span>
      <span class="pill pill-amber">+50 XP au 1er</span>
    </div>
    <div class="flex flex-wrap" style="gap:8px">
      <button class="btn btn-primary btn-sm" type="button" data-act="save">💾 Enregistrer</button>
      <button class="btn btn-sm" type="button" data-act="print">🖨 Imprimer / PDF</button>
      <button class="btn btn-sm btn-ghost" type="button" data-act="markdown">⬇ Markdown</button>
      <button class="btn btn-sm btn-ghost" type="button" data-act="new">＋ Nouveau</button>
    </div>

    <label class="field mt-2" style="margin-bottom:8px"><span>Brouillons enregistrés (${state.reports.length}/20)</span>
      <select id="draft-select" ${state.reports.length ? '' : 'disabled'}>${options}</select>
    </label>
    <button class="btn btn-danger btn-sm btn-block" type="button" data-act="delete" ${state.reports.length ? '' : 'disabled'}>Supprimer le brouillon</button>

    <p class="small dim mt-2 mb-0">L'export PDF utilise l'impression du navigateur : choisissez « Enregistrer au format PDF ». Les rapports restent stockés localement.</p>
  </div>`;
}

/* ------------------------------------------------------------------ */
/* Export Markdown                                                     */
/* ------------------------------------------------------------------ */

function toMarkdown(m) {
  const list = sortFindings(m);
  const counts = SEV_ORDER.reduce((acc, s) => {
    acc[s] = list.filter((f) => f.severity === s).length;
    return acc;
  }, {});
  const lines = [];
  lines.push(`# ${m.title || "Rapport d'audit de sécurité applicative"}`);
  lines.push('');
  lines.push(`- **Client :** ${m.client || '—'}`);
  lines.push(`- **Consultant :** ${m.consultant || '—'}`);
  lines.push(`- **Période :** ${periodLabel(m.start, m.end)}`);
  lines.push(`- **Version :** ${m.version || '1.0'}`);
  lines.push(`- **Classification :** ${m.classification || 'Confidentiel'}`);
  lines.push('');
  lines.push('## 1. Synthèse exécutive');
  lines.push('');
  lines.push(m.summary || '_Synthèse à compléter._');
  lines.push('');
  lines.push(`## 2. Périmètre et méthodologie`);
  lines.push('');
  lines.push(m.scope || '_Périmètre à définir._');
  lines.push('');
  lines.push('Méthodologie : PTES, OWASP WSTG, CVSS v3.1. Tests réalisés uniquement sur des environnements autorisés.');
  lines.push('');
  lines.push('## 3. Synthèse des vulnérabilités');
  lines.push('');
  lines.push(`| Critique | Élevée | Moyenne | Faible | Info | Total |`);
  lines.push(`| --- | --- | --- | --- | --- | --- |`);
  lines.push(`| ${counts.critical} | ${counts.high} | ${counts.medium} | ${counts.low} | ${counts.info} | ${list.length} |`);
  lines.push('');
  if (list.length) {
    lines.push('| Réf. | Constat | Sévérité | CVSS |');
    lines.push('| --- | --- | --- | --- |');
    list.forEach((f, i) => {
      lines.push(`| 4.${i + 1} | ${(f.title || '—').replace(/\|/g, '\\|')} | ${severityLabel(f.severity)} | ${f.cvss || '—'} |`);
    });
    lines.push('');
  }
  lines.push('## 4. Détail des constats');
  lines.push('');
  if (!list.length) lines.push('_Aucun constat renseigné._');
  list.forEach((f, i) => {
    lines.push(`### 4.${i + 1} ${f.title || 'Constat sans titre'}`);
    lines.push('');
    lines.push(`- **Sévérité :** ${severityLabel(f.severity)}`);
    lines.push(`- **CVSS :** ${f.cvss || '—'}${f.vector ? ` — \`${f.vector}\`` : ''}`);
    lines.push('');
    lines.push(`**Description.** ${f.desc || '—'}`);
    lines.push('');
    lines.push(`**Preuve / PoC.**`);
    lines.push('');
    lines.push('```');
    lines.push(f.poc || '—');
    lines.push('```');
    lines.push('');
    lines.push(`**Impact.** ${f.impact || '—'}`);
    lines.push('');
    lines.push(`**Remédiation.** ${f.fix || '—'}`);
    lines.push('');
    lines.push(`**Références :** ${f.refs || 'OWASP Top 10 / CWE'}`);
    lines.push('');
  });
  lines.push('## 5. Recommandations prioritaires');
  lines.push('');
  if (list.length) list.forEach((f) => lines.push(`1. **${f.title || 'Constat'}** — ${f.fix || 'Remédiation à définir.'}`));
  else lines.push('—');
  lines.push('');
  lines.push('## 6. Cadre légal et limites');
  lines.push('');
  lines.push("Rapport produit dans le cadre d'une mission autorisée par écrit ou d'un environnement de laboratoire volontairement vulnérable. Ne pas réutiliser ces techniques contre des systèmes sans autorisation. Support pédagogique Cyber Academy, sans valeur de certification officielle.");
  lines.push('');
  return lines.join('\n');
}

function slugify(text) {
  return String(text || 'rapport')
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '') || 'rapport';
}

/* ------------------------------------------------------------------ */
/* Vue                                                                 */
/* ------------------------------------------------------------------ */

export function renderReport() {
  const html = `
    <div class="mod-head">
      <div class="kicker">Module 7 · Reporting</div>
      <h1>Générateur de rapport d'audit</h1>
      <p class="mod-sub">Rédigez un rapport professionnel : périmètre, synthèse exécutive, constats chiffrés en CVSS v3.1 et recommandations. Aperçu en direct, brouillons locaux, export PDF ou Markdown.</p>
      <div class="mod-meta">
        <span class="pill pill-cyan">Aperçu temps réel</span>
        <span class="pill pill-amber">+50 XP au premier rapport</span>
        <a class="pill pill-lime" href="#/module/m7">Revoir le module 7 →</a>
      </div>
    </div>

    <div class="report-layout">
      <div id="report-left"></div>
      <div>
        <div id="report-side" class="report-side"></div>
        <div id="report-preview-slot"></div>
      </div>
    </div>

    <div class="callout legal mt-3">
      <span class="co-ico">⚖️</span>
      <div><b class="co-title">Usage responsable</b>
      Ne consignez dans ce rapport que des constats issus de tests autorisés. Floutez les données personnelles et les secrets réels (tokens, mots de passe) avant de partager un rapport, même en interne.</div>
    </div>`;

  return {
    title: "Rapport d'audit",
    html,
    mount(root) {
      let model = defaultModel();
      let dirty = false;

      const left = root.querySelector('#report-left');
      const side = root.querySelector('#report-side');
      const previewSlot = root.querySelector('#report-preview-slot');

      const updatePreview = () => {
        previewSlot.innerHTML = `<div class="report-preview" id="report-preview">${previewBody(model)}</div>`;
      };

      const refreshSide = () => {
        side.innerHTML = actionsCard(model);
      };

      const paint = () => {
        left.innerHTML = metaCard(model) + findingsCard(model);
        refreshSide();
        updatePreview();
      };

      const updateSevBadge = (card, sev) => {
        const badge = card.querySelector('.sev');
        if (!badge) return;
        badge.className = `sev ${sanitizeSeverity(sev)}`;
        badge.textContent = severityLabel(sev);
      };

      const addFinding = () => {
        model.findings.push(blankFinding('medium'));
        dirty = true;
        paint();
        const cards = left.querySelectorAll('.finding');
        const last = cards[cards.length - 1];
        if (last) {
          last.scrollIntoView({ behavior: 'smooth', block: 'center' });
          last.querySelector('[data-field="title"]')?.focus({ preventScroll: true });
        }
      };

      const removeFinding = (id) => {
        model.findings = model.findings.filter((f) => f.id !== id);
        dirty = true;
        paint();
      };

      const saveDraft = () => {
        if (!String(model.title || '').trim()) {
          toast('Donnez un titre au rapport avant de l’enregistrer', 'error');
          left.querySelector('[data-meta="title"]')?.focus();
          return;
        }
        const now = Date.now();
        const payload = clone(model);
        payload.title = String(payload.title).trim();
        payload.findings = payload.findings.map((f) => ({ ...f, title: String(f.title || '').trim() }));

        const existing = state.reports.find((r) => r.id === payload.id);
        if (existing) {
          payload.createdAt = existing.createdAt || now;
          payload.updatedAt = now;
          Object.assign(existing, payload);
          save(true);
          toast('Rapport mis à jour', 'success', '✓');
        } else {
          const first = !state.meta.firstReport;
          payload.id = uid('rpt');
          payload.createdAt = now;
          payload.updatedAt = now;
          saveReport(payload);
          toast(first ? 'Rapport enregistré — +50 XP' : 'Rapport enregistré', 'success', '📄');
        }
        model.id = payload.id;
        model.createdAt = payload.createdAt;
        model.updatedAt = now;
        dirty = false;
        refreshSide();
      };

      const printReport = () => {
        if (!String(model.title || '').trim()) {
          toast('Donnez un titre au rapport avant l’impression', 'error');
          return;
        }
        printHtml(`<div class="report-preview">${previewBody(model)}</div>`);
      };

      const exportMarkdown = () => {
        const md = toMarkdown(model);
        downloadFile(`rapport-${slugify(model.client || model.title)}.md`, md, 'text/markdown;charset=utf-8');
        toast('Rapport exporté en Markdown', 'success', '⬇');
      };

      const newDraft = () => {
        const reset = () => {
          model = defaultModel();
          dirty = false;
          paint();
          toast('Nouveau rapport', 'info', '＋');
        };
        if (dirty) {
          confirmDialog('Le rapport en cours contient des modifications non enregistrées. Les remplacer par un nouveau rapport ?', reset, {
            danger: false,
            title: 'Nouveau rapport',
            confirmLabel: 'Continuer'
          });
        } else {
          reset();
        }
      };

      const loadDraft = (id) => {
        if (!id) return;
        const found = state.reports.find((r) => r.id === id);
        if (!found) { toast('Brouillon introuvable', 'error'); return; }
        const apply = () => {
          model = {
            ...defaultModel(),
            ...clone(found)
          };
          model.findings = (found.findings && found.findings.length ? clone(found.findings) : [blankFinding('high')]).map(normalizeFinding);
          dirty = false;
          paint();
          toast('Brouillon chargé', 'success', '📂');
        };
        if (dirty) {
          confirmDialog('Les modifications non enregistrées du rapport courant seront perdues. Charger ce brouillon ?', apply, {
            danger: false,
            title: 'Charger un brouillon',
            confirmLabel: 'Charger'
          });
          const sel = side.querySelector('#draft-select');
          if (sel) sel.value = model.id || '';
        } else {
          apply();
        }
      };

      const deleteDraft = () => {
        const sel = side.querySelector('#draft-select');
        const id = sel?.value || model.id;
        if (!id) { toast('Aucun brouillon sélectionné', 'error'); return; }
        const found = state.reports.find((r) => r.id === id);
        if (!found) { toast('Brouillon introuvable', 'error'); return; }
        confirmDialog(`Supprimer définitivement le brouillon « ${esc(found.title || 'Sans titre')} » ?`, () => {
          deleteReport(id);
          if (model.id === id) {
            model = defaultModel();
            dirty = false;
            paint();
          } else {
            refreshSide();
          }
          toast('Brouillon supprimé', 'success', '🗑');
        });
      };

      root.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-act]');
        if (!btn || !root.contains(btn)) return;
        const act = btn.dataset.act;
        if (act === 'add-finding') addFinding();
        else if (act === 'remove-finding') {
          const card = btn.closest('[data-fid]');
          if (card) removeFinding(card.dataset.fid);
        } else if (act === 'save') saveDraft();
        else if (act === 'print') printReport();
        else if (act === 'markdown') exportMarkdown();
        else if (act === 'new') newDraft();
        else if (act === 'delete') deleteDraft();
      });

      root.addEventListener('input', (e) => {
        const el = e.target;

        if (el.matches('[data-meta]')) {
          model[el.dataset.meta] = el.value;
          dirty = true;
          updatePreview();
          return;
        }

        const card = el.closest('[data-fid]');
        if (!card) return;
        const finding = model.findings.find((f) => f.id === card.dataset.fid);
        if (!finding) return;
        const field = el.dataset.field;
        if (!field) return;

        finding[field] = el.value;
        dirty = true;

        if (field === 'severity') {
          finding.severity = sanitizeSeverity(el.value);
          updateSevBadge(card, finding.severity);
        }

        if (field === 'cvss') {
          const score = scoreOf(finding);
          if (score !== null) {
            finding.severity = severityOf(score).cls;
            const select = card.querySelector('[data-field="severity"]');
            if (select) select.value = finding.severity;
            updateSevBadge(card, finding.severity);
          }
        }

        updatePreview();
      });

      root.addEventListener('change', (e) => {
        if (e.target.matches('#draft-select')) loadDraft(e.target.value);
      });

      paint();
    }
  };
}
