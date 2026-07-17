import { SkillEntry } from "@/types/types";

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
