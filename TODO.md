# TODO — Dynamic portfolio data refactor + motion refinement

## Plan approval checkpoint
- [x] Confirm new data files use TypeScript (`.ts`) to match existing repo structure.

## Step 1 — Data layer restructure
- [x] Create/normalize `/src/data` module files (`projects.ts`, `skills.ts`, `experience.ts`, `socials.ts`, `personal.ts`) and consolidate content.
- [x] Use aggregated `src/data/portfolioData.ts` as the single import surface.
- [x] Remove legacy `src/Data/*` duplicates once section imports are fully migrated.



## Step 2 — UI cards
- [x] Ensure reusable cards exist and are data-driven:
  - [x] `src/components/cards/ProjectCard.tsx`
  - [x] `src/components/cards/SkillCard.tsx`
  - [x] `src/components/cards/ExperienceCard.tsx`
- [x] Replace any hardcoded labels inside cards with data props

## Step 3 — Section updates (remove hardcoded text)
- [x] Update: `HeroSection`, `AboutSection`, `SkillsSection`, `ProjectsSection`, `ExperienceSection`, `ContactSection`, `FooterSection`, `Navbar`
- [x] Remove inline arrays (nav items, socials, hero chips, about bullets, skill subtext, etc.) and source from `/src/data/*`
- [x] Ensure Button text/labels, headings, and copy are all from data

## Step 4 — Types + imports cleanup
- [ ] Create/adjust `src/types` for data shapes and card props
- [ ] Normalize imports (remove `src/Data/*` casing inconsistencies)

## Step 5 — Verification
- [ ] Run `npm run lint` and `npm run build`
- [ ] Smoke test: change `src/data/personal.ts` and verify sections update

## Step 6 — Animations + motion refinement
- [x] Ensure `src/lib/motion.ts` includes: fadeInUp, fadeInDown, slideLeft, slideRight, scaleIn, staggerContainer, scrollReveal, cardHover, floatingAnimation
- [x] Refactor `HeroSection` to properly use motion variants (stagger + floating avatar)
- [x] Apply premium hover/polish to cards/CTAs across sections
- [x] Re-run `npm run lint` and `npm run build`
