"use client";

import { motion } from "framer-motion";
import ProgressBar from "./ProgressBar";

interface Props {
  title: string;
  subtitle: string;
  level: number;
  rotate?: string;
}

export default function AbilityIsland({
  title,
  subtitle,
  level,
  rotate = "",
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      whileHover={{
        y: -6,
        rotate: 0,
        scale: 1.02,
      }}
      className={rotate}
    >
      <div
        className="
          relative
          rounded-2xl sm:rounded-3xl
          border-[2px] sm:border-[3px]
          border-[#3E3124]
          bg-[#FFF8F0]
          p-3.5 sm:p-5
          shadow-md sm:shadow-lg
        "
      >
        {/* Scaled down tape */}
        <div className="absolute -top-1.5 left-4 h-4 w-12 sm:-top-2 sm:left-5 sm:h-6 sm:w-16 rotate-[-8deg] rounded bg-[#ead9c7]" />

        <h3 className="mt-1 text-lg sm:text-xl font-bold text-[#3E3124] break-words">
          {title}
        </h3>

        <p className="mt-0.5 text-xs sm:text-sm text-[#7B6756]">
          {subtitle}
        </p>

        <ProgressBar value={level} />
      </div>
    </motion.div>
  );
}