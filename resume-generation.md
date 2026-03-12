---
description: Guidelines for creating and modifying Joseph Taddeo's resumes
---

# Resume Generation Directive

> **CRITICAL RULE**: Never fabricate. If a fact is not listed below or explicitly confirmed by the user, ASK before including it.

---

# AGENT QUICK START

## How to Use This Document
1. **Read the job post** — Extract keywords (skills, tools, responsibilities)
2. **Check requirements** — Does user have required skills? (see decision tree below)
3. **Find matching verified facts** — Every bullet must trace to a fact in this document
4. **Write in past tense** — All bullets describe what user DID, not what job WANTS
5. **Generate resume** — Use the LaTeX template structure below
6. **Consider cover letter** — For luxury brands or roles emphasizing culture fit

## Job Fit Decision Tree
```
START: Does user have the REQUIRED qualifications?
  │
  ├── YES → Proceed with resume
  │
  └── NO → What's missing?
           │
           ├── Hard skills (ERP, specific software) → ASK user if they have it
           │     │
           │     ├── YES → Add to verified facts, proceed
           │     └── NO → Is it listed as "required" or "preferred"?
           │           │
           │           ├── Required → RECOMMEND SKIP, ask user
           │           └── Preferred → Proceed without claiming it
           │
           └── Years of experience → If close (1-3 yrs, user has ~1) → Proceed
                                   → If far off (5+ yrs required) → RECOMMEND SKIP
```

## LaTeX Template Structure
Every resume follows this structure:
```latex
\documentclass[letterpaper,11pt]{article}
% ... preamble (use existing resume as reference) ...

\begin{document}

% 1. HEADING - Name, contact, location, portfolio, optional GitHub
\begin{center}
    \textbf{\Huge Joseph Taddeo} \\ \vspace{1pt}
    \small 516-669-9372 $|$ jjtjoseph1@gmail.com $|$ New York, NY $|$ josephtaddeo.com
    % Add GitHub for tech roles: $|$ github.com/jjtjoseph
\end{center}

% 2. SUMMARY - 2-3 sentences tailored to role
\section{Summary}
\begin{itemize}[leftmargin=0.15in, label={}]
  \item \small{ ... }
\end{itemize}

% 3. EXPERIENCE - LuxeSwap first, then FedEx
\section{Experience}
% Title should match role type (see Job Title Mapping below)

% 4. PROJECTS - Select 2-3 most relevant
\section{Projects}

% 5. SKILLS - Grouped by category, tailored to role
\section{Skills}

% 6. EDUCATION - Always include
\section{Education}

% 7. ADDITIONAL - Languages, ZBT, availability if relevant
\section{Additional}

\end{document}
```

---

## File Structure
- **Resume source files**: `/Users/josephtaddeo/Desktop/Resume/tex/*.tex`
- **Cover letter files**: `/Users/josephtaddeo/Desktop/Resume/tex/CoverLetter_[Company].tex`
- **Compiled PDFs**: `/Users/josephtaddeo/Desktop/Resume/*.pdf`
- User must compile manually (pdflatex or xelatex) — Desktop folder is outside workspace

## Cover Letter Guidelines

**When to generate a cover letter:**
- Role emphasizes culture/values fit or "Why us?" interest
- Luxury brands (Cartier, Coach, etc.) — personalization matters
- Roles asking for "introduction" or "letter of interest"
- Competitive roles where resume alone may not differentiate

**Cover letter structure:**
1. **Opening** — Specific interest in this company/role (not generic)
2. **Bridge** — 1-2 paragraphs connecting verified experience to their needs
3. **Close** — Brief, confident, with call to action

**Cover letter rules:**
- Same fabrication rules apply — only verified facts
- Match tone to company (luxury = refined, startup = direct)
- Keep under 1 page
- Reference specific things from job post that connect to experience

---

# PROJECT 1: EZ-LISTER

**Path:** `/Users/josephtaddeo/PycharmProjects/ez-lister`  
**Type:** Python desktop application (Tkinter + PyInstaller)  
**Purpose:** Automates creation of eBay listings from Excel measurement files

## What It Actually Does
1. Reads Excel spreadsheets containing garment measurements
2. Categorizes items using keyword matching (77+ configurable categories)
3. Extracts measurements using custom tag parsing
4. Generates HTML listings compatible with GarageSale (eBay listing software)
5. Maps to eBay Item Specifics automatically

## Verified Technical Facts
| Fact | Value | Source |
|------|-------|--------|
| Categories supported | 77+ | `categories.json` configuration |
| Lines of hardcoded logic removed | 3,200+ | Match statements replaced with JSON config |
| Lines of hardcoded logic removed (alternate phrasing) | 3,000+ | Same refactoring |
| Matching algorithm | Word-boundary regex with longest-pattern priority | `categorize.py` |
| Items processed | 15,000+ cumulative | Milestone counter |
| Weekly processing | 450-550 items (total operation) | User verified |
| Personal weekly processing | ~300 items | User verified |
| Time savings | 80% reduction (10 min → 2 min per item) | User verified |

## Key Technical Components
- **Dynamic categorization engine** (`categorize_from_json()`)
- **Custom measurement parser** (`parse_with_custom_tags()`)
- **Category Manager UI** (Tkinter dashboard for non-technical editing)
- **eBay Item Specifics generator** (`generate_item_specifics_from_config()`)
- **Self-updating macOS app** (PyInstaller with GitHub release detection)

## What You CANNOT Claim
- ❌ "AI-powered" (uses regex matching, not ML)
- ❌ "Machine learning" (no ML involved)
- ❌ "15,000+ listings created" (items processed ≠ listings created)
- ❌ "Built category system" (refactored existing categories into JSON)

## Accurate Phrasing Examples
- ✅ "Built automation tool that processes 15,000+ items using configurable category matching"
- ✅ "Eliminated 3,000+ lines of hardcoded logic through JSON configuration refactoring"
- ✅ "Created Category Manager UI enabling non-technical editing of 77+ garment categories"
- ✅ "Reduced item processing time by 80%"

---

# PROJECT 2: SALES CONSOLIDATOR

**Path:** `/Users/josephtaddeo/PycharmProjects/sales_consolidator`  
**Type:** Python desktop application (Tkinter, multi-threaded)  
**Purpose:** Reconciles eBay sales data with local inventory records

## What It Actually Does
1. Loads three data sources:
   - Listings CSV (eBay titles → internal state)
   - HTML Listings (contains Client Codes, UUIDs)
   - Transaction Report (financial data)
2. Matches transactions to listings using composite keys
3. Redistributes fees proportionally for multi-item orders
4. Generates reconciliation reports

## Verified Technical Facts
| Fact | Value | Source |
|------|-------|--------|
| Algorithm complexity | O(n+m) | Technical manual |
| Previous complexity | O(n×m) nested loops | Technical manual |
| Performance improvement | 20x-30x faster | 60s → 3-5s execution |
| Fee redistribution | Proportional based on "Sold For" amount | Algorithm docs |
| Consignment split | 40/60 (automated calculation) | User verified |

## Key Technical Components
- **Unified Transaction Dictionary** (loads CSV once into lookup table)
- **HTML Meta-Index** (walks HTML directory once, extracts all metadata)
- **Proportional Fee Redistribution** algorithm
- **macOS app bundle** (PyInstaller `--onedir` for Gatekeeper compliance)

## What You CANNOT Claim
- ❌ "Real-time reconciliation" (batch process, not real-time)
- ❌ "Processes sales data" (reconciles, doesn't process sales)
- ❌ "Sales analytics" (generates reports, not analytics)

## Accurate Phrasing Examples
- ✅ "Built reconciliation pipeline matching eBay transactions to internal listings"
- ✅ "Automated fee calculations and consignment split reporting"
- ✅ "Optimized matching algorithm from O(n×m) to O(n+m), reducing execution time 20x"

---

# PROJECT 3: LUXESWAP WEBSITE

**Path:** `/Users/josephtaddeo/WebstormProjects/untitled`  
**Type:** Full-stack web application (React/Vite frontend, Express/Node backend)  
**Live URL:** luxeswap.com

## Purpose & Business Function
A **marketing and brand presence website** for LuxeSwap, a luxury consignment house. The site:
- Establishes brand credibility and premium positioning
- Aggregates and displays live inventory from eBay and AuctionNinja
- Drives traffic to purchase channels (links to eBay/AuctionNinja listings)
- Generates B2B and consignment leads via contact forms
- Provides SEO presence for organic discovery

**NOT an e-commerce platform** — no user accounts, no payment processing, no direct purchases. All transactions occur on eBay/AuctionNinja.

## Design Philosophy: "Quiet Luxury"
Position LuxeSwap as a **Consignment House** (heritage institution) rather than a "Resale Site" (commodity).

| Principle | Implementation |
|-----------|----------------|
| **Bespoke** | Custom typography (Requiem, Bodoni), curated layouts, premium photography |
| **Intentional** | High-quality microinteractions, purposeful whitespace, cinematic hero |
| **Collaborative** | Low-friction contact forms, approachable B2B messaging |

## Core Strengths
1. **Live Inventory Integration** — Real-time display of eBay listings and AuctionNinja auctions
2. **SEO Architecture** — Dynamic sitemap, JSON-LD structured data, per-brand landing pages, prerendering
3. **Internationalization** — 8 languages with RTL Arabic support, URL-based locale routing
4. **Premium Visual Design** — Cinematic hero with video crossfade, exhibition-style banners, brand showcase animations
5. **Mobile-First Responsive** — Touch-optimized, GPU-accelerated carousels, infinite scroll
6. **Accessibility** — WCAG AA compliance, focus states, 44px touch targets, reduced motion support

## What It Actually Does
1. **Aggregates inventory** — Fetches and displays eBay listings via Browse API
2. **Displays auctions** — Shows AuctionNinja items via Puppeteer scraper with 10-min refresh
3. **Links to purchase** — All "Buy" actions redirect to eBay or AuctionNinja (no on-site checkout)
4. **Generates leads** — Contact forms for consignment inquiries, B2B partnerships
5. **Builds brand** — Professional presence for luxury positioning

## Verified Technical Facts (from git + codebase)
| Fact | Value | Source |
|------|-------|--------|
| Total commits | 195 | `git log --oneline \| wc -l` |
| Pages (JSX files in /pages) | 19 | Directory listing |
| Components (JSX files in /components) | 27 | Directory listing (unique, excluding backups) |
| Total lines of code (src/) | 15,577 | `wc -l` count |
| Languages supported | 8 | i18n configuration |
| Brands displayed | 61+ | Code references |
| Development timeline | ~6 weeks (solo) | User verified |

## Key Technical Components
- **StorefrontHero** — Cinematic hero with crossfade video
- **WeeklyBanner** — Dynamic auction count from live API
- **BrowseCard** — Product cards with tiered pricing badges
- **NinjaCarousel** — AuctionNinja auction item display
- **BrandShowcase** — Animated brand rain effect
- **SEO component** — Dynamic sitemap, JSON-LD structured data, meta optimization

## API Integrations
| Integration | What It Does | Verified? |
|-------------|--------------|-----------|
| eBay Browse API | Fetches live inventory listings | ✅ Yes |
| AuctionNinja | Puppeteer scraper with 10-min cron refresh | ✅ Yes |
| Cloudinary | CDN for hero videos | ✅ Yes (recent commit) |

## What You CANNOT Claim
- ❌ "Transaction management" (displays inventory only, no transactions)
- ❌ "E-commerce platform" (marketing site, purchases happen on eBay/AuctionNinja)
- ❌ "40K LOC" (actual count is ~15,500 lines in src/)
- ❌ "Multiple third-party APIs" (eBay + AuctionNinja, be specific)

## Accurate Phrasing Examples
- ✅ "Built full-stack e-commerce website displaying real-time inventory from eBay and AuctionNinja"
- ✅ "Implemented 8-language internationalization with RTL Arabic support"
- ✅ "Created SEO architecture with dynamic sitemap generation and JSON-LD structured data"
- ✅ "Shipped 19 pages and 27 components solo in ~6 weeks"
- ✅ "195 commits demonstrating iterative development"

---

# PROJECT 4: CAPSTONE — CAREER INTELLIGENCE PLATFORM

**Type:** University capstone project (team project)  
**Sponsor:** Dr. Chidansh Bhatt (IBM Watson)  
**Period:** 2024-2025

## What User Actually Did
- **Led discussions and managed cross-functional collaboration** (User verified)
- Built data pipelines integrating government labor APIs (CareerOneStop)
- Created geographic salary visualizations (Plotly choropleth maps)
- Built resume/job parsing with GPT
- MongoDB Atlas for storage
- Geographic analytics with Mapbox

## What You CANNOT Claim
- ❌ "Built the entire platform" (team project)
- ❌ "Solo project" (was capstone team)
- ❌ "Production deployment" (academic project)

## Accurate Phrasing Examples
- ✅ "Led discussions and managed cross-functional collaboration for capstone project"
- ✅ "Built data pipelines integrating CareerOneStop (Dept. of Labor) API"
- ✅ "Created interactive Plotly choropleth salary maps across 50 US states"

---

# OPERATIONAL RESPONSIBILITIES (LUXESWAP)

## Status Reporting (VERIFIED)
- ✅ Prepare status updates and reports for leadership
- ✅ Coordinate project timelines across teams
- ✅ Document processes and identify improvements

## Cross-Functional Work (VERIFIED)
- ✅ Coordinate with sales, photography, operations, finance teams
- ✅ Work directly with CEO/founder on operational execution

## Physical Operations (VERIFIED)
- Pack and ship products weekly (USPS, UPS, DHL)
- Handle inbound shipping/receiving
- Handle items up to 70 lbs
- Handle high-value merchandise ($800-$2,500 avg MSRP)
- Process ~300 items personally weekly
- Catch and resolve shipping/labeling/packing errors
- Work under minimal supervision (self-directed)
- Sometimes close facility
- Use Square POS, hand trucks, racks
- Advanced proficiency with Excel/Sheets and MS Office

## What You CANNOT Claim
- ❌ "Backlog analysis" (CEO's eBay account responsibility)
- ❌ "Sell-through tracking" (CEO's responsibility)
- ❌ "Data-driven decision making" (tools are automated, not manual analysis)
- ❌ "Operational analytics" (no manual analysis performed)
- ❌ "Led" initiatives at LuxeSwap (use "built" instead)

---

# STRICT RULES

## Fabrication Prevention
1. **NEVER fabricate** — If not in this document, ASK the user first
2. **NEVER copy language from job posts** — Job descriptions describe what they WANT, not what user HAS DONE. Every bullet must describe an actual past action.
3. **NEVER use buzzwords as filler** — "high-ownership," "lean team," "initiative matters" are job post language, not resume content
4. **Every bullet must trace to a verified fact** — Before writing any bullet, identify which verified fact from this document it represents

## LuxeSwap-Specific Rules
5. **NEVER use "led" for LuxeSwap work** — Use "built," "created," "designed"
6. **NEVER claim manual analytics** — Tools are automated
7. **NEVER inflate line counts** (use verified: 15,577 for website, not 40K)
8. **ALWAYS specify "displays inventory"** not "manages transactions" for website
9. **ALWAYS use Oyster Bay, NY** for LuxeSwap location

---

# JOB POST TAILORING METHODOLOGY

## Golden Rule
**Every resume bullet describes something the user DID (past tense), not something the job WANTS (present/future tense).**

## Step-by-Step Tailoring Process

### Step 1: Extract Keywords from Job Post
Identify these categories of keywords:
| Category | Examples | How to Use |
|----------|----------|------------|
| **Skills** | "cross-functional coordination," "financial operations" | Include in Skills section if user has this skill |
| **Tools** | "Excel," "Notion," "Sheets" | Include in Skills section if user uses these tools |
| **Responsibilities** | "streamline workflows," "manage projects" | Find verified experience that demonstrates this |
| **Culture Words** | "high-ownership," "lean team," "initiative" | DO NOT copy — demonstrate through action bullets instead |

### Step 2: Match Keywords to Verified Experience
For each relevant keyword, find a verified fact from this document:

| Job Post Keyword | Verified Fact to Use | Resulting Bullet |
|------------------|---------------------|------------------|
| "Financial operations" | Sales Consolidator reconciles transactions | "Built reconciliation tool matching eBay transactions to internal records, automating fee calculations." |
| "Playbooks and checklists" | User documents processes | "Created and maintained checklists for inventory processing and quality control workflows." |
| "Cross-functional" | User coordinates with multiple teams | "Coordinated with sales, photography, operations, and finance teams on project execution." |

### Step 3: Write Bullets in Past Tense
**All bullets must be past tense describing completed actions.**

| ❌ Wrong (Present/Future) | ✅ Correct (Past Tense) |
|---------------------------|------------------------|
| "Collaborate with teams" | "Collaborated with sales, operations, and finance teams" |
| "Manage cross-functional projects" | "Managed cross-functional projects across multiple workstreams" |
| "Create playbooks" | "Created playbooks and process documentation" |
| "Jump in wherever needed" | "Handled receiving, shipping, quality control, and issue resolution" |

**Exception:** Current role (LuxeSwap, Feb 2025 - Present) may use present tense for ongoing responsibilities.

### Step 4: Verify Before Finalizing
Before including any bullet, confirm:
- [ ] Does this bullet describe something user ACTUALLY DID?
- [ ] Can I trace this to a verified fact in this document?
- [ ] Is it in past tense (or present for current role)?
- [ ] Am I describing an ACTION, not a trait or aspiration?

## What TO Copy from Job Posts
✅ **Specific skills and tools** the user actually has  
✅ **Industry terminology** that matches user's experience  
✅ **Job title keywords** for Summary and Title (if accurate)  

## What NOT TO Copy from Job Posts
❌ **Responsibility phrases verbatim** ("Jump in wherever needed")  
❌ **Culture/values language** ("high-ownership," "initiative matters")  
❌ **Aspirational traits** ("eager to grow," "curious about how companies operate")  
❌ **Future-tense descriptions** ("You will manage...")  

## Tailoring Examples

### Example 1: Ply Operations Specialist
**Job post says:** "Create and maintain lightweight playbooks, checklists, and trackers"

| ❌ Bad | ✅ Good |
|--------|---------|
| "Create and maintain playbooks, checklists, and trackers" | "Created checklists for inventory processing, shipping verification, and quality control workflows." |

**Why:** Bad version copies verbatim. Good version describes the specific checklists user actually created.

### Example 2: Harbor Operations Role
**Job post says:** "Support data-driven decision making through operational analytics"

| ❌ Bad | ✅ Good |
|--------|---------|
| "Support data-driven decision making through operational analytics" | "Built automated reporting tools that generate transaction summaries and reconciliation reports." |

**Why:** User doesn't manually do analytics (tools are automated). Good version describes what was actually built.

### Example 3: Generic Startup Language  
**Job post says:** "Jump in wherever needed — we're a lean, high-ownership team"

| ❌ Bad | ✅ Good |
|--------|---------|
| "Jump in wherever needed in a lean, high-ownership environment" | "Worked independently under minimal supervision, handling receiving, shipping, quality control, and customer issue resolution." |

**Why:** Bad version copies culture language. Good version demonstrates flexibility through actual tasks performed.

---

# JOB TITLE MAPPING

| Target Role Type | Use This Title |
|------------------|----------------|
| Software Engineer | Full-Stack Software Operations Engineer |
| Operations/Program | Operations & Program Manager |
| Startup Ops | Operations Engineer |
| Retail/Warehouse | Operations Coordinator |
| Analyst | Systems & Operations Analyst |
| Web Operations | Web Operations & E-Commerce Coordinator |

---

# TAILORING BY AUDIENCE

| Element | Tech Roles | Ops/Startup | Retail |
|---------|-----------|-------------|--------|
| GitHub link | ✅ Yes | ✅ Yes | ❌ No |
| CS degree detail | ✅ Full | ✅ Full | ⚠️ "Bachelor of Science" only |
| Tech projects | ✅ Yes | ⚠️ Light jargon | ❌ Remove or reframe |
| Warehouse tasks | ❌ No | ⚠️ Brief | ✅ Emphasize |

---

# COMPILATION COMMANDS

```bash
# Standard resume (pdflatex)
cd ~/Desktop/Resume/tex
pdflatex [filename].tex
mv [filename].pdf ../
rm -f *.aux *.log *.out

# Portfolio with custom fonts (xelatex)
cd ~/Desktop/Resume/tex
xelatex Portfolio_WebOps.tex
mv Portfolio_WebOps.pdf ../
rm -f *.aux *.log *.out
```
