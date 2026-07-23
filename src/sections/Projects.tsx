"use client";

import ProjectShowcase from "@/components/TV/ProjectShowcase";
import SectionHeader from "@/components/ui/SectionHeading";
import React from "react";
import { motion } from "framer-motion";
import Doodle from "@/components/ui/Doodle";

export default function Projects() {
  return (
    <div className="relative flex flex-col">
      <SectionHeader id="projects" title="Projects" subtitle="My Creative Work" />
      <Doodle src="/doodles/Red_Gift.png" width={120} x={90} y={10} rotation={-18} />
      <Doodle src="/doodles/Godzilla.png" width={200} x={10} y={95} rotation={15} />
      <Doodle src="/doodles/Red_Cat.png" width={120} x={50} y={95} rotation={0} />

      {/* Showcase Container with Staggered Scroll Entrance */}
      <motion.div
        className="flex w-full items-center justify-center px-8 pb-20 lg:px-10 lg:pb-40"
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      >
        <ProjectShowcase />
      </motion.div>
    </div>
  );
}