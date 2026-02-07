# Private Practice Website – Design & Documentation Repository

Professional website for a private practice offering nutritional counseling and energetic healing services.

## Project Overview

This repository contains the complete design process documentation, from discovery through stakeholder reviews. The actual website implementation (Astro) will be built from these specifications.

**Current Status:** Phase 2 complete (Stakeholder Review v1.2 approved), ready for engineering handoff.

## Tech Stack

### Current Stack (Launch v1)
- **Build Tool:** Vite
- **Framework:** React 18 + TypeScript
- **Routing:** React Router
- **Styling:** TailwindCSS
- **Animation:** Framer Motion
- **Package Manager:** npm
- **Hosting:** TBD (Netlify/Vercel recommended)

### Planned Upgrade (SEO v2)
- **Public Pages:** Prerender/SSG for SEO optimization
- **Client Area:** Remains SPA (authentication required)

## Repository Structure

```
RicsSite/
├── docs/               # Discovery & strategy documentation
│   ├── 01_Projektkontext_und_Ziele.md
│   ├── 02_Interviewleitfaden_Schatz_Website.md
│   ├── 03_interview_transkript.md (raw + analyzed)
│   ├── 04_Anforderungen_und_Sitemap.md
│   ├── 05_Personas.md (3 core personas)
│   └── 06_Szenarien_und_User_Journeys.md (5 key scenarios)
│
├── design/             # Information architecture & wireframes
│   ├── 01_Informationsarchitektur.md
│   ├── 02_Wireframes_Index.md
│   ├── 02.1-02.6_Wireframes_*.md (6 core pages, text format)
│   ├── 03_Designsystem.md (placeholder for tokens)
│   ├── CHANGELOG.md
│   └── figma_links.md (Figma workspace links)
│
├── research/           # Stakeholder interviews & analysis
│   ├── Stakeholder_Review_01_Interview_Raw.md (v1 & v2)
│   └── Stakeholder_Review_01_Auswertung_v*.md
│
├── review/             # Page-by-page stakeholder review docs
│   ├── 01_startseite.md
│   ├── 02_angebot_methoden.md
│   ├── 03_ablauf_erstgespraech.md
│   ├── 04_kontakt.md
│   ├── 05_selbststart.md
│   ├── 06_kundenbereich.md
│   └── v1_2/           # Version 1.2 review reports (P0/P1 implementations)
│
└── website/            # Future Astro implementation (currently empty)
```

## Quick Start (For Development)

Once the Vite project is initialized:

```bash
cd website
npm install
npm run dev       # Start Vite dev server (http://localhost:5173)
npm run build     # Build for production (TypeScript check + Vite build)
npm run preview   # Preview production build
npm run lint      # ESLint check
```

## Website Architecture (6 Core Pages)

1. **Startseite (Home)** – Orientation hub (eligibility, boundaries, process overview)
2. **Angebot & Methoden (Offer & Methods)** – Service details (nutrition, EFT/Matrix, breathing)
3. **Ablauf & Erstgespräch (Process & Intake)** – Transparent process explanation
4. **Kontakt (Contact)** – Minimal contact form (email + message only)
5. **Selbststart (Self-Start)** – Standalone course purchase & access
6. **Kundenbereich (Client Area)** – Protected member area for downloads
7. **Impressum & Datenschutz (Legal)** – Footer-linked legal pages

## Key Design Principles

- **Gate Model:** Contact → Free consultation → Optional collaboration
- **Predictability Over Pressure:** Clear boundaries, realistic expectations
- **User Control:** Multiple entry paths (direct contact, self-start purchase, later consultation)
- **Professional + Warm:** Serious, evidence-based, no "spiritual fluff"
- **Privacy-Forward:** Privacy visible in navigation, data handling explicit

## Target Users (3 Personas)

1. **Holistically-seeking** – Research-driven, 25–55, mostly female
2. **Skeptical-pragmatic** – Boundary-focused, needs clarity on process & privacy
3. **Structured** – Process-oriented, wants clear next steps

## Project Timeline

### ✅ Phase 1: Discovery & Strategy (Complete)
- Business context & goals
- Stakeholder interviews
- User personas (3 core personas)
- User journeys (5 key scenarios)
- Requirements & sitemap

### ✅ Phase 2: Design & UX (Complete)
- Information architecture
- Wireframes v1.1 (text format, 6 core pages)
- Stakeholder Review v1.2 approved (95% final, mobile/copy refinements pending)
- Design system placeholder structure

### ⏳ Phase 3: Engineering (Next)
See `docs/PROCESS.md` for detailed engineering roadmap.

## Contributing

This is a private project. For questions or contributions, contact the repository owner.

## License

MIT License - See LICENSE file for details.
