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
    { t: 'lab', id: 'legal' }
  ],
  quiz: 'q1'
};
