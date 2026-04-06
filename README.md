<div align="center">

<!-- HERO BANNER -->
<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=FFE600&height=200&section=header&text=LITHIUM%202K26&fontSize=72&fontColor=0a0a0a&fontAlignY=38&desc=BEYOND%20THE%20VEIL%20·%20Official%20Fest%20Website&descAlignY=58&descSize=18&descColor=0a0a0a&animation=fadeIn" />

<br/>

<!-- BADGES ROW -->
<p>
  <img src="https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Vite-5.x-FFD62E?style=for-the-badge&logo=vite&logoColor=black" />
  <img src="https://img.shields.io/badge/CSS3-Heavy_Animations-E8192C?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/Theme-Beyond_The_Veil-FF2D87?style=for-the-badge" />
  <img src="https://img.shields.io/badge/College-Techno_Bengal-00D4FF?style=for-the-badge" />
</p>

<p>
  <img src="https://img.shields.io/badge/Status-Live-00FF88?style=flat-square&logo=statuspage&logoColor=black" />
  <img src="https://img.shields.io/badge/Mobile-Responsive-FFE600?style=flat-square" />
  <img src="https://img.shields.io/badge/Spider--Verse-Inspired-E8192C?style=flat-square" />
  <img src="https://img.shields.io/badge/Made%20with-Love%20%E2%99%A5-FF2D87?style=flat-square" />
</p>

<br/>

> ### 🕷️ *"Step into any universe. Wear any face. Become the legend."*

<br/>

</div>

---

<div align="center">

## ⚡ LITHIUM 2K26 — Annual Cultural Festival

**Techno Bengal Institute of Technology** | April 28, 2026 | Laban Hrad Mancha BD Auditorium, Kolkata

The official website for **LITHIUM 2K26**, the grand annual cultural festival of Techno Bengal Institute of Technology. Built with a cinematic **Spider-Verse / Comic Book** aesthetic — bold, vibrant, and alive with heavy CSS animations across every section.

</div>

---

<br/>

## 🎨 Design Philosophy

<table>
<tr>
<td width="50%">

### Visual Identity
- **Theme:** Beyond The Veil — a multiverse of characters
- **Primary Color:** `#FFE600` — Electric Yellow  
- **Accent Colors:** `#E8192C` Red · `#00D4FF` Cyan · `#FF2D87` Pink
- **Typography:** `Bangers` (display) + `Nunito` (body)
- **Aesthetic:** Spider-Verse comic book · Halftone · Ink lines

</td>
<td width="50%">

### Animation Philosophy
- CSS-only star field with **180 twinkling stars**
- **22 shooting meteors** diagonal across screen
- 3D tilt on event cards via mouse tracking
- Pendulum oscillation on Spider-Man hang
- Cinematic slam panels on intro exit

</td>
</tr>
</table>

---

<br/>

## 🗂️ Project Structure

```
lithium-2k26/
│
├── public/
│   └── assets/
│       ├── logos/          ← College logos (3 files)
│       ├── chars/          ← Character PNGs (Miles, Pirate, etc.)
│       ├── gallery/        ← Event photos
│       └── spiderman-hang.png
│
├── src/
│   ├── components/         ← Reusable components
│   │   ├── Intro.jsx       ← Cinematic preloader
│   │   ├── Navbar.jsx      ← Floating nav + drawer
│   │   ├── EventCard.jsx   ← Comic book event cards
│   │   ├── SpiderHang.jsx  ← Hanging Spider-Man
│   │   ├── StarField.jsx   ← CSS star field system
│   │   └── FloatChar.jsx   ← Reusable float character
│   │
│   ├── sections/           ← Page sections
│   │   ├── Hero.jsx        ← Full hero with logo strip
│   │   ├── Events.jsx      ← Yellow events grid
│   │   ├── Gallery.jsx     ← Polaroid fan carousel
│   │   ├── FAQ.jsx         ← Accordion FAQ
│   │   ├── Venue.jsx       ← Event venue info
│   │   ├── Contact.jsx     ← Contact form + socials
│   │   └── Footer.jsx      ← Cinematic star footer
│   │
│   ├── styles/             ← All CSS files
│   │   ├── global.css      ← Variables, fonts, scrollbar
│   │   ├── Hero.css
│   │   ├── Intro.css
│   │   ├── Navbar.css
│   │   ├── EventCard.css
│   │   ├── Events.css
│   │   ├── Gallery.css
│   │   ├── FAQ.css
│   │   ├── Venue.css
│   │   ├── Contact.css
│   │   ├── Footer.css
│   │   ├── StarField.css
│   │   ├── SpiderHang.css
│   │   ├── FloatChar.css
│   │   └── SiteCharacters.css
│   │
│   └── App.jsx             ← Root: Intro → Site flow
│
├── index.html
├── vite.config.js
└── package.json
```

---

<br/>

## 🚀 Getting Started

### Prerequisites

```bash
node >= 18.x
npm  >= 9.x
```

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/lithium-2k26.git

# 2. Move into the project
cd lithium-2k26

# 3. Install dependencies
npm install

# 4. Start dev server
npm run dev
```

The site will be live at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

---

<br/>

## 🧩 Components

<details>
<summary><b>🎬 Intro.jsx — Cinematic Preloader</b></summary>

<br/>

A full-screen preloader that runs before the site reveals.

**Features:**
- Spider-Man hanging from a CSS web thread — drops down from top with pendulum swing
- Pirate `🏴‍☠️` walks across the loading bar with a speech bubble that changes at each step
- Counter ticks up via `requestAnimationFrame` (no React re-render lag)
- Loading steps: *"Arr, setting sail!"* → *"All hands on deck!"* → *"Shiver me timbers!"*
- **Exit:** Two yellow/red panels slam from top and bottom — hold — then retreat

```jsx
// Usage in App.jsx
{!done && <Intro onDone={() => setDone(true)} />}
```

</details>

<details>
<summary><b>🌟 StarField.jsx — CSS Star System</b></summary>

<br/>

Pure CSS animated space background with 4 independent layers:

| Layer | Count | Effect |
|-------|-------|--------|
| Nebula orbs | 3 | Purple/blue/red radial blurs drifting |
| Twinkling stars | 180 | Random size/delay/color twinkle |
| Shooting meteors | 22 | Diagonal gradient trails at -35° |
| Sparkle crosses | 38 | CSS `::before` / `::after` cross shapes |

```jsx
import StarField from '../components/StarField';

// Drop inside any dark section
<StarField />
```

</details>

<details>
<summary><b>🕷️ SpiderHang.jsx — Hanging Spider-Man</b></summary>

<br/>

The uploaded Spider-Man image hangs from the top-right of the Hero section.

- Web thread grows down with a CSS gradient line
- Fan threads at the anchor point
- Pendulum oscillation: `rotate(-18deg ↔ +18deg)` with `ease-in-out`
- Glowing yellow `drop-shadow` synced to the swing
- Fully responsive — smaller on mobile

```jsx
<SpiderHang />
// Place inside <section> with position: relative
```

**To change the image:**
```
public/assets/spiderman-hang.png  ← replace this file
```

</details>

<details>
<summary><b>🎪 FloatChar.jsx — Reusable Floating Character</b></summary>

<br/>

A plug-and-play component for placing any no-background PNG character anywhere on the site.

```jsx
import FloatChar from '../components/FloatChar';

<FloatChar
  src="/assets/chars/miles.png"
  alt="Miles Morales"
  size={160}           // width in px
  bottom="8%"          // CSS position
  right="4%"
  animation="float"    // float | swing | bob | pulse
  glowColor="#FF2D87"  // drop-shadow color
  delay="0.5s"         // animation start delay
  flip={false}         // mirror horizontally
/>
```

| Animation | Description |
|-----------|-------------|
| `float` | Drifts up/down with tilt |
| `swing` | Pendulum side-to-side |
| `bob` | Small gentle bounce |
| `pulse` | Breathes in/out |

</details>

<details>
<summary><b>🃏 EventCard.jsx — Comic Book Cards</b></summary>

<br/>

Bold comic-panel-style cards with heavy CSS effects.

**Per-card features:**
- Hard offset block shadow (grows on hover)
- Halftone dot overlay pattern
- Speed lines in top-right corner
- 8-point spinning star burst behind icon
- Tag with neon glow animation
- Bottom bar slides in from left on hover
- Click press-down effect

**6 color themes** cycle automatically: Red · Black · Cyan · Yellow · Pink · Green

```jsx
<EventCard
  title="Cosplay Showdown"
  description="Best costume wins glory."
  icon="🦸"
  tag="Competition"
  index={4}
/>
```

</details>

<details>
<summary><b>🖼️ Gallery.jsx — Polaroid Fan Carousel</b></summary>

<br/>

A swipeable 3D fan carousel of polaroid photo cards.

- Cards fan out with `scale` + `rotate` based on distance from active
- Drag/swipe (mouse + touch) with 50px threshold
- Keyboard `←` `→` navigation
- Active card has a glint sweep animation
- Miles Morales bottom-left with web line shooting across screen
- Dot navigation with active card's accent color

**Adding photos:**
```js
const PHOTOS = [
  { 
    src: new URL('../assets/pic/img1.png', import.meta.url).href,
    caption: 'Your Caption',
    tag: 'Tag Name',
    color: '#E8192C',  // text color
    bg: '#FFE600',     // card background
  },
  // ...
];
```

</details>

<details>
<summary><b>🦸 SiteCharacters.css — Easter Egg Characters</b></summary>

<br/>

Hidden animated characters placed across every section of the site.

| Section | Character | Position |
|---------|-----------|----------|
| Navbar | 🕷️ Miles Morales | Under the hamburger |
| Hero | 👻 Ghost | Left edge, peeking in |
| Events | 🧙 Wizard | Bottom-left corner |
| Events | 🤖 Cyborg | Top-right corner |
| Gallery | 🏴‍☠️ Pirate | Bottom-right |
| FAQ | 🦹 Villain | Bottom-right |
| Venue | ⚔️ Knight | Bottom-left |
| Contact | 🧛 Vampire | Bottom-left |
| Contact | 🐉 Dragon | Top-right |
| Footer | 🐉 Dragon | Bottom-left |
| Footer | 🤖 Cyborg | Bottom-right |

All characters have: floating animation · hover scale · tooltip on hover · click burst effect

</details>

---

<br/>

## 🎭 Sections Overview

<table>
<tr>
<th>Section</th>
<th>Background</th>
<th>Key Features</th>
</tr>
<tr>
<td><b>Intro</b></td>
<td>Deep dark <code>#03000f</code></td>
<td>Spider-Man drop · Pirate loader · Slam exit</td>
</tr>
<tr>
<td><b>Navbar</b></td>
<td>Frosted glass</td>
<td>Spring drawer · Stagger links · Miles Easter egg</td>
</tr>
<tr>
<td><b>Hero</b></td>
<td>Dark <code>#020008</code></td>
<td>College logos · Star field · SpiderHang · Logo placeholder</td>
</tr>
<tr>
<td><b>Events</b></td>
<td>Yellow <code>#FFE600</code></td>
<td>Comic cards · 3D tilt · Halftone · Spinning burst</td>
</tr>
<tr>
<td><b>Gallery</b></td>
<td>Yellow <code>#FFE600</code></td>
<td>Polaroid fan carousel · Miles + web line · Swipe</td>
</tr>
<tr>
<td><b>FAQ</b></td>
<td>Yellow <code>#FFE600</code></td>
<td>Accordion · Comic borders · Slide animation</td>
</tr>
<tr>
<td><b>Venue</b></td>
<td>Dark <code>#111111</code></td>
<td>Map embed · Info card · Knight Easter egg</td>
</tr>
<tr>
<td><b>Contact</b></td>
<td>Dark <code>#111</code></td>
<td>Form · Socials · Vampire + Dragon Easter eggs</td>
</tr>
<tr>
<td><b>Footer</b></td>
<td>Deep dark <code>#020008</code></td>
<td>Star field · Typewriter · Animated name · Character parade</td>
</tr>
</table>

---

<br/>

## 🎨 Color Palette

<div align="center">

| Color | Hex | Role |
|:------|:----|:-----|
| 🟡 Electric Yellow | `#FFE600` | Primary · Sections bg · Highlights |
| 🔴 Comic Red | `#E8192C` | Accents · 2K26 · Danger |
| 🔵 Cyber Cyan | `#00D4FF` | Intel card · Info · Glow |
| 🟣 Spider Pink | `#FF2D87` | Miles · Cosplay · Accents |
| 🟢 Access Green | `#00FF88` | Status dot · Confirmed |
| ⚫ Ink Black | `#0a0a0a` | Borders · Shadows · Text |
| 🌌 Deep Space | `#020008` | Dark section backgrounds |

</div>

---

<br/>

## 📦 Tech Stack

<div align="center">

| Technology | Version | Purpose |
|:-----------|:--------|:--------|
| **React** | 18.x | UI framework |
| **Vite** | 5.x | Build tool + dev server |
| **CSS3** | — | All animations (no animation library) |
| **Google Fonts** | — | Bangers + Nunito |
| **IntersectionObserver** | Web API | Scroll-triggered reveals |
| **RequestAnimationFrame** | Web API | Smooth counter + cursor |

> **Zero animation libraries used.** Every animation — stars, meteors, pendulum swing, 3D tilt, slam panels — is pure CSS and vanilla JS.

</div>

---

<br/>

## 🗺️ Roadmap

- [x] Cinematic intro preloader with Spider-Man + Pirate
- [x] Full CSS star field (stars · meteors · sparkles · nebulas)
- [x] Spider-Man hanging from web in Hero
- [x] Comic book event cards with halftone + 3D tilt
- [x] Polaroid fan gallery carousel with drag/swipe
- [x] College logo strip in Hero
- [x] Logo placeholder (ready for real logo upload)
- [x] Miles Morales in Gallery with web line
- [x] Easter egg characters across all sections
- [x] Animated name (PUSKAR NATH) in Footer
- [x] Fully responsive — mobile + tablet + desktop
- [ ] Real logo upload → replace placeholder
- [ ] Contact form backend integration
- [ ] Social media links update
- [ ] Performance audit + lazy loading images

---

<br/>

## 📸 Asset Checklist

Before going live, make sure these files are in place:

```
public/assets/
│
├── spiderman-hang.png          ✅ Spider-Man hanging image
│
├── logos/
│   ├── college-logo-1.png      ⬜ Techno Main Campus logo
│   ├── college-logo-2.png      ⬜ Techno Bengal logo
│   └── college-logo-3.png      ⬜ MAKAUT logo
│
├── chars/
│   ├── miles.png               ⬜ Miles Morales (no bg)
│   ├── pirate.png              ⬜ Pirate character (no bg)
│   ├── wizard.png              ⬜ Wizard character (no bg)
│   └── villain.png             ⬜ Villain character (no bg)
│
├── gallery/
│   ├── img1.png                ⬜ Opening Ceremony
│   ├── img2.png                ⬜ Dance Performance
│   ├── img3.png                ⬜ Ultra Music
│   ├── img4.jpg                ⬜ Cultural
│   ├── img5.png                ⬜ The RoadMap
│   └── img6.png                ⬜ Host
│
└── logo.png                    ⬜ LITHIUM 2K26 official logo
```

---

<br/>

## ⚙️ Customization Guide

### Change event date
In `Hero.jsx` → find `APR' 25` → update to your date.

### Add/remove floating tags in Hero
```js
const FLOATING_TAGS = [
  { text: 'DANCE', x: '72%', y: '20%', rotate: '-6deg', color: '#FFE600' },
  // add more here
];
```

### Add a floating character to any section
```jsx
import FloatChar from '../components/FloatChar';

// Inside any <section>:
<FloatChar
  src="/assets/chars/yourchar.png"
  size={140}
  bottom="5%"
  left="3%"
  animation="bob"
  glowColor="#FFE600"
/>
```

### Swap the logo placeholder
In `Hero.jsx` find the `lph-icon-wrap` block and replace with:
```jsx
<img src="/assets/logo.png" alt="LITHIUM 2K26" className="lph-img" />
```

### Update social links
In `Footer.jsx` → find `SOCIALS` array → update `href` values.  
In `Contact.jsx` → find `SOCIALS` array → update `href` values.

---

<br/>

## 🤝 Contributing

This is a college fest website but contributions, suggestions and improvements are welcome!

```bash
# Fork → Clone → Branch → PR
git checkout -b feature/your-feature-name
git commit -m "feat: add your feature"
git push origin feature/your-feature-name
```

---

<br/>

## 👨‍💻 Built By

<div align="center">

<br/>

**PUSKAR NATH**  
*& Team LITHIUM*

<br/>

*Techno Bengal Institute of Technology*  
*Cultural Committee · 2026*

<br/>

<img src="https://capsule-render.vercel.app/api?type=waving&color=E8192C&height=100&section=footer&text=BEYOND%20THE%20VEIL&fontSize=24&fontColor=FFE600&fontAlignY=65&animation=fadeIn" width="100%"/>

</div>

---

<div align="center">

<sub>Made with ♥ and a lot of CSS · LITHIUM 2K26 · Techno Bengal</sub>

</div>
