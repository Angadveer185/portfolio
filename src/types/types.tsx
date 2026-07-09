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