# PromptCraft AI 🤖✨

> **Master the Art of Prompt Engineering** — A responsive, AI-themed web application that helps users craft better prompts through categorized templates, an interactive generator, and practical tips.

<br>

## 📌 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Design System](#-design-system)
- [Key Implementation Highlights](#-key-implementation-highlights)
- [Getting Started](#-getting-started)
- [What I Learned](#-what-i-learned)
- [Future Improvements](#-future-improvements)
- [Author](#-author)

---

## 🧠 Overview

**PromptCraft AI** is a fully static, single-page web application built as **DecodeLabs Full Stack Project 1**. It serves as an educational resource for users who want to communicate more effectively with AI tools like ChatGPT and Claude.

The project was built with a strict set of constraints and pillars:

- **Pillar 1 — Semantic HTML5:** Every element chosen for meaning, not just appearance. `<header>`, `<main>`, `<section>`, `<article>`, `<footer>` used correctly throughout.
- **Pillar 2 — 2025 Visual Design:** Warm, grounded aesthetics inspired by Pantone's *Mocha Mousse* palette — moving away from sterile, cold tech design.
- **Pillar 3 — Mobile-First CSS:** Base styles written for mobile, then progressively enhanced for tablet (768px) and desktop (1024px).

---

## ✅ Features

### Core Functionality
- **🎛️ Interactive Prompt Generator** — Select a category (Study, Coding, Writing, Business) and a difficulty level (Beginner, Intermediate, Advanced) to instantly generate a tailored prompt.
- **📋 One-Click Copy** — Copy any generated prompt to clipboard with visual feedback confirmation.
- **🌙 Dark Mode Toggle** — Persistent dark/light mode using `localStorage` so the preference survives page refreshes.
- **📱 Mobile Hamburger Menu** — Fully functional slide-in navigation for mobile viewports, toggled with JavaScript.
- **📬 Contact Form** — Client-side validated contact form with a submit confirmation.

### UX & Design
- **Floating Animated Bubbles** — CSS `@keyframes` float animation on the hero illustration for a lively, modern feel.
- **Hover Micro-interactions** — Cards lift on hover (`translateY`), nav links reveal an animated underline, buttons respond with elevation and shadow.
- **Animated Prompt Output** — The output box slides in smoothly with a `slideDown` CSS animation when a prompt is generated.
- **Accessible by Default** — `aria-label`, `aria-live`, `aria-expanded`, `role` attributes, and `.sr-only` utility class used throughout.

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| Structure | HTML5 (Semantic) | Document outline and accessibility |
| Styling | CSS3 (Custom Properties, Grid, Flexbox) | Layout, theming, responsiveness |
| Interactivity | Vanilla JavaScript (ES6+) | DOM manipulation, state management |
| Fonts | Google Fonts (Montserrat + Open Sans) | Typography — max 2 families, 3 weights |
| Storage | Web Storage API (`localStorage`) | Dark mode persistence |
| Clipboard | Clipboard API | One-click copy functionality |

> **No frameworks. No libraries. No build tools.** Pure HTML, CSS, and JavaScript — by design.

---

## 🎨 Design System

The visual identity is built on a **CSS Custom Properties (design token)** architecture. Every color, spacing value, shadow, and transition is defined once in `:root` and referenced everywhere else. Dark mode is implemented by overriding these tokens on a `.dark-mode` class — no duplicate rules needed.

### Color Palette

| Token | Hex | Role |
|---|---|---|
| `--mocha` | `#A5856F` | Primary accent — stability, warmth |
| `--blue` | `#A0D4E0` | Secondary accent — trust, clarity |
| `--grey` | `#F2F0EA` | Page background — refinement |
| `--dark` | `#2C2016` | Primary text |
| `--mid` | `#5a4a3a` | Secondary / muted text |

### Typography

| Family | Weights | Usage |
|---|---|---|
| `Montserrat` | 600, 700 | Headings (`h1`, `h2`, `h3`), Logo |
| `Open Sans` | 400, 500, 600 | Body text, Labels, Buttons |

Fluid typography via `clamp()`:
```css
h1 { font-size: clamp(2rem, 5vw, 3.5rem); }
h2 { font-size: clamp(1.5rem, 3vw, 2.25rem); }
```

### Spacing Scale

```
xs: 0.5rem  |  sm: 1rem  |  md: 1.5rem  |  lg: 2.5rem  |  xl: 4rem
```

---

## 🔍 Key Implementation Highlights

### 1. CSS Grid for Macro Layout, Flexbox for Micro Components
- **CSS Grid** handles full-page structural layouts (hero two-column, category grid, tips grid).
- **Flexbox** handles components (nav bar, button groups, card content alignment).

```css
/* Auto-responsive grid — no media queries needed */
.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: var(--space-md);
}
```

### 2. Dark Mode via CSS Custom Properties
Rather than writing duplicate rulesets, dark mode simply overrides the design tokens:

```css
.dark-mode {
  --bg:      #1e1a14;
  --surface: #2c2419;
  --text:    #f2f0ea;
  /* Everything else inherits automatically */
}
```

### 3. Prompt Data Architecture
Prompts are organized as a nested object — `category → difficulty → string`. This makes it trivially easy to add new categories or difficulty levels without touching any DOM logic.

```javascript
const prompts = {
  study:    { beginner: "...", intermediate: "...", advanced: "..." },
  coding:   { beginner: "...", intermediate: "...", advanced: "..." },
  writing:  { beginner: "...", intermediate: "...", advanced: "..." },
  business: { beginner: "...", intermediate: "...", advanced: "..." }
};
```

### 4. Mobile-First Responsive Strategy
Base styles are written for mobile. Complexity is *added* at larger breakpoints — never removed.

```css
/* Mobile: single column (default) */
.hero-grid { display: flex; flex-direction: column; }

/* Desktop: upgrade to CSS Grid */
@media (min-width: 1024px) {
  .hero-grid { display: grid; grid-template-columns: 1fr 1fr; }
}
```

---

## ⚡ Getting Started

No installation, no dependencies, no build step.

```bash
# 1. Clone the repository
git clone https://github.com/Alveena-Zafar/PromptCraft-AI_DecodeLabs.git

# 2. Navigate into the project
cd promptcraft-ai

# 3. Open in your browser
open index.html
```

Or simply drag `index.html` into any modern browser. That's it.

---

## 📖 What I Learned

Building this project reinforced several real-world front-end concepts:

- **CSS Custom Properties are a design system in disguise.** Defining tokens in `:root` and overriding them for dark mode is the same pattern used in large-scale design systems like Material Design and IBM Carbon.
- **`auto-fit` + `minmax()` is grid magic.** One line of CSS replaced three separate media query breakpoints for the category and tips grids.
- **`clamp()` makes fluid typography clean.** No more breakpoint-specific font sizes — one declaration handles the full range.
- **Semantic HTML is not optional.** Using `aria-live` on the generator output means screen readers announce new prompts automatically — a behavior that would have required JavaScript without it.
- **`localStorage` for lightweight state persistence** — no backend, no cookies, just a simple key-value store that survives page refreshes.

---

## 🔮 Future Improvements

- [ ] **Real AI Integration** — Connect the generator to the OpenAI or Claude API so prompts are generated dynamically rather than from a static object.
- [ ] **Prompt Library with Search** — A filterable, searchable library of curated prompts backed by `localStorage` or a simple JSON file.
- [ ] **Favourites System** — Allow users to save favourite generated prompts locally.
- [ ] **Share Button** — Generate a shareable URL that pre-selects category and difficulty.
- [ ] **Prompt Rating** — Thumbs up/down feedback stored in `localStorage` to surface the most-used prompts.
- [ ] **PWA Support** — Add a `manifest.json` and service worker to make the app installable.

---

## 👩‍💻 Author

**Alveena Zafar**

PromptCraft AI was designed and developed by Alveena Zafar as part of the DecodeLabs Full Stack Development Program (Batch 2026).

GitHub: https://github.com/Alveena-Zafar

---

## 📄 License

This project is licensed under the **MIT License** — feel free to fork, modify, and build on top of it.

---

<div align="center">

Made with ☕ and a lot of var(--mocha) by Alveena Zafar | DecodeLabs Full Stack Project 1

</div>
