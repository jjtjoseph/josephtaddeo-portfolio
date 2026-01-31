export interface Experience {
    id: string;
    company: string;
    role: string;
    period: string;
    location: string;
    bullets: string[];
}

export const experience: Experience[] = [
    {
        id: "luxeswap",
        company: "LuxeSwap",
        role: "Full-Stack Software Operations Engineer",
        period: "February 2025 – Present",
        location: "Oyster Bay, NY",
        bullets: [
            "Built Python ETL pipeline with 60+ category classifiers and 20+ measurement parsers, transforming Excel inventory into structured JSON and templated HTML for eBay deployment (15,000+ items processed)",
            "Integrated AI-powered classification using sentence-transformer embeddings and fuzzy matching, reducing manual intervention to near-zero",
            "Developed OpenAI GPT integration for dynamic brand profiling with JSON-based caching to minimize API costs",
            "Improved operational throughput by 5× and enabled over $250K in annual revenue capture through automation",
            "Built self-updating macOS desktop application (Tkinter + PyInstaller) with GitHub release detection",
            "Developed sales reconciliation pipeline matching eBay transactions to internal listings, automating fee calculations and payout reporting",
        ],
    },
    {
        id: "fedex",
        company: "FedEx",
        role: "Package Handler",
        period: "August 2023 – December 2023",
        location: "Troy, NY",
        bullets: [
            "Worked in high-throughput logistics environment requiring accuracy, efficiency, and operational adherence",
            "Maintained daily targets in fast-paced environment under tight deadlines",
        ],
    },
];

export interface Education {
    institution: string;
    degree: string;
    period: string;
}

export const education: Education = {
    institution: "University at Albany, State University of New York",
    degree: "Bachelor of Science in Computer Science, Minor in Mathematics",
    period: "August 2020 – May 2025",
};

export interface SkillCategory {
    name: string;
    skills: string[];
}

export const skills: SkillCategory[] = [
    {
        name: "Languages",
        skills: ["Python", "Java", "C", "SQL", "JavaScript", "HTML/CSS"],
    },
    {
        name: "AI/ML Systems",
        skills: ["LangChain", "OpenAI API", "RAG", "Embeddings", "Sentence-transformers", "Fuzzy Matching"],
    },
    {
        name: "Backend & Data",
        skills: ["ETL Pipelines", "RESTful APIs", "Data Normalization", "JSON Schema Design"],
    },
    {
        name: "Web & Visualization",
        skills: ["React", "Express", "Next.js", "Vite", "Plotly", "i18next"],
    },
    {
        name: "Desktop & Packaging",
        skills: ["Tkinter", "PyInstaller", "macOS Bundling", "Auto-update Systems"],
    },
    {
        name: "Databases & Infra",
        skills: ["MongoDB", "Redis", "AWS", "Docker", "Vercel", "Puppeteer"],
    },
];
