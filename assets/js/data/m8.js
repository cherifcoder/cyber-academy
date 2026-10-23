export default {
  id: 'm8',
  num: 8,
  title: "Sécurisation & Défense Applicative",
  short: "Blue Team",
  icon: "🛡️",
  xp: 450,
  duration: 85,
  summary: "Construire une application résiliente : secure coding, en-têtes de sécurité, CSP, sessions, MFA, WAF et durcissement. La contrepartie défensive de chaque attaque.",
  objectives: [
    "Appliquer la validation, le paramétrage et l'encodage au bon endroit",
    "Déployer une CSP, HSTS et les en-têtes de sécurité essentiels",
    "Sécuriser sessions, authentification et secrets",
    "Utiliser un WAF sans en faire une béquille, et produire une checklist de durcissement"
  ],
  blocks: [
    {
      t: 'p',
      x: "La défense applicative ne consiste pas à « bloquer les payloads » : elle consiste à <strong>supprimer les classes de bugs</strong>. Un WAF qui bloque <code>UNION SELECT</code> ne corrige pas une concaténation SQL. Le modèle mental à retenir : <strong>valider à l'entrée, encoder à la sortie, autoriser explicitement, minimiser les privilèges</strong>."
    },
    { t: 'h', x: "8.1 Secure coding : les quatre réflexes" },
    {
      t: 'mini',
      items: [
        { v: 'cyan', h: '1. Valider', p: "Allowlist de format, type, longueur, plage. Refuser par défaut. La validation côté client est de l'UX, pas de la sécurité." },
        { v: 'magenta', h: '2. Paramétrer', p: "Requêtes préparées, ORM, appels système sans shell. La donnée ne doit jamais devenir du code." },
        { v: 'lime', h: '3. Encoder', p: "Encodage contextuel à la sortie (HTML, attribut, JS, URL, CSS). C'est la seule défense fiable contre le XSS." },
        { v: 'amber', h: '4. Autoriser', p: "Contrôle d'accès serveur sur chaque objet et chaque action. Deny by default, moindre privilège." }
      ]
    },
    {
      t: 'code', lang: 'javascript', title: "Validation + requête paramétrée + encodage",
      x: `import { z } from "zod";

// 1. Validation stricte côté serveur
const SearchSchema = z.object({
  q: z.string().trim().min(2).max(80).regex(/^[\\p{L}\\p{N} .-]+$/u),
  page: z.coerce.number().int().min(1).max(100).default(1)
});

app.get("/api/search", async (req, res) => {
  const parsed = SearchSchema.safeParse(req.query);
  if (!parsed.success) return res.status(400).json({ error: "invalid" });
  const { q, page } = parsed.data;

  // 2. Requête paramétrée (jamais de concaténation)
  const rows = await db.query(
    "SELECT id, title FROM articles WHERE title ILIKE $1 ORDER BY id LIMIT 20 OFFSET $2",
    ["%" + q + "%", (page - 1) * 20]
  );

  // 3. Sortie structurée : le client encode selon son contexte
  res.json({ items: rows });
});`
    },
    {
      t: 'callout', v: 'warn', title: "Les filtres blacklist échouent",
      x: "Interdire <code>&lt;script&gt;</code>, <code>SELECT</code> ou <code>../</code> se contourne par encodage, double encodage, casse, Unicode ou syntaxe alternative. Une allowlist et un encodage contextuel sont déterministes ; une blacklist est une devinette."
    },
    { t: 'h', x: "8.2 En-têtes de sécurité" },
    {
      t: 'table',
      head: ['En-tête', 'Valeur recommandée', 'Protège contre'],
      rows: [
        ['Content-Security-Policy', "default-src 'self'; script-src 'self' 'nonce-…'; object-src 'none'; base-uri 'none'", "XSS, injection de ressources"],
        ['Strict-Transport-Security', "max-age=63072000; includeSubDomains; preload", "Downgrade, SSL stripping"],
        ['X-Content-Type-Options', "nosniff", "MIME sniffing"],
        ['X-Frame-Options / frame-ancestors', "DENY (ou SAMEORIGIN)", "Clickjacking"],
        ['Referrer-Policy', "strict-origin-when-cross-origin", "Fuite d'URL sensibles"],
        ['Permissions-Policy', "camera=(), microphone=(), geolocation=()", "Abus d'API navigateur"],
        ['Cross-Origin-Opener-Policy', "same-origin", "Fuites cross-origin (Spectre)"],
        ['Cross-Origin-Resource-Policy', "same-origin", "Lectures cross-origin"],
        ['Cache-Control', "no-store (pages sensibles)", "Mise en cache de données privées"]
      ]
    },
    {
      t: 'code', lang: 'nginx', title: "Configuration Nginx",
      x: `server {
    listen 443 ssl http2;
    server_name app.example;

    add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "DENY" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Permissions-Policy "camera=(), microphone=(), geolocation=()" always;
    add_header Content-Security-Policy "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; object-src 'none'; base-uri 'none'; frame-ancestors 'none'" always;

    # Ne pas divulguer la version
    server_tokens off;
}`
    },
    {
      t: 'callout', v: 'info', title: "Déployer une CSP sans casser le site",
      x: "Commencez en <code>Content-Security-Policy-Report-Only</code> avec un endpoint de collecte, corrigez les sources inline (nonces/hashes), puis passez en mode bloquant. Une CSP avec <code>'unsafe-inline'</code> et <code>'unsafe-eval'</code> n'apporte presque rien."
    },
    { t: 'h', x: "8.3 Sessions, authentification, MFA" },
    {
      t: 'ul',
      x: [
        "<strong>Cookies</strong> : <code>HttpOnly</code>, <code>Secure</code>, <code>SameSite=Lax</code> ou <code>Strict</code>, <code>__Host-</code> prefix, <code>Path=/</code>, expiration courte.",
        "<strong>Rotation</strong> : nouvel identifiant de session à la connexion et à chaque élévation de privilège ; révocation côté serveur à la déconnexion.",
        "<strong>Mots de passe</strong> : minimum 12 caractères, pas de règles de composition arbitraires, vérification contre les fuites connues (k-anonymat), hachage Argon2id/bcrypt.",
        "<strong>MFA</strong> : TOTP ou WebAuthn de préférence au SMS ; codes à usage unique, liés à la session, anti-replay, rate limit.",
        "<strong>Anti-bruteforce</strong> : limitation par IP + par compte, verrouillage progressif, CAPTCHA adaptatif, alertes.",
        "<strong>Réinitialisation</strong> : jeton à usage unique, expiration courte, ne pas révéler l'existence du compte."
      ]
    },
    {
      t: 'code', lang: 'javascript', title: "Session et cookie durcis (Express)",
      x: `app.use(session({
  name: "__Host-sid",
  secret: process.env.SESSION_SECRET,     // 32+ octets, hors code
  cookie: {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 30 * 60 * 1000,               // 30 min
    path: "/"
  },
  resave: false,
  saveUninitialized: false,
  store: new RedisStore({ client: redis }) // pas de MemoryStore en prod
}));

// Régénérer l'ID après authentification
req.session.regenerate((err) => {
  if (err) return next(err);
  req.session.userId = user.id;
  req.session.save(() => res.redirect("/dashboard"));
});`
    },
    { t: 'h', x: "8.4 WAF et défense en profondeur" },
    {
      t: 'p',
      x: "Un <strong>WAF</strong> (ModSecurity + OWASP Core Rule Set, Cloudflare, AWS WAF) filtre les requêtes connues. Il réduit le bruit et sert de <strong>mitigation temporaire</strong> entre la découverte d'une faille et son correctif, mais il ne remplace jamais la correction du code."
    },
    {
      t: 'table',
      head: ['Couche', 'Rôle', 'Limite'],
      rows: [
        ['WAF', "Bloquer les signatures et anomalies", "Contournable par encodage, logique métier"],
        ['Validation applicative', "Refuser les entrées non conformes", "Ne protège pas d'une logique défaillante"],
        ['Requêtes préparées', "Séparer code et données", "Nécessite une discipline sur tout le code"],
        ['Encodage de sortie', "Neutraliser le HTML/JS", "Doit être contextuel"],
        ['CSP', "Limiter l'exécution de scripts", "Complexe à maintenir, bypass si mal configurée"],
        ['Monitoring / SIEM', "Détecter et alerter", "Ne prévient pas, réduit le temps de réponse"]
      ]
    },
    {
      t: 'callout', v: 'tip', title: "Virtual patching",
      x: "Une règle WAF ciblée (<code>SecRule ARGS \"@rx …\" \"id:1001,phase:2,deny,status:403\"</code>) peut protéger une faille critique le temps du correctif. Documentez-la comme mesure temporaire avec une date de retrait, sinon elle devient une dette invisible."
    },
    { t: 'h', x: "8.5 Checklist de durcissement" },
    {
      t: 'ul',
      x: [
        "TLS 1.2+ uniquement, suites fortes, HSTS preload, redirection HTTP → HTTPS.",
        "En-têtes de sécurité complets, aucun header révélant serveur/framework/version.",
        "Comptes et mots de passe par défaut supprimés ; MFA sur les accès admin.",
        "Principe du moindre privilège pour l'app, la base et le système de fichiers.",
        "Secrets dans un gestionnaire (Vault, Secrets Manager), jamais dans Git.",
        "Dépendances à jour, SCA en CI, images de conteneurs minimales et non-root.",
        "Journalisation centralisée, horodatée, sans données sensibles, alertes sur les événements critiques.",
        "Sauvegardes chiffrées, testées, avec restauration documentée.",
        "Environnements de dev/staging isolés, debug désactivé en production.",
        "Plan de réponse à incident et procédure de divulgation de vulnérabilités."
      ]
    },
    {
      t: 'p',
      x: "La checklist complète, prête à télécharger, est disponible dans la <a href=\"#/toolbox\">Boîte à outils</a> (section Durcissement)."
    },
    { t: 'h', x: "8.6 Atelier : durcir un serveur" },
    {
      t: 'p',
      x: "Activez les en-têtes de sécurité un par un et observez l'évolution du score et des risques neutralisés. Certains en-têtes ont un coût : trouvez le bon équilibre."
    },
    { t: 'lab', id: 'headers' }
  ],
  quiz: 'q8'
};
