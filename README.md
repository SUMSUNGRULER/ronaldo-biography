# CR7 — Cristiano Ronaldo Biography

A complete, interactive biography website about Cristiano Ronaldo, built as a GitHub portfolio project. Designed to feel like a high-quality sports documentary — modern, dark-themed, and cinematic.

## About the Project

This site covers the full career and legacy of Cristiano Ronaldo dos Santos Aveiro — from his childhood in Funchal, Madeira, through six professional clubs across four countries, to his all-time records in international football. Every statistic is sourced from UEFA, FIFA, and official club records.

**No copyrighted player images are used.** All visuals are original CSS — gradients, geometric shapes, Portugal flag colours (red/green), football field silhouettes, and the iconic number "7".

---

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| **React** | 18 | Component framework |
| **TypeScript** | 5 | Type safety |
| **Vite** | 5 | Build tool & dev server |
| **Tailwind CSS** | 3.4 | Utility-first styling |
| **PostCSS** | 8 | CSS processing |

---

## Features

- Full-viewport hero with animated "7" watermark and parallax mouse effect
- Animated counter stats (requestAnimationFrame, triggered on scroll)
- Vertical alternating timeline (desktop) / single-column (mobile)
- Eight major career events with impact analysis
- Honours & records grid — gold highlighting for Ballon d'Or entries
- Four-pillar legacy section with detailed breakdowns
- Sticky navbar with active section highlighting
- Mobile-first responsive design
- Smooth scroll throughout
- Intersection Observer–driven reveal animations
- Custom scrollbar styling
- Cited sources with type badges

---

## Project Structure

```
src/
├── main.tsx                 # React entry point
├── App.tsx                  # Root layout + footer + scroll observer
├── index.css                # Tailwind base + custom animations
├── data/
│   ├── timeline.ts          # Club career data with TypeScript interfaces
│   ├── honors.ts            # Awards and trophies by category
│   ├── stats.ts             # Key career statistics
│   ├── events.ts            # Eight defining career moments
│   └── sources.ts           # Bibliography / references
└── components/
    ├── Navbar.tsx           # Sticky nav with active section tracking
    ├── Hero.tsx             # Full-viewport hero + stats strip
    ├── Biography.tsx        # Long-form biographical text sections
    ├── StatsCards.tsx       # Animated counter cards
    ├── Timeline.tsx         # Alternating vertical timeline
    ├── MajorEvents.tsx      # Eight major career events
    ├── Honors.tsx           # Awards grid with gold highlighting
    ├── Legacy.tsx           # Four legacy pillars + closing quote
    └── Sources.tsx          # Cited sources + project credits
```

---

## Run Locally

```bash
# Clone the repo
git clone https://github.com/yourusername/ronaldo-biography.git
cd ronaldo-biography

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Build for Production

```bash
npm run build
```

Built files are output to `dist/`.

---

## Deploy to GitHub Pages

1. Install the GitHub Pages deploy helper:
   ```bash
   npm install -D gh-pages
   ```

2. Add to `package.json` scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. Ensure `vite.config.ts` has the correct base:
   ```ts
   base: '/ronaldo-biography/'
   ```

4. Run:
   ```bash
   npm run deploy
   ```

5. In your GitHub repo settings → Pages → set source to `gh-pages` branch.

---

## Design Decisions

- **Colour palette:** Near-black background (#0a0a0a), Portugal red (#dc2626) and green (#16a34a) accents, gold (#f59e0b) for trophies
- **Typography:** Inter (Google Fonts) — weights 300–900
- **No UI libraries:** Every component is hand-written with Tailwind utilities
- **No images:** All visuals use CSS gradients, geometric shapes, and emoji
- **Animations:** CSS keyframes + Intersection Observer + requestAnimationFrame counters

---

## Credits

**Made by Wei Wu · NYU Mathematics & Economics**

Built as a portfolio demonstration of React + TypeScript + Vite + Tailwind CSS proficiency.

All biographical content is based on publicly available information from UEFA, FIFA, club official websites, BBC Sport, The Guardian, ESPN, and other cited sources (see the Sources section of the website).

---

*This is an educational portfolio project. It is not affiliated with or endorsed by Cristiano Ronaldo, his management, or any club he has represented.*
