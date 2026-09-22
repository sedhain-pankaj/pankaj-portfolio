# Graph Report - .  (2026-09-22)

## Corpus Check
- Corpus is ~38,398 words - fits in a single context window. You may not need a graph.

## Summary
- 232 nodes · 330 edges · 16 communities (12 shown, 4 thin omitted)
- Extraction: 95% EXTRACTED · 5% INFERRED · 0% AMBIGUOUS · INFERRED: 15 edges (avg confidence: 0.8)
- Token cost: 1,200 input · 900 output

## Community Hubs (Navigation)
- Page Components & Sections
- Runtime Dependencies
- CV Skills & Background
- TypeScript Config & Types
- Layout & Theme Shell
- Dev Dependencies & Tooling
- Jukebox App Screenshot
- Plumber Site Screenshot
- Email & Form Actions
- Package Manifest
- Billing Dashboard Screenshot
- ESLint Config
- Next.js Config
- Profile Photo
- Tailwind Config

## God Nodes (most connected - your core abstractions)
1. `Pankaj Sedhain` - 20 edges
2. `compilerOptions` - 16 edges
3. `useSectionInView()` - 14 edges
4. `Jukebox Web App (Music Video Player UI)` - 9 edges
5. `Quality Inspection Page (mobile view)` - 8 edges
6. `useActiveSectionContext()` - 7 edges
7. `sendEmail()` - 6 edges
8. `SectionHeading()` - 6 edges
9. `include` - 6 edges
10. `Developer Profile Portfolio Site (Next.js)` - 6 edges

## Surprising Connections (you probably didn't know these)
- `Next.js` --semantically_similar_to--> `React Native`  [INFERRED] [semantically similar]
  README.md → public/Pankaj_CV.pdf
- `app/page.tsx` --semantically_similar_to--> `JavaScript`  [INFERRED] [semantically similar]
  README.md → public/Pankaj_CV.pdf
- `Developer Profile Portfolio Site (Next.js)` --references--> `Pankaj Sedhain`  [INFERRED]
  README.md → public/Pankaj_CV.pdf
- `Contact()` --calls--> `sendEmail()`  [EXTRACTED]
  components/contact.tsx → actions/sendEmail.ts
- `Header()` --calls--> `useActiveSectionContext()`  [EXTRACTED]
  components/header.tsx → context/active-section-context.tsx

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Craig Williams jukebox application project (JS frontend, PHP backend)** — public_pankaj_cv_jukebox_application, public_pankaj_cv_craig_williams_promotions, public_pankaj_cv_javascript, public_pankaj_cv_php [EXTRACTED 1.00]
- **Bachelor of IT (Software Development) at Southern Cross University incl. final year project** — public_pankaj_cv_pankaj_sedhain, public_pankaj_cv_southern_cross_university, public_pankaj_cv_bachelor_information_technology, public_pankaj_cv_movie_search_portal [EXTRACTED 1.00]
- **Mobile development skill set (React Native, Ionic, Cordova)** — public_pankaj_cv_react_native, public_pankaj_cv_ionic, public_pankaj_cv_cordova [INFERRED 0.75]
- **Acme multi-device responsive UI showcase (desktop, tablet, mobile)** — public_dashboard_acme_app, public_dashboard_dashboard_view, public_dashboard_invoices_view, public_dashboard_mobile_view [INFERRED 0.85]
- **Jukebox Playback Flow (select from song list -> queue -> play in video player)** — public_jukebox_song_list, public_jukebox_queue, public_jukebox_video_player [INFERRED 0.75]
- **Mobile Service Page Layout (header, card grid, CTA, footer contact)** — public_plumber_quality_inspection_page, public_plumber_inspection_form_card, public_plumber_services_link_card, public_plumber_contact_us_button, public_plumber_contact_details, public_plumber_social_icons [INFERRED 0.85]

## Communities (16 total, 4 thin omitted)

### Community 0 - "Page Components & Sections"
Cohesion: 0.12
Nodes (25): About(), Contact(), Education(), Experience(), Intro(), Project(), Projects(), SectionDivider() (+17 more)

### Community 1 - "Runtime Dependencies"
Cohesion: 0.06
Nodes (31): clsx, framer-motion, next, dependencies, clsx, framer-motion, next, react (+23 more)

### Community 2 - "CV Skills & Background"
Cohesion: 0.08
Nodes (30): Arduino (microcontrollers), Australian Computer Society (Associate Member), Bachelor in Information Technology (Software Development), Chess (tournaments), Cordova, Craig Williams Promotions, CSS, Git (+22 more)

### Community 3 - "TypeScript Config & Types"
Cohesion: 0.07
Nodes (27): dom, dom.iterable, esnext, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts (+19 more)

### Community 4 - "Layout & Theme Shell"
Cohesion: 0.12
Nodes (16): inter, metadata, Footer(), Header(), ThemeSwitch(), ActiveSectionContentProvider(), ActiveSectionContentProviderProps, ActiveSectionContext (+8 more)

### Community 5 - "Dev Dependencies & Tooling"
Cohesion: 0.10
Nodes (21): autoprefixer, eslint, eslint-config-next, devDependencies, autoprefixer, eslint, eslint-config-next, postcss (+13 more)

### Community 6 - "Jukebox App Screenshot"
Cohesion: 0.33
Nodes (10): Category Sidebar (decades + genres: 50's+60's, 70's, 80's, 90's, 2000's, Latest Hits, Country, Karaoke, Special Occasion, Christmas Song), Craig Williams Promotions (footer branding + support line 1300-888-581), Jukebox Web App (Music Video Player UI), Queue Panel (add/remove/clear queued songs), Randomizer / Shuffle Control, Search Panel (All Songs dropdown + Search All Songs input), Song List (browseable tracks with thumbnails under the player), Video Player (currently playing 80's Shuffle: Michael Jackson - Thriller) (+2 more)

### Community 7 - "Plumber Site Screenshot"
Cohesion: 0.22
Nodes (10): AT Plumbing & Building Services, atplumbing.com Website, Contact Details (0430 414 460, Heatherdale Rd Mitcham VIC 3132 Australia), Contact Us CTA Button, AT Plumbing Quality Inspection Mobile Page Screenshot, Broken Image Placeholder Icon, Fill out Inspection Form Card (Gas Safety Checklist), Quality Inspection Page (mobile view) (+2 more)

### Community 8 - "Email & Form Actions"
Cohesion: 0.39
Nodes (6): resend, sendEmail(), ContactFormEmail(), ContactFormEmailProps, getErrorMessage(), validateString()

### Community 9 - "Package Manifest"
Cohesion: 0.22
Nodes (8): name, private, scripts, build, dev, lint, start, version

### Community 10 - "Billing Dashboard Screenshot"
Cohesion: 0.33
Nodes (9): Acme Billing Web App, Collected Revenue Metric ($2,689.26), Dashboard View (Collected metric, Recent Revenue chart), Acme Billing Dashboard Screenshot, Invoices View (searchable invoice table), Mobile View (bottom tab bar navigation), Pending Revenue Metric ($3,468.09), Recent Revenue Bar Chart (last 6 months) (+1 more)

## Knowledge Gaps
- **101 isolated node(s):** `extends`, `next/core-web-vitals`, `resend`, `inter`, `metadata` (+96 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `Runtime Dependencies` to `Package Manifest`?**
  _High betweenness centrality (0.050) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Dev Dependencies & Tooling` to `Package Manifest`?**
  _High betweenness centrality (0.037) - this node is a cross-community bridge._
- **What connects `extends`, `next/core-web-vitals`, `resend` to the rest of the system?**
  _101 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Page Components & Sections` be split into smaller, more focused modules?**
  _Cohesion score 0.1207897793263647 - nodes in this community are weakly interconnected._
- **Should `Runtime Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.06451612903225806 - nodes in this community are weakly interconnected._
- **Should `CV Skills & Background` be split into smaller, more focused modules?**
  _Cohesion score 0.08275862068965517 - nodes in this community are weakly interconnected._
- **Should `TypeScript Config & Types` be split into smaller, more focused modules?**
  _Cohesion score 0.07142857142857142 - nodes in this community are weakly interconnected._