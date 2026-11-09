const projects = [
  {
    id: "footwear",
    title: "Footwear Central Admin",
    subtitle: "Enterprise Multi-Vendor E-Commerce Platform",
    description:
      "Central management control panel for an enterprise multi-vendor footwear e-commerce marketplace. Built with Next.js 16 App Router, React 19, TypeScript, and Tailwind CSS v4. Features automated seller KYC verification, real-time order lifecycle tracking, dispute mediation hub, Sentry error monitoring, Algolia instant search, and Recharts sales analytics.",
    tags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "NextAuth.js v5",
      "TanStack Query",
      "Algolia Search",
      "Sentry",
      "Recharts",
    ],
    live: "#",
    github: "https://github.com/jamfortetechnologies",
    featured: true,
    image: "/footwear-preview.png",
    snapshots: [
      {
        id: "analytics",
        title: "Executive Dashboard & Sales Analytics",
        description:
          "Real-time revenue metrics, regional order trends, platform commission breakdown, and daily active vendor metrics visualized using Recharts.",
        highlights: [
          "Interactive revenue & commission forecasting graphs",
          "Regional sales distribution heatmaps",
          "Automated daily KPI summary reports"
        ]
      },
      {
        id: "kyc",
        title: "Seller KYC & Onboarding Verification",
        description:
          "Multi-step vendor verification queue for vetting prospective shoe manufacturers and authorized footwear distributors before store publishing.",
        highlights: [
          "Identity document & business tax ID verification pipeline",
          "Automated compliance check status flags",
          "One-click seller approval/rejection with custom feedback"
        ]
      },
      {
        id: "disputes",
        title: "Dispute Resolution & Refund Mediation",
        description:
          "Centralized dispute center enabling admins to review evidence, manage refund requests, and mediate conflicts between buyers and footwear sellers.",
        highlights: [
          "Evidence attachment viewer (photos, shipping receipts)",
          "Escrow payout hold and release controls",
          "Audit log tracking all admin actions and resolution outcomes"
        ]
      },
      {
        id: "search",
        title: "Algolia Instant SKU & Customer Search",
        description:
          "High-performance search integration powering millisecond lookup across hundreds of thousands of footwear SKUs, seller profiles, and order records.",
        highlights: [
          "Faceted search filters (category, brand, size, seller status)",
          "Typo-tolerant instant query execution",
          "Server-side indexing sync with TanStack Query"
        ]
      }
    ]
  },
  {
    id: "pawshauz",
    title: "PawsHauz Admin Platform",
    subtitle: "Pet Ecosystem & Marketplace Control Center",
    description:
      "Centralized admin management dashboard for the PawsHauz pet ecosystem, connecting pet owners, verified veterinarians, and merchants. Engineered with React 18, TypeScript, Vite, and Tailwind CSS v4. Features granular Role-Based Access Control (RBAC), WebSocket real-time dispute chat via Socket.IO, rich text editor integration (CKEditor 5), and central Axios interceptors with token auto-refresh.",
    tags: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind CSS v4",
      "Redux Toolkit",
      "TanStack Query",
      "Socket.IO",
      "Radix UI",
      "CKEditor 5",
      "Recharts",
    ],
    live: "#",
    github: "https://github.com/jamfortetechnologies/PawsHauz-Admin",
    featured: true,
    image: "/pawshauz-preview.png",
    snapshots: [
      {
        id: "rbac",
        title: "Role-Based Access Control (RBAC) System",
        description:
          "Dynamic permission engine tailoring navigation menus, page routes, and operational actions according to assigned admin roles (Super Admin, Verifier, Dispute Handler, Finance).",
        highlights: [
          "Granular feature-flagged route protection",
          "Permission matrix configuration panel",
          "JWT session token auto-refresh via Axios interceptors"
        ]
      },
      {
        id: "chat",
        title: "Real-time Dispute Chat via WebSockets",
        description:
          "Live communication portal powered by Socket.IO, enabling real-time messaging between admins, pet owners, and service providers during active disputes.",
        highlights: [
          "Bi-directional WebSocket connection for instant chat updates",
          "System notification events for pending dispute cases",
          "Encrypted media file sharing and transcript export"
        ]
      },
      {
        id: "vets",
        title: "Vet & Merchant Credentialing Queue",
        description:
          "Verification workflow for validating veterinary licenses, clinic registration certificates, and merchant product safety compliance.",
        highlights: [
          "Document verification modal with image zoom and pan",
          "Automated license expiration reminders",
          "Merchant inventory review and batch status toggles"
        ]
      },
      {
        id: "financials",
        title: "Marketplace Order & Financial Insights",
        description:
          "Comprehensive financial reporting module for tracking pet service bookings, marketplace transactions, platform service fees, and merchant payouts.",
        highlights: [
          "Recharts transaction flow and commission visualization",
          "CSV/PDF financial statement exports",
          "Payout batch approval workflow"
        ]
      }
    ]
  },
  {
    id: "stoqaa",
    title: "Stoqaa Control Room",
    subtitle: "Enterprise Retail, Inventory & SaaS Control",
    description:
      "Super-admin management suite for the Stoqaa retail and inventory ecosystem. Developed using React 19, TypeScript, Vite, and Tailwind CSS v4. Manages multi-tenant businesses, store branches, inventory movement, subscription plan tiers, automated sales reporting, Zod form validation, and Redux state management.",
    tags: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS v4",
      "Redux Toolkit",
      "TanStack Query",
      "Zod",
      "Axios Interceptors",
      "Radix UI",
      "Recharts",
    ],
    live: "#",
    github: "https://github.com/jamfortetechnologies",
    featured: true,
    image: "/stoqaa-preview.png",
    snapshots: [
      {
        id: "tenants",
        title: "Multi-Tenant Business & Store Control",
        description:
          "Central command screen for monitoring registered merchant businesses, physical retail store branches, active terminal licenses, and operational health.",
        highlights: [
          "Multi-store inventory status tracking",
          "Tenant health monitoring and system status alerts",
          "Quick store impersonation & debug logging for support"
        ]
      },
      {
        id: "subscriptions",
        title: "Subscription Tier & Billing Engine",
        description:
          "SaaS monetization control panel managing subscription tiers, billing renewal cycles, feature unlocks, and grace period enforcement.",
        highlights: [
          "Dynamic tier permission toggles (Basic, Growth, Enterprise)",
          "Automated recurring invoice generation",
          "Tenant upgrade and downgrades auditing"
        ]
      },
      {
        id: "sales",
        title: "Executive Sales & Inventory Analytics",
        description:
          "High-level reporting dashboard generating detailed sales breakdown, high-velocity product movements, and inventory turnover predictions.",
        highlights: [
          "Recharts interactive bar and line charts for daily sales volume",
          "Low-stock alert threshold analytics",
          "Multi-branch comparative sales performance matrix"
        ]
      },
      {
        id: "data-pipeline",
        title: "Type-Safe Zod Validation & State Engine",
        description:
          "Enterprise data layer utilizing strict Zod schemas and Redux Toolkit state slices to ensure total runtime type safety across forms and state updates.",
        highlights: [
          "Schema-driven form generation and real-time validation",
          "Normalized Redux state store for optimal rendering",
          "Centralized error handling and toast alerts via Sonner"
        ]
      }
    ]
  }
]

export default projects
