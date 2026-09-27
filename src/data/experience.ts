export interface Experience {
    id: string;
    company: string;
    role: string;
    period: string;
    location: string;
    context?: string;
    bullets: string[];
}

export const experience: Experience[] = [
    {
        id: "mofin",
        company: "MoFin Lending Corporation",
        role: "GTM & Operations Engineer",
        period: "April 2026 – Present",
        location: "New York, NY",
        context: "Business-purpose real-estate lending. Sole engineer partnering directly with the co-founder and sales leadership.",
        bullets: [
            "Built a proprietary lender-intelligence platform combining SFRA and Forecasa, Zillow market data, historical mortgage rates, and internal borrower and loan-performance records; processed hundreds of thousands of borrowers",
            "Built deal attribution across lead sources, email sequencers and agencies, Pipedrive, email/call/text activity, and internal processing and underwriting records; reconstructed historical deal paths and linked participants, touchpoints, and stage outcomes",
            "Modeled borrower fit and financing demand using entity resolution, mortgage reconstruction, transaction histories, product rules, and internal performance patterns",
            "Built internal codebases and server-side pipelines connecting public-data collection with Pipedrive, Clay, Airtable, and Zapier; added deduplication, state tracking, and resumable processing",
            "Built proprietary outbound infrastructure from zero across hundreds of mailboxes, with provisioning and deliverability monitoring and capacity to contact hundreds of thousands of leads monthly",
            "Developed Django services, a Next.js website with financial calculators and lead capture, automated quality checks, and infrastructure as code",
            "Led technical discovery with founders, sales, engineers, and vendors; integrated AI services and MCP-connected tools and worked one-on-one with sales to turn requirements into usable deliverables",
        ],
    },
    {
        id: "luxeswap",
        company: "LuxeSwap",
        role: "Software Engineer",
        period: "February 2025 – April 2026",
        location: "Oyster Bay, NY",
        context: "Luxury menswear consignment house. 25+ years operating. 9-person team. Sole engineer.",
        bullets: [
            "Owned acquisition, inventory, pricing, and customer-operations software for a $2.5M+ annual business; systems contributed to $350K+ in year-over-year revenue growth",
            "Built full-stack web platform from zero in 6 weeks, generating 50+ B2B leads monthly from no prior pipeline",
            "Developed internal CRM with 17 JWT-secured API endpoints, replacing 2,000+ manual spreadsheets and managing 750+ consignor accounts",
            "Built a pricing engine from 130K+ historical sales, supporting valuations and an interactive quote builder",
            "Cut listing preparation 95%, from 10 minutes to 30 seconds per item, enabling $250K+ in annual revenue through added processing capacity",
            "Unified 150K+ records across data sources via Python ETL pipeline normalizing 2,155 XLSX files into 25 canonical categories",
        ],
    },
    {
        id: "fedex",
        company: "FedEx Ground",
        role: "Package Handler",
        period: "May 2024 – February 2025",
        location: "Troy, NY",
        context: "Part-time during final year of CS degree.",
        bullets: [
            "Processed 800–1,000+ packages per shift in high-throughput logistics environment",
            "Maintained accuracy and met daily targets under tight operational deadlines",
        ],
    },
];

export interface Education {
    institution: string;
    degree: string;
    period: string;
    capstone?: string;
}

export const education: Education = {
    institution: "University at Albany, State University of New York",
    degree: "Bachelor of Science in Computer Science, Minor in Mathematics",
    period: "August 2020 – May 2025",
    capstone: "Career Intelligence Platform (IBM Watson sponsor)",
};

export interface SkillCategory {
    name: string;
    skills: string[];
}

export const skills: SkillCategory[] = [
    {
        name: "Languages",
        skills: ["Python", "JavaScript", "TypeScript", "SQL", "HTML/CSS", "Java", "C"],
    },
    {
        name: "AI Workflows",
        skills: ["Claude", "Claude Code / Cowork", "LLM APIs", "MCP Integrations", "Semantic Analysis", "Workflow Automation"],
    },
    {
        name: "Frontend",
        skills: ["React", "Next.js", "Vite", "CSS Modules", "i18n", "Plotly", "Mapbox"],
    },
    {
        name: "Backend",
        skills: ["Django", "Django Ninja", "Node.js", "Express", "REST APIs", "JWT Authentication"],
    },
    {
        name: "Data Engineering",
        skills: ["ETL Pipelines", "Pandas", "Data Modeling", "Entity Resolution", "Lifecycle Attribution", "Data Reconciliation", "Web Scraping"],
    },
    {
        name: "Databases",
        skills: ["Supabase (Postgres)", "SQLite", "MongoDB", "Redis"],
    },
    {
        name: "Infrastructure",
        skills: ["AWS", "Terraform", "Docker", "Linux", "Cloudflare", "Vercel", "GitHub", "Postfix", "Dovecot", "OpenDKIM"],
    },
    {
        name: "GTM Integrations",
        skills: ["Pipedrive", "Airtable", "Clay", "Zapier", "Aircall", "PlusVibe", "Smartlead"],
    },
    {
        name: "Quality & Delivery",
        skills: ["pytest", "Playwright", "Vitest", "Ruff", "mypy", "Sentry", "CI/CD"],
    },
];
