const projects = [
  {
    id: "footwear",
    title: "Footwear Central Admin",
    subtitle: "Enterprise Multi-Vendor E-Commerce Platform",
    description:
      "Central admin panel for a multi-vendor footwear marketplace in Nigeria. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4. Covers platform metrics, seller KYC verification, order monitoring with escrow tracking, and buyer dispute resolution.",
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
    image: "/footwear%20admin%20dashboard.png",
    snapshots: [
      {
        id: "analytics",
        title: "Admin Dashboard & Business Overview",
        image: "/footwear%20admin%20dashboard.png",
        description:
          "Platform overview with total GMV, active sellers, and completed orders, plus quick actions and a business overview with GMV trend and order volume charts.",
        highlights: [
          "Key metric cards for GMV, sellers, and completed orders",
          "GMV trend and order volume charts with a date range filter",
          "Quick actions to KYC, sellers, orders, and disputes"
        ]
      },
      {
        id: "kyc",
        title: "Seller KYC Verification",
        image: "/Seller%20KYC%20Verification.png",
        description:
          "Step-by-step seller review across Business Information, Identity & Trade Verification, and Decision tabs.",
        highlights: [
          "NIN, ID card, and passport/selfie matching",
          "Physical store photos and sample product photos",
          "Separate decision step to approve or reject sellers"
        ]
      },
      {
        id: "orders",
        title: "Order Monitoring & Escrow Tracking",
        image: "/order%20management%20page.png",
        description:
          "Marketplace order management with a detailed order view showing the full lifecycle, payment breakdown, and delivery information.",
        highlights: [
          "Order progress tracker from placed to delivered",
          "Fee, seller payout, and escrow reference breakdown",
          "Delivery address and courier tracking details"
        ]
      },
      {
        id: "disputes",
        title: "Dispute Resolution",
        image: "/Dispute%20Resolution%20page.png",
        description:
          "Dispute center for reviewing buyer complaints, with status tracking and a details panel showing the issue, amount, and evidence photos.",
        highlights: [
          "Open, under review, and resolved dispute stats",
          "Buyer evidence photos and preferred resolution",
          "Assign disputes and manage sub-admins"
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