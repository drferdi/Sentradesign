# SENTRA // DB01

> **Official design-token prototype for Sentra Artificial Intelligence.**
> 
> DB01 is the calm, dark, high-legibility dashboard language used as the canonical
> starting point whenever a Sentra interface is requested with the instruction:
> **"gunakan design DB01"**.

<p align="center">
  <img src="https://img.shields.io/badge/SENTRA%20AI-DB01-F4F4F1?style=for-the-badge&labelColor=1B1B1B" alt="Sentra AI DB01" />
  <img src="https://img.shields.io/badge/STATUS-REFERENCE%20IMPLEMENTATION-30D069?style=for-the-badge&labelColor=1B1B1B" alt="Reference implementation" />
  <img src="https://img.shields.io/badge/FRAMEWORK-Next.js%2015-FFFFFF?style=for-the-badge&labelColor=1B1B1B" alt="Next.js 15" />
  <img src="https://img.shields.io/badge/STYLING-Tailwind%20CSS%204-1399E9?style=for-the-badge&labelColor=1B1B1B" alt="Tailwind CSS 4" />
</p>

---

## 00 // DB01 SIGNAL

DB01 is not a generic dark dashboard theme. It is a deliberate operations surface:
quiet under pressure, precise in hierarchy, restrained in color, and comfortable
for long analytical sessions.

The reference composition is a desktop-first learning and performance dashboard.
It provides the visual grammar for future Sentra dashboards, command surfaces,
analytics views, and operational interfaces while keeping each product's domain
content independent.

### The DB01 contract

When an implementation is instructed to use DB01, preserve these non-negotiables:

| Principle | Requirement |
| --- | --- |
| Surface | Dark charcoal surfaces, never pure black as the primary application background. |
| Hierarchy | Data, task context, and operational status lead. Decoration stays subordinate. |
| Density | Spacious desktop rhythm with intentional empty space. Do not crowd content into cards. |
| Color | Accent color communicates a specific state or category. It never becomes ambient decoration. |
| Shape | Soft, disciplined rounding; a large outer shell and restrained radii within it. |
| Boundaries | Subtle borders and dividers do the separating, not heavy shadows or glass effects. |
| Typography | Near-white headings, muted supporting copy, compact labels, and legible numerical emphasis. |
| Motion | If added, motion must be short, purposeful, and respect reduced-motion preferences. |
| Accessibility | Keyboard focus remains visible and status must never depend on color alone. |

### Visual character

```text
CALM            sober dark-neutral surfaces
EXECUTIVE       clear information ranking and measured density
OPERATIONAL     task-aware navigation and decision-oriented data
PRECISE         stable spacing, subtle dividers, disciplined token usage
HUMAN           readable contrast, familiar controls, no visual theater
```

---

## 01 // REFERENCE COMPOSITION

The current implementation is the DB01 reference screen. It establishes the
following desktop composition:

```text
PAGE CANVAS
└── Rounded application shell
    ├── Persistent left sidebar
    │   ├── Brand
    │   ├── Search
    │   ├── Primary navigation
    │   ├── Expanded resource hierarchy
    │   ├── Settings navigation
    │   └── Account profile control
    └── Main content area
        ├── Slim contextual header
        ├── Welcome / primary action row
        ├── Performance overview
        ├── Weekly study-plan row
        └── Recent-test activity list
```

### Spatial specification

The values below describe the actual reference implementation. They should be
treated as the baseline, then adapted proportionally only when a target viewport
requires it.

| Area | DB01 baseline |
| --- | --- |
| Page canvas | `#3e3e3e` surrounding the application shell |
| Application shell | `min(94vw, 1930px)` wide, centered, `56px` outer radius |
| Shell edge | `12px` solid `#343434` boundary |
| Sidebar | `360px` fixed desktop column |
| Top contextual header | `89px` high |
| Main content measure | `1115px` maximum inner content width |
| Desktop content padding | `64px`, widened to `96px` at the extra-large breakpoint |
| Section rhythm | `48px` from hero to performance, then `56px` between major sections |
| Four-column collections | Equal columns with fine vertical dividers |
| Inner control radius | Generally `13px` to `18px` |
| Document-plan radius | `23px` |

The original reference is desktop-led. Do not reduce the sidebar, typography, or
section rhythm arbitrarily simply to make a smaller viewport fit. Instead, define
an explicit compact composition for tablet and mobile.

---

## 02 // TOKEN SYSTEM

All active DB01 visual primitives live in
[`src/app/globals.css`](src/app/globals.css). Use these semantic variables before
introducing literal colors in new DB01 components.

### Core surface and typography tokens

| Token | Value | Role |
| --- | --- | --- |
| `--sentra-db01-canvas` | `#3e3e3e` | Outer page canvas surrounding the app frame |
| `--sentra-db01-shell` | `#1b1b1b` | Main application surface |
| `--sentra-db01-sidebar` | `#181818` | Sidebar surface and deepest internal layer |
| `--sentra-db01-raised` | `#282828` | Selected or raised element surface |
| `--sentra-db01-text` | `#f4f4f1` | Primary text and high-emphasis content |
| `--sentra-db01-muted` | `#90908d` | Supporting text and secondary metadata |
| `--sentra-db01-divider` | `rgb(255 255 255 / 6%)` | Fine structural separation |
| `--sentra-db01-font` | `"Avenir Next", "Segoe UI", sans-serif` | DB01 display and interface stack |

### State accents

| Token | Value | Meaning | Do not use for |
| --- | --- | --- | --- |
| `--sentra-db01-accent-green` | `#30d069` | Healthy, successful, positive progression | General decoration or primary buttons |
| `--sentra-db01-accent-blue` | `#1399e9` | Neutral information or distinct data series | Success or warning state |
| `--sentra-db01-accent-red` | `#f53b37` | Critical, failed, urgent, or below-threshold state | Decorative contrast |

### Token usage rules

1. Use a surface token first, rather than reaching for black or arbitrary gray.
2. Place primary text on shell or sidebar surfaces only when its contrast remains
   plainly legible.
3. Use `--sentra-db01-divider` for structural separation. Avoid thick bright
   rules and drop-shadow stacks.
4. Treat green and red as status carriers. Pair them with text, an icon, or a
   label so color is never the only signal.
5. Introduce a new semantic token only when an existing token cannot describe the
   role. Do not add product-specific colors to the global DB01 primitive set.

---

## 03 // COMPONENT CATALOG

DB01 is composed from small, reusable interface building blocks rather than a
single page-specific template.

| Component | Source | Responsibility |
| --- | --- | --- |
| `AppShell` | `src/components/dashboard/app-shell.tsx` | Owns the outer frame, persistent navigation, contextual header, and content measure. |
| `Sidebar` | `src/components/dashboard/sidebar.tsx` | Owns brand, search, navigation hierarchy, settings, and profile area. |
| `SidebarItem` | `src/components/dashboard/sidebar.tsx` | Reusable selected, default, hoverable navigation control. |
| `PrimaryButton` | `src/components/dashboard/app-shell.tsx` | High-emphasis action with a light surface against DB01 dark surfaces. |
| `SectionHeader` | `src/components/dashboard/sections.tsx` | Consistent section title with contextual information affordance. |
| `PerformanceOverview` | `src/components/dashboard/sections.tsx` | Four-column metric architecture and restrained series accents. |
| `StudyPlanCard` | `src/components/dashboard/sections.tsx` | Centered document-style plan item. |
| `RecentTests` | `src/components/dashboard/sections.tsx` | Compact activity list with semantic item affordances. |
| `ThinIcon` | `src/components/dashboard/icons.tsx` | Consistent low-weight Lucide icon treatment. |

### Required component states

Every new DB01 component must intentionally consider the following states. A
state may share visual treatment with another state only when its semantics remain
clear to assistive technology and sighted users.

| State | DB01 treatment |
| --- | --- |
| Default | Quiet dark surface, muted secondary content, clear hierarchy. |
| Hover | Small surface or text contrast shift. Do not use dramatic elevation. |
| Focus | Visible light outline with offset. Never suppress browser focus without replacement. |
| Active | Brief press feedback such as a subtle scale or surface change. |
| Selected | `--sentra-db01-raised` surface plus text/icon emphasis. |
| Disabled | Reduced contrast with preserved legibility and no misleading hover effect. |
| Loading | Neutral skeleton geometry that preserves the final layout. |
| Empty | Explain what is absent and provide the most relevant next action. |
| Warning | Reserved, labeled signal that identifies the condition and possible response. |
| Error | Red-accented, text-labeled failure state with a recovery path. |
| Permission denied | State the access boundary, the restricted resource, and an escalation path. |

### Interaction language

- Sidebar selection is a raised charcoal surface, not a bright color block.
- Controls use rounded geometry and fine borders without glassmorphism.
- Icons are thin, purposeful, and aligned to text baselines.
- Menus use a kebab affordance only when a list item has contextual actions.
- The most important action may invert to a pale surface, as the primary action
  does in the reference dashboard.

---

## 04 // CONTENT AND DATA GRAMMAR

DB01 is chart- and signal-first. Use a stable hierarchy for operational content:

```text
CONTEXT              Where am I? What scope am I viewing?
PRIMARY TASK         What should I do next?
KEY SIGNALS          What changed, what matters, what is at risk?
SUPPORTING WORK      What is planned or requires attention?
ACTIVITY / RECORDS   What happened recently and what can I inspect?
```

### Metric items

The reference metric item contains:

1. A low-emphasis icon.
2. A short category label.
3. One dominant numerical result.
4. A narrow colored marker.
5. Explicit trend copy, such as `+2.5 From last week`.

The marker color must not be the only representation of performance. Trend copy,
an icon, or an accessible label must state the meaning.

### Lists and activity records

Recent records avoid heavyweight card treatment. A clean row comprises an icon,
title, secondary preview, and optional overflow control. Use dividers only when
they improve scanning. Preserve the title and primary action in narrow layouts;
truncate secondary preview text before truncating essential record identity.

### Data policy

The current screen uses fictional sample data. DB01 is a UI reference, not a
source of production analytics, identity, or clinical data. Production uses must
define data contracts, loading behavior, empty states, error handling, and access
controls before the visual layer is connected.

---

## 05 // ACCESSIBILITY STANDARD

The implementation already includes semantic `button`, `nav`, `aside`, `main`,
`section`, and heading elements where appropriate. It also retains visible
keyboard focus through the global `:focus-visible` rule.

Every DB01 extension must preserve the following:

- Use semantic interactive elements. Do not emulate buttons with non-interactive
  elements.
- Give icon-only actions meaningful `aria-label` text.
- Keep focus visible against all dark surfaces.
- Pair color with text, iconography, or another explicit status indicator.
- Maintain a logical keyboard order matching the visual reading order.
- Do not place essential information only in a hover state.
- Test contrast for every newly introduced text and state color against its exact
  background.
- Respect `prefers-reduced-motion` before adding animation.

WCAG 2.2 AA requires a screen-by-screen audit after product content, localization,
and data states are present. Do not claim compliance only because the DB01
foundation is dark, uses semantic elements, or shows a focus outline.

---

## 06 // RESPONSIVE POLICY

DB01's current reference is deliberately desktop-first. The full sidebar and
four-column information rhythm are the source composition.

| Viewport | Required adaptation |
| --- | --- |
| Desktop, 1280px and above | Retain full app shell, sidebar, hero/action row, and four-column groups. |
| Compact desktop / tablet | Reduce content gutters intentionally; convert dense four-column collections only after preserving metric hierarchy. |
| Tablet portrait | Replace the persistent sidebar with an accessible drawer or compact rail. Keep current location visible. |
| Mobile | Use a single-column content flow, a compact header, and an explicit navigation trigger. Primary task and high-risk signals remain first. |

Responsive work is not complete merely because the shell shrinks. Add and verify
breakpoint-specific behavior before describing a DB01 screen as mobile-ready.

---

## 07 // LOCAL DEVELOPMENT

### Prerequisites

- Node.js 20 LTS or later is recommended.
- npm 10 or later.

### Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

### Validate the production build

```bash
npm run build
npm run start
```

The build command performs Next.js compilation and TypeScript validation. Run it
after changes to components, tokens, layout, or dependencies.

### Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local Next.js development server. |
| `npm run build` | Create and validate an optimized production build. |
| `npm run start` | Serve the completed production build. |
| `npm run lint` | Reserved lint script; verify Next lint support before relying on it with the installed Next.js version. |

---

## 08 // PROJECT MAP

```text
sentra-token-DB01/
├── src/
│   ├── app/
│   │   ├── globals.css             # DB01 global primitive and semantic tokens
│   │   ├── layout.tsx              # Document metadata and global stylesheet entry
│   │   └── page.tsx                # DB01 reference route
│   └── components/dashboard/
│       ├── app-shell.tsx           # App shell and primary action
│       ├── icons.tsx               # Shared thin Lucide icon wrapper
│       ├── sections.tsx            # Metrics, plans, and activity sections
│       └── sidebar.tsx             # Navigation, search, settings, profile
├── next.config.ts
├── postcss.config.mjs
├── package.json
├── tailwind configuration via Tailwind CSS v4 import
└── README.md
```

---

## 09 // IMPLEMENTING DB01 IN A NEW SENTRA SURFACE

Use this repository as the design source of truth, then follow this sequence:

1. Start from the token names in `globals.css`; do not recreate their values in
   a separate, ungoverned palette.
2. Reuse the closest existing component and add a variant only when the semantic
   role is genuinely different.
3. Preserve the shell, navigation, title, primary-task, signal, and activity
   hierarchy before inserting domain-specific content.
4. Define loading, empty, warning, error, and permission states at the same time
   as the default state.
5. Validate desktop composition against this reference before beginning compact
   breakpoint work.
6. Build and manually inspect hover, focus, selected, and keyboard states.
7. Record any deliberate visual deviation in the pull request or implementation
   notes, including the product reason for it.

### Prompt-level design instruction

For internal work, the phrase below means the DB01 contract applies:

```text
Gunakan design DB01 dari repository sentra-token-DB01 sebagai source of truth.
Pertahankan token, proporsi, hierarki, karakter dark-neutral, dan perilaku
komponen; jangan mendesain ulang gaya visualnya.
```

This instruction sets the visual system. Product content, information architecture,
and workflow requirements must still be adapted to the particular Sentra module.

---

## 10 // CHANGE GOVERNANCE

DB01 should evolve through intentional versioned changes, not incidental local
adjustments.

### Changes that require DB01 review

- New global colors, typography stacks, radii, or spacing scale values.
- Any change to outer shell, sidebar proportion, content measure, or header
  height.
- A new meaning for green, blue, or red accents.
- Removal or weakening of keyboard focus treatment.
- A component that becomes a reusable pattern across Sentra products.

### Changes that are normally product-local

- Domain labels, sample data, and record fields.
- Product-specific navigation destinations.
- A chart's data series, provided token roles and legibility remain intact.
- Workflow-specific empty, error, and permission copy.

### Pull request checklist

- [ ] The DB01 primitive and semantic token roles remain intact.
- [ ] The desktop composition remains visually comparable to the reference.
- [ ] New interaction states have default, hover, focus, active, disabled, and
      loading behavior where applicable.
- [ ] Status is communicated with text or iconography in addition to color.
- [ ] Keyboard focus is visible.
- [ ] Empty, warning, error, and permission-denied states are designed where the
      component fetches or restricts data.
- [ ] `npm run build` succeeds.
- [ ] The implementation has been checked at its intended desktop viewport and
      relevant compact breakpoints.

---

## 11 // REPOSITORY STATUS

| Item | Status |
| --- | --- |
| Canonical design name | `Sentra Artificial Intelligence DB01` |
| Primary reference | Current dashboard route at `/` |
| Technology | Next.js, React, TypeScript, Tailwind CSS, Lucide |
| Repository | `drferdii/sentra-token-DB01` |
| Visibility | Private |
| Current scope | Desktop reference implementation and core visual grammar |

---

<p align="center">
  <strong>Sentra Artificial Intelligence · DB01</strong><br />
  <sub>Quiet surfaces. Explicit signals. Durable hierarchy.</sub>
</p>
