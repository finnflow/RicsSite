# Website – Vite + React + TypeScript

Modern SPA implementation with Vite build tool.

## Setup

```bash
npm install
npm run dev       # Start dev server (http://localhost:5173)
npm run build     # TypeScript check + Vite build
npm run preview   # Preview production build
npm run lint      # ESLint check
```

## Tech Stack

- **Vite** – Fast build tool
- **React 18** – UI framework
- **TypeScript** – Type safety
- **React Router** – Client-side routing
- **TailwindCSS** – Utility-first styling
- **Framer Motion** – Animations

## Project Structure

```
website/
├── public/           # Static assets
├── src/
│   ├── components/   # Reusable React components
│   ├── pages/        # Page components (routes)
│   ├── styles/       # Global styles + Tailwind
│   ├── types/        # TypeScript interfaces
│   ├── utils/        # Helper functions
│   └── App.tsx       # Root component + Router
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
├── package.json
└── README.md
```

## Development

The website will be developed based on the design specifications documented in this repository.

**Design Docs:** See [Project README](../README.md) and `design/` folder.

**Engineering Roadmap:** See [docs/PROCESS.md](../docs/PROCESS.md)

---

## SEO Strategy (v2 Upgrade)

**Launch v1:** SPA (client-side routing, fast UX)
**SEO v2:** Prerender public pages (home, services, contact) for search engines. Client area remains SPA.
