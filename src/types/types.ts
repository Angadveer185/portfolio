
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
    technologies: string[];
    github: string;
    demo: string;
    achievements: string[]; // 1. Added achievements property
}