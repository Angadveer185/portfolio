"use client";

import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import Photo from "@/components/ui/Photo";
import { SKILL_DATA } from "@/lib/data";
import DraggableBubble from "@/components/ui/DraggableBubble";
import SectionHeader from "@/components/ui/SectionHeading";

type SkillKey = (typeof SKILL_DATA)[number]["key"];

const cardContainerVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      staggerChildren: 0.1,
    },
  },
};

const titleVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as any },
  },
};

const featItemVariants: Variants = {
  hidden: { opacity: 0, x: -15 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" as any },
  },
};

function Skills() {
  const ruler = Array.from({ length: 16 }, (_, i) => i + 1);

  const [selectedSkillKey, setSelectedSkillKey] = useState<SkillKey>(
    SKILL_DATA[0]?.key ?? "frontend",
  );
  
  const [sessionTime, setSessionTime] = useState<number>(0);

    useEffect(() => {
      // Populate sessionTime only after mounting on client
      setSessionTime(Date.now());
    }, []);

  const activeSkill =
    SKILL_DATA.find((item) => item.key === selectedSkillKey) || SKILL_DATA[0];

  return (
    <div className="min-h-screen overflow-x-hidden pb-20">
      {/* Header Section */}
      <SectionHeader id="skills" title="Skills" subtitle="My Palette" />

      {/* Stack/Overlap Wrapper */}
      <motion.div
        className="relative mx-auto mt-2 flex min-h-[720px] w-[95vw] max-w-7xl items-center justify-center md:mt-10 md:min-h-[600px] md:aspect-16/10 lg:aspect-video"
        variants={cardContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Background Card */}
        <motion.div
          className="bg-bg-tertiary shadow-text-primary/10 text-text-primary absolute inset-0 flex h-full w-full -rotate-2 items-center justify-center rounded-md border shadow-xl"
          whileHover={{ rotate: -1, scale: 1.005 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        />

        {/* Foreground Card */}
        <motion.div
          className="bg-accent-foreground text-text-primary absolute inset-0 mx-1 flex h-full w-full rotate-1 gap-1.5 rounded-2xl border p-2 shadow-2xl shadow-black/50 sm:mx-2 sm:gap-2 md:mx-10 md:p-6"
          whileHover={{ rotate: 0.5 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          {/* Left Ruler Graphic */}
          <div className="flex w-[4%] sm:w-[3%] md:w-[2%] flex-col justify-around">
            {ruler.map((num) => (
              <motion.div
                key={num}
                className="text-text-secondary font-bree text-center text-xs sm:text-sm md:text-lg select-none"
                whileHover={{ scale: 1.3, color: "#E25543" }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {num}
              </motion.div>
            ))}
          </div>

          {/* Interactive Workbench Area */}
          <div
            className="relative flex w-[96%] sm:w-[97%] md:w-[98%] flex-col justify-between overflow-hidden rounded-xl border bg-repeat p-2 sm:p-4"
            style={{
              backgroundImage: "url('/images/sheet-bg.svg')",
              backgroundSize: "150px",
            }}
          >
            {/* Stacked Draggable Photos Layer */}
            {SKILL_DATA.map((skill, index) => {
              const isSelected = skill.key === selectedSkillKey;

              // Small deviations from center (40%, 15%) for natural scatter
              const slightRotation = (index % 2 === 0 ? 1 : -1) * (3 + index * 2.5);
              const slightX = 40 + (index % 3 - 1) * 2.5; 
              const slightY = 15 + (index % 2 === 0 ? 1 : -1) * 1.5; 

              return (
                    <Photo
                      key={skill.key}
                      src={skill.photo.src}
                      size={skill.photo.size}
                      rotation={slightRotation}
                      defaultX={slightX}
                      defaultY={slightY}
                      orientation={skill.photo.orientation}
                      caption={skill.photo.caption}
                      onClick={() => setSelectedSkillKey(skill.key as SkillKey)}
                    />
              );
            })}

            {/* Dynamic Spacer */}
            <div className="flex-grow min-h-[20px] md:min-h-0" />

            {/* Info Panel */}
            <motion.div
              className="relative z-10 h-auto md:h-[50%] w-full overflow-hidden rounded-2xl border p-3 sm:p-5 shadow-2xl backdrop-blur-md"
              initial={titleVariants.hidden as any}
              animate={titleVariants.visible as any}
            >
              <div className="grid h-full grid-cols-1 items-stretch gap-4 md:grid-cols-12 md:gap-6">
                {/* Left Column */}
                <div className="flex h-full flex-col justify-between md:col-span-5">
                  <div>
                    <h3 className="text-text-primary text-xl font-extrabold tracking-wide drop-shadow sm:text-2xl md:text-3xl">
                      {activeSkill.title}
                    </h3>
                  </div>

                  <div className="bg-bg-primary/60 relative mt-2 min-h-[140px] sm:min-h-[160px] flex-1 overflow-hidden rounded-xl border border-neutral-800 p-2 sm:p-3">
                    {activeSkill.tech.map((t, idx) => {
                      const timeSeed =
                        sessionTime + idx * 43 + t.charCodeAt(0) * 17;

                      const seedX = timeSeed % 60;
                      const seedY = (timeSeed >> 2) % 35;
                      const calculatedY = 15 + (idx % 2 === 0 ? 10 : 50) + seedY * 0.6;

                      return (
                        <DraggableBubble
                          key={t}
                          label={t}
                          defaultX={10 + seedX * 1.1}
                          defaultY={calculatedY}
                        />
                      );
                    })}
                  </div>
                </div>

                {/* Right Column */}
                <div className="flex h-full flex-col border-t border-neutral-800 pt-3 md:pt-0 pl-0 md:col-span-7 md:border-t-0 md:border-l md:pl-4">
                  <div className="mb-2 sm:mb-3 flex items-center gap-2 text-xs font-bold tracking-wider text-text-primary uppercase opacity-80">
                    <span>Feats Unlocked</span>
                  </div>

                  <div className="flex flex-1 flex-col gap-2 overflow-y-auto overflow-x-hidden pr-1 max-h-[180px] md:max-h-none">
                    {activeSkill.achievements.map((achievement, idx) => (
                      <motion.div
                        key={idx}
                        variants={featItemVariants}
                        whileHover={{
                          scale: 1.015,
                          x: 4,
                          backgroundColor: "rgba(23, 23, 23, 0.8)",
                          borderColor: "rgba(226, 85, 67, 0.4)",
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 25,
                        }}
                        className="flex items-center gap-3 rounded-xl border border-neutral-800/60 bg-neutral-900/40 p-2.5 sm:p-3 transition duration-200"
                      >
                        <motion.div
                          className="h-2 w-2 shrink-0 rounded-full bg-bg-tertiary shadow-[0_0_6px_#E25543]"
                          animate={{ scale: [1, 1.25, 1] }}
                          transition={{
                            repeat: Infinity,
                            duration: 2,
                            ease: "easeInOut",
                            delay: idx * 0.2,
                          }}
                        />
                        <p className="text-text-secondary text-xs leading-relaxed font-medium md:text-sm">
                          {achievement}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Skills;