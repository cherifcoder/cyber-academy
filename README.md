# Cyber Academy — Web Pentest & Security Learning

Plateforme d'apprentissage interactive entièrement en français, consacrée au pentest web éthique, au cadre légal, à OWASP Top 10, Burp Suite, au reporting CVSS, à la défense applicative et à la sécurité des communications sans fil (Bluetooth, radio SDR, écouteurs connectés).

## Objectifs pédagogiques

- **Cadre légal** — Autorisation écrite, PTES, OWASP WSTG, bonnes pratiques et limites légales.
- **Reconnaissance** — OSINT passif/actif, scan réseau et identification de surface d'attaque.
- **Cartographie** — Crawling, fuzzing, découverte d'endpoints avec Burp, ZAP, Gobuster, Dirsearch, FFUF.
- **Vulnérabilités web** — SQLi, XSS, CSRF, SSRF, LFI/RFI, XXE, IDOR, open redirect, contrôle d'accès, upload de fichiers, avec mécanisme, impact, détection, exploitation en lab et remédiation.
- **Burp Suite** — Proxy, Repeater, Intruder, Decoder, Sequencer, Logger, FoxyProxy.
- **Post-exploitation** — Élévation de privilèges Linux/Windows, persistance, nettoyage de traces et analyse de logs.
- **Fondamentaux réseau** — Ports, DNS, TCP/UDP, couches OSI et TCP/IP, DHCP, NAT, adressage IPv4/IPv6, masques, CIDR, sous-réseaux et VLSM, avec des analogies du quotidien.
- **Linux** — Shell, arborescence, fichiers, recherche, pipes, processus, services, disques, archives, utilisateurs, groupes, permissions, SUID, sticky bit et ACL.
- **Reporting** — CVSS v3.1 (formule officielle), générateur de rapport professionnel, export PDF/impression et Markdown.
- **Défense** — Secure coding, WAF, en-têtes de sécurité, sessions/MFA et checklist de durcissement téléchargeable.
- **Identités réseau** — IP, MAC et IMEI : structure, portée réelle, traçage dans un cadre autorisé, masquage légitime, corrélation NAT/DHCP et défense.
- **Sécurité Bluetooth** — Architecture BR/EDR et BLE, inquiry, SDP, GATT/ATT, appairage Secure Connections, capture HCI, outils (hcitool, sdptool, gatttool, btmon, bleak) et 10 labs + 10 CTF sur matériel de lab.
- **Sécurité radio (SDR)** — Bandes ISM/SRD, modulation ASK/OOK, FSK et LoRa, capture I/Q, GNU Radio, URH, rtl_sdr, HackRF, RFID et ADS-B, avec 10 labs sur banc isolé et 10 CTF, dans le respect de la réglementation ANFR/ETSI/FCC.
- **Écouteurs connectés** — A2DP, AVRCP, HFP/SCO, LE Audio LC3, Fast Pair, cartographie GATT, confidentialité du micro, firmwares signés, avec 10 labs et 10 CTF sur matériel personnel uniquement.

## Fonctionnalités

- **Parcours structuré** — 34 modules progressifs avec objectifs, blocs pédagogiques, quiz par module et validation par seuil de 70 %. Les modules 32 à 34 ajoutent 30 exercices interactifs de saisie de commandes, 30 labs guidés et 30 CTF détaillés.
- **Fondamentaux réseau** — 2 modules dédiés (ports, DNS, TCP/IP, couches OSI, DHCP, NAT, adressage IPv4/IPv6, masques, CIDR, sous-réseaux et VLSM), expliqués avec des analogies accessibles aux non-informaticiens.
- **Fondamentaux Linux** — 2 modules dédiés (shell, arborescence, fichiers, pipes, processus, services, disques, utilisateurs, groupes, permissions, SUID et ACL).
- **Modules Capture The Flag** — 4 parcours guidés pas à pas (application web, WordPress, injection SQL, élévation de privilèges Linux) avec flags, preuves, exercices et remédiation, plus 5 challenges IP/MAC/IMEI dans le module 17 et 30 CTF sans fil (10 Bluetooth, 10 radio, 10 audio) dans les modules 32 à 34.
- **Tableau de bord** — Progression globale, XP, niveau (Recrue → Expert), temps d'étude cumulé, activité récente et badges.
- **Ateliers interactifs** — 13 simulateurs pédagogiques (cadre d'autorisation, Nmap, fuzzing, SQLi, XSS, falsification de requête Burp, élévation de privilèges, calculateur CVSS v3.1, durcissement HTTP, résolveur DNS, calculateur de sous-réseaux, décodeur de permissions et traceur IP/MAC/IMEI). **Aucune requête réseau réelle**.
- **Boîte à outils** — Fiches outils filtrables, cheatsheet commandes, checklist de durcissement téléchargeable/imprimable.
- **Flashcards** — 8 decks (termes, HTTP, statuts, Burp, OWASP, privesc, identité réseau, sans fil & RF) avec suivi « maîtrisé ».
- **Badges** — 32 badges débloquables en fonction de la progression, des XP, du temps d'étude et de la pratique.
- **Certificat** — Généré localement en Canvas (PNG, 1600×1131) et imprimable/PDF, personnalisé au nom de l'apprenti.
- **Rapport d'audit** — Générateur avec formulaire dynamique, aperçu en direct, brouillons locaux (jusqu'à 20), export Markdown et impression/PDF.
- **Thème sombre/clair** — Persistance dans `localStorage`.
- **Progression locale** — Tout est stocké dans le navigateur (`localStorage`), aucun compte ni serveur requis.
- **Responsive** — Compatible desktop, tablette et mobile.

## Modules sans fil (32 à 34)

| Module | Titre | Protocoles expliqués | Outils et commandes | Pratique |
| --- | --- | --- | --- | --- |
| 32 | Sécurité Bluetooth | BR/EDR, BLE, HCI, L2CAP, SDP, RFCOMM, ATT/GATT, GAP, SSP, CCCD | `hciconfig`, `hcitool`, `bluetoothctl`, `sdptool`, `gatttool`, `bleak`, `btmon`, `tshark` | 10 exercices, 10 labs, 10 CTF |
| 33 | Sécurité radio & SDR | ISM/SRD, I/Q, Nyquist, ASK/OOK, FSK, LoRa, duty cycle, rolling code, RFID, ADS-B | `rtl_sdr`, `rtl_433`, `hackrf_transfer`, `gqrx`, `urh`, `inspectrum`, `gnuradio-companion` | 10 exercices, 10 labs sur banc isolé, 10 CTF |
| 34 | Écouteurs connectés & audio | A2DP/AVDTP, AVRCP, HFP/SCO, LE Audio LC3, BIG/BASS, Fast Pair (0xFE2C), GATT 0x180A | `bluetoothctl`, `sdptool`, `gatttool`, `btmon`, `tshark`, HCI snoop Android | 10 exercices, 10 labs, 10 CTF |

Chaque module sans fil contient : un cours structuré avec tableaux, glossaires, fiches de commandes (`cmdref`) et mises en garde légales ; **10 exercices interactifs** avec sortie simulée ; **10 labs pas à pas** avec protocole, commandes, preuve et remédiation ; **10 CTF** avec objectif, flag, solution guidée et correction ; un quiz de 10 questions avec seuil de 70 %.

> Les manipulations radio et Bluetooth ne sont présentées que dans un cadre de laboratoire : appareils personnels ou de test, banc isolé ou enceinte blindée pour toute émission, et strict respect des bandes, puissances et cycles d'utilisation définis par l'ANFR, l'ETSI et la FCC. Aucune procédure d'écoute ou d'accès à un appareil tiers n'est fournie.

## Points XP

| Action | XP |
| --- | --- |
| Valider un module | +250 à +600 selon le module |
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
│       ├── data/          # Contenu pédagogique (m1–m34), quiz, outils, flashcards, badges
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
> - Pour les modules sans fil (32 à 34) : n'utilisez que vos propres appareils ou du matériel de test, en banc isolé. Toute émission (HackRF, Flipper Zero, CC1101) et tout brouillage sont interdits hors enceinte blindée et autorisation réglementaire explicite.
> - L'auditeur est seul responsable de l'usage qu'il fait des connaissances acquises. Le non-respect de cette règle peut constituer une infraction pénale dans de nombreux pays.
> - Ce contenu est fourni à des fins éducatives uniquement. Il ne constitue ni conseil juridique, ni conseil de sécurité opérationnel.

## Compatibilité

- Navigateurs modernes (Chrome, Edge, Firefox, Safari)
- JavaScript ES Modules activé
- `localStorage` requis pour la sauvegarde de progression
- Fonctionne hors ligne après premier chargement

## Licence

Usage pédagogique et personnel. Veuillez respecter le cadre légal ci-dessus.
