export default {
  id: 'm15',
  num: 15,
  title: "Linux — fondamentaux et commandes essentielles",
  short: "Linux fondamentaux",
  icon: "🐧",
  xp: 450,
  duration: 120,
  summary: "Découvrir Linux sans prérequis : le shell, l'arborescence, les fichiers, la lecture et la recherche, les pipes, les processus, les services, les disques et les archives, avec un lab d'investigation guidé.",
  objectives: [
    "Se repérer dans l'arborescence Linux et comprendre les chemins",
    "Créer, copier, déplacer, lire et supprimer des fichiers en sécurité",
    "Rechercher une information dans des fichiers et des journaux",
    "Enchaîner les commandes avec les pipes et les redirections",
    "Observer les processus, les services et l'espace disque",
    "Créer et vérifier une archive, puis transférer une preuve"
  ],
  blocks: [
    {
      t: 'callout', v: 'info', title: "Linux sans jargon",
      x: "Linux est un système d'exploitation, comme Windows ou macOS, mais il est libre et très utilisé sur les serveurs. Ici, tout se fait en tapant des commandes dans un <strong>terminal</strong>. Une commande est une phrase courte : un verbe (le programme), parfois une précision (l'option) et un objet (le fichier ou le dossier)."
    },
    {
      t: 'p',
      x: "Imaginez une grande armoire avec des tiroirs dans des tiroirs. C'est l'<strong>arborescence</strong> : tout part de la racine <code>/</code>, puis se divise en dossiers. Votre dossier personnel est souvent <code>/home/votre_nom</code>, abrégé <code>~</code>. Le <strong>shell</strong> est le guichetier qui reçoit votre phrase et va chercher le bon tiroir."
    },
    {
      t: 'mini',
      items: [
        { v: 'cyan', h: 'Commande', p: "Le programme à exécuter. Exemple : <code>ls</code> pour lister." },
        { v: 'amber', h: 'Option', p: "Une précision, souvent précédée d'un tiret. <code>ls -l</code> demande un affichage détaillé." },
        { v: 'lime', h: 'Argument', p: "L'objet sur lequel agir. <code>ls /etc</code> liste le dossier /etc." },
        { v: 'magenta', h: 'Chemin', p: "L'adresse d'un fichier. <code>/etc/hosts</code> est un chemin absolu ; <code>notes.txt</code> est relatif au dossier courant." }
      ]
    },
    { t: 'h', x: "15.1 Le shell : lire une commande" },
    {
      t: 'p',
      x: "Une commande se lit de gauche à droite : le programme, puis ses options, puis ses arguments. Par exemple, <code>ls -la /var/log</code> signifie « programme ls, affiche tout y compris les fichiers cachés, dans le dossier /var/log ». Les options peuvent parfois s'écrire séparément : <code>ls -l -a</code> est équivalent."
    },
    {
      t: 'table',
      head: ['Élément', 'Exemple', 'Rôle'],
      rows: [
        ['Programme', 'ls', "Ce que l'on exécute"],
        ['Option courte', '-l', "Format long, une information par ligne"],
        ['Option longue', '--all', "Même idée, écrite en toutes lettres"],
        ['Argument', '/var/log', "Le dossier ou fichier concerné"],
        ['Séparateur', '; ou &&', "Enchaîner deux commandes"],
        ['Pipe', '|', "Envoyer la sortie d'une commande vers une autre"],
        ['Redirection', '> ou >>', "Écrire la sortie dans un fichier (écraser ou ajouter)"]
      ]
    },
    {
      t: 'callout', v: 'tip', title: "Le prompt",
      x: "Le prompt ressemble à <code>dev@lin:~$</code>. <code>dev</code> est l'utilisateur, <code>lin</code> la machine, <code>~</code> le dossier courant et <code>$</code> indique un utilisateur normal. Un <code>#</code> indique souvent root : vérifiez toujours avec <code>whoami</code> et <code>id</code> avant d'agir."
    },
    { t: 'h', x: "15.2 Se repérer et manipuler des fichiers" },
    {
      t: 'p',
      x: "Les commandes de base sont peu nombreuses et se retiennent vite : <code>pwd</code> dit où l'on est, <code>ls</code> liste, <code>cd</code> change de dossier, <code>mkdir</code> crée un dossier, <code>touch</code> crée un fichier vide, <code>cp</code> copie, <code>mv</code> déplace ou renomme, <code>rm</code> supprime. La prudence est de mise avec <code>rm</code> : il n'y a pas de corbeille."
    },
    {
      t: 'code', lang: 'bash', title: "Navigation et fichiers",
      x: `pwd
ls -la
cd /var/log
pwd
cd ~
mkdir -p ~/lab/{notes,evidence}
touch ~/lab/notes/journal.md
cp /etc/hosts ~/lab/notes/hosts.bak
mv ~/lab/notes/hosts.bak ~/lab/evidence/
ls -la ~/lab/notes ~/lab/evidence`
    },
    {
      t: 'term',
      title: "Déroulé commenté",
      x: [
        { c: "pwd", o: ["/home/dev"] },
        { c: "cd /var/log && pwd", o: ["/var/log"] },
        { c: "mkdir -p ~/lab/{notes,evidence}", o: ["++ dossiers créés : ~/lab/notes et ~/lab/evidence"] },
        { c: "mv ~/lab/notes/hosts.bak ~/lab/evidence/", o: ["++ fichier déplacé"] }
      ]
    },
    {
      t: 'callout', v: 'warn', title: "Chemins relatifs et absolus",
      x: "Un chemin absolu commence par <code>/</code> et ne dépend pas du dossier courant. Un chemin relatif part du dossier courant : <code>notes/journal.md</code> ne désigne pas la même chose selon l'endroit où vous êtes. En cas de doute, <code>pwd</code> puis <code>ls</code>."
    },
    { t: 'h', x: "15.3 Lire, chercher et compter" },
    {
      t: 'p',
      x: "<code>cat</code> affiche tout un fichier, <code>less</code> le parcourt page par page, <code>head</code> et <code>tail</code> montrent le début ou la fin. <code>grep</code> cherche un motif, <code>find</code> cherche un fichier, <code>wc</code> compte les lignes, mots ou caractères. Ce sont les outils du quotidien pour lire un journal ou vérifier une configuration."
    },
    {
      t: 'code', lang: 'bash', title: "Lire et filtrer",
      x: `cat /etc/os-release
head -5 /etc/passwd
tail -5 /var/log/syslog
grep -i error /var/log/syslog
wc -l /etc/passwd
find /etc -name "*.conf" -type f
grep -R "PermitRootLogin" /etc/ssh/`
    },
    {
      t: 'term',
      title: "Résultats",
      x: [
        { c: "head -5 /etc/passwd", o: [
          "root:x:0:0:root:/root:/bin/bash",
          "daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin",
          "bin:x:2:2:bin:/bin:/usr/sbin/nologin"
        ] },
        { c: "grep -i error /var/log/syslog", o: ["... ERROR failed to start service ..."] },
        { c: "grep -R \"PermitRootLogin\" /etc/ssh/", o: ["/etc/ssh/sshd_config:PermitRootLogin no"] }
      ]
    },
    {
      t: 'callout', v: 'tip', title: "grep est votre meilleur ami",
      x: "Sur un serveur, on ne lit pas un journal de 10 000 lignes à l'œil. On filtre : <code>grep -i error</code>, <code>grep -c</code> pour compter, <code>grep -v</code> pour exclure. <code>-i</code> ignore la casse, <code>-n</code> ajoute le numéro de ligne, <code>-R</code> parcourt les dossiers."
    },
    { t: 'h', x: "15.4 Pipes et redirections : assembler les commandes" },
    {
      t: 'p',
      x: "Le <strong>pipe</strong> <code>|</code> envoie la sortie d'une commande dans l'entrée de la suivante. C'est une chaîne de montage : on liste, on filtre, on compte. La <strong>redirection</strong> <code>&gt;</code> écrit dans un fichier en l'écrasant ; <code>&gt;&gt;</code> ajoute à la fin ; <code>2&gt;</code> redirige les erreurs ; <code>tee</code> écrit tout en affichant à l'écran."
    },
    {
      t: 'code', lang: 'bash', title: "Chaînes utiles",
      x: `ls -la /etc | grep hosts
ls -la /etc | grep hosts > ~/lab/notes/hosts.txt
ps aux | grep ssh | grep -v grep
grep -i error /var/log/syslog | wc -l
grep -i error /var/log/syslog 2>/dev/null | tee ~/lab/notes/errors.txt`
    },
    {
      t: 'term',
      title: "Lecture",
      x: [
        { c: "ls -la /etc | grep hosts", o: ["-rw-r--r-- 1 root root 220 /etc/hosts"] },
        { c: "ps aux | grep ssh | grep -v grep", o: ["root 812 0.0 0.1 15432 6212 ? Ss 10:01 0:00 sshd: /usr/sbin/sshd"] }
      ]
    },
    {
      t: 'p',
      x: "La chaîne <code>ps aux | grep ssh | grep -v grep</code> se lit : « liste tous les processus, garde ceux qui contiennent ssh, puis retire la ligne de grep elle-même ». Sans le second filtre, la commande grep apparaîtrait dans son propre résultat."
    },
    { t: 'h', x: "15.5 Processus et services" },
    {
      t: 'p',
      x: "Un <strong>processus</strong> est un programme en cours d'exécution. Chaque processus a un numéro (PID), un propriétaire et une consommation de CPU/mémoire. Un <strong>service</strong> est un programme qui tourne en arrière-plan et rend un service : SSH, nginx, MySQL. Sur la plupart des distributions modernes, <code>systemctl</code> gère les services et <code>journalctl</code> lit leurs journaux."
    },
    {
      t: 'code', lang: 'bash', title: "Observer et gérer",
      x: `ps aux | head
top -b -n 1 | head -15
systemctl status ssh
journalctl -u ssh -n 20 --no-pager
sudo systemctl restart ssh`
    },
    {
      t: 'term',
      title: "Sorties typiques",
      x: [
        { c: "systemctl status ssh", o: [
          "● ssh.service - OpenBSD Secure Shell server",
          "     Loaded: loaded (/lib/systemd/system/ssh.service; enabled; vendor preset: enabled)",
          "     Active: active (running) since Mon 10:01:02 UTC"
        ] },
        { c: "journalctl -u ssh -n 20 --no-pager", o: ["sshd[812]: Server listening on 0.0.0.0 port 22."] }
      ]
    },
    {
      t: 'callout', v: 'danger', title: "Ne jamais tuer un service sans comprendre",
      x: "<code>kill</code> envoie un signal à un processus. <code>kill -9</code> force l'arrêt immédiat, sans sauvegarde ni nettoyage. Sur un serveur, préférez <code>systemctl stop</code> ou <code>restart</code>, qui respectent le cycle de vie du service. En production, vérifiez l'impact avant toute action."
    },
    { t: 'h', x: "15.6 Disques, archives et transferts" },
    {
      t: 'p',
      x: "<code>df -h</code> montre l'espace par système de fichiers ; <code>du -sh</code> montre la taille d'un dossier. <code>tar</code> regroupe des fichiers dans une archive, <code>gzip</code> la compresse. <code>scp</code> copie un fichier vers une autre machine via SSH. Ces commandes servent autant à diagnostiquer qu'à collecter des preuves."
    },
    {
      t: 'code', lang: 'bash', title: "Espace, archive et transfert",
      x: `df -h
du -sh /var/log
tar -czf ~/lab/logs.tgz /var/log
tar -tzf ~/lab/logs.tgz | head
scp ~/lab/logs.tgz dev@10.10.10.50:/tmp/`
    },
    {
      t: 'term',
      title: "Vérification",
      x: [
        { c: "df -h", o: ["/dev/sda1 40G 18G 20G 48% /"] },
        { c: "du -sh /var/log", o: ["128M /var/log"] },
        { c: "tar -tzf ~/lab/logs.tgz | head", o: ["var/log/syslog", "var/log/auth.log", "var/log/kern.log"] }
      ]
    },
    { t: 'h', x: "15.7 Lab guidé — investiguer un serveur inconnu" },
    {
      t: 'p',
      x: "Vous arrivez sur une machine de lab dont vous ne savez rien. Objectif : produire un mini-inventaire sans rien modifier. Suivez l'ordre : identité, système, réseau, espace disque, services, journaux, fichiers récents. C'est la base de tout diagnostic et de toute analyse après incident."
    },
    {
      t: 'code', lang: 'bash', title: "Inventaire en lecture seule",
      x: `whoami
id
hostname
cat /etc/os-release | head -3
uname -a
ip -br a
ip route
df -h
ss -tulpn
systemctl list-units --type=service --state=running | head -20
journalctl -p err -n 20 --no-pager
find /home -type f -mtime -7 2>/dev/null | head -20`
    },
    {
      t: 'term',
      title: "Rapport d'inventaire",
      x: [
        { c: "whoami && id", o: ["dev", "uid=1001(dev) gid=1001(dev) groups=1001(dev),27(sudo)"] },
        { c: "cat /etc/os-release | head -3", o: ["NAME=\"Ubuntu\"", "VERSION=\"22.04.4 LTS\"", "ID=ubuntu"] },
        { c: "ss -tulpn", o: ["tcp LISTEN 0.0.0.0:22 sshd", "tcp LISTEN 0.0.0.0:80 nginx"] },
        { c: "journalctl -p err -n 20 --no-pager", o: ["... Failed to start ...", "... Permission denied ..."] }
      ]
    },
    {
      t: 'callout', v: 'tip', title: "Lecture seule d'abord",
      x: "Un bon diagnostic commence toujours par des commandes qui ne modifient rien. On note les versions, les services, les erreurs et les fichiers récents. On agit ensuite, avec une sauvegarde et une idée claire de l'effet attendu."
    },
    { t: 'h', x: "15.8 Les bonnes habitudes du terminal" },
    {
      t: 'ul',
      x: [
        "Toujours vérifier <code>pwd</code> avant une commande destructive.",
        "Utiliser <code>Tab</code> pour compléter les chemins et éviter les fautes de frappe.",
        "Lire l'aide avec <code>man commande</code> ou <code>commande --help</code>.",
        "Tester une commande avec <code>echo</code> ou <code>--dry-run</code> quand c'est possible.",
        "Sauvegarder avant de modifier un fichier de configuration.",
        "Éviter <code>rm -rf</code> avec une variable non vérifiée : une faute de frappe peut vider un dossier.",
        "Journaliser les commandes importantes et les résultats dans un fichier de notes."
      ]
    },
    { t: 'h', x: "15.9 Fiches commandes Linux" },
    {
      t: 'cmdref',
      items: [
        {
          cmd: 'pwd / ls / cd', tag: 'Navigation',
          what: "Affiche le dossier courant, liste son contenu et change de dossier.",
          gives: "La position dans l'arborescence et les fichiers présents.",
          use: "Se repérer avant toute action et vérifier que l'on est au bon endroit.",
          syntax: 'pwd ; ls -la ; cd chemin',
          example: 'cd /var/log && pwd',
          read: "<code>~</code> désigne votre dossier personnel, <code>..</code> le dossier parent, <code>-</code> le dossier précédent. Un chemin qui commence par <code>/</code> est absolu."
        },
        {
          cmd: 'mkdir / touch / cp / mv', tag: 'Fichiers',
          what: "Crée des dossiers ou fichiers, copie et déplace.",
          gives: "Une arborescence de travail et des sauvegardes.",
          use: "Préparer un dossier de lab, copier une configuration, renommer une preuve.",
          syntax: 'mkdir -p dossier ; touch fichier ; cp source destination ; mv source destination',
          example: 'mkdir -p ~/lab/{notes,evidence} && cp /etc/hosts ~/lab/notes/hosts.bak',
          read: "<code>-p</code> crée les parents et ne échoue pas si le dossier existe. <code>cp</code> écrase sans demander ; <code>cp -i</code> demande confirmation. <code>mv</code> sert aussi à renommer."
        },
        {
          cmd: 'cat / less / head / tail', tag: 'Lecture',
          what: "Affiche tout ou partie d'un fichier.",
          gives: "Le contenu, le début, la fin ou une navigation page par page.",
          use: "Lire une configuration, vérifier les dernières lignes d'un journal.",
          syntax: 'cat fichier ; less fichier ; head -n N fichier ; tail -n N fichier',
          example: 'tail -20 /var/log/syslog',
          read: "<code>less</code> permet de chercher avec <code>/motif</code> et de quitter avec <code>q</code>. <code>tail -f</code> suit un fichier en temps réel, utile pour observer un service."
        },
        {
          cmd: 'grep', tag: 'Recherche',
          what: "Cherche un motif dans un fichier ou un flux.",
          gives: "Les lignes correspondantes, avec ou sans numéro.",
          use: "Filtrer des journaux, retrouver une directive, compter des occurrences.",
          syntax: 'grep [options] motif fichier',
          example: 'grep -R "PermitRootLogin" /etc/ssh/',
          read: "<code>-i</code> ignore la casse, <code>-n</code> affiche le numéro de ligne, <code>-R</code> parcourt les dossiers, <code>-v</code> inverse la sélection, <code>-c</code> compte."
        },
        {
          cmd: 'find', tag: 'Recherche de fichiers',
          what: "Parcourt une arborescence selon des critères.",
          gives: "Les chemins correspondant au nom, au type, à la date ou aux permissions.",
          use: "Retrouver une configuration, lister les fichiers récents, préparer un audit.",
          syntax: 'find chemin -name "motif" -type f',
          example: 'find /etc -name "*.conf" -type f',
          read: "Toujours mettre le chemin avant les critères. <code>2&gt;/dev/null</code> masque les erreurs de permission. <code>-mtime -7</code> cible les fichiers modifiés depuis 7 jours."
        },
        {
          cmd: 'ps / top / systemctl', tag: 'Processus & services',
          what: "Liste les processus, montre la consommation et gère les services.",
          gives: "Les PID, les propriétaires, l'état des services et leurs journaux.",
          use: "Identifier un processus gourmand, vérifier qu'un service tourne, le redémarrer.",
          syntax: 'ps aux ; top ; systemctl status service ; sudo systemctl restart service',
          example: 'systemctl status ssh',
          read: "<code>ps aux</code> est une photographie, <code>top</code> une vue animée. <code>systemctl status</code> indique active/inactive et les dernières lignes de log. Préférez <code>restart</code> à <code>kill -9</code>."
        },
        {
          cmd: 'df / du', tag: 'Disque',
          what: "Affiche l'espace libre par système de fichiers et la taille des dossiers.",
          gives: "L'occupation, les points de montage et les gros consommateurs.",
          use: "Diagnostiquer un disque plein ou préparer une sauvegarde.",
          syntax: 'df -h ; du -sh dossier',
          example: 'du -sh /var/log',
          read: "<code>df</code> regarde le système de fichiers, <code>du</code> la taille réelle des fichiers. Un disque plein provoque des erreurs applicatives difficiles à diagnostiquer."
        },
        {
          cmd: 'tar / gzip', tag: 'Archives',
          what: "Regroupe et compresse des fichiers, ou les extrait.",
          gives: "Une archive unique, plus facile à sauvegarder ou transférer.",
          use: "Archiver des journaux, préparer une preuve, restaurer une configuration.",
          syntax: 'tar -czf archive.tgz dossier ; tar -xzf archive.tgz',
          example: 'tar -czf ~/lab/logs.tgz /var/log',
          read: "<code>c</code> crée, <code>x</code> extrait, <code>t</code> liste, <code>z</code> compresse avec gzip, <code>f</code> indique le fichier. Vérifiez toujours le contenu avec <code>tar -tzf</code> avant d'extraire."
        },
        {
          cmd: 'scp / ssh', tag: 'Transfert',
          what: "Copie un fichier ou ouvre une session sur une machine distante via SSH.",
          gives: "Un accès chiffré et un transfert fiable.",
          use: "Récupérer une preuve ou administrer un serveur de lab.",
          syntax: 'scp fichier utilisateur@hôte:/chemin ; ssh utilisateur@hôte',
          example: 'scp ~/lab/logs.tgz dev@10.10.10.50:/tmp/',
          read: "Vérifiez l'empreinte de la clé SSH au premier connexion. <code>scp</code> écrase la destination sans confirmation ; utilisez un chemin explicite."
        }
      ]
    },
    { t: 'h', x: "15.10 Glossaire Linux" },
    {
      t: 'glossary',
      items: [
        { term: 'Shell', def: "Programme qui lit les commandes et les exécute.", use: "C'est l'interface en ligne de commande entre vous et le système.", ex: 'bash, zsh' },
        { term: 'Terminal', def: "Fenêtre ou session qui donne accès au shell.", use: "Ouvrir un terminal pour taper des commandes.", ex: 'GNOME Terminal' },
        { term: 'Arborescence', def: "Organisation hiérarchique des dossiers à partir de la racine /.", use: "Comprendre où se trouvent les fichiers et les configurations.", ex: '/etc, /home, /var' },
        { term: 'Chemin absolu', def: "Chemin qui commence par / et ne dépend pas du dossier courant.", use: "Éviter les ambiguïtés dans les scripts et les commandes.", ex: '/etc/hosts' },
        { term: 'Chemin relatif', def: "Chemin interprété à partir du dossier courant.", use: "Raccourcir les commandes dans un projet.", ex: 'notes/journal.md' },
        { term: 'PID', full: 'Process ID', def: "Numéro unique d'un processus en cours d'exécution.", use: "Identifier un processus pour l'observer ou l'arrêter.", ex: '812' },
        { term: 'Service', def: "Programme exécuté en arrière-plan qui rend une fonction.", use: "Gérer SSH, nginx ou une base de données avec systemctl.", ex: 'ssh.service' },
        { term: 'Pipe', def: "Symbole | qui relie la sortie d'une commande à l'entrée d'une autre.", use: "Filtrer et compter sans créer de fichier intermédiaire.", ex: 'ps aux | grep ssh' },
        { term: 'Redirection', def: "Opérateur qui envoie une sortie vers un fichier.", use: "Conserver une preuve ou journaliser un résultat.", ex: '> fichier, >> fichier, 2>' },
        { term: 'Journal', def: "Fichier où le système et les services écrivent leurs événements.", use: "Diagnostiquer une erreur ou enquêter après incident.", ex: '/var/log/syslog, journalctl' },
        { term: 'Archive', def: "Fichier unique regroupant plusieurs fichiers, éventuellement compressé.", use: "Sauvegarder ou transférer un ensemble de preuves.", ex: '.tar.gz, .tgz' },
        { term: 'Permission', def: "Droit de lire, écrire ou exécuter un fichier.", use: "Comprendre qui peut accéder à quoi ; détaillé dans le module suivant.", ex: 'rwxr-xr--' }
      ]
    }
  ],
  exos: [
    {
      id: 'm15-e1',
      title: 'Où suis-je ?',
      context: "Avant toute commande, il faut connaître son dossier courant.",
      task: "Affichez le dossier courant.",
      hint: "La commande est <code>pwd</code>.",
      accept: [/^pwd$/i],
      solution: 'pwd',
      output: ['/home/dev'],
      read: "Vous êtes dans <code>/home/dev</code>, le dossier personnel de l'utilisateur dev. C'est le point de départ de vos manipulations.",
      pivot: "Listez le contenu avec <code>ls -la</code> pour voir les fichiers, y compris cachés."
    },
    {
      id: 'm15-e2',
      title: 'Lister tout le contenu',
      context: "Les fichiers cachés commencent par un point et n'apparaissent pas avec un simple ls.",
      task: "Listez le contenu du dossier courant, y compris les fichiers cachés, au format détaillé.",
      hint: "Utilisez <code>ls -la</code>.",
      accept: [/^ls\s+-la$/i],
      solution: 'ls -la',
      output: [
        'drwxr-xr-x 3 dev dev 4096 .',
        'drwxr-xr-x 3 root root 4096 ..',
        '-rw-r--r-- 1 dev dev  220 .bashrc',
        'drwxr-xr-x 2 dev dev 4096 lab'
      ],
      read: "Le <code>.</code> est le dossier courant, <code>..</code> le parent. <code>.bashrc</code> est un fichier de configuration caché.",
      pivot: "Les permissions affichées seront détaillées dans le module utilisateurs et permissions."
    },
    {
      id: 'm15-e3',
      title: 'Changer de dossier',
      context: "Vous devez aller dans le dossier des journaux et vérifier votre position.",
      task: "Allez dans <code>/var/log</code> puis affichez le dossier courant en une seule commande.",
      hint: "Utilisez <code>cd /var/log && pwd</code>.",
      accept: [/^cd\s+\/var\/log\s*&&\s*pwd$/i],
      solution: 'cd /var/log && pwd',
      output: ['/var/log'],
      read: "Le chemin absolu <code>/var/log</code> fonctionne d'où que vous soyez. <code>&&</code> exécute la seconde commande seulement si la première réussit.",
      pivot: "Revenez dans votre dossier personnel avec <code>cd ~</code>."
    },
    {
      id: 'm15-e4',
      title: 'Créer une arborescence de lab',
      context: "Vous devez organiser vos notes et vos preuves dans deux dossiers.",
      task: "Créez <code>~/lab/notes</code> et <code>~/lab/evidence</code> avec une seule commande.",
      hint: "Utilisez <code>mkdir -p ~/lab/{notes,evidence}</code>.",
      accept: [/^mkdir\s+-p\s+~\/lab\/\{notes,evidence\}$/i],
      solution: 'mkdir -p ~/lab/{notes,evidence}',
      output: ['++ dossiers créés : /home/dev/lab/notes, /home/dev/lab/evidence'],
      read: "<code>-p</code> crée tous les parents nécessaires et ne renvoie pas d'erreur si le dossier existe déjà. Les accolades permettent de créer plusieurs dossiers d'un coup.",
      pivot: "Vérifiez le résultat avec <code>ls -la ~/lab</code>."
    },
    {
      id: 'm15-e5',
      title: 'Créer un fichier de notes',
      context: "Vous voulez démarrer un journal de lab.",
      task: "Créez un fichier vide <code>~/lab/notes/journal.md</code>.",
      hint: "Utilisez <code>touch ~/lab/notes/journal.md</code>.",
      accept: [/^touch\s+~\/lab\/notes\/journal\.md$/i],
      solution: 'touch ~/lab/notes/journal.md',
      output: ['++ fichier créé : /home/dev/lab/notes/journal.md'],
      read: "<code>touch</code> crée un fichier vide ou met à jour sa date de modification s'il existe déjà.",
      pivot: "Écrivez une première ligne avec une redirection : <code>echo \"début du lab\" > ~/lab/notes/journal.md</code>."
    },
    {
      id: 'm15-e6',
      title: 'Sauvegarder une configuration',
      context: "Avant de modifier un fichier système, on en garde une copie.",
      task: "Copiez <code>/etc/hosts</code> vers <code>~/lab/notes/hosts.bak</code>.",
      hint: "Utilisez <code>cp /etc/hosts ~/lab/notes/hosts.bak</code>.",
      accept: [/^cp\s+\/etc\/hosts\s+~\/lab\/notes\/hosts\.bak$/i],
      solution: 'cp /etc/hosts ~/lab/notes/hosts.bak',
      output: ['++ fichier copié'],
      read: "La copie conserve le contenu mais appartient à l'utilisateur qui l'a créée. C'est une sauvegarde de travail, pas une restauration système.",
      pivot: "Déplacez la sauvegarde dans le dossier evidence pour la séparer des notes."
    },
    {
      id: 'm15-e7',
      title: 'Déplacer une preuve',
      context: "Vous voulez ranger la sauvegarde dans le dossier evidence.",
      task: "Déplacez <code>~/lab/notes/hosts.bak</code> vers <code>~/lab/evidence/</code>.",
      hint: "Utilisez <code>mv ~/lab/notes/hosts.bak ~/lab/evidence/</code>.",
      accept: [/^mv\s+~\/lab\/notes\/hosts\.bak\s+~\/lab\/evidence\/$/i],
      solution: 'mv ~/lab/notes/hosts.bak ~/lab/evidence/',
      output: ['++ fichier déplacé'],
      read: "<code>mv</code> déplace sans copier : le fichier d'origine n'existe plus. Utilisez <code>cp</code> si vous voulez conserver les deux.",
      pivot: "Vérifiez avec <code>ls -la ~/lab/notes ~/lab/evidence</code>."
    },
    {
      id: 'm15-e8',
      title: 'Identifier la distribution',
      context: "Vous devez connaître le système avant de chercher des paquets ou des chemins.",
      task: "Affichez le contenu de <code>/etc/os-release</code>.",
      hint: "Utilisez <code>cat /etc/os-release</code>.",
      accept: [/^cat\s+\/etc\/os-release$/i],
      solution: 'cat /etc/os-release',
      output: [
        'NAME="Ubuntu"',
        'VERSION="22.04.4 LTS (Jammy Jellyfish)"',
        'ID=ubuntu',
        'ID_LIKE=debian'
      ],
      read: "La distribution est Ubuntu 22.04. Le champ <code>ID_LIKE=debian</code> indique que les outils Debian (<code>apt</code>) s'appliquent.",
      pivot: "Vérifiez le noyau avec <code>uname -a</code>."
    },
    {
      id: 'm15-e9',
      title: 'Lire le début d’un fichier',
      context: "Vous voulez un aperçu des comptes sans afficher tout le fichier.",
      task: "Affichez les 5 premières lignes de <code>/etc/passwd</code>.",
      hint: "Utilisez <code>head -5 /etc/passwd</code>.",
      accept: [/^head\s+-5\s+\/etc\/passwd$/i],
      solution: 'head -5 /etc/passwd',
      output: [
        'root:x:0:0:root:/root:/bin/bash',
        'daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin',
        'bin:x:2:2:bin:/bin:/usr/sbin/nologin',
        'sys:x:3:3:sys:/dev:/usr/sbin/nologin',
        'sync:x:4:65534:sync:/bin:/bin/sync'
      ],
      read: "Chaque ligne décrit un compte : nom, mot de passe (x = dans /etc/shadow), UID, GID, description, dossier personnel, shell.",
      pivot: "Le module suivant détaille les utilisateurs et les groupes."
    },
    {
      id: 'm15-e10',
      title: 'Lire la fin d’un journal',
      context: "Les dernières lignes d'un journal contiennent les événements récents.",
      task: "Affichez les 5 dernières lignes de <code>/var/log/syslog</code>.",
      hint: "Utilisez <code>tail -5 /var/log/syslog</code>.",
      accept: [/^tail\s+-5\s+\/var\/log\/syslog$/i],
      solution: 'tail -5 /var/log/syslog',
      output: [
        'Nov  8 10:01:02 lin systemd[1]: Started OpenBSD Secure Shell server.',
        'Nov  8 10:01:03 lin sshd[812]: Server listening on 0.0.0.0 port 22.',
        'Nov  8 10:01:10 lin cron[801]: (root) CMD (/opt/scripts/cleanup.sh)'
      ],
      read: "Les événements sont horodatés. Le service SSH a démarré et cron a lancé un script. Ces lignes sont précieuses pour corréler un incident.",
      pivot: "Utilisez <code>tail -f</code> pour suivre le journal en direct."
    },
    {
      id: 'm15-e11',
      title: 'Chercher une erreur',
      context: "Un journal peut contenir des milliers de lignes.",
      task: "Cherchez les lignes contenant <code>error</code> dans <code>/var/log/syslog</code>, sans tenir compte de la casse.",
      hint: "Utilisez <code>grep -i error /var/log/syslog</code>.",
      accept: [/^grep\s+-i\s+error\s+\/var\/log\/syslog$/i],
      solution: 'grep -i error /var/log/syslog',
      output: [
        'Nov  8 09:58:10 lin app[721]: ERROR failed to connect to database',
        'Nov  8 09:58:15 lin app[721]: ERROR retrying in 5s'
      ],
      read: "Deux erreurs de connexion à la base. La répétition indique un problème persistant, pas un incident isolé.",
      pivot: "Comptez les occurrences avec <code>grep -ic error /var/log/syslog</code>."
    },
    {
      id: 'm15-e12',
      title: 'Compter les lignes',
      context: "Vous voulez connaître le nombre de comptes configurés.",
      task: "Comptez les lignes de <code>/etc/passwd</code>.",
      hint: "Utilisez <code>wc -l /etc/passwd</code>.",
      accept: [/^wc\s+-l\s+\/etc\/passwd$/i],
      solution: 'wc -l /etc/passwd',
      output: ['42 /etc/passwd'],
      read: "Le fichier contient 42 lignes, donc 42 comptes (dont de nombreux comptes système). Tous ne sont pas des utilisateurs humains.",
      pivot: "Filtrez les comptes avec un shell de connexion : <code>grep -E \"/bin/(ba)?sh$\" /etc/passwd</code>."
    },
    {
      id: 'm15-e13',
      title: 'Trouver des fichiers de configuration',
      context: "Vous cherchez tous les fichiers .conf sous /etc.",
      task: "Recherchez les fichiers dont le nom se termine par <code>.conf</code> dans <code>/etc</code>.",
      hint: "Utilisez <code>find /etc -name \"*.conf\" -type f</code>.",
      accept: [/^find\s+\/etc\s+-name\s+["']\*\.conf["']\s+-type\s+f$/i],
      solution: 'find /etc -name "*.conf" -type f',
      output: [
        '/etc/ssh/sshd_config',
        '/etc/nginx/nginx.conf',
        '/etc/security/limits.conf'
      ],
      read: "<code>-type f</code> limite aux fichiers réguliers, pas aux dossiers. <code>2>/dev/null</code> masquerait les erreurs de permission.",
      pivot: "Ajoutez <code>-mtime -7</code> pour ne voir que les fichiers modifiés récemment."
    },
    {
      id: 'm15-e14',
      title: 'Chercher une directive SSH',
      context: "Vous vérifiez si root peut se connecter en SSH.",
      task: "Cherchez <code>PermitRootLogin</code> récursivement dans <code>/etc/ssh/</code>.",
      hint: "Utilisez <code>grep -R \"PermitRootLogin\" /etc/ssh/</code>.",
      accept: [/^grep\s+-R\s+["']PermitRootLogin["']\s+\/etc\/ssh\/$/i],
      solution: 'grep -R "PermitRootLogin" /etc/ssh/',
      output: ['/etc/ssh/sshd_config:PermitRootLogin no'],
      read: "La connexion directe de root en SSH est désactivée. C'est une bonne pratique : on se connecte avec un compte nominatif puis on utilise sudo.",
      pivot: "Vérifiez aussi <code>PasswordAuthentication</code> et <code>Port</code>."
    },
    {
      id: 'm15-e15',
      title: 'Voir le processus SSH',
      context: "Vous devez vérifier que le serveur SSH tourne.",
      task: "Listez les processus et filtrez ceux qui contiennent <code>ssh</code>, en excluant la ligne de grep elle-même.",
      hint: "Utilisez <code>ps aux | grep ssh | grep -v grep</code>.",
      accept: [/^ps\s+aux\s*\|\s*grep\s+ssh\s*\|\s*grep\s+-v\s+grep$/i],
      solution: 'ps aux | grep ssh | grep -v grep',
      output: ['root 812 0.0 0.1 15432 6212 ? Ss 10:01 0:00 sshd: /usr/sbin/sshd'],
      read: "Le processus sshd tourne sous root, ce qui est normal pour un démon qui doit écouter sur un port privilégié.",
      pivot: "Utilisez <code>systemctl status ssh</code> pour un état plus fiable que ps."
    },
    {
      id: 'm15-e16',
      title: 'Vérifier un service',
      context: "Vous voulez l'état du service SSH géré par systemd.",
      task: "Affichez le statut du service <code>ssh</code>.",
      hint: "Utilisez <code>systemctl status ssh</code>.",
      accept: [/^systemctl\s+status\s+ssh$/i],
      solution: 'systemctl status ssh',
      output: [
        '● ssh.service - OpenBSD Secure Shell server',
        '     Loaded: loaded (/lib/systemd/system/ssh.service; enabled)',
        '     Active: active (running) since Mon 10:01:02 UTC'
      ],
      read: "Le service est chargé, activé au démarrage et actif. <code>enabled</code> signifie qu'il redémarrera automatiquement après un reboot.",
      pivot: "Lisez ses journaux avec <code>journalctl -u ssh -n 20</code>."
    },
    {
      id: 'm15-e17',
      title: 'Lire les journaux d’un service',
      context: "systemd centralise les journaux des services dans journalctl.",
      task: "Affichez les 20 dernières lignes du service <code>ssh</code> sans pagination.",
      hint: "Utilisez <code>journalctl -u ssh -n 20 --no-pager</code>.",
      accept: [/^journalctl\s+-u\s+ssh\s+-n\s+20\s+--no-pager$/i],
      solution: 'journalctl -u ssh -n 20 --no-pager',
      output: [
        'sshd[812]: Server listening on 0.0.0.0 port 22.',
        'sshd[902]: Accepted publickey for dev from 10.10.10.100 port 51234'
      ],
      read: "Les journaux montrent l'écoute et une connexion acceptée par clé publique. <code>--no-pager</code> évite d'ouvrir un lecteur interactif.",
      pivot: "Filtrez les erreurs avec <code>journalctl -p err -n 20 --no-pager</code>."
    },
    {
      id: 'm15-e18',
      title: 'Vérifier l’espace disque',
      context: "Un disque plein peut faire échouer les services.",
      task: "Affichez l'espace disque en format lisible.",
      hint: "Utilisez <code>df -h</code>.",
      accept: [/^df\s+-h$/i],
      solution: 'df -h',
      output: [
        'Filesystem      Size  Used Avail Use% Mounted on',
        '/dev/sda1        40G   18G   20G  48% /',
        'tmpfs           1.9G     0  1.9G   0% /dev/shm'
      ],
      read: "La racine utilise 48 % de 40 Go. Il reste 20 Go. Un taux proche de 100 % doit être investigué immédiatement.",
      pivot: "Identifiez le dossier le plus gros avec <code>du -sh</code>."
    },
    {
      id: 'm15-e19',
      title: 'Mesurer un dossier',
      context: "Vous voulez savoir combien pèsent les journaux.",
      task: "Affichez la taille totale de <code>/var/log</code> en format lisible.",
      hint: "Utilisez <code>du -sh /var/log</code>.",
      accept: [/^du\s+-sh\s+\/var\/log$/i],
      solution: 'du -sh /var/log',
      output: ['128M /var/log'],
      read: "Le dossier pèse 128 Mo. <code>-s</code> résume au total, <code>-h</code> rend la taille lisible.",
      pivot: "Trouvez les plus gros fichiers avec <code>du -ah /var/log | sort -h | tail</code>."
    },
    {
      id: 'm15-e20',
      title: 'Créer une archive compressée',
      context: "Vous devez conserver une preuve des journaux.",
      task: "Créez l'archive <code>~/lab/logs.tgz</code> à partir de <code>/var/log</code>.",
      hint: "Utilisez <code>tar -czf ~/lab/logs.tgz /var/log</code>.",
      accept: [/^tar\s+-czf\s+~\/lab\/logs\.tgz\s+\/var\/log$/i],
      solution: 'tar -czf ~/lab/logs.tgz /var/log',
      output: ['++ archive créée : /home/dev/lab/logs.tgz'],
      read: "<code>c</code> crée, <code>z</code> compresse avec gzip, <code>f</code> indique le nom de l'archive. Le chemin des fichiers est conservé à l'intérieur.",
      pivot: "Vérifiez le contenu avec <code>tar -tzf ~/lab/logs.tgz | head</code>."
    },
    {
      id: 'm15-e21',
      title: 'Rediriger un résultat',
      context: "Vous voulez conserver la liste des entrées hosts dans un fichier.",
      task: "Écrivez le résultat de <code>ls -la /etc | grep hosts</code> dans <code>~/lab/notes/hosts.txt</code>.",
      hint: "Utilisez <code>ls -la /etc | grep hosts > ~/lab/notes/hosts.txt</code>.",
      accept: [/^ls\s+-la\s+\/etc\s*\|\s*grep\s+hosts\s*>\s*~\/lab\/notes\/hosts\.txt$/i],
      solution: 'ls -la /etc | grep hosts > ~/lab/notes/hosts.txt',
      output: ['++ résultat écrit dans /home/dev/lab/notes/hosts.txt'],
      read: "<code>&gt;</code> écrase le fichier, <code>&gt;&gt;</code> ajoute à la fin. Vérifiez toujours le contenu après une redirection.",
      pivot: "Utilisez <code>tee</code> si vous voulez afficher et écrire en même temps."
    },
    {
      id: 'm15-e22',
      title: 'Transférer une preuve',
      context: "Vous devez envoyer l'archive vers la machine de collecte du lab.",
      task: "Copiez <code>~/lab/logs.tgz</code> vers <code>/tmp/</code> sur <code>dev@10.10.10.50</code> avec scp.",
      hint: "Utilisez <code>scp ~/lab/logs.tgz dev@10.10.10.50:/tmp/</code>.",
      accept: [/^scp\s+~\/lab\/logs\.tgz\s+dev@10\.10\.10\.50:\/tmp\/$/i],
      solution: 'scp ~/lab/logs.tgz dev@10.10.10.50:/tmp/',
      output: ['logs.tgz 100% 128MB 42.1MB/s 00:03'],
      read: "Le transfert passe par SSH et est chiffré. Vérifiez l'empreinte de la clé au premier connexion et le chemin de destination.",
      pivot: "Vérifiez l'archive sur la cible avec <code>ls -lh /tmp/logs.tgz</code> et <code>sha256sum</code>."
    }
  ],
  quiz: 'q15'
};
