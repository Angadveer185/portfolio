import { SkillEntry } from "@/types/types";
import { Project } from "@/types/types";
import { Experience } from "@/types/types";
import { Technology } from "@/types/types";

export const SKILL_DATA: SkillEntry[] = [
  {
    key: "frontend",
    title: "Frontend",
    tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    achievements: [
      "Developed responsive and accessible user interfaces.",
      "Implemented modern frontend architectures using React and Next.js.",
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
    tech: ["Node.js", "Express", "Go", "Python"],
    achievements: [
      "Developed scalable RESTful APIs using Node.js and Express.",
      "Implemented efficient database queries and optimized performance.",
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
    tech: ["Data Structures", "Algorithms", "OS", "System Design"],
    achievements: [
      "Demonstrated strong problem-solving skills through competitive programming.",
      "Designed and implemented efficient algorithms for complex computational problems.",
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
    tech: ["PostgreSQL", "MongoDB", "Redis", "SQL"],
    achievements: [
      "Designed and maintained robust relational schemas.",
      "Optimized database performance through indexing and query tuning.",
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
    title: "Analytics Dashboard",
    description:
      "A secure, enterprise-grade business intelligence dashboard featuring interactive multi-tenant metric tracking, user access controls, and live stream ingestion panels.",
    image: "/projects/placeholder.png",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "#",
    demo: "#",
    achievements: [
      "Architected web socket tunnels to pipe high-throughput telemetry updates down to Client DOM trees under 45ms.",
      "Configured custom JWT cookie rotation cycles alongside strict multi-tenant role isolation schemas.",
      "Architected web socket tunnels to pipe high-throughput telemetry updates down to Client DOM trees under 45ms.",
      "Configured custom JWT cookie rotation cycles alongside strict multi-tenant role isolation schemas.",
    ],
  },
  {
    id: 2,
    title: "2D Retro Platformer",
    description:
      "A fast-paced side-scroller action engine written with stateful physics maps, precise input buffering, procedural enemy asset pathing, and intricate multi-tier boss mechanics.",
    image: "/projects/placeholder.png",
    technologies: ["Unity", "C#", "Aseprite", "WebGL"],
    github: "#",
    demo: "#",
    achievements: [
      "Programmed frame-exact coyote time, custom hit-box alignment layers, and recursive wall jumping vectors.",
      "Optimized sprite sheet texture maps via low-draw state compression pipelines ensuring smooth 60fps WebGL execution.",
    ],
  },
  {
    id: 3,
    title: "Network Topology Simulator",
    description:
      "An algorithmic visualizer displaying graph data configurations, simulating load balancers, and mimicking real-time data corruption drops across network layouts.",
    image: "/projects/placeholder.png",
    technologies: ["Python", "NetworkX", "FastAPI", "D3.js"],
    github: "#",
    demo: "#",
    achievements: [
      "Rendered Dijkstra and A* path discovery sequences interactively through high-performance D3 link graphs.",
      "Simulated network throttle behaviors via automated packet congestion calculation cycles.",
    ],
  },
  {
    id: 4,
    title: "Collaborative Design Canvas",
    description:
      "A multiplayer vector layout platform allowing remote development squads to map vector shapes, wireframes, and layouts onto a infinite vector room concurrently.",
    image: "/projects/placeholder.png",
    technologies: [
      "TypeScript",
      "Next.js",
      "Socket.io",
      "Redis",
      "HTML5 Canvas",
    ],
    github: "#",
    demo: "#",
    achievements: [
      "Implemented an Conflict-Free Replicated Data Type (CRDT) operational sequence matrix avoiding document drift bugs.",
      "Integrated a highly responsive Redis pub/sub layer handling cursor positional events with sub-10ms server overhead.",
    ],
  },
  {
    id: 5,
    title: "Neural Audio Classifier",
    description:
      "A deep-learning signal workflow platform reading audio recordings to extract wave frequencies and visually identify instrument frequencies.",
    image: "/projects/placeholder.png",
    technologies: ["Python", "PyTorch", "NumPy", "Docker", "React"],
    github: "#",
    demo: "#",
    achievements: [
      "Trained a convolutional neural network (CNN) variant achieving a verified 94.2% taxonomy parsing accuracy target.",
      "Wrapped the inference pipeline inside containerized workers utilizing asynchronous message queues.",
    ],
  },
];

export const experiences: Experience[] = [
  {
    company: "BitwiseLearn",
    role: "Software Development Intern",
    logo: "/logos/bitwiselearn.svg",
    from: "Dec 2025",
    to: "Mar 2026",
    location: "Remote",
    description: [
      "Built production backend features.",
      "Improved API performance.",
      "Worked with REST APIs.",
      "Collaborated with engineering team.",
    ],
    technologies: [
      { name: "Node.js", icon: "/icons/NextJs.svg" },
      { name: "Express", icon: "/icons/NextJs.svg" },
      { name: "MongoDB", icon: "/icons/NextJs.svg" },
      { name: "React", icon: "/icons/NextJs.svg" },
      { name: "TypeScript", icon: "/icons/NextJs.svg" },
    ],
  },
  {
    company: "PixelForge Studios",
    role: "Frontend Engineer",
    logo: "/logos/pixelforge.svg",
    from: "Jun 2024",
    to: "Nov 2025",
    location: "Remote",
    description: [
      "Architected highly interactive dashboard components utilizing complex Tailwind styling structures.",
      "Implemented localized state machines for fluid UI transitions.",
      "Reduced client-side bundle size by 35% through dynamic code-splitting implementations.",
      "Conducted standard cross-browser responsive fidelity auditing.",
    ],
    technologies: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Zustand" },
      { name: "Framer Motion" },
      { name: "Vite" },
    ],
  },
  {
    company: "CloudScale Inc.",
    role: "Full Stack Developer",
    logo: "/logos/cloudscale.svg",
    from: "Jan 2023",
    to: "May 2024",
    location: "Remote",
    description: [
      "Designed real-time data streaming architectures using event-driven microservices.",
      "Managed infrastructure provisioning via continuous integration workflows.",
      "Developed robust internal design tools adopted by cross-functional engineering teams.",
    ],
    technologies: [
      { name: "Node.js" },
      { name: "PostgreSQL" },
      { name: "AWS S3" },
      { name: "GraphQL" },
      { name: "GitHub Actions" },
    ],
  },
  {
    company: "CyberShield AI",
    role: "Security Solutions Dev",
    logo: "/logos/cybershield.svg",
    from: "Aug 2022",
    to: "Dec 2022",
    location: "Remote",
    description: [
      "Engineered algorithmic patterns to detect anomalies across network packets.",
      "Refactored authentication layers to strictly enforce strict zero-trust parameters.",
      "Automated system vulnerability parsing modules using isolated background cron tasks.",
    ],
    technologies: [
      { name: "Python" },
      { name: "FastAPI" },
      { name: "Docker" },
      { name: "PostgreSQL" },
    ],
  },
];

export const Socials = {
  LinkedIn: "https://www.linkedin.com",
  GitHub: "https://www.github.com",
  Instagram: "https://www.instagram.com",
  Discord: "https://www.discord.com",
  Mail: "mailto:example@example.com",
  Phone: "tel:+1234567890"
};