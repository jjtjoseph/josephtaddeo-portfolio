import type { Screen } from "./ScreenGallery";

interface Study {
  id: string;
  name: string;
  category: string;
  description: string;
  links?: { href: string; label: string }[];
  screens: Screen[];
}

function capture(file: string, label: string, alt: string, caption: string, height = 900): Screen {
  return { label, image: `/design/${file}.webp`, width: 1440, height, alt, caption };
}

export const studies: Study[] = [
  {
    id: "sunfloat", name: "Sunfloat Studios", category: "Photography portfolio",
    description: "Sunfloat Studios is a collaboration between my fiancée, Karina Solomyana, and me. Each album starts as a strip of photographs and expands into a layout that gives portrait and landscape frames room to breathe.",
    links: [{ href: "https://www.sunfloatstudios.com/photographers/karina-solomyana", label: "Visit the portfolio" }],
    screens: [
      capture("sunfloat-albums", "Album index", "A monochrome photo series in a horizontal strip beneath the portfolio filters.", "Album index with category filters. Photography by Karina Solomyana."),
      capture("sunfloat-expanded", "Open album", "The same series expanded into a staggered layout of portraits and wider photographs.", "The expanded album preserves the different orientations of the photographs."),
    ],
  },
  {
    id: "luxeswap", name: "LuxeSwap", category: "Luxury consignment",
    description: "Shoppers can search and filter individual pieces, or start with a designer in the brand directory. The Trophy Room pairs garment photography with past auction results.",
    links: [{ href: "https://www.luxeswap.com/browse?tab=shop", label: "Visit the shop" }, { href: "https://www.luxeswap.com/shop-brands", label: "Shop by brand" }, { href: "https://www.luxeswap.com/trophy-room", label: "Visit the Trophy Room" }],
    screens: [
      capture("luxeswap-shop", "Shop", "A four-column garment grid with search, quick filters, sorting and saved items.", "The storefront’s native shopping interface, shown with archive merchandise as sample inventory."),
      capture("luxeswap-trophy-grid", "Sold pieces", "Three sold garments displayed with their designer, description and auction result.", "Trophy Room product cards from the archived storefront build."),
      capture("luxeswap-brands", "Brand directory", "A directory of designer names arranged by country on a white background.", "The shop-by-brand view gives visitors a direct path to a familiar designer."),
      capture("luxeswap-home", "Storefront", "LuxeSwap storefront with full-width window photography and consignment navigation.", "LuxeSwap’s storefront brings shoppers and prospective consignors into the same site."),
    ],
  },
  {
    id: "mofin", name: "MoFin Lending", category: "Lending website & visual CMS",
    description: "Borrowers can explore financing options, test a rental scenario and send it to the lending team. Staff can edit a page in place, review its history and undo a published change.",
    links: [{ href: "https://www.mofinloans.com/dscr-calculator/", label: "Try the calculator" }, { href: "/projects/visual-content-platform", label: "Read the CMS case study" }],
    screens: [
      capture("mofin-calculator", "Rental calculator", "A rental financing calculator with deal inputs on the left and debt-service coverage results on the right.", "Rents, costs and loan terms sit beside the coverage ratio they determine.", 920),
      capture("mofin-home", "Lending homepage", "The MoFin homepage introduces loan programs with options to submit a scenario or call.", "Two ways to start a conversation with the lending team.", 920),
      { label: "CMS workflow", image: "/projects/visual-cms-flow.svg", width: 1200, height: 675, alt: "Diagram showing in-page editing, versioned publishing and the updated site.", caption: "Workflow diagram of the visual CMS. The editor supports authenticated editing, version history and undo." },
    ],
  },
  {
    id: "dossier", name: "Dossier", category: "Event research",
    description: "An attendee list doubles as a research workspace. A reader can filter people by role, select a name and read the person’s profile alongside the list without losing their place.",
    screens: [capture("mofin-dossier-demo", "People directory", "A filter sidebar, attendee table and selected person’s research panel shown side by side.", "Original application interface rendered with fictional attendees and companies.", 920)],
  },
  {
    id: "sales-tools", name: "Sales workspace", category: "CRM & sales handoffs",
    description: "The CRM puts a contact list and company details side by side so a rep can investigate a lead without leaving the queue. In Pipedrive, an interested reply brings borrower and property context into the contact record. A trial routing workflow uses a Microsoft Teams card to show which rep was assigned.",
    screens: [capture("mofin-crm-demo", "Lead directory", "A lead directory with filters and a selected company’s detail panel.", "Custom CRM interface with fictional records. The Pipedrive and Microsoft Teams workflows are described separately.", 920)],
  },
  {
    id: "apartment-search", name: "Finding home", category: "Personal project · In progress",
    description: "A map makes it easier to weigh a promising listing against the neighborhood and nearby transit. Selecting a listing brings up its visit status, notes and outstanding questions alongside the search.",
    screens: [
      capture("apartment-detail", "Listing detail", "An apartment shortlist and transit map beside a panel with visit status and open questions.", "Selected listing in the working interface. All listing and visit details are fictional."),
      capture("apartment-overview", "Map & shortlist", "A filtered list of apartments next to a map of subway routes and neighborhood boundaries.", "The overview keeps the search filters, results and geographic context together."),
    ],
  },
];
