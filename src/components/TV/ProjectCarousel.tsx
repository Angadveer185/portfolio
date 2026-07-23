"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Project } from "@/types/types";
import ProjectCard from "./ProjectCard";
import { PlayerState } from "@/hooks/useDVDPlayer";

interface Props {
  project: Project;
  direction: "next" | "prev";
  playerState: PlayerState;
}

export default function ProjectCarousel({
  project,
  direction,
  playerState,
}: Props) {
  return (
    <div className="relative grid min-h-[30rem] h-full w-full grid-cols-1 grid-rows-1 overflow-hidden">
      <AnimatePresence>
        {playerState === "loading" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.08 }}
            className="pointer-events-none absolute inset-0 z-50 mix-blend-overlay"
          />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={project.id}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0 }}
          className="block h-full w-full"
        >
          <ProjectCard project={project} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
