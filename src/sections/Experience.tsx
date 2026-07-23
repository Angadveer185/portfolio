"use client";

import React, { useState, useMemo, lazy, Suspense } from "react";
import { experiences } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import Doodle from "@/components/ui/Doodle";

// Lazy load the Ticket component
const Ticket = lazy(() => import("@/components/Ticket/Ticket"));

function TicketSkeleton() {
  return (
    <div className="bg-bg-primary/50 w-full animate-pulse rounded-[1.75rem] p-6 md:aspect-[2.05/1] md:rounded-[2.25rem]">
      <div className="h-full w-full rounded-xl bg-white/5" />
    </div>
  );
}

function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);

  const randomRotations = useMemo(() => {
    return experiences.map(() => Math.floor(Math.random() * 6) - 3);
  }, []);

  const cycleTicket = () => {
    setActiveIndex((prev) => (prev + 1) % experiences.length);
  };

  return (
    <section className="bg-bg-tertiary relative flex min-h-screen w-full flex-col justify-start px-4 py-12 sm:px-8 md:py-20 lg:py-24 -z-10">
      <Doodle src="/doodles/Red_Ramen.png" width={120} x={80} y={10} rotation={-22} />
      <Doodle src="/doodles/Rabbit.png" width={120} x={5} y={40} rotation={28} />
      <Doodle src="/doodles/Bird_2.png" width={120} x={85} y={80} rotation={-14} />
      <Doodle src="/doodles/Red_Cat.png" width={120} x={50} y={90} rotation={9} />
      {/* Header Container with Scroll Entrance */}
      <motion.div
        className="mx-auto w-full max-w-5xl pb-10 sm:pb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <SectionHeader id="experience" title="Experience" subtitle="My Journey" inverted />
      </motion.div>

      {/* Dynamic Stack Container with Scroll Entrance */}
      <motion.div
        className="relative mx-auto flex w-full max-w-md items-center justify-center sm:max-w-xl md:max-w-4xl md:min-h-[500px] lg:max-w-5xl lg:min-h-[540px]"
        initial={{ opacity: 0, y: 50, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      >
        <Suspense fallback={<TicketSkeleton />}>
          {experiences.map((exp, index) => {
            const isCurrent = index === activeIndex;

            const offsetIndex =
              (index - activeIndex + experiences.length) % experiences.length;

            const zIndex = experiences.length - offsetIndex;
            const scale = 1 - offsetIndex * 0.035;
            const opacity = offsetIndex > 2 ? 0 : 1 - offsetIndex * 0.22;
            const blur = offsetIndex * 1.5;
            const baseRotation = randomRotations[index];
            const translateY = offsetIndex * -10;

            const isVisibleOnMobile = offsetIndex === 0;

            return (
              <div
                key={exp.company + index}
                onClick={cycleTicket}
                className={`w-full cursor-pointer transition-all duration-500 ease-out select-none ${
                  isVisibleOnMobile ? "block" : "hidden md:block"
                } md:absolute md:top-0 md:left-0 md:right-0 md:mx-auto ${
                  isCurrent
                    ? "pointer-events-auto active:scale-98"
                    : "pointer-events-auto hover:brightness-110"
                }`}
                style={{
                  zIndex: zIndex,
                  opacity: opacity,
                  filter: `blur(${blur}px)`,
                  transform: `translateY(${translateY}px) scale(${scale}) rotate(${
                    isCurrent ? 0 : baseRotation
                  }deg)`,
                  transformOrigin: "center center",
                }}
              >
                <Ticket experience={exp} />
              </div>
            );
          })}
        </Suspense>
      </motion.div>
    </section>
  );
}

export default Experience;