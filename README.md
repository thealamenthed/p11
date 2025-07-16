# Projet 11 -  Développez une application Web avec React et React Router

## 📋 Contexte

Kasa est une application web de location immobilière inspirée d’Airbnb. L’objectif est de proposer une plateforme moderne, responsive et accessible pour parcourir, visualiser et réserver des logements.

## 🎯 Objectifs pédagogiques

- Développer une application React structurée en composants réutilisables.
- Configurer et gérer la navigation avec **React Router**.
- Styliser l’application avec **SASS** pour une gestion avancée du CSS.
- Implémenter des **animations CSS** pour améliorer l'expérience utilisateur.
- Utiliser **Vite** pour initialiser et optimiser le projet.
- Travailler avec des données simulées via un fichier **JSON local**, en attendant le back-end.

**Client : Kasa**

Kasa est une entreprise française, leader dans la **location d’appartements entre particuliers**, existant depuis près de 10 ans.  
Le site initial avait été développé en **ASP.NET**, avec beaucoup de code legacy devenu difficile à maintenir.

La CTO, Laura, a décidé d’entamer une **refonte complète** du site avec une stack JavaScript moderne :
- **Node.js** pour le back-end (en cours de développement)
- **React** pour le front-end
- et un nouveau design Figma fourni par Paul, designer freelance.

En tant que **développeur front-end freelance**, votre mission a été :
- de démarrer le projet avec **Vite**,
- de développer tous les composants React et les pages,
- d'assurer la navigation avec **React Router**,
- de suivre strictement les maquettes Figma (design responsive),
- tout en utilisant des **données JSON simulées** en attendant l’API.

## 🎨 Design & [Maquettes](https://www.figma.com/design/2BZEoBhyxt5IwZgRn0wGsL/Kasa_FR?node-id=4-3&t=KxOnTlPcxAY8ZtKR-0/)
Le design responsive est basé sur les maquettes Figma fournies par Paul, designer freelance, avec animations CSS et respect des interactions attendues (ex: collapse, galerie).

---


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
