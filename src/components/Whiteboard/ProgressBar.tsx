"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  value: number;
}

export default function ProgressBar({ value }: ProgressBarProps) {
  return (
    <div className="mt-4">
      <div className="mb-2 flex justify-between text-xs font-semibold text-[#3E3124]">
        <span>Proficiency</span>
        <span>{value}%</span>
      </div>

      <div className="relative h-3 overflow-hidden rounded-full border-2 border-[#3E3124] bg-[#F6EFE8]">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="h-full rounded-full bg-[#E25543]"
        />

        {/* Marker dot */}
        <motion.div
          initial={{ left: 0 }}
          whileInView={{ left: `calc(${value}% - 8px)` }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-[#3E3124] bg-[#FFF8F0]"
        />
      </div>
    </div>
  );
}