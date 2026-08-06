# God Favor Solution — Frontend

Application web (React + TypeScript) du site de **God Favor Solution Sarl**,
agence de voyage et de formation en langues étrangères basée à Etoug-Ebe,
Yaoundé, Cameroun.

Cette application couvre la vitrine publique (accueil, services de voyage,
catalogue de cours, guide de voyage, blog, inscription), l'espace apprenant
(cours en ligne, progression), l'espace enseignant (gestion des contenus) et
le back-office administrateur.

> Ce dépôt correspond au frontend uniquement. L'API backend se trouve dans un
> dépôt séparé : `god-favor-backend`.

---

## Sommaire

- [Stack technique](#stack-technique)
- [Structure du projet](#structure-du-projet)
- [Prérequis](#prérequis)
- [Cloner le projet](#cloner-le-projet)
- [Configuration (.env)](#configuration-env)
- [Installation des dépendances](#installation-des-dépendances)
- [Démarrer l'application](#démarrer-lapplication)
- [Tests](#tests)
- [Qualité de code](#qualité-de-code)
- [Build de production](#build-de-production)
- [Pages de l'application](#pages-de-lapplication)
- [Internationalisation](#internationalisation)
- [Contribution](#contribution)

---

## Stack technique

| Élément | Technologie |
|---|---|
| Framework | React + TypeScript (Vite) |
| Routage | react-router-dom |
| Appels API | axios |
| Gestion des données serveur | @tanstack/react-query |
| Formulaires | react-hook-form + zod |
| Internationalisation | react-i18next (FR / EN / DE) |
| Lecture vidéo | react-player |
| État global léger | zustand |
| Style | Tailwind CSS |
| Tests | Vitest + Testing Library + MSW (mock des appels API) |
| Qualité de code | ESLint, Prettier, Husky, lint-staged, CodeRabbit |

---

## Structure du projet

```
god-favor-frontend/
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── router/                 # configuration des routes
│   ├── layouts/                # PublicLayout, LearnerLayout, TeacherLayout, AdminLayout
│   ├── pages/
│   │   ├── public/              # Accueil, Services, Cours, Guide, Blog, Inscription...
│   │   ├── learner/             # Tableau de bord, Mes cours, Leçon, Évaluation...
│   │   ├── teacher/             # Tableau de bord, Gestion des cours, Contenus...
│   │   └── admin/               # Utilisateurs, Cours, Inscriptions, Blog, Guide...
│   ├── features/                # logique métier + appels API par domaine
│   │   ├── auth/
│   │   ├── courses/
│   │   ├── progress/
│   │   ├── enrollment/
│   │   ├── blog/
│   │   └── guide/
│   ├── components/
│   │   ├── common/               # Header, Footer, LanguageSwitcher, Button...
│   │   ├── courses/               # CourseCard, VideoPlayer, LessonContent
│   │   └── forms/                 # EnrollmentForm, LoginForm, EvaluationForm
│   ├── services/                 # client API (axios)
│   ├── store/                    # état global (session, langue)
│   ├── i18n/                     # fichiers de traduction FR/EN/DE
│   ├── types/                    # types TypeScript partagés
│   └── test/                     # mocks MSW et utilitaires de test
├── public/
├── .env
└── package.json
```

Chaque composant/page possède son fichier de test associé (`.test.tsx`) situé
juste à côté. Détail complet : voir `frontend-structure.md`.

---

## Prérequis

- **Node.js** 20 LTS ou supérieur
- **npm** 10 ou supérieur
- **Git**

```bash
node -v
npm -v
```

> Ce dépôt n'a pas besoin de PostgreSQL ni de Docker : il consomme l'API du
> backend via HTTP. Pour un développement complet, démarrer aussi le backend
> (voir son propre README).

---

## Cloner le projet

```bash
git clone <URL_DU_DEPOT_FRONTEND> god-favor-frontend
cd god-favor-frontend
```

---

## Configuration (.env)

Créer un fichier `.env` à la racine du projet :

```bash
VITE_API_URL=http://localhost:3000/api/v1
```

⚠️ Vite n'expose que les variables préfixées par `VITE_`. Le fichier `.env`
n'est jamais versionné (voir `.gitignore`).

---

## Installation des dépendances

```bash
npm install
```

Dépendances principales déjà incluses dans `package.json` :
```bash
react-router-dom axios @tanstack/react-query
react-i18next i18next i18next-browser-languagedetector
react-hook-form zod @hookform/resolvers
react-player lucide-react zustand
tailwindcss postcss autoprefixer
```

---

## Démarrer l'application

```bash
npm run dev
```

Application disponible sur : `http://localhost:5173`

> Le backend doit être démarré au préalable (`http://localhost:3000`) pour
> que les appels API fonctionnent en développement — voir le README du
> dépôt `god-favor-backend`.

---

## Tests

```bash
npm run test         # exécute tous les tests une fois
npm run test:watch   # tests en mode watch (développement)
```

Les tests utilisent :
- **Vitest** comme exécuteur de tests
- **Testing Library** pour tester les composants comme un utilisateur les
  utiliserait (recherche par rôle/texte visible, pas par implémentation)
- **MSW (Mock Service Worker)** pour intercepter et simuler les appels API,
  afin de tester le frontend indépendamment du backend réel

Exemple de structure de test :
```
src/components/common/Header.tsx
src/components/common/Header.test.tsx
```

Pour écrire un nouveau test de composant, utiliser le wrapper commun
`renderWithProviders` (fournit Router, React Query et i18n) :
```ts
import { renderWithProviders } from "../../test/utils/renderWithProviders";
```

---

## Qualité de code

```bash
npm run lint       # analyse et corrige automatiquement le code (ESLint)
npm run format     # applique le formatage Prettier
```

**Husky** exécute automatiquement le lint sur les fichiers modifiés avant
chaque commit (`.husky/pre-commit`) — aucune action manuelle requise.

**CodeRabbit** analyse automatiquement chaque Pull Request ouverte sur
GitHub/GitLab (configuration dans `.coderabbit.yaml`). Rien à lancer en
local.

---

## Build de production

```bash
npm run build       # génère les fichiers statiques optimisés dans dist/
npm run preview     # prévisualise le build de production en local
```

Le contenu de `dist/` est ensuite servi par le reverse proxy / CDN de
production (voir `Architecture_Systeme_GodFavorSolution_v1.docx`).

---

## Pages de l'application

| Espace | Pages principales |
|---|---|
| Public | Accueil, Services de voyage, Catalogue de cours, Guide de voyage, Blog, Inscription, Connexion, Contact |
| Apprenant | Tableau de bord, Mes cours, Leçon (texte/vidéo), Évaluation de niveau, Profil, Attestations |
| Enseignant | Tableau de bord, Mes cours (gestion), Ajout de contenu, Gestion des évaluations, Profil |
| Administrateur | Tableau de bord, Utilisateurs, Cours, Inscriptions, Blog, Guide, Traductions, Paramètres |

Détail complet des routes : voir `Sitemap_GodFavorSolution_v1.docx`.

---

## Internationalisation

Le site est disponible en **français** (langue par défaut), **anglais** et
**allemand**, gérés via `react-i18next`. La langue est déterminée dans
l'ordre : choix explicite de l'utilisateur → langue du navigateur → français
par défaut. Fichiers de traduction : `src/i18n/fr.json`, `en.json`, `de.json`.

---

## Contribution

1. Créer une branche depuis `main` : `git checkout -b feature/nom-de-la-fonctionnalite`
2. Développer, en respectant le lint (vérifié automatiquement au commit)
3. Ajouter/mettre à jour les tests correspondants (`.test.tsx`)
4. Pousser la branche et ouvrir une Pull Request
5. Attendre la revue CodeRabbit et la validation de l'équipe avant fusion