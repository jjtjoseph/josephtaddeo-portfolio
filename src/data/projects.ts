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
        id: "luxeswap-website",
        title: "LuxeSwap Web Platform",
        type: "Full-stack production platform",
        tech: ["React 19", "Vite", "Express 5", "Node.js", "Redis", "Supabase", "AWS S3"],
        description:
            "Built the company's entire web platform from zero in 6 weeks. The company had no website before this. Full-stack production system with live inventory integration, B2B lead generation, and 8-language internationalization.",
        metrics: [
            "75,000+ lines of production code",
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
        businessImpact: "Contributed to $350K+ year-over-year revenue growth",
        image: "/projects/luxeswap-hero.png",
        liveUrl: "https://luxeswap.com",
        featured: true,
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
            "67,000+ sales analyzed",
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
