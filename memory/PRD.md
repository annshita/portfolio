# Portfolio — Anshita Verma

## Original Problem Statement
Build a personal portfolio website. Should include resume content and links (GitHub, LinkedIn, LeetCode). Style: whimsical, elegant & soft, pink. Sections: About, Skills, Experience, Projects, Contact. Contact form sends real emails.

## Architecture
- **Frontend**: React 19 + Tailwind, framer-motion (scroll reveals, kinetic hero), lenis (smooth scroll), react-fast-marquee (editorial marquee), sonner (toasts). Sections split into components under `src/components/portfolio/`. Content in `src/data/portfolio.js`.
- **Backend**: FastAPI. `POST /api/contact` saves message to MongoDB (`contact_messages`) and sends email via Emergent-managed Resend proxy to annshhita@gmail.com.
- **Design**: Soft pastel pink ("Old Money Tech"), Cormorant Garamond serif + Outfit sans, noise overlay, glassmorphism nav.

## User Persona
Anshita Verma — CS student (Integrated M.Tech, NIT Hamirpur), SWE Intern at Samsung R&D, ML researcher & competitive programmer. Wants an elegant whimsical pink personal site.

## Implemented (2026-06-11)
- Kinetic hero with masked line-by-line name reveal + parallax fluid background.
- About (numbered manifesto), Skills (bento grid), Experience (timeline), Projects + achievements, Contact form (real email), Footer.
- Editorial slow marquee, sticky glass nav with smooth-scroll links.
- Contact backend + Emergent Resend integration. Verified: 8/8 backend tests, 100% frontend flows.

## Backlog
- P1: Downloadable resume PDF button.
- P2: Real project links/screenshots (currently placeholder copy).
- P2: Light custom cursor / page-load intro animation.

## Next Tasks
- Add resume download, dark mode toggle, project detail links when available.
