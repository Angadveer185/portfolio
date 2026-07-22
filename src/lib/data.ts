import { SkillEntry, Project, Experience, AboutData } from "@/types/types";

export const SKILL_DATA: SkillEntry[] = [
  {
    key: "frontend",
    title: "Frontend",
    tech: ["React.js", "Next.js", "TypeScript", "JavaScript"],
    achievements: [
      "Developed responsive and accessible user interfaces for platforms like Persephone and Bitwise Learn.",
      "Built dynamic, interactive profile dashboards and institution management interfaces.",
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
    tech: ["Node.js", "Express.js", "RESTful APIs", "Prisma"],
    achievements: [
      "Engineered RESTful API controllers with Redis caching and rate-limiting to lower response latency.",
      "Coded scalable backend services supporting simultaneous high-concurrency assessment sessions.",
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
    tech: ["Data Structures", "Algorithms", "DBMS", "Networking"],
    achievements: [
      "Solved 500+ algorithmic problems across LeetCode and TakeUForward.",
      "Applied deep fundamental knowledge in DBMS and networking protocol optimization.",
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
    tech: ["MongoDB", "MySQL", "Redis", "Neo4j"],
    achievements: [
      "Implemented graph-driven recommendation engines using Neo4j.",
      "Optimized data querying pipelines using Redis caching and relational/NoSQL schemas.",
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
      "A Docker-based media automation stack featuring network isolation and automated acquisition pipelines.",
    image: "/projects/placeholder.png",
    technologies: ["Docker", "Linux", "Networking", "VPN", "WireGuard", "Gluetun"],
    github: "https://github.com/Angadveer185",
    demo: "#",
    achievements: [
      "Architected and hosted a Docker-based media automation stack using services like Radarr, Sonarr, Prowlarr, Bazarr, and qBittorrent.",
      "Secured torrent traffic through VPN-based network isolation using Gluetun and WireGuard while preserving high download throughput.",
      "Orchestrated automated media acquisition, subtitle retrieval, and indexing pipelines to eliminate manual media management.",
    ],
  },
  {
    id: 2,
    title: "Persephone",
    description:
      "A developer recruitment platform aggregating coding/publishing profiles with graph-driven job and collaborator recommendation pipelines.",
    image: "/projects/placeholder.png",
    technologies: [
      "Next.js",
      "Express.js",
      "MongoDB",
      "Prisma",
      "Neo4j",
      "Redis",
      "Docker",
    ],
    github: "https://github.com/Angadveer185",
    demo: "#",
    achievements: [
      "Created a developer recruitment platform that aggregates coding and publishing profiles from LeetCode, Codeforces, Medium, and GitHub.",
      "Implemented a graph-driven recommendation engine using Neo4j to surface relevant jobs, collaborators, and projects, increasing engagement by 15%.",
      "Built 10+ RESTful API controllers for core application features along with Redis caching and Rate-Limiting to reduce repeated database queries and improve response performance.",
      "Designed a profile dashboard allowing developers to showcase projects and enabling organizations to discover candidates, supporting 50+ active users and 7+ organizations.",
    ],
  },
  {
    id: 3,
    title: "Bitwise Learn",
    description:
      "A centralized educational institution platform supporting multi-tenancy, RBAC across multiple roles, and proctored examinations.",
    image: "/projects/placeholder.png",
    technologies: ["Next.js", "Express.js", "MongoDB", "Prisma", "Docker"],
    github: "https://github.com/Angadveer185",
    demo: "#",
    achievements: [
      "Developed a centralized platform for educational institutions with RBAC across 5+ roles within a multi-tenant architecture.",
      "Introduced a proctored examination module that reduced malpractices by 70% during internal pilot testing.",
      "Streamlined backend workflows for course administration, assessment delivery, and student progress analytics.",
    ],
  },
];

export const experiences: Experience[] = [
  {
    company: "Bitwise Learn",
    role: "Software Development Intern",
    logo: "/logos/bitwiselearn.svg",
    from: "Dec 2025",
    to: "Mar 2026",
    location: "Remote",
    description: [
      "Engineered 5+ production features for the assessment platform, reducing candidate submission errors by 20% and navigation speed by 10%.",
      "Partnered with a cross-functional team of 5+ backend engineers to ship backend features for the online assessment platform.",
      "Coded and integrated RESTful APIs and scalable backend services, supporting 20+ simultaneous assessment sessions.",
      "Analyzed system bottlenecks and improved backend performance, lowering API response latency by 20%.",
    ],
    technologies: [
      { name: "Node.js", icon: "/icons/NextJs.svg" },
      { name: "Express.js", icon: "/icons/NextJs.svg" },
      { name: "MongoDB", icon: "/icons/NextJs.svg" },
      { name: "React.js", icon: "/icons/NextJs.svg" },
      { name: "TypeScript", icon: "/icons/NextJs.svg" },
    ],
  },
];

export const Socials = {
  LinkedIn: "https://linkedin.com/in/angadveer-singh",
  GitHub: "https://github.com/Angadveer185",
  Instagram: "https://www.instagram.com",
  Discord: "https://www.discord.com",
  Mail: "mailto:angad185singh@gmail.com",
  Phone: "tel:+919779935715",
};

export const aboutData: AboutData = {
  goal:
    "I am a passionate software developer who loves building scalable backend systems, responsive web apps, and secure automated environments. I aim to build high-throughput applications and robust end-to-end user experiences.",

  abilities: [
    {
      title: "Frontend",
      subtitle: "React.js & Next.js",
      level: 90,
    },
    {
      title: "Backend",
      subtitle: "Node.js & Express.js",
      level: 92,
    },
    {
      title: "Database",
      subtitle: "MongoDB & Neo4j",
      level: 88,
    },
    {
      title: "Infrastructure",
      subtitle: "Docker & Linux",
      level: 85,
    },
    {
      title: "Networking",
      subtitle: "VPN & Isolation",
      level: 84,
    },
    {
      title: "Problem Solving",
      subtitle: "DSA & Core CS",
      level: 95,
    },
  ],

  stats: {
    projects: 3,
    githubPushes: 500, // Based on 500+ solved problems
  },
};