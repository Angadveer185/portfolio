"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
  isActive?: boolean; // Prop to highlight current state
}

export default function DVDButton({
  children,
  onClick,
  isActive = false,
}: Props) {
  return (
    <motion.button
      // 1. Hover state physics (lifts button up slightly + subtle glow)
      whileHover={{
        y: -2,
        boxShadow:
          "0 4px 12px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.1)",
      }}
      // 2. Click mechanics (presses it realistically deep into its slot chassis frame)
      whileTap={{
        y: 3,
        scale: 0.96,
        boxShadow: "inset 0 4px 8px rgba(0,0,0,0.8)",
      }}
      // Fast, mechanical spring physics instead of a linear float transition
      transition={{
        type: "spring",
        stiffness: 450,
        damping: 20,
      }}
      onClick={onClick}
      className={`relative flex h-12 w-12 cursor-pointer items-center justify-center rounded-xl border text-lg font-bold transition-colors duration-200 select-none sm:h-14 sm:w-14 sm:text-xl ${
        isActive
          ? "border-[#E25543] bg-linear-to-b from-[#2e1d1b] to-[#1e1413] text-[#E25543]"
          : "border-[#514439] bg-linear-to-b from-[#3b3733] to-[#252321] text-[#D4BAA3]"
      } `}
      style={{
        boxShadow:
          "0 2px 5px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
      }}
    >
      {/* 3. Tactical Retro Status Dot Indicator Lamp (Top Corner) */}
      <div className="absolute top-1.5 right-1.5 flex h-1.5 w-1.5 items-center justify-center">
        <span
          className={`h-full w-full rounded-full transition-all duration-300 ${
            isActive
              ? "bg-[#E25543] shadow-[0_0_6px_#ff7563]"
              : "bg-neutral-600 shadow-none"
          }`}
        />
      </div>

      {/* Inner Icon Vector Center Alignment */}
      <span className="drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
        {children}
      </span>
    </motion.button>
  );
}
