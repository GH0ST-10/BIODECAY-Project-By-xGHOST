# BIODECAY — React Web App

> **A Project By xGHOST**  
> An immersive zombie apocalypse survival modpack for Minecraft 1.20.1 on Forge.

This project is a modern, modular **React + TypeScript + Vite + React Router** web application converted from the BIODECAY landing page, featuring multi-page routing and deep SEO optimization.

---

## ⚡ Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Start local development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production
```bash
npm run build
```
The compiled, production-ready static assets will be in the `dist/` directory.

### 4. Preview production build
```bash
npm run preview
```

---

## 🧭 Multi-Page Routes

1. **`/` (Home)**: The complete landing page featuring the Hero, Hazard tape banners, About section, Features field manual, 3-step Deployment overview, Supply Drop (Download), Community channels, and interactive deep-dive links.
2. **`/about` (About)**: Detailed outbreak lore, contagion timeline, design philosophy (*Cohesion Over Bloat*), full modpack technical specifications sheet, and interactive debriefing FAQ.
3. **`/features` (Features)**: In-depth tactical field manual breaking down the 6 core gameplay pillars (Infected AI, Procedural Scavenging, Fortifications & Electrical Grids, Environmental Biohazards, Calibrated Firearms & Crafting, Total Immersion) plus xGHOST's early-game survival rules.
4. **`/install` (Install)**: Comprehensive deployment walkthrough featuring interactive tabs for **Prism Launcher / MultiMC**, **CurseForge**, **Modrinth**, and **Official Minecraft Launcher**, complete hardware requirements matrix, JVM argument presets, and troubleshooting fixes.
5. **`/community` (Community)**: Global survivor communications hub with direct YouTube and Discord cards, community roles/squads (Vanguard Scouts, Enclave Engineers, Field Medics, Scavengers), bug reporting guidelines, and enclave rules.

---

## 🔍 SEO Optimization Features

- **Dynamic Head Metadata (`SEO.tsx`)**: Reactive updates to `document.title`, `<meta name="description">`, keywords, canonical link tags, and robots directives per route.
- **Open Graph & Twitter Cards**: High-impact social media embeds with rich preview images, titles, and card configurations.
- **Schema.org Structured Data (JSON-LD)**:
  - `/`: `VideoGame` / `SoftwareApplication` schema
  - `/about`: `AboutPage` & `FAQPage` schema
  - `/features`: `ItemList` with feature breakdown
  - `/install`: `HowTo` schema with explicit installation steps
  - `/community`: `CommunityPage` & `Organization` schema
- **Search Engine Discovery**: `sitemap.xml` and `robots.txt` automatically bundled in `public/`.
- **Semantic HTML**: Strict heading hierarchies (`h1`, `h2`, `h3`, `h4`), semantic tags (`<main>`, `<article>`, `<header>`, `<footer>`, `<aside>`, `<nav>`), and accessible attributes.

---

## ⚙️ How to Configure the Download Link

When the BIODECAY modpack is ready for release, edit **`src/config/downloadConfig.ts`**:

```typescript
export const DOWNLOAD_CONFIG = {
  url: "https://archive.org/download/biodecay-v1/BIODECAY-v1.0.0.zip",
  version: "v1.0.0",
  size: "1.2 GB"
};
```

- When `url` is empty (`""`):
  - Download buttons automatically show **"Download coming soon"** (disabled state).
  - Clicking prompts users to join Discord for release announcements.
- When `url` is set to an `http(s)://` link:
  - Download buttons immediately switch to active **"Download BIODECAY"** buttons.
  - Direct download triggers without page redirects.
  - Displays version & file size metadata.
  - Toast alert triggers with instant retry link.
