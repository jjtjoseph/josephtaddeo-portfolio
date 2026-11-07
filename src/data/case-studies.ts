export interface CaseStudy {
  slug: string;
  projectId: string;
  title: string;
  summary: string;
  stack: string[];
  image: string;
  imageAlt: string;
  sections: { title: string; paragraphs: string[] }[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "visual-content-platform",
    projectId: "mofin-web",
    title: "A visual publishing workflow for a lending website",
    summary: "From a Next.js lending website to an authenticated editor that lets business users maintain content in place.",
    stack: ["Next.js", "React", "TypeScript", "Content modeling", "Versioned publishing"],
    image: "/projects/visual-cms-flow.svg",
    imageAlt: "Conceptual editing workflow: authenticated editor, versioned changes, published content",
    sections: [
      { title: "The business problem", paragraphs: ["A lending website has two kinds of change: business content that staff need to maintain, and application logic such as financial calculations and lead capture. I built the customer-facing website and then a visual editing workflow so content changes did not have to begin as code-editing tasks."] },
      { title: "What I owned", paragraphs: ["As MoFin’s sole engineer, I translated lending requirements into a Next.js, React and TypeScript site with financial calculators and validated lead capture. I added automated content, visual and interaction checks, then built and launched the custom editor in November 2026.", "Authenticated in-page editing, versioned publishing, undo history and real-time collaboration."] },
      { title: "The engineering decisions", paragraphs: ["The editor presents content in the page itself rather than asking business users to navigate source files. Changes are published through commits, giving the editing workflow a version history and a way to undo changes.", "The editing experience runs on a separate hostname. Authentication, verification codes, publishing limits and password rechecks for administrative changes put controls around who can edit and publish."] },
      { title: "The tradeoff", paragraphs: ["A custom editor gives the business a workflow closely matched to its site, but it also creates software that must be maintained. The launch began with the Home page’s content blocks. Editing coverage and publishing safeguards need to be extended deliberately as the site evolves.", "Version history and undo support recovery from content changes. Separate application regression checks cover lending calculations and interactions, which need attention as the underlying software evolves."] },
      { title: "What it enabled", paragraphs: ["Business users gained a visual workflow for changing site content, with authenticated access, collaboration and a recoverable history. The engineering contribution is a usable product capability layered onto the website, alongside its lending calculators and intake workflow."] },
    ],
  },
  {
    slug: "lending-data-platform",
    projectId: "mofin-intelligence",
    title: "Turning conflicting loan records into financing signals",
    summary: "Canonical borrower and loan records with traceable source fields, transaction-based mortgage reconstruction and repeatable rebuilds.",
    stack: ["Python", "SQL", "PostgreSQL", "Entity resolution", "Data provenance"],
    image: "/projects/lending-data-flow.svg",
    imageAlt: "Conceptual data workflow: source records, reconciliation, financing signals",
    sections: [
      { title: "The business problem", paragraphs: ["A borrower appearing in several datasets is not automatically the same entity in each one. A vendor’s payoff label is not automatically evidence that a loan has closed. Those distinctions matter when sales teams use the data to decide which borrowers may need financing.", "I built the processing and analytics layer across SFRA and Forecasa records, property and market information, CRM data and internal operating history. The platform processes hundreds of thousands of borrowers and turns fragmented records into borrower-fit and financing-demand signals."] },
      { title: "What I owned", paragraphs: ["I designed canonical borrower and loan datasets, cross-source reconciliation and mortgage reconstruction. Field-level provenance, entity resolution and repeatable data rebuilds.", "The unified loan record keeps source provenance at field level, while corroborated relationships govern cross-source rules. Derived datasets are rebuilt through a declared ten-stage registry with a build manifest, making dependencies and stale work explicit."] },
      { title: "A concrete data-quality decision", paragraphs: ["Vendor status labels had been treated as loan-closure evidence. I replaced label-only closure logic with reconstruction based on transaction evidence and corroborated relationships, correcting over 100,000 loan-status records used for targeting.", "The correction changes how records are interpreted downstream. Instead of treating a provider label as the final answer, borrower lists use the reconstruction rules and supporting transaction evidence."] },
      { title: "The tradeoff", paragraphs: ["Cross-source reconciliation adds complexity compared with passing through vendor labels. It also makes disagreements visible and gives derived records a traceable basis. A repeatable rebuild can reproduce the rules applied; it cannot make incomplete external data complete.", "I kept provenance and reconstruction separate from causal attribution. Linking historical records and touchpoints helps explain a deal’s path, but does not establish that a campaign caused the outcome."] },
      { title: "What it enabled", paragraphs: ["The resulting datasets support borrower targeting, maturity analysis and operating visibility. Users get financing context they can act on; the engineering layer retains the relationships and source evidence needed to investigate discrepancies and rebuild downstream outputs."] },
    ],
  },
];
