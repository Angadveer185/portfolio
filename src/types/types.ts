import { IconType } from "react-icons";

export type DoodleProps = {
  src: string;
  width: number;
  x: number;
  y: number;
  rotation?: number;
  opacity?: number;
  zIndex?: number;
  className?: string;
  alt?: string;
};

export type TagProps = {
  text: string;
}

export interface SkillEntry {
  key: string;
  title: string;
  tech: string[];
  achievements: string[];
  photo: {
    src: string;
    size: number;
    rotation: number;
    defaultX: number;
    defaultY: number;
    orientation: "landscape" | "portrait";
    caption: string;
  };
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;

  technologies: Technology[];

  github?: string | null;
  demo: string;

  achievements: string[];
}

export interface Technology {
  name: string;
  icon: IconType;
  color: string;
}

export interface Experience {
  company: string;
  role: string;

  logo: string;

  from: string;
  to: string;
  location: string;

  description: string[];

  technologies: Technology[];
}

export interface Ability {
  title: string;
  subtitle: string;
  level: number;
}

export interface Stats {
  projects: number;
  githubContributions: number;
}

export interface AboutData {
  goal: string;
  abilities: Ability[];
  stats: Stats;
}