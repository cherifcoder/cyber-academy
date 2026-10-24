export default {
  id: 'm1',
  num: 1,
  title: "Introduction au Pentest Éthique & Cadre Légal",
  short: "Cadre légal",
  icon: "⚖️",
  xp: 250,
  duration: 45,
  summary: "Comprendre la différence entre audit offensif autorisé et piratage, maîtriser le cadre juridique, les règles d'engagement et les méthodologies reconnues.",
  objectives: [
    "Distinguer pentest éthique, bug bounty et piratage illégal",
    "Connaître les articles du Code pénal applicables et les obligations contractuelles",
    "Rédiger et exploiter une lettre d'autorisation et des règles d'engagement (RoE)",
    "Appliquer les méthodologies PTES, OWASP WSTG et NIST SP 800-115"
  ],
  blocks: [
    {
      t: 'p',
      x: "Le <strong>pentest</strong> (test d'intrusion) est une simulation d'attaque <strong>autorisée, planifiée et documentée</strong>. La différence avec le piratage ne tient pas à la technique employée — elle est souvent identique — mais à trois éléments : <strong>le consentement écrit du propriétaire</strong>, <strong>le périmètre défini</strong> et <strong>la finalité défensive</strong>."
    },
    {
      t: 'mini',
      items: [
        { v: 'lime', h: 'Pentest éthique', p: "Contrat signé, périmètre et fenêtre horaire définis, rapport confidentiel, données détruites après mission. Objectif : réduire le risque." },
        { v: 'amber', h: 'Bug bounty', p: "Programme public ou privé encadré par une politique de divulgation. Le scope et les récompenses sont fixés par l'éditeur." },
        { v: 'red', h: 'Piratage illégal', p: "Accès ou maintien frauduleux sans autorisation, même sans intention de nuire et même sur un système « faible ». Infraction pénale." }
      ]
    },
    {
      t: 'callout', v: 'legal', title: "Règle d'or : aucune autorisation, aucun test",
      x: "« Je voulais juste tester » n'est pas une circonstance exonératoire. En France, l'accès frauduleux est constitué dès l'instant où vous accédez à un système sans y être autorisé, y compris pour vérifier une faille. Ne scannez jamais une cible hors périmètre, même une IP voisine de votre lab."
    },
    { t: 'h', x: "1.1 Le cadre juridique français" },
    {
      t: 'p',
      x: "Les infractions informatiques sont définies par le <strong>Chapitre III du Titre II du Livre III du Code pénal</strong> (articles 323-1 à 323-8). Les peines ci-dessous sont celles prévues pour une personne physique ; elles sont aggravées pour les personnes morales (amendes ×5, article 131-38)."
    },
    {
      t: 'table',
      head: ['Article', 'Infraction', 'Peine encourue'],
      rows: [
        ['323-1 al. 1', "Accès ou maintien frauduleux dans un STAD", "3 ans — 100 000 €"],
        ['323-1 al. 2', "Idem, avec suppression/modification de données ou altération du fonctionnement", "5 ans — 150 000 €"],
        ['323-2', "Entrave ou perturbation du fonctionnement d'un STAD", "5 ans — 150 000 €"],
        ['323-3', "Introduction, extraction, détention, reproduction, transmission ou suppression frauduleuse de données", "5 ans — 150 000 €"],
        ['323-3-1', "Importation, détention, offre ou mise à disposition d'outils spécialement conçus pour ces infractions", "5 ans — 150 000 €"],
        ['323-4', "Participation à un groupement ou entente préparant ces infractions", "7 ans — 300 000 €"]
      ]
    },
    {
      t: 'p',
      x: "S'y ajoutent, selon les faits : <strong>atteinte au secret des correspondances</strong>, <strong>usurpation d'identité numérique</strong>, <strong>extorsion</strong>, <strong>escroquerie</strong>, <strong>blanchiment</strong>, et les manquements <strong>RGPD</strong> (art. 32 : sécurité des données ; art. 33 : notification de violation sous 72 h). Le cadre sectoriel compte aussi : <strong>NIS2</strong> (entités essentielles/importantes), <strong>DORA</strong> (finance), <strong>LCEN</strong> pour les hébergeurs."
    },
    {
      t: 'callout', v: 'info', title: "Le contrat ne rend pas tout légal",
      x: "Un client ne peut autoriser que ce qu'il contrôle réellement. Si le périmètre inclut un service hébergé chez un tiers (SaaS, CDN, cloud), une autorisation supplémentaire du fournisseur peut être nécessaire. Vérifiez toujours la chaîne de propriété et les conditions d'utilisation."
    },
    { t: 'h', x: "1.2 Les documents indispensables" },
    {
      t: 'steps',
      items: [
        { h: "Le contrat de prestation", p: "Objet de la mission, livrables, confidentialité (NDA), responsabilité, assurance RC professionnelle, propriété des rapports." },
        { h: "La lettre d'autorisation (get-out-of-jail letter)", p: "Signée par un représentant habilité, elle nomme les testeurs, les adresses/IP source autorisées, le périmètre et la période. Le consultant doit pouvoir la présenter immédiatement en cas de contrôle." },
        { h: "Les règles d'engagement (RoE)", p: "Le document opérationnel : cibles exactes, exclusions, fenêtres horaires, techniques interdites (DoS, ingénierie sociale…), contacts d'urgence, procédure d'arrêt, gestion des données." },
        { h: "Le plan de communication et de remédiation", p: "Qui est prévenu, quand, comment (canal chiffré), délais de correction, procédure de retest et de divulgation." }
      ]
    },
    {
      t: 'code', lang: 'text', title: "Extrait type d'une lettre d'autorisation",
      x: `LETTRE D'AUTORISATION DE TEST D'INTRUSION

Client          : ACME SAS — SIREN 000 000 000
Représentant    : [Nom], [Fonction], habilité à signer
Prestataire     : [Société], représentée par [Nom]
Périmètre       : app.acme.example (prod), api.acme.example,
                  plage 203.0.113.0/28 — EXCLUS : paiement.acme.example
Période         : du 2026-11-03 08:00 au 2026-11-07 18:00 (Europe/Paris)
IP sources      : 198.51.100.23, 198.51.100.24
Techniques      : reconnaissance, scan, exploitation contrôlée, post-exploitation
Interdit        : DoS/DDoS, ingénierie sociale, destruction de données,
                  accès aux données personnelles réelles
Contacts 24/7   : [nom, +33…] — Arrêt immédiat sur demande du client
Données         : chiffrées, conservées 30 j puis supprimées, NDA annexé
Signature client            Signature prestataire`
    },
    {
      t: 'callout', v: 'warn', title: "Pièges classiques en mission",
      x: "Dépassement d'horaire, IP de test non déclarée, sous-traitant non listé, scope « …et tout ce qui est lié », captures d'écran contenant des données personnelles, rapport envoyé en clair. Chacun de ces points peut transformer un audit en incident juridique."
    },
    { t: 'h', x: "1.3 Bug bounty et divulgation responsable" },
    {
      t: 'p',
      x: "Un programme de bug bounty est un <strong>contrat d'adhésion</strong> : en soumettant un rapport, vous acceptez la politique. Trois notions structurent la pratique :"
    },
    {
      t: 'ul',
      x: [
        "<strong>Scope</strong> : domaines, applications, versions et types de vulnérabilités éligibles. Hors scope = hors autorisation.",
        "<strong>Safe harbor</strong> : engagement du programme à ne pas poursuivre le chercheur qui respecte les règles. Sans safe harbor explicite, la protection juridique est incertaine.",
        "<strong>Divulgation responsable</strong> : délai de correction négocié (souvent 90 jours), pas de publication avant accord, pas d'exploitation au-delà de la preuve d'impact."
      ]
    },
    {
      t: 'table',
      head: ['Souvent accepté', 'Généralement exclu'],
      rows: [
        ['XSS, SSRF, IDOR, SQLi, prise de contrôle de compte', 'DDoS, spam, phishing, ingénierie sociale'],
        ['Accès en lecture à des données non sensibles comme preuve', 'Exfiltration de données personnelles, mouvement latéral'],
        ['Bypass d’authentification démontré sur un compte de test', 'Attaque d’utilisateurs ou d’employés réels'],
        ['Rapport reproductible avec PoC minimal', 'Scan automatisé massif, rapports dupliqués, scanners seuls']
      ]
    },
    {
      t: 'callout', v: 'tip', title: "Un bon rapport de bug bounty",
      x: "Titre précis, sévérité argumentée, étapes de reproduction numérotées, requête/réponse brutes, impact métier, correctif suggéré, et une preuve minimale (une seule ligne de données suffit). La qualité du rapport compte souvent plus que l'exploit."
    },
    { t: 'h', x: "1.4 Méthodologies de référence" },
    {
      t: 'mini',
      items: [
        { v: 'cyan', h: 'PTES', p: "7 phases : pré-engagement, renseignement, modélisation des menaces, analyse de vulnérabilités, exploitation, post-exploitation, rapport." },
        { v: 'magenta', h: 'OWASP WSTG', p: "Référentiel de tests web en 12 catégories (INFO, CONF, IDNT, ATHN, ATHZ, SESS, INPV, ERRH, CRYP, BUSL, CLNT, APIT). Le standard de facto pour le web." },
        { v: 'lime', h: 'NIST SP 800-115', p: "4 phases : planification, découverte, attaque, rapport. Orienté gouvernance et mesure de la posture." },
        { v: 'violet', h: 'MITRE ATT&CK', p: "Base de techniques adverses (TTP) utilisée pour cartographier les détections et les scénarios Red Team." }
      ]
    },
    {
      t: 'table',
      head: ['Phase PTES', 'Objectif', 'Livrable'],
      rows: [
        ['Pré-engagement', "Cadrer le scope, le contrat, les RoE", "Lettre d'autorisation, planning"],
        ['Renseignement', "Collecter passive + active", "Cartographie des actifs"],
        ['Modélisation des menaces', "Identifier les chemins d'attaque probables", "Scénarios priorisés"],
        ['Analyse de vulnérabilités', "Détecter et valider", "Liste de vulnérabilités prouvées"],
        ['Exploitation', "Démontrer l'impact de façon contrôlée", "PoC, captures"],
        ['Post-exploitation', "Mesurer la portée réelle (pivot, droits)", "Chaînes d'attaque"],
        ['Rapport', "Restituer et prioriser", "Rapport technique + synthèse"]
      ]
    },
    { t: 'h', x: "1.5 Atelier : vérifier qu'une mission est encadrée" },
    {
      t: 'p',
      x: "Cochez chaque élément que vous possédez <strong>avant</strong> d'envoyer le premier paquet. Le simulateur calcule votre niveau de couverture juridique."
    },
    { t: 'lab', id: 'legal' },

    { t: 'h', x: "1.6 PAS À PAS POUR DÉBUTANT : Créer son environnement de mission sécurisé" },
    {
      t: 'p',
      x: "Avant tout test, il faut apprendre à <strong>tracer, structurer et protéger</strong> votre travail. Dans cette section, nous allons créer un espace dédié à une mission fictive <strong>100% autorisée</strong> (lab local), avec traçabilité, journalisation et bonnes pratiques."
    },
    {
      t: 'callout', v: 'legal', title: "Environnement strictement autorisé",
      x: "Tous les exemples ci-dessous s'appliquent à un <strong>environnement de laboratoire local</strong> (VM, Docker sur votre machine). Ne jamais reproduire ces manipulations sur un système tiers sans autorisation écrite explicite."
    },
    {
      t: 'steps',
      items: [
        { h: "Étape 1 : Définir un périmètre fictif", p: "Choisir un lab local autorisé (ex: DVWA, Juice Shop, WebGoat) sur 127.0.0.1/192.168.56.0/192.168.100.0. Écrire le périmètre dans un fichier." },
        { h: "Étape 2 : Créer un espace de travail isolé", p: "Un dossier par mission avec sous-dossiers (evidence/, reports/, tools/, notes/). Permissions strictes." },
        { h: "Étape 3 : Créer un journal de mission (chronologie)", p: "Tout acte doit être daté/horodaté. Important pour la traçabilité et la restitution." },
        { h: "Étape 4 : Mettre en place une traçabilité des commandes", p: "Journaliser les commandes exécutées (avec variantes testées) et leurs résultats." },
        { h: "Étape 5 : Préparer les modèles de documents", p: "Lettre d'autorisation, RoE, rapport — remplir pour le lab fictif." }
      ]
    },
    { t: 'h', x: "1.6.1 Créer l'arborescence (Linux/macOS et Windows)" },
    {
      t: 'code', lang: 'bash', title: "VARIANTES - Linux/macOS (Bash/Zsh)",
      x: `# Créer la structure pour une mission lab autorisée
mkdir -p ~/pentest-lab/mission-01/{evidence/{screenshots,logs,pcaps},reports,tools,notes,roes}

# Se placer dans le dossier
cd ~/pentest-lab/mission-01

# Afficher l'arborescence
tree -a 2>/dev/null || find . -type f -o -type d | sort

# Créer un journal horodaté
echo "# JOURNAL DE MISSION - MISSION-01" > notes/journal-$(date +%Y%m%d).md
echo "Début : $(date -Iseconds)" >> notes/journal-$(date +%Y%m%d).md

# Droits restrictifs (si partage potentiel)
chmod -R go-rwx ~/pentest-lab/ 2>/dev/null; echo "[OK] permissions restreintes"`
    },
    {
      t: 'code', lang: 'powershell', title: "VARIANTES - Windows (PowerShell)",
      x: `# Créer la structure
$root = "$env:USERPROFILE\\pentest-lab\\mission-01"
New-Item -ItemType Directory -Force -Path "$root\\evidence\\screenshots","$root\\evidence\\logs","$root\\evidence\\pcaps","$root\\reports","$root\\tools","$root\\notes","$root\\roes" | Out-Null

# Se placer
Set-Location $root

# Afficher
tree . /F | Out-File -Encoding UTF8 notes\\arborescence.txt
Get-ChildItem -Recurse | Format-Table FullName, Length, LastWriteTime

# Journal
$journal = "notes\\journal-$(Get-Date -Format yyyyMMdd).md"
"# JOURNAL DE MISSION - MISSION-01" | Out-File -Encoding UTF8 $journal
"Debut : $(Get-Date -Format o)" | Out-File -Append -Encoding UTF8 $journal

# Afficher
Get-Content $journal`
    },
    {
      t: 'callout', v: 'tip', title: "Vérification attendue",
      x: "Vous devez voir l'arborescence avec evidence/, reports/, tools/, notes/, roes/. Le journal contient un en-tête et l'horodatage de début."
    },
    { t: 'h', x: "1.6.2 Créer une lettre d'autorisation et des RoE (fictives, lab)" },
    {
      t: 'p',
      x: "Pour s'entraîner, on rédige des documents complets <strong>pour un lab strictement local</strong>. Remplissez TOUS les champs."
    },
    {
      t: 'code', lang: 'bash', title: "VARIANTE - Générer un squelette (Linux/macOS)",
      x: `# Lettre d'autorisation fictive (LAB UNIQUEMENT)
cat > roes/lettre_autorisation_lab.md << 'EOF'
# LETTRE D'AUTORISATION - LABORATOIRE LOCAL UNIQUEMENT

Date : $(date +%Y-%m-%d)

Je soussigné(e), [VOTRE_NOM/ETUDIANT], propriétaire/utilisateur du poste de laboratoire ci-après :

Autorise explicitement [VOTRE_NOM] à effectuer des tests d'intrusion dans le cadre d'un
APPRENTISSAGE sur les systèmes suivants, STRICTEMENT DANS MON ENVIRONNEMENT LOCAL :

Cibles autorisées (LAB SEULEMENT) :
- http://127.0.0.1:8080/  (DVWA local)
- http://127.0.0.1:3000/  (Juice Shop local)
- http://127.0.0.1:8081/  (WebGoat local)

Périmètre : UNIQUEMENT localhost / interfaces du labo virtuel
Exclus : toute autre adresse IP, domaine public, réseau d'entreprise
Période : formation - sans limite si local et isolé
Techniques autorisées : scan, enumeration, exploitation didactique
Interdit : DoS/DDoS, exfiltration de données réelles, tests sur tiers

Signature : __________________
Date/Heure : __________________
EOF

# Règles d'engagement
cat > roes/roe_lab.md << 'EOF'
# RÈGLES D'ENGAGEMENT (RoE) - LAB LOCAL

## Objet
Formation au pentest éthique sur environnement isolé.

## Cibles
Voir lettre d'autorisation - UNIQUEMENT 127.0.0.1 sur ports lab.

## Horaires
Illimités si environnement 100% local et isolé (VM/host-only).

## Techniques interdites
- Déni de service / stress test
- Tests sur des cibles réelles
- Ingénierie sociale
- Exploitation hors du périmètre

## Contacts d'urgence
Auto-formation - arrêt immédiat si doute sur le périmètre.

## Gestion des preuves
Captures/screenshots uniquement dans evidence/. Pas de données personnelles réelles.
EOF

echo "[OK] Documents créés"; ls -lh roes/`
    },
    {
      t: 'code', lang: 'powershell', title: "VARIANTE - Windows PowerShell",
      x: `# Lettre d'autorisation
$lettre = @'
# LETTRE D'AUTORISATION - LABORATOIRE LOCAL UNIQUEMENT

Date : $(Get-Date -Format yyyy-MM-dd)

J'autorise [VOTRE_NOM] à effectuer des tests dans l'UNIQUE cadre d'apprentissage
sur environnement local isolé (127.0.0.1, réseau host-only).

Cibles : http://127.0.0.1:8080, http://127.0.0.1:3000, http://127.0.0.1:8081
Exclus : tout hors périmètre local
Interdit : DoS, cibles réelles, exfiltration de données réelles
'@
$lettre | Out-File -Encoding UTF8 .\roes\lettre_autorisation_lab.md

# RoE
$roe = @'
# RÈGLES D'ENGAGEMENT - LAB LOCAL
Cibles: uniquement localhost/host-only
Interdit: DoS, cibles tierces, phishing
Preuves: evidence/ uniquement
'@
$roe | Out-File -Encoding UTF8 .\roes\roe_lab.md

Get-ChildItem .\roes\ | Format-Table Name, Length`
    },
    { t: 'h', x: "1.6.3 Traçabilité : horodatage et hash des preuves" },
    {
      t: 'p',
      x: "Bon réflexe débutant : horodater et calculer un hash (empreinte) de vos captures/preuves pour prouver leur intégrité."
    },
    {
      t: 'code', lang: 'bash', title: "VARIANTES - Linux/macOS (sha256sum/md5sum)",
      x: `# Créer une fausse preuve pour s'entraîner (fichier texte)
echo "Preuve test - $(date -Iseconds)" > evidence/logs/preuve_test.txt

# Calculer empreintes
sha256sum evidence/logs/preuve_test.txt | tee evidence/logs/preuve_test.txt.sha256
sha1sum    evidence/logs/preuve_test.txt | tee evidence/logs/preuve_test.txt.sha1
md5sum     evidence/logs/preuve_test.txt | tee evidence/logs/preuve_test.txt.md5 2>/dev/null

# Journaliser
echo "[$(date -Iseconds)] Création et hachage de preuve_test.txt" >> notes/journal-$(date +%Y%m%d).md
cat notes/journal-$(date +%Y%m%d).md | tail -3`
    },
    {
      t: 'code', lang: 'powershell', title: "VARIANTE - Windows PowerShell (Get-FileHash)",
      x: `# Preuve test
"Preuve test - $(Get-Date -Format o)" | Out-File -Encoding UTF8 .\evidence\logs\preuve_test.txt

# Hashes
Get-FileHash .\evidence\logs\preuve_test.txt -Algorithm SHA256 | Format-List
Get-FileHash .\evidence\logs\preuve_test.txt -Algorithm SHA1   | Format-List
Get-FileHash .\evidence\logs\preuve_test.txt -Algorithm MD5    | Format-List 2>$null

# Journaliser
"[$(Get-Date -Format o)] Hachage preuves" | Out-File -Append -Encoding UTF8 .\notes\journal-$(Get-Date -Format yyyyMMdd).md
Get-Content .\notes\journal-$(Get-Date -Format yyyyMMdd).md | Select-Object -Last 3`
    },
    { t: 'h', x: "1.6.4 Checklist de vérification AVANT scan" },
    {
      t: 'table',
      head: ['Vérification', 'OK/NOK', 'Commentaire'],
      rows: [
        ['Lettre d\'autorisation signée (lab OK)', '', 'Uniquement si hors-local strictement autorisé'],
        ['RoE lus et compris', '', 'Techniques interdites connues'],
        ['Périmètre exact (IP/ports/URLs)', '', 'Lister explicitement'],
        ['Cibles = uniquement lab local/host-only', '', '127.0.0.1 / réseau isolé'],
        ['Espace de travail créé + journal', '', 'evidence/, notes/'],
        ['Outils dans environnement isolé', '', 'VM dédiée recommandée'],
        ['Plan d\'arrêt en cas de doute', '', 'Arrêter immédiatement']
      ]
    },
    {
      t: 'callout', v: 'warn', title: "Rappel critique",
      x: "Si un seul élément est NOK concernant une cible NON autorisée, <strong>NE PAS SCANNER</strong>. Pour ce cours, on ne travaille que sur <strong>127.0.0.1</strong> ou sur un lab explicitement autorisé que vous possédez."
    },
    { t: 'h', x: "1.7 TEST PRATIQUE À LA FIN DU MODULE - Mise en pratique pas à pas dans un LAB SÉCURISÉ" },
    {
      t: 'p',
      x: "Objectif : réaliser l'intégralité du cadrage d'une mission <strong>100% autorisée (lab local)</strong> de A à Z, documenter, tracer, et valider. Durée indicative : 30-45 minutes."
    },
    {
      t: 'steps',
      items: [
        { h: "TEST 1 - Créer l'environnement (10 min)", p: "Créer arborescence mission-01. Générer journal du jour. Vérifier permissions." },
        { h: "TEST 2 - Rédiger les documents (10 min)", p: "Rédiger lettre d'autorisation + RoE pour DVWA local (http://127.0.0.1:8080). Lister périmètre/exclusions/techniques interdites." },
        { h: "TEST 3 - Traçabilité (8 min)", p: "Créer une preuve fictive dans evidence/logs/, calculer SHA256/SHA1/MD5, journaliser." },
        { h: "TEST 4 - Checklist & auto-validation (7 min)", p: "Remplir la checklist, justifier chaque item, conclure « PRÊT POUR LAB LOCAL » ou « NON PRÊT - CORRIGER »." }
      ]
    },
    {
      t: 'code', lang: 'text', title: "GRILLE D'AUTO-ÉVALUATION (à remplir dans notes/)",
      x: `CRITÈRE | RÉALISÉ (O/N) | PREUVE (chemin/fichier) | COMMENTAIRE
---------|----------------|--------------------------|------------
Arborescence complète | | evidence/, notes/, roes/, reports/ | 
Journal horodaté | | notes/journal-*.md | 
Lettre d'autorisation (lab) | | roes/lettre_autorisation_lab.md | 
RoE (lab) | | roes/roe_lab.md | 
Preuve + hash SHA256 | | evidence/logs/*.sha256 | 
Checklist remplie | | notes/checklist_avant_scan.md | 
Périmètre = UNIQUEMENT local | | Justification écrite | 

CONCLUSION : [ ] PRÊT POUR LAB LOCAL   [ ] NON PRÊT - À CORRIGER
DATE/HEURE : __________________`
    },
    {
      t: 'callout', v: 'tip', title: "Résultat attendu",
      x: "À l'issue, vous devez disposer d'un dossier complet, traçable, avec documents clairs. C'est exactement la rigueur attendue sur une vraie mission. Ne passez aux modules suivants qu'après avoir complété ces 4 tests."
    }
  ],
  quiz: 'q1'
};
