/**
 * Quiz de fin de module. `answer` est l'index (0-based) de la bonne réponse.
 */
import { QUIZ_EXTRA } from './quizzes-extra.js';
import { CTF_QUIZZES } from './quizzes-ctf.js';
import { QUIZ_M13 } from './quizzes-m13.js';

export const QUIZZES = {
  q1: {
    moduleId: 'm1',
    title: "Évaluation — Cadre légal & méthodologies",
    pass: 70,
    questions: [
      {
        q: "Qu'est-ce qui distingue fondamentalement un pentest éthique d'un piratage, à technique égale ?",
        options: [
          "L'utilisation d'outils open source plutôt que payants",
          "L'autorisation écrite, un périmètre défini et une finalité défensive",
          "La nationalité de l'auditeur et son assurance",
          "Le fait de ne jamais utiliser d'exploit"
        ],
        answer: 1,
        explain: "La technique est souvent identique. Ce qui change le statut juridique et éthique, c'est le consentement du propriétaire, le périmètre contractuel et la finalité (réduire le risque)."
      },
      {
        q: "L'article 323-1 du Code pénal français réprime principalement…",
        options: [
          "La diffusion d'un logiciel malveillant",
          "L'accès ou le maintien frauduleux dans un système de traitement automatisé de données",
          "Le non-respect du RGPD",
          "L'usurpation d'identité sur les réseaux sociaux"
        ],
        answer: 1,
        explain: "L'article 323-1 vise l'accès ou le maintien frauduleux dans un STAD : 3 ans et 100 000 € ; 5 ans et 150 000 € en cas de suppression/modification de données ou d'altération du fonctionnement."
      },
      {
        q: "Quel document précise les techniques interdites, les fenêtres horaires et les contacts d'urgence ?",
        options: [
          "Le rapport final",
          "Les règles d'engagement (RoE)",
          "La politique de mot de passe du client",
          "Le devis commercial"
        ],
        answer: 1,
        explain: "Les RoE (Rules of Engagement) sont le document opérationnel de la mission : scope exact, exclusions, horaires, techniques autorisées/interdites, contacts et procédure d'arrêt."
      },
      {
        q: "Vous découvrez une vulnérabilité critique sur un domaine hors scope d'un programme de bug bounty. Que faites-vous ?",
        options: [
          "Vous l'exploitez discrètement pour prouver l'impact",
          "Vous la corrigez vous-même",
          "Vous ne la testez pas et signalez éventuellement le domaine au programme",
          "Vous la publiez immédiatement sur les réseaux sociaux"
        ],
        answer: 2,
        explain: "Hors scope = hors autorisation. Le signaler au programme est acceptable, l'exploiter ne l'est pas. La safe harbor ne couvre que les actifs et techniques listés."
      },
      {
        q: "Dans la méthodologie PTES, quelle est la première phase ?",
        options: [
          "Exploitation",
          "Analyse de vulnérabilités",
          "Pré-engagement (cadrage, contrat, RoE)",
          "Post-exploitation"
        ],
        answer: 2,
        explain: "PTES commence par le pré-engagement : cadrage du besoin, autorisations, périmètre, planning et critères de succès. C'est la phase qui conditionne la légalité de toute la suite."
      }
    ]
  },

  q2: {
    moduleId: 'm2',
    title: "Évaluation — Reconnaissance & empreinte",
    pass: 70,
    questions: [
      {
        q: "Qu'est-ce qui caractérise la reconnaissance passive ?",
        options: [
          "Elle envoie des paquets uniquement sur les ports ouverts",
          "Elle n'envoie aucun paquet directement à la cible",
          "Elle nécessite un accès root",
          "Elle est toujours illégale"
        ],
        answer: 1,
        explain: "La reconnaissance passive exploite des sources tierces (registres, certificats, moteurs, archives) sans interroger directement la cible. Elle est donc invisible pour ses logs."
      },
      {
        q: "Que teste la commande `dig AXFR @ns1.acme.example acme.example` ?",
        options: [
          "La résolution inverse d'une IP",
          "Un transfert de zone DNS complet",
          "La présence d'un WAF",
          "La validité d'un certificat TLS"
        ],
        answer: 1,
        explain: "AXFR demande au serveur autoritaire de transférer toute la zone. Si le serveur l'autorise, tous les enregistrements (y compris internes) sont exposés."
      },
      {
        q: "À quoi sert l'option `-sV` de Nmap ?",
        options: [
          "À scanner tous les ports",
          "À détecter la version des services",
          "À désactiver le ping",
          "À enregistrer la sortie en XML"
        ],
        answer: 1,
        explain: "-sV sonde les services pour identifier leur nature et leur version (ex. Apache 2.4.49, OpenSSH 8.2), ce qui permet de rechercher les vulnérabilités connues."
      },
      {
        q: "Un port apparaît `filtered` dans la sortie Nmap. Qu'est-ce que cela signifie ?",
        options: [
          "Le service est arrêté et le port est fermé",
          "Un pare-feu ou un IDS bloque silencieusement les paquets",
          "Le port est ouvert mais protégé par un mot de passe",
          "Nmap n'a pas eu l'autorisation de scanner"
        ],
        answer: 1,
        explain: "`filtered` indique qu'aucune réponse n'a été reçue : filtrage par pare-feu/IDS (drop). Cela ne prouve pas l'absence de service derrière."
      },
      {
        q: "Quelle source permet de découvrir des sous-domaines via les certificats TLS publics ?",
        options: [
          "crt.sh (Certificate Transparency)",
          "Whois",
          "Shodan",
          "Le fichier robots.txt"
        ],
        answer: 0,
        explain: "Les journaux de Certificate Transparency (crt.sh, par exemple) listent les noms d'hôtes pour lesquels un certificat a été émis, ce qui révèle souvent des sous-domaines non documentés."
      }
    ]
  },

  q3: {
    moduleId: 'm3',
    title: "Évaluation — Cartographie & énumération",
    pass: 70,
    questions: [
      {
        q: "Quelle est la différence principale entre crawling et fuzzing de répertoires ?",
        options: [
          "Le crawling utilise un proxy, le fuzzing non",
          "Le crawling suit des liens existants, le fuzzing teste des noms issus d'une wordlist",
          "Le fuzzing est passif, le crawling est actif",
          "Les deux sont identiques"
        ],
        answer: 1,
        explain: "Le crawl découvre ce qui est lié depuis les pages ; le fuzzing teste des chemins devinés (wordlist) qui peuvent ne jamais être référencés dans l'interface."
      },
      {
        q: "Comment repérer un « soft 404 » lors d'un scan ?",
        options: [
          "Il renvoie toujours un code 500",
          "Il renvoie 200 avec une page d'erreur : il faut filtrer par taille, mots ou contenu",
          "Il est impossible à détecter",
          "Il n'apparaît que sur HTTPS"
        ],
        answer: 1,
        explain: "Un soft 404 renvoie 200 mais affiche « introuvable ». On calibre sur une URL bidon puis on filtre (-fs taille, -fw mots, -fr regex) pour éliminer le bruit."
      },
      {
        q: "Un endpoint renvoie 403. Quelle conclusion est la plus juste ?",
        options: [
          "L'endpoint n'existe pas",
          "L'endpoint existe mais l'accès est refusé : il faut tester des contournements et des contextes authentifiés",
          "Le serveur est hors service",
          "Il s'agit forcément d'une fausse piste"
        ],
        answer: 1,
        explain: "403 signifie que la ressource existe et que le serveur refuse l'accès. C'est une piste : tester avec un autre rôle, un autre chemin, des en-têtes de proxy, ou une méthode HTTP différente."
      },
      {
        q: "Dans FFUF, que représente le mot-clé `FUZZ` ?",
        options: [
          "Un filtre de statut HTTP",
          "L'emplacement où chaque élément de la wordlist est injecté",
          "Un mode de scan UDP",
          "Le nom du rapport de sortie"
        ],
        answer: 1,
        explain: "`FUZZ` est remplacé par chaque ligne de la wordlist dans l'URL, l'en-tête ou le corps de la requête. On peut aussi utiliser `-w wordlist:FUZZ2` pour plusieurs points d'injection."
      },
      {
        q: "À quoi sert `gobuster vhost` ?",
        options: [
          "À trouver des hôtes virtuels servis sur la même IP via l'en-tête Host",
          "À énumérer les utilisateurs d'un Active Directory",
          "À forcer des mots de passe SSH",
          "À scanner les ports UDP"
        ],
        answer: 0,
        explain: "Le mode vhost teste différents noms dans l'en-tête Host sur une même adresse IP pour découvrir des applications virtuelles non référencées en DNS public."
      }
    ]
  },

  q4: {
    moduleId: 'm4',
    title: "Évaluation — OWASP Top 10",
    pass: 70,
    questions: [
      {
        q: "Quelle est la remédiation définitive d'une injection SQL ?",
        options: [
          "Un WAF qui bloque le mot UNION",
          "Des requêtes préparées / paramétrées",
          "L'échappement des quotes avec addslashes",
          "Masquer les messages d'erreur"
        ],
        answer: 1,
        explain: "Les requêtes préparées séparent la structure de la requête et les données : la donnée ne peut plus devenir du code SQL. Les autres mesures sont des mitigations partielles."
      },
      {
        q: "Un XSS est dit « stocké » lorsque…",
        options: [
          "Le payload est reflété immédiatement dans la réponse",
          "Le payload est enregistré côté serveur et servi à d'autres utilisateurs",
          "Le payload modifie uniquement le DOM local",
          "Le payload est bloqué par la CSP"
        ],
        answer: 1,
        explain: "Le XSS stocké (persistant) est enregistré (commentaire, profil, ticket) puis rendu à d'autres utilisateurs : il ne nécessite aucune interaction au-delà de la consultation de la page."
      },
      {
        q: "Quelle combinaison protège le mieux contre le CSRF ?",
        options: [
          "Cookie HttpOnly seul",
          "Jeton anti-CSRF lié à la session + cookies SameSite",
          "Captcha sur la page de connexion",
          "Chiffrement TLS"
        ],
        answer: 1,
        explain: "Le jeton imprévisible vérifie que la requête vient bien de l'application, et SameSite empêche l'envoi automatique du cookie depuis un site tiers. TLS ne protège pas de la confusion de contexte."
      },
      {
        q: "Quelle adresse est une cible classique de SSRF dans le cloud ?",
        options: [
          "8.8.8.8",
          "169.254.169.254 (service de métadonnées)",
          "192.0.2.1",
          "255.255.255.255"
        ],
        answer: 1,
        explain: "169.254.169.254 est l'endpoint de métadonnées (AWS, GCP, Azure…). Une SSRF qui l'atteint peut mener au vol de credentials de l'instance."
      },
      {
        q: "Quel wrapper PHP permet de lire le code source d'un fichier via une LFI ?",
        options: [
          "php://filter/convert.base64-encode/resource=…",
          "php://memory",
          "data://text/plain",
          "expect://"
        ],
        answer: 0,
        explain: "php://filter encode le fichier en Base64 avant inclusion, ce qui évite son exécution et permet d'en lire le contenu source."
      },
      {
        q: "Comment se protéger d'une XXE ?",
        options: [
          "Renommer les fichiers XML en .txt",
          "Désactiver la résolution des entités externes et les DTD",
          "Utiliser HTTPS",
          "Limiter la taille des requêtes"
        ],
        answer: 1,
        explain: "La cause est le parseur qui résout les entités externes. On désactive DTD/entités externes (FEATURE_SECURE_PROCESSING, disallow-doctype-decl) et on préfère JSON quand c'est possible."
      },
      {
        q: "Qu'est-ce qu'un IDOR ?",
        options: [
          "Une injection dans les en-têtes HTTP",
          "L'accès à un objet d'autrui via un identifiant manipulable, sans contrôle d'autorisation",
          "Un déni de service applicatif",
          "Une redirection ouverte"
        ],
        answer: 1,
        explain: "L'IDOR (Insecure Direct Object Reference) est un défaut de contrôle d'accès : l'application accepte un identifiant client sans vérifier que l'utilisateur possède l'objet. Un UUID ne corrige rien en soi."
      },
      {
        q: "Pourquoi une redirection ouverte est-elle dangereuse ?",
        options: [
          "Elle permet de lire /etc/passwd",
          "Elle facilite le phishing et le vol de jetons OAuth sous un domaine de confiance",
          "Elle expose la base de données",
          "Elle permet un déni de service"
        ],
        answer: 1,
        explain: "L'URL de confiance sert d'appât et peut exfiltrer des jetons dans le paramètre de retour OAuth. La défense est une allowlist de destinations et des chemins relatifs."
      },
      {
        q: "Quelle défense est indispensable pour un upload de fichiers ?",
        options: [
          "Vérifier uniquement l'extension côté client",
          "Vérifier le contenu réel (magic bytes), renommer aléatoirement et stocker hors du webroot",
          "Autoriser tous les types mais limiter à 10 Mo",
          "Bloquer les fichiers .jpg"
        ],
        answer: 1,
        explain: "Tout ce qui vient du client est falsifiable. On valide le contenu réel, on renomme, on stocke hors webroot et on sert avec un Content-Type sûr."
      },
      {
        q: "Remplacer /api/invoices/1042 par /api/invoices/1043 avec le même jeton et obtenir la facture d'un autre utilisateur relève de…",
        options: [
          "Une injection SQL",
          "Un contrôle d'accès défaillant (IDOR)",
          "Un XSS stocké",
          "Une SSRF"
        ],
        answer: 1,
        explain: "C'est un défaut d'autorisation au niveau de l'objet : le serveur vérifie l'authentification mais pas la propriété de la ressource. La correction est un contrôle d'accès serveur par objet/tenant."
      }
    ]
  },

  q5: {
    moduleId: 'm5',
    title: "Évaluation — Burp Suite",
    pass: 70,
    questions: [
      {
        q: "Pourquoi installer le certificat CA de Burp dans le navigateur ?",
        options: [
          "Pour accélérer les requêtes",
          "Pour que le navigateur accepte les certificats HTTPS générés par le proxy",
          "Pour activer le mode HTTPS only",
          "Pour bloquer les publicités"
        ],
        answer: 1,
        explain: "Burp intercepte le TLS en se faisant passer pour le serveur. Sans sa CA de confiance, le navigateur affiche une erreur de certificat et refuse la connexion."
      },
      {
        q: "Quel outil utilisez-vous pour modifier manuellement une requête et comparer les réponses ?",
        options: [
          "Intruder",
          "Repeater",
          "Sequencer",
          "Decoder"
        ],
        answer: 1,
        explain: "Repeater est l'éditeur manuel : on modifie un paramètre, on renvoie et on examine la réponse. C'est la boucle de test principale."
      },
      {
        q: "Quel mode d'Intruder teste toutes les combinaisons de plusieurs wordlists ?",
        options: [
          "Sniper",
          "Battering ram",
          "Pitchfork",
          "Cluster bomb"
        ],
        answer: 3,
        explain: "Cluster bomb teste le produit cartésien des payload sets (toutes les combinaisons), contrairement à Pitchfork qui avance en parallèle."
      },
      {
        q: "À quoi sert l'option Grep - Match dans Intruder ?",
        options: [
          "À filtrer les requêtes sortantes",
          "À extraire les réponses contenant une chaîne (ex. « Welcome ») pour repérer les succès",
          "À encoder les payloads en Base64",
          "À limiter le nombre de threads"
        ],
        answer: 1,
        explain: "Grep - Match marque les réponses contenant une expression recherchée, ce qui permet d'identifier rapidement les tentatives réussies dans un grand volume de résultats."
      },
      {
        q: "Quel outil analyse l'entropie des jetons de session ?",
        options: [
          "Decoder",
          "Comparer",
          "Sequencer",
          "Logger"
        ],
        answer: 2,
        explain: "Sequencer collecte des jetons et mesure leur aléa. Une entropie faible ou une progression prévisible rend la session devinable."
      }
    ]
  },

  q6: {
    moduleId: 'm6',
    title: "Évaluation — Élévation de privilèges",
    pass: 70,
    questions: [
      {
        q: "Vous trouvez `/usr/bin/find` avec le bit SUID root. Que faites-vous en lab ?",
        options: [
          "Vous le supprimez immédiatement",
          "Vous consultez GTFOBins et testez l'exécution d'un shell avec -exec",
          "Vous le renommez",
          "Vous changez son propriétaire"
        ],
        answer: 1,
        explain: "GTFOBins documente les binaires légitimes détournables. Pour find SUID : `find . -exec /bin/sh -p \\; -quit` permet d'obtenir un shell avec l'euid root."
      },
      {
        q: "À quoi sert `sudo -l` lors de l'énumération ?",
        options: [
          "À lister les utilisateurs du système",
          "À afficher les commandes que l'utilisateur peut exécuter via sudo",
          "À lister les ports ouverts",
          "À afficher les logs sudo"
        ],
        answer: 1,
        explain: "`sudo -l` révèle les droits délégués, notamment les entrées NOPASSWD et les binaires autorisés, qui sont des vecteurs classiques d'escalade."
      },
      {
        q: "Quel privilège Windows est exploité par les techniques de type Potato ?",
        options: [
          "SeBackupPrivilege",
          "SeImpersonatePrivilege",
          "SeChangeNotifyPrivilege",
          "SeShutdownPrivilege"
        ],
        answer: 1,
        explain: "SeImpersonate (et SeAssignPrimaryToken) permet d'emprunter le jeton d'un processus plus privilégié via un serveur COM/pipe piégé : c'est la base de RottenPotato, JuicyPotato, PrintSpoofer."
      },
      {
        q: "Un service Windows a un chemin non quoté contenant des espaces. Quel est le risque ?",
        options: [
          "Le service ne démarre jamais",
          "Windows peut exécuter un binaire placé dans un répertoire intermédiaire du chemin",
          "Le service perd ses logs",
          "Le pare-feu se désactive"
        ],
        answer: 1,
        explain: "Windows essaie successivement C:\\Program.exe, C:\\Program Files\\App.exe, etc. Si un répertoire est accessible en écriture, on peut y déposer un binaire exécuté en SYSTEM."
      },
      {
        q: "Après une escalade réussie en mission autorisée, quelle est la première action ?",
        options: [
          "Installer une persistance immédiatement",
          "Documenter la preuve (commande, sortie, horodatage) puis poursuivre selon les RoE",
          "Supprimer tous les logs",
          "Créer un compte administrateur permanent"
        ],
        answer: 1,
        explain: "La preuve d'abord : sans trace vérifiable, le constat est inexploitable. Ensuite seulement, on suit les RoE (limites, nettoyage planifié, information du client)."
      }
    ]
  },

  q7: {
    moduleId: 'm7',
    title: "Évaluation — Reporting & CVSS",
    pass: 70,
    questions: [
      {
        q: "Quel est le score CVSS v3.1 du vecteur `AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:N` ?",
        options: ["9.1 (Critical)", "7.5 (High)", "6.1 (Medium)", "10.0 (Critical)"],
        answer: 0,
        explain: "Impact = 6.42 × (1-(1-0.56)^2 × 1) ≈ 5.18 ; Exploitability = 8.22 × 0.85 × 0.77 × 0.85 × 0.85 ≈ 3.89 ; somme ≈ 9.06 → Roundup 9.1."
      },
      {
        q: "Quelle métrique de CVSS v3.1 disparaît dans CVSS v4.0 ?",
        options: ["Attack Vector", "Scope", "User Interaction", "Confidentiality"],
        answer: 1,
        explain: "CVSS v4.0 supprime Scope et le remplace par des métriques d'impact sur le système vulnérable et les systèmes suivants (VC/VI/VA, SC/SI/SA)."
      },
      {
        q: "Un score de 7.8 correspond à quelle sévérité ?",
        options: ["Low", "Medium", "High", "Critical"],
        answer: 2,
        explain: "Les bandes v3.1 sont : 0.1–3.9 Low, 4.0–6.9 Medium, 7.0–8.9 High, 9.0–10.0 Critical."
      },
      {
        q: "Quelle section d'un rapport sert à convaincre la direction en une page ?",
        options: [
          "Les annexes techniques",
          "La synthèse exécutive",
          "La liste des commandes exécutées",
          "Le glossaire"
        ],
        answer: 1,
        explain: "La synthèse exécutive résume le risque global, les chiffres clés et les priorités, sans jargon technique."
      },
      {
        q: "Pourquoi un score CVSS élevé ne suffit-il pas à prioriser une correction ?",
        options: [
          "Parce que CVSS est toujours faux",
          "Parce qu'il ignore l'exposition réelle, la valeur des données et les contrôles compensatoires",
          "Parce que seuls les scores v4.0 sont valides",
          "Parce que les clients ne lisent pas les scores"
        ],
        answer: 1,
        explain: "CVSS décrit la sévérité intrinsèque. La priorisation croise l'exposition, l'exploitabilité réelle, l'impact métier et l'existence de mitigations."
      }
    ]
  },

  q8: {
    moduleId: 'm8',
    title: "Évaluation — Défense applicative",
    pass: 70,
    questions: [
      {
        q: "Où doit s'appliquer l'encodage contre le XSS ?",
        options: [
          "À l'entrée, une fois pour toutes",
          "À la sortie, selon le contexte (HTML, attribut, JS, URL)",
          "Uniquement dans la base de données",
          "Seulement côté client"
        ],
        answer: 1,
        explain: "Une même donnée peut être rendue dans plusieurs contextes. L'encodage doit correspondre au contexte de sortie ; encoder à l'entrée casse les données et ne couvre pas tous les sinks."
      },
      {
        q: "À quoi sert une Content-Security-Policy ?",
        options: [
          "À chiffrer les cookies",
          "À restreindre les sources de scripts et ressources exécutables par le navigateur",
          "À bloquer les requêtes SQL",
          "À forcer HTTPS"
        ],
        answer: 1,
        explain: "La CSP limite l'exécution de scripts et le chargement de ressources à des origines autorisées, réduisant l'impact d'un XSS. Elle ne corrige pas la faille elle-même."
      },
      {
        q: "Que fait l'en-tête HSTS ?",
        options: [
          "Il force le navigateur à utiliser HTTPS pour le domaine pendant max-age",
          "Il masque le serveur",
          "Il bloque les cookies tiers",
          "Il active le mode privé"
        ],
        answer: 0,
        explain: "Strict-Transport-Security impose HTTPS pour toutes les futures connexions au domaine pendant la durée spécifiée, ce qui empêche le downgrade et le SSL stripping."
      },
      {
        q: "Quel ensemble de flags est recommandé pour un cookie de session ?",
        options: [
          "HttpOnly; Secure; SameSite=Lax",
          "Secure seulement",
          "HttpOnly=false; SameSite=None",
          "Path=/admin; Domain=*"
        ],
        answer: 0,
        explain: "HttpOnly empêche l'accès via JavaScript, Secure interdit l'envoi en clair, SameSite limite les requêtes cross-site. À combiner avec une rotation d'ID et une expiration courte."
      },
      {
        q: "Quelle affirmation sur le WAF est correcte ?",
        options: [
          "Il remplace les requêtes préparées",
          "Il constitue une défense en profondeur et une mitigation temporaire, mais ne corrige pas le code",
          "Il rend le pentest inutile",
          "Il bloque toutes les injections à 100 %"
        ],
        answer: 1,
        explain: "Un WAF filtre des signatures et des anomalies, mais se contourne par encodage ou logique métier. La correction à la source reste indispensable."
      }
    ]
  }
};

for (const [id, extra] of Object.entries(QUIZ_EXTRA)) {
  const quiz = QUIZZES[id];
  if (quiz && Array.isArray(extra)) quiz.questions.push(...extra);
}

Object.assign(QUIZZES, CTF_QUIZZES);
Object.assign(QUIZZES, QUIZ_M13);

export const QUIZ_LIST = Object.entries(QUIZZES).map(([id, quiz]) => ({ id, ...quiz }));
