import Ticket from "@/components/Ticket/Ticket";
import React, { useState, useMemo } from "react";
import { experiences } from "@/lib/data";

function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Pre-generate stable random rotations (-3deg to +3deg) so cards don't jitter during state cycles
  const randomRotations = useMemo(() => {
    return experiences.map(() => Math.floor(Math.random() * 6) - 3);
  }, []);

  const cycleTicket = () => {
    setActiveIndex((prev) => (prev + 1) % experiences.length);
  };

  return (
    <div className="bg-bg-tertiary flex min-h-screen flex-col overflow-x-hidden mt-20 pt-20">
      {/* Header Container */}
      <div className="flex w-full items-center justify-center px-6 pb-14 md:pb-20 lg:px-14">
        <h1 className="text-text-tertiary font-splash text-center text-4xl tracking-tight sm:text-5xl md:text-7xl lg:text-8xl">
          Experience - Journey
        </h1>
      </div>

      {/* 
        ================= RESPONSIVE DECK STACK CONTAINER =================
        We assign a fluid responsive min-height so that when children use absolute positioning,
        the wrapper element keeps its form and doesn't collapse layout flow.
      */}
      <div className="relative mx-auto flex min-h-[680px] w-full max-w-5xl items-center justify-center px-4 pt-6 pb-32 sm:min-h-[750px] sm:px-6 md:min-h-[480px] md:px-8 lg:min-h-[520px]">
        {experiences.map((exp, index) => {
          const isCurrent = index === activeIndex;

          // Calculate visual stack order relative to the active card showing on top
          const offsetIndex =
            (index - activeIndex + experiences.length) % experiences.length;

          // Visual calculations for stacked layers
          const zIndex = experiences.length - offsetIndex;
          const scale = 1 - offsetIndex * 0.025;
          const opacity = offsetIndex > 2 ? 0 : 1 - offsetIndex * 0.2;
          const baseRotation = randomRotations[index];

          // Responsive layout translation: offset stack vertically on desktop/tablets,
          // but subtle adjustments for tight layouts on mobile screens
          const translateY = offsetIndex * -10;

          return (
            <div
              key={exp.company + index}
              onClick={cycleTicket}
              className={`absolute w-full max-w-sm cursor-pointer transition-all duration-500 ease-out rotate-1 select-none sm:max-w-xl md:max-w-none ${isCurrent ? "pointer-events-auto" : "pointer-events-auto hover:brightness-110"}`}
              style={{
                zIndex: zIndex,
                opacity: opacity,
                // Active/Top item drops rotation completely for 100% text reading clarity
                transform: `translateY(${translateY}px) scale(${scale}) rotate(${isCurrent ? 0 : baseRotation}deg)`,
                transformOrigin: "center center",
              }}
            >
              <Ticket experience={exp} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Experience;
