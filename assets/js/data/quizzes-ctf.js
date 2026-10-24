/**
 * Quiz des modules CTF (m9 à m12).
 * Chaque entrée est un quiz complet : moduleId, title, pass et 10 questions.
 */

export const CTF_QUIZZES = {
  q9: {
    moduleId: 'm9',
    title: "Évaluation — CTF application web",
    pass: 70,
    questions: [
      {
        q: "Quelle est la première action utile lors d'un CTF web sur une cible inconnue ?",
        options: [
          "Lancer immédiatement un exploit connu",
          "Cartographier les ports, services et technologies exposés",
          "Tenter tous les mots de passe de rockyou",
          "Modifier la page d'accueil"
        ],
        answer: 1,
        explain: "La reconnaissance précède l'exploitation. Ports, versions, en-têtes et technologies déterminent quelles pistes sont pertinentes et évitent de scanner au hasard."
      },
      {
        q: "Que révèle un code HTTP 403 sur un chemin découvert par Gobuster ?",
        options: [
          "La ressource n'existe pas",
          "La ressource existe mais l'accès est interdit sans les bons droits",
          "Le serveur est hors ligne",
          "Le chemin a été supprimé"
        ],
        answer: 1,
        explain: "403 signifie « authentifié ou non, accès refusé ». La ressource existe : c'est une piste à explorer avec un compte valide ou une autre méthode."
      },
      {
        q: "Pourquoi lire le code JavaScript d'une application web ?",
        options: [
          "Pour accélérer le chargement du site",
          "Parce qu'il peut révéler des routes d'API, des paramètres et parfois des secrets",
          "Pour modifier l'apparence du site",
          "Pour désactiver le HTTPS"
        ],
        answer: 1,
        explain: "Les bundles clients contiennent souvent les endpoints internes, les noms de paramètres et des clés laissées par erreur. C'est une source d'énumération gratuite."
      },
      {
        q: "Un JWT est composé de trois parties. Que contient la deuxième ?",
        options: [
          "La signature cryptographique",
          "Les revendications (sujet, rôle, expiration) encodées en Base64URL",
          "Le mot de passe de l'utilisateur",
          "La clé privée du serveur"
        ],
        answer: 1,
        explain: "La charge utile contient des revendications lisibles par tous. Elle n'est pas chiffrée : la sécurité repose sur la vérification de la signature et des autorisations côté serveur."
      },
      {
        q: "Qu'est-ce qu'un IDOR ?",
        options: [
          "Une injection SQL dans un formulaire",
          "Un accès à l'objet d'un autre utilisateur en changeant son identifiant, sans contrôle d'autorisation",
          "Un cookie mal configuré",
          "Une redirection ouverte"
        ],
        answer: 1,
        explain: "L'IDOR est un défaut d'autorisation : l'utilisateur est authentifié, mais le serveur ne vérifie pas qu'il est propriétaire de la ressource demandée."
      },
      {
        q: "Quelle correction supprime réellement un IDOR ?",
        options: [
          "Rendre les identifiants plus longs et aléatoires",
          "Masquer les boutons dans l'interface",
          "Vérifier côté serveur que l'utilisateur est propriétaire de l'objet ou possède le rôle requis",
          "Ajouter un WAF"
        ],
        answer: 2,
        explain: "Un identifiant imprévisible ne remplace pas un contrôle d'accès. La vérification de propriété ou de rôle doit être faite à chaque requête, côté serveur."
      },
      {
        q: "Quelle différence entre contrôle d'accès horizontal et vertical ?",
        options: [
          "Horizontal concerne un autre utilisateur de même rôle, vertical concerne un rôle supérieur",
          "Horizontal concerne le réseau, vertical le web",
          "Ils sont identiques",
          "Vertical concerne uniquement les bases de données"
        ],
        answer: 0,
        explain: "L'horizontal compare deux comptes de même niveau (Alice vs Bob). Le vertical tente d'atteindre les fonctions d'un rôle supérieur (utilisateur vs admin)."
      },
      {
        q: "Pourquoi une sauvegarde exposée dans le webroot est-elle critique ?",
        options: [
          "Elle ralentit le site",
          "Elle peut contenir des identifiants, des données et des secrets téléchargeables sans authentification",
          "Elle empêche le référencement",
          "Elle désactive les cookies"
        ],
        answer: 1,
        explain: "Un export SQL ou une archive peut contenir des comptes, des hachages et des données métier. Le webroot ne doit jamais servir de stockage de sauvegardes."
      },
      {
        q: "Que doit contenir une preuve reproductible dans un rapport de CTF ou d'audit ?",
        options: [
          "Uniquement le flag",
          "La commande exacte, la réponse observée, l'horodatage et le contexte minimal",
          "Une capture d'écran floue",
          "Le nom de l'outil utilisé seulement"
        ],
        answer: 1,
        explain: "Une preuve doit permettre à un tiers de reproduire le constat sans deviner. La commande, la réponse et le contexte suffisent, sans exposer de données inutiles."
      },
      {
        q: "Quelle est la meilleure façon de tester une route interne découverte en CTF ?",
        options: [
          "L'appeler sans jeton pour voir",
          "Obtenir d'abord un jeton légitime, puis tester si le rôle est réellement vérifié",
          "Lancer un déni de service",
          "Modifier la base de données"
        ],
        answer: 1,
        explain: "Sans jeton, on ne teste que l'authentification. Avec un jeton utilisateur, on teste l'autorisation : c'est là que se trouve souvent le défaut vertical."
      }
    ]
  },

  q10: {
    moduleId: 'm10',
    title: "Évaluation — CTF WordPress",
    pass: 70,
    questions: [
      {
        q: "Quel fichier permet de reconnaître rapidement une installation WordPress ?",
        options: [
          "/wp-login.php",
          "/index.html",
          "/robots.txt uniquement",
          "/favicon.ico"
        ],
        answer: 0,
        explain: "<code>/wp-login.php</code>, <code>/wp-json/</code>, <code>/wp-content/</code> et la balise generator sont des indices classiques d'un site WordPress."
      },
      {
        q: "Où trouve-t-on souvent la version exacte de WordPress dans le HTML ?",
        options: [
          "Dans l'attribut alt des images",
          "Dans la balise meta generator",
          "Dans le fichier robots.txt",
          "Dans le cookie de session"
        ],
        answer: 1,
        explain: "La balise <code>&lt;meta name=\"generator\" content=\"WordPress x.y.z\"&gt;</code> révèle la version si le thème ne l'a pas retirée."
      },
      {
        q: "Quel endpoint REST permet souvent d'énumérer les utilisateurs ?",
        options: [
          "/wp-json/wp/v2/users",
          "/wp-admin/admin.php",
          "/wp-content/uploads/",
          "/xmlrpc.php"
        ],
        answer: 0,
        explain: "L'API REST expose parfois les auteurs avec leur identifiant, slug et nom. C'est une source directe pour cibler une attaque de mots de passe."
      },
      {
        q: "Pourquoi les plugins sont-ils une cible prioritaire sur WordPress ?",
        options: [
          "Ils sont toujours écrits en JavaScript",
          "Ils ajoutent du code tiers exécuté avec les privilèges du site et sont souvent obsolètes",
          "Ils remplacent le noyau",
          "Ils désactivent HTTPS"
        ],
        answer: 1,
        explain: "Le cœur est généralement bien maintenu ; les plugins et thèmes abandonnés accumulent les vulnérabilités et s'exécutent avec les droits de WordPress."
      },
      {
        q: "Que signifie un résultat searchsploit pour un plugin en version 6.0 ?",
        options: [
          "Le site est certainement compromis",
          "Un exploit public existe, mais il faut vérifier la version, la configuration et le chemin réellement accessible",
          "Le plugin est à jour",
          "La CVE est fictive"
        ],
        answer: 1,
        explain: "Un exploit public est une piste, pas une preuve. Il faut confirmer la version, la présence du composant et la condition d'exploitation avant de conclure."
      },
      {
        q: "Quel est le risque d'un éditeur de thème accessible depuis l'administration ?",
        options: [
          "Il ralentit le site",
          "Il permet à un admin compromis d'écrire du PHP et d'exécuter du code",
          "Il supprime les cookies",
          "Il désactive les sauvegardes"
        ],
        answer: 1,
        explain: "L'éditeur de fichiers permet de modifier un fichier PHP du thème. Un compte admin compromis obtient donc une exécution de code sur le serveur."
      },
      {
        q: "Quelle constante WordPress désactive l'éditeur de fichiers ?",
        options: [
          "define('DISALLOW_FILE_EDIT', true);",
          "define('WP_DEBUG', true);",
          "define('FORCE_SSL_ADMIN', true);",
          "define('AUTOSAVE_INTERVAL', 60);"
        ],
        answer: 0,
        explain: "DISALLOW_FILE_EDIT retire l'éditeur de thèmes et de plugins. À combiner avec des permissions de fichiers en lecture seule."
      },
      {
        q: "Quel est le bon réflexe avant d'envoyer un POST à l'éditeur de thème ?",
        options: [
          "Deviner le nonce",
          "Extraire le champ _wpnonce de la page et le réutiliser dans la même session",
          "Désactiver les cookies",
          "Changer l'URL en HTTPS"
        ],
        answer: 1,
        explain: "WordPress protège ses formulaires par un nonce lié à l'action et à la session. Un nonce absent ou expiré provoque un 403."
      },
      {
        q: "Que faire immédiatement après avoir prouvé une exécution de code en lab ?",
        options: [
          "Déployer une persistance",
          "Lire le flag, documenter la preuve, puis restaurer le fichier modifié",
          "Créer un compte admin supplémentaire",
          "Supprimer les logs"
        ],
        answer: 1,
        explain: "La preuve minimale suffit. On restaure le fichier, on ne laisse ni webshell ni compte, et on documente la chaîne d'exploitation."
      },
      {
        q: "Quel ensemble de mesures durcit réellement un WordPress ?",
        options: [
          "Mises à jour, MFA, plugins minimaux, éditeur désactivé, permissions restreintes",
          "Un thème sombre",
          "La suppression de robots.txt",
          "Un mot de passe admin de 8 caractères"
        ],
        answer: 0,
        explain: "La surface WordPress se réduit par les mises à jour, la suppression des composants inutiles, la MFA, le moindre privilège et des permissions de fichiers strictes."
      }
    ]
  },

  q11: {
    moduleId: 'm11',
    title: "Évaluation — CTF injection SQL",
    pass: 70,
    questions: [
      {
        q: "Quelle est la cause racine d'une injection SQL ?",
        options: [
          "Un serveur trop lent",
          "La concaténation d'une entrée utilisateur dans une requête SQL",
          "Un certificat TLS expiré",
          "Un cookie sans flag Secure"
        ],
        answer: 1,
        explain: "L'injection apparaît quand la donnée et le code SQL ne sont pas séparés. Une entrée concaténée peut modifier la structure de la requête."
      },
      {
        q: "Quelle correction élimine une injection SQL à la source ?",
        options: [
          "Un WAF",
          "Une requête paramétrée avec des valeurs liées",
          "Une blacklist de mots-clés",
          "Un mot de passe plus long"
        ],
        answer: 1,
        explain: "Les requêtes paramétrées transmettent les valeurs séparément du code. La base les traite comme des données, quelle que soit leur syntaxe."
      },
      {
        q: "Que permet de déterminer la séquence ORDER BY 1, 2, 3… ?",
        options: [
          "Le mot de passe de la base",
          "Le nombre de colonnes de la requête d'origine",
          "La version de PHP",
          "Le nom d'utilisateur courant"
        ],
        answer: 1,
        explain: "ORDER BY n échoue quand n dépasse le nombre de colonnes. La dernière valeur valide donne l'arité nécessaire pour une UNION."
      },
      {
        q: "Quelle condition doit respecter une UNION SQLi ?",
        options: [
          "Un seul mot-clé SELECT",
          "Le même nombre de colonnes et des types compatibles",
          "Uniquement des colonnes numériques",
          "Une base PostgreSQL"
        ],
        answer: 1,
        explain: "L'UNION exige le même nombre de colonnes que la requête d'origine. Les types doivent être compatibles pour être affichés correctement."
      },
      {
        q: "À quoi sert information_schema en MySQL ?",
        options: [
          "À chiffrer les données",
          "À décrire les bases, tables et colonnes",
          "À gérer les sessions PHP",
          "À journaliser les requêtes HTTP"
        ],
        answer: 1,
        explain: "information_schema est une base de métadonnées. Elle permet de lister les tables et colonnes avant de cibler les données sensibles."
      },
      {
        q: "Que fait la charge `' OR 1=1-- -` dans un formulaire de login vulnérable ?",
        options: [
          "Elle supprime la base",
          "Elle rend la condition vraie et commente la vérification du mot de passe",
          "Elle chiffre le mot de passe",
          "Elle crée un nouvel utilisateur"
        ],
        answer: 1,
        explain: "<code>OR 1=1</code> rend la condition toujours vraie et <code>-- -</code> commente la suite de la requête, supprimant le contrôle du mot de passe."
      },
      {
        q: "Pourquoi utiliser un identifiant négatif dans une UNION ?",
        options: [
          "Pour accélérer la requête",
          "Pour masquer la ligne d'origine et afficher uniquement les données injectées",
          "Pour contourner HTTPS",
          "Pour désactiver les logs"
        ],
        answer: 1,
        explain: "Un identifiant inexistant comme <code>-1</code> ne retourne aucune ligne d'origine, ce qui rend lisible la sortie de l'UNION."
      },
      {
        q: "Quelles conditions sont nécessaires à LOAD_FILE() ?",
        options: [
          "Un compte root MySQL uniquement",
          "Le privilège FILE et un chemin autorisé par secure_file_priv",
          "Un accès FTP",
          "Un cookie de session"
        ],
        answer: 1,
        explain: "Le compte MySQL doit avoir le privilège FILE, et secure_file_priv doit autoriser le répertoire ou être vide. Ces droits doivent être retirés en production."
      },
      {
        q: "Quel est le bon usage de sqlmap dans un audit autorisé ?",
        options: [
          "Lancer --risk=3 --level=5 sans restriction",
          "Commencer avec un risque faible, cibler une preuve et journaliser les requêtes",
          "L'utiliser sur n'importe quel site public",
          "Laisser l'outil vider toute la base"
        ],
        answer: 1,
        explain: "Un risque élevé peut modifier ou supprimer des données. On commence prudemment, on prouve l'accès avec un échantillon et on respecte le périmètre."
      },
      {
        q: "Quelle mesure réduit l'impact d'une injection SQL même si elle existe ?",
        options: [
          "Donner tous les droits au compte applicatif",
          "Appliquer le moindre privilège à la base et désactiver l'affichage des erreurs",
          "Stocker les mots de passe en clair",
          "Désactiver les sauvegardes"
        ],
        answer: 1,
        explain: "Un compte limité ne peut ni lire de fichiers ni supprimer des tables. Masquer les erreurs complique l'exploitation et la journalisation côté serveur conserve la trace."
      }
    ]
  },

  q12: {
    moduleId: 'm12',
    title: "Évaluation — CTF élévation de privilèges Linux",
    pass: 70,
    questions: [
      {
        q: "Après un premier accès Linux, quelle est la première étape ?",
        options: [
          "Lancer un exploit noyau au hasard",
          "Énumérer l'identité, les droits, les services et les fichiers",
          "Supprimer les logs",
          "Créer un compte root"
        ],
        answer: 1,
        explain: "La majorité des élévations viennent d'une mauvaise configuration. L'énumération méthodique (id, sudo, SUID, cron, capabilities) précède toute exploitation."
      },
      {
        q: "Que signifie un binaire avec le bit SUID root ?",
        options: [
          "Il est en lecture seule",
          "Il s'exécute avec les droits de root même si l'utilisateur est non privilégié",
          "Il est chiffré",
          "Il ne peut pas être exécuté"
        ],
        answer: 1,
        explain: "Le bit SUID fait prendre au processus l'UID du propriétaire du fichier. Un binaire SUID root mal écrit peut donc exécuter du code en root."
      },
      {
        q: "Pourquoi `NOPASSWD: /usr/bin/find` est-il dangereux dans sudo ?",
        options: [
          "find est trop lent",
          "find peut exécuter une commande arbitraire avec -exec, donc un shell root",
          "find modifie les mots de passe",
          "find désactive SSH"
        ],
        answer: 1,
        explain: "Toute commande autorisée via sudo hérite des droits cibles. <code>find -exec</code> permet d'exécuter <code>/bin/sh</code> en root."
      },
      {
        q: "Comment un binaire SUID qui appelle `tar` sans chemin absolu peut-il être détourné ?",
        options: [
          "En changeant l'heure système",
          "En plaçant un faux `tar` dans un répertoire contrôlé et en le mettant en tête du PATH",
          "En supprimant le binaire",
          "En modifiant le mot de passe"
        ],
        answer: 1,
        explain: "Si le binaire cherche <code>tar</code> dans le PATH, un faux exécutable placé avant le vrai sera lancé avec les droits SUID root."
      },
      {
        q: "Quel risque présente un script cron exécuté par root et inscriptible par un utilisateur ?",
        options: [
          "Aucun, cron est sécurisé",
          "L'utilisateur peut y ajouter des commandes qui s'exécuteront en root",
          "Le script devient illisible",
          "Cron désactive le script"
        ],
        answer: 1,
        explain: "Cron exécute le script avec l'utilisateur spécifié. Si un utilisateur peut modifier le script, il obtient une exécution root répétée."
      },
      {
        q: "Que permet la capability `cap_setuid+ep` sur Python ?",
        options: [
          "Lire les fichiers sans permission",
          "Appeler setuid(0) et devenir root",
          "Chiffrer le disque",
          "Désactiver le pare-feu"
        ],
        answer: 1,
        explain: "<code>cap_setuid</code> autorise le changement d'UID. Sur un interpréteur, cela revient à donner un accès root complet."
      },
      {
        q: "Quelle commande liste les capabilities de tous les fichiers accessibles ?",
        options: [
          "ls -la /",
          "getcap -r / 2>/dev/null",
          "sudo -l",
          "find / -perm -4000"
        ],
        answer: 1,
        explain: "<code>getcap -r /</code> parcourt récursivement le système et affiche les capabilities étendues. À comparer à la liste des SUID."
      },
      {
        q: "Pourquoi les exploits de noyau sont-ils rarement le premier choix ?",
        options: [
          "Ils sont illégaux",
          "Ils peuvent être instables et les mauvaises configurations offrent souvent un chemin plus simple",
          "Ils ne fonctionnent jamais",
          "Ils nécessitent toujours un accès physique"
        ],
        answer: 1,
        explain: "Un exploit noyau peut provoquer un crash ou un panic. Les vecteurs de configuration (sudo, SUID, cron, capabilities) sont plus fiables et plus faciles à documenter."
      },
      {
        q: "Que doit-on faire après avoir prouvé une élévation de privilèges en lab ?",
        options: [
          "Installer une persistance",
          "Documenter la preuve, lire le flag et nettoyer les modifications",
          "Créer un utilisateur root caché",
          "Désactiver les journaux"
        ],
        answer: 1,
        explain: "Le livrable est la preuve reproductible. On ne laisse pas de porte dérobée et on restaure les fichiers modifiés, en accord avec le cadre de la mission."
      },
      {
        q: "Quelle mesure réduit durablement la surface d'élévation de privilèges Linux ?",
        options: [
          "Auditer sudo, SUID, cron et capabilities, puis retirer ce qui n'est pas nécessaire",
          "Donner sudo à tous les comptes",
          "Désactiver les mises à jour",
          "Rendre tous les scripts inscriptibles"
        ],
        answer: 0,
        explain: "Le durcissement consiste à supprimer les privilèges inutiles : règles sudo précises, SUID limités, scripts cron protégés et capabilities minimales."
      }
    ]
  }
};
