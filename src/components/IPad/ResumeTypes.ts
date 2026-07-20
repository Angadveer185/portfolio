export interface ResumeData {
  personal: {
    name: string;
    phone: string;
    email: string;
    github: string;
    linkedin: string;
  };

  education: Education[];

  experience: Experience[];

  projects: Project[];

  skills: SkillGroup[];

  honors: string[];
}

export interface Education {
  degree: string;
  university: string;
  location?: string;
  duration: string;
  cgpa: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location?: string;
  points: string[];
}

export interface Project {
  name: string;
  stack: string[];
  type?: string;
  points: string[];
}

export interface SkillGroup {
  title: string;
  skills: string[];
}