export type Project = {
    name: string;
    imgSrc: string;
    imgAlt: string;
    tags: string[];
    dateFrom: string;
    dateTo: string;
    href: string;
    description: string[];
    defaultOpen: boolean;
};

export const projects: Project[] = [
    {
        name: "Ori UI",
        imgSrc: "https://oriui.app/assets/logo/ori-dark.svg",
        imgAlt: "Ori UI Alt",
        tags: ["Svelte", "Tailwind CSS", "TypeScript", "Vite", "SvelteKit", "Shadcn-Svelte", "Vitest"],
        dateFrom: "Dec 2025",
        dateTo: "",
        href: "https://oriui.app",
        description: [
            "Built a modern, accessible UI component library for Svelte, focused on smooth animations and production-ready components.",
            "Integrated Anime.js to create performant micro-interactions and text animations, emphasizing clean APIs and reusability.",
            "Designed and documented reusable components with theming support (Tailwind CSS), enabling rapid adoption and consistent UI across projects"
        ],
        defaultOpen: true,
    },
    {
        name: "Shortcut",
        imgSrc: "https://shortcut-sand.vercel.app/images/scissors.gif",
        imgAlt: "Shortcut Alt",
        tags: ["Next.JS"],
        dateFrom: "May 2025",
        dateTo: "",
        href: "https://shortcut-sand.vercel.app",
        description: [
            "Implemented passwordless Better-Auth login to streamline user access.",
            "Built a serverless data layer using Supabase and Drizzle for real-time querying"
        ],
        defaultOpen: false,
    },
    {
        name: "dsa_srs",
        imgSrc: "https://dsa-srs.vercel.app/terminal.svg",
        imgAlt: "dsa_srs alt",
        tags: ["Next.JS", "Golang", "Bubble Tea"],
        dateFrom: "Jul 2025",
        dateTo: "",
        href: "https://dsa-srs.vercel.app/",
        description: [
            "Built a terminal-based spaced repetition system in Go to master DSA concepts and LeetCode problems.",
            "Implemented SM-2 algorithm with persistent JSON-based card storage and interactive TUI using Bubble Tea.",
            "Added support for dual card types, tagging, and ease factor tracking for intelligent review scheduling."
        ],
        defaultOpen: false,
    },
    {
        name: "Chaisay",
        imgSrc: "/logo/chaisay_logo.png",
        imgAlt: "Chaisay alt",
        tags: ["Golang", "Bubble Tea"],
        dateFrom: "Jul 2025",
        dateTo: "",
        href: "https://github.com/TheChirag356/chaisay",
        description: [
            "Developed a cross-platform command-line utility in Go that outputs ASCII art of chai (or other beverages) with customizable messages, inspired by cowsay.",
            "Published as both a standalone CLI and Go library, enabling developers to integrate fun ASCII messages into scripts and applications.",
            "Added support for multiple beverage templates, colored output, and message wrapping for better terminal readability"
        ],
        defaultOpen: false,
    },
    {
        name: "Nexathon",
        imgSrc: "https://nexathon.tech/img/nexus_logo.jpg",
        imgAlt: "Nexathon alt",
        tags: ["React", "React Router", "Tailwind"],
        dateFrom: "Feb 2025",
        dateTo: "Mar 2025",
        href: "https://nexathon.tech/",
        description: [
            "Solo Developer of a high-performance landing page with Vite, React, and Tailwind CSS, achieving sub-second HMR and serving 770+ participants nationwide.",
            "Implemented Vercel Analytics and Google Search indexing, improving SEO visibility and traffic insights.",
            "Built and integrated a certificate generation system, delivering personalized certificates to all participants upon completion."
        ],
        defaultOpen: false,
    },
    {
        name: "RSS Aggregator",
        imgSrc: "/logo/rssagg_logo.png",
        imgAlt: "RSS Agg alt",
        tags: ["Golang", "Postgresql"],
        dateFrom: "Aug 2025",
        dateTo: "",
        href: "https://github.com/TheChirag356/rssagg",
        description: [
            "Developed a high - performance RSS feed aggregator in Go, capable of fetching and parsing < b > 1000 + articles daily from multiple sources.",
            "Integrated background workers for scheduled feed updates, reducing fetch latency by 40 %.",
            "Containerized application with Docker for easy deployment and portability across environments",
        ],
        defaultOpen: false,
    },
];