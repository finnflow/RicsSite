# RicsSite Project Memory

## Project Overview
Vite + React + TypeScript site for Lebensessenzen (Ricarda Ludwig).
Active development is in `website/` — run all commands from there.
Root `src/` is read-only Figma export reference.

## Brand Colors
- Terracotta accent: `#D4A88C`, hover: `#C9997A`, darker: `#B8836A`
- Dark text: `#3A2A21`
- Warm brown muted: `#8A6B54`
- Backgrounds: `#F7F3EF` (page), `#F6E8DE` (bot bubble / hover), `#F0E0D0` (active state)
- Borders: `#E2D4C8` (card), `#EDE0D4` (divider), `#EDD5C4` (hover bg)

## Key Files
- Kursbot page: `website/src/app/pages/Kursbot.tsx`
- API client: `website/src/lib/api/kursbotClient.ts`
- Theme CSS: `website/src/styles/theme.css`
- Routes: `website/src/app/routes.tsx`
- Guest ID key: `lebensessenz_guest_id` (localStorage)

## Kursbot UX Patterns (established Feb 2026)
- Sidebar: `w-64 flex flex-col gap-4`, `rounded-2xl border border-[#E2D4C8] shadow-sm`
- Active conversation: `bg-[#F0E0D0] border-l-2 border-[#D4A88C]` + bold font
- Inactive hover: `hover:bg-[#F6EDE5] border-l-2 border-transparent`
- Delete button: hidden (`opacity-0`) until `group-hover:opacity-100`
- Message bubbles: `flex justify-start/end` wrapper + `max-w-[75%] rounded-2xl px-4 py-3 shadow-sm`
  - Bot: `bg-[#F6E8DE] rounded-tl-sm` (left-aligned, subtle tail)
  - User: `bg-[#D4A88C] text-white rounded-tr-sm` (right-aligned, subtle tail)
- Markdown in bot messages: split on `/(\*\*[^*]+\*\*)/g` → `<strong>` (no dangerouslySetInnerHTML)
- Typing indicator: 3 bouncing dots with staggered `animationDelay` inline styles
- Input: unified `bg-[#F7F3EF] rounded-xl border focus-within:border-[#D4A88C] focus-within:ring-2 focus-within:ring-[#D4A88C]/20` container
- Auto-scroll: `useRef` + `scrollIntoView({ behavior: 'smooth' })` on messages/isLoading change
- Conversation refresh: `fetchConversations` called after first message creates a new conversation (`isNewConversation` flag)
- Mobile drawer: `fixed top-20 left-0 bottom-0 w-64` + `backdrop-blur-[2px]` overlay
