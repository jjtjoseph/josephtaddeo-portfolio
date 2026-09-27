export interface Project {
    id: string;
    title: string;
    type: string;
    tech: string[];
    description: string;
    metrics: string[];
    highlights: string[];
    businessImpact?: string;
    image?: string;
    liveUrl?: string;
    githubUrl?: string;
    featured?: boolean;
}

export const projects: Project[] = [
    {
        id: "mofin-attribution",
        title: "Deal Lifecycle & Attribution",
        type: "MoFin · Commercial data infrastructure",
        tech: ["Data Modeling", "Entity Resolution", "Pipedrive", "PlusVibe / Smartlead", "Semantic Analysis"],
        description: "Built a centralized view of a deal’s path across data providers, lead-list generation, outreach agencies and sequencers, CRM, communications, and internal processing and underwriting records. Reconstructed historical journeys to connect participants and touchpoints with stage outcomes.",
        metrics: ["Historical deal reconstruction at scale", "Connected email, call, text, CRM, and underwriting records", "Stage-level signals for engineering, sales, and borrower evaluation"],
        highlights: ["Linked identifiable people and interactions across services", "Combined structured records with semantic and statistical analysis where needed", "Centralized record keeping and visibility into the deal lifecycle"],
        businessImpact: "Made fragmented deal histories traceable and usable for evaluation across teams",
        featured: true,
    },
    {
        id: "mofin-intelligence",
        title: "Borrower & Lending Intelligence",
        type: "MoFin · Proprietary analytics platform",
        tech: ["Python", "SQL", "PostgreSQL", "ETL", "Entity Resolution", "Web Scraping"],
        description: "Combined SFRA and Forecasa records with Zillow market data, FRED mortgage-rate history, and internal borrower and loan-performance datasets. Built the processing and analysis that turn these sources into borrower-fit and financing-demand signals.",
        metrics: ["Hundreds of thousands of borrowers processed", "External market data joined with internal historical performance", "Product rules and transaction patterns translated into outreach priorities"],
        highlights: ["Resolved related borrower entities", "Reconstructed mortgage and transaction histories", "Built models of borrower fit and financing demand"],
        businessImpact: "Gave sales a basis for identifying whom to contact, why, and when",
    },
    {
        id: "mofin-outreach",
        title: "Acquisition Infrastructure & Workflows",
        type: "MoFin · Infrastructure and service integrations",
        tech: ["Linux", "Postfix", "Cloudflare", "Clay", "Airtable", "Zapier", "Pipedrive"],
        description: "Built proprietary outbound infrastructure from zero and connected enrichment, public-data processing, CRM records, and campaign delivery through internal codebases and server-side pipelines.",
        metrics: ["Scaled from zero to hundreds of mailboxes", "Capacity to contact hundreds of thousands of leads monthly", "Resumable processing with deduplication and state tracking"],
        highlights: ["Automated mailbox provisioning and deliverability monitoring", "Connected custom processing with business-facing tools", "Turned manual research and handoffs into repeatable workflows"],
        businessImpact: "Created an owned foundation for scaling prospect research and outreach",
    },
    {
        id: "mofin-web",
        title: "Lending Website & Financial Tools",
        type: "MoFin · Web development and quality engineering",
        tech: ["Next.js", "React", "TypeScript", "Airtable", "Playwright", "Vitest"],
        description: "Rebuilt the company’s Webflow site in Next.js and React, implementing financial calculators and validated lead capture. Added automated checks to preserve lending calculations, content, and interactions as the site changes.",
        metrics: ["Financial calculators with testable business logic", "Validated lead capture connected to Airtable", "Automated content, visual, and interaction checks"],
        highlights: ["Translated lending requirements into customer-facing tools", "Built regression checks for the migration", "Connected lead intake to the broader operations workflow"],
        businessImpact: "Built a maintainable customer-facing foundation for lending inquiries",
    },
    {
        id: "luxeswap-website",
        title: "LuxeSwap Web Platform",
        type: "Full-stack production platform",
        tech: ["React 19", "Vite", "Express 5", "Node.js", "Redis", "Supabase", "AWS S3"],
        description:
            "Built the company's entire web platform from zero in 6 weeks. The company had no website before this. Full-stack production system with live inventory integration, B2B lead generation, and 8-language internationalization.",
        metrics: [
            "Live inventory integration and B2B acquisition",
            "19 pages with 8-language i18n (incl. RTL Arabic)",
            "50+ B2B leads generated monthly from zero prior pipeline",
            "Built solo in 6 weeks",
        ],
        highlights: [
            "Live eBay Browse API integration with Redis caching",
            "\"Artisan-Tier\" brand showcases with scroll-driven CSS animations",
            "Custom Puppeteer scraper for AuctionNinja with cron refresh",
            "Dynamic sitemap, JSON-LD structured data, GDPR geo-based consent",
        ],
        businessImpact: "Part of the LuxeSwap software suite that contributed to $350K+ year-over-year revenue growth",
        image: "/projects/luxeswap-hero.png",
        liveUrl: "https://luxeswap.com",
        featured: false,
    },
    {
        id: "internal-crm",
        title: "Internal CRM & Analytics Dashboard",
        type: "Internal business platform",
        tech: ["React 19", "Express 5", "JWT Auth", "Supabase/PostgreSQL", "Python"],
        description:
            "Built to replace 2,000+ manual spreadsheets. Full internal CRM with JWT-secured API, automated commission calculations, and dual customer segmentation — managing 750+ active consignor accounts.",
        metrics: [
            "17 JWT-secured API endpoints",
            "750+ active accounts managed",
            "$8.9M+ revenue and 150K+ items processed",
            "Python ETL: 2,155 XLSX files → 25 canonical categories",
        ],
        highlights: [
            "Dual customer segmentation (volume + value tier)",
            "Batch lifecycle tracking with staged-save architecture",
            "Automated commission calculations with full edit history",
            "Inline editing with undo and audit trail",
        ],
        businessImpact: "Replaced 2,000+ manual spreadsheets with unified system",
    },
    {
        id: "pricing-intelligence",
        title: "Brand Pricing Intelligence System",
        type: "Data intelligence platform",
        tech: ["Node.js", "Express", "Supabase", "React"],
        description:
            "Proprietary brand pricing index built from historical sales data. Cross-category median ratio computation with fuzzy matching and Levenshtein distance for brand deduplication across 1,021 brands.",
        metrics: [
            "130K+ historical sales supporting the pricing engine",
            "1,021 brands classified into 4 tiers",
            "300+ brand aliases normalized",
            "9 analytics visualizations across 14 canonical categories",
        ],
        highlights: [
            "Cross-category median ratio computation for tier assignment",
            "Fuzzy matching + Levenshtein distance for deduplication",
            "Real-time quote generation for consignment triage",
            "Powers B2B outreach prioritization",
        ],
        businessImpact: "Powers real-time pricing decisions across 1,021 brands",
        image: "/projects/quote-builder.png",
    },
    {
        id: "ez-lister",
        title: "EZ-Lister",
        type: "AI-powered desktop application",
        tech: ["Python", "sentence-transformers", "Tkinter", "PyInstaller"],
        description:
            "AI-powered desktop app that automates eBay listing creation. Deployed as self-updating macOS app — CEO trained and operates independently in daily production use.",
        metrics: [
            "26,000+ items processed annually",
            "95% time reduction (10 min → 30 sec per item)",
            "$250K+ annual revenue enabled",
            "~1.5–2 FTE equivalent saved",
        ],
        highlights: [
            "AI classification using sentence-transformer embeddings",
            "77+ categories via word-boundary regex matching",
            "Self-updating macOS app with GitHub release detection",
            "CEO operates independently — zero ongoing support needed",
        ],
        businessImpact: "Saves ~1.5–2 full-time employees of manual listing work",
        image: "/projects/EZ-Lister-interface.png",
    },
    {
        id: "sales-consolidator",
        title: "Sales Consolidator",
        type: "Financial reconciliation tool",
        tech: ["Python", "Tkinter", "Pandas"],
        description:
            "Sales reconciliation pipeline matching eBay transaction reports to internal listing records, automating fee redistribution and consignment payout reporting.",
        metrics: [
            "Processes 1,000+ transactions per batch",
            "O(n+m) matching algorithm — 60s → <5s execution",
        ],
        highlights: [
            "Unified Transaction Dictionary for O(1) lookups",
            "Proportional fee redistribution for multi-item orders",
            "HTML Meta-Index for batch metadata extraction",
            "macOS app bundle for Gatekeeper compliance",
        ],
        image: "/projects/sales-consolidator.png",
    },
    {
        id: "career-intelligence",
        title: "Career Intelligence Platform",
        type: "University capstone (IBM Watson sponsored)",
        tech: ["Python", "LangChain", "OpenAI", "MongoDB", "Plotly", "Mapbox"],
        description:
            "Led cross-functional team sponsored by IBM Watson researcher (Dr. Chidansh Bhatt). RAG-based career matching engine with semantic job-resume matching and geospatial salary visualizations.",
        metrics: [
            "RAG-based career matching with OpenAI embeddings",
            "50-state salary choropleth visualizations",
            "CareerOneStop (Dept. of Labor) API integration",
        ],
        highlights: [
            "Semantic job-resume matching via OpenAI embeddings",
            "GPT-powered resume and job listing parsers",
            "Plotly choropleth salary maps across 50 states",
            "Mapbox geographic analytics for applicant data",
        ],
        image: "/projects/capstone.png",
    },
];
