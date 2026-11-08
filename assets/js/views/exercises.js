import { esc } from '../ui.js';
import { drillDone, markDrill } from '../store.js';

/* ------------------------------------------------------------------ */
/* Exercices de simulation — saisie de commandes + sortie simulée      */
/* ------------------------------------------------------------------ */

function norm(value) {
  return String(value ?? '')
    .trim()
    .replace(/[’]/g, "'")
    .replace(/\s+/g, ' ')
    .toLowerCase();
}

function matches(exo, input) {
  const raw = String(input ?? '').trim();
  const n = norm(raw);
  if (!n) return false;
  return (exo.accept || []).some((item) => {
    if (item instanceof RegExp) {
      item.lastIndex = 0;
      return item.test(raw);
    }
    const a = norm(item);
    return n === a || n.startsWith(`${a} `) || n.startsWith(`${a};`) || n.startsWith(`${a}&&`);
  });
}

function outLine(line) {
  const cls = line.startsWith('!!') ? 'err'
    : line.startsWith('~~') ? 'warn'
      : line.startsWith('++') ? 'ok'
        : line.startsWith('##') ? 'hl'
          : line.startsWith('..') ? 'mut' : '';
  const text = cls ? line.slice(2) : line;
  return `<div class="term-line"><span class="${cls}">${esc(text)}</span></div>`;
}

function statePill(done, revealed) {
  if (done) return '<span class="pill pill-lime exo-state">✓ Réussi</span>';
  if (revealed) return '<span class="pill pill-amber exo-state">Solution vue</span>';
  return '<span class="pill exo-state">À faire</span>';
}

export function mountExercises(root, moduleId, exos = []) {
  if (!root || !exos.length) return;

  const total = exos.length;
  const count = () => exos.filter((e) => drillDone(moduleId, e.id)).length;

  const summary = document.createElement('div');
  summary.className = 'exo-summary card pad-sm';
  summary.innerHTML = `
    <div class="flex-between flex-wrap" style="gap:10px">
      <div>
        <b>${total} exercices de simulation</b>
        <p class="small muted mb-0">Saisissez la commande attendue. La sortie est simulée : aucune requête réseau n'est émise.</p>
      </div>
      <div class="exo-progress-wrap">
        <b class="mono" id="exo-count">${count()}/${total}</b>
        <div class="bar" style="width:140px"><i id="exo-bar" style="width:${Math.round((count() / total) * 100)}%"></i></div>
      </div>
    </div>
    <div class="exo-done" id="exo-done" ${count() === total ? '' : 'hidden'}>
      🎉 Tous les exercices de ce module sont réussis. Passez au test de fin de module ci-dessous.
    </div>`;
  root.appendChild(summary);

  const list = document.createElement('div');
  list.className = 'exo-list';
  root.appendChild(list);

  const refresh = () => {
    const n = count();
    summary.querySelector('#exo-count').textContent = `${n}/${total}`;
    summary.querySelector('#exo-bar').style.width = `${Math.round((n / total) * 100)}%`;
    summary.querySelector('#exo-done').hidden = n !== total;
  };

  exos.forEach((exo, i) => {
    const done = drillDone(moduleId, exo.id);
    const card = document.createElement('article');
    card.className = `exo${done ? ' is-done' : ''}`;
    card.id = `exo-${exo.id}`;
    let revealed = false;
    let tries = 0;

    card.innerHTML = `
      <header class="exo-head">
        <span class="exo-num">${String(i + 1).padStart(2, '0')}</span>
        <div class="exo-title">
          <h3>${esc(exo.title)}</h3>
          <p>${exo.context}</p>
        </div>
        ${statePill(done, false)}
      </header>
      <div class="exo-task"><b>Mission :</b> ${exo.task}</div>
      <form class="exo-form" autocomplete="off">
        <span class="exo-prompt" aria-hidden="true">$</span>
        <input type="text" class="exo-input" spellcheck="false" autocapitalize="off"
               placeholder="${esc(exo.placeholder || 'Saisissez votre commande…')}"
               aria-label="Commande pour l'exercice ${i + 1}" ${done ? 'disabled' : ''}>
        <button class="btn btn-primary btn-sm" type="submit" ${done ? 'disabled' : ''}>Exécuter</button>
      </form>
      <div class="exo-feedback" aria-live="polite"></div>
      <div class="term exo-term" hidden>
        <div class="term-head"><span aria-hidden="true">▚</span> sortie simulée <span class="spacer"></span> lab</div>
        <div class="term-body"><div class="term-line"><span class="p">$</span> <span class="cmd exo-echo"></span></div><div class="exo-out"></div></div>
      </div>
      <div class="exo-analysis" hidden>
        <div class="exo-read"><b>Lecture du résultat</b><p>${exo.read}</p></div>
        ${exo.pivot ? `<div class="exo-pivot"><b>Ce que vous en faites</b><p>${exo.pivot}</p></div>` : ''}
      </div>
      <div class="exo-actions">
        <button class="btn btn-ghost btn-sm" type="button" data-hint>💡 Indice</button>
        <button class="btn btn-ghost btn-sm" type="button" data-solution>Voir la solution</button>
      </div>`;

    const form = card.querySelector('.exo-form');
    const input = card.querySelector('.exo-input');
    const feedback = card.querySelector('.exo-feedback');
    const term = card.querySelector('.exo-term');
    const echo = card.querySelector('.exo-echo');
    const out = card.querySelector('.exo-out');
    const analysis = card.querySelector('.exo-analysis');
    const pill = card.querySelector('.exo-state');

    const revealOutput = (command) => {
      echo.textContent = command;
      out.innerHTML = (exo.output || []).map(outLine).join('');
      term.hidden = false;
      analysis.hidden = false;
    };

    const succeed = (command) => {
      if (!drillDone(moduleId, exo.id)) {
        markDrill(moduleId, exo.id);
        refresh();
      }
      card.classList.add('is-done');
      pill.className = 'pill pill-lime exo-state';
      pill.textContent = '✓ Réussi';
      input.disabled = true;
      form.querySelector('button[type="submit"]').disabled = true;
      feedback.innerHTML = '<span class="ok">✓ Commande correcte. Analysez la sortie simulée ci-dessous.</span>';
      revealOutput(command);
    };

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (input.disabled) return;
      const value = input.value;
      if (matches(exo, value)) {
        succeed(value.trim());
      } else {
        tries++;
        feedback.innerHTML = '<span class="ko">✕ Ce n\'est pas la commande attendue. Vérifiez l\'outil, les options et la cible.</span>';
        if (tries >= 1) {
          feedback.innerHTML += `<div class="exo-hintline">💡 ${exo.hint}</div>`;
        }
      }
    });

    card.querySelector('[data-hint]').addEventListener('click', () => {
      feedback.innerHTML = `<span class="exo-hintline">💡 ${exo.hint}</span>`;
    });

    card.querySelector('[data-solution]').addEventListener('click', () => {
      if (input.disabled) {
        revealOutput(exo.solution);
        return;
      }
      revealed = true;
      if (!drillDone(moduleId, exo.id)) {
        pill.className = 'pill pill-amber exo-state';
        pill.textContent = 'Solution vue';
      }
      input.value = exo.solution;
      revealOutput(exo.solution);
      feedback.innerHTML = `<span class="exo-hintline">Solution affichée : <code>${esc(exo.solution)}</code>. Saisissez-la puis cliquez sur Exécuter pour valider l'exercice.</span>`;
    });

    if (done) {
      revealOutput(exo.solution);
      feedback.innerHTML = '<span class="ok">✓ Exercice déjà validé.</span>';
    }

    list.appendChild(card);
  });
}
