# 🌳 Realm Walker Portfolio

> *"A legendary portfolio forged in the fires of the Nine Realms, inspired by God of War Ragnarök"*

[![Performance](https://img.shields.io/badge/Lighthouse-90%2B-gold)](https://developers.google.com/web/tools/lighthouse)
[![Responsive](https://img.shields.io/badge/Responsive-All%20Devices-blue)](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
[![Tech Stack](https://img.shields.io/badge/Tech-Modern%20%26%20Free-success)](https://github.com/yourusername/realm-walker)

## ✨ Overview

**Realm Walker** is an immersive, luxury portfolio website that transports visitors into the world of God of War Ragnarök. Instead of a traditional landing page, users experience a journey through the Nine Realms:

- 🚪 **Open a mystical door** to enter the World Tree
- 🌿 **Navigate Yggdrasil's branches** to explore different realms
- ⚔️ **Each section is a realm** with unique atmosphere and design
- 🤖 **Sindri the Dwarf** guides you as a 3D chatbot companion
- ✨ **Premium animations** inspired by Netflix, Tesla, and Apple

## 🗺️ Realm Map

| Realm | Section | Atmosphere |
|-------|---------|------------|
| 🌳 **Yggdrasil** | Main Page | The World Tree hub with mystical door |
| ✨ **Alfheim** | About Me | Light, ethereal, glowing portrait |
| 🏔️ **Jotunheim** | Experience | Ice, stone, ancient timeline |
| 🔨 **Svartalfheim** | Projects | Forge, embers, crafted artifacts |
| 🌿 **Vanaheim** | Research | Nature, growth, blooming knowledge |
| 🏛️ **Asgard** | Certifications | Golden halls, prestigious shields |
| ❄️ **Midgard** | Contact | Familiar, grounded, raven messenger |

## 🛠️ Tech Stack

| Technology | Purpose | Why |
|------------|---------|-----|
| **HTML5** | Structure | Semantic, accessible, SEO-friendly |
| **CSS3** | Styling | Custom properties, Grid, Flexbox, animations |
| **Vanilla JS (ES6+)** | Logic | Zero dependencies, maximum performance |
| **Three.js** | 3D Background | Lightweight particle systems & runes |
| **GSAP** | Animations | Smooth, hardware-accelerated transitions |
| **Google Fonts** | Typography | Cinzel (Nordic) + Inter (Modern) |
| **Canvas API** | Particles | Custom per-realm atmospheric effects |

**All technologies are FREE and open-source!**

## 📁 Project Structure

```
gow-portfolio/
├── index.html              # Main SPA entry point
├── css/
│   ├── style.css           # Core variables, base styles, loader, nav
│   ├── realms.css          # All realm-specific styles & responsive
│   └── sindri.css          # 3D Sindri chatbot styles
├── js/
│   ├── main.js             # Particles, loader, stats, utilities
│   ├── navigation.js       # Realm transitions, door mechanics
│   ├── sindri.js           # Chatbot AI, eye tracking
│   └── yggdrasil.js        # Three.js background scene
├── assets/
│   ├── images/             # Your photos & project screenshots
│   └── fonts/              # Custom fonts (optional)
└── README.md               # This file
```

## 🚀 Quick Start

### Step 1: Download & Extract

Download the project files and extract them to your desired location.

### Step 2: Customize Content

Open `index.html` and replace the placeholder content:

```html
<!-- About Section - Replace [Your Name] -->
<h3 class="about-name">[Your Name]</h3>
<p class="about-title">Legendary Developer & Realm Walker</p>

<!-- Experience Section - Update timeline items -->
<div class="timeline-item" data-year="2024">
  <h3>Your Job Title</h3>
  <p class="timeline-company">Your Company</p>
  <p class="timeline-desc">Your description...</p>
</div>

<!-- Projects Section - Update project cards -->
<div class="project-card" data-project="1">
  <h3>Your Project Name</h3>
  <p>Your project description...</p>
</div>

<!-- Contact Section - Update links -->
<a href="mailto:your.email@example.com">your.email@example.com</a>
<a href="https://github.com/yourusername">github.com/yourusername</a>
```

### Step 3: Add Your Photo

Replace the portrait placeholder in the About section:

```html
<div class="portrait-placeholder">
  <!-- Replace this SVG with your image -->
  <img src="assets/images/your-photo.jpg" alt="Your Name" 
       style="width:100%;height:100%;object-fit:cover;border-radius:50%;">
</div>
```

### Step 4: Test Locally

Open `index.html` in your browser:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

Then visit: `http://localhost:8000`

### Step 5: Deploy

#### Option A: GitHub Pages (Free)
1. Create a GitHub repository
2. Push your code
3. Go to Settings > Pages
4. Select "Deploy from a branch" → `main`
5. Your site will be live at `https://yourusername.github.io/repository-name`

#### Option B: Netlify (Free)
1. Go to [netlify.com](https://netlify.com)
2. Drag & drop your project folder
3. Get instant HTTPS deployment

#### Option C: Vercel (Free)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts

## 🎨 Customization Guide

### Changing Colors

Edit `css/style.css` CSS custom properties:

```css
:root {
  --gold-primary: #d4af37;    /* Change gold accent */
  --frost-primary: #64b5f6;   /* Change blue accent */
  --void-deep: #030508;       /* Change background */
}
```

### Adding a New Realm (Section)

1. **Add HTML** in `index.html`:
```html
<section id="newrealm" class="realm realm-newrealm" data-realm="newrealm">
  <div class="realm-bg newrealm-bg"></div>
  <div class="realm-content">
    <!-- Your content -->
  </div>
</section>
```

2. **Add CSS** in `css/realms.css`:
```css
.realm-newrealm {
  background: linear-gradient(...);
}
```

3. **Add Navigation** in `index.html` nav:
```html
<li><a href="#newrealm" data-realm="newrealm" class="nav-link">
  <span class="nav-rune-small">ᚾ</span> Realm Name
</a></li>
```

4. **Add to Yggdrasil hub**:
```html
<div class="realm-node" data-target="newrealm">
  <div class="node-glow"></div>
  <div class="node-icon">ᚾ</div>
  <span class="node-label">Realm Name<br><small>Section</small></span>
</div>
```

### Customizing Sindri's Responses

Edit `js/sindri.js`:

```javascript
this.responses = {
  greetings: [
    "Your custom greeting here!",
    "Another greeting option!"
  ],
  about: [
    "Custom response about your about section!"
  ]
  // Add more categories...
};
```

## ⚡ Performance Optimization

### Current Optimizations

- ✅ **Lazy loading** for sections
- ✅ **Hardware-accelerated** CSS animations
- ✅ **Optimized particles** (reduced on mobile)
- ✅ **Three.js** with frustum culling
- ✅ **Intersection Observer** for scroll animations
- ✅ **Preconnect** for Google Fonts
- ✅ **Minimal external dependencies**

### Lighthouse Score Targets

| Metric | Target | How |
|--------|--------|-----|
| Performance | 90+ | Optimized animations, lazy loading |
| Accessibility | 95+ | Semantic HTML, ARIA labels, contrast |
| Best Practices | 100 | Modern standards, HTTPS |
| SEO | 95+ | Meta tags, semantic structure |

### Tips for 90+ Performance

1. **Compress images** before adding to `assets/images/`
2. **Use WebP format** for photos
3. **Minify CSS/JS** for production (use tools like Terser, cssnano)
4. **Enable gzip** on your server
5. **Add a service worker** for caching

## 📱 Responsive Breakpoints

| Breakpoint | Devices | Adjustments |
|------------|---------|-------------|
| > 1024px | Desktop | Full layout, all effects |
| 768-1024px | Tablet | Simplified grid, reduced particles |
| < 768px | Mobile | Single column, hamburger nav |
| < 480px | Small Mobile | Compact spacing, minimal effects |

## 🎯 Key Features

### 🚪 Mystical Door
- CSS 3D transform door opening animation
- Runic symbols with flickering glow
- Hover effects with golden aura

### 🌳 Yggdrasil Navigation
- Animated tree trunk with pulse glow
- Branch nodes with hover transformations
- Smooth GSAP entrance animations

### ⚔️ Realm Transitions
- Bifrost-colored transition overlay
- Animated rune symbols
- Keyboard navigation (Arrow keys, Escape)

### 🤖 Sindri Chatbot
- CSS 3D animated dwarf character
- Eye tracking that follows mouse
- Context-aware responses per realm
- Typing indicator animation
- Suggestion buttons

### ✨ Atmospheric Effects
- Per-realm particle systems (Canvas 2D)
- Three.js floating runes and orbs
- Mouse-following glow effect
- Parallax background movement

## 🔧 Browser Support

| Browser | Support |
|---------|---------|
| Chrome | ✅ Full |
| Firefox | ✅ Full |
| Safari | ✅ Full |
| Edge | ✅ Full |
| Mobile Chrome | ✅ Full |
| Mobile Safari | ✅ Full |

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Credits

- **Inspiration**: God of War Ragnarök by Santa Monica Studio
- **Fonts**: [Cinzel](https://fonts.google.com/specimen/Cinzel) & [Inter](https://fonts.google.com/specimen/Inter)
- **Animations**: [GSAP](https://greensock.com/gsap/)
- **3D Graphics**: [Three.js](https://threejs.org/)

---

<p align="center">
  <strong>ᚦ Forged in the Nine Realms ᚦ</strong><br>
  <em>May your code be clean and your deployments smooth</em>
</p>
