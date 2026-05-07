# Consultex Brand & Design Guidelines

> A reference document for maintaining visual and UX consistency across the Consultex platform.

---

## 1. Brand Identity

**Product Name:** Consultex  
**AI Assistant Name:** Robi®  
**Tagline Concept:** Fortune 500-grade rigor, applied automatically.  
**Brand Voice:** Confident, intelligent, action-oriented. Speaks in outcomes, not features.

---

## 2. Color Palette

### Brand Colors

| # | Token | Color Name | Hex |
|---|-------|------------|-----|
| 1 | `--color-primary` | Deep Navy | `#233849` |
| 2 | `--color-primary-2` | Ocean Blue | `#1e70a0` |
| 3 | `--color-highlight-1` | Teal Cyan | `#2394ae` |
| 4 | `--color-highlight-2` | Amber Gold | `#f3a31e` |
| 5 | `--color-surface` | Off-white | `#fefefe` |

### Gradient

The primary brand gradient blends **Primary 1 → Primary 2**, used for hero sections, banners, the AI panel, and elevated card headers.

```css
/* Primary brand gradient */
background: linear-gradient(135deg, #233849 0%, #1e70a0 100%);

/* Subtle variation for cards / surfaces */
background: linear-gradient(160deg, #233849 0%, #2394ae 100%);

/* Horizontal — for nav bars / top strips */
background: linear-gradient(90deg, #233849 0%, #1e70a0 60%, #2394ae 100%);
```

### Usage Rules

- **Primary `#233849`** — Main backgrounds, sidebar, top navbar, modal overlays, and dark UI surfaces.
- **Primary 2 `#1e70a0`** — CTAs, buttons, links, active navigation states, progress bars, and interactive elements. Can be used solo or as part of the gradient.
- **Gradient (Primary → Primary 2)** — Hero sections, feature banners, the Robi® AI panel background, card headers on dark surfaces. Adds depth without introducing new colors.
- **Highlight 1 `#2394ae`** — Accent elements: chart lines, icon strokes, badges, hover state borders, section dividers, and secondary tags.
- **Highlight 2 `#f3a31e`** — Used sparingly: small text highlights, KPI callout underlines, hot-intent labels, task urgency indicators, and tooltip accents. Never apply to large surfaces.
- **Off-white `#fefefe`** — Card backgrounds, main content area, body text on light surfaces, and input fields. Avoids the harshness of pure white.

---

## 3. Typography

### Font Roles

| Role | Style | Usage |
|------|-------|-------|
| Display / Page Title | Large serif or semi-serif, light weight | Page headings (e.g., "Audience") |
| Section Labels | All-caps, spaced, small size | Category labels (e.g., "SALES & MARKETING") |
| Body / UI Text | Clean sans-serif, regular weight | Descriptions, sidebar items, table content |
| Data / Metrics | Tabular numerals, medium-large | KPI values, stats, chart labels |
| Timestamps / Meta | Small sans-serif, muted color | Dates, due dates, secondary info |

### Type Scale Guidelines

- Page titles: `32–40px`, light/thin weight
- Section labels: `10–11px`, uppercase, `1.5–2px` letter-spacing, muted color
- KPI values: `28–36px`, medium weight
- Body text: `13–14px`, regular weight, `1.5` line height
- Navigation items: `13px`, medium weight

---

## 4. Spacing & Layout

### Grid System

- **Sidebar width:** ~240px (fixed)
- **Right AI panel width:** ~280px (collapsible)
- **Main content area:** fluid, with `24–32px` horizontal padding
- **Card padding:** `20–24px`
- **Section gap:** `32–48px`

### Spacing Scale

Use an 8px base unit:
`4px · 8px · 12px · 16px · 24px · 32px · 48px · 64px`

---

## 5. Components

### Navigation Sidebar

- Background: Light gray / off-white
- Active section: Left `3px` red border indicator
- Active item: Ocean Blue text
- Icons: Outlined style, `16–18px`
- Nested items: Indented `16px`, no icons

### KPI / Stat Cards

- White background, subtle border or shadow
- Label: All-caps, muted gray, small
- Value: Large numeral, dark
- Underline accent: `2px` colored line beneath value (ocean blue, amber, or gray depending on state)
- Tooltip icon: `ⓘ` in muted gray

### Buttons

| Type | Style |
|------|-------|
| Primary CTA | Ocean Blue `#1e70a0` background, white text, `6–8px` border-radius |
| Secondary CTA | White background, dark border, dark text |
| AI Action Button | Dark navy, white text, small "✦" or star prefix icon |
| Ghost / Outline | Transparent, Ocean Blue `#1e70a0` border, Ocean Blue text |

### Charts & Data Visualization

- Use multi-line area charts for trend data
- Line colors: Ocean Blue `#1e70a0` (primary), Teal Cyan `#2394ae` (secondary), Amber Gold `#f3a31e` (alert/intent)
- Fill areas with low-opacity versions of line colors
- Axis labels: Small, muted gray, sans-serif
- Date range selector: Inline, subtle, with dropdown arrow

### Tags & Badges

- Task progress: Percentage in colored text (green = healthy, amber = at risk, red = overdue)
- User avatars: Circular, colored initials, stacked with `-8px` overlap
- Status indicators: Small colored dot prefixes

### AI Panel (Robi®)

- Background: Deep Navy → Ocean Blue gradient (`linear-gradient(135deg, #233849, #1e70a0`)
- Text: White
- Suggestion cards: Slightly lighter navy with left amber `3px` border
- CTA buttons: Dark solid + outline ghost pairing
- Personality copy: Conversational, first-person ("I score, segment, and listen…")

---

## 6. Iconography

- Style: **Outlined**, stroke-based, not filled
- Size: `16px` for navigation, `18–20px` for actions, `24px` for feature icons
- Color: Matches text color of context (dark on light, white on dark)
- No drop shadows on icons

---

## 7. Data & Metrics Display

- All KPI metrics use **tabular figures** (monospaced numbers)
- Zero values (`0`) are displayed as `0` with an amber underline to indicate "needs attention"
- Positive trending metrics use teal; at-risk or declining use amber or red
- Percentage metrics displayed with `%` suffix, no space

---

## 8. Motion & Interaction

- Hover states: Subtle background tint (`opacity: 0.06`), no scale transforms on data cards
- Active navigation: Immediate color change, no delay
- Chart loading: Fade-in + draw animation on lines
- Panel expand/collapse: `200–250ms` ease-in-out
- Modal/drawer: Slide-in from right, `300ms`

---

## 9. AI (Robi®) UX Principles

- Robi® always speaks in **first person**, proactively surfacing insights
- Suggestions appear as **action cards** with a clear verb (Build, Refresh, Analyze)
- AI panel is always accessible but **non-blocking** — users control when to engage
- Robi® copy avoids jargon; favors plain, confident language
- Primary AI CTA uses `✦ CONSULT WITH ROBI®` pattern — star icon prefix signals AI action

---

## 10. Do's and Don'ts

### ✅ Do
- Use Ocean Blue `#1e70a0` as the primary action color consistently
- Use the Primary gradient on dark hero/panel surfaces for depth
- Maintain high contrast between labels and backgrounds
- Use all-caps sparingly — only for section labels and category tags
- Keep the AI panel visually distinct (dark navy) from the main UI

### ❌ Don't
- Don't use Amber Gold `#f3a31e` for CTAs — reserved for urgency/highlight text only
- Don't apply the gradient to small UI elements (buttons, badges) — use solid colors there
- Don't mix serif and display fonts in body copy
- Don't use red outside of navigation indicators and critical alerts
- Don't crowd the main content area — respect generous padding
- Don't use filled icons where outlined are the standard

---

*Last updated: May 2026*
