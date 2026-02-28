# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Structure

This repo has two `src` trees:
- **Root `src/`** – the original Figma-exported snapshot. Treat as read-only reference.
- **`website/src/`** – the active implementation. All development happens here.

The `website/` directory is a self-contained Vite + React + TypeScript app. Run all commands from inside `website/`.

## Commands

```bash
cd website

npm run dev          # Vite dev server → http://localhost:5173
npm run build        # TypeScript check + Vite production build
npm run preview      # Preview production build
npm run typecheck    # tsc --noEmit (both tsconfig.json and tsconfig.node.json)
npm run lint         # ESLint
npm run format       # Prettier (write)
npm run format:check # Prettier (check only)
npm run check        # typecheck + lint + format:check (full CI check)
```

## Environment

Copy `website/.env.example` → `website/.env.local` and set:

```
VITE_API_BASE_URL=http://localhost:8000   # URL of the Kursbot backend
```

This variable is **required** at runtime; the app throws if it's missing when the Kursbot page is accessed.

## Architecture

### Routing & Entry Point

`website/src/main.tsx` mounts `<App>`. `App.tsx` wraps `<RouterProvider>` with a `<Suspense>` fallback. All routes are defined in `website/src/app/routes.tsx` using React Router v7's `createBrowserRouter`, with every page lazy-loaded via `React.lazy`.

`RootLayout` (`website/src/app/components/RootLayout.tsx`) is the root layout component — it renders `<ScrollToTop>` and `<Outlet>` only; each page is responsible for its own `<Header>` and `<Footer>`.

### Path Alias

`@/` maps to `website/src/` (configured in both `vite.config.ts` and `tsconfig.json`).

### Pages

| Route | File | Notes |
|---|---|---|
| `/` | `pages/Home.tsx` | |
| `/angebot` | `pages/Angebot.tsx` | Links to `/ernaehrung`, `/emotionale-arbeit` |
| `/ablauf` | `pages/Ablauf.tsx` | |
| `/kontakt` | `pages/Kontakt.tsx` | |
| `/selbststart` | `pages/Selbststart.tsx` | Course purchase landing page |
| `/checkout`, `/checkout/success` | `pages/Checkout.tsx`, `CheckoutSuccess.tsx` | |
| `/kundenbereich` | `pages/Kundenbereich.tsx` | Auth-protected; redirects to `/kundenbereich/locked` if not logged in |
| `/kundenbereich/locked` | `pages/KundenbereichLocked.tsx` | |
| `/login` | `pages/Login.tsx` | Sets `localStorage.isLoggedIn = 'true'` on success |
| `/kursbot` | `pages/Kursbot.tsx` | AI chat interface backed by the Kursbot API |

### Auth Model

Auth is fully client-side via `localStorage`:
- `isLoggedIn` – set to `'true'` on login, removed on logout
- `hasSelfstartAccess` – set when self-start course is purchased
- Login/logout events are propagated via custom DOM events (`'login'`, `'logout'`) so `Header` stays in sync without a context provider.

### Kursbot Feature

`website/src/lib/api/kursbotClient.ts` is the sole API layer. It exposes:
- `sendChatMessage(payload)` → `POST /api/v1/chat`
- `fetchConversations(guestId)` → `GET /api/v1/conversations`
- `fetchConversationMessages(conversationId, guestId)` → `GET /api/v1/conversations/:id/messages`
- `deleteConversation(conversationId, guestId)` → `DELETE /api/v1/conversations/:id`

Guest identity is a UUID stored in `localStorage` under key `lebensessenz_guest_id`, created on first visit and reused across sessions.

### UI Components

`website/src/app/components/ui/` contains shadcn/ui-style components built on Radix UI primitives. These are generated components — prefer editing page/feature components over modifying them.

### Styling

- Tailwind CSS v4 (configured via `@tailwindcss/vite` plugin, no `tailwind.config.js`)
- CSS custom properties for theming are in `website/src/styles/theme.css`
- Brand accent color: `#D4A88C` (terracotta/rose), hover: `#C9997A`
- Warm background tones: `#F7F3EF`, `#F5EDE4`, `#F6E8DE`
- Dark text: `#3A2A21`

## Design & Docs

- `docs/` – discovery, user research, personas, user journeys
- `design/` – information architecture, wireframes, design system notes
- `review/` – stakeholder review documents per page (v1.2 approved)
