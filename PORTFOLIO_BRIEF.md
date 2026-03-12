# Joseph Taddeo — Personal Portfolio Brief

> **Purpose**: Comprehensive reference for AI-assisted portfolio website generation. Contains all verified facts, design preferences, and structural blueprints.

---

## CONTACT & IDENTITY

| Field | Value |
|-------|-------|
| **Name** | Joseph Taddeo |
| **Location** | New York, NY (from Long Island) |
| **Email** | jjtjoseph1@gmail.com |
| **Phone** | 516-669-9372 |
| **Portfolio** | josephtaddeo.com |
| **GitHub** | github.com/jjtjoseph |
| **LinkedIn** | linkedin.com/in/josephtaddeo (verify URL) |

---

## PROFESSIONAL SUMMARY

Operations and software professional with experience building internal tools, automating workflows, and coordinating cross-functional work at a growing business. Built automation systems that reduced processing time by 80% and increased throughput by 20%. Created a full-stack marketing website for a luxury consignment business. Currently focused on roles at the intersection of operations, technology, and fast-paced startup environments.

---

## EDUCATION

**University at Albany, State University of New York**  
Bachelor of Science in Computer Science, Minor in Mathematics  
August 2020 – May 2025

---

## EXPERIENCE

### LuxeSwap — Operations & Software Engineer
**February 2025 – Present** | Oyster Bay, NY

- Built automation tools that reduced item processing time by 80% and increased weekly throughput by 20%
- Created reconciliation system matching eBay transactions to internal records, automating fee calculations
- Designed and developed full-stack marketing website (React/Vite/Express) with live inventory integration
- Coordinated with sales, photography, operations, and finance teams
- Documented workflows through checklists and process guides
- Handled high-volume receiving, shipping, and quality control for luxury merchandise

### FedEx — Operations Associate
**August 2023 – December 2023** | Troy, NY

- Executed high-volume package operations under tight deadlines
- Maintained accuracy and met daily targets in fast-paced logistics environment

---

## PROJECTS

### 1. LuxeSwap Website
**Type**: Full-stack marketing website  
**Tech**: React, Vite, Express, Node.js  
**Live**: luxeswap.com

**What it does**:
- Displays live eBay inventory via Browse API integration
- Shows AuctionNinja auction items via Puppeteer scraper
- Generates leads through contact forms
- Provides SEO presence for organic discovery

**Metrics**:
- 195 commits
- 19 pages, 27 components
- 15,577 lines of code
- 8-language internationalization with RTL Arabic support
- Built solo in ~6 weeks

**Highlights**:
- Cinematic hero with video crossfade
- Exhibition-style banners and brand showcase animations
- Dynamic sitemap and JSON-LD structured data
- Mobile-first responsive design

---

### 2. EZ-Lister (Inventory Automation)
**Type**: Python desktop application  
**Tech**: Python, Tkinter, PyInstaller

**What it does**:
- Reads Excel spreadsheets containing garment measurements
- Categorizes items using configurable keyword matching (77+ categories)
- Generates HTML listings for eBay via GarageSale
- Maps to eBay Item Specifics automatically

**Metrics**:
- 15,000+ items processed
- 80% time reduction (10 min → 2 min per item)
- 3,000+ lines of hardcoded logic eliminated through JSON refactoring

**Highlights**:
- Category Manager UI for non-technical editing
- Self-updating macOS app with GitHub release detection
- Word-boundary regex matching with longest-pattern priority

---

### 3. Sales Consolidator (Financial Reconciliation)
**Type**: Python desktop application  
**Tech**: Python, Tkinter, Pandas, multi-threaded

**What it does**:
- Matches eBay transaction reports to internal listing records
- Redistributes fees proportionally for multi-item orders
- Generates reconciliation reports with consignment splits

**Metrics**:
- Algorithm optimized from O(n²) to O(n+m)
- Execution time reduced from 60s to <5s (20x improvement)

**Highlights**:
- Unified Transaction Dictionary for O(1) lookups
- HTML Meta-Index for batch metadata extraction
- macOS app bundle for Gatekeeper compliance

---

### 4. Career Intelligence Platform (Capstone)
**Type**: University capstone project (team)  
**Sponsor**: Dr. Chidansh Bhatt (IBM Watson)  
**Period**: 2024–2025

**What I did**:
- Led discussions and managed cross-functional collaboration
- Built data pipelines integrating CareerOneStop (Dept. of Labor) API
- Created Plotly choropleth salary maps across 50 US states
- GPT-based resume/job parsing
- MongoDB Atlas storage, Mapbox geographic analytics

---

## SKILLS

### Technical
| Category | Skills |
|----------|--------|
| **Languages** | Python, JavaScript, SQL, HTML/CSS |
| **Frameworks** | React, Express, Node.js, Vite |
| **Tools** | Git, PyInstaller, Tkinter, Pandas |
| **Platforms** | macOS, eBay APIs, AuctionNinja |

### Operations
- Cross-functional coordination
- Process improvement & documentation
- Workflow automation
- Inventory management
- Financial reconciliation

### Soft Skills
- Detail-oriented
- Self-directed
- Fast-paced environment experience
- Startup experience

---

## LANGUAGES

| Language | Proficiency |
|----------|-------------|
| English | Fluent |
| Italian | Basic |
| Ukrainian | Elementary |

---

## ADDITIONAL

- **Pledge Class President**, Zeta Beta Tau — coordinated events and communication across 20+ members
- Available to work retail hours including weekends

---

# DESIGN BLUEPRINT

## Aesthetic Direction

**Style**: "Quiet Luxury" meets Modern Developer  
Position as a professional who bridges operations and engineering — clean, confident, understated.

| Principle | Implementation |
|-----------|----------------|
| **Clean** | Generous whitespace, minimal navigation, focused content hierarchy |
| **Confident** | Strong typography, subtle animations, no clutter |
| **Professional** | Dark mode optional, premium feel without pretension |

## Typography

| Element | Suggestion |
|---------|------------|
| **Headlines** | Serif or modern sans (e.g., Playfair Display, Inter) |
| **Body** | Clean sans-serif (e.g., Inter, Outfit) |
| **Code** | Monospace (e.g., JetBrains Mono, Fira Code) |

## Color Palette

| Purpose | Suggestion |
|---------|------------|
| **Background** | Near-black (#0a0a0a) or off-white (#fafafa) |
| **Text** | High contrast (#ffffff on dark, #1a1a1a on light) |
| **Accent** | Muted gold or warm neutral for sophistication |
| **Links** | Subtle underline or color shift on hover |

---

# SITE STRUCTURE

## Pages

### 1. Home / Hero
- Name + tagline
- Brief summary (2-3 sentences)
- Call to action: "View Projects" / "Get in Touch"

### 2. About
- Professional summary
- Background and interests
- Photo (optional)

### 3. Projects
- Card-based layout with project thumbnails
- Each card: Title, tech stack, brief description, link
- Expand to detail page or modal with:
  - Full description
  - Metrics/impact
  - Screenshots or demo
  - GitHub link (if applicable)

### 4. Experience
- Timeline or card-based
- Company, role, dates
- Key accomplishments (bullets)

### 5. Contact
- Simple form (name, email, message)
- Links to GitHub, LinkedIn, email

## Optional / Future
- Blog section
- Resume download (PDF)
- Dark/light mode toggle

---

# IMPLEMENTATION NOTES

## Tech Stack Suggestions
- **Static/Simple**: Next.js, Astro, or plain React + Vite
- **Hosting**: Vercel, Netlify, or GitHub Pages
- **Forms**: Formspree, Netlify Forms, or custom API

## Key Features
- SEO-optimized (meta tags, OpenGraph, JSON-LD)
- Mobile-responsive
- Fast page loads (optimize images, lazy load)
- Accessible (focus states, alt text, color contrast)

## Do NOT Include
- ❌ Fabricated metrics
- ❌ Technologies I haven't actually used
- ❌ Inflated line counts or project scopes
- ❌ "AI-powered" or "machine learning" claims (my tools use regex/config, not ML)

---

# VERIFIED FACTS ONLY

This document uses the same fact-checking principles as the resume workflow. Every claim must be traceable to:
1. Git history
2. Technical documentation
3. User-verified facts

If something isn't in this document, ASK before including it on the portfolio.
