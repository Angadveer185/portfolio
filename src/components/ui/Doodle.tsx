import Image from "next/image";
import React from "react";
import clsx from "clsx";
import { DoodleProps } from "@/types/types";

const Doodle = ({
  src,
  width, // e.g. 200 (pixels on desktop)
  x,
  y,
  rotation = 0,
  opacity = 1,
  zIndex = -1,
  className,
  alt = "Doodle",
}: DoodleProps) => {
  return (
    <div
      className={clsx(
        "pointer-events-none absolute select-none origin-center",
        className
      )}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        /* 
          Scales down flexibly on small viewports (down to 30% of target or 35px), 
          and caps out naturally at full target pixel size on desktop.
        */
        width: `clamp(${Math.max(35, Math.round(width * 0.35))}px, ${width * 0.2}vw, ${width}px)`,
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
        className="h-auto w-full object-contain"
        draggable={false}
        priority={false}
      />
    </div>
  );
};

export default Doodle;