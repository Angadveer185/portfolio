"use client";

import { motion } from "framer-motion";
import SketchCard from "./SketchCard";
import MarkerHeading from "./MarkerHeading";
import AbilityIsland from "./AbilityIsland";
import { aboutData } from "@/lib/data";

const rotations = [
  "-rotate-2",
  "rotate-2",
  "rotate-1",
  "-rotate-1",
  "rotate-2",
  "-rotate-2",
];

export default function CoreAbilities() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <SketchCard rotate="right">
        <MarkerHeading>Core Abilities</MarkerHeading>

        <div className="mt-4 sm:mt-8 grid grid-cols-2 gap-3 sm:gap-6">
          {aboutData.abilities.map((ability, index) => (
            <AbilityIsland
              key={ability.title}
              title={ability.title}
              subtitle={ability.subtitle}
              level={ability.level}
              rotate={rotations[index]}
            />
          ))}
        </div>
      </SketchCard>
    </motion.div>
  );
}