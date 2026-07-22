"use client";

import { motion } from "framer-motion";
import SketchCard from "./SketchCard";
import MarkerHeading from "./MarkerHeading";
import AvatarMagnet from "./AvatarMagnet";

export default function AvatarCard() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
      className=""
    >
      <SketchCard className="flex flex-col">
        <MarkerHeading>:\</MarkerHeading>

        <div className="flex-1">
          <AvatarMagnet />
        </div>
      </SketchCard>
    </motion.div>
  );
}
