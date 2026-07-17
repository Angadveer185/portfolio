
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