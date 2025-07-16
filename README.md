# Kasa - Application de location immobilière (React + Vite)

## Contexte

Kasa est une application web de location immobilière inspirée d’Airbnb, développée dans le cadre d’un projet front-end. L’objectif est de proposer une plateforme moderne, responsive et accessible pour parcourir, visualiser et réserver des logements.

## Fonctionnalités

- **Page d’accueil** : Liste de tous les logements disponibles avec images et tags
- **Page logement** : Vue détaillée avec carrousel d’images, informations sur l’hôte, notation, tags, sections déroulantes pour la description et les équipements
- **Page À propos** : Informations sur la plateforme avec des collapses animés
- **Page d’erreur 404** : Page personnalisée pour les routes inexistantes
- **Routage** : Navigation entre les pages avec React Router
- **Design responsive** : Adapté à tous les écrans (desktop et mobile)
- **Accessibilité** : Navigation clavier et attributs ARIA pour les composants interactifs
- **Animations** : Transitions douces pour les collapses et le carrousel

## Technologies utilisées

- [React](https://react.dev/) 19+
- [Vite](https://vitejs.dev/) 7+
- [SASS](https://sass-lang.com/) pour des styles modulaires et responsives
- [ESLint](https://eslint.org/) pour la qualité du code

## Structure du projet

- `src/components/` : Composants réutilisables (Header, Footer, Slideshow, Collapse, Star, etc.)
- `src/pages/` : Pages principales (Home, Logement, About, Error)
- `src/data/` : Données statiques JSON pour les logements
- `src/assets/` : Images, icônes et logos
- `src/App.jsx` : Point d’entrée principal de l’application

## Démarrage rapide

1. **Installer les dépendances**
   ```bash
   npm install
   ```
2. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```
3. **Ouvrir votre navigateur** à l’adresse [http://localhost:5173](http://localhost:5173)

## Gestion des erreurs & responsivité

- Toutes les routes inconnues redirigent vers une page 404 personnalisée.
- Le layout et tous les composants sont entièrement responsives et s’adaptent à toutes les tailles d’écran.
- L’application utilise des sections déroulantes (collapses) et un carrousel pour une expérience utilisateur moderne.

## Crédits

- Design inspiré du brief projet Kasa (OpenClassrooms)
- Icônes issues de [Material Icons](https://fonts.google.com/icons) et SVG personnalisés

---

N’hésitez pas à forker, contribuer ou utiliser ce projet comme base pour votre propre plateforme de location immobilière !
