# Tradeious Global Trading Group — Website

A premium, multi-page static website for **Tradeious Global Trading Group**, featuring two business verticals: **FMCGIOUS** (Consumer Goods) and **Tyre Baba** (Automotive Trading).

## 🏗️ Project Structure

```
TRADIOUS_BRAND/
├── index.html              # Home page
├── about.html              # About Us
├── fmcgious.html           # FMCGIOUS - Consumer Goods vertical
├── tyre-baba.html          # Tyre Baba - Automotive vertical
├── contact.html            # Contact Us
├── inquiry.html            # Business Inquiry form
├── css/
│   └── styles.css          # Shared global stylesheet
├── js/
│   ├── tailwind.config.js  # Shared Tailwind design tokens
│   └── components.js       # Shared nav & footer (renders dynamically)
├── assets/
│   └── images/             # All locally-hosted images
├── package.json            # Project manifest & npm scripts
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+)

### Run Locally
```bash
npm start
```
This starts a local static server at `http://localhost:3000`.

### Quick Preview
```bash
npm run preview
```
Opens the browser and starts the server simultaneously.

## 🎨 Design System

The website follows a **"Sovereign Editorial"** design language:

| Token          | Value        | Usage                         |
|----------------|--------------|-------------------------------|
| Primary        | `#00346f`    | Brand anchors, CTAs           |
| Primary Container | `#004a99` | Gradient accents              |
| Tertiary       | `#631e00`    | FMCGIOUS accent color         |
| Inverse Surface | `#263143`   | Tyre Baba dark canvas         |
| Surface        | `#f9f9ff`    | Default page background       |

### Typography
- **Headlines**: Newsreader (serif)
- **Body**: Manrope (sans-serif)
- **Labels/Data**: Inter (sans-serif)

## 📄 Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero, company overview, business verticals, services |
| About | `about.html` | Company story, mission, global footprint |
| FMCGIOUS | `fmcgious.html` | Consumer goods vertical showcase |
| Tyre Baba | `tyre-baba.html` | Automotive/industrial trading vertical |
| Contact | `contact.html` | Contact form, HQ details, global map |
| Inquiry | `inquiry.html` | Detailed business inquiry form |

## 🛠️ Tech Stack

- **HTML5** — Semantic markup
- **Tailwind CSS** (CDN) — Utility-first styling with custom design tokens
- **Vanilla JavaScript** — Shared nav/footer components, no framework dependency
- **Google Fonts** — Newsreader, Manrope, Inter
- **Material Symbols** — Icon system

## 📦 Deployment

This is a static site. Deploy to any static host:
- **Netlify**: Drag-and-drop the project folder
- **Vercel**: `npx vercel`
- **GitHub Pages**: Push to a repo and enable Pages
