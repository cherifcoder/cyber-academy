export default {
  blocks: [
    { t: 'h', x: "1.8 Fiches commandes : préparer, tracer et prouver" },
    {
      t: 'p',
      x: "Ces commandes ne servent pas à attaquer : elles construisent un <strong>dossier de mission défendable</strong>. En audit, la valeur d'une preuve dépend de trois choses : son <strong>horodatage</strong>, son <strong>intégrité</strong> (empreinte cryptographique) et sa <strong>traçabilité</strong> (journal). Apprenez à expliquer chaque commande à un client non technique."
    },
    {
      t: 'cmdref',
      items: [
        {
          cmd: 'mkdir -p', tag: 'Organisation',
          what: "Crée une arborescence de dossiers, y compris les parents manquants, sans échouer si le dossier existe déjà.",
          gives: "Un espace de travail séparé par type de preuve : <code>evidence/</code>, <code>reports/</code>, <code>notes/</code>, <code>roes/</code>.",
          use: "À lancer au début de chaque mission, avant toute commande offensive. Un dossier par mission, jamais un fourre-tout.",
          syntax: 'mkdir -p chemin/{sous-dossier1,sous-dossier2}',
          example: 'mkdir -p ~/pentest-lab/mission-01/{evidence/{logs,screenshots},reports,notes,roes}',
          read: "Vérifiez ensuite avec <code>tree</code> ou <code>find</code>. Si un dossier manque, vos preuves seront dispersées et le rapport perdra sa cohérence."
        },
        {
          cmd: 'cd', tag: 'Navigation',
          what: "Change le répertoire courant du shell.",
          gives: "Un contexte de travail : toutes les commandes suivantes écrivent au bon endroit.",
          use: "Se placer dans le dossier de mission avant de créer les journaux et les preuves.",
          syntax: 'cd chemin',
          example: 'cd ~/pentest-lab/mission-01',
          read: "Utilisez <code>pwd</code> pour confirmer. Une preuve créée dans le mauvais dossier est difficile à retrouver et à justifier."
        },
        {
          cmd: 'tree / find', tag: 'Inventaire',
          what: "<code>tree</code> affiche l'arborescence ; <code>find</code> liste fichiers et dossiers de façon scriptable.",
          gives: "La preuve visuelle que la structure attendue existe, avec les noms exacts.",
          use: "Contrôler la création du workspace et produire un inventaire joint au dossier de mission.",
          syntax: 'tree -a  OU  find . -type f -o -type d | sort',
          example: 'tree -a ~/pentest-lab/mission-01 || find ~/pentest-lab/mission-01 -type f -o -type d | sort',
          read: "Comparez avec la structure prévue. Un dossier <code>evidence/</code> absent signifie que les captures risquent d'être stockées hors du dossier maîtrisé."
        },
        {
          cmd: 'date', tag: 'Horodatage',
          what: "Affiche la date et l'heure, avec un format contrôlable.",
          gives: "Un horodatage ISO 8601, trié et comparable, à insérer dans les noms de fichiers et le journal.",
          use: "Préfixer chaque preuve et chaque ligne de journal. À préférer à une date écrite à la main.",
          syntax: 'date -Iseconds  OU  date +%Y%m%d',
          example: 'echo "Début : $(date -Iseconds)" >> notes/journal-$(date +%Y%m%d).md',
          read: "Un horodatage incohérent (fuseau, format) rend la chronologie non exploitable. En mission, précisez toujours le fuseau (Europe/Paris) dans les RoE."
        },
        {
          cmd: 'echo >>', tag: 'Journal',
          what: "Écrit une ligne dans un fichier, en ajout ou en écrasement.",
          gives: "Un journal chronologique des actions : commande, cible, résultat, opérateur.",
          use: "Ajouter une entrée avant et après chaque action importante. <code>&gt;</code> écrase, <code>&gt;&gt;</code> ajoute.",
          syntax: 'echo "[$(date -Iseconds)] action" >> notes/journal.md',
          example: 'echo "[$(date -Iseconds)] Scan Nmap du lab 192.168.56.0/24 terminé" >> notes/journal-$(date +%Y%m%d).md',
          read: "Le journal doit permettre de répondre à : qui, quoi, quand, sur quelle cible, avec quel résultat. C'est votre défense en cas de contestation."
        },
        {
          cmd: 'chmod', tag: 'Confidentialité',
          what: "Modifie les permissions d'un fichier ou d'un dossier (lecture/écriture/exécution pour propriétaire, groupe, autres).",
          gives: "Un espace de travail non lisible par les autres utilisateurs de la machine.",
          use: "Retirer les droits groupe et autres sur tout le dossier de mission.",
          syntax: 'chmod -R go-rwx chemin',
          example: 'chmod -R go-rwx ~/pentest-lab/',
          read: "Vérifiez avec <code>ls -la</code> : les droits doivent ressembler à <code>drwx------</code>. Des preuves lisibles par tous sont une fuite de données."
        },
        {
          cmd: 'sha256sum', tag: 'Intégrité',
          what: "Calcule l'empreinte SHA-256 d'un fichier.",
          gives: "Une valeur hexadécimale unique : si le fichier change d'un seul octet, l'empreinte change.",
          use: "Hasher chaque preuve au moment de sa création, puis re-vérifier avant remise du rapport.",
          syntax: 'sha256sum fichier > fichier.sha256',
          example: 'sha256sum evidence/logs/preuve_test.txt | tee evidence/logs/preuve_test.txt.sha256',
          read: "Conservez l'empreinte séparément de la preuve. Une empreinte identique plus tard prouve la non-altération ; une différence invalide la preuve."
        },
        {
          cmd: 'sha1sum / md5sum', tag: 'Intégrité (legacy)',
          what: "Calculent des empreintes SHA-1 et MD5, plus courtes mais cryptographiquement obsolètes.",
          gives: "Un identifiant rapide pour comparer deux fichiers, sans valeur de sécurité forte.",
          use: "Uniquement pour des vérifications de commodité ou des compatibilités anciennes. Préférez SHA-256 pour une preuve.",
          syntax: 'sha1sum fichier ; md5sum fichier',
          example: 'sha1sum evidence/logs/preuve_test.txt > preuve.sha1 && md5sum evidence/logs/preuve_test.txt > preuve.md5',
          read: "MD5 et SHA-1 ont des collisions connues : ne les présentez jamais comme une preuve d'intégrité forte dans un rapport."
        },
        {
          cmd: 'cat / tail', tag: 'Vérification',
          what: "Affichent le contenu d'un fichier, en entier ou sur les dernières lignes.",
          gives: "La confirmation que le journal ou la preuve contient bien l'information attendue.",
          use: "Relire les dernières entrées après une action, sans ouvrir un éditeur.",
          syntax: 'cat fichier  OU  tail -n 5 fichier',
          example: 'tail -n 3 notes/journal-$(date +%Y%m%d).md',
          read: "Une entrée manquante ou tronquée doit être corrigée immédiatement. Le journal est un document vivant, pas une décoration."
        },
        {
          cmd: 'grep', tag: 'Recherche',
          what: "Filtre les lignes d'un fichier ou d'une sortie selon une expression.",
          gives: "Un sous-ensemble ciblé : erreurs, dates, adresses IP, noms d'hôtes.",
          use: "Extraire une information précise d'un long journal ou d'une sortie d'outil.",
          syntax: 'grep -Ei "motif" fichier',
          example: 'grep -Ei "failed|accepted|sudo:" evidence/logs/auth.log',
          read: "Un grep vide ne prouve pas l'absence d'événement : le format ou la casse peut différer. Utilisez <code>-i</code> et vérifiez le fichier source."
        },
        {
          cmd: 'Get-FileHash', tag: 'Windows',
          what: "Équivalent PowerShell de <code>sha256sum</code> : calcule l'empreinte d'un fichier.",
          gives: "L'algorithme, la valeur de hachage et le chemin du fichier.",
          use: "Sur un poste Windows, hasher les preuves et consigner le résultat dans le journal.",
          syntax: 'Get-FileHash fichier -Algorithm SHA256 | Format-List',
          example: 'Get-FileHash .\\evidence\\logs\\preuve_test.txt -Algorithm SHA256 | Format-List',
          read: "Comparez la valeur avec celle obtenue lors de la création. Notez aussi la date de modification du fichier."
        }
      ]
    },
    { t: 'h', x: "1.9 Glossaire : les mots du cadre légal et de la preuve" },
    {
      t: 'p',
      x: "Comprendre ces termes évite les ambiguïtés en réunion client et dans un rapport. Chaque définition est suivie de son usage concret."
    },
    {
      t: 'glossary',
      items: [
        { term: 'Pentest', full: 'test d\'intrusion', def: "Simulation d'attaque autorisée, planifiée et documentée, dont le but est de réduire le risque.", use: "Toujours accompagné d'un contrat, d'un périmètre et d'une finalité défensive.", ex: 'Pentest externe de app.acme.example du 3 au 7 novembre.' },
        { term: 'STAD', full: 'système de traitement automatisé de données', def: "Notion du Code pénal français couvrant tout système informatique traitant des données.", use: "C'est le bien juridique protégé par les articles 323-1 et suivants.", ex: "L'accès frauduleux à un STAD est puni par l'article 323-1." },
        { term: 'Scope', full: 'périmètre', def: "Liste exacte des actifs, domaines, IP, applications et techniques autorisés.", use: "Tout ce qui n'est pas dans le scope est interdit, même si c'est techniquement accessible.", ex: 'Scope : app.acme.example et 203.0.113.0/28 ; exclu : paiement.acme.example.' },
        { term: 'RoE', full: 'règles d\'engagement', def: "Document opérationnel qui précise horaires, techniques interdites, contacts et procédure d'arrêt.", use: "À lire avant le premier paquet et à garder pendant toute la mission.", ex: 'RoE : pas de DoS, fenêtre 08:00–18:00, arrêt sur appel du contact 24/7.' },
        { term: 'NDA', full: 'accord de confidentialité', def: "Contrat qui interdit de divulguer les informations vues pendant la mission.", use: "Couvre les preuves, les données clients et le rapport lui-même.", ex: 'Le rapport est classé « Confidentiel — diffusion restreinte ».' },
        { term: 'Safe harbor', def: "Engagement d'un programme de bug bounty à ne pas poursuivre un chercheur qui respecte les règles.", use: "Vérifier qu'il est explicite avant de tester ; sans lui, la protection juridique est incertaine.", ex: 'Le programme autorise les tests sur *.acme.example, hors phishing.' },
        { term: 'PoC', full: 'proof of concept', def: "Preuve minimale et reproductible qu'une vulnérabilité existe et a un impact.", use: "Démontrer sans exfiltrer de données réelles ni nuire au service.", ex: "Une requête HTTP et la réponse prouvant l'accès à la facture d'un autre utilisateur." },
        { term: 'Empreinte / hash', def: "Résultat d'une fonction cryptographique appliquée à un fichier, de taille fixe.", use: "Prouver l'intégrité d'une preuve et détecter toute modification.", ex: 'sha256sum preuve.txt → 9f2c…' },
        { term: 'Chaîne de preuve', full: 'chain of custody', def: "Traçabilité continue d'une preuve : qui l'a créée, quand, où elle a été stockée, qui y a accédé.", use: "Documenter chaque transfert et chaque hash dans le journal de mission.", ex: "Preuve créée à 10:02, hashée à 10:03, copiée sur le serveur à 10:10." },
        { term: 'PTES', full: 'Penetration Testing Execution Standard', def: "Méthodologie en 7 phases, du pré-engagement au rapport.", use: "Structurer la mission et vérifier qu'aucune phase n'est oubliée.", ex: 'Phase 1 : pré-engagement ; phase 7 : rapport.' },
        { term: 'OWASP WSTG', full: 'Web Security Testing Guide', def: "Référentiel de tests de sécurité web organisé en catégories (INFO, ATHN, ATHZ, INPV…).", use: "Choisir les tests pertinents et référencer chaque constat dans le rapport.", ex: 'WSTG-ATHN-01 : test des politiques de mot de passe.' },
        { term: 'NIST SP 800-115', def: "Guide américain de test et d'évaluation de la sécurité, en 4 phases.", use: "Cadrer la gouvernance, la mesure de la posture et la documentation.", ex: 'Planification → découverte → attaque → rapport.' },
        { term: 'Bug bounty', def: "Programme de divulgation récompensée, encadré par une politique écrite.", use: "Respecter scope, safe harbor et règles de divulgation responsable.", ex: 'Rapport soumis via la plateforme, délai de correction de 90 jours.' },
        { term: 'Divulgation responsable', def: "Pratique consistant à signaler une vulnérabilité en privé et à laisser un délai de correction avant publication.", use: "Ne pas publier de détails avant accord ou expiration du délai négocié.", ex: "Signalement le 1er mars, publication coordonnée le 1er juin." }
      ]
    }
  ],
  exos: [
    {
      id: 'm1-e1',
      title: 'Créer l\'espace de mission',
      context: "Vous démarrez une mission de lab autorisée. Tout doit être séparé : preuves, rapports, notes et documents légaux.",
      task: "Créez l'arborescence <code>~/pentest-lab/mission-01</code> avec les sous-dossiers <code>evidence/logs</code>, <code>evidence/screenshots</code>, <code>reports</code>, <code>notes</code> et <code>roes</code>.",
      hint: "Utilisez <code>mkdir -p</code> avec des accolades pour créer plusieurs dossiers en une commande.",
      accept: [/^mkdir\s+-p\s+.*mission-01/i, /^mkdir\s+-p\s+.*mission-01.*$/i],
      solution: 'mkdir -p ~/pentest-lab/mission-01/{evidence/{logs,screenshots},reports,notes,roes}',
      output: [
        '..(aucune sortie : la commande réussit silencieusement)',
        '++Arborescence créée : mission-01/{evidence/{logs,screenshots},reports,notes,roes}'
      ],
      read: "mkdir ne confirme rien visuellement. Il faut toujours vérifier le résultat avec <code>tree</code> ou <code>find</code>.",
      pivot: "Une structure propre permet de retrouver une preuve en quelques secondes et d'éviter de mélanger données de lab et données personnelles."
    },
    {
      id: 'm1-e2',
      title: 'Entrer dans le dossier de mission',
      context: "Le shell est encore dans votre dossier personnel. Toutes les preuves doivent être créées dans le dossier de mission.",
      task: "Placez-vous dans <code>~/pentest-lab/mission-01</code>.",
      hint: "La commande de navigation est <code>cd</code>.",
      accept: [/^cd\s+~?\/?pentest-lab\/mission-01\/?$/i, /^cd\s+.*mission-01\/?$/i],
      solution: 'cd ~/pentest-lab/mission-01',
      output: ['..(le prompt change de répertoire)', '++Répertoire courant : /home/analyste/pentest-lab/mission-01'],
      read: "Vérifiez avec <code>pwd</code> que vous êtes au bon endroit avant d'écrire le journal.",
      pivot: "Un <code>echo</code> dans le mauvais dossier crée un journal orphelin, souvent oublié lors de la remise du rapport."
    },
    {
      id: 'm1-e3',
      title: 'Vérifier l\'arborescence',
      context: "Vous devez prouver que la structure de mission est complète avant de commencer.",
      task: "Affichez l'arborescence du dossier courant, y compris les fichiers cachés.",
      hint: "Utilisez <code>tree -a</code> ou, si tree n'est pas installé, <code>find . -type f -o -type d | sort</code>.",
      accept: [/^tree\s+-a/i, /^find\s+\.\s+-type\s+[fd]/i],
      solution: 'tree -a',
      output: [
        '.',
        '├── evidence',
        '│   ├── logs',
        '│   └── screenshots',
        '├── notes',
        '├── reports',
        '└── roes',
        '',
        '6 directories, 0 files'
      ],
      read: "Chaque dossier attendu est présent. L'absence de fichiers est normale : la mission n'a pas encore produit de preuve.",
      pivot: "Joignez cette sortie (ou son équivalent texte) au dossier de mission comme inventaire initial."
    },
    {
      id: 'm1-e4',
      title: 'Ouvrir le journal horodaté',
      context: "Vous devez tracer le début de la mission avec une date fiable, pas une date tapée à la main.",
      task: "Créez le journal <code>notes/journal-$(date +%Y%m%d).md</code> avec un en-tête et l'horodatage de début.",
      hint: "Utilisez <code>echo</code> avec <code>&gt;</code> pour créer puis <code>&gt;&gt;</code> pour ajouter.",
      accept: [/^echo\s+.*journal-\$\(date\s+\+%Y%m%d\).*\.md/i, /^echo\s+.*notes\/journal/i],
      solution: 'echo "# JOURNAL DE MISSION - MISSION-01" > notes/journal-$(date +%Y%m%d).md && echo "Début : $(date -Iseconds)" >> notes/journal-$(date +%Y%m%d).md',
      output: [
        '..(deux lignes écrites dans le journal)',
        '++# JOURNAL DE MISSION - MISSION-01',
        '++Début : 2026-10-24T14:32:07+02:00'
      ],
      read: "Le nom du fichier contient la date, et le contenu contient un horodatage ISO 8601 avec fuseau. Les deux sont complémentaires.",
      pivot: "Ajoutez ensuite une ligne avant et après chaque action technique. En cas de contestation, ce journal est votre première pièce."
    },
    {
      id: 'm1-e5',
      title: 'Restreindre les permissions',
      context: "Le dossier contient des preuves qui ne doivent pas être lisibles par les autres comptes de la machine.",
      task: "Retirez les droits groupe et autres sur tout <code>~/pentest-lab/</code>, récursivement.",
      hint: "Utilisez <code>chmod -R go-rwx</code>.",
      accept: [/^chmod\s+-R\s+go-rwx\s+.*pentest-lab/i],
      solution: 'chmod -R go-rwx ~/pentest-lab/',
      output: ['..(aucune sortie en cas de succès)', '++Permissions retirées pour group et other sur ~/pentest-lab/'],
      read: "Contrôlez avec <code>ls -la ~/pentest-lab</code> : le dossier doit être <code>drwx------</code>.",
      pivot: "Des preuves lisibles par tous constituent une fuite de données, même si elles proviennent d'un lab."
    },
    {
      id: 'm1-e6',
      title: 'Créer une preuve de test',
      context: "Avant de manipuler de vraies preuves, entraînez-vous sur un fichier témoin.",
      task: "Créez <code>evidence/logs/preuve_test.txt</code> contenant « Preuve test » et l'horodatage courant.",
      hint: "Utilisez <code>echo</code> avec <code>$(date -Iseconds)</code> et une redirection.",
      accept: [/^echo\s+.*preuve_test\.txt/i],
      solution: 'echo "Preuve test - $(date -Iseconds)" > evidence/logs/preuve_test.txt',
      output: ['..(fichier créé)', '++Preuve test - 2026-10-24T14:33:41+02:00'],
      read: "Le fichier contient une donnée datée. C'est la matière première que vous allez hasher.",
      pivot: "Ne hashez jamais un fichier que vous n'avez pas identifié. Le chemin et le nom doivent être sans ambiguïté."
    },
    {
      id: 'm1-e7',
      title: 'Calculer l\'empreinte SHA-256',
      context: "Vous devez prouver que la preuve n'a pas été modifiée après sa création.",
      task: "Calculez l'empreinte SHA-256 de <code>evidence/logs/preuve_test.txt</code> et enregistrez-la dans un fichier <code>.sha256</code>.",
      hint: "Utilisez <code>sha256sum</code> avec <code>tee</code> ou une redirection.",
      accept: [/^sha256sum\s+evidence\/logs\/preuve_test\.txt/i],
      solution: 'sha256sum evidence/logs/preuve_test.txt | tee evidence/logs/preuve_test.txt.sha256',
      output: [
        '9f2c1d7a4b8e6f0a2c5d9e1b3f7a8c4d6e0b2f5a9c1d3e7f8a0b4c6d2e9f1a3b  evidence/logs/preuve_test.txt'
      ],
      read: "La valeur de 64 caractères hexadécimaux est l'empreinte. Le chemin affiché confirme le fichier hashé.",
      pivot: "Conservez le .sha256 à part et notez sa création dans le journal. Avant remise, relancez la commande et comparez."
    },
    {
      id: 'm1-e8',
      title: 'Comparer plusieurs algorithmes',
      context: "Le client demande une empreinte SHA-1 et une empreinte MD5 pour compatibilité avec un ancien outil.",
      task: "Calculez SHA-1 puis MD5 de <code>evidence/logs/preuve_test.txt</code>.",
      hint: "Enchaînez <code>sha1sum</code> et <code>md5sum</code> avec <code>&amp;&amp;</code>.",
      accept: [/^sha1sum\s+.*preuve_test.*md5sum/i, /^md5sum\s+.*preuve_test.*sha1sum/i],
      solution: 'sha1sum evidence/logs/preuve_test.txt > preuve.sha1 && md5sum evidence/logs/preuve_test.txt > preuve.md5',
      output: [
        '6c1f0e9a2b7d4c8e5f1a3b9d0c6e2f7a8b4d1c5e  evidence/logs/preuve_test.txt',
        '3f7a1c9e5b2d8f4a6c0e7b1d9f3a5c8e  evidence/logs/preuve_test.txt'
      ],
      read: "Les valeurs sont plus courtes (40 et 32 caractères). Elles ne sont pas équivalentes en sécurité à SHA-256.",
      pivot: "Dans le rapport, précisez l'algorithme et sa limite. Ne présentez pas MD5 comme une garantie forte."
    },
    {
      id: 'm1-e9',
      title: 'Relire les dernières entrées du journal',
      context: "Vous venez d'enchaîner plusieurs actions et devez vérifier que le journal est à jour.",
      task: "Affichez les 3 dernières lignes du journal du jour.",
      hint: "Utilisez <code>tail -n 3</code> sur <code>notes/journal-$(date +%Y%m%d).md</code>.",
      accept: [/^tail\s+-n?\s*3\s+notes\/journal/i, /^cat\s+.*journal.*tail/i],
      solution: 'tail -n 3 notes/journal-$(date +%Y%m%d).md',
      output: [
        '# JOURNAL DE MISSION - MISSION-01',
        'Début : 2026-10-24T14:32:07+02:00',
        '[2026-10-24T14:35:12+02:00] Création et hachage de preuve_test.txt'
      ],
      read: "Les entrées sont ordonnées et horodatées. La dernière action est bien la création et le hachage de la preuve.",
      pivot: "Si une action manque, ajoutez-la immédiatement avec un horodatage. Ne réécrivez pas l'histoire."
    },
    {
      id: 'm1-e10',
      title: 'Rechercher les actions sensibles',
      context: "Vous voulez vérifier que le journal contient bien une trace de l'action de hashage.",
      task: "Filtrez le journal pour afficher uniquement les lignes contenant « hachage » ou « hash ».",
      hint: "Utilisez <code>grep -Ei \"hash|hachage\"</code> sur le journal.",
      accept: [/^grep\s+-Ei?\s+["']?.*hash/i, /^grep\s+.*hash.*journal/i],
      solution: 'grep -Ei "hash|hachage" notes/journal-$(date +%Y%m%d).md',
      output: [
        '[2026-10-24T14:35:12+02:00] Création et hachage de preuve_test.txt'
      ],
      read: "Le filtre confirme la présence de l'entrée. Un résultat vide aurait indiqué un oubli ou un fichier différent.",
      pivot: "En fin de mission, ces recherches permettent de produire une chronologie ciblée pour le rapport."
    },
    {
      id: 'm1-e11',
      title: 'Vérifier l\'intégrité après copie',
      context: "La preuve a été copiée sur un support de sauvegarde. Vous devez vérifier qu'elle est identique à l'original.",
      task: "Recalculez l'empreinte SHA-256 de la preuve et comparez-la à celle enregistrée dans <code>preuve_test.txt.sha256</code>.",
      hint: "Utilisez <code>sha256sum -c</code> pour vérifier un fichier d'empreintes.",
      accept: [/^sha256sum\s+-c\s+.*sha256/i, /^sha256sum\s+.*preuve_test.*sha256sum/i],
      solution: 'sha256sum -c evidence/logs/preuve_test.txt.sha256',
      output: [
        'evidence/logs/preuve_test.txt: OK'
      ],
      read: "<code>OK</code> signifie que l'empreinte recalculée correspond. <code>FAILED</code> signifie que le fichier a changé ou que l'empreinte de référence est erronée.",
      pivot: "Joignez la sortie au dossier de preuve. Une vérification non documentée ne vaut pas mieux qu'une absence de vérification."
    },
    {
      id: 'm1-e12',
      title: 'Variante Windows : empreinte PowerShell',
      context: "Un collègue travaille sous Windows et doit produire la même preuve d'intégrité.",
      task: "Calculez l'empreinte SHA-256 de la preuve avec PowerShell.",
      hint: "Utilisez <code>Get-FileHash</code> avec <code>-Algorithm SHA256</code>.",
      accept: [/^get-filehash\s+.*preuve_test.*sha256/i],
      solution: 'Get-FileHash .\\evidence\\logs\\preuve_test.txt -Algorithm SHA256 | Format-List',
      output: [
        'Algorithm : SHA256',
        'Hash      : 9F2C1D7A4B8E6F0A2C5D9E1B3F7A8C4D6E0B2F5A9C1D3E7F8A0B4C6D2E9F1A3B',
        'Path      : C:\\Users\\analyste\\pentest-lab\\mission-01\\evidence\\logs\\preuve_test.txt'
      ],
      read: "La valeur doit être identique à celle obtenue sous Linux (la casse n'a pas d'importance).",
      pivot: "Normalisez le format des preuves entre Linux et Windows pour que le rapport reste cohérent."
    }
  ]
};
