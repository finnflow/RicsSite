# Engineering Process & Roadmap

## Current Status: Stakeholder Review v1.2 Approved

**Phase:** Design Complete → Engineering Handoff
**Approval Level:** 95% final (Desktop layouts locked, mobile/copy refinements in parallel)
**Figma Status:** Clickable prototype available, design tokens TBD
**Open Items:** Mobile responsive details, final copy refinements (non-blocking)

## Next Engineering Phases

### Phase A: UI Lock & Component Refactor
**Goal:** Stabilize component architecture before content migration.

**Prerequisites:**
- Vite + React + TypeScript project initialized (`website/` directory)
- Design tokens finalized (colors, typography, spacing)
- Component library structure defined (React components)

**Tasks:**
1. Lock desktop UI components (no structural changes after this point)
2. Build React component library matching wireframe v1.2 structure
3. Implement design system tokens (Tailwind config + CSS variables)
4. Create page components matching 6 core pages (React Router routes)
5. Ensure component reusability (Button, Card, Form, Navigation)
6. Set up TypeScript types for props and state

**QA Gate:**
- Desktop layouts pixel-perfect match to approved wireframes
- No regression in approved UX flows (contact form, self-start purchase)
- Components documented (Storybook or equivalent)

---

### Phase B: Content Migration & Externalization
**Goal:** Move hard-coded copy to external content layer (CMS or JSON).

**Why:** Enables stakeholder to refine copy independently without code changes.

**Approach:**
- Option 1: Local JSON files (simple, version-controlled, TypeScript types)
- Option 2: Headless CMS (Sanity/Contentful, requires setup)
- **Recommendation:** Start with JSON per page, use TypeScript interfaces for type safety

**Tasks:**
1. Extract all page content to structured JSON files
2. Build content rendering layer (React components consuming JSON)
3. Create TypeScript interfaces for content structure
4. Document content editing process for stakeholder
5. Test content updates don't break layouts

**QA Gate:**
- Content changes require zero code changes
- Copy updates deploy independently
- No broken links or missing content after migration

---

### Phase C: Mobile Responsive Fix
**Goal:** Finalize mobile layouts based on pending design feedback.

**Status:** Mobile wireframes not yet approved (desktop priority established).

**Tasks:**
1. Wait for stakeholder mobile layout approval
2. Implement responsive breakpoints (mobile-first approach)
3. Test all user flows on mobile (contact form, self-start purchase)
4. Fix navigation UX for small screens

**QA Gate:**
- Desktop layouts unchanged (regression test)
- Mobile layouts match approved mobile wireframes
- Contact flow tested on mobile (form validation, submission)

---

### Phase D: Deploy & Go Live
**Goal:** Production deployment with monitoring.

**Prerequisites:**
- All QA gates passed (A, B, C)
- SSL certificate configured
- Domain DNS configured
- Privacy policy & legal pages complete

**Tasks:**
1. Choose hosting provider (Netlify/Vercel recommended for Vite + React SPAs)
2. Configure CI/CD pipeline (auto-deploy on main branch)
3. Set up monitoring (uptime, errors, form submissions)
4. Configure environment variables (.env for API keys)
5. Final stakeholder approval on staging environment
6. Deploy to production

**SEO v2 Upgrade (Post-Launch):**
- Evaluate prerendering options (Vite SSG plugins or migration to Next.js/Remix)
- Keep client area as SPA (requires authentication, no SEO needed)
- Prerender public pages for better SEO (home, services, contact)

**QA Gate:**
- Desktop experience unchanged from approved wireframes
- Mobile responsive works across devices (iOS Safari, Android Chrome)
- Contact form submissions reach stakeholder (email notifications working)
- Self-start purchase flow functional (Stripe/payment integration if applicable)
- Legal pages (Impressum, Datenschutz) accessible

---

## QA Gates Summary

Each phase must pass these gates before proceeding:

### Gate 1: Desktop UI Locked (Phase A)
- [ ] All components match approved wireframes v1.2
- [ ] No structural layout changes without stakeholder approval
- [ ] Design tokens implemented (colors, spacing, typography)

### Gate 2: Content Externalized (Phase B)
- [ ] Copy changes don't require code changes
- [ ] Stakeholder can edit content independently
- [ ] No broken links or missing content after migration

### Gate 3: Mobile Responsive (Phase C)
- [ ] Desktop layouts unchanged (regression test)
- [ ] Mobile layouts approved by stakeholder
- [ ] Contact form functional on mobile

### Gate 4: Production Ready (Phase D)
- [ ] Staging environment approved by stakeholder
- [ ] Contact form submissions working
- [ ] Performance optimized (Lighthouse score >90)
- [ ] Legal pages complete

---

## Risk Mitigation

### Risk: Scope Creep During Development
**Mitigation:** UI locked after Phase A. All new features deferred to v2.

### Risk: Mobile Layouts Change Desktop Approach
**Mitigation:** Mobile refinements isolated from desktop (no shared breakpoints).

### Risk: Content Changes Break Layouts
**Mitigation:** Phase B enforces content/layout separation. Test with extreme content (long text, missing fields).

### Risk: Stakeholder Unavailable for QA
**Mitigation:** Async approval process via staging links. Default to "no change" if unsure.

---

## Engineering Principles

1. **No UI changes without stakeholder approval** (wireframes v1.2 are source of truth)
2. **Desktop-first, mobile additive** (desktop approved, mobile refinements in parallel)
3. **Content flexibility** (stakeholder edits copy independently)
4. **Test contact flow rigorously** (primary conversion point)
5. **Document everything** (future handoff to other developers)

---

## Notes for Future Engineers

- **Wireframes are authoritative:** review/ folder contains final approved v1.2 specs
- **Don't refactor page structure:** stakeholder approved specific information hierarchy
- **Gate model is sacred:** contact → intake → optional collaboration (don't skip steps)
- **Privacy is visible:** privacy/GDPR compliance explicit in navigation
- **No marketing pressure:** tone is warm but realistic (no "quick fixes" or "guaranteed results")

---

## Contact for Engineering Questions

**Stakeholder:** Contact via GitHub issues or repository owner
**Repository Owner:** @finnflow

---

**Last Updated:** 2026-02-07
**Document Version:** 1.0
**Approved By:** Repository Owner
