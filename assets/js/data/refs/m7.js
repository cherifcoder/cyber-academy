export default {
  blocks: [
    { t: 'h', x: "7.5 Fiches commandes : calculer, extraire et produire le rapport" },
    {
      t: 'p',
      x: "Le reporting n'échappe pas à la rigueur technique : un score CVSS doit être <strong>reproductible</strong>, une preuve doit être <strong>intègre</strong>, un constat doit être <strong>traçable</strong>. Ces commandes automatisent les tâches répétitives et évitent les erreurs de recopie."
    },
    {
      t: 'cmdref',
      items: [
        {
          cmd: 'python3 (calcul CVSS)', tag: 'Calcul',
          what: "Exécute un court script Python pour appliquer la formule CVSS v3.1 et vérifier un score.",
          gives: "Le score de base, la sévérité et éventuellement le vecteur. Permet de contrôler un calculateur en ligne.",
          use: "Utiliser les pondérations officielles, puis arrondir avec <code>ceil(x*10)/10</code>. Ne jamais « arrondir à l'œil ».",
          syntax: "python3 -c \"...formule...\"",
          example: "python3 -c \"import math; iss=1-(1-.56)*(1-.56)*(1-.0); imp=6.42*iss; exp=8.22*.85*.77*.85*.85; print(math.ceil(min(imp+exp,10)*10)/10)\"",
          read: "Le résultat doit correspondre au score du calculateur officiel. Un écart signale une pondération ou un arrondi incorrect.<br><br><b>Exemple :</b> <code>AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:N</code> → 9.1 (Critical)."
        },
        {
          cmd: 'jq', tag: 'Extraction JSON',
          what: "Filtre et transforme du JSON en ligne de commande.",
          gives: "Les champs choisis (nom, sévérité, URL, preuve) sous forme lisible ou CSV.",
          use: "Extraire les vulnérabilités d'un scan, compter par sévérité, préparer un tableau de suivi.",
          syntax: 'jq \'.[] | {name, severity, url}\' fichier.json',
          example: 'jq -r \'.[] | select(.severity=="critical") | [.name,.url]\' findings.json',
          read: "Un JSON valide produit une sortie structurée. Une erreur de parsing signifie que le fichier est tronqué ou que le schéma diffère.",
          pivot: "Utilisez la sortie pour construire le tableau de remédiation, pas pour remplacer la validation manuelle des constats."
        },
        {
          cmd: 'grep (extraction de preuves)', tag: 'Extraction',
          what: "Filtre des lignes dans des logs ou des réponses HTTP.",
          gives: "Les lignes pertinentes : codes, erreurs, en-têtes, identifiants, preuves.",
          use: "Extraire une requête/réponse précise sans copier tout un fichier. Utiliser <code>-n</code> pour les numéros de ligne, <code>-i</code> pour la casse.",
          syntax: 'grep -nEi "motif" fichier',
          example: 'grep -nEi "union|syntax error|sleep" evidence/sqli.txt',
          read: "Un grep ciblé produit une preuve courte et lisible. Vérifiez le contexte autour de la ligne pour ne pas sortir la phrase de son sens.",
          pivot: "Collez la ligne et son contexte dans la fiche de vulnérabilité, avec le chemin du fichier source."
        },
        {
          cmd: 'sha256sum (preuves)', tag: 'Intégrité',
          what: "Calcule l'empreinte d'un rapport, d'une capture ou d'un export.",
          gives: "Une valeur SHA-256 qui permet de vérifier que le livrable n'a pas été modifié.",
          use: "Hasher le rapport final et les preuves jointes. Conserver les empreintes dans un fichier séparé.",
          syntax: 'sha256sum rapport.pdf > rapport.pdf.sha256',
          example: 'sha256sum rapport-audit-v1.pdf > rapport-audit-v1.pdf.sha256',
          read: "Le hash prouve l'intégrité, pas l'authenticité. Pour l'authenticité, signez avec une clé GPG ou un certificat.",
          pivot: "Joignez le fichier .sha256 au livrable et mentionnez-le dans l'email de remise."
        },
        {
          cmd: 'date / openssl rand', tag: 'Identifiants',
          what: "<code>date</code> fournit un horodatage ; <code>openssl rand</code> génère un identifiant aléatoire.",
          gives: "Une date ISO et un identifiant unique pour le rapport, la version et les constats.",
          use: "Nommer les rapports de façon stable : <code>2026-10-24_acme_audit-v1.pdf</code>. Utiliser un ID court pour chaque constat.",
          syntax: 'date +%Y-%m-%d; openssl rand -hex 4',
          example: 'echo "RAPPORT-$(date +%Y%m%d)-$(openssl rand -hex 3)"',
          read: "Un identifiant unique évite les collisions entre versions et facilite les références croisées dans le tableau de remédiation.",
          pivot: "Réutilisez le même ID dans le rapport, le ticket de remédiation et le retest."
        },
        {
          cmd: 'sort / wc', tag: 'Priorisation',
          what: "<code>sort</code> trie des lignes ; <code>wc</code> compte lignes, mots et caractères.",
          gives: "Un classement par sévérité ou par date, et des totaux pour la synthèse exécutive.",
          use: "Compter les constats par sévérité et vérifier qu'aucun n'est oublié. Trier un CSV de suivi.",
          syntax: 'sort -t, -k2,2r findings.csv; wc -l findings.csv',
          example: 'sort -t, -k2,2r findings.csv | head -10; wc -l findings.csv',
          read: "Les totaux doivent correspondre au tableau détaillé. Un écart indique une ligne manquante ou un doublon.",
          pivot: "Reportez les totaux dans la synthèse exécutive : « 2 critiques, 5 élevées, 8 moyennes »."
        },
        {
          cmd: 'pandoc', tag: 'Export',
          what: "Convertit un document Markdown en PDF, DOCX ou HTML.",
          gives: "Un livrable au format attendu par le client, avec une table des matières et un style cohérent.",
          use: "Écrire le rapport en Markdown, puis exporter. Pour un PDF soigné, utiliser un template LaTeX ou l'impression navigateur.",
          syntax: 'pandoc rapport.md -o rapport.pdf --toc',
          example: 'pandoc rapport-audit.md -o rapport-audit.pdf --toc --pdf-engine=xelatex',
          read: "Vérifiez le rendu final : pagination, tableaux, liens, accents. Un PDF cassé décrédibilise le contenu.",
          pivot: "Hashez le PDF final et archivez la source Markdown pour les corrections futures."
        }
      ]
    },
    { t: 'h', x: "7.6 Glossaire : risque, score et communication" },
    {
      t: 'glossary',
      items: [
        { term: 'CVSS', full: 'Common Vulnerability Scoring System', def: "Système standardisé de notation de la sévérité d'une vulnérabilité, de 0 à 10.", use: "Décrire la sévérité technique de façon reproductible, sans remplacer le contexte métier.", ex: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:N = 9.1' },
        { term: 'Vecteur CVSS', def: "Chaîne qui liste les métriques et leurs valeurs.", use: "Documenter le raisonnement et permettre de recalculer le score.", ex: 'AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H' },
        { term: 'Métriques de base', def: "AV, AC, PR, UI, S, C, I, A : les caractéristiques intrinsèques de la vulnérabilité.", use: "Elles ne dépendent pas du temps ni de l'environnement.", ex: 'AV:N, AC:L, PR:N, UI:N' },
        { term: 'Threat / Temporal', def: "Métriques qui évoluent dans le temps (exploit disponible, correctif, confiance).", use: "Ajuster le score selon la menace réelle ; v4.0 utilise le groupe Threat.", ex: 'E:P (proof-of-concept), E:F (fonctionnel)' },
        { term: 'Environmental', def: "Métriques qui reflètent le contexte de l'organisation (exposition, contrôles, importance).", use: "Prioriser un 6.1 exposé à Internet avant un 9.8 interne inaccessible.", ex: 'CR:H, IR:H, AR:H' },
        { term: 'Sévérité', def: "Catégorie dérivée du score : None, Low, Medium, High, Critical.", use: "Communiquer une priorité de correction, avec un délai indicatif.", ex: '9.1 = Critical' },
        { term: 'CVE / CWE', def: "CVE identifie une vulnérabilité publique ; CWE identifie une classe de faiblesse.", use: "Référencer les sources et les bonnes pratiques de remédiation.", ex: 'CVE-2021-41773 / CWE-22' },
        { term: 'PoC', full: 'proof of concept', def: "Preuve minimale et reproductible de la vulnérabilité.", use: "Démontrer l'impact sans exfiltrer de données ni nuire.", ex: 'une requête et une réponse' },
        { term: 'Synthèse exécutive', def: "Résumé non technique destiné à la direction.", use: "Donner le risque global, les chiffres et 3 à 5 actions prioritaires.", ex: '« 2 failles critiques exposent les données clients. »' },
        { term: 'Remédiation', def: "Action corrective qui supprime ou réduit la vulnérabilité.", use: "Être spécifique, testable et associée à un délai et un responsable.", ex: 'Remplacer la concaténation SQL par des requêtes préparées.' },
        { term: 'Risque', def: "Combinaison de la probabilité d'exploitation et de l'impact métier.", use: "Croiser CVSS, exposition, données et contrôles compensatoires.", ex: 'Un 9.8 interne non exposé peut être moins prioritaire qu’un 6.1 public.' },
        { term: 'SLA de correction', def: "Délai contractuel ou interne de correction selon la sévérité.", use: "Aligner les attentes et suivre les échéances.", ex: 'Critique 72 h, élevée 14 j, moyenne 30 j.' },
        { term: 'Retest', def: "Vérification après correction qu'une vulnérabilité n'est plus exploitable.", use: "Rejouer la même preuve et documenter le résultat.", ex: 'Même requête, réponse 403 après correctif.' },
        { term: 'Traçabilité', def: "Capacité à relier un constat à une preuve, une date et une source.", use: "Numéroter les constats, joindre les fichiers et hasher le livrable.", ex: 'FIND-001 → evidence/sqli.txt' },
        { term: 'Faux positif', def: "Alerte qui ne correspond pas à une vulnérabilité réelle ou exploitable.", use: "Valider manuellement avant de rapporter ; documenter pourquoi elle est écartée.", ex: 'Un scanner signale une XSS sur une page encodée.' },
        { term: 'Fiche de vulnérabilité', def: "Description standardisée d'un constat : titre, sévérité, preuve, impact, remédiation.", use: "Permettre à un développeur de reproduire et corriger sans vous appeler.", ex: 'Titre = composant + vulnérabilité + condition.' }
      ]
    }
  ],
  exos: [
    {
      id: 'm7-e1',
      title: 'Calculer un score CVSS critique',
      context: "Une SQLi non authentifiée permet de lire et modifier toutes les données. Vecteur : <code>AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:N</code>.",
      task: "Calculez le score avec Python en utilisant les pondérations officielles.",
      hint: "Reprenez la formule : ISS, Impact, Exploitability, puis arrondi supérieur au dixième.",
      accept: [/python3\s+-c\s+.*(iss|impact).*(exp|exploit).*print/i, /python3\s+-c\s+.*9\.1/i],
      solution: "python3 -c \"import math; iss=1-(1-.56)**3; imp=6.42*iss; exp=8.22*.85*.77*.85*.85; print(math.ceil(min(imp+exp,10)*10)/10)\"",
      output: ['9.1'],
      read: "Le score est 9.1, donc Critical. La confidentialité et l'intégrité sont élevées, la disponibilité non affectée.",
      pivot: "Documentez le vecteur complet et le score. Priorité de correction : immédiate (24–72 h) avec mitigation temporaire possible."
    },
    {
      id: 'm7-e2',
      title: 'Calculer un score authentifié',
      context: "La même SQLi est derrière une authentification avec un compte à faibles privilèges. Vecteur : <code>AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:N</code>.",
      task: "Calculez le score avec la pondération PR:L (0.62).",
      hint: "Remplacez le facteur PR de 0.85 par 0.62 dans Exploitability.",
      accept: [/python3\s+-c\s+.*\.62.*print/i, /python3\s+-c\s+.*8\.8/i],
      solution: "python3 -c \"import math; iss=1-(1-.56)**3; imp=6.42*iss; exp=8.22*.85*.77*.62*.85; print(math.ceil(min(imp+exp,10)*10)/10)\"",
      output: ['8.8'],
      read: "Le score baisse à 8.8 (High). L'authentification réduit l'exploitabilité mais l'impact reste maximal.",
      pivot: "Comparez les deux scores dans le rapport : la même faille n'a pas la même priorité selon l'exposition. Recommandez la correction prioritaire malgré tout."
    },
    {
      id: 'm7-e3',
      title: 'Extraire les constats critiques d\'un JSON',
      context: "Un scanner a produit <code>findings.json</code>. Vous devez isoler les constats critiques pour la synthèse.",
      task: "Utilisez <code>jq</code> pour afficher le nom et l'URL des constats dont la sévérité est « critical ».",
      hint: "Filtre : <code>jq -r '.[] | select(.severity==\"critical\") | [.name,.url]'</code>.",
      accept: [/jq\s+-r\s+.*select\(\.severity\s*==\s*["']critical["']\).*/i],
      solution: "jq -r '.[] | select(.severity==\"critical\") | [.name,.url]' findings.json",
      output: [
        '["SQL Injection","https://app.acme.example/api/report"]',
        '["IDOR","https://app.acme.example/api/invoices/1043"]',
        '++2 constats critiques extraits'
      ],
      read: "Deux constats critiques sont confirmés. Les autres sévérités ne sont pas affichées.",
      pivot: "Reportez ces deux constats en tête du plan de remédiation. Vérifiez qu'ils sont bien validés manuellement."
    },
    {
      id: 'm7-e4',
      title: 'Compter les constats par sévérité',
      context: "Vous devez remplir la synthèse exécutive avec des chiffres exacts.",
      task: "Comptez le nombre total de lignes de <code>findings.csv</code> puis affichez les 5 premières lignes triées par sévérité décroissante.",
      hint: "Enchaînez <code>wc -l findings.csv</code> et <code>sort -t, -k2,2r findings.csv | head -5</code>.",
      accept: [/wc\s+-l\s+findings\.csv.*sort\s+-t,\s+-k2,2r\s+findings\.csv\s*\|\s*head\s+-5/i, /sort\s+-t,\s+-k2,2r\s+findings\.csv.*wc\s+-l/i],
      solution: 'wc -l findings.csv; sort -t, -k2,2r findings.csv | head -5',
      output: [
        '17 findings.csv',
        'FIND-003,critical,SQL Injection,https://app.acme.example/api/report',
        'FIND-007,critical,IDOR,https://app.acme.example/api/invoices/1043',
        'FIND-001,high,Stored XSS,https://app.acme.example/comments',
        'FIND-004,high,SSRF,https://app.acme.example/api/fetch',
        'FIND-009,medium,Missing CSP,https://app.acme.example/'
      ],
      read: "17 constats au total, dont 2 critiques et 2 élevés en tête. Les chiffres sont cohérents avec le tableau.",
      pivot: "Utilisez ces totaux dans la synthèse : « 17 constats : 2 critiques, 2 élevés, … ». Ne mélangez pas sévérité technique et priorité métier."
    },
    {
      id: 'm7-e5',
      title: 'Extraire une preuve SQLi',
      context: "Le fichier <code>evidence/sqli.txt</code> contient des centaines de lignes. Vous cherchez les erreurs et les UNION.",
      task: "Affichez les lignes contenant « syntax error », « union » ou « sleep », avec leur numéro de ligne.",
      hint: "Utilisez <code>grep -nEi</code> avec une alternation.",
      accept: [/^grep\s+-nEi\s+["'].*syntax error.*union.*sleep.*["']\s+evidence\/sqli\.txt$/i],
      solution: 'grep -nEi "syntax error|union|sleep" evidence/sqli.txt',
      output: [
        '42: You have an error in your SQL syntax near ...',
        '87: 1 UNION SELECT null,email,password_hash FROM users-- -',
        '121: ... SLEEP(5) ...',
        '++3 lignes de preuve identifiées'
      ],
      read: "Les lignes 42, 87 et 121 contiennent les preuves clés. Elles sont courtes et citables dans le rapport.",
      pivot: "Joignez uniquement ces extraits, avec le chemin du fichier source et le contexte de la requête. Évitez de coller tout le log."
    },
    {
      id: 'm7-e6',
      title: 'Hasher le rapport final',
      context: "Le rapport PDF est prêt à être envoyé. Vous devez produire une empreinte d'intégrité.",
      task: "Calculez le SHA-256 de <code>rapport-audit-v1.pdf</code> et enregistrez-le dans un fichier <code>.sha256</code>.",
      hint: "Utilisez <code>sha256sum</code> avec une redirection.",
      accept: [/^sha256sum\s+rapport-audit-v1\.pdf\s*>\s*rapport-audit-v1\.pdf\.sha256$/i],
      solution: 'sha256sum rapport-audit-v1.pdf > rapport-audit-v1.pdf.sha256',
      output: ['..(empreinte enregistrée)', '++rapport-audit-v1.pdf.sha256 créé'],
      read: "Le fichier .sha256 contient l'empreinte. Il permet au client de vérifier que le PDF n'a pas été altéré.",
      pivot: "Mentionnez l'empreinte dans l'email de remise. Pour l'authenticité, signez le hash avec GPG."
    },
    {
      id: 'm7-e7',
      title: 'Générer un identifiant de rapport',
      context: "Vous devez nommer le rapport de façon unique et traçable.",
      task: "Générez une chaîne <code>RAPPORT-YYYYMMDD-xxxxxx</code> avec la date du jour et 3 octets aléatoires en hexadécimal.",
      hint: "Enchaînez <code>date +%Y%m%d</code> et <code>openssl rand -hex 3</code>.",
      accept: [/echo\s+["']?RAPPORT-\$\(date\s+\+%Y%m%d\)-\$\(openssl\s+rand\s+-hex\s+3\)/i],
      solution: 'echo "RAPPORT-$(date +%Y%m%d)-$(openssl rand -hex 3)"',
      output: ['RAPPORT-20261024-9f3a7c'],
      read: "L'identifiant contient la date et un suffixe aléatoire. Il est unique et lisible.",
      pivot: "Réutilisez cet identifiant dans le nom des fichiers, le tableau de suivi et les échanges avec le client."
    },
    {
      id: 'm7-e8',
      title: 'Construire un vecteur CVSS',
      context: "Une XSS stockée est exploitable à distance, sans authentification, avec interaction de la victime, et affecte la confidentialité et l'intégrité.",
      task: "Écrivez le vecteur CVSS v3.1 correspondant : AV:N, AC:L, PR:N, UI:R, S:U, C:H, I:H, A:N.",
      hint: "Le format est <code>CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:U/C:H/I:H/A:N</code>.",
      accept: [/^echo\s+["']?CVSS:3\.1\/AV:N\/AC:L\/PR:N\/UI:R\/S:U\/C:H\/I:H\/A:N["']?$/i],
      solution: "echo 'CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:U/C:H/I:H/A:N'",
      output: ['CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:U/C:H/I:H/A:N'],
      read: "Le vecteur est complet et dans l'ordre officiel. UI:R indique qu'une action de la victime est nécessaire.",
      pivot: "Calculez le score avec le calculateur ou Python, puis joignez le vecteur à la fiche. Le score seul ne documente pas le raisonnement."
    },
    {
      id: 'm7-e9',
      title: 'Exporter le rapport en PDF',
      context: "Le rapport est écrit en Markdown. Le client demande un PDF avec table des matières.",
      task: "Convertissez <code>rapport-audit.md</code> en <code>rapport-audit.pdf</code> avec une table des matières.",
      hint: "Utilisez <code>pandoc rapport-audit.md -o rapport-audit.pdf --toc</code>.",
      accept: [/^pandoc\s+rapport-audit\.md\s+-o\s+rapport-audit\.pdf\s+--toc/i],
      solution: 'pandoc rapport-audit.md -o rapport-audit.pdf --toc',
      output: ['..(conversion en cours)', '++rapport-audit.pdf généré avec table des matières'],
      read: "Le PDF est généré avec une table des matières. Vérifiez visuellement la pagination, les accents et les tableaux.",
      pivot: "Hashez le PDF final, archivez la source Markdown, et envoyez les deux au client si demandé."
    },
    {
      id: 'm7-e10',
      title: 'Écrire un titre de constat',
      context: "Vous devez transformer un constat brut en titre exploitable par un développeur.",
      task: "Créez un fichier <code>titre.txt</code> contenant un titre précis pour une SQLi sur <code>/api/report</code> nécessitant une authentification.",
      hint: "Format : composant + vulnérabilité + condition. Utilisez <code>echo</code>.",
      accept: [/echo\s+.*\/api\/report.*(SQL|injection)/i, /echo\s+.*(SQL|injection).*\/api\/report/i],
      solution: 'echo "Injection SQL authentifiée dans le paramètre period de /api/report" > titre.txt',
      output: ['++Titre écrit : Injection SQL authentifiée dans le paramètre period de /api/report'],
      read: "Le titre localise le composant, la vulnérabilité et la condition d'exploitation. Il est compréhensible sans lire la fiche.",
      pivot: "Utilisez le même modèle pour tous les constats : composant + vulnérabilité + condition. Évitez « faille critique » sans localisation."
    },
    {
      id: 'm7-e11',
      title: 'Prioriser deux constats',
      context: "Un 9.8 interne non exposé et un 6.1 sur l'administration publique. Vous devez justifier la priorité.",
      task: "Écrivez dans <code>priorite.txt</code> une phrase indiquant que le 6.1 public est prioritaire à cause de l'exposition.",
      hint: "Utilisez <code>echo</code> et mentionnez l'exposition et le contexte métier.",
      accept: [/echo\s+.*6\.1.*(expos|public|priorit)/i],
      solution: 'echo "Le 6.1 exposé publiquement est prioritaire sur le 9.8 interne non accessible : l’exposition réelle prime sur le score brut." > priorite.txt',
      output: ['++Justification écrite dans priorite.txt'],
      read: "La priorité croise le score, l'exposition et l'impact métier. Le score seul ne suffit pas.",
      pivot: "Reprenez cette logique dans la synthèse exécutive et le plan de remédiation, avec les contrôles compensatoires."
    },
    {
      id: 'm7-e12',
      title: 'Vérifier la cohérence du tableau',
      context: "Le tableau de suivi contient 17 constats. La synthèse doit annoncer les mêmes totaux.",
      task: "Comptez les lignes de <code>findings.csv</code> et affichez le résultat.",
      hint: "Utilisez <code>wc -l findings.csv</code>.",
      accept: [/^wc\s+-l\s+findings\.csv$/i],
      solution: 'wc -l findings.csv',
      output: ['17 findings.csv'],
      read: "Le tableau contient 17 lignes. La synthèse doit annoncer 17 constats, avec la répartition par sévérité.",
      pivot: "Croisez avec le nombre de fiches détaillées. Un écart révèle un constat oublié ou un doublon."
    }
  ]
};
