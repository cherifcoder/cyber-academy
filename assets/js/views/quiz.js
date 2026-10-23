import { QUIZZES } from '../data/quizzes.js';
import { state, saveQuizResult } from '../store.js';
import { esc } from '../ui.js';

export function createQuiz(quizId, { onFinish } = {}) {
  const quiz = QUIZZES[quizId];
  const root = document.createElement('div');
  if (!quiz) {
    root.innerHTML = '<div class="empty">Quiz introuvable.</div>';
    return root;
  }

  let index = 0;
  let answers = [];      // index choisi par question
  let correct = 0;
  let locked = false;
  let finished = false;

  const pass = quiz.pass ?? 70;

  const render = () => {
    if (finished) return renderResult();
    const q = quiz.questions[index];
    const chosen = answers[index];

    root.innerHTML = `
      <div class="quiz">
        <div class="quiz-top">
          <h3>${esc(quiz.title)}</h3>
          <span class="spacer"></span>
          <span class="pill pill-cyan">Seuil ${pass} %</span>
          <span class="pill">Question ${index + 1}/${quiz.questions.length}</span>
        </div>
        <div class="quiz-progress">
          ${quiz.questions.map((_, i) => {
            const a = answers[i];
            const cls = a === undefined ? (i === index ? 'cur' : '') : (a === quiz.questions[i].answer ? 'ok' : 'ko');
            return `<i class="${cls}"></i>`;
          }).join('')}
        </div>
        <div class="q-text">${esc(q.q)}</div>
        <div class="q-opts" id="q-opts">
          ${q.options.map((o, i) => {
            let cls = '';
            if (chosen !== undefined) {
              if (i === q.answer) cls = 'correct';
              else if (i === chosen) cls = 'wrong';
            }
            return `<button class="q-opt ${cls}" type="button" data-i="${i}" ${chosen !== undefined ? 'disabled' : ''}>
              <span class="q-key">${String.fromCharCode(65 + i)}</span><span>${esc(o)}</span>
            </button>`;
          }).join('')}
        </div>
        <div id="q-explain">${chosen !== undefined ? `
          <div class="q-explain"><b>${chosen === q.answer ? 'Correct.' : 'Incorrect.'}</b> ${esc(q.explain)}</div>
          <div class="flex mt-2" style="justify-content:flex-end">
            <button class="btn btn-primary" id="q-next" type="button">${index === quiz.questions.length - 1 ? 'Voir le résultat' : 'Question suivante'} →</button>
          </div>` : ''}</div>
      </div>`;

    root.querySelectorAll('#q-opts .q-opt').forEach((btn) => {
      btn.addEventListener('click', () => select(Number(btn.dataset.i)));
    });
    const next = root.querySelector('#q-next');
    if (next) next.addEventListener('click', advance);
    if (chosen === undefined) root.querySelector('.q-opt')?.focus({ preventScroll: true });
  };

  const select = (i) => {
    if (locked || answers[index] !== undefined) return;
    locked = true;
    answers[index] = i;
    const q = quiz.questions[index];
    const ok = i === q.answer;
    if (ok) correct++;
    render();
    locked = false;
  };

  const advance = () => {
    if (index < quiz.questions.length - 1) {
      index++;
      render();
      root.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      finish();
    }
  };

  const finish = () => {
    finished = true;
    const total = quiz.questions.length;
    const percent = Math.round((correct / total) * 100);
    const res = saveQuizResult(quizId, correct, total);
    renderResult(percent, res);
    if (onFinish) onFinish({ score: correct, total, percent, passed: res.passed, improved: res.improved });
  };

  const renderResult = (percent, res) => {
    const total = quiz.questions.length;
    const p = percent ?? Math.round((correct / total) * 100);
    const passed = p >= pass;
    const best = state.quizzes[quizId]?.best ?? correct;
    root.innerHTML = `
      <div class="quiz">
        <div class="quiz-result">
          <p class="pill ${passed ? 'pill-lime' : 'pill-red'}">${passed ? 'Module validé' : 'Seuil non atteint'}</p>
          <div class="qr-score" style="color:${passed ? 'var(--lime)' : 'var(--red)'}">${correct}<span>/${total}</span></div>
          <div class="bar bar-lg" style="max-width:340px;margin:0 auto 16px"><i style="width:${p}%;background:${passed ? 'linear-gradient(90deg,#7cff6b,#00e5ff)' : 'linear-gradient(90deg,#ff5470,#ffc857)'}"></i></div>
          <h3>${passed ? 'Bien joué.' : 'Encore un effort.'}</h3>
          <p>${passed
            ? `Score de ${p} % — au-dessus du seuil de ${pass} %. Votre meilleur score est ${best}/${total}. Les explications restent disponibles en recommençant.`
            : `Score de ${p} % — il faut au moins ${pass} % pour valider. Relisez les sections concernées puis retentez : les questions restent les mêmes, mais la compréhension compte plus que la mémorisation.`}</p>
          <div class="flex" style="justify-content:center;flex-wrap:wrap">
            <button class="btn ${passed ? 'btn-ghost' : 'btn-primary'}" id="q-retry" type="button">${passed ? 'Refaire le quiz' : 'Réessayer'}</button>
            ${passed ? '<span class="pill pill-lime">+ XP attribués</span>' : ''}
          </div>
        </div>
      </div>`;
    root.querySelector('#q-retry').addEventListener('click', () => {
      index = 0; answers = []; correct = 0; finished = false; render();
    });
    if (passed) window.dispatchEvent(new CustomEvent('ca:quiz-passed', { detail: { quizId } }));
  };

  const onKey = (e) => {
    if (!root.isConnected) { document.removeEventListener('keydown', onKey); return; }
    if (e.target && /input|textarea|select/i.test(e.target.tagName)) return;
    if (finished) return;
    const n = Number(e.key);
    if (n >= 1 && n <= 4 && answers[index] === undefined) {
      const btn = root.querySelectorAll('#q-opts .q-opt')[n - 1];
      if (btn) { e.preventDefault(); select(n - 1); }
    } else if (e.key === 'Enter' && answers[index] !== undefined) {
      const next = root.querySelector('#q-next');
      if (next) { e.preventDefault(); advance(); }
    }
  };
  document.addEventListener('keydown', onKey);

  render();
  return root;
}
