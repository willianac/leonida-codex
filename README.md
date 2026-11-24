# Leonida Codex — Interactive GTA VI Discovery Archive

An interactive, community-verified **Grand Theft Auto VI** field archive built with **React 19, TypeScript, and Vite**. Designed initially around verified **Easter Eggs & Secrets** with step-by-step in-game walkthroughs, while architected from day one to expand into a complete multi-module Leonida companion platform.

## Key Features

- **Interactive Expandable Walkthroughs**: Every Easter egg features an accessible, smoothly animated accordion dossier (`How to Find`) detailing exact region/sub-location intel, time/weather conditions, protagonist notes, copyable keypad/phone codes, and numbered step-by-step instructions.
- **Live Step & Hunt Progress Tracking**: Check off individual steps (`Step 1`, `Step 2`, ...) as you follow along in-game, pin secrets to your **Hunt Route**, and track overall Leonida completion (`localStorage` persisted).
- **Spoiler Shield**: Protects surprise in-game payoffs behind a blur veil while keeping all navigation and trigger steps 100% readable.
- **Leonida Tactical Radar Map**: Stylized interactive SVG map of Leonida’s regions (*Vice City*, *Leonida Keys*, *Grassrivers*, *Port Gellhorn*, *Ambrosia*, *Mount Kalaga*, and *Offshore Waters*) with clickable sector polygons and live Easter egg pins.
- **Night & Daylight Themes**: Switch seamlessly between **Vice-Noir Night** and **Daylight Field Guide** palettes.
- **Deep-Linkable Guides**: Share direct URLs (`#egg-<slug>`) that automatically scroll to and expand a specific secret.

## Extensible Multi-Module Architecture

The codebase separates core discovery infrastructure from Easter-egg-specific fields so new modules can plug in cleanly:

- [`src/config/brand.ts`](./src/config/brand.ts) — Single source of truth for project naming, taglines, and localStorage namespace.
- [`src/types/atlas.ts`](./src/types/atlas.ts) — Shared `BaseDiscoveryEntry` schema extended by `EasterEggEntry` (and ready for `Collectibles`, `World Events`, `Codes & Safes`, `Myth Investigations`, and `Rare Spawns`).
- [`src/modules/registry.ts`](./src/modules/registry.ts) — Central `MODULE_REGISTRY` and `LEONIDA_REGIONS` definitions.
- [`src/data/easterEggs.ts`](./src/data/easterEggs.ts) — Verified GTA VI Easter eggs dataset with step-by-step guides and community source attributions.

## Development

```bash
npm install
npm run dev
```

## Production Build & Lint

```bash
npm run lint
npm run build
```
