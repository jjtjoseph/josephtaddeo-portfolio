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
        id: "luxeswap",
        company: "LuxeSwap",
        role: "Software Engineer",
        period: "February 2025 – Present",
        location: "Oyster Bay, NY",
        context: "Luxury menswear consignment house. 25+ years operating. 9-person team. Sole engineer.",
        bullets: [
            "Designed, built, and deployed a 75,000+ line production platform — web, CRM, automation suite, and pricing intelligence system — all independently",
            "Built full-stack web platform from zero in 6 weeks, generating 50+ B2B leads monthly from no prior pipeline",
            "Developed internal CRM with 17 JWT-secured API endpoints, replacing 2,000+ manual spreadsheets and managing 750+ consignor accounts",
            "Created proprietary brand pricing index analyzing 67,000+ sales across 1,021 brands for real-time consignment triage",
            "Built AI-powered listing automation processing 26,000+ items annually, reducing listing time by 95% and saving ~1.5–2 FTE",
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
        name: "AI / ML",
        skills: ["sentence-transformers", "OpenAI API", "LangChain", "RAG", "Embeddings", "Semantic Search"],
    },
    {
        name: "Frontend",
        skills: ["React 19", "Vite", "CSS Modules", "Scroll-driven Animations", "i18n", "Plotly", "Mapbox"],
    },
    {
        name: "Backend",
        skills: ["Node.js", "Express 5", "REST APIs", "JWT Authentication"],
    },
    {
        name: "Data Engineering",
        skills: ["ETL Pipelines", "Pandas", "Data Normalization", "Entity Resolution", "Web Scraping (Puppeteer/Cheerio)"],
    },
    {
        name: "Databases",
        skills: ["Supabase (Postgres)", "SQLite", "MongoDB", "Redis"],
    },
    {
        name: "Infrastructure",
        skills: ["AWS S3", "Vercel", "Render", "Docker", "Git", "PyInstaller", "Cron Scheduling"],
    },
];
