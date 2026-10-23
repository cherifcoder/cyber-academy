import { MODULES } from '../data/course.js';
import { state, completedCount, levelInfo, markCertificate } from '../store.js';
import { esc, fmtDate, fmtTime, toast, printHtml, initials } from '../ui.js';

const W = 1600;
const H = 1131;

function rr(ctx, x, y, w, h, r) {
  const rad = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + rad, y);
  ctx.arcTo(x + w, y, x + w, y + h, rad);
  ctx.arcTo(x + w, y + h, x, y + h, rad);
  ctx.arcTo(x, y + h, x, y, rad);
  ctx.arcTo(x, y, x + w, y, rad);
  ctx.closePath();
}

function spaced(ctx, text, cx, y, spacing = 0) {
  const chars = Array.from(text);
  const widths = chars.map((c) => ctx.measureText(c).width);
  const total = widths.reduce((a, b) => a + b, 0) + spacing * (chars.length - 1);
  let x = cx - total / 2;
  chars.forEach((c, i) => {
    ctx.fillText(c, x, y);
    x += widths[i] + spacing;
  });
}

function verificationId(name, xp) {
  const raw = `${name}|${xp}|${completedCount()}|${state.startedAt}`;
  let h = 5381;
  for (let i = 0; i < raw.length; i++) h = ((h << 5) + h + raw.charCodeAt(i)) >>> 0;
  return `CA-${h.toString(36).toUpperCase().padStart(7, '0').slice(0, 7)}`;
}

function drawCertificate(canvas, opts) {
  const ctx = canvas.getContext('2d');
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, W, H);

  // fond
  const bg = ctx.createLinearGradient(0, 0, W, H);
  bg.addColorStop(0, '#05070e');
  bg.addColorStop(0.55, '#081120');
  bg.addColorStop(1, '#0a0f1c');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  // halos
  const g1 = ctx.createRadialGradient(W * 0.85, 40, 0, W * 0.85, 40, 640);
  g1.addColorStop(0, 'rgba(0,229,255,0.16)');
  g1.addColorStop(1, 'rgba(0,229,255,0)');
  ctx.fillStyle = g1;
  ctx.fillRect(0, 0, W, H);

  const g2 = ctx.createRadialGradient(120, H - 40, 0, 120, H - 40, 560);
  g2.addColorStop(0, 'rgba(255,45,149,0.14)');
  g2.addColorStop(1, 'rgba(255,45,149,0)');
  ctx.fillStyle = g2;
  ctx.fillRect(0, 0, W, H);

  // grille
  ctx.strokeStyle = 'rgba(120,180,255,0.055)';
  ctx.lineWidth = 1;
  for (let x = 0; x < W; x += 40) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
  for (let y = 0; y < H; y += 40) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

  // cadre
  ctx.strokeStyle = 'rgba(0,229,255,0.55)';
  ctx.lineWidth = 2;
  rr(ctx, 40, 40, W - 80, H - 80, 18);
  ctx.stroke();

  ctx.strokeStyle = 'rgba(0,229,255,0.16)';
  ctx.lineWidth = 1;
  rr(ctx, 56, 56, W - 112, H - 112, 14);
  ctx.stroke();

  // coins
  const corner = (x, y, sx, sy) => {
    ctx.strokeStyle = 'rgba(0,229,255,0.85)';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(x, y + sy * 46);
    ctx.lineTo(x, y);
    ctx.lineTo(x + sx * 46, y);
    ctx.stroke();
  };
  corner(70, 70, 1, 1);
  corner(W - 70, 70, -1, 1);
  corner(70, H - 70, 1, -1);
  corner(W - 70, H - 70, -1, -1);

  // bouclier
  const cx = W / 2;
  ctx.save();
  ctx.translate(cx, 152);
  ctx.beginPath();
  ctx.moveTo(0, -46);
  ctx.lineTo(41, -28);
  ctx.lineTo(41, 10);
  ctx.bezierCurveTo(41, 42, 16, 60, 0, 70);
  ctx.bezierCurveTo(-16, 60, -41, 42, -41, 10);
  ctx.lineTo(-41, -28);
  ctx.closePath();
  const sg = ctx.createLinearGradient(0, -46, 0, 70);
  sg.addColorStop(0, 'rgba(0,229,255,0.20)');
  sg.addColorStop(1, 'rgba(0,229,255,0.03)');
  ctx.fillStyle = sg;
  ctx.fill();
  ctx.strokeStyle = 'rgba(0,229,255,0.9)';
  ctx.lineWidth = 3;
  ctx.shadowColor = 'rgba(0,229,255,0.8)';
  ctx.shadowBlur = 22;
  ctx.stroke();
  ctx.shadowBlur = 0;
  ctx.strokeStyle = '#7cff6b';
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(-16, 8);
  ctx.lineTo(-2, 22);
  ctx.lineTo(20, -8);
  ctx.stroke();
  ctx.restore();

  // marque
  ctx.textAlign = 'left';
  ctx.textBaseline = 'alphabetic';
  ctx.fillStyle = '#e7f1ff';
  ctx.font = '800 34px "Segoe UI", system-ui, sans-serif';
  spaced(ctx, 'CYBER ACADEMY', cx, 300, 9);

  ctx.fillStyle = 'rgba(139,162,192,0.9)';
  ctx.font = '600 14px "Segoe UI", system-ui, sans-serif';
  spaced(ctx, 'WEB PENTEST & SECURITY LEARNING', cx, 330, 6);

  // titre
  ctx.textAlign = 'center';
  ctx.fillStyle = 'rgba(0,229,255,0.95)';
  ctx.font = '600 18px "Segoe UI", system-ui, sans-serif';
  spaced(ctx, 'CERTIFICAT DE FIN DE PARCOURS', cx, 408, 5);

  ctx.fillStyle = 'rgba(139,162,192,0.85)';
  ctx.font = '400 17px "Segoe UI", system-ui, sans-serif';
  ctx.fillText('Ce certificat est décerné à', cx, 458);

  // nom
  const name = (opts.name || 'Apprenti').trim();
  let size = 74;
  ctx.font = `800 ${size}px "Segoe UI", system-ui, sans-serif`;
  while (ctx.measureText(name).width > 1120 && size > 34) {
    size -= 4;
    ctx.font = `800 ${size}px "Segoe UI", system-ui, sans-serif`;
  }
  ctx.save();
  ctx.shadowColor = 'rgba(0,229,255,0.55)';
  ctx.shadowBlur = 34;
  ctx.fillStyle = '#ffffff';
  ctx.fillText(name, cx, 552);
  ctx.restore();

  const lg = ctx.createLinearGradient(cx - 330, 0, cx + 330, 0);
  lg.addColorStop(0, 'rgba(0,229,255,0)');
  lg.addColorStop(0.5, 'rgba(0,229,255,0.9)');
  lg.addColorStop(1, 'rgba(0,229,255,0)');
  ctx.fillStyle = lg;
  ctx.fillRect(cx - 330, 574, 660, 2);

  // corps
  ctx.fillStyle = 'rgba(200,218,238,0.92)';
  ctx.font = '400 19px "Segoe UI", system-ui, sans-serif';
  ctx.fillText('pour avoir complété avec succès le parcours de formation', cx, 628);

  ctx.fillStyle = '#e7f1ff';
  ctx.font = '700 24px "Segoe UI", system-ui, sans-serif';
  ctx.fillText('Pentest Web, Sécurité Applicative & Défense', cx, 664);

  // statistiques
  const stats = [
    { label: 'MODULES VALIDÉS', value: `${opts.done}/${MODULES.length}` },
    { label: "POINTS D'EXPÉRIENCE", value: `${opts.xp} XP` },
    { label: "TEMPS D'ÉTUDE", value: opts.time },
    { label: 'NIVEAU', value: opts.level }
  ];
  const bw = 286;
  const gap = 18;
  const totalW = stats.length * bw + (stats.length - 1) * gap;
  let bx = cx - totalW / 2;
  stats.forEach((s) => {
    ctx.fillStyle = 'rgba(8,16,28,0.75)';
    rr(ctx, bx, 716, bw, 108, 12);
    ctx.fill();
    ctx.strokeStyle = 'rgba(0,229,255,0.22)';
    ctx.lineWidth = 1;
    rr(ctx, bx, 716, bw, 108, 12);
    ctx.stroke();

    ctx.textAlign = 'center';
    ctx.fillStyle = 'rgba(97,120,148,1)';
    ctx.font = '600 11px "Segoe UI", system-ui, sans-serif';
    spaced(ctx, s.label, bx + bw / 2, 748, 1.4);
    ctx.fillStyle = '#00e5ff';
    ctx.font = '700 26px "Segoe UI", system-ui, sans-serif';
    ctx.fillText(s.value, bx + bw / 2, 792);
    bx += bw + gap;
  });

  // mention
  ctx.textAlign = 'center';
  ctx.fillStyle = 'rgba(255,200,87,0.95)';
  ctx.font = '600 15px "Segoe UI", system-ui, sans-serif';
  spaced(ctx, opts.mention, cx, 880, 2.4);

  // date / id
  ctx.textAlign = 'left';
  ctx.fillStyle = 'rgba(139,162,192,0.9)';
  ctx.font = '600 12px "Segoe UI", system-ui, sans-serif';
  ctx.fillText('DATE DE DÉLIVRANCE', 150, 962);
  ctx.fillStyle = '#e7f1ff';
  ctx.font = '500 18px "Segoe UI", system-ui, sans-serif';
  ctx.fillText(opts.date, 150, 990);

  ctx.textAlign = 'right';
  ctx.fillStyle = 'rgba(139,162,192,0.9)';
  ctx.font = '600 12px "Segoe UI", system-ui, sans-serif';
  ctx.fillText('IDENTIFIANT DE VÉRIFICATION', W - 150, 962);
  ctx.fillStyle = '#e7f1ff';
  ctx.font = '500 18px "Segoe UI", system-ui, sans-serif';
  ctx.fillText(opts.id, W - 150, 990);

  ctx.textAlign = 'center';
  ctx.strokeStyle = 'rgba(120,180,255,0.25)';
  ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(cx - 200, 1000); ctx.lineTo(cx + 200, 1000); ctx.stroke();
  ctx.fillStyle = 'rgba(139,162,192,0.95)';
  ctx.font = '600 13px "Segoe UI", system-ui, sans-serif';
  ctx.fillText('Direction pédagogique — Cyber Academy', cx, 1026);

  ctx.fillStyle = 'rgba(97,120,148,0.75)';
  ctx.font = '400 11px "Segoe UI", system-ui, sans-serif';
  ctx.fillText("Document pédagogique attestant de la réalisation du parcours. Ne constitue pas une certification professionnelle officielle.", cx, 1068);
}

export function renderCertificate() {
  const done = completedCount();
  const lvl = levelInfo();
  const name = state.user.name || '';
  const mention = done >= MODULES.length
    ? 'PARCOURS COMPLET — MENTION EXCELLENCE'
    : done >= 6 ? 'MENTION TRÈS BIEN'
      : done >= 4 ? 'MENTION BIEN'
        : done >= 1 ? 'PARCOURS EN COURS' : 'PARCOURS DÉBUTANT';

  const html = `
    <div class="mod-head">
      <div class="kicker">Certification</div>
      <h1>Certificat de fin de parcours</h1>
      <p class="mod-sub">Personnalisez le nom, puis téléchargez l'image ou imprimez le certificat. Il reflète votre progression réelle : modules validés, XP, temps d'étude et niveau.</p>
    </div>

    <div class="grid" style="grid-template-columns:minmax(0,1fr) minmax(280px,360px);gap:20px;align-items:start" id="cert-layout">
      <div class="cert-wrap">
        <div class="cert-canvas-wrap"><canvas id="cert-canvas" width="${W}" height="${H}" aria-label="Aperçu du certificat"></canvas></div>
      </div>
      <div class="grid" style="gap:14px">
        <div class="card">
          <div class="card-head"><h3 class="mb-0">Personnalisation</h3></div>
          <label class="field"><span>Nom sur le certificat</span>
            <input type="text" id="cert-name" maxlength="60" value="${esc(name)}" placeholder="Votre nom ou pseudonyme" autocomplete="off">
          </label>
          <div class="flex-between small muted mb-2"><span>Modules validés</span><b>${done}/${MODULES.length}</b></div>
          <div class="bar"><i style="width:${Math.round((done / MODULES.length) * 100)}%"></i></div>
          <div class="flex-between small muted mt-2"><span>XP</span><b>${state.xp}</b></div>
          <div class="flex-between small muted"><span>Temps d'étude</span><b>${fmtTime(state.study.seconds)}</b></div>
          <div class="flex-between small muted"><span>Niveau</span><b>${esc(lvl.name)}</b></div>
          <div class="flex gap mt-2" style="flex-wrap:wrap">
            <button class="btn btn-primary" id="cert-dl" type="button">⬇ Télécharger PNG</button>
            <button class="btn" id="cert-print" type="button">🖨 Imprimer / PDF</button>
          </div>
        </div>
        <div class="card pad-sm">
          <b class="small">Mention actuelle</b>
          <p class="small muted mb-0">${esc(mention)}</p>
          ${done < MODULES.length ? `<p class="small dim mb-0 mt-1">Validez les ${MODULES.length - done} module(s) restant(s) pour obtenir le parcours complet. Le certificat reste générable à tout moment.</p>` : ''}
        </div>
        <div class="card pad-sm">
          <b class="small">Identité visuelle</b>
          <p class="small muted mb-0">Le certificat est dessiné localement (Canvas) aux couleurs de Cyber Academy. Aucune donnée n'est envoyée sur un serveur.</p>
        </div>
      </div>
    </div>`;

  return {
    title: 'Certificat',
    html,
    mount(root) {
      const canvas = root.querySelector('#cert-canvas');
      const input = root.querySelector('#cert-name');

      const build = () => {
        const display = input.value.trim() || 'Apprenti';
        return {
          name: display,
          done,
          xp: state.xp,
          time: fmtTime(state.study.seconds),
          level: lvl.name,
          date: fmtDate(),
          id: verificationId(display, state.xp),
          mention
        };
      };

      const redraw = () => drawCertificate(canvas, build());
      redraw();
      input.addEventListener('input', redraw);

      const ensureName = () => {
        if (!input.value.trim()) {
          toast('Indiquez un nom avant de générer le certificat', 'error');
          input.focus();
          return false;
        }
        return true;
      };

      root.querySelector('#cert-dl').addEventListener('click', () => {
        if (!ensureName()) return;
        const slug = (input.value.trim() || 'apprenti').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        const url = canvas.toDataURL('image/png');
        const a = document.createElement('a');
        a.href = url;
        a.download = `cyber-academy-certificat-${slug}.png`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        markCertificate();
        toast('Certificat téléchargé en PNG', 'success', '🎖️');
      });

      root.querySelector('#cert-print').addEventListener('click', () => {
        if (!ensureName()) return;
        const url = canvas.toDataURL('image/png');
        printHtml(`<div style="text-align:center;padding:0"><img src="${url}" alt="Certificat Cyber Academy" style="width:100%;max-width:1000px"></div>`);
        markCertificate();
      });
    }
  };
}
