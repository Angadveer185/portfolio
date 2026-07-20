import { ResumeData } from "./ResumeTypes";

export const resumeData: ResumeData = {
  personal: {
    name: "Angadveer Singh Chhoker",
    phone: "+91 9779935715",
    email: "angad185singh@gmail.com",
    github: "github.com/Angadveer185",
    linkedin: "linkedin.com/in/angadveer-singh",
  },

  education: [
    {
      degree: "Bachelor of Engineering",
      university: "Chitkara University",
      duration: "Aug 2024 - Jun 2028",
      cgpa: "9.79",
    },
  ],

  experience: [
    {
      role: "Software Development Intern",
      company: "BitwiseLearn",
      duration: "Dec 2025 - Mar 2026",
      points: [
        "Engineered 5+ production features.",
        "Worked with backend team.",
        "Built scalable REST APIs.",
        "Reduced latency by 20%.",
      ],
    },
  ],

  projects: [
    {
      name: "Persephone",
      stack: [
        "Next.js",
        "Express",
        "MongoDB",
        "Redis",
        "Neo4j",
      ],
      type: "Full Stack",
      points: [
        "Developer recruitment platform.",
        "Graph recommendation engine.",
        "REST APIs + Redis caching.",
      ],
    },

    {
      name: "Media Server",
      stack: [
        "Docker",
        "Linux",
        "VPN",
      ],
      type: "Infrastructure",
      points: [
        "Automated media management.",
        "Docker networking.",
      ],
    },
  ],

  skills: [
    {
      title: "Languages",
      skills: ["Java", "TypeScript", "C++"],
    },
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TailwindCSS"],
    },
    {
      title: "Backend",
      skills: ["Node", "Express"],
    },
    {
      title: "Database",
      skills: ["MongoDB", "Redis", "MySQL"],
    },
  ],

  honors: [
    "500+ DSA problems solved",
    "GirlScript Summer of Code",
  ],
};