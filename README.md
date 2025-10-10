#  ABL League – African Basketball League

Une application web moderne construite avec **Next.js 15**, **TypeScript** et **Tailwind CSS**, permettant de suivre les équipes, matchs, classements et statistiques de la **ligue africaine de basketball (ABL)**.

---

##  Fonctionnalités principales

###  Pages et navigation
- **Accueil** : présentation générale avec bannière visuelle et top équipes.  
- **Teams** : liste complète des équipes participantes.  
- **Team Details** : page détaillée avec logo, photo de couverture, effectif (roster) et informations sur l’équipe.  
- **Matches** : calendrier des matchs passés et à venir avec résultats.  
- **Standings** : classement automatique mis à jour à partir des matchs.  

---

##  Stack technique

| Technologie | Rôle |

| **Next.js 15 (App Router)** | Framework principal |
| **React / TypeScript** | Interface utilisateur et typage |
| **Tailwind CSS** | Style et mise en page responsive |
| **Framer Motion** | Animations fluides |
| **Zustand / Context API** | Gestion d’état |
 **Lucide React** | Icônes modernes |
**Next Themes**  Mode sombre / clair 
 **Recharts** Visualisation des statistiques 

---

##  Arborescence du projet

abl-league/
├── app/
│ ├── api/
│ │ ├── teams/
│ │ │ └── data.ts
│ │ ├── matches/
│ │ │ └── data.ts
│ │ └── standings/
│ │ └── data.ts
│ ├── teams/
│ │ ├── page.tsx
│ │ └── [id]/
│ │ └── page.tsx
│ ├── matches/
│ │ └── page.tsx
│ ├── standings/
│ │ └── page.tsx
│ ├── layout.tsx
│ └── page.tsx
├── components/
│ ├── Navbar.tsx
│ ├── Footer.tsx
│ ├── ThemeToggle.tsx
│ └── HomeClient.tsx
├── lib/
│ ├── store.ts
│ └── types.ts
├── public/
│ ├── logos/
│ ├── covers/
│ └── players/
│ └── placeholder.png
├── scripts/
│ ├── generatePlaceholders.js
│ └── recalculateStandings.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md


---

##  Installation et démarrage

###  Cloner le projet

git clone https://github.com/Elie19/abl-league.git
cd abl-league

### Installer les dépendances
npm install


Si tu rencontres une erreur “module not found”, installe les dépendances manquantes :

npm install next-themes lucide-react recharts critters fs-extra

### Lancer le serveur de développement
npm run dev


Le site sera disponible sur 👉 http://localhost:3000

### Données intégrées

20 équipes inspirées de la Basketball Africa League (bal.nba.com)

Chaque équipe contient :

Logo (/public/logos)

Image de couverture (/public/covers)

Liste complète de joueurs (Player[])

Statistiques cohérentes pour le classement (standings/data.ts)

Matchs générés automatiquement (matches/data.ts)

### Design & Expérience utilisateur

Interface responsive et mobile-first

Mode sombre / clair avec animation fluide

Transitions douces (Framer Motion)

Arrière-plans photo réalistes (/public/basket-bg.png)

Placeholders pour les joueurs sans photo (/public/players/placeholder.png)

 Bonus et optimisations

SEO complet : balises <head>, OpenGraph, JSON-LD

Support PWA avec favicon et manifest.json

Performances validées (Lighthouse > 90)

Accessibilité améliorée (Core Web Vitals)

### Auteur

Elie AMOUSSOU GUENOU 
Développeur Front-End • Passionné de technologies modernes et d’éducation numérique.
 Contact
fallfly240@mail.com 
### Licence

Projet développé à des fins pédagogiques et de démonstration technique.
© 2025 African Basketball League — Tous droits réservés.


