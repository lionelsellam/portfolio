# Portfolio Lionel S. - Style Shoham

Portfolio moderne et minimaliste inspiré du design de Shoham Liebermann.

## 🎨 Caractéristiques

- ✨ Design propre et professionnel
- 🎬 Animations fluides avec Framer Motion
- 📱 100% Responsive
- 🎯 Navigation avec défilement doux
- 🔍 Section Skills avec filtres
- 📧 Formulaire de contact
- ⚡ Next.js 14 + TypeScript + Tailwind CSS

## 🚀 Démarrage Rapide

### Installation

```bash
npm install
```

### Développement

```bash
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000) dans ton navigateur.

### Build Production

```bash
npm run build
npm start
```

## 📝 Personnalisation

### 1. Informations personnelles

Dans `app/page.tsx`, modifie :

**Ligne 72-76** - Hero section :
```tsx
<h1>TON NOM</h1>
<h2>TON TITRE</h2>
<p>TA DESCRIPTION</p>
```

**Ligne 78-90** - Rôles cibles :
```tsx
<div>Backend</div>
<div>Frontend</div>
<div>Full-Stack</div>
```

### 2. Section About

**Ligne 110-135** - Modifie les 4 paragraphes avec ta propre bio.

### 3. Skills

**Ligne 10-15** - Modifie l'objet `skills` :
```tsx
const skills = {
  Languages: ['Tes langages...'],
  Frameworks: ['Tes frameworks...'],
  'Data & Tools': ['Tes outils...'],
  OS: ['Tes OS...'],
}
```

### 4. Projects

**Ligne 25-42** - Modifie le tableau `projects` :
```tsx
{
  title: 'Nom du projet',
  description: 'Description...',
  image: '/chemin/image.jpg',
  tags: ['Tag1', 'Tag2'],
  link: 'https://lien-projet',
}
```

### 5. Contact

**Ligne 333-335** - Modifie email et localisation :
```tsx
<a href="mailto:ton-email@example.com">ton-email@example.com</a>
<div>Ta ville/pays</div>
```

**Ligne 342-354** - Modifie les liens sociaux.

## 🖼️ Ajouter des images

### Image de fond Hero

1. Place ton image dans le dossier `public/`
2. Modifie la ligne 64 :
```tsx
<div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
```

Remplace par :
```tsx
<div className="absolute inset-0">
  <img src="/ton-image.jpg" alt="Hero" className="w-full h-full object-cover" />
  <div className="absolute inset-0 bg-black/40"></div>
</div>
```

### Photo About

Ligne 144-152 - Remplace le placeholder :
```tsx
<div className="relative h-96 rounded-lg overflow-hidden">
  <img src="/ta-photo.jpg" alt="Ton nom" className="w-full h-full object-cover" />
</div>
```

### Images des projets

Place tes images dans `public/` et modifie les chemins dans le tableau `projects`.

## 🎨 Personnaliser les couleurs

### Dans `tailwind.config.js` :

```js
colors: {
  primary: '#2563eb',    // Bleu principal
  secondary: '#1e40af',  // Bleu foncé
}
```

Change ces valeurs selon tes préférences !

### Dans `app/globals.css` :

Couleur de sélection (ligne 31) :
```css
::selection {
  background: #2563eb;  /* Ta couleur */
  color: white;
}
```

## 📦 Déploiement sur Vercel

### Méthode GitHub

1. Push ton code sur GitHub :
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TON-USERNAME/portfolio.git
git push -u origin main
```

2. Va sur [vercel.com](https://vercel.com)
3. "New Project" → Import ton repo
4. Deploy !

### Méthode CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

## 🎯 Structure du projet

```
portfolio-shoham-style/
├── app/
│   ├── globals.css      # Styles globaux
│   ├── layout.tsx       # Layout principal
│   └── page.tsx         # Page d'accueil (TOUT est ici)
├── public/              # Images et assets
├── next.config.js       # Config Next.js
├── tailwind.config.js   # Config Tailwind
└── package.json         # Dépendances
```

## ✨ Fonctionnalités

### Animations

Toutes les sections ont des animations au scroll grâce à Framer Motion.

### Filtres Skills

Clique sur les boutons pour filtrer les compétences par catégorie.

### Formulaire de contact

Le formulaire affiche un message de succès. Pour l'intégrer avec un vrai backend :

**Option 1 : Formspree (gratuit)**
```tsx
<form action="https://formspree.io/f/TON-ID" method="POST">
```

**Option 2 : EmailJS**
Intègre EmailJS pour envoyer des emails directement.

## 🐛 Troubleshooting

**Les animations ne fonctionnent pas ?**
- Assure-toi que `framer-motion` est installé
- Vérifie qu'il n'y a pas d'erreurs dans la console

**Le formulaire ne s'envoie pas ?**
- C'est normal, il faut intégrer un service comme Formspree

**Les images ne s'affichent pas ?**
- Vérifie que les chemins sont corrects
- Les images doivent être dans le dossier `public/`

## 📚 Technologies utilisées

- **Next.js 14** - Framework React
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React** - UI Library

## 🎓 Credits

Design inspiré du portfolio de [Shoham Liebermann](https://shoham-portfolio.vercel.app/)

---

**Créé avec ❤️ par Claude**
