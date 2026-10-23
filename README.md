# Cyber Academy — Web Pentest & Security Learning

Plateforme d'apprentissage interactive entièrement en français, consacrée au pentest web éthique, au cadre légal, à OWASP Top 10, Burp Suite, au reporting CVSS et à la défense applicative.

## Objectifs pédagogiques

- **Cadre légal** — Autorisation écrite, PTES, OWASP WSTG, bonnes pratiques et limites légales.
- **Reconnaissance** — OSINT passif/actif, scan réseau et identification de surface d'attaque.
- **Cartographie** — Crawling, fuzzing, découverte d'endpoints avec Burp, ZAP, Gobuster, Dirsearch, FFUF.
- **Vulnérabilités web** — SQLi, XSS, CSRF, SSRF, LFI/RFI, XXE, IDOR, open redirect, contrôle d'accès, upload de fichiers, avec mécanisme, impact, détection, exploitation en lab et remédiation.
- **Burp Suite** — Proxy, Repeater, Intruder, Decoder, Sequencer, Logger, FoxyProxy.
- **Post-exploitation** — Élévation de privilèges Linux/Windows, persistance, nettoyage de traces et analyse de logs.
- **Reporting** — CVSS v3.1 (formule officielle), générateur de rapport professionnel, export PDF/impression et Markdown.
- **Défense** — Secure coding, WAF, en-têtes de sécurité, sessions/MFA et checklist de durcissement téléchargeable.

## Fonctionnalités

- **Parcours structuré** — 8 modules progressifs avec objectifs, blocs pédagogiques, quiz par module et validation par seuil de 70 %.
- **Tableau de bord** — Progression globale, XP, niveau (Recrue → Expert), temps d'étude cumulé, activité récente et badges.
- **Ateliers interactifs** — 9 simulateurs pédagogiques (cadre d'autorisation, Nmap, fuzzing, SQLi, XSS, falsification de requête Burp, élévation de privilèges, calculateur CVSS v3.1, durcissement HTTP). **Aucune requête réseau réelle**.
- **Boîte à outils** — Fiches outils filtrables, cheatsheet commandes, checklist de durcissement téléchargeable/imprimable.
- **Flashcards** — 6 decks (termes, HTTP, statuts, Burp, OWASP, privesc) avec suivi « maîtrisé ».
- **Badges** — 20 badges débloquables en fonction de la progression, des XP, du temps d'étude et de la pratique.
- **Certificat** — Généré localement en Canvas (PNG, 1600×1131) et imprimable/PDF, personnalisé au nom de l'apprenti.
- **Rapport d'audit** — Générateur avec formulaire dynamique, aperçu en direct, brouillons locaux (jusqu'à 20), export Markdown et impression/PDF.
- **Thème sombre/clair** — Persistance dans `localStorage`.
- **Progression locale** — Tout est stocké dans le navigateur (`localStorage`), aucun compte ni serveur requis.
- **Responsive** — Compatible desktop, tablette et mobile.

## Points XP

| Action | XP |
| --- | --- |
| Valider un module | +250 à +450 selon le module |
| Quiz — amélioration du meilleur score | +5 par bonne réponse supplémentaire |
| Atelier terminé | +20 |
| Flashcard maîtrisée | +2 |
| Premier rapport d'audit | +50 |
| Premier certificat généré | +30 |

**Niveaux :** Recrue (0) → Analyste Junior (300) → Pentester Junior (800) → Analyste Offensif (1500) → Red Teamer (2500) → Expert Sécurité (3500)

## Structure du projet

```text
2026_10_23_CYBER_ACADEMY/
├── index.html
├── assets/
│   ├── css/
│   │   ├── style.css      # Tokens, layout, composants
│   │   └── views.css      # Vues spécifiques, lab, certificat, rapport, impression
│   └── js/
│       ├── app.js         # Bootstrap, navigation, thème, minuterie d'étude
│       ├── router.js      # Routage hash (#/)
│       ├── store.js       # État, progression, XP, badges, LocalStorage
│       ├── ui.js          # Helpers UI, toasts, modales, copie, impression
│       ├── cvss.js        # Calcul CVSS v3.1 (formule officielle)
│       ├── data/          # Contenu pédagogique (m1–m8), quiz, outils, flashcards, badges
│       └── views/         # Vues (dashboard, module, quiz, labs, toolbox, flashcards, badges, certificate, report)
```

## Lancer en local

### Option 1 — Node.js
```bash
node -e "const http=require('http'),fs=require('fs'),path=require('path');http.createServer((q,r)=>{let p=decodeURIComponent(q.url.split('?')[0]);if(p==='/')p='/index.html';const f=path.resolve('.',p.slice(1));try{const d=fs.readFileSync(f);const ext=path.extname(f);const t={'.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json','.png':'image/png','.svg':'image/svg+xml'}[ext]||'text/plain';r.writeHead(200,{'Content-Type':t});r.end(d);}catch(e){r.writeHead(404);r.end('Not found');}}).listen(8080)"
```
Ouvrir [http://localhost:8080](http://localhost:8080).

### Option 2 — Python
```bash
python -m http.server 8080
```

### Option 3 — Serveur statique
N'importe quel serveur HTTP statique fonctionne. Aucun build, aucun bundler, aucun CDN.

## Cadre d'utilisation et avertissement légal

> **IMPORTANT — À lire attentivement**
>
> - Les techniques présentées dans Cyber Academy sont exclusivement pédagogiques.
> - **N'utilisez jamais** ces méthodes sur des systèmes, applications ou réseaux sans autorisation écrite explicite et préalable.
> - Les ateliers sont des **simulations locales** qui n'émettent aucune requête réseau réelle.
> - Pratiquez uniquement sur des environnements volontairement vulnérables et autorisés : [DVWA](https://github.com/digininja/DVWA), [OWASP Juice Shop](https://owasp.org/www-project-juice-shop/), [OWASP WebGoat](https://owasp.org/www-project-webgoat/), [Metasploitable](https://information.rapid7.com/download-metasploitable-2017.html), ou des plateformes CTF légitimes.
> - L'auditeur est seul responsable de l'usage qu'il fait des connaissances acquises. Le non-respect de cette règle peut constituer une infraction pénale dans de nombreux pays.
> - Ce contenu est fourni à des fins éducatives uniquement. Il ne constitue ni conseil juridique, ni conseil de sécurité opérationnel.

## Compatibilité

- Navigateurs modernes (Chrome, Edge, Firefox, Safari)
- JavaScript ES Modules activé
- `localStorage` requis pour la sauvegarde de progression
- Fonctionne hors ligne après premier chargement

## Licence

Usage pédagogique et personnel. Veuillez respecter le cadre légal ci-dessus.
