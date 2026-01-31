export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    content: string;
    tags: string[];
}

export const posts: BlogPost[] = [
    {
        slug: "building-etl-pipeline-15k-items",
        title: "Building an ETL Pipeline for 15,000+ Luxury Items",
        date: "2025-01-28",
        excerpt: "How I built a Python ETL system with AI-powered classification that processes Excel inventory into structured eBay listings.",
        tags: ["Python", "ETL", "AI/ML", "Automation"],
        content: `
## The Problem

When you're processing thousands of luxury items for eBay, manual categorization becomes the bottleneck. Each item needs:
- Correct category classification (suits, sport coats, outerwear, etc.)
- Measurement extraction from unstructured text
- Brand profiling for marketing copy
- Templated HTML generation

## The Solution

I built an ETL pipeline with three core components:

### 1. Category Classification
Using sentence-transformer embeddings, items are classified into 60+ categories. When embeddings don't match with high confidence, RapidFuzz provides fuzzy matching fallback.

### 2. Measurement Parsing
20+ regex parsers extract measurements from free-text descriptions, normalizing them into structured JSON.

### 3. GPT Integration
For brand profiling, I integrated OpenAI's API with JSON caching to minimize costs while generating dynamic marketing copy.

## Results
- 15,000+ items processed
- 5× throughput improvement
- $250K+ annual revenue enabled

The key insight: AI doesn't replace human judgment—it handles the 95% of routine cases so humans can focus on edge cases.
        `,
    },
    {
        slug: "from-ops-to-engineering",
        title: "From Operations to Software Engineering",
        date: "2025-01-15",
        excerpt: "My journey from package handling at FedEx to building production software at a luxury consignment business.",
        tags: ["Career", "Operations", "Software Engineering"],
        content: `
## Starting Point

I started my career handling packages at FedEx—high-volume, tight deadlines, operational precision required every day.

## The Pivot

At LuxeSwap, I saw manual processes that were begging to be automated:
- Hours spent copying data between spreadsheets
- Repetitive HTML formatting for eBay listings
- Error-prone fee calculations

I started building tools to solve my own problems. What began as simple Python scripts evolved into full applications.

## Lessons Learned

1. **Domain expertise matters.** Understanding the business problem deeply made my solutions 10x more effective.
2. **Start with the bottleneck.** Don't automate everything—automate the thing that's actually slowing people down.
3. **Ship early, iterate fast.** My first tools were ugly but functional. User feedback shaped every version.

## Current Focus

Now I'm building full-stack applications, working with AI/ML, and shipping production software. The operations background gives me perspective most pure engineers lack.
        `,
    },
];
