"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "sketchbook-ui";
import "sketchbook-ui/style.css";
import { COLORS } from "@/lib/colors";
import Tag from "@/components/ui/Tag";
import Scene from "@/components/3-D/Scene";
import Doodle from "@/components/ui/Doodle";

// Container variant for orchestration & staggered children
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// General fade & slide up for elements
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export default function Landing() {
  return (
    <section className="relative flex min-h-screen w-full overflow-hidden" id="home">
      <Doodle src="/doodles/Star.png" width={1} x={7} y={12} rotation={-12} />
      <Doodle src="/doodles/Cat.png" width={150} x={50} y={75} rotation={18} className="" />
      {/* LEFT */}
      <div className="flex w-full items-center justify-center px-8 py-20 lg:w-[50%] lg:px-20">
        <motion.div
          className="w-full max-w-2xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting */}
          <motion.p
            variants={itemVariants}
            className="text-text-secondary font-bree text-4xl md:text-5xl"
          >
            Hi, I'm
          </motion.p>

          {/* Name - Standard Lazy/Spawn-in Animation */}
          <motion.h1
            variants={itemVariants}
            className="text-text-primary font-splash mt-4 text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
          >
            Angadveer
          </motion.h1>

          {/* Tags */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap gap-3"
          >
            {["Dev-Ops", "Java Programmer", "Full-Stack", "Game Developer"].map(
              (tag) => (
                <Tag key={tag + Math.random()} text={tag} />
              ),
            )}
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="font-gochi mt-10 max-w-xl text-lg leading-8 text-white"
          >
            Passionate developer focused on building meaningful software
            experiences. I enjoy backend architecture, creating polished
            interfaces and bringing ideas to life through code.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-wrap gap-6 sm:gap-4"
          >
            <Button
              size="sm"
              onClick={() => {
                document.getElementById("projects")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              colors={{
                bg: "transparent",
                bgOverlay: "transparent",
                stroke: COLORS.primary,
                text: COLORS.primary,
              }}
              typography={{
                fontFamily: "Gochi Hand",
              }}
            >
              Projects
            </Button>

            <Button
              size="sm"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              colors={{
                bg: "transparent",
                bgOverlay: "transparent",
                stroke: COLORS.primary,
                text: COLORS.primary,
              }}
              typography={{
                fontFamily: "Gochi Hand",
              }}
            >
              Get in Touch
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* RIGHT (3D Component Untouched) */}
      <div className="hidden w-[50%] items-center justify-center overflow-clip lg:flex">
        <Scene />
      </div>
    </section>
  );
}
