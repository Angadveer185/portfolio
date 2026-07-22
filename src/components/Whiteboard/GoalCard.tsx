"use client";

import { motion } from "framer-motion";
import SketchCard from "./SketchCard";
import MarkerHeading from "./MarkerHeading";
import { aboutData } from "@/lib/data";

export default function GoalCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <SketchCard
        rotate="left"
        className="flex flex-col justify-between p-4 sm:p-6"
      >
        {/* Scaled down coffee stain on mobile */}
        <div className="absolute top-4 right-4 h-12 w-12 rounded-full border-[3px] border-[#8B6B4D]/20 sm:top-6 sm:right-8 sm:h-20 sm:w-20 sm:border-[5px]" />

        {/* Scaled down marker doodle on mobile */}
        <svg
          className="absolute bottom-4 right-4 w-20 opacity-15 sm:bottom-8 sm:right-8 sm:w-[120px]"
          viewBox="0 0 120 60"
        >
          <path
            d="M0 30 C30 0 80 60 120 20"
            stroke="black"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </svg>

        <div>
          <MarkerHeading>My Goal</MarkerHeading>

          <p
            className="
              mt-3 sm:mt-6
              text-base sm:text-lg
              leading-normal sm:leading-9
              text-[#3E3124]
              font-medium
            "
          >
            {aboutData.goal}
          </p>
        </div>
      </SketchCard>
    </motion.div>
  );
}