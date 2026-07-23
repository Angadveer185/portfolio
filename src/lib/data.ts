import { SkillEntry, Project, Experience, AboutData } from "@/types/types";
import { Tech } from "@/lib/technology";

export const SKILL_DATA: SkillEntry[] = [
  {
    key: "frontend",
    title: "Frontend",
    tech: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive Design",
      "Accessibility",
      "UI/UX Design",
    ],
    achievements: [
      "Developed responsive and accessible user interfaces for platforms like Persephone and Epiphany.",
      "Optimized frontend performance through code splitting, lazy loading, and efficient state management.",
      "Collaborated with backend teams to integrate RESTful APIs and ensure seamless data flow between frontend and backend systems.",
    ],
    photo: {
      src: "skills/Frontend.svg",
      size: 160,
      rotation: 5,
      defaultX: 700,
      defaultY: 25,
      orientation: "portrait",
      caption: "Frontend Development",
    },
  },
  {
    key: "backend",
    title: "Backend",
    tech: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "Prisma",
      "JWT",
      "Docker",
      "Rate Limiting",
      "Caching",
      "Scalable Architecture",
    ],
    achievements: [
      "Engineered RESTful API controllers with Redis caching and rate-limiting to lower response latency.",
      "Coded scalable backend services supporting simultaneous high-concurrency assessment sessions.",
      "Optimized backend performance through efficient database queries and API design.",
    ],
    photo: {
      src: "skills/Backend.svg",
      size: 160,
      rotation: -4,
      defaultX: 40,
      defaultY: 30,
      orientation: "portrait",
      caption: "Backend Development",
    },
  },
  {
    key: "coreCs",
    title: "Core CS",
    tech: [
      "Java",
      "Data Structures",
      "Algorithms",
      "OOPS",
      "Git",
      "DBMS",
      "Computer Networks",
      "Operating Systems",
      "SQL",
      "Problem Solving",
    ],
    achievements: [
      "Solved 600+ algorithmic problems across LeetCode and TakeUForward.",
      "Applied deep fundamental knowledge in DBMS and networking protocol optimization.",
      "Implemented efficient data structures and algorithms to optimize backend services and improve system performance.",
    ],
    photo: {
      src: "skills/CoreCS.svg",
      size: 170,
      rotation: 3,
      defaultX: 260,
      defaultY: 20,
      orientation: "portrait",
      caption: "Core Computer Science",
    },
  },
  {
    key: "database",
    title: "Database",
    tech: [
      "MongoDB",
      "MySQL",
      "Redis",
      "SQL",
      "NoSQL",
      "Database Design",
      "Query Optimization",
    ],
    achievements: [
      "Optimized data querying pipelines using Redis caching and relational/NoSQL schemas.",
      "Designed and maintained database schemas for high-throughput applications, ensuring data integrity and performance.",
      "Implemented database migration strategies to ensure smooth transitions and data consistency.",
    ],
    photo: {
      src: "skills/Database.svg",
      size: 160,
      rotation: -2,
      defaultX: 480,
      defaultY: 40,
      orientation: "portrait",
      caption: "Database Management",
    },
  },
];

// ----

export const projects: Project[] = [
  {
    id: 1,
    title: "Media Server",
    description:
      "A self-hosted, Docker-based media platform for automated media management, secure remote streaming, and infrastructure orchestration.",
    image: "/projects/MediaServer.png",
    technologies: [
      Tech.Docker,
      Tech.Linux,
      Tech.Networking,
      Tech.VPN,
      Tech.WireGuard,
      Tech.Gluetun,
    ],
    demo: "https://watch.angadchh.me",
    achievements: [
      "Designed and deployed a containerized media platform using Docker Compose, integrating Jellyfin, Radarr, Sonarr, and supporting services.",
      "Implemented VPN-based network isolation with Gluetun and WireGuard to secure network traffic while maintaining reliable, high-performance downloads.",
      "Automated media management workflows including content discovery, indexing, downloading, organization, metadata enrichment, and subtitle retrieval.",
      "Configured secure remote access with Cloudflare Tunnel, enabling encrypted access to self-hosted services without exposing the home network.",
    ],
  },
  {
    id: 2,
    title: "Persephone",
    description:
      "A developer recruitment platform aggregating coding/publishing profiles with graph-driven job and collaborator recommendation pipelines.",
    image: "/projects/Persephone.png",
    technologies: [
      Tech.Node,
      Tech.Express,
      Tech.NextJs,
      Tech.TypeScript,
      Tech.Tailwind,
      Tech.MongoDB,
      Tech.Prisma,
      Tech.Redis,
      Tech.Docker,
    ],
    github: "https://github.com/Angadveer185/Persephone",
    demo: "https://apps.microsoft.com/detail/9p85ncfs9mdm?hl=en&gl=IN&ocid=pdpshare",
    achievements: [
      "Created a developer recruitment platform that aggregates coding and publishing profiles from LeetCode, Codeforces, Medium, and GitHub.",
      "Implemented a graph-driven recommendation engine using Neo4j to surface relevant jobs, collaborators, and projects, increasing engagement by 15%.",
      "Built 10+ RESTful API controllers for core application features along with Redis caching and Rate-Limiting to reduce repeated database queries and improve response performance.",
      "Designed a profile dashboard allowing developers to showcase projects and enabling organizations to discover candidates, supporting 50+ active users and 7+ organizations.",
    ],
  },
  {
    id: 3,
    title: "Epiphany",
    description:
      "A centralized educational institution platform supporting multi-tenancy, RBAC across multiple roles, and proctored examinations.",
    image: "/projects/Epiphany.png",
    technologies: [
      Tech.Node,
      Tech.Express,
      Tech.NextJs,
      Tech.TypeScript,
      Tech.Tailwind,
      Tech.MongoDB,
      Tech.Prisma,
      Tech.Docker,
    ],
    github: "https://github.com/Angadveer185/Epiphany",
    demo: "https://epiphany-client.vercel.app/",
    achievements: [
      "Developed a centralized platform for educational institutions with RBAC across 5+ roles within a multi-tenant architecture.",
      "Introduced a proctored examination module that reduced malpractices by 70% during internal pilot testing.",
      "Streamlined backend workflows for course administration, assessment delivery, and student progress analytics.",
      "Implemented a secure authentication system with JWT and role-based access control, ensuring data privacy and integrity across multiple institutions.",
    ],
  },
  {
    id: 4,
    title: "Portfolio",
    description:
      "A personal portfolio website showcasing my skills, projects, and experiences with a focus on performance and accessibility.",
    image: "/projects/Portfolio.png",
    technologies: [
      Tech.Node,
      Tech.NextJs, 
      Tech.TypeScript, 
      Tech.Tailwind, 
    ],
    github: "https://github.com/Angadveer185/portfolio",
    demo: "#",
    achievements: [
      "Designed and implemented a responsive portfolio website with a focus on performance and accessibility.",
      "Integrated modern UI components and optimized the site for fast loading times and smooth user interactions.",
      "Utilized TypeScript for type safety and React Icons for consistent iconography throughout the application.",
      "Implemented a dynamic project showcase with interactive elements, allowing visitors to explore my work and achievements effectively.",
    ],
  },
  {
    id: 5,
    title: "Trackio",
    description:
      "A focused productivity tracker designed to help users manage their tasks and improve their workflow.",
    image: "/projects/Trackio.png",
    technologies: [
      Tech.Node,
      Tech.Express, 
      Tech.React, 
      Tech.Tailwind, 
      Tech.MongoDB, 
      Tech.Prisma, 

    ],
    github: "https://github.com/Angadveer185/Trackio",
    demo: "https://trackio-byti.vercel.app/",
    achievements: [
      "Create and manage collaborative learning groups around specific skills.",
      "Track progress through shared roadmaps and personalized dashboards.",
      "Maintain learning streaks and share resources within study groups.",
      "Encourages consistent learning through social accountability and gamification.",
    ],
  },
];

export const experiences: Experience[] = [
  {
    company: "Bitwise Learn",
    role: "Software Development Intern",
    logo: "/company/BitwiseLearn.svg",
    from: "Dec 2025",
    to: "June 2026",
    location: "Remote",
    description: [
      "Engineered 5+ production features for the assessment platform, reducing candidate submission errors by 20% and navigation speed by 10%.",
      "Partnered with a cross-functional team of 5+ backend engineers to ship backend features for the online assessment platform.",
      "Coded and integrated RESTful APIs and scalable backend services, supporting 20+ simultaneous assessment sessions.",
      "Analyzed system bottlenecks and improved backend performance, lowering API response latency by 20%.",
    ],
    technologies: [
      Tech.Node,
      Tech.Express,
      Tech.MongoDB,
      Tech.NextJs,
      Tech.TypeScript,
      Tech.Docker,
    ],
  },
];

export const Socials = {
  LinkedIn: "https://www.linkedin.com/in/angadveer-singh-chhoker",
  GitHub: "https://github.com/Angadveer185",
  Instagram: "https://www.instagram.com/angadveer.chh",
  Discord: "https://discordapp.com/users/645950234995851275",
  Mail: "mailto:angad185singh@gmail.com",
  Phone: "tel:+919779935715",
};

export const aboutData: AboutData = {
  goal: "I am a passionate software developer who loves building scalable backend systems, responsive web apps, and secure automated environments. I aim to build high-throughput applications and robust end-to-end user experiences.",

  abilities: [
    {
      title: "Frontend",
      subtitle: "React.js & Next.js",
      level: 90,
    },
    {
      title: "Backend",
      subtitle: "Node.js & Express.js",
      level: 89,
    },
    {
      title: "Database",
      subtitle: "MongoDB & SQL",
      level: 82,
    },
    {
      title: "Infrastructure",
      subtitle: "Docker & Linux",
      level: 85,
    },
    {
      title: "Networking",
      subtitle: "VPN & Isolation",
      level: 86,
    },
    {
      title: "Problem Solving",
      subtitle: "DSA & Core CS",
      level: 95,
    },
  ],

  stats: {
    projects: 5, // Based on 5+ projects completed
    githubPushes: 600, // Based on 600+ solved problems
  },
};
