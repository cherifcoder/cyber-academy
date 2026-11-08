import { BADGES } from './data/badges.js';
import { MODULES, TOTAL_XP } from './data/course.js';
import { QUIZZES } from './data/quizzes.js';
import { toast } from './ui.js';

const KEY = 'cyberacademy.state.v1';
const VERSION = 1;

export const LEVELS = [
  { min: 0, name: 'Recrue' },
  { min: 300, name: 'Analyste Junior' },
  { min: 800, name: 'Pentester Junior' },
  { min: 1500, name: 'Analyste Offensif' },
  { min: 2500, name: 'Red Teamer' },
  { min: 3500, name: 'Expert Sécurité' }
];

const defaults = () => ({
  version: VERSION,
  theme: 'dark',
  user: { name: '', role: 'Apprenti Red Teamer' },
  xp: 0,
  completed: {},
  quizzes: {},
  badges: [],
  study: { seconds: 0 },
  labs: {},
  drills: {},
  cards: { known: [], seen: [] },
  reports: [],
  activity: [],
  meta: { certificateGenerated: false, toolsViewed: [] },
  startedAt: Date.now()
});

function merge(base, saved) {
  if (!saved || typeof saved !== 'object') return base;
  const out = Array.isArray(base) ? base.slice() : { ...base };
  for (const [k, v] of Object.entries(saved)) {
    if (v === null || v === undefined) continue;
    if (Array.isArray(v)) out[k] = v.slice();
    else if (typeof v === 'object' && !Array.isArray(base[k]) && base[k] && typeof base[k] === 'object') out[k] = merge(base[k], v);
    else out[k] = v;
  }
  return out;
}

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return defaults();
    const parsed = JSON.parse(raw);
    return merge(defaults(), parsed);
  } catch {
    return defaults();
  }
}

export const state = load();

const listeners = new Set();
let saveTimer = 0;

export function subscribe(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

function emit(type) {
  listeners.forEach((fn) => {
    try { fn(type, state); } catch (e) { console.error(e); }
  });
}

export function save(immediate = false) {
  clearTimeout(saveTimer);
  const write = () => {
    try { localStorage.setItem(KEY, JSON.stringify(state)); }
    catch (e) { console.warn('Sauvegarde impossible', e); }
  };
  if (immediate) write();
  else saveTimer = setTimeout(write, 250);
}

export function commit(immediate = false) {
  save(immediate);
  checkBadges();
  emit('change');
}

/* ---------------- profil & thème ---------------- */
export function setTheme(theme) {
  state.theme = theme === 'light' ? 'light' : 'dark';
  document.documentElement.dataset.theme = state.theme;
  save(true);
  emit('theme');
}

export function toggleTheme() {
  setTheme(state.theme === 'dark' ? 'light' : 'dark');
  return state.theme;
}

export function setName(name) {
  state.user.name = String(name || '').slice(0, 60).trim();
  save(true);
  checkBadges();
  emit('profile');
  emit('change');
}

/* ---------------- XP & niveaux ---------------- */
export function addXp(amount, reason = '') {
  const n = Math.max(0, Math.round(amount));
  if (!n) return;
  state.xp += n;
  save();
  if (reason) pushActivity(`+${n} XP — ${reason}`);
  checkBadges();
  emit('xp', { amount: n, reason });
}

export function levelInfo() {
  let idx = 0;
  for (let i = 0; i < LEVELS.length; i++) if (state.xp >= LEVELS[i].min) idx = i;
  const current = LEVELS[idx];
  const next = LEVELS[idx + 1] || null;
  const span = next ? next.min - current.min : 1;
  const into = state.xp - current.min;
  return {
    index: idx,
    name: current.name,
    next,
    progress: next ? Math.min(100, Math.round((into / span) * 100)) : 100,
    toNext: next ? Math.max(0, next.min - state.xp) : 0
  };
}

/* ---------------- progression ---------------- */
export const MODULE_IDS = MODULES.map((m) => m.id);

/* ---------------- exercices de simulation ---------------- */
export function drillDone(moduleId, exoId) {
  return !!state.drills?.[moduleId]?.[exoId];
}

export function markDrill(moduleId, exoId) {
  if (!state.drills) state.drills = {};
  if (!state.drills[moduleId]) state.drills[moduleId] = {};
  if (state.drills[moduleId][exoId]) return false;
  state.drills[moduleId][exoId] = Date.now();
  save(true);
  return true;
}

export function drillsCompleted(moduleId, exos = []) {
  return exos.filter((e) => drillDone(moduleId, e.id)).length;
}

export function moduleProgress(id) {
  if (state.completed[id]) return 100;
  const mod = MODULES.find((m) => m.id === id);
  const quiz = mod ? QUIZZES[mod.quiz] : null;
  const best = quiz ? state.quizzes[mod.quiz]?.best : 0;
  if (!quiz || !best) return 0;
  return Math.min(99, Math.round((best / quiz.questions.length) * 90));
}

export function globalProgress() {
  const total = MODULES.length * 100;
  const sum = MODULES.reduce((acc, m) => acc + moduleProgress(m.id), 0);
  return Math.round(sum / total * 100);
}

export function completedCount() {
  return Object.keys(state.completed).length;
}

export function currentModule() {
  return MODULES.find((m) => !state.completed[m.id]) || MODULES[MODULES.length - 1];
}

/* ---------------- quiz & modules ---------------- */
export function saveQuizResult(quizId, score, total) {
  const quiz = QUIZZES[quizId];
  const prev = state.quizzes[quizId] || { best: 0, total, attempts: 0 };
  const improved = score > prev.best;
  const delta = improved ? (score - prev.best) * 5 : 0;

  state.quizzes[quizId] = {
    best: Math.max(prev.best, score),
    total,
    attempts: prev.attempts + 1,
    lastScore: score,
    at: Date.now()
  };

  const percent = total ? Math.round((score / total) * 100) : 0;
  const passed = percent >= (quiz?.pass ?? 70);
  const moduleId = quiz?.moduleId;

  if (delta > 0) addXp(delta, `Quiz ${quizId.toUpperCase()} : ${score}/${total}`);

  if (moduleId && passed && !state.completed[moduleId]) {
    completeModule(moduleId, score, total);
  } else {
    save();
    emit('change');
  }

  return { passed, improved, delta };
}

export function completeModule(moduleId, score = 0, total = 0) {
  if (state.completed[moduleId]) return false;
  const mod = MODULES.find((m) => m.id === moduleId);
  if (!mod) return false;
  state.completed[moduleId] = { score, total, at: Date.now() };
  addXp(mod.xp, `Module ${mod.num} validé — ${mod.short}`);
  pushActivity(`Module ${mod.num} terminé`);
  save(true);
  return true;
}

/* ---------------- labs ---------------- */
export function runLab(id) {
  if (!state.labs[id]) state.labs[id] = { runs: 0, done: false };
  state.labs[id].runs += 1;
  save();
  emit('lab');
}

export function completeLab(id, label = '') {
  if (!state.labs[id]) state.labs[id] = { runs: 1, done: false };
  if (state.labs[id].done) return false;
  state.labs[id].done = true;
  state.labs[id].at = Date.now();
  addXp(20, `Atelier terminé${label ? ' — ' + label : ''}`);
  save(true);
  return true;
}

/* ---------------- flashcards ---------------- */
export function markCard(q, known = true) {
  const set = new Set(state.cards.known);
  const was = set.has(q);
  if (known) set.add(q); else set.delete(q);
  state.cards.known = Array.from(set);
  if (!state.cards.seen.includes(q)) state.cards.seen.push(q);
  if (known && !was) addXp(2, 'Flashcard maîtrisée');
  else { save(); emit('change'); }
}

/* ---------------- outils ---------------- */
export function viewTool(id) {
  const arr = new Set(state.meta.toolsViewed || []);
  arr.add(id);
  state.meta.toolsViewed = Array.from(arr);
  save();
  checkBadges();
  emit('change');
}

/* ---------------- rapports ---------------- */
export function saveReport(report) {
  state.reports.unshift(report);
  if (state.reports.length > 20) state.reports.length = 20;
  const first = !state.meta.firstReport;
  state.meta.firstReport = true;
  if (first) addXp(50, "Premier rapport d'audit généré");
  else { save(); }
  pushActivity('Rapport enregistré');
  save(true);
  emit('report');
}

export function deleteReport(id) {
  state.reports = state.reports.filter((r) => r.id !== id);
  save(true);
  emit('report');
}

/* ---------------- certificat ---------------- */
export function markCertificate() {
  const first = !state.meta.certificateGenerated;
  state.meta.certificateGenerated = true;
  if (first) addXp(30, 'Certificat de fin de parcours généré');
  else { save(); }
  save(true);
  emit('certificate');
}

/* ---------------- activités ---------------- */
export function pushActivity(text) {
  state.activity.unshift({ text, at: Date.now() });
  if (state.activity.length > 40) state.activity.length = 40;
}

/* ---------------- étude ---------------- */
export function addStudy(seconds) {
  if (seconds <= 0) return;
  state.study.seconds += seconds;
  save();
  checkBadges();
  emit('study');
}

/* ---------------- badges ---------------- */
export function checkBadges() {
  const unlocked = new Set(state.badges);
  const newly = [];
  for (const badge of BADGES) {
    if (unlocked.has(badge.id)) continue;
    let ok = false;
    try { ok = !!badge.test(state); } catch { ok = false; }
    if (ok) {
      unlocked.add(badge.id);
      newly.push(badge);
    }
  }
  if (newly.length) {
    state.badges = Array.from(unlocked);
    save(true);
    newly.forEach((b, i) => setTimeout(() => {
      toast(`<b>Badge débloqué : ${b.name}</b><br><span class="small">${b.desc}</span>`, 'xp', b.icon);
    }, i * 550));
    emit('badges', newly);
  }
}

export function badgeStats() {
  return { unlocked: state.badges.length, total: BADGES.length };
}

/* ---------------- reset ---------------- */
export function resetProgress() {
  const theme = state.theme;
  const fresh = defaults();
  fresh.theme = theme;
  Object.keys(state).forEach((k) => { delete state[k]; });
  Object.assign(state, fresh);
  save(true);
  emit('change');
  toast('Progression réinitialisée', 'success', '↺');
}

export { TOTAL_XP };
