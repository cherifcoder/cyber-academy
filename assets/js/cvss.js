/** Calculateur CVSS v3.1 — implémentation de la formule officielle. */

export const CVSS_METRICS = [
  {
    key: 'AV', label: 'Attack Vector', short: 'Vecteur',
    options: [
      { v: 'N', label: 'Network', w: 0.85 },
      { v: 'A', label: 'Adjacent', w: 0.62 },
      { v: 'L', label: 'Local', w: 0.55 },
      { v: 'P', label: 'Physical', w: 0.2 }
    ]
  },
  {
    key: 'AC', label: 'Attack Complexity', short: 'Complexité',
    options: [
      { v: 'L', label: 'Low', w: 0.77 },
      { v: 'H', label: 'High', w: 0.44 }
    ]
  },
  {
    key: 'PR', label: 'Privileges Required', short: 'Privilèges',
    options: [
      { v: 'N', label: 'None', w: 0.85, wc: 0.85 },
      { v: 'L', label: 'Low', w: 0.62, wc: 0.68 },
      { v: 'H', label: 'High', w: 0.27, wc: 0.5 }
    ]
  },
  {
    key: 'UI', label: 'User Interaction', short: 'Interaction',
    options: [
      { v: 'N', label: 'None', w: 0.85 },
      { v: 'R', label: 'Required', w: 0.62 }
    ]
  },
  {
    key: 'S', label: 'Scope', short: 'Portée',
    options: [
      { v: 'U', label: 'Unchanged' },
      { v: 'C', label: 'Changed' }
    ]
  },
  {
    key: 'C', label: 'Confidentiality', short: 'Confidentialité',
    options: [
      { v: 'H', label: 'High', w: 0.56 },
      { v: 'L', label: 'Low', w: 0.22 },
      { v: 'N', label: 'None', w: 0 }
    ]
  },
  {
    key: 'I', label: 'Integrity', short: 'Intégrité',
    options: [
      { v: 'H', label: 'High', w: 0.56 },
      { v: 'L', label: 'Low', w: 0.22 },
      { v: 'N', label: 'None', w: 0 }
    ]
  },
  {
    key: 'A', label: 'Availability', short: 'Disponibilité',
    options: [
      { v: 'H', label: 'High', w: 0.56 },
      { v: 'L', label: 'Low', w: 0.22 },
      { v: 'N', label: 'None', w: 0 }
    ]
  }
];

export const DEFAULT_CVSS = { AV: 'N', AC: 'L', PR: 'N', UI: 'N', S: 'U', C: 'H', I: 'H', A: 'H' };

export function severityOf(score) {
  if (score <= 0) return { label: 'None', cls: 'info', color: 'var(--dim)' };
  if (score < 4) return { label: 'Low', cls: 'low', color: 'var(--lime)' };
  if (score < 7) return { label: 'Medium', cls: 'medium', color: 'var(--amber)' };
  if (score < 9) return { label: 'High', cls: 'high', color: 'var(--magenta)' };
  return { label: 'Critical', cls: 'critical', color: 'var(--red)' };
}

function weight(metric, value, changed) {
  const opt = metric.options.find((o) => o.v === value);
  if (!opt) return 0;
  if (metric.key === 'PR' && changed && opt.wc !== undefined) return opt.wc;
  return opt.w || 0;
}

export function computeCvss(state) {
  const m = Object.fromEntries(CVSS_METRICS.map((metric) => [metric.key, metric]));
  const changed = state.S === 'C';
  const av = weight(m.AV, state.AV, changed);
  const ac = weight(m.AC, state.AC, changed);
  const pr = weight(m.PR, state.PR, changed);
  const ui = weight(m.UI, state.UI, changed);
  const c = weight(m.C, state.C, changed);
  const i = weight(m.I, state.I, changed);
  const a = weight(m.A, state.A, changed);

  const iss = 1 - (1 - c) * (1 - i) * (1 - a);
  const impact = changed
    ? 7.52 * (iss - 0.029) - 3.25 * Math.pow(iss - 0.02, 15)
    : 6.42 * iss;
  const exploitability = 8.22 * av * ac * pr * ui;

  let raw = 0;
  if (impact > 0) {
    raw = changed
      ? Math.min(1.08 * (impact + exploitability), 10)
      : Math.min(impact + exploitability, 10);
  }
  const score = Math.ceil(raw * 10) / 10;
  const vector = `CVSS:3.1/AV:${state.AV}/AC:${state.AC}/PR:${state.PR}/UI:${state.UI}/S:${state.S}/C:${state.C}/I:${state.I}/A:${state.A}`;
  return { score, vector, impact, exploitability, severity: severityOf(score) };
}

export function cvssExamples() {
  return [
    {
      id: 'sqli', name: 'SQLi API publique',
      state: { AV: 'N', AC: 'L', PR: 'N', UI: 'N', S: 'U', C: 'H', I: 'H', A: 'N' },
      note: "Lecture et modification de données sans authentification."
    },
    {
      id: 'xss', name: 'XSS réfléchi',
      state: { AV: 'N', AC: 'L', PR: 'N', UI: 'R', S: 'C', C: 'L', I: 'L', A: 'N' },
      note: "Nécessite qu'une victime clique, impact limité à son navigateur."
    },
    {
      id: 'idor', name: 'IDOR authentifié',
      state: { AV: 'N', AC: 'L', PR: 'L', UI: 'N', S: 'U', C: 'H', I: 'N', A: 'N' },
      note: "Fuite de données d'autres clients, compte standard requis."
    },
    {
      id: 'upload', name: 'Upload de web shell',
      state: { AV: 'N', AC: 'L', PR: 'L', UI: 'N', S: 'C', C: 'H', I: 'H', A: 'H' },
      note: "Exécution de code sur le serveur, impact au-delà du composant."
    },
    {
      id: 'headers', name: 'En-têtes manquants',
      state: { AV: 'N', AC: 'H', PR: 'N', UI: 'R', S: 'U', C: 'L', I: 'L', A: 'N' },
      note: "Configuration faible : impact indirect, exploitabilité conditionnelle."
    }
  ];
}
