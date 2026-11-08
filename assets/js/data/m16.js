export default {
  id: 'm16',
  num: 16,
  title: "Linux — utilisateurs, groupes et permissions",
  short: "Utilisateurs & permissions",
  icon: "🔐",
  xp: 500,
  duration: 130,
  summary: "Comprendre qui peut faire quoi sur un système Linux : comptes, UID, groupes, fichiers /etc/passwd et /etc/group, permissions rwx, notation octale, chown, umask, SUID, sticky bit et ACL, avec un lab interactif de décodage.",
  objectives: [
    "Lire et interpréter /etc/passwd, /etc/group et /etc/shadow",
    "Distinguer utilisateur, UID, groupe primaire et groupes secondaires",
    "Décoder une permission rwx et la convertir en notation octale",
    "Modifier des droits avec chmod, chown et chgrp sans casser le système",
    "Comprendre umask, SUID, SGID, sticky bit et ACL",
    "Auditer les privilèges excessifs et appliquer le moindre privilège"
  ],
  blocks: [
    {
      t: 'callout', v: 'info', title: "Qui a le droit de faire quoi ?",
      x: "Sur un serveur Linux, plusieurs personnes et programmes partagent la même machine. Le système doit donc répondre à trois questions : <strong>qui</strong> agit, <strong>à quel groupe</strong> il appartient, et <strong>quel droit</strong> il possède sur un fichier. C'est exactement le rôle des utilisateurs, des groupes et des permissions."
    },
    {
      t: 'p',
      x: "Imaginez un immeuble de bureaux. Chaque personne a un <strong>badge</strong> (l'utilisateur), chaque service a une <strong>équipe</strong> (le groupe), et chaque porte a un <strong>lecteur de badge</strong> (les permissions). Un badge peut ouvrir certaines portes tout seul, et l'appartenance à une équipe peut en ouvrir d'autres. Personne ne doit pouvoir entrer partout simplement parce qu'il travaille dans le bâtiment."
    },
    {
      t: 'mini',
      items: [
        { v: 'cyan', h: 'Utilisateur', p: "Un compte, identifié par un nom et un numéro (UID). <code>root</code> est l'administrateur, avec l'UID 0." },
        { v: 'amber', h: 'Groupe', p: "Un ensemble de comptes qui partagent des droits. Un utilisateur a un groupe principal et peut appartenir à d'autres groupes." },
        { v: 'lime', h: 'Permission', p: "Le droit de lire (r), écrire (w) ou exécuter (x) un fichier. Elle s'applique au propriétaire, au groupe et aux autres." },
        { v: 'magenta', h: 'Propriétaire', p: "Le compte qui possède le fichier. Il peut changer ses droits. Le groupe propriétaire est indiqué juste après." }
      ]
    },
    { t: 'h', x: "16.1 Les utilisateurs : identité et UID" },
    {
      t: 'p',
      x: "Chaque utilisateur possède un nom lisible par un humain et un <strong>UID</strong> (numéro d'identification). Le système travaille avec l'UID ; le nom n'est qu'une étiquette pratique. L'UID 0 correspond à <code>root</code>, qui contourne la plupart des permissions. Les UID inférieurs à 1000 sont en général réservés aux comptes de service (daemon, www-data, sshd), et les comptes humains commencent souvent à 1000."
    },
    {
      t: 'table',
      head: ['Champ de /etc/passwd', 'Exemple', 'Signification'],
      rows: [
        ['Nom', 'dev', "Identifiant de connexion"],
        ['Mot de passe', 'x', "Le hash est stocké dans /etc/shadow, pas ici"],
        ['UID', '1001', "Numéro de l'utilisateur ; 0 = root"],
        ['GID', '1001', "Groupe principal de l'utilisateur"],
        ['Description', 'Dev Lab', "Nom complet ou commentaire (GECOS)"],
        ['Dossier personnel', '/home/dev', "Répertoire de travail à la connexion"],
        ['Shell', '/bin/bash', "Programme lancé à la connexion ; nologin pour un compte de service"]
      ]
    },
    {
      t: 'code', lang: 'bash', title: "Consulter son identité",
      x: `whoami\nid\nid -u\nid -g\nid -nG\ngetent passwd dev\nsudo passwd -S dev`
    },
    {
      t: 'term',
      title: "Résultat commenté",
      x: [
        { c: "whoami", o: ["dev"] },
        { c: "id", o: ["uid=1001(dev) gid=1001(dev) groups=1001(dev),27(sudo),1002(analysts)"] },
        { c: "id -u", o: ["1001"] },
        { c: "getent passwd dev", o: ["dev:x:1001:1001:Dev Lab:/home/dev:/bin/bash"] }
      ]
    },
    {
      t: 'callout', v: 'tip', title: "Lire id comme une carte d'identité",
      x: "<code>uid</code> est le numéro de la personne, <code>gid</code> son groupe principal, et <code>groups</code> la liste de toutes ses équipes. Un utilisateur peut ainsi cumuler les droits de plusieurs groupes sans changer de compte."
    },
    {
      t: 'p',
      x: "Les mots de passe ne sont pas stockés en clair. <code>/etc/shadow</code> contient un <strong>hash</strong> (une empreinte non réversible) et des règles d'expiration. Seul root peut le lire. Un hash faible ou réutilisé reste une cible : la robustesse du mot de passe et la limitation des tentatives comptent autant que le hachage."
    },
    {
      t: 'code', lang: 'bash', title: "Créer et modifier un compte (lab)",
      x: `sudo adduser alice\nsudo passwd alice\nsudo usermod -c "Alice Analyst" alice\nsudo usermod -s /bin/bash alice\nsudo usermod -L alice\nsudo usermod -U alice\nsudo userdel -r alice`
    },
    {
      t: 'callout', v: 'warn', title: "adduser n'est pas useradd",
      x: "<code>adduser</code> est un script convivial qui crée le dossier personnel, le groupe et demande un mot de passe. <code>useradd</code> est l'outil bas niveau : sans options, il ne crée ni dossier ni shell. Sur Debian/Ubuntu, préférez <code>adduser</code> pour un compte humain."
    },
    { t: 'h', x: "16.2 Les groupes : travailler en équipe" },
    {
      t: 'p',
      x: "Un <strong>groupe</strong> rassemble des utilisateurs pour leur donner un accès commun. Chaque utilisateur a un <strong>groupe principal</strong> (celui qui sera propriétaire de ses nouveaux fichiers) et peut appartenir à des <strong>groupes secondaires</strong>. Ainsi, une équipe d'analystes peut lire un dossier de preuves sans recevoir les droits d'administration généraux."
    },
    {
      t: 'table',
      head: ['Champ de /etc/group', 'Exemple', 'Signification'],
      rows: [
        ['Nom', 'analysts', "Nom du groupe"],
        ['Mot de passe', 'x', "Généralement inutilisé"],
        ['GID', '1002', "Numéro du groupe"],
        ['Membres', 'alice,bob', "Comptes appartenant au groupe (les membres secondaires)"]
      ]
    },
    {
      t: 'code', lang: 'bash', title: "Gérer les groupes",
      x: `groups\ngroups dev\nsudo groupadd analysts\nsudo usermod -aG analysts alice\nsudo gpasswd -a bob analysts\ngetent group analysts\nsudo gpasswd -d alice analysts`
    },
    {
      t: 'term',
      title: "Vérification",
      x: [
        { c: "groups dev", o: ["dev : dev sudo analysts"] },
        { c: "getent group analysts", o: ["analysts:x:1002:alice,bob"] },
        { c: "id alice", o: ["uid=1002(alice) gid=1002(alice) groups=1002(alice),1003(analysts)"] }
      ]
    },
    {
      t: 'callout', v: 'danger', title: "Le piège du -a oublié",
      x: "<code>usermod -G analysts alice</code> <strong>remplace</strong> tous les groupes secondaires d'Alice par <code>analysts</code> : elle perd sudo et ses autres accès. Utilisez toujours <code>usermod -aG</code> pour <strong>ajouter</strong> un groupe. Vérifiez ensuite avec <code>id alice</code>."
    },
    {
      t: 'p',
      x: "Les changements de groupe ne s'appliquent pas toujours à une session déjà ouverte. Après un <code>usermod -aG</code>, il faut se reconnecter (ou utiliser <code>newgrp</code>) pour que le nouveau groupe soit pris en compte. C'est une source fréquente de « mais si, j'ai les droits ! »."
    },
    { t: 'h', x: "16.3 Les permissions : lire rwx" },
    {
      t: 'p',
      x: "La commande <code>ls -l</code> affiche dix caractères au début de chaque ligne, par exemple <code>-rwxr-x---</code>. Le premier caractère indique le type (<code>-</code> fichier, <code>d</code> dossier, <code>l</code> lien). Les neuf suivants forment trois blocs de trois : <strong>propriétaire</strong>, <strong>groupe</strong>, <strong>autres</strong>. Chaque bloc se lit <code>r</code> (lire), <code>w</code> (écrire), <code>x</code> (exécuter ou entrer dans le dossier)."
    },
    {
      t: 'table',
      head: ['Symbole', 'Valeur', 'Sur un fichier', 'Sur un dossier'],
      rows: [
        ['r', '4', "Lire le contenu", "Lister les noms présents"],
        ['w', '2', "Modifier le contenu", "Créer, renommer ou supprimer des entrées"],
        ['x', '1', "Exécuter le programme", "Traverser le dossier et accéder à son contenu"],
        ['-', '0', "Droit absent", "Droit absent"]
      ]
    },
    {
      t: 'p',
      x: "On additionne les valeurs pour obtenir un chiffre octal : <code>rwx</code> = 4+2+1 = <strong>7</strong>, <code>r-x</code> = 4+0+1 = <strong>5</strong>, <code>r--</code> = <strong>4</strong>, <code>---</code> = <strong>0</strong>. La permission <code>rwxr-x---</code> devient donc <strong>750</strong> : 7 pour le propriétaire, 5 pour le groupe, 0 pour les autres."
    },
    {
      t: 'table',
      head: ['Octal', 'Symbolique', 'Signification courante'],
      rows: [
        ['600', 'rw-------', "Fichier privé : seul le propriétaire lit et écrit"],
        ['640', 'rw-r-----', "Propriétaire écrit, groupe lit, autres rien"],
        ['644', 'rw-r--r--', "Fichier public en lecture, modifiable par le propriétaire seul"],
        ['660', 'rw-rw----', "Travail collaboratif dans un groupe"],
        ['700', 'rwx------', "Dossier ou script privé"],
        ['750', 'rwxr-x---', "Dossier partagé en lecture/exécution avec le groupe"],
        ['755', 'rwxr-xr-x', "Dossier ou exécutable public en lecture"],
        ['777', 'rwxrwxrwx', "Tout le monde peut tout faire : presque toujours une erreur"],
        ['4755', 'rwsr-xr-x', "SUID : l'exécutable prend l'identité du propriétaire"],
        ['2775', 'rwxrwsr-x', "SGID : les nouveaux fichiers héritent du groupe du dossier"],
        ['1777', 'rwxrwxrwt', "Sticky bit : chacun ne supprime que ses propres fichiers (/tmp)"]
      ]
    },
    {
      t: 'code', lang: 'bash', title: "Lire et modifier les droits",
      x: `ls -l ~/lab/notes/journal.md\nstat -c '%A %a %U:%G %n' ~/lab/notes/journal.md\nchmod 640 ~/lab/notes/journal.md\nchmod u+x ~/lab/scripts/audit.sh\nchmod -R g+r ~/lab/evidence\nsudo chown dev:dev ~/lab/notes/journal.md\nsudo chgrp analysts ~/lab/notes/report.md`
    },
    {
      t: 'term',
      title: "Avant / après",
      x: [
        { c: "ls -l journal.md", o: ["-rw-r--r-- 1 dev dev 412 journal.md"] },
        { c: "chmod 640 journal.md && ls -l journal.md", o: ["-rw-r----- 1 dev dev 412 journal.md"] },
        { c: "chmod u+x audit.sh && ls -l audit.sh", o: ["-rwxr--r-- 1 dev dev 220 audit.sh"] }
      ]
    },
    {
      t: 'callout', v: 'tip', title: "chmod symbolique ou octal",
      x: "<code>chmod u+x fichier</code> ajoute le droit d'exécution au propriétaire. <code>chmod g-w fichier</code> retire l'écriture au groupe. <code>chmod o=r fichier</code> fixe les droits des autres à lecture seule. L'octal est plus rapide pour poser un état complet ; le symbolique est plus sûr pour ajuster un seul droit."
    },
    {
      t: 'p',
      x: "Le <strong>umask</strong> définit les droits retirés par défaut lors de la création d'un fichier ou d'un dossier. Un umask <code>022</code> donne des fichiers en <code>644</code> et des dossiers en <code>755</code>. Un umask <code>077</code> rend les nouveaux fichiers privés (<code>600</code>) et les dossiers privés (<code>700</code>). Pour un poste qui manipule des données sensibles, <code>077</code> est souvent un bon choix."
    },
    {
      t: 'code', lang: 'bash', title: "Vérifier le umask",
      x: `umask\numask -S\ntouch /tmp/test-umask\nls -l /tmp/test-umask\numask 077`
    },
    { t: 'h', x: "16.4 Les cas spéciaux : SUID, SGID, sticky bit et ACL" },
    {
      t: 'p',
      x: "Certains droits dépassent le trio rwx. Le <strong>SUID</strong> fait qu'un programme s'exécute avec l'identité de son propriétaire : <code>passwd</code> est SUID root pour pouvoir modifier <code>/etc/shadow</code>. Le <strong>SGID</strong> sur un dossier fait hériter le groupe aux nouveaux fichiers. Le <strong>sticky bit</strong> sur <code>/tmp</code> empêche un utilisateur de supprimer les fichiers d'un autre."
    },
    {
      t: 'code', lang: 'bash', title: "Auditer les droits spéciaux",
      x: `find / -perm -4000 -type f 2>/dev/null\nfind / -perm -2000 -type d 2>/dev/null\nfind /home -perm -o+w -type f 2>/dev/null\nls -ld /tmp`
    },
    {
      t: 'term',
      title: "Résultats typiques",
      x: [
        { c: "find / -perm -4000 -type f 2>/dev/null", o: ["/usr/bin/passwd", "/usr/bin/sudo", "/usr/bin/su"] },
        { c: "find /home -perm -o+w -type f 2>/dev/null", o: ["/home/dev/lab/evidence/rapport.txt"] },
        { c: "ls -ld /tmp", o: ["drwxrwxrwt 12 root root 4096 /tmp"] }
      ]
    },
    {
      t: 'callout', v: 'danger', title: "Un binaire SUID inattendu est critique",
      x: "Un binaire SUID root permet d'exécuter du code avec les droits de root. Les attaquants le recherchent pour élever leurs privilèges. Un SUID sur un éditeur, un interpréteur ou un script maison est presque toujours une erreur de configuration. Auditez régulièrement <code>find / -perm -4000</code> et retirez ce qui n'est pas indispensable."
    },
    {
      t: 'p',
      x: "Les <strong>ACL</strong> (Access Control Lists) permettent de donner des droits à un utilisateur précis sans passer par un groupe. <code>getfacl</code> lit les ACL, <code>setfacl</code> les modifie. C'est utile pour un partage ponctuel, mais cela complique l'audit : une ACL oubliée peut maintenir un accès alors que les permissions classiques semblent correctes."
    },
    {
      t: 'code', lang: 'bash', title: "ACL ponctuelle",
      x: `getfacl ~/lab/notes/report.md\nsetfacl -m u:alice:r ~/lab/notes/report.md\ngetfacl ~/lab/notes/report.md\nsetfacl -x u:alice ~/lab/notes/report.md`
    },
    {
      t: 'term',
      title: "ACL lue",
      x: [
        { c: "getfacl report.md", o: [
          "# file: report.md",
          "# owner: dev",
          "# group: analysts",
          "user::rw-",
          "user:alice:r--",
          "group::r--",
          "mask::r--",
          "other::---"
        ] }
      ]
    },
    { t: 'h', x: "16.5 Lab guidé — décoder et durcir des permissions" },
    {
      t: 'p',
      x: "Le lab ci-dessous vous fait manipuler les trois niveaux de droits et vérifier le résultat en octal. Objectif : rendre un fichier lisible et modifiable par son propriétaire, lisible par le groupe, et totalement inaccessible aux autres. C'est la configuration <code>640</code>, typique d'un rapport interne."
    },
    { t: 'lab', id: 'permissions' },
    {
      t: 'code', lang: 'bash', title: "Vérification finale",
      x: `chmod 640 ~/lab/notes/report.md\nstat -c '%A %a %U:%G %n' ~/lab/notes/report.md\ngetfacl ~/lab/notes/report.md`
    },
    {
      t: 'term',
      title: "Contrôle",
      x: [
        { c: "stat -c '%A %a %U:%G %n' report.md", o: ["-rw-r----- 640 dev:analysts report.md"] }
      ]
    },
    {
      t: 'callout', v: 'tip', title: "La méthode d'audit",
      x: "Un audit de permissions se fait dans cet ordre : qui possède le fichier, quels groupes ont des droits, quels droits pour les autres, y a-t-il des ACL, des SUID ou des fichiers modifiables par tous. On corrige ensuite au plus petit changement nécessaire, et on documente chaque exception."
    },
    { t: 'h', x: "16.6 Les erreurs de permissions les plus fréquentes" },
    {
      t: 'ul',
      x: [
        "Mettre <code>chmod -R 777</code> pour « que ça marche » : cela donne à tout le monde le droit de lire, modifier et exécuter. C'est une faille, pas une solution.",
        "Oublier le <code>-a</code> de <code>usermod -aG</code> et supprimer les autres groupes de l'utilisateur.",
        "Rendre un script SUID root au lieu de configurer une règle sudo précise.",
        "Laisser un fichier de configuration contenant des secrets en <code>644</code> alors que <code>600</code> suffit.",
        "Confondre les droits du dossier et ceux du fichier : pour accéder à un fichier, il faut aussi pouvoir traverser ses dossiers parents.",
        "Modifier le propriétaire avec <code>chown</code> sans vérifier le groupe, et casser l'accès d'une équipe.",
        "Oublier qu'une ACL ou un groupe secondaire accorde un accès invisible dans un simple <code>ls -l</code>."
      ]
    },
    { t: 'h', x: "16.7 Fiches commandes utilisateurs & permissions" },
    {
      t: 'cmdref',
      items: [
        {
          cmd: 'whoami / id', tag: 'Identité',
          what: "Affiche l'utilisateur courant, son UID, son GID et ses groupes.",
          gives: "Qui vous êtes réellement et quels droits de groupe vous possédez.",
          use: "Vérifier son identité avant une action sensible et confirmer un changement de groupe.",
          syntax: 'whoami ; id ; id -nG',
          example: 'id',
          read: "<code>uid=0</code> signifie root. La liste <code>groups=</code> montre les groupes secondaires effectifs. Après un <code>usermod -aG</code>, reconnectez-vous pour les voir apparaître."
        },
        {
          cmd: 'getent passwd / group', tag: 'Comptes',
          what: "Interroge la base des utilisateurs ou des groupes (fichiers locaux, LDAP, SSO).",
          gives: "La ligne complète d'un compte ou d'un groupe.",
          use: "Vérifier l'existence, l'UID, le GID, le dossier personnel et le shell.",
          syntax: 'getent passwd utilisateur ; getent group groupe',
          example: 'getent passwd dev',
          read: "<code>getent</code> est plus fiable que <code>cat /etc/passwd</code> dans un environnement avec annuaire centralisé : il interroge toutes les sources configurées."
        },
        {
          cmd: 'adduser / usermod / userdel', tag: 'Gestion des comptes',
          what: "Crée, modifie ou supprime un compte utilisateur.",
          gives: "Un compte fonctionnel avec dossier personnel, groupe et shell.",
          use: "Onboarder un collègue, ajouter un groupe, désactiver un départ.",
          syntax: 'sudo adduser nom ; sudo usermod -aG groupe nom ; sudo userdel -r nom',
          example: 'sudo usermod -aG analysts alice',
          read: "<code>-aG</code> ajoute sans écraser. <code>usermod -L</code> verrouille le compte, <code>-U</code> le déverrouille. <code>userdel -r</code> supprime aussi le dossier personnel : à manier avec précaution."
        },
        {
          cmd: 'groupadd / gpasswd', tag: 'Groupes',
          what: "Crée un groupe et ajoute ou retire des membres.",
          gives: "Un groupe partageable pour les accès communs.",
          use: "Organiser les droits par équipe plutôt que compte par compte.",
          syntax: 'sudo groupadd groupe ; sudo gpasswd -a utilisateur groupe',
          example: 'sudo groupadd analysts',
          read: "<code>gpasswd -a</code> ajoute, <code>-d</code> retire. Vérifiez avec <code>getent group</code>. Un groupe vide ne sert à rien : documentez son usage."
        },
        {
          cmd: 'ls -l / stat', tag: 'Lire les droits',
          what: "Affiche le type, les permissions, le propriétaire et le groupe.",
          gives: "La chaîne rwx et, avec stat, la valeur octale exacte.",
          use: "Diagnostiquer un accès refusé ou vérifier une modification.",
          syntax: 'ls -l fichier ; stat -c "%A %a %U:%G %n" fichier',
          example: "stat -c '%A %a %U:%G %n' report.md",
          read: "Neuf caractères = trois blocs de trois. <code>s</code> ou <code>t</code> signale un droit spécial. <code>stat</code> donne l'octal sans calcul mental."
        },
        {
          cmd: 'chmod', tag: 'Modifier les droits',
          what: "Change les permissions d'un fichier ou d'un dossier.",
          gives: "Un nouvel état de droits, immédiatement effectif.",
          use: "Restreindre un fichier sensible, rendre un script exécutable, partager avec un groupe.",
          syntax: 'chmod octal fichier ; chmod [ugoa][+-=][rwx] fichier',
          example: 'chmod 640 report.md',
          read: "L'octal pose un état complet ; le symbolique ajuste un droit. <code>-R</code> est récursif : vérifiez la cible avant de l'utiliser. Évitez <code>777</code>."
        },
        {
          cmd: 'chown / chgrp', tag: 'Propriétaire',
          what: "Change le propriétaire et/ou le groupe d'un fichier.",
          gives: "Un nouveau responsable du fichier.",
          use: "Transférer un fichier à un service, corriger un groupe de partage.",
          syntax: 'sudo chown utilisateur:groupe fichier ; sudo chgrp groupe fichier',
          example: 'sudo chown dev:analysts report.md',
          read: "Seul root peut changer le propriétaire. Un utilisateur peut changer le groupe seulement vers un groupe auquel il appartient. <code>-R</code> est récursif."
        },
        {
          cmd: 'umask', tag: 'Droits par défaut',
          what: "Affiche ou fixe les droits retirés à la création.",
          gives: "Les permissions par défaut des nouveaux fichiers et dossiers.",
          use: "Durcir un poste ou un serveur qui manipule des données sensibles.",
          syntax: 'umask ; umask 077',
          example: 'umask 077',
          read: "Un umask 022 donne 644/755 ; un umask 077 donne 600/700. Le umask se configure aussi dans le profil du shell pour être persistant."
        },
        {
          cmd: 'find -perm', tag: 'Audit',
          what: "Recherche les fichiers selon leurs permissions spéciales ou excessives.",
          gives: "La liste des SUID, SGID ou fichiers modifiables par tous.",
          use: "Détecter une élévation de privilèges potentielle ou une fuite de données.",
          syntax: 'find chemin -perm -4000 -type f ; find chemin -perm -o+w -type f',
          example: 'find / -perm -4000 -type f 2>/dev/null',
          read: "<code>-4000</code> cible le SUID, <code>-2000</code> le SGID, <code>-o+w</code> l'écriture pour les autres. <code>2>/dev/null</code> masque les erreurs de permission ; ne masquez pas les résultats eux-mêmes."
        },
        {
          cmd: 'getfacl / setfacl', tag: 'ACL',
          what: "Lit et modifie les listes de contrôle d'accès étendues.",
          gives: "Des droits nommés pour un utilisateur ou un groupe précis.",
          use: "Accorder un accès ponctuel sans créer de groupe.",
          syntax: 'getfacl fichier ; setfacl -m u:utilisateur:r fichier ; setfacl -x u:utilisateur fichier',
          example: 'setfacl -m u:alice:r report.md',
          read: "Une ACL apparaît avec un <code>+</code> dans <code>ls -l</code>. La <code>mask</code> limite les droits effectifs. Retirez les ACL devenues inutiles : elles survivent aux changements de groupe."
        }
      ]
    },
    { t: 'h', x: "16.8 Glossaire utilisateurs & permissions" },
    {
      t: 'glossary',
      items: [
        { term: 'UID', full: 'User ID', def: "Numéro unique qui identifie un utilisateur.", use: "Le système applique les droits à l'UID, pas au nom.", ex: '0 pour root, 1001 pour dev' },
        { term: 'GID', full: 'Group ID', def: "Numéro unique qui identifie un groupe.", use: "Déterminer le groupe propriétaire et les droits associés.", ex: '1002' },
        { term: 'root', def: "Compte administrateur avec l'UID 0.", use: "Contourne la plupart des permissions ; à utiliser via sudo et avec parcimonie.", ex: 'uid=0(root)' },
        { term: 'sudo', def: "Programme qui exécute une commande avec les droits d'un autre compte, souvent root.", use: "Éviter de travailler en root permanent et journaliser les actions.", ex: 'sudo systemctl restart ssh' },
        { term: 'Groupe primaire', def: "Groupe principal de l'utilisateur, propriétaire par défaut de ses nouveaux fichiers.", use: "Déterminer le groupe hérité à la création.", ex: 'dev' },
        { term: 'Groupe secondaire', def: "Groupe supplémentaire auquel l'utilisateur appartient.", use: "Accorder des accès supplémentaires sans changer de compte.", ex: 'analysts, sudo' },
        { term: 'Permission', def: "Droit de lire, écrire ou exécuter accordé à un propriétaire, un groupe ou les autres.", use: "Contrôler l'accès aux fichiers et dossiers.", ex: 'rwxr-x---' },
        { term: 'Octal', def: "Écriture numérique des permissions en trois chiffres de 0 à 7.", use: "Poser un état complet de droits rapidement.", ex: '640, 755, 777' },
        { term: 'chmod', def: "Commande qui modifie les permissions.", use: "Restreindre ou ouvrir un accès.", ex: 'chmod 640 rapport.txt' },
        { term: 'chown', def: "Commande qui change le propriétaire et/ou le groupe.", use: "Transférer la responsabilité d'un fichier.", ex: 'chown dev:analysts rapport.txt' },
        { term: 'umask', def: "Masque qui retire des droits par défaut à la création.", use: "Définir des permissions sûres sans y penser.", ex: '022 ou 077' },
        { term: 'SUID', full: 'Set User ID', def: "Droit spécial qui fait exécuter un programme avec l'identité de son propriétaire.", use: "Permettre une action précise (passwd), mais constitue une cible d'élévation de privilèges.", ex: '-rwsr-xr-x' },
        { term: 'SGID', full: 'Set Group ID', def: "Droit spécial qui fait hériter le groupe du dossier aux nouveaux fichiers.", use: "Partager un dossier d'équipe sans corriger les groupes à la main.", ex: 'drwxrwsr-x' },
        { term: 'Sticky bit', def: "Droit spécial qui empêche de supprimer les fichiers des autres dans un dossier partagé.", use: "Protéger /tmp où tout le monde écrit.", ex: 'drwxrwxrwt' },
        { term: 'ACL', full: 'Access Control List', def: "Liste de droits nommés pour des utilisateurs ou groupes précis.", use: "Accorder un accès ponctuel sans créer de groupe.", ex: 'user:alice:r--' },
        { term: 'Moindre privilège', def: "Principe qui consiste à donner uniquement les droits nécessaires à une tâche.", use: "Limiter l'impact d'une erreur ou d'un compte compromis.", ex: 'lecture seule plutôt que root' }
      ]
    }
  ],
  exos: [
    {
      id: 'm16-e1',
      title: 'Qui suis-je ?',
      context: "Avant de toucher aux permissions, il faut connaître le compte utilisé.",
      task: "Affichez le nom de l'utilisateur courant.",
      hint: "La commande est <code>whoami</code>.",
      accept: [/^whoami$/i],
      solution: 'whoami',
      output: ['dev'],
      read: "Vous êtes connecté en tant que <code>dev</code>, un compte nominatif. Ce n'est pas root : les actions sensibles demanderont <code>sudo</code>.",
      pivot: "Affichez maintenant l'UID, le GID et les groupes avec <code>id</code>."
    },
    {
      id: 'm16-e2',
      title: 'Lire son identité complète',
      context: "Les groupes déterminent une grande partie des accès.",
      task: "Affichez votre UID, votre GID et tous vos groupes avec <code>id</code>.",
      hint: "Utilisez simplement <code>id</code>.",
      accept: [/^id$/i],
      solution: 'id',
      output: ['uid=1001(dev) gid=1001(dev) groups=1001(dev),27(sudo),1002(analysts)'],
      read: "dev appartient aux groupes <code>sudo</code> et <code>analysts</code>. Le groupe <code>sudo</code> permet d'administrer la machine ; <code>analysts</code> donne accès aux dossiers d'équipe.",
      pivot: "Vérifiez quels droits sudo sont réellement accordés avec <code>sudo -l</code>."
    },
    {
      id: 'm16-e3',
      title: 'Lire les comptes du système',
      context: "Le fichier /etc/passwd contient une ligne par compte.",
      task: "Affichez les 3 premières lignes de <code>/etc/passwd</code>.",
      hint: "Utilisez <code>head -3 /etc/passwd</code>.",
      accept: [/^head\s+-3\s+\/etc\/passwd$/i],
      solution: 'head -3 /etc/passwd',
      output: [
        'root:x:0:0:root:/root:/bin/bash',
        'daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin',
        'bin:x:2:2:bin:/bin:/usr/sbin/nologin'
      ],
      read: "root a l'UID 0 et le shell <code>/bin/bash</code>. Les comptes de service utilisent <code>nologin</code> : ils ne peuvent pas ouvrir de session interactive.",
      pivot: "Repérez maintenant la ligne de votre propre compte avec <code>getent passwd dev</code>."
    },
    {
      id: 'm16-e4',
      title: 'Retrouver un compte précis',
      context: "Vous devez vérifier le shell et le dossier personnel de dev.",
      task: "Affichez la ligne de <code>dev</code> dans la base des utilisateurs.",
      hint: "Utilisez <code>getent passwd dev</code>.",
      accept: [/^getent\s+passwd\s+dev$/i],
      solution: 'getent passwd dev',
      output: ['dev:x:1001:1001:Dev Lab:/home/dev:/bin/bash'],
      read: "UID 1001, GID 1001, dossier <code>/home/dev</code>, shell <code>/bin/bash</code>. Le champ <code>x</code> renvoie au hash stocké dans <code>/etc/shadow</code>.",
      pivot: "Vérifiez que le fichier shadow n'est pas lisible par tout le monde avec <code>ls -l /etc/shadow</code>."
    },
    {
      id: 'm16-e5',
      title: 'Lister les noms d’utilisateurs',
      context: "Vous voulez un inventaire rapide des comptes sans les autres champs.",
      task: "Affichez uniquement le premier champ de <code>/etc/passwd</code> avec <code>cut</code>.",
      hint: "Utilisez <code>cut -d: -f1 /etc/passwd</code>.",
      accept: [/^cut\s+-d:\s+-f1\s+\/etc\/passwd$/i],
      solution: 'cut -d: -f1 /etc/passwd',
      output: ['root', 'daemon', 'bin', 'sys', 'sync', 'dev', 'sshd', 'alice'],
      read: "Le séparateur est <code>:</code>, et le champ 1 est le nom. On voit des comptes système et des comptes humains : tous n'ouvrent pas de session.",
      pivot: "Combinez avec <code>grep -E '/bin/(ba)?sh$' /etc/passwd</code> pour ne garder que les comptes interactifs."
    },
    {
      id: 'm16-e6',
      title: 'Consulter les groupes',
      context: "Le fichier /etc/group liste les groupes et leurs membres.",
      task: "Affichez le contenu de <code>/etc/group</code>.",
      hint: "Utilisez <code>cat /etc/group</code>.",
      accept: [/^cat\s+\/etc\/group$/i],
      solution: 'cat /etc/group',
      output: [
        'root:x:0:',
        'sudo:x:27:dev',
        'analysts:x:1002:alice,bob'
      ],
      read: "Le groupe <code>sudo</code> contient dev, et <code>analysts</code> contient alice et bob. Les membres listés ici sont les appartenances secondaires.",
      pivot: "Un utilisateur dont le groupe principal est <code>sudo</code> n'apparaît pas forcément dans cette ligne : vérifiez avec <code>id</code>."
    },
    {
      id: 'm16-e7',
      title: 'Voir les groupes d’un utilisateur',
      context: "Les droits effectifs dépendent de tous les groupes, pas seulement du principal.",
      task: "Affichez les groupes de <code>dev</code>.",
      hint: "Utilisez <code>groups dev</code>.",
      accept: [/^groups\s+dev$/i],
      solution: 'groups dev',
      output: ['dev : dev sudo analysts'],
      read: "dev cumule les droits de trois groupes. C'est pratique, mais cela élargit la surface : chaque groupe doit être justifié.",
      pivot: "Comparez avec <code>id dev</code> pour voir les GID numériques associés."
    },
    {
      id: 'm16-e8',
      title: 'Auditer ses droits sudo',
      context: "Appartenir au groupe sudo ne signifie pas pouvoir tout faire sans mot de passe.",
      task: "Affichez les règles sudo applicables à votre compte.",
      hint: "Utilisez <code>sudo -l</code>.",
      accept: [/^sudo\s+-l$/i],
      solution: 'sudo -l',
      output: [
        'User dev may run the following commands on lin:',
        '    (ALL : ALL) ALL'
      ],
      read: "Ici, dev peut exécuter toutes les commandes en tant que root. C'est un privilège maximal : en production, on préfère des règles précises limitées à certains services.",
      pivot: "Recherchez les règles sans mot de passe avec <code>grep -R NOPASSWD /etc/sudoers /etc/sudoers.d/</code>."
    },
    {
      id: 'm16-e9',
      title: 'Créer un compte de lab',
      context: "Vous devez accueillir une nouvelle analyste dans le lab.",
      task: "Créez l'utilisateur <code>alice</code> avec <code>adduser</code>.",
      hint: "Utilisez <code>sudo adduser alice</code>.",
      accept: [/^sudo\s+adduser\s+alice$/i],
      solution: 'sudo adduser alice',
      output: [
        'Adding user `alice\' ...',
        'Adding new group `alice\' (1002) ...',
        'Adding new user `alice\' (1002) with group `alice\' ...',
        'Creating home directory `/home/alice\' ...'
      ],
      read: "<code>adduser</code> crée le compte, le groupe, le dossier personnel et demande un mot de passe. C'est la méthode conviviale sur Debian/Ubuntu.",
      pivot: "Vérifiez le résultat avec <code>getent passwd alice</code> et <code>id alice</code>."
    },
    {
      id: 'm16-e10',
      title: 'Créer un groupe d’équipe',
      context: "Les analystes doivent partager un accès sans recevoir sudo.",
      task: "Créez le groupe <code>analysts</code>.",
      hint: "Utilisez <code>sudo groupadd analysts</code>.",
      accept: [/^sudo\s+groupadd\s+analysts$/i],
      solution: 'sudo groupadd analysts',
      output: ['++ groupe analysts créé (GID 1003)'],
      read: "Le groupe existe maintenant, mais il est vide. Créer un groupe ne donne aucun droit tant qu'aucun fichier ne lui est associé.",
      pivot: "Ajoutez alice au groupe avec <code>usermod -aG</code>."
    },
    {
      id: 'm16-e11',
      title: 'Ajouter un membre à un groupe',
      context: "Alice doit rejoindre l'équipe analysts sans perdre ses autres groupes.",
      task: "Ajoutez <code>alice</code> au groupe <code>analysts</code> sans écraser ses appartenances.",
      hint: "Utilisez <code>sudo usermod -aG analysts alice</code>.",
      accept: [/^sudo\s+usermod\s+-aG\s+analysts\s+alice$/i],
      solution: 'sudo usermod -aG analysts alice',
      output: ['++ alice ajoutée au groupe analysts'],
      read: "<code>-aG</code> ajoute le groupe sans toucher aux autres. Sans <code>-a</code>, alice perdrait tous ses groupes secondaires, y compris peut-être sudo.",
      pivot: "Vérifiez avec <code>id alice</code>, puis reconnectez-vous ou utilisez <code>newgrp analysts</code>."
    },
    {
      id: 'm16-e12',
      title: 'Vérifier la protection des mots de passe',
      context: "Le fichier shadow ne doit être lisible que par root.",
      task: "Affichez les permissions de <code>/etc/shadow</code>.",
      hint: "Utilisez <code>ls -l /etc/shadow</code>.",
      accept: [/^ls\s+-l\s+\/etc\/shadow$/i],
      solution: 'ls -l /etc/shadow',
      output: ['-rw-r----- 1 root shadow 1420 Nov  8 10:01 /etc/shadow'],
      read: "Seul root peut écrire, et le groupe <code>shadow</code> peut lire. Les autres n'ont aucun droit. C'est indispensable : le fichier contient les empreintes des mots de passe.",
      pivot: "Comparez avec <code>ls -l /etc/passwd</code>, qui doit être lisible par tous mais modifiable par root seul."
    },
    {
      id: 'm16-e13',
      title: 'Restreindre un rapport interne',
      context: "Un rapport contient des informations sensibles destinées au propriétaire et au groupe.",
      task: "Donnez au fichier <code>~/lab/notes/report.md</code> les droits <code>640</code>.",
      hint: "Utilisez <code>chmod 640 ~/lab/notes/report.md</code>.",
      accept: [/^chmod\s+640\s+~\/lab\/notes\/report\.md$/i],
      solution: 'chmod 640 ~/lab/notes/report.md',
      output: ['++ droits appliqués : 640'],
      read: "Propriétaire : lecture + écriture. Groupe : lecture. Autres : rien. C'est la configuration classique d'un document interne partagé avec une équipe.",
      pivot: "Vérifiez le résultat avec <code>stat -c '%A %a' ~/lab/notes/report.md</code>."
    },
    {
      id: 'm16-e14',
      title: 'Rendre un script exécutable',
      context: "Un script d'audit doit pouvoir être lancé par son propriétaire.",
      task: "Ajoutez le droit d'exécution au propriétaire de <code>~/lab/scripts/audit.sh</code>.",
      hint: "Utilisez <code>chmod u+x ~/lab/scripts/audit.sh</code>.",
      accept: [/^chmod\s+u\+x\s+~\/lab\/scripts\/audit\.sh$/i],
      solution: 'chmod u+x ~/lab/scripts/audit.sh',
      output: ['++ droit x ajouté au propriétaire'],
      read: "Le mode symbolique <code>u+x</code> ajoute uniquement l'exécution au propriétaire, sans modifier les autres droits. C'est plus sûr qu'un <code>chmod 755</code> qui ouvrirait le script à tous.",
      pivot: "Vérifiez avec <code>ls -l ~/lab/scripts/audit.sh</code> : le premier bloc doit contenir <code>x</code>."
    },
    {
      id: 'm16-e15',
      title: 'Partager un dossier avec un groupe',
      context: "L'équipe analysts doit pouvoir lire les preuves, mais pas les modifier.",
      task: "Ajoutez récursivement le droit de lecture au groupe sur <code>~/lab/evidence</code>.",
      hint: "Utilisez <code>chmod -R g+r ~/lab/evidence</code>.",
      accept: [/^chmod\s+-R\s+g\+r\s+~\/lab\/evidence$/i],
      solution: 'chmod -R g+r ~/lab/evidence',
      output: ['++ droit r ajouté au groupe sur le dossier et son contenu'],
      read: "<code>-R</code> applique le changement à tout le contenu. Ici, le groupe gagne la lecture mais pas l'écriture : les preuves restent protégées contre les modifications.",
      pivot: "Vérifiez qu'aucun fichier n'est devenu écrivable par le groupe avec <code>find ~/lab/evidence -perm -g+w</code>."
    },
    {
      id: 'm16-e16',
      title: 'Changer le propriétaire',
      context: "Un fichier créé par root doit revenir à dev pour que celui-ci puisse le modifier.",
      task: "Attribuez <code>~/lab/notes/journal.md</code> au propriétaire <code>dev</code> et au groupe <code>dev</code>.",
      hint: "Utilisez <code>sudo chown dev:dev ~/lab/notes/journal.md</code>.",
      accept: [/^sudo\s+chown\s+dev:dev\s+~\/lab\/notes\/journal\.md$/i],
      solution: 'sudo chown dev:dev ~/lab/notes/journal.md',
      output: ['++ propriétaire et groupe mis à jour : dev:dev'],
      read: "Seul root peut changer le propriétaire d'un fichier. La syntaxe <code>utilisateur:groupe</code> change les deux d'un coup.",
      pivot: "Vérifiez avec <code>stat -c '%U:%G' ~/lab/notes/journal.md</code>."
    },
    {
      id: 'm16-e17',
      title: 'Changer le groupe sans changer le propriétaire',
      context: "Un rapport doit être accessible au groupe analysts.",
      task: "Attribuez le groupe <code>analysts</code> à <code>~/lab/notes/report.md</code>.",
      hint: "Utilisez <code>sudo chgrp analysts ~/lab/notes/report.md</code>.",
      accept: [/^sudo\s+chgrp\s+analysts\s+~\/lab\/notes\/report\.md$/i],
      solution: 'sudo chgrp analysts ~/lab/notes/report.md',
      output: ['++ groupe mis à jour : analysts'],
      read: "Le propriétaire reste dev, mais le groupe devient analysts. Les membres du groupe bénéficient maintenant des droits de groupe définis par <code>chmod</code>.",
      pivot: "Vérifiez que le groupe a bien le droit de lecture : <code>ls -l ~/lab/notes/report.md</code>."
    },
    {
      id: 'm16-e18',
      title: 'Lire le umask',
      context: "Le umask détermine les droits des fichiers que vous créez.",
      task: "Affichez la valeur actuelle du umask.",
      hint: "La commande est <code>umask</code>.",
      accept: [/^umask$/i],
      solution: 'umask',
      output: ['0022'],
      read: "Un umask 022 retire l'écriture au groupe et aux autres. Les nouveaux fichiers seront en 644 et les dossiers en 755.",
      pivot: "Testez un umask plus strict avec <code>umask 077</code>, puis créez un fichier et observez ses droits."
    },
    {
      id: 'm16-e19',
      title: 'Rechercher les binaires SUID',
      context: "Un binaire SUID inattendu peut permettre une élévation de privilèges.",
      task: "Recherchez tous les fichiers SUID de la machine, en masquant les erreurs de permission.",
      hint: "Utilisez <code>find / -perm -4000 -type f 2&gt;/dev/null</code>.",
      accept: [/^find\s+\/\s+-perm\s+-4000\s+-type\s+f\s+2>\/dev\/null$/i],
      solution: 'find / -perm -4000 -type f 2>/dev/null',
      output: [
        '/usr/bin/passwd',
        '/usr/bin/sudo',
        '/usr/bin/su',
        '/opt/backup/run-backup'
      ],
      read: "Les trois premiers sont attendus. <code>/opt/backup/run-backup</code> est un binaire maison SUID : c'est une anomalie à auditer en priorité.",
      pivot: "Comparez cette liste avec un inventaire de référence et justifiez chaque binaire SUID."
    },
    {
      id: 'm16-e20',
      title: 'Trouver les fichiers modifiables par tous',
      context: "Un fichier world-writable peut être altéré par n'importe quel compte.",
      task: "Recherchez les fichiers modifiables par tous sous <code>/home</code>, en masquant les erreurs.",
      hint: "Utilisez <code>find /home -perm -o+w -type f 2&gt;/dev/null</code>.",
      accept: [/^find\s+\/home\s+-perm\s+-o\+w\s+-type\s+f\s+2>\/dev\/null$/i],
      solution: 'find /home -perm -o+w -type f 2>/dev/null',
      output: ['/home/dev/lab/evidence/rapport.txt', '/home/dev/lab/scripts/audit.sh'],
      read: "Deux fichiers sont modifiables par tout le monde. Un script modifiable par tous peut être remplacé par du code malveillant avant d'être exécuté par un autre utilisateur.",
      pivot: "Corrigez avec <code>chmod o-w</code> après avoir vérifié que personne n'en dépend."
    },
    {
      id: 'm16-e21',
      title: 'Lire une ACL',
      context: "Une ACL peut accorder un accès invisible dans un simple ls -l.",
      task: "Affichez les ACL de <code>~/lab/notes/report.md</code>.",
      hint: "Utilisez <code>getfacl ~/lab/notes/report.md</code>.",
      accept: [/^getfacl\s+~\/lab\/notes\/report\.md$/i],
      solution: 'getfacl ~/lab/notes/report.md',
      output: [
        '# file: report.md',
        '# owner: dev',
        '# group: analysts',
        'user::rw-',
        'user:alice:r--',
        'group::r--',
        'mask::r--',
        'other::---'
      ],
      read: "Alice possède une ACL de lecture explicite, en plus des droits classiques. C'est cet accès qui explique pourquoi elle peut lire le fichier malgré un <code>640</code>.",
      pivot: "Retirez l'ACL avec <code>setfacl -x u:alice ~/lab/notes/report.md</code> si l'accès n'est plus nécessaire."
    },
    {
      id: 'm16-e22',
      title: 'Auditer les règles sudo sans mot de passe',
      context: "Une règle NOPASSWD mal placée transforme un compte en root de fait.",
      task: "Recherchez <code>NOPASSWD</code> dans <code>/etc/sudoers</code> et <code>/etc/sudoers.d/</code>.",
      hint: "Utilisez <code>sudo grep -R NOPASSWD /etc/sudoers /etc/sudoers.d/</code>.",
      accept: [/^sudo\s+grep\s+-R\s+NOPASSWD\s+\/etc\/sudoers\s+\/etc\/sudoers\.d\/$/i],
      solution: 'sudo grep -R NOPASSWD /etc/sudoers /etc/sudoers.d/',
      output: [
        '/etc/sudoers.d/backup:backup ALL=(root) NOPASSWD: /usr/bin/tar',
        '/etc/sudoers.d/ops:dev ALL=(root) NOPASSWD: /usr/bin/systemctl restart nginx'
      ],
      read: "Deux règles sans mot de passe. La première est dangereuse : <code>tar</code> peut exécuter des commandes via ses options. La seconde est limitée à un service précis, ce qui est plus acceptable.",
      pivot: "Vérifiez chaque règle avec <code>sudo -l -U utilisateur</code> et remplacez les binaires trop puissants par des scripts dédiés."
    }
  ],
  quiz: 'q16'
};
