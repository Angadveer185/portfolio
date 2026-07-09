import Image from "next/image";
import React from "react";
import clsx from "clsx";
import { DoodleProps } from "@/types/types";

const Doodle = ({
  src,
  width,
  x,
  y,
  rotation = 0,
  opacity = 1,
  zIndex = 0,
  className,
  alt = "Doodle",
}: DoodleProps) => {
  return (
    <div
      className={clsx(
        "pointer-events-none absolute select-none",
        className
      )}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: `clamp(40px, ${width}vw, 400px)`,
        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
        opacity,
        zIndex,
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={1000}
        height={1000}
        className="h-auto w-full"
        draggable={false}
        priority={false}
      />
    </div>
  );
};

export default Doodle;