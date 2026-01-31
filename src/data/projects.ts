export interface Project {
    id: string;
    title: string;
    type: string;
    tech: string[];
    description: string;
    metrics: string[];
    highlights: string[];
    image?: string;
    liveUrl?: string;
    githubUrl?: string;
}

export const projects: Project[] = [
    {
        id: "luxeswap-website",
        title: "LuxeSwap Website",
        type: "Full-stack marketing website",
        tech: ["React 19", "Express 5", "Redis", "eBay API"],
        description:
            "Full-stack luxury consignment platform (40K LOC) with live eBay Browse API integration and Redis caching, aggregating real-time inventory for 61+ luxury brands.",
        metrics: [
            "40,000+ lines of code",
            "19 pages, 27 reusable components",
            "8-language internationalization",
            "Built solo in 6 weeks",
        ],
        highlights: [
            "Live eBay Browse API integration with Redis caching",
            "i18next with URL routing, hreflang SEO, RTL Arabic support",
            "Custom Puppeteer scraper for AuctionNinja with cron refresh",
            "Dynamic sitemap + JSON-LD structured data for SEO",
        ],
        image: "/projects/luxeswap-hero.png",
        liveUrl: "https://luxeswap.com",
    },
    {
        id: "ez-lister",
        title: "EZ-Lister",
        type: "Python desktop application",
        tech: ["Python", "Tkinter", "PyInstaller", "Sentence-transformers"],
        description:
            "Python ETL pipeline with 60+ category classifiers and 20+ measurement parsers, transforming Excel inventory into structured JSON and templated HTML for eBay deployment.",
        metrics: [
            "15,000+ items processed",
            "5× operational throughput improvement",
            "$250K+ annual revenue enabled",
        ],
        highlights: [
            "AI classification using sentence-transformer embeddings",
            "Fuzzy matching fallback for unrecognized categories",
            "Self-updating macOS app with GitHub release detection",
            "GPT integration for dynamic brand profiling",
        ],
        image: "/projects/EZ-Lister-interface.png",
    },
    {
        id: "sales-consolidator",
        title: "Sales Consolidator",
        type: "Python desktop application",
        tech: ["Python", "Tkinter", "Pandas"],
        description:
            "Sales reconciliation pipeline matching eBay transaction reports to internal listings, automating fee calculations and client payout reporting.",
        metrics: [
            "Processes 1,000+ transactions per batch",
            "O(n+m) matching algorithm for instant reconciliation",
        ],
        highlights: [
            "Unified Transaction Dictionary for O(1) lookups",
            "HTML Meta-Index for batch metadata extraction",
            "Multi-threaded processing with progress tracking",
            "macOS app bundle for Gatekeeper compliance",
        ],
        image: "/projects/sales-consolidator.png",
    },
    {
        id: "career-intelligence",
        title: "Career Intelligence Platform",
        type: "University capstone (IBM Watson sponsored)",
        tech: ["Python", "MongoDB Atlas", "LangChain", "Mapbox", "GPT API"],
        description:
            "Gen-AI career platform with GPT-powered resume and job listing parsers, transforming unstructured documents into normalized JSON for career pathing.",
        metrics: [
            "50-state salary choropleth maps",
            "CareerOneStop (Dept. of Labor) API integration",
        ],
        highlights: [
            "Core data infrastructure with resume/job parsers",
            "MacroAnalytics with Google Geocoding for salary maps",
            "Mapbox geographic visualization for applicant analytics",
            "AI career pathing engine with actionable next steps",
        ],
        image: "/projects/capstone.png",
    },
];
