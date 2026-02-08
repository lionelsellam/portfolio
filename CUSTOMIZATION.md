# 🎨 GUIDE DE PERSONNALISATION RAPIDE

## ⚡ CHANGEMENTS LES PLUS IMPORTANTS (5 MINUTES)

Tout se passe dans **UN SEUL FICHIER** : `app/page.tsx`

### 1️⃣ TON NOM ET TITRE (Ligne 72-76)

```tsx
<h1 className="text-5xl md:text-7xl font-bold mb-4">TON NOM ICI</h1>
<h2 className="text-2xl md:text-3xl font-light mb-6">TON TITRE</h2>
<p className="text-lg text-gray-300 mb-8">Ta description courte</p>
```

### 2️⃣ TES COMPÉTENCES (Ligne 10-15)

```tsx
const skills = {
  Languages: ['Python', 'JavaScript', 'Java'], // Remplace par les tiennes
  Frameworks: ['React', 'Next.js', 'Angular'], // Remplace par les tiennes
  'Data & Tools': ['MongoDB', 'Git', 'VS Code'], // Remplace par les tiennes
  OS: ['Windows', 'Linux', 'macOS'],
}
```

### 3️⃣ TES PROJETS (Ligne 25-42)

```tsx
const projects = [
  {
    title: 'NOM DU PROJET 1',
    description: 'Description de ton projet...',
    image: '/project1.jpg', // Optionnel
    tags: ['React', 'Node.js', 'MongoDB'], // Technologies utilisées
    link: 'https://ton-lien.com', // ou '#' si pas de lien
  },
  // Duplique ce bloc pour ajouter plus de projets
]
```

### 4️⃣ TON EMAIL (Ligne 333)

```tsx
<a href="mailto:TON-EMAIL@example.com">TON-EMAIL@example.com</a>
```

### 5️⃣ TA BIO (Ligne 110-135)

Remplace les 4 paragraphes par ta propre histoire :
```tsx
<p>
  Ton premier paragraphe...
</p>
<p>
  Ton deuxième paragraphe...
</p>
```

---

## 🎨 PERSONNALISATION AVANCÉE

### Changer les couleurs

**Fichier : `tailwind.config.js`**

```js
colors: {
  primary: '#2563eb',    // Change cette couleur
  secondary: '#1e40af',  // Change cette couleur
}
```

**Palette suggestions :**
- Bleu : `#2563eb` (actuel)
- Vert : `#10b981`
- Violet : `#8b5cf6`
- Orange : `#f97316`
- Rouge : `#ef4444`

### Modifier la navigation (Ligne 57-63)

Ajoute ou supprime des liens :
```tsx
<a href="#about">About</a>
<a href="#skills">Skills</a>
<a href="#projects">Projects</a>
<a href="#contact">Contact</a>
<a href="#blog">Blog</a> {/* Nouveau lien */}
```

### Changer la police

**Fichier : `app/globals.css`** (Ligne 4)

```css
@import url('https://fonts.googleapis.com/css2?family=TA-POLICE:wght@300;400;500;600;700;800&display=swap');
```

Puis ligne 18 :
```css
font-family: 'TA-POLICE', sans-serif;
```

**Polices recommandées :**
- Inter (actuelle - moderne)
- Poppins (friendly)
- Roboto (neutre)
- Montserrat (élégante)

---

## 🖼️ AJOUTER DES IMAGES

### 1. Image de fond Hero

**Étape 1 :** Place ton image dans le dossier `public/` (ex: `hero.jpg`)

**Étape 2 :** Modifie la ligne 64-67 dans `app/page.tsx` :

**Avant :**
```tsx
<div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
  <div className="absolute inset-0 bg-black/40"></div>
</div>
```

**Après :**
```tsx
<div className="absolute inset-0">
  <img 
    src="/hero.jpg" 
    alt="Background" 
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black/50"></div>
</div>
```

### 2. Ta photo dans About

**Ligne 144-152** - Remplace par :
```tsx
<div className="relative h-96 rounded-lg overflow-hidden">
  <img 
    src="/photo-profil.jpg" 
    alt="Lionel S." 
    className="w-full h-full object-cover"
  />
</div>
```

### 3. Images des projets

Dans le tableau `projects`, change `image: '/project1.jpg'` par le chemin de ton image.

Les images doivent être dans le dossier `public/`.

---

## 📧 FORMULAIRE DE CONTACT FONCTIONNEL

### Option 1 : Formspree (Le plus simple)

1. Va sur [formspree.io](https://formspree.io)
2. Crée un compte gratuit
3. Crée un nouveau formulaire
4. Copie l'endpoint

5. Dans `app/page.tsx`, ligne 282, modifie :
```tsx
<form onSubmit={handleSubmit} ...>
```

Par :
```tsx
<form action="https://formspree.io/f/TON-ID" method="POST" className="space-y-4">
```

### Option 2 : EmailJS

1. Va sur [emailjs.com](https://emailjs.com)
2. Configure ton service
3. Utilise leur SDK React

---

## 🎯 AJOUTER/SUPPRIMER DES SECTIONS

### Ajouter une section "Expérience"

Après la section Skills, ajoute :

```tsx
{/* Experience Section */}
<section id="experience" className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-4xl font-bold mb-12">Expérience</h2>
    
    <div className="space-y-8">
      <div className="border-l-4 border-blue-600 pl-6">
        <h3 className="text-xl font-bold">Poste 1</h3>
        <p className="text-gray-600">Entreprise • 2023-2024</p>
        <p className="mt-2 text-gray-700">Description du poste...</p>
      </div>
      
      {/* Duplique ce bloc pour plus d'expériences */}
    </div>
  </div>
</section>
```

N'oublie pas d'ajouter le lien dans la nav !

### Supprimer une section

Supprime simplement le bloc `<section>...</section>` correspondant.

---

## 🚀 OPTIMISATION POUR LE DÉPLOIEMENT

### Avant de déployer :

**1. Vérifie les liens**
- [ ] Liens sociaux (GitHub, LinkedIn)
- [ ] Email de contact
- [ ] Liens des projets

**2. Optimise les images**
- [ ] Compresse les images (max 500KB par image)
- [ ] Utilise le format WebP si possible
- [ ] Dimensions adaptées (hero: 1920x1080, projets: 800x600)

**3. Test responsive**
- [ ] Mobile (375px)
- [ ] Tablette (768px)
- [ ] Desktop (1920px)

**4. SEO de base**

Dans `app/layout.tsx`, modifie :
```tsx
export const metadata: Metadata = {
  title: 'TON NOM | TON TITRE',
  description: 'TA DESCRIPTION POUR GOOGLE',
}
```

---

## 💡 ASTUCES PRO

### 1. Ordre des sections

L'ordre actuel est optimal :
1. Hero (première impression)
2. About (qui es-tu)
3. Skills (compétences)
4. Projects (preuves)
5. Contact (action)

### 2. Longueur des textes

- **Hero** : 1 phrase max
- **About** : 3-4 paragraphes
- **Description projet** : 2-3 phrases
- **Skills** : Pas de description (juste le nom)

### 3. Nombre d'éléments

- **Projects** : 2-6 projets (les meilleurs)
- **Skills** : 15-25 compétences
- **Rôles cibles** : 2-4 rôles

### 4. Animations

Les animations sont déjà configurées. Si tu veux les désactiver, supprime :
```tsx
initial="hidden"
whileInView="visible"
viewport={{ once: true }}
variants={fadeInUp}
```

---

## 🎨 EXEMPLES DE MODIFICATIONS

### Exemple 1 : Changer en vert

**tailwind.config.js :**
```js
primary: '#10b981',
secondary: '#059669',
```

**app/page.tsx** (ligne 171, 172, etc.) :
Remplace `blue-600` par `green-600` partout.

### Exemple 2 : Ajouter un badge "Disponible"

Ligne 71, ajoute :
```tsx
<div className="inline-block px-4 py-2 bg-green-500 text-white rounded-full text-sm mb-6">
  ✓ Disponible pour de nouveaux projets
</div>
```

### Exemple 3 : Section avec timeline

```tsx
<div className="space-y-6">
  {[
    { year: '2024', text: 'Diplôme en Informatique' },
    { year: '2023', text: 'Développeur Full Stack' },
  ].map(item => (
    <div key={item.year} className="flex gap-4">
      <div className="font-bold text-blue-600 w-20">{item.year}</div>
      <div className="text-gray-700">{item.text}</div>
    </div>
  ))}
</div>
```

---

## 📊 CHECKLIST FINALE

Avant de déployer :

- [ ] Toutes les infos personnelles sont correctes
- [ ] Les liens fonctionnent
- [ ] Les images s'affichent
- [ ] Pas de fautes d'orthographe
- [ ] Formulaire de contact configuré
- [ ] Testé sur mobile
- [ ] Metadata SEO à jour
- [ ] Couleurs cohérentes

---

**C'est prêt ! Tu peux déployer sur Vercel ! 🚀**
