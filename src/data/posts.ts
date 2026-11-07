export interface BlogPost {
    slug: string;
    title: string;
    updatedOn: string;
    excerpt: string;
    content: string;
    tags: string[];
}

// Reconciled November 2026. Earlier publication dates were inconsistent with
// employment chronology; retain stable URLs and display the actual revision date.
export const posts: BlogPost[] = [
    {
        slug: "building-etl-pipeline-15k-items",
        title: "From Inventory Records to a Repeatable Listing Workflow",
        updatedOn: "2026-11-07",
        excerpt: "How data normalization, AI classification and a desktop workflow supported LuxeSwap’s inventory operations.",
        tags: ["Python", "ETL", "AI Classification", "Business Software"],
        content: `
## The operating problem
At LuxeSwap, inventory information was spread across spreadsheets and operating records. Listing preparation, pricing and customer administration depended on turning those records into consistent inputs for different workflows.
## Build a shared data foundation
I unified more than 150,000 records through Python ETL. Connected tools included a CRM for more than 750 consignor accounts and pricing software based on more than 130,000 historical sales. Those figures describe different populations: operating records, consignors and sales history.
## Put classification inside a usable workflow
EZ-Lister combined AI classification and listing automation in a desktop application. The workflow reduced listing preparation from 10 minutes to 30 seconds per item—a 95% reduction—and enabled $250K+ in annual revenue through added processing capacity.
## Make the output useful
The value came from connecting data processing to a task the business needed to complete. A classification step on its own was only one part of the product; the surrounding workflow turned the result into prepared listings.
        `,
    },
    {
        slug: "from-ops-to-engineering",
        title: "Building Software Around Operating Workflows",
        updatedOn: "2026-11-07",
        excerpt: "Connecting business requirements to software, data and usable tools across commerce and lending.",
        tags: ["Software Engineering", "Data Systems", "Product Delivery"],
        content: `
## Software in an operating business
My work at LuxeSwap from February 2025 to April 2026 covered acquisition, inventory, pricing and customer operations. Since April 2026, my work at MoFin has involved lending data, applications and GTM workflows.
## Start with a decision or task
At MoFin, fragmented property, borrower, CRM and loan records need to support concrete decisions: whom to contact, what financing context matters and how a deal has progressed. Entity resolution, reconciliation and historical record linkage connect the technical work to those questions.
## Build for the people using the output
The lending website’s visual CMS is another example. Authenticated in-page editing, version history and collaboration give business users a workflow for maintaining content. The product includes both the underlying implementation and the way a user can act on it.
## Keep ownership concrete
Working directly with founders, sales teams and vendors has involved defining requirements, evaluating services, building integrations and supporting delivery. The clearest account of that work is the system built, the decisions it supports and the technical choices behind it.
        `,
    },
];
