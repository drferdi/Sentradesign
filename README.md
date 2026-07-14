# SENTRA // DB01

<img src="https://i.postimg.cc/SxdM9Tdk/Untitled.png )" alt="Assistverse" width="1000" />

> **Official design-system specification for Sentra Artificial Intelligence.**
>
> DB01 is the canonical dark, high-legibility interface language for Sentra products.
> It combines calm operational surfaces with a richer semantic color system for
> status, product identity, data visualization, and guided attention.
>
> Internal instruction:
> **"Gunakan design DB01."**

<p align="center">
  <img src="https://img.shields.io/badge/SENTRA%20AI-DB01-F4F4F1?style=for-the-badge&labelColor=1B1B1B" alt="Sentra AI DB01" />
  <img src="https://img.shields.io/badge/STATUS-CANONICAL%20DESIGN%20SYSTEM-30D069?style=for-the-badge&labelColor=1B1B1B" alt="Canonical design system" />
  <img src="https://img.shields.io/badge/MODE-DARK%20OPERATIONAL-8B5CF6?style=for-the-badge&labelColor=1B1B1B" alt="Dark operational mode" />
  <img src="https://img.shields.io/badge/COLOR-SEMANTIC%20MULTI--ACCENT-1399E9?style=for-the-badge&labelColor=1B1B1B" alt="Semantic multi-accent color" />
  <img src="https://img.shields.io/badge/ACCESSIBILITY-WCAG%202.2%20AA%20TARGET-F59E0B?style=for-the-badge&labelColor=1B1B1B" alt="WCAG target" />
</p>

<p align="center">
  <strong>Quiet surfaces. Explicit signals. Richer meaning.</strong><br />
  <sub>Operational calm with disciplined color, durable hierarchy, and human readability.</sub>
</p>

---

## 00 // SYSTEM DEFINITION

DB01 is not a generic dark dashboard theme and it is not a decorative skin.

It is a governed interface system for operational software where users must quickly
understand:

- where they are;
- what requires attention;
- what changed;
- what is safe, delayed, blocked, or critical;
- what action should happen next;
- what evidence supports the displayed conclusion.

DB01 is designed for dashboards, command surfaces, analytics, clinical-support
interfaces, research tools, executive systems, administration consoles, and
high-density workflows across the Sentra ecosystem.

### Design intent

```text
CALM             low-noise dark-neutral surfaces
EXECUTIVE        disciplined hierarchy and measured density
OPERATIONAL      task-aware navigation and actionable information
COLORFUL         multiple accents with explicit semantic roles
PRECISE          stable spacing, repeatable components, governed tokens
HUMAN            readable contrast, familiar controls, useful language
TRUSTWORTHY      visible provenance, state clarity, and recoverable errors
```

### The governing principle

> Color may increase meaning, but must never increase confusion.

DB01 can be visually rich. It must not become visually noisy.

---

## 01 // NON-NEGOTIABLE CONTRACT

When an implementation is instructed to use DB01, preserve the following system
qualities.

| Principle | Requirement |
| --- | --- |
| Surface | Use dark charcoal and graphite surfaces. Pure black is not the primary application background. |
| Hierarchy | Data, task context, evidence, and operational status lead. Decoration remains subordinate. |
| Density | Use spacious desktop rhythm and clear grouping. Do not compress unrelated content into card grids. |
| Color | Every color has a semantic role: status, category, data series, action, or emphasis. |
| Shape | Use soft but disciplined rounding. Large radii belong to shells and major containers; internal controls remain restrained. |
| Boundaries | Use subtle borders and dividers before shadows. Avoid stacked shadows and glass-heavy effects. |
| Typography | Use near-white headings, muted support copy, compact labels, and strong numerical emphasis. |
| Motion | Motion is short, directional, purposeful, and reduced when requested by the operating system. |
| Accessibility | Focus is always visible. Status never depends on color alone. |
| Evidence | High-impact claims should expose source, timestamp, scope, or confidence where the domain requires it. |
| Responsiveness | Mobile is a deliberate composition, not a shrunk desktop canvas. |
| Governance | Global visual changes are versioned and reviewed, not introduced incidentally inside product code. |

### What DB01 is allowed to become

DB01 may be adapted for:

- clinical intelligence;
- hospital operations;
- public-sector analytics;
- AI agent supervision;
- research administration;
- financial operations;
- learning and performance;
- executive command centers;
- developer tools;
- workflow automation.

### What DB01 must not become

DB01 must not become:

- a neon gaming interface;
- a rainbow dashboard without semantic discipline;
- a glassmorphism showcase;
- an oversized-card gallery;
- a generic admin template;
- a visually impressive screen that hides operational state;
- an inaccessible color-only status system;
- a product-specific palette copied into the global primitive layer.

---

## 02 // REFERENCE COMPOSITION

The canonical DB01 desktop composition uses a stable application shell and a
decision-oriented information hierarchy.

```text
PAGE CANVAS
└── Rounded application shell
    ├── Persistent navigation region
    │   ├── Brand identity
    │   ├── Global search or command input
    │   ├── Primary navigation
    │   ├── Product hierarchy
    │   ├── Secondary or settings navigation
    │   └── Account and environment control
    └── Main work area
        ├── Contextual header
        ├── Scope and title
        ├── Primary task or decision
        ├── Critical signals
        ├── Analytical overview
        ├── Supporting workflows
        └── Recent activity, records, or audit trail
```

### Information order

Every page should answer these questions in sequence:

```text
1. CONTEXT             Where am I and what scope am I viewing?
2. PRIMARY TASK        What should I do next?
3. CRITICAL SIGNALS    What changed, what is at risk, and what is blocked?
4. ANALYSIS            What does the evidence indicate?
5. SUPPORTING WORK     What is planned, pending, delegated, or incomplete?
6. ACTIVITY            What happened recently?
7. PROVENANCE          Where did this data come from and when was it updated?
```

### Spatial baseline

| Area | DB01 baseline |
| --- | --- |
| Outer canvas | `#3e3e3e` or equivalent governed canvas token |
| Application shell | `min(94vw, 1930px)` wide, centered |
| Outer shell radius | `56px` desktop reference |
| Shell edge | `12px` dark graphite boundary |
| Sidebar | `320px–360px` desktop column |
| Contextual header | `80px–92px` |
| Main content measure | `1080px–1240px`, depending on product density |
| Desktop content padding | `56px–96px` |
| Major section gap | `48px–64px` |
| Related group gap | `20px–32px` |
| Control radius | `12px–18px` |
| Major panel radius | `20px–28px` |
| Fine divider | `1px` low-contrast semantic border |
| Dense table row | `48px–56px` |
| Comfortable list row | `60px–72px` |

### Layout rule

Do not solve density problems by reducing all spacing. First:

1. remove redundant containers;
2. simplify labels;
3. merge related controls;
4. move tertiary information into disclosure;
5. then reduce spacing proportionally.

---

## 03 // COLOR ARCHITECTURE

<p>
  <img src="https://img.shields.io/badge/SUCCESS-30D069?style=for-the-badge&labelColor=30D069" alt="Success green" />
  <img src="https://img.shields.io/badge/INFO-1399E9?style=for-the-badge&labelColor=1399E9" alt="Information blue" />
  <img src="https://img.shields.io/badge/WARNING-F59E0B?style=for-the-badge&labelColor=F59E0B" alt="Warning amber" />
  <img src="https://img.shields.io/badge/DANGER-F53B37?style=for-the-badge&labelColor=F53B37" alt="Danger red" />
  <img src="https://img.shields.io/badge/REVIEW-A78BFA?style=for-the-badge&labelColor=A78BFA" alt="Review violet" />
</p>

<p>
  <img src="https://img.shields.io/badge/CYAN-22D3EE?style=flat-square&labelColor=22D3EE" alt="Cyan accent" />
  <img src="https://img.shields.io/badge/VIOLET-8B5CF6?style=flat-square&labelColor=8B5CF6" alt="Violet accent" />
  <img src="https://img.shields.io/badge/INDIGO-6366F1?style=flat-square&labelColor=6366F1" alt="Indigo accent" />
  <img src="https://img.shields.io/badge/TEAL-14B8A6?style=flat-square&labelColor=14B8A6" alt="Teal accent" />
  <img src="https://img.shields.io/badge/LIME-84CC16?style=flat-square&labelColor=84CC16" alt="Lime accent" />
  <img src="https://img.shields.io/badge/ORANGE-F97316?style=flat-square&labelColor=F97316" alt="Orange accent" />
  <img src="https://img.shields.io/badge/ROSE-F43F5E?style=flat-square&labelColor=F43F5E" alt="Rose accent" />
  <img src="https://img.shields.io/badge/PINK-EC4899?style=flat-square&labelColor=EC4899" alt="Pink accent" />
</p>

DB01 uses a multi-layer color architecture.

```text
FOUNDATION COLORS   define surfaces, text, dividers, and elevation
STATUS COLORS       communicate state and urgency
CATEGORY COLORS     distinguish product domains and work types
DATA COLORS         separate analytical series
ACTION COLORS       identify interactive priority
```

### 03.1 Foundation colors

| Token | Value | Role |
| --- | --- | --- |
| `--db01-canvas` | `#3E3E3E` | Outer page canvas |
| `--db01-shell` | `#1B1B1B` | Primary application shell |
| `--db01-sidebar` | `#171717` | Deep navigation surface |
| `--db01-surface-1` | `#202020` | Base content surface |
| `--db01-surface-2` | `#282828` | Raised or selected surface |
| `--db01-surface-3` | `#303030` | Hover, elevated, or dense table header |
| `--db01-surface-inverse` | `#F4F4F1` | Inverted high-emphasis surface |
| `--db01-text-primary` | `#F4F4F1` | Primary text |
| `--db01-text-secondary` | `#B8B8B3` | Supporting content |
| `--db01-text-muted` | `#90908D` | Metadata and tertiary labels |
| `--db01-text-disabled` | `#676764` | Disabled content |
| `--db01-divider` | `rgb(255 255 255 / 7%)` | Structural separation |
| `--db01-border` | `rgb(255 255 255 / 10%)` | Standard component border |
| `--db01-border-strong` | `rgb(255 255 255 / 16%)` | Emphasized boundary |
| `--db01-focus` | `#DDEBFF` | Keyboard focus ring |

### 03.2 Status colors

Status colors are reserved for operational meaning.

| Token | Value | Meaning | Typical use |
| --- | --- | --- | --- |
| `--db01-success` | `#30D069` | Healthy, completed, safe, progressing | Success badge, resolved state, positive trend |
| `--db01-info` | `#1399E9` | Informational, neutral, active context | Informational notices, selected data |
| `--db01-warning` | `#F59E0B` | Attention required, degraded, delayed | Warnings, expiring items, partial completion |
| `--db01-danger` | `#F53B37` | Critical, failed, unsafe, urgent | Failures, blocking errors, critical alerts |
| `--db01-review` | `#A78BFA` | Requires review, human judgment, governance | Approval queues, pending validation |
| `--db01-neutral` | `#A3A3A3` | Unknown, inactive, not assessed | Neutral state, unavailable information |

### 03.3 Extended category accents

Category colors make DB01 richer without changing the meaning of status colors.

| Token | Value | Category suggestion |
| --- | --- | --- |
| `--db01-cyan` | `#22D3EE` | Intelligence, telemetry, automation |
| `--db01-violet` | `#8B5CF6` | AI, reasoning, governance |
| `--db01-indigo` | `#6366F1` | Research, knowledge, systems |
| `--db01-teal` | `#14B8A6` | Clinical operations, patient flow |
| `--db01-lime` | `#84CC16` | Efficiency, throughput, optimization |
| `--db01-amber` | `#F59E0B` | Attention, finance, time-sensitive work |
| `--db01-orange` | `#F97316` | Operations, logistics, escalation |
| `--db01-rose` | `#F43F5E` | Human-centered care, communication |
| `--db01-pink` | `#EC4899` | Maternal, family, engagement |
| `--db01-sky` | `#38BDF8` | Information, public service, visibility |

Category colors must not replace status semantics. For example, a violet AI module
that fails still uses the red danger state.

### 03.4 Data visualization palette

Use the following sequence for unrelated categorical series:

| Series | Token | Value |
| --- | --- | --- |
| 1 | `--db01-chart-1` | `#38BDF8` |
| 2 | `--db01-chart-2` | `#A78BFA` |
| 3 | `--db01-chart-3` | `#2DD4BF` |
| 4 | `--db01-chart-4` | `#FBBF24` |
| 5 | `--db01-chart-5` | `#FB7185` |
| 6 | `--db01-chart-6` | `#818CF8` |
| 7 | `--db01-chart-7` | `#4ADE80` |
| 8 | `--db01-chart-8` | `#FB923C` |

For ordered or sequential values, use a single-hue progression rather than unrelated
colors. For diverging values, use a neutral midpoint with two meaningful endpoints.

### 03.5 Color usage hierarchy

```text
PRIMARY ACTION         light inverse button or one governed product accent
CRITICAL STATE         red
WARNING                amber
SUCCESS                green
INFORMATION            blue
REVIEW / GOVERNANCE    violet
CATEGORY IDENTITY      extended accents
CHART SERIES           data palette
DECORATION             neutral only
```

### 03.6 Color proportion

A typical DB01 screen should approximate:

```text
70–80%   dark neutral surfaces
15–22%   near-white and muted text
3–8%     semantic accent colors
<3%      critical red or high-intensity emphasis
```

This is a guidance ratio, not a rigid implementation formula.

### 03.7 Color accessibility rules

1. Never communicate state only through hue.
2. Pair color with text, iconography, shape, pattern, or position.
3. Do not place low-contrast saturated text directly on dark surfaces.
4. Prefer tinted backgrounds with high-legibility text for badges.
5. Test chart series against the exact plot background.
6. Ensure adjacent chart series remain distinguishable in grayscale.
7. Reserve red and green for state; do not use them as arbitrary chart decoration.
8. Use pattern, line style, or marker shape when color distinction is insufficient.

---

## 04 // TYPOGRAPHY SYSTEM

DB01 typography should feel modern, calm, and highly legible.

### Font stacks

```css
--db01-font-sans:
  "Avenir Next",
  "Inter",
  "Segoe UI",
  system-ui,
  sans-serif;

--db01-font-mono:
  "SFMono-Regular",
  "Cascadia Code",
  "Roboto Mono",
  monospace;
```

### Type scale

| Role | Size | Weight | Line height | Use |
| --- | ---: | ---: | ---: | --- |
| Display | `44–56px` | `600–700` | `1.05–1.12` | Rare executive landing or key result |
| Page title | `32–40px` | `600–700` | `1.15` | Primary page identity |
| Section title | `22–28px` | `600` | `1.25` | Major section |
| Panel title | `17–20px` | `600` | `1.35` | Panel or component |
| Body | `15–17px` | `400–500` | `1.5–1.65` | Standard reading |
| Compact body | `13–14px` | `400–500` | `1.45–1.55` | Tables and dense metadata |
| Label | `11–13px` | `600` | `1.2` | Uppercase or compact labels |
| Metric | `28–44px` | `600–700` | `1.0–1.15` | Dominant numerical values |
| Code / ID | `12–14px` | `400–500` | `1.4` | Technical identifiers |

### Typography rules

- Use sentence case for interface labels.
- Avoid all-caps paragraphs.
- Use uppercase sparingly for compact metadata.
- Use tabular numerals where values are compared vertically.
- Keep line length between approximately `55–85` characters for prose.
- Do not center-align operational paragraphs.
- Use weight, spacing, and tone before introducing another text color.
- Use monospaced type only for IDs, commands, hashes, logs, and code.

---

## 05 // SPACING, GRID, AND RHYTHM

### Base spacing scale

```text
4   micro alignment
8   icon gap, compact internal spacing
12  small control spacing
16  standard internal spacing
20  comfortable compact spacing
24  standard group spacing
32  panel spacing
40  section transition
48  major section spacing
64  page-level separation
80  major desktop breathing room
96  large executive composition
```

### Grid policy

- Use a 12-column desktop grid for complex analytical pages.
- Use 8 columns for compact desktop and landscape tablet.
- Use 4 columns for mobile.
- Cards should span according to information value, not visual symmetry.
- A critical panel may span the full width even when adjacent cards would look more balanced.
- Avoid equal-height cards when content is structurally unequal.

### Alignment policy

- Titles, labels, charts, and tabular values should share visible alignment anchors.
- Icon boxes should use a consistent optical size.
- Numerical columns must be right-aligned where comparison matters.
- Primary actions should align with the page title or the task context they control.

---

## 06 // ELEVATION, SHAPE, AND BOUNDARIES

DB01 uses surface contrast and borders before shadow.

### Elevation levels

| Level | Treatment | Typical use |
| --- | --- | --- |
| 0 | Shell or base surface | Page background |
| 1 | Slightly raised neutral surface | Standard panel |
| 2 | Stronger neutral shift and border | Selected, expanded, or interactive panel |
| 3 | Focused overlay with controlled shadow | Menu, popover, modal |
| 4 | Full attention layer | Command palette, critical workflow overlay |

### Radius scale

| Token | Value | Use |
| --- | ---: | --- |
| `--db01-radius-xs` | `8px` | Compact chips or controls |
| `--db01-radius-sm` | `12px` | Inputs and buttons |
| `--db01-radius-md` | `16px` | Cards and panels |
| `--db01-radius-lg` | `24px` | Major panels |
| `--db01-radius-xl` | `36px` | Large sections |
| `--db01-radius-shell` | `56px` | Desktop application shell |

### Shadow policy

Shadows are permitted for floating layers only.

```css
--db01-shadow-overlay:
  0 24px 64px rgb(0 0 0 / 42%),
  0 4px 14px rgb(0 0 0 / 26%);
```

Do not use large soft shadows on every card.

---

## 07 // ICONOGRAPHY

DB01 uses simple, low-weight, consistent iconography.

### Icon rules

- Prefer Lucide or another single coherent outline library.
- Default stroke weight should remain visually light.
- Use `16px`, `18px`, `20px`, or `24px` standard sizes.
- Align icons optically with adjacent text.
- Icon-only actions require meaningful accessible names.
- Do not use filled icons merely to make the interface feel more colorful.
- Use colored icons only when the color expresses category or state.
- Critical icons should be accompanied by explicit text.

### Icon containers

A colored icon may appear inside a subtle tinted container:

```text
blue icon   + blue 10–14% tint
violet icon + violet 10–14% tint
amber icon  + amber 10–14% tint
red icon    + red 10–14% tint
```

Avoid fully saturated square icon tiles.

---

## 08 // COMPONENT CATALOG

DB01 is assembled from reusable primitives and domain components.

### 08.1 Foundational components

| Component | Responsibility |
| --- | --- |
| `AppShell` | Application frame, content measure, and global responsive behavior |
| `Sidebar` | Product navigation, hierarchy, environment, and account controls |
| `ContextHeader` | Current scope, breadcrumb, utility actions, and system status |
| `PageHeader` | Page title, summary, primary task, and key controls |
| `SectionHeader` | Section title, explanation, filters, and secondary actions |
| `Surface` | Governed background, border, radius, and elevation |
| `Stack` | Vertical rhythm |
| `Cluster` | Horizontal grouping and wrapping |
| `Divider` | Low-noise structural separation |
| `ScrollArea` | Controlled overflow with visible affordance |

### 08.2 Navigation components

| Component | Responsibility |
| --- | --- |
| `SidebarItem` | Default, hover, focus, active, selected, and disabled navigation states |
| `NavGroup` | Related destinations with optional disclosure |
| `Breadcrumb` | Scope and location |
| `Tabs` | Peer-level view switching |
| `CommandPalette` | Search, navigation, and executable actions |
| `EnvironmentBadge` | Production, staging, local, or restricted environment indicator |

### 08.3 Input and action components

| Component | Responsibility |
| --- | --- |
| `PrimaryButton` | Highest-priority safe action |
| `SecondaryButton` | Supporting action |
| `DangerButton` | Destructive action with explicit confirmation path |
| `IconButton` | Compact action with accessible label |
| `TextField` | Text entry with label, help, error, and disabled state |
| `Select` | Governed option selection |
| `Combobox` | Searchable selection |
| `DateRange` | Date or reporting window |
| `FilterBar` | Active filters, saved views, and reset |
| `SegmentedControl` | Small set of mutually exclusive options |

### 08.4 Feedback and state components

| Component | Responsibility |
| --- | --- |
| `StatusBadge` | Labeled status with icon and semantic color |
| `Alert` | Informational, warning, error, or success message |
| `Toast` | Brief recoverable feedback |
| `Progress` | Completion state with accessible text |
| `Skeleton` | Layout-preserving loading state |
| `EmptyState` | Explanation and next action |
| `ErrorState` | Failure, impact, recovery, and support path |
| `PermissionState` | Access boundary and escalation path |
| `OfflineState` | Connectivity and synchronization status |
| `StaleDataState` | Data freshness warning |

### 08.5 Data components

| Component | Responsibility |
| --- | --- |
| `Metric` | Label, dominant value, trend, context, and optional target |
| `MetricGroup` | Related indicators with shared scope |
| `DataTable` | Sortable, filterable, inspectable records |
| `Timeline` | Chronological workflow or audit events |
| `ActivityList` | Recent actions and records |
| `ChartFrame` | Title, scope, legend, plot, source, and empty/error states |
| `EvidencePanel` | Source, confidence, timestamp, and supporting context |
| `AuditTrail` | Immutable or traceable event history |
| `ComparisonPanel` | Current versus baseline, target, or peer |
| `RiskPanel` | Severity, likelihood, impact, owner, and mitigation |

### 08.6 AI and reasoning components

| Component | Responsibility |
| --- | --- |
| `AgentStatus` | Agent state, model, tool access, and execution boundary |
| `ReasoningSummary` | User-facing rationale without exposing private chain-of-thought |
| `EvidenceCitation` | Source link, excerpt, timestamp, and reliability |
| `HumanReviewGate` | Required approval, reviewer, and decision |
| `ConfidenceIndicator` | Calibrated confidence with explanation |
| `ToolExecutionLog` | Auditable action history |
| `PolicyBoundary` | Restricted capability or safety constraint |
| `EscalationPanel` | Human handoff and urgency |

---

## 09 // COMPONENT STATE MATRIX

Every interactive component must explicitly support relevant states.

| State | Required treatment |
| --- | --- |
| Default | Quiet surface, legible text, stable layout |
| Hover | Small contrast or border change |
| Focus visible | High-contrast ring with offset |
| Active | Brief press feedback |
| Selected | Raised surface, stronger text/icon emphasis |
| Disabled | Reduced emphasis without misleading affordance |
| Loading | Stable skeleton or progress state |
| Empty | Explain absence and provide the next useful action |
| Warning | Labeled amber treatment with impact and response |
| Error | Labeled red treatment with recovery path |
| Success | Labeled green confirmation |
| Permission denied | Explain access boundary and escalation |
| Offline | Explain what remains available and what is paused |
| Stale | Show last-updated time and refresh path |
| Partial | Explain incomplete scope or degraded capability |
| Review required | Violet governance state and named reviewer or next step |

### State writing formula

```text
STATE
What happened?
What is affected?
What can the user do now?
What happens next?
```

---

## 10 // BUTTON AND ACTION HIERARCHY

### Action levels

| Level | Visual treatment | Use |
| --- | --- | --- |
| Primary | Pale inverse surface or governed primary accent | One dominant safe action |
| Secondary | Dark raised surface with border | Supporting action |
| Tertiary | Text or icon action | Low-priority utility |
| Destructive | Red-tinted surface and explicit label | Delete, revoke, terminate |
| Critical confirm | Red emphasis plus confirmation | Irreversible or high-impact operation |
| Review | Violet treatment | Approval, validation, governance |

### Rules

- Do not place multiple primary buttons in one local decision area.
- Use verbs that describe the result.
- Avoid vague labels such as `Submit`, `Proceed`, or `Yes`.
- Destructive actions must name the affected object.
- High-impact actions should expose consequences before execution.
- Disabled buttons must not be the only explanation of why an action is unavailable.

---

## 11 // METRIC AND KPI GRAMMAR

A standard metric item contains:

1. category or scope label;
2. dominant numerical value;
3. unit where applicable;
4. comparison baseline;
5. trend direction;
6. target or threshold;
7. status label;
8. timestamp or reporting period;
9. optional source.

Example structure:

```text
PATIENT WAITING TIME
18 min
↓ 12% from last week
Target: ≤ 20 min
Status: Within target
Updated 14:30 WIB
```

### Metric color rules

- Green: within target or improved.
- Amber: approaching threshold or uncertain.
- Red: breached threshold or materially degraded.
- Blue: neutral context.
- Violet: pending validation or review.
- Gray: unavailable or not assessed.

Never color the entire metric panel solely to display a trend.

---

## 12 // DATA VISUALIZATION STANDARD

DB01 is chart-first when quantitative relationships are central to the task.

### Chart anatomy

Every chart should include:

```text
TITLE
SCOPE / DATE RANGE
PRIMARY INSIGHT
PLOT
LEGEND
ANNOTATIONS
SOURCE
LAST UPDATED
EMPTY / ERROR / PARTIAL STATE
```

### Chart selection

| Analytical question | Preferred chart |
| --- | --- |
| Trend over time | Line or area chart |
| Compare categories | Horizontal bar chart |
| Composition | Stacked bar; donut only for few categories |
| Distribution | Histogram or box plot |
| Relationship | Scatter plot |
| Progress to target | Bullet chart or progress bar |
| Flow through stages | Funnel or step flow |
| Schedule or occupancy | Heatmap or timeline |
| Geographic distribution | Map only when geography changes the decision |
| Single current value | Metric, not a chart |
| Small repeated trends | Sparklines |

### Visualization rules

1. Start with the user decision, not the chart type.
2. Use direct labels when practical.
3. Avoid legends that force excessive eye movement.
4. Use grid lines sparingly.
5. Use zero baselines where comparison requires them.
6. Mark thresholds explicitly.
7. Annotate material events.
8. Do not use 3D charts.
9. Avoid gauge charts unless the domain convention requires one.
10. Do not use pie charts with many categories.
11. Do not animate historical values in a way that impedes comparison.
12. Provide a tabular or textual alternative for critical information.

### Positive/negative convention

Status color must reflect the domain, not merely direction.

Examples:

- lower waiting time may be positive;
- lower revenue may be negative;
- higher incident count may be negative;
- higher clinical escalation may be either appropriate detection or operational deterioration.

Labels must state the meaning.

---

## 13 // TABLES AND RECORD LISTS

### Table anatomy

A production table should support:

- clear column labels;
- stable row identity;
- sorting where meaningful;
- filtering where meaningful;
- visible selection;
- empty and error states;
- pagination or virtualization for large datasets;
- keyboard navigation where practical;
- row actions that remain discoverable;
- export only when governance permits;
- data freshness and source context.

### Table density

| Mode | Row height | Use |
| --- | ---: | --- |
| Comfortable | `60–72px` | General workflows |
| Standard | `52–60px` | Operational records |
| Compact | `44–52px` | Expert data review |
| Ultra-compact | Avoid by default | Specialized terminal-like interfaces only |

### Record row structure

```text
IDENTITY
Primary title
Secondary context
Status
Key value
Timestamp
Owner
Action
```

Avoid placing every record inside a separate card.

---

## 14 // FORMS AND VALIDATION

### Form composition

- Group fields by task, not by database table.
- Explain why sensitive information is requested.
- Mark required fields explicitly.
- Validate near the field and again at submission.
- Preserve user input after recoverable errors.
- Use clear date, time, currency, and locale formatting.
- Provide examples for non-obvious formats.
- Avoid placeholder-only labels.

### Error language

Poor:

```text
Invalid input.
```

Preferred:

```text
The referral number must contain 12 digits. Check the number and try again.
```

### High-impact forms

For clinical, financial, security, or governance workflows:

- summarize the action before submission;
- show affected records;
- require explicit confirmation when irreversible;
- record actor, timestamp, and decision context;
- expose validation failures clearly;
- fail closed when required evidence is missing.

---

## 15 // CONTENT DESIGN

DB01 language is concise, explicit, and operational.

### Voice

```text
CALM
DIRECT
SPECIFIC
NON-DRAMATIC
RESPONSIBLE
HUMAN
```

### Writing rules

- Lead with the action or conclusion.
- Use specific nouns and verbs.
- Avoid decorative slogans inside operational flows.
- State uncertainty directly.
- Name blocked dependencies.
- Name the owner or next decision where possible.
- Use exact dates and times for time-sensitive states.
- Distinguish fact, estimate, inference, and recommendation.
- Do not imply success before validation completes.

### Labels

Preferred:

```text
Review referral
Export verified records
Approve access request
Retry data synchronization
Open audit history
```

Avoid:

```text
Continue
Go
Process
Handle
Okay
```

---

## 16 // ACCESSIBILITY STANDARD

DB01 targets WCAG 2.2 AA at the completed screen level.

A dark theme alone does not establish accessibility.

### Required controls

- Use semantic HTML elements.
- Preserve visible keyboard focus.
- Provide meaningful names for icon-only actions.
- Maintain logical focus order.
- Support keyboard operation for all primary workflows.
- Pair status color with labels or icons.
- Avoid essential hover-only content.
- Provide text alternatives for charts and images.
- Ensure modal focus is trapped and returned correctly.
- Respect reduced motion.
- Respect browser zoom and text scaling.
- Avoid fixed heights that clip translated or enlarged text.
- Expose errors programmatically.
- Use `aria-live` selectively for asynchronous updates.
- Ensure disabled and read-only states remain distinguishable.

### Contrast review

Contrast must be checked for:

- primary and secondary text;
- muted text;
- borders;
- focus rings;
- badges;
- charts;
- disabled controls;
- selected navigation;
- error and warning states;
- text placed on tinted accent surfaces.

---

## 17 // RESPONSIVE POLICY

DB01 is desktop-led but must support deliberate compact compositions.

| Viewport | Required adaptation |
| --- | --- |
| Large desktop, `1440px+` | Full shell, persistent navigation, broad analytical layout |
| Desktop, `1280–1439px` | Preserve hierarchy; tighten gutters proportionally |
| Compact desktop, `1024–1279px` | Reduce navigation width; convert selected grids |
| Tablet landscape, `768–1023px` | Navigation rail or drawer; prioritized two-column layout |
| Tablet portrait | Single dominant content column with selective secondary panels |
| Mobile, `<768px` | Compact header, explicit navigation trigger, single-column task flow |

### Mobile priority order

```text
1. Critical state
2. Primary task
3. Essential metric
4. Required action
5. Supporting analysis
6. Historical records
7. Tertiary controls
```

### Responsive behavior rules

- Preserve record identity before secondary metadata.
- Preserve the primary action before utility actions.
- Move filters into a drawer when space is limited.
- Convert tables into compact records only when column comparison is no longer viable.
- Do not hide critical status inside overflow menus.
- Do not shrink typography below legible operational sizes.
- Test long Indonesian and English labels.

---

## 18 // MOTION SYSTEM

Motion clarifies causality and state change.

### Timing

| Motion | Duration |
| --- | ---: |
| Press feedback | `80–120ms` |
| Hover transition | `120–180ms` |
| Small disclosure | `160–220ms` |
| Panel transition | `200–280ms` |
| Modal or command palette | `220–320ms` |

### Motion rules

- Animate opacity and transform when possible.
- Avoid large parallax effects.
- Do not animate critical numbers continuously.
- Do not delay access to information for visual presentation.
- Use motion to indicate origin, destination, expansion, collapse, or completion.
- Respect `prefers-reduced-motion`.

---

## 19 // THEMING AND PRODUCT IDENTITY

DB01 is one shared system, not one visually identical product.

Each Sentra product may define one governed product accent.

### Product accent model

```text
GLOBAL FOUNDATION    shared DB01 neutral tokens
GLOBAL STATUS        shared success/info/warning/danger/review tokens
PRODUCT ACCENT       one primary category accent
DOMAIN PALETTE       optional chart or category mapping
LOCAL COMPONENT      product-specific variants with documented reasons
```

### Example mappings

| Product domain | Suggested accent |
| --- | --- |
| Sentra AI Core | Violet |
| Medical Assist | Teal or cyan |
| Hospital operations | Sky or teal |
| Financial command center | Amber |
| Research platform | Indigo |
| Agent orchestration | Cyan |
| Governance and audit | Violet |
| Maternal and family services | Rose or pink |

These are recommendations, not hard-coded global meanings.

---

## 20 // CLINICAL AND HIGH-STAKES EXTENSIONS

When DB01 is used for clinical or other high-stakes systems, the following additions
are mandatory.

### Clinical safety display

- Explicitly distinguish observation, inference, recommendation, and decision.
- Display evidence source and time.
- Show missing or unreliable data.
- Do not hide red flags below non-critical content.
- Use labeled severity, not color alone.
- Provide a human escalation path.
- Do not present a generated conclusion as confirmed fact.
- Fail closed where the workflow requires evidence.
- Record user actions and system outputs for audit.
- Clearly mark non-clinical or informational functions.

### High-stakes confirmation

Before consequential actions, show:

```text
ACTION
SCOPE
AFFECTED SUBJECTS OR RECORDS
EVIDENCE
KNOWN LIMITATIONS
REVERSIBILITY
AUTHORIZATION
```

---

## 21 // LOADING, EMPTY, ERROR, AND DEGRADED STATES

These states are part of the feature, not implementation leftovers.

### Loading

- Preserve the final layout.
- Avoid random skeleton geometry.
- Show progress for operations longer than a brief transition.
- Distinguish waiting, processing, and queued states.

### Empty

An empty state must explain:

- what is absent;
- whether absence is expected;
- whether filters caused the empty result;
- what action is available.

### Error

An error state must explain:

- what failed;
- what is affected;
- whether data is preserved;
- what the user can do;
- when escalation is required.

### Degraded

A degraded state must explain:

- which capability remains available;
- which capability is unavailable;
- whether the displayed data is stale, partial, or estimated;
- the last successful update.

---

## 22 // DATA TRUST AND PROVENANCE

Operational data should expose trust context.

### Minimum provenance where relevant

```text
SOURCE
OWNER
SCOPE
LAST UPDATED
REFRESH STATUS
DATA QUALITY
CONFIDENCE OR VALIDATION STATE
```

### Trust indicators

| State | Meaning |
| --- | --- |
| Verified | Passed required validation |
| Provisional | Available but not fully validated |
| Partial | Incomplete scope |
| Stale | Older than the accepted freshness threshold |
| Conflicting | Multiple sources disagree |
| Unavailable | Required data could not be retrieved |
| Human-reviewed | Reviewed by an authorized person |
| System-generated | Produced automatically and not independently confirmed |

---

## 23 // IMPLEMENTATION TOKENS

Use semantic variables before literal values.

```css
:root {
  /* Surfaces */
  --db01-canvas: #3e3e3e;
  --db01-shell: #1b1b1b;
  --db01-sidebar: #171717;
  --db01-surface-1: #202020;
  --db01-surface-2: #282828;
  --db01-surface-3: #303030;
  --db01-surface-inverse: #f4f4f1;

  /* Text */
  --db01-text-primary: #f4f4f1;
  --db01-text-secondary: #b8b8b3;
  --db01-text-muted: #90908d;
  --db01-text-disabled: #676764;

  /* Structure */
  --db01-divider: rgb(255 255 255 / 7%);
  --db01-border: rgb(255 255 255 / 10%);
  --db01-border-strong: rgb(255 255 255 / 16%);
  --db01-focus: #ddebff;

  /* Status */
  --db01-success: #30d069;
  --db01-info: #1399e9;
  --db01-warning: #f59e0b;
  --db01-danger: #f53b37;
  --db01-review: #a78bfa;
  --db01-neutral: #a3a3a3;

  /* Category accents */
  --db01-cyan: #22d3ee;
  --db01-violet: #8b5cf6;
  --db01-indigo: #6366f1;
  --db01-teal: #14b8a6;
  --db01-lime: #84cc16;
  --db01-amber: #f59e0b;
  --db01-orange: #f97316;
  --db01-rose: #f43f5e;
  --db01-pink: #ec4899;
  --db01-sky: #38bdf8;

  /* Charts */
  --db01-chart-1: #38bdf8;
  --db01-chart-2: #a78bfa;
  --db01-chart-3: #2dd4bf;
  --db01-chart-4: #fbbf24;
  --db01-chart-5: #fb7185;
  --db01-chart-6: #818cf8;
  --db01-chart-7: #4ade80;
  --db01-chart-8: #fb923c;

  /* Shape */
  --db01-radius-xs: 8px;
  --db01-radius-sm: 12px;
  --db01-radius-md: 16px;
  --db01-radius-lg: 24px;
  --db01-radius-xl: 36px;
  --db01-radius-shell: 56px;
}
```

### Token rules

1. Use semantic tokens first.
2. Do not copy hexadecimal values into component files.
3. Do not use a status token for product decoration.
4. Add a global token only when its semantic role is shared across products.
5. Document product-local tokens beside the product theme.
6. Pair every new color token with contrast verification.
7. Version changes that alter established meaning.

---

## 24 // REFERENCE FILE STRUCTURE

```text
sentra-token-DB01/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── db01/
│   │   │   ├── app-shell.tsx
│   │   │   ├── context-header.tsx
│   │   │   ├── navigation.tsx
│   │   │   ├── page-header.tsx
│   │   │   ├── surface.tsx
│   │   │   ├── status-badge.tsx
│   │   │   ├── metric.tsx
│   │   │   ├── chart-frame.tsx
│   │   │   ├── data-table.tsx
│   │   │   ├── empty-state.tsx
│   │   │   ├── error-state.tsx
│   │   │   └── icons.tsx
│   │   └── examples/
│   │       ├── executive-dashboard.tsx
│   │       ├── operations-dashboard.tsx
│   │       ├── clinical-dashboard.tsx
│   │       └── agent-supervision.tsx
│   └── lib/
│       ├── db01-tokens.ts
│       └── db01-status.ts
├── docs/
│   ├── accessibility.md
│   ├── color.md
│   ├── content.md
│   ├── governance.md
│   └── responsive.md
├── next.config.ts
├── package.json
└── README.md
```

---

## 25 // IMPLEMENTING DB01 IN A NEW PRODUCT

Use the following sequence.

### Phase 1 — Understand the product

1. Identify the primary user.
2. Identify the primary decision or task.
3. Identify critical and high-risk states.
4. Define data sources and freshness.
5. Define authorization boundaries.
6. Define desktop and mobile priority order.

### Phase 2 — Establish structure

1. Apply the canonical app shell.
2. Define navigation and page hierarchy.
3. Place the primary task.
4. Place critical signals before supporting analytics.
5. Define page-level empty, loading, error, and permission states.

### Phase 3 — Apply visual system

1. Use DB01 foundation tokens.
2. Select one product accent.
3. Map status states to shared status tokens.
4. Select chart colors from the data palette.
5. Apply typography and spacing scales.
6. Validate focus, contrast, and responsive behavior.

### Phase 4 — Validate

1. Run type checking.
2. Run linting.
3. Run production build.
4. Test keyboard navigation.
5. Test reduced motion.
6. Test representative long labels.
7. Test loading, empty, warning, error, and permission states.
8. Inspect at intended desktop and compact breakpoints.
9. Record deliberate deviations.

---

## 26 // DESIGN QA CHECKLIST

### Visual

- [ ] Dark charcoal, not pure-black, primary surfaces
- [ ] One clear primary task per local decision area
- [ ] Stable spacing and alignment
- [ ] Color used semantically
- [ ] Critical red remains scarce and meaningful
- [ ] No unnecessary card nesting
- [ ] No decorative glass effects
- [ ] No uncontrolled literal colors
- [ ] Charts use the governed palette
- [ ] Product accent does not overwrite status meaning

### Interaction

- [ ] Hover is subtle
- [ ] Focus is visible
- [ ] Active feedback is brief
- [ ] Disabled state is understandable
- [ ] Primary actions use specific verbs
- [ ] Destructive actions name consequences
- [ ] Keyboard order matches reading order
- [ ] Overflow actions remain discoverable

### Data and trust

- [ ] Source is identified where relevant
- [ ] Reporting period is visible
- [ ] Stale or partial data is labeled
- [ ] Missing data does not appear as zero
- [ ] Generated or inferred content is identified
- [ ] High-impact conclusions expose evidence
- [ ] Human review state is visible

### Responsive

- [ ] Desktop reference remains intact
- [ ] Tablet adaptation is deliberate
- [ ] Mobile prioritizes critical state and primary task
- [ ] Tables transform appropriately
- [ ] Long labels do not break layout
- [ ] Critical actions are not hidden in overflow
- [ ] Touch targets remain usable

### Accessibility

- [ ] Semantic controls
- [ ] Accessible names
- [ ] Visible focus
- [ ] Status is not color-only
- [ ] Text and state contrast reviewed
- [ ] Reduced motion supported
- [ ] Chart alternatives available
- [ ] Error messages are programmatically associated

---

## 27 // ANTI-PATTERNS

### Do not

- use pure black for all surfaces;
- add random bright colors;
- use red, green, or amber as decoration;
- make every section a rounded card;
- use gradients behind body text;
- use oversized empty hero sections in operational tools;
- hide critical states below charts;
- use tiny low-contrast metadata;
- use icon-only actions without accessible names;
- remove focus outlines;
- use placeholder text as the only label;
- show a spinner without explaining long-running work;
- treat missing data as zero;
- claim readiness before build and interaction verification;
- add global tokens for one local use case;
- redesign the DB01 shell inside a product feature.

### Prefer

- explicit state;
- meaningful hierarchy;
- governed accents;
- chart-first analysis;
- direct labels;
- visible provenance;
- minimal but complete interaction;
- deliberate responsive behavior;
- recoverable errors;
- human authorization for consequential actions.

---

## 28 // INTERNAL PROMPT CONTRACT

The following instruction applies the DB01 system:

```text
Gunakan Sentra Artificial Intelligence DB01 sebagai source of truth visual.

Pertahankan:
- dark-neutral charcoal surfaces;
- canonical shell and navigation proportions;
- disciplined spacing and rounded geometry;
- high-legibility typography;
- chart-first analytical hierarchy;
- semantic status colors;
- governed multi-accent category and chart palette;
- visible focus and accessible interaction states;
- explicit loading, empty, warning, error, stale, partial, and permission states.

Jangan:
- mendesain ulang gaya visual;
- menggunakan pure black sebagai surface utama;
- memakai warna cerah secara acak;
- menjadikan seluruh panel berwarna;
- menggunakan status color sebagai dekorasi;
- menambahkan glassmorphism atau shadow berlebihan;
- mengorbankan hierarchy demi tampilan ramai.

Adaptasikan isi, information architecture, workflow, dan product accent terhadap modul
Sentra yang sedang dibangun, tetapi pertahankan kontrak DB01.
```

### Compact prompt version

```text
Use DB01 as the visual source of truth: dark charcoal shell, disciplined spacing,
high-legibility typography, chart-first hierarchy, one governed product accent,
semantic status colors, accessible states, and no decorative color noise.
```

---

## 29 // CHANGE GOVERNANCE

DB01 evolves through intentional, versioned changes.

### Changes requiring design-system review

- global colors;
- color semantics;
- typography stack;
- spacing scale;
- radius scale;
- shell geometry;
- sidebar proportions;
- header height;
- status meaning;
- focus treatment;
- shared component behavior;
- chart palette;
- accessibility baseline.

### Product-local changes

- domain labels;
- navigation destinations;
- sample data;
- workflow copy;
- product accent;
- chart series mapping;
- local empty and error messages;
- product-specific fields.

### Required change record

Every deliberate visual deviation should document:

```text
CHANGE
PRODUCT REASON
AFFECTED COMPONENTS
ACCESSIBILITY IMPACT
RESPONSIVE IMPACT
MIGRATION IMPACT
APPROVER
```

---

## 30 // VERSIONING

Recommended version model:

```text
MAJOR    semantic or structural contract change
MINOR    new governed token, component, or supported pattern
PATCH    correction, documentation, or non-breaking refinement
```

Example:

```text
DB01 2.0.0
```

A token value change can be breaking when it materially changes contrast, hierarchy,
or status meaning.

---

## 31 // LOCAL DEVELOPMENT

### Prerequisites

- Node.js 20 LTS or later
- npm 10 or later

### Run locally

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

### Validate production build

```bash
npm run build
npm run start
```

### Recommended validation commands

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

Only list commands that are actually configured in `package.json`.

---

## 32 // REPOSITORY STATUS

| Item | Status |
| --- | --- |
| Canonical design name | `Sentra Artificial Intelligence DB01` |
| System type | Governed dark operational design system |
| Visual mode | Dark-neutral with semantic multi-accent color |
| Primary reference | Current DB01 dashboard implementation |
| Technology | Next.js, React, TypeScript, Tailwind CSS, Lucide |
| Repository | `drferdii/sentra-token-DB01` |
| Visibility | Private |
| Primary target | Desktop operational and analytical interfaces |
| Compact target | Tablet and mobile deliberate adaptations |
| Accessibility target | WCAG 2.2 AA at completed-screen level |
| Current maturity | Canonical specification and reference implementation |

---

## 33 // DEFINITION OF DONE

A DB01 implementation is complete only when:

1. the intended product workflow is functional;
2. the canonical visual hierarchy is preserved;
3. color roles are semantic and documented;
4. loading, empty, error, stale, partial, and permission states exist;
5. focus and keyboard behavior are verified;
6. charts remain understandable without color alone;
7. desktop and compact layouts are inspected;
8. data source and freshness are visible where relevant;
9. build and required tests pass;
10. deliberate deviations are recorded.

---

<p align="center">
  <strong>Sentra Artificial Intelligence · DB01</strong><br />
  <sub>Quiet surfaces. Explicit signals. Richer meaning. Durable hierarchy.</sub>
</p>
