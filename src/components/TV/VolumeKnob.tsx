"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  volume: number;
  setVolume: Dispatch<SetStateAction<number>>;
}

export default function VolumeBar({ volume, setVolume }: Props) {
  const totalBars = 10;
  const [hoveredVolume, setHoveredVolume] = useState<number | null>(null);

  const currentLevel =
    hoveredVolume !== null ? hoveredVolume : Math.max(1, Math.round(volume / 10));

  return (
    <div className="flex items-center gap-3 select-none sm:gap-4">
      <span className="text-text-secondary font-mono text-[10px] font-bold tracking-widest sm:text-xs">
        VOL
      </span>

      <div
        className="flex h-12 items-end gap-1.5 rounded-lg border border-[#44382f]/50 bg-[#1e1713] px-2.5 py-1.5 sm:h-15 sm:px-3"
        onMouseLeave={() => setHoveredVolume(null)}
      >
        {Array.from({ length: totalBars }).map((_, index) => {
          const barLevel = index + 1;
          const isLit = barLevel <= currentLevel;

          return (
            <motion.div
              key={index}
              onMouseEnter={() => setHoveredVolume(barLevel)}
              onClick={() => setVolume(barLevel * 10)}
              className="cursor-pointer transition-colors duration-150"
              style={{
                width: "6px",
                height: `${30 + (index / totalBars) * 70}%`,
              }}
            >
              <div
                className={`h-full w-full rounded-full transition-all duration-200 ${
                  isLit
                    ? "border border-[#ff7563] bg-[#E25543] shadow-[0_0_8px_rgba(226,85,67,0.6)]"
                    : "border border-transparent bg-[#44382f]"
                }`}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
