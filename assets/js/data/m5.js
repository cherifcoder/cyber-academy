export default {
  id: 'm5',
  num: 5,
  title: "Maîtrise de Burp Suite",
  short: "Burp Suite",
  icon: "🕵️",
  xp: 380,
  duration: 75,
  summary: "Le proxy d'interception de référence : configuration navigateur, Repeater, Intruder, Decoder, Comparer, Sequencer, Logger et extensions indispensables.",
  objectives: [
    "Configurer Burp et FoxyProxy avec le certificat CA",
    "Intercepter, modifier et rejouer des requêtes HTTP/S",
    "Choisir le bon type d'attaque Intruder (sniper, battering ram, pitchfork, cluster bomb)",
    "Utiliser Decoder, Comparer, Sequencer et les extensions BApp"
  ],
  blocks: [
    {
      t: 'p',
      x: "Burp Suite est un <strong>proxy d'interception</strong> : tout le trafic du navigateur passe par lui, ce qui permet de l'observer, de le modifier et de le rejouer. La version Community suffit pour l'apprentissage ; la version Pro ajoute le scanner et l'Intruder illimité."
    },
    {
      t: 'steps',
      items: [
        { h: "1. Lancer Burp", p: "Ouvrir Burp → Proxy → Options : vérifier l'écouteur sur 127.0.0.1:8080. Activer « Intercept is on » uniquement quand vous voulez bloquer les requêtes." },
        { h: "2. Configurer le navigateur", p: "Installer FoxyProxy (Firefox/Chrome), créer un profil HTTP 127.0.0.1:8080. Utiliser un navigateur dédié au test, avec un profil vierge." },
        { h: "3. Installer le certificat", p: "Avec le proxy actif, ouvrir http://burpsuite, télécharger le DER, l'importer dans les autorités de certification. Vérifier que le cadenas HTTPS est valide." },
        { h: "4. Définir le scope", p: "Target → Scope → Add : domaine cible uniquement. Cocher « Use advanced scope control » pour limiter les ports et protocoles. Le scope filtre le sitemap et l'historique." },
        { h: "5. Cartographier", p: "Naviguer dans l'application. Le Sitemap se construit automatiquement. Envoyer chaque requête intéressante vers Repeater avec Ctrl+R." }
      ]
    },
    {
      t: 'callout', v: 'warn', title: "HTTPS qui ne passe pas ?",
      x: "Erreur de certificat = CA non installée. Page blanche = proxy mal configuré ou application qui épingle les certificats (certificate pinning) — fréquent sur les apps mobiles. Dans ce cas, utilisez un appareil rooté avec objection/Frida, uniquement dans un lab."
    },
    { t: 'h', x: "5.1 Les outils, un par un" },
    {
      t: 'mini',
      items: [
        { v: 'cyan', h: 'Proxy', p: "Intercepte et permet de modifier chaque requête/réponse. Historique complet, filtres, coloration." },
        { v: 'magenta', h: 'Repeater', p: "Éditeur manuel de requêtes : modifier un paramètre, renvoyer, comparer les réponses. L'outil le plus utilisé." },
        { v: 'amber', h: 'Intruder', p: "Attaques automatisées par positions et payloads. Community : throttlé. Pro : rapide et configurable." },
        { v: 'lime', h: 'Decoder', p: "Encodage/décodage URL, Base64, hex, HTML, gzip. Indispensable face aux tokens et cookies." },
        { v: 'violet', h: 'Comparer', p: "Diff de deux réponses ou requêtes (mots ou octets). Parfait pour le blind et les variations subtiles." },
        { v: 'red', h: 'Sequencer', p: "Analyse l'entropie des jetons de session. Détecte un PRNG prévisible." }
      ]
    },
    { t: 'h', x: "5.2 Repeater : la boucle de test" },
    {
      t: 'p',
      x: "Le cycle de travail est toujours le même : <strong>capturer → envoyer vers Repeater → modifier un seul élément → comparer → conclure</strong>. Modifiez un paramètre à la fois pour attribuer l'effet observé."
    },
    {
      t: 'code', lang: 'http', title: "Requête typique à manipuler",
      x: `GET /api/profile?user=alice HTTP/1.1
Host: app.lab
Cookie: session=eyJ1aWQiOjEwNDJ9
Authorization: Bearer eyJhbGciOiJIUzI1NiJ9...
Accept: application/json

# Tests : user=bob, cookie décodé/modifié, suppression du header,
# ajout de X-Forwarded-For: 127.0.0.1, changement de méthode, etc.`
    },
    {
      t: 'callout', v: 'tip', title: "Le droit à l'erreur",
      x: "Repeater ne fait rien tout seul : c'est vous qui décidez. C'est l'endroit sûr pour tester des variantes d'encodage, des en-têtes de contournement et des payloads. Gardez une trace (Logger / notes) de chaque requête qui donne un résultat."
    },
    { t: 'h', x: "5.3 Intruder : quatre modes d'attaque" },
    {
      t: 'table',
      head: ['Mode', 'Principe', 'Cas d’usage'],
      rows: [
        ['Sniper', "Un payload à la fois, une position à la fois", "Tester un paramètre avec une wordlist (fuzzing)"],
        ['Battering ram', "Le même payload dans toutes les positions", "Mot de passe identique partout, injections simples"],
        ['Pitchfork', "Une wordlist par position, avancement synchronisé", "Login/mot de passe appariés"],
        ['Cluster bomb', "Toutes les combinaisons possibles", "Énumération login × mot de passe (attention au volume)"]
      ]
    },
    {
      t: 'code', lang: 'text', title: "Configurer une attaque sur un login",
      x: `POST /login HTTP/1.1
Host: lab.local
Content-Type: application/x-www-form-urlencoded

username=§alice§&password=§wrong§

# 1. Sélectionner les deux valeurs → Add §
# 2. Type d'attaque : Cluster bomb
# 3. Payload set 1 : users.txt (alice, bob, admin)
# 4. Payload set 2 : passwords.txt (rockyou top 100)
# 5. Grep - Match : "Welcome", "Invalid credentials"
# 6. Resource pool : 1 thread (éviter le lockout)`
    },
    {
      t: 'callout', v: 'danger', title: "Attention au verrouillage de compte",
      x: "Un cluster bomb sur un vrai login peut verrouiller des comptes et déclencher le SOC. En lab, c'est sans risque. En mission, utilisez des comptes de test fournis par le client et un throttling explicite dans les RoE."
    },
    { t: 'h', x: "5.4 Decoder, Comparer, Sequencer" },
    {
      t: 'ul',
      x: [
        "<strong>Decoder</strong> : décoder un JWT (Base64URL) pour lire les claims, puis re-signer si la clé est faible. Attention : un JWT lisible n'est pas une faille — la faille est une signature absente ou vérifiable avec une clé devinable.",
        "<strong>Comparer</strong> : en blind, deux réponses qui semblent identiques diffèrent souvent de quelques octets. Le diff révèle le bit qui change.",
        "<strong>Sequencer</strong> : collectez ≥ 100 jetons, vérifiez l'entropie. Un token qui augmente de 1 est immédiatement exploitable."
      ]
    },
    {
      t: 'code', lang: 'bash', title: "Décoder un JWT à la main",
      x: `# Header
echo 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9' | base64 -d

# Payload
echo 'eyJ1aWQiOjEwNDIsInJvbGUiOiJ1c2VyIn0' | base64 -d
{"uid":1042,"role":"user"}

# Test "alg: none" en lab : reconstruire un JWT sans signature
# Test de clé faible : hashcat -a 0 -m 16500 jwt.txt wordlist.txt`
    },
    { t: 'h', x: "5.5 Extensions utiles (BApp Store)" },
    {
      t: 'table',
      head: ['Extension', 'Apport'],
      rows: [
        ['Turbo Intruder', "Requêtes massives et attaques par race condition"],
        ['Autorize', "Détection automatique des problèmes d'autorisation (IDOR/BAC)"],
        ['Param Miner', "Découverte de paramètres et d'en-têtes cachés"],
        ['JWT Editor', "Édition et attaque de tokens JWT"],
        ['Logger++', "Journalisation avancée et recherche dans l'historique"],
        ['Hackvertor', "Encodages et transformations personnalisées"],
        ['Collaborator Everywhere', "Détection SSRF/blind via un domaine contrôlé (Pro)"]
      ]
    },
    {
      t: 'callout', v: 'info', title: "Bonnes pratiques de travail",
      x: "Un projet Burp par mission, un scope propre, des notes par endpoint, des captures horodatées. Sauvegardez le projet (Pro) ou exportez l'historique régulièrement. Un rapport sans preuve reproductible ne vaut rien."
    },
    { t: 'h', x: "5.6 Atelier : interception et falsification" },
    {
      t: 'p',
      x: "Vous interceptez une requête de commande. Modifiez le prix, l'identifiant ou les en-têtes, puis observez la réponse du serveur simulé."
    },
    { t: 'lab', id: 'burp' }
  ],
  quiz: 'q5'
};
