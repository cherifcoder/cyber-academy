/**
 * Questions complémentaires pour porter chaque test de fin de module à 10 questions.
 * `answer` est l'index (0-based) de la bonne réponse.
 */
export const QUIZ_EXTRA = {
  q1: [
    {
      q: "Un client vous autorise à tester « le site web ». Vous découvrez que le même serveur héberge une API sur un sous-domaine non cité. Que faites-vous ?",
      options: [
        "Vous testez l'API : c'est le même serveur",
        "Vous vous arrêtez et demandez une extension écrite du périmètre avant tout test",
        "Vous testez uniquement les endpoints qui ne modifient rien",
        "Vous notez l'API dans le rapport sans la tester et sans prévenir"
      ],
      answer: 1,
      explain: "Le périmètre se définit par les actifs et les noms explicitement autorisés, pas par l'infrastructure partagée. Toute extension doit être écrite avant les tests."
    },
    {
      q: "Quel est le rôle principal d'un accord de confidentialité (NDA) dans une mission de pentest ?",
      options: [
        "Il autorise l'exploitation des failles",
        "Il encadre la confidentialité des informations et des preuves collectées",
        "Il fixe le prix de la prestation",
        "Il remplace les règles d'engagement"
      ],
      answer: 1,
      explain: "La NDA protège les informations sensibles échangées et les résultats. Elle ne définit ni le périmètre ni les techniques autorisées : c'est le rôle des RoE et du contrat."
    },
    {
      q: "Quelle est la différence essentielle entre un scan de vulnérabilités et un test d'intrusion ?",
      options: [
        "Le scan est toujours payant",
        "Le scan détecte des signatures ; le pentest valide et exploite les failles pour démontrer l'impact",
        "Le pentest n'utilise jamais de scanner",
        "Le scan est illégal sans autorisation, le pentest non"
      ],
      answer: 1,
      explain: "Un scanner produit des alertes, souvent avec des faux positifs. Le pentest confirme l'exploitabilité, mesure l'impact et propose une remédiation contextualisée."
    },
    {
      q: "Pourquoi planifier un retest après la remise du rapport ?",
      options: [
        "Pour augmenter la facture",
        "Pour vérifier que les correctifs rendent les vulnérabilités non exploitables",
        "Pour découvrir de nouvelles cibles hors périmètre",
        "Pour supprimer les preuves de la mission"
      ],
      answer: 1,
      explain: "Le retest rejoue les preuves initiales et documente le résultat. Il confirme la correction réelle, pas seulement la déclaration du client."
    },
    {
      q: "Dans un programme de bug bounty, que couvre la « safe harbor » ?",
      options: [
        "Tous les actifs de l'entreprise, même non listés",
        "Les actifs et techniques explicitement autorisés par la politique du programme",
        "Toute technique d'exploitation, tant que le chercheur est de bonne foi",
        "Les tests sur les employés et leurs comptes personnels"
      ],
      answer: 1,
      explain: "La safe harbor protège le chercheur dans les limites de la politique publiée. Hors scope ou hors technique autorisée, la protection ne s'applique pas."
    }
  ],

  q2: [
    {
      q: "Quelle est la différence entre WHOIS et RDAP ?",
      options: [
        "RDAP est un protocole structuré en JSON avec un accès plus uniforme ; WHOIS est un texte libre historique",
        "WHOIS est réservé aux IP et RDAP aux domaines",
        "RDAP ne donne pas les dates d'enregistrement",
        "WHOIS est plus récent et remplace RDAP"
      ],
      answer: 0,
      explain: "RDAP (Registration Data Access Protocol) retourne du JSON, gère mieux les contacts et l'authentification, et normalise les réponses. WHOIS reste un format texte variable selon les registres."
    },
    {
      q: "Vous relevez un enregistrement DNS `TXT` contenant `v=spf1 include:_spf.example.com -all`. Que signifie-t-il ?",
      options: [
        "Il liste les serveurs autorisés à envoyer du courrier pour le domaine",
        "Il indique l'adresse IP du serveur web",
        "Il définit le serveur DNS autoritaire",
        "Il active DNSSEC"
      ],
      answer: 0,
      explain: "SPF est publié en TXT et liste les expéditeurs autorisés. `-all` demande le rejet strict des autres. Il faut aussi vérifier DKIM et DMARC pour une vision complète."
    },
    {
      q: "À quoi sert un enregistrement DNS `PTR` ?",
      options: [
        "À associer une IP à un nom (résolution inverse)",
        "À stocker la clé publique DKIM",
        "À rediriger un domaine vers un autre",
        "À indiquer le serveur de messagerie principal"
      ],
      answer: 0,
      explain: "Le PTR est la résolution inverse : il permet de retrouver le nom associé à une adresse IP. Il est souvent utilisé pour qualifier les serveurs de messagerie."
    },
    {
      q: "Que révèle principalement l'outil `whatweb` sur une cible autorisée ?",
      options: [
        "Les mots de passe des utilisateurs",
        "Les technologies et versions détectées (serveur, framework, CMS, en-têtes)",
        "La cartographie complète du réseau interne",
        "Les vulnérabilités exploitables automatiquement"
      ],
      answer: 1,
      explain: "WhatWeb identifie des empreintes technologiques : serveur, langage, CMS, bibliothèques JS, en-têtes. Ces indices orientent la recherche de versions vulnérables, sans prouver une faille."
    },
    {
      q: "À quoi sert `nmap -sn 192.168.56.0/24` ?",
      options: [
        "À scanner tous les ports TCP",
        "À découvrir les hôtes actifs sans scanner leurs ports",
        "À lancer les scripts de vulnérabilités",
        "À effectuer un transfert de zone DNS"
      ],
      answer: 1,
      explain: "`-sn` est la découverte d'hôtes (ping scan) : Nmap identifie les machines qui répondent sans passer aux ports. C'est une première cartographie légère du lab."
    }
  ],

  q3: [
    {
      q: "Quelle commande énumère des sous-domaines avec Gobuster ?",
      options: [
        "gobuster dir -u https://example -w list.txt",
        "gobuster dns -d example -w list.txt",
        "gobuster vhost -u https://example -w list.txt",
        "gobuster fuzz -u https://example -w list.txt"
      ],
      answer: 1,
      explain: "`gobuster dns` teste des noms sous un domaine. `dir` teste des chemins, `vhost` teste l'en-tête Host sur une même IP."
    },
    {
      q: "Dans FFUF, à quoi sert `-fs 1234` ?",
      options: [
        "À filtrer les réponses dont la taille est 1234 octets",
        "À forcer la taille des requêtes",
        "À définir la taille maximale du wordlist",
        "À filtrer les codes 1234"
      ],
      answer: 0,
      explain: "`-fs` (filter size) masque les réponses d'une taille donnée, typiquement celles d'une page 404 générique ou d'un soft 404, pour ne garder que les résultats intéressants."
    },
    {
      q: "Quel outil permet de suivre les liens et les appels JavaScript pour découvrir des endpoints ?",
      options: ["Nikto", "Katana", "Hashcat", "testssl.sh"],
      answer: 1,
      explain: "Katana est un crawler qui explore les liens et peut analyser le JavaScript pour extraire des routes et des endpoints non référencés dans le HTML."
    },
    {
      q: "Vous fuzzez un paramètre et toutes les réponses font la même taille, sauf une. Que faites-vous ?",
      options: [
        "Vous ignorez la différence : c'est du bruit",
        "Vous inspectez manuellement la réponse singulière et comparez son contenu",
        "Vous relancez le scan avec plus de threads",
        "Vous concluez immédiatement à une faille critique"
      ],
      answer: 1,
      explain: "Une réponse de taille différente est une piste, pas une preuve. Il faut lire le contenu, comparer avec la réponse de référence et vérifier le code HTTP et les en-têtes."
    },
    {
      q: "Pourquoi calibrer une URL inexistante avant de fuzzer des répertoires ?",
      options: [
        "Pour vérifier que le serveur répond et connaître la réponse de référence (soft 404, taille, code)",
        "Pour obtenir une adresse IP publique",
        "Pour désactiver le WAF",
        "Pour accélérer le scan"
      ],
      answer: 0,
      explain: "La calibration fournit la réponse « normale » d'une ressource absente. On peut ensuite filtrer par taille, nombre de mots ou contenu pour éliminer les faux positifs."
    }
  ],

  q5: [
    {
      q: "Quel est l'intérêt de définir un scope dans Burp Suite ?",
      options: [
        "Limiter l'interception, le crawling et le logging aux domaines autorisés",
        "Chiffrer le trafic entre Burp et le navigateur",
        "Accélérer les scans en désactivant TLS",
        "Masquer l'adresse IP de l'auditeur"
      ],
      answer: 0,
      explain: "Le scope évite de tester ou de journaliser des domaines hors périmètre (CDN, analytics, sites tiers) et réduit le bruit dans l'historique et le scanner."
    },
    {
      q: "Dans Repeater, vous modifiez un en-tête et la réponse change de 403 à 200. Quelle est la prochaine étape ?",
      options: [
        "Considérer la faille comme corrigée",
        "Reproduire le comportement, comprendre la cause et évaluer l'impact avant de conclure",
        "Lancer immédiatement un scan Intruder sur tout le site",
        "Publier la découverte sur les réseaux sociaux"
      ],
      answer: 1,
      explain: "Un changement de réponse est une observation. Il faut confirmer la reproductibilité, identifier le contrôle défaillant et mesurer l'impact dans le périmètre autorisé."
    },
    {
      q: "Quelle est la différence entre les modes Sniper et Cluster bomb d'Intruder ?",
      options: [
        "Sniper teste un payload à la fois ; Cluster bomb teste toutes les combinaisons de plusieurs payload sets",
        "Sniper teste toutes les combinaisons ; Cluster bomb un seul paramètre",
        "Les deux modes sont identiques",
        "Sniper ne fonctionne qu'en HTTPS"
      ],
      answer: 0,
      explain: "Sniper place un payload dans une position à la fois. Cluster bomb parcourt le produit cartésien des payload sets, ce qui explose rapidement le nombre de requêtes."
    },
    {
      q: "À quoi sert l'outil Decoder de Burp ?",
      options: [
        "À décoder et encoder des données (URL, Base64, HTML, hexadécimal)",
        "À déchiffrer les mots de passe hachés",
        "À cartographier les ports ouverts",
        "À générer des certificats TLS"
      ],
      answer: 0,
      explain: "Decoder transforme des chaînes entre formats (URL, Base64, hex, HTML). Il aide à lire un jeton ou à préparer un payload, mais ne casse pas de hash."
    },
    {
      q: "Quel outil de Burp compare deux requêtes ou deux réponses pour isoler une différence ?",
      options: ["Sequencer", "Comparer", "Intruder", "Proxy"],
      answer: 1,
      explain: "Comparer met en évidence les différences entre deux messages, ce qui est utile pour repérer un paramètre qui change le comportement ou une donnée qui fuit."
    }
  ],

  q6: [
    {
      q: "Quelle commande permet de lister les commandes qu'un utilisateur peut exécuter via sudo ?",
      options: ["sudo -l", "id", "whoami /priv", "uname -a"],
      answer: 0,
      explain: "`sudo -l` affiche les droits délégués, notamment les entrées NOPASSWD et les binaires autorisés, qui sont des vecteurs classiques d'escalade."
    },
    {
      q: "Un binaire SUID root est trouvé. Quelle est la démarche correcte en lab ?",
      options: [
        "L'exécuter avec des options détournées documentées par GTFOBins, après avoir vérifié le périmètre",
        "Le supprimer immédiatement",
        "Le copier sur Internet",
        "Changer son propriétaire pour l'utilisateur courant"
      ],
      answer: 0,
      explain: "On identifie le binaire, on consulte GTFOBins et on teste l'élévation dans le lab autorisé. La suppression ou la modification hors procédure n'est pas acceptable."
    },
    {
      q: "Un script exécuté par cron est accessible en écriture par votre utilisateur. Quel est le risque ?",
      options: [
        "Aucun, cron est protégé",
        "Vous pouvez y injecter une commande qui s'exécutera avec les privilèges du compte cron",
        "Le script sera automatiquement chiffré",
        "Cela désactive le pare-feu"
      ],
      answer: 1,
      explain: "Si root exécute un script modifiable par un utilisateur, celui-ci peut y ajouter une commande exécutée en root au prochain passage. C'est une escalade classique."
    },
    {
      q: "À quoi sert `whoami /priv` sous Windows ?",
      options: [
        "À lister les privilèges du jeton courant",
        "À afficher les groupes du domaine uniquement",
        "À lister les services installés",
        "À ouvrir une session RDP"
      ],
      answer: 0,
      explain: "`whoami /priv` montre les privilèges effectifs du jeton (SeImpersonate, SeBackup…). Certains sont directement exploitables pour élever les privilèges."
    },
    {
      q: "Après avoir prouvé une escalade de privilèges, que devez-vous faire en priorité ?",
      options: [
        "Installer une persistance pour revenir plus tard",
        "Documenter la preuve (commande, sortie, horodatage) et respecter les RoE pour la suite",
        "Supprimer les journaux pour ne pas laisser de trace",
        "Créer un compte administrateur permanent"
      ],
      answer: 1,
      explain: "La preuve horodatée rend le constat exploitable. La suite (poursuite des tests, nettoyage, information du client) est encadrée par les règles d'engagement."
    }
  ],

  q7: [
    {
      q: "Dans un vecteur CVSS v3.1, que signifie `UI:R` ?",
      options: [
        "Aucune interaction utilisateur n'est nécessaire",
        "Une action de l'utilisateur est requise pour exploiter la vulnérabilité",
        "L'attaque est locale",
        "Le scope est modifié"
      ],
      answer: 1,
      explain: "`UI:R` (User Interaction Required) indique qu'une action de la victime (clic, visite) est nécessaire. `UI:N` signifie qu'aucune interaction n'est requise."
    },
    {
      q: "Un score CVSS de 6.5 correspond à quelle sévérité en v3.1 ?",
      options: ["Low", "Medium", "High", "Critical"],
      answer: 1,
      explain: "Les bandes v3.1 sont : 0.1–3.9 Low, 4.0–6.9 Medium, 7.0–8.9 High, 9.0–10.0 Critical. Un 6.5 est donc Medium."
    },
    {
      q: "Quel élément est indispensable dans une fiche de vulnérabilité pour qu'un développeur puisse corriger ?",
      options: [
        "Un titre vague et une capture d'écran",
        "La localisation précise, la preuve reproductible, l'impact et la remédiation",
        "Le nom du scanner utilisé uniquement",
        "Le score CVSS seul"
      ],
      answer: 1,
      explain: "Une fiche actionnable décrit le composant, la condition d'exploitation, la preuve, l'impact et la correction attendue. Le score ne suffit pas à corriger."
    },
    {
      q: "Pourquoi hasher le rapport final avant remise ?",
      options: [
        "Pour le compresser",
        "Pour permettre au client de vérifier que le fichier n'a pas été modifié",
        "Pour chiffrer son contenu",
        "Pour le rendre lisible par tous"
      ],
      answer: 1,
      explain: "L'empreinte SHA-256 prouve l'intégrité du livrable. Elle ne prouve pas l'authenticité : pour cela, il faut signer le hash avec une clé privée."
    },
    {
      q: "Quelle est la meilleure façon de prioriser deux vulnérabilités de scores différents ?",
      options: [
        "Toujours corriger le score le plus élevé en premier",
        "Croiser le score, l'exposition réelle, la valeur des données et les contrôles compensatoires",
        "Corriger d'abord celle qui est la plus facile à corriger",
        "Attendre le prochain audit"
      ],
      answer: 1,
      explain: "CVSS décrit la sévérité intrinsèque. La priorisation intègre l'exposition, l'exploitabilité, l'impact métier et les mitigations existantes."
    }
  ],

  q8: [
    {
      q: "Pourquoi une allowlist est-elle préférable à une blacklist pour valider une entrée ?",
      options: [
        "Elle est plus rapide à écrire",
        "Elle définit ce qui est autorisé, ce qui est déterministe face aux encodages et variantes",
        "Elle bloque automatiquement les attaques par force brute",
        "Elle chiffre les données"
      ],
      answer: 1,
      explain: "Une blacklist énumère l'inconnu et se contourne par encodage, casse ou syntaxe alternative. Une allowlist de format, type et longueur refuse par défaut."
    },
    {
      q: "Quel est l'intérêt d'un nonce dans une CSP ?",
      options: [
        "Autoriser un script inline précis sans recourir à `'unsafe-inline'`",
        "Chiffrer les cookies",
        "Forcer le navigateur à utiliser HTTPS",
        "Bloquer les requêtes SQL"
      ],
      answer: 0,
      explain: "Le nonce est une valeur aléatoire unique par réponse, autorisée explicitement dans la CSP. Il permet d'exécuter les scripts légitimes tout en bloquant les injections."
    },
    {
      q: "Que se passe-t-il si HSTS est configuré avec un `max-age` très court ?",
      options: [
        "La protection contre le downgrade est limitée dans le temps",
        "Le site passe automatiquement en HTTP",
        "Les cookies sont supprimés",
        "Le certificat TLS est révoqué"
      ],
      answer: 0,
      explain: "Le navigateur ne force HTTPS que pendant la durée du `max-age`. Une valeur courte réduit la fenêtre de protection et doit être augmentée après validation."
    },
    {
      q: "Quel ensemble de flags protège au mieux un cookie de session ?",
      options: [
        "HttpOnly; Secure; SameSite=Lax",
        "Secure uniquement",
        "SameSite=None sans Secure",
        "Path=/admin; Domain=*"
      ],
      answer: 0,
      explain: "HttpOnly bloque la lecture JavaScript, Secure interdit l'envoi en clair et SameSite limite les requêtes cross-site. À compléter par une rotation d'ID et une expiration courte."
    },
    {
      q: "Quelle affirmation décrit correctement la place d'un WAF dans une stratégie de défense ?",
      options: [
        "Il remplace la correction du code",
        "Il est une couche de défense en profondeur et une mitigation temporaire, pas un correctif",
        "Il rend les tests d'intrusion inutiles",
        "Il garantit l'absence de XSS et de SQLi"
      ],
      answer: 1,
      explain: "Le WAF filtre des signatures et des anomalies, mais se contourne par encodage ou logique métier. La correction à la source reste la seule solution durable."
    }
  ]
};
