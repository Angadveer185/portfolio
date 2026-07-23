"use client";

import Image from "next/image";
import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { DoodleProps } from "@/types/types";

const Doodle = ({
  src,
  width,
  x,
  y,
  rotation = 0,
  opacity = 1,
  zIndex = -10,
  className,
  alt = "Doodle",
}: DoodleProps) => {
  return (
    <motion.div
      className={clsx(
        "pointer-events-none absolute origin-center select-none",
        className
      )}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        /* Scales linearly with screen width, with a sensible fallback min/max */
        width: `clamp(${Math.max(24, Math.round(width * 0.4))}px, ${(width / 1440) * 100}vw, ${width}px)`,
        zIndex: zIndex,
      }}
      initial={{
        opacity: 0,
        scale: 0.8,
        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
      }}
      whileInView={{
        opacity: opacity,
        scale: 1,
        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width * 2}
        height={width * 2}
        className="h-auto w-full object-contain"
        draggable={false}
        loading="lazy"
      />
    </motion.div>
  );
};

export default Doodle;  