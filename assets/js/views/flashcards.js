import { FLASHCARDS, DECKS } from '../data/flashcards.js';
import { state, markCard } from '../store.js';
import { esc } from '../ui.js';

export function renderFlashcards() {
  let deck = 'Tous';
  let index = 0;
  let flipped = false;
  let shuffled = false;
  let order = [];

  const knownSet = () => new Set(state.cards.known);

  const buildOrder = () => {
    let list = FLASHCARDS.filter((c) => deck === 'Tous' || c.deck === deck);
    if (shuffled) {
      list = list.slice();
      for (let i = list.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [list[i], list[j]] = [list[j], list[i]];
      }
    }
    order = list;
    if (index >= order.length) index = 0;
  };

  const html = `
    <div class="mod-head">
      <div class="kicker">Révision</div>
      <h1>Flashcards</h1>
      <p class="mod-sub">Terminologie, en-têtes HTTP, codes de statut, OWASP et outils. Cliquez sur la carte pour la retourner, puis indiquez si vous la maîtrisez.</p>
    </div>
    <div class="deck-tabs" id="fc-decks">
      ${DECKS.map((d) => `<button class="deck-tab ${d === deck ? 'active' : ''}" type="button" data-deck="${esc(d)}">${esc(d)}</button>`).join('')}
    </div>
    <div class="flash-wrap">
      <div class="flashcard" id="fc-card" tabindex="0" role="button" aria-label="Retourner la carte">
        <div class="flash-inner">
          <div class="flash-face front">
            <span class="fc-tag" id="fc-tag">Terminologie</span>
            <div class="fc-q" id="fc-q">Chargement…</div>
            <span class="fc-hint">Cliquer ou appuyer sur Espace pour révéler</span>
          </div>
          <div class="flash-face back">
            <span class="fc-tag">Réponse</span>
            <div class="fc-a" id="fc-a"></div>
            <span class="fc-hint">Espace pour retourner · ← → pour naviguer</span>
          </div>
        </div>
      </div>
      <div class="flash-controls">
        <button class="btn btn-ghost" id="fc-prev" type="button">← Précédent</button>
        <button class="btn btn-danger" id="fc-again" type="button">À revoir</button>
        <button class="btn btn-primary" id="fc-known" type="button">Je maîtrise ✓</button>
        <button class="btn btn-ghost" id="fc-next" type="button">Suivant →</button>
      </div>
      <div class="flex" style="gap:14px;flex-wrap:wrap;justify-content:center">
        <span class="fc-count" id="fc-count"></span>
        <button class="btn btn-sm btn-ghost" id="fc-shuffle" type="button">⇄ Mélanger</button>
        <button class="btn btn-sm btn-ghost" id="fc-reset" type="button">Réinitialiser les cartes</button>
      </div>
      <div class="bar" style="width:min(420px,100%)"><i id="fc-bar" style="width:0%"></i></div>
      <p class="small dim" id="fc-known-count"></p>
    </div>`;

  return {
    title: 'Flashcards',
    html,
    mount(root) {
      const card = root.querySelector('#fc-card');
      const qEl = root.querySelector('#fc-q');
      const aEl = root.querySelector('#fc-a');
      const tagEl = root.querySelector('#fc-tag');
      const countEl = root.querySelector('#fc-count');
      const bar = root.querySelector('#fc-bar');
      const knownEl = root.querySelector('#fc-known-count');

      const draw = () => {
        if (!order.length) {
          qEl.textContent = 'Aucune carte dans ce paquet.';
          aEl.textContent = '';
          countEl.textContent = '0 / 0';
          return;
        }
        const c = order[index];
        const isKnown = knownSet().has(c.q);
        tagEl.textContent = `${c.deck}${isKnown ? ' · maîtrisée' : ''}`;
        qEl.textContent = c.q;
        aEl.textContent = c.a;
        root.querySelector('.flashcard').classList.toggle('flipped', flipped);
        countEl.textContent = `${index + 1} / ${order.length}`;
        const knownInDeck = order.filter((x) => knownSet().has(x.q)).length;
        const p = order.length ? Math.round((knownInDeck / order.length) * 100) : 0;
        bar.style.width = `${p}%`;
        knownEl.textContent = `${knownInDeck} carte${knownInDeck > 1 ? 's' : ''} maîtrisée${knownInDeck > 1 ? 's' : ''} sur ${order.length} (${p} %)`;
      };

      const go = (dir) => {
        if (!order.length) return;
        index = (index + dir + order.length) % order.length;
        flipped = false;
        draw();
      };

      const mark = (known) => {
        if (!order.length) return;
        markCard(order[index].q, known);
        flipped = false;
        if (index < order.length - 1) index++;
        else index = 0;
        draw();
      };

      root.querySelectorAll('[data-deck]').forEach((b) => {
        b.addEventListener('click', () => {
          deck = b.dataset.deck;
          index = 0; flipped = false;
          root.querySelectorAll('[data-deck]').forEach((x) => x.classList.toggle('active', x === b));
          buildOrder();
          draw();
        });
      });

      card.addEventListener('click', () => { flipped = !flipped; draw(); });
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); flipped = !flipped; draw(); }
      });
      root.querySelector('#fc-prev').addEventListener('click', () => go(-1));
      root.querySelector('#fc-next').addEventListener('click', () => go(1));
      root.querySelector('#fc-known').addEventListener('click', () => mark(true));
      root.querySelector('#fc-again').addEventListener('click', () => mark(false));
      root.querySelector('#fc-shuffle').addEventListener('click', () => { shuffled = !shuffled; index = 0; flipped = false; buildOrder(); draw(); });
      root.querySelector('#fc-reset').addEventListener('click', () => {
        markCard(order[index]?.q, false);
        draw();
      });

      const onKey = (e) => {
        if (!root.isConnected) { document.removeEventListener('keydown', onKey); return; }
        if (e.target && /input|textarea|select/i.test(e.target.tagName)) return;
        if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
        else if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
        else if (e.key === ' ') { e.preventDefault(); flipped = !flipped; draw(); }
        else if (e.key === '1') mark(false);
        else if (e.key === '2') mark(true);
      };
      document.addEventListener('keydown', onKey);

      buildOrder();
      draw();
    }
  };
}
