import React, { useState } from "react";
import Photo from "@/components/ui/Photo";
import { SKILL_DATA } from "@/lib/data";
import DraggableBubble from "@/components/ui/DraggableBubble";

type SkillKey = (typeof SKILL_DATA)[number]["key"];

function Skills() {
  const ruler = Array.from({ length: 16 }, (_, i) => i + 1);

  const [selectedSkillKey, setSelectedSkillKey] = useState<SkillKey>(
    SKILL_DATA[0]?.key ?? "frontend",
  );
  const [sessionTime] = useState(() => Date.now());

  const activeSkill =
    SKILL_DATA.find((item) => item.key === selectedSkillKey) || SKILL_DATA[0];

  return (
    <div className="min-h-screen overflow-x-hidden pb-20">
      {/* Header Section */}
      <div className="flex w-full items-center justify-center px-8 py-16 lg:px-20">
        <div className="text-text-primary font-splash text-center text-5xl md:text-8xl" id="skills">
          Skills - Palette
        </div>
      </div>

      {/* Stack/Overlap Wrapper */}
      <div className="relative mx-auto mt-10 flex aspect-16/10 w-[95vw] max-w-7xl items-center justify-center md:aspect-video">
        {/* Background Card (Red/Tertiary) */}
        <div className="bg-bg-tertiary shadow-text-primary/10 text-text-primary absolute inset-0 flex h-full w-full -rotate-2 items-center justify-center rounded-md border shadow-xl">
          {/* Back card content can go here */}
        </div>

        {/* Foreground Card (Black/Primary) */}
        <div className="bg-accent-foreground text-text-primary absolute inset-0 mx-2 flex h-full w-full rotate-1 gap-2 rounded-2xl border p-2 shadow-2xl shadow-black/50 md:mx-10 md:p-6">
          {/* Left Ruler Graphic */}
          <div className="flex w-[2%] flex-col justify-around">
            {ruler.map((num) => (
              <div
                key={num}
                className="text-text-secondary font-bree text-center text-sm md:text-lg"
              >
                {num}
              </div>
            ))}
          </div>

          {/* Interactive Workbench Area */}
          <div
            className="relative flex w-[98%] flex-col justify-between overflow-hidden rounded-xl border bg-repeat p-4"
            style={{
              backgroundImage: "url('/images/sheet-bg.svg')",
              backgroundSize: "150px",
            }}
          >
            {/* Draggable Photos Layer */}
            {SKILL_DATA.map((skill) => (
              <Photo
                key={skill.key}
                src={skill.photo.src}
                size={skill.photo.size}
                rotation={skill.photo.rotation}
                defaultX={skill.photo.defaultX}
                defaultY={skill.photo.defaultY}
                orientation={skill.photo.orientation}
                caption={skill.photo.caption}
                onClick={() => setSelectedSkillKey(skill.key as SkillKey)}
              />
            ))}

            {/* Spacer to push info panel down gracefully */}
            <div className="flex-grow" />

            {/* Game UI Inspired Dynamic Split Info Panel (Bottom Section) */}
            <div className="relative z-10 h-[50%] w-full overflow-hidden rounded-2xl border p-5 shadow-2xl backdrop-blur-md">
              <div className="grid h-full grid-cols-1 items-stretch gap-6 md:grid-cols-12">
                {/* 1. Left Column: Title & Draggable-style Tech Inventory Box */}
                <div className="h-full flex-col justify-between md:col-span-5 hidden lg:flex">
                  <div>
                    <h3 className="text-text-primary text-2xl font-extrabold tracking-wide drop-shadow md:text-3xl">
                      {activeSkill.title}
                    </h3>
                  </div>

                  {/* Bubble Container Area mimicking "Equipments" panel look */}
                  <div className="bg-bg-primary/60 relative mt-3 min-h-[120px] flex-1 overflow-hidden rounded-xl border border-neutral-800 p-3">
                    {activeSkill.tech.map((t, idx) => {
                      // Use the visit timestamp + index + string character code as a combined unique seed
                      const timeSeed =
                        sessionTime + idx * 43 + t.charCodeAt(0) * 17;

                      // Generate pseudo-random percentages based on the session timestamp seed
                      const seedX = timeSeed % 65; // Spread max 65% width
                      const seedY = (timeSeed >> 2) % 55; // Bitwise shift prevents X and Y coordinates from clustering diagonally

                      return (
                        <DraggableBubble
                          // Remove the selectedSkillKey prefix so the bubble positions stay persistent even if you switch tabs
                          key={t}
                          label={t}
                          // Calculate random-looking coordinates bound inside safe container spacing
                          defaultX={20 + seedX * 3.5}
                          defaultY={20 + seedY * 1.8}
                        />
                      );
                    })}
                  </div>
                </div>

                {/* 2. Right Column: Title Header & Bulleted Cards */}
                <div className="flex h-full flex-col border-t border-neutral-800 pl-0 md:col-span-7 md:border-t-0 md:border-l md:pl-4">
                  <div className="mb-3 flex items-center gap-2 text-xs font-bold tracking-wider text-text-primary uppercase opacity-80">
                    <span>Feats Unlocked</span>
                  </div>

                  <div className="flex flex-1 flex-col gap-2 overflow-y-auto pr-1 overflow-hidden">
                    {activeSkill.achievements.map((achievement, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 rounded-xl border border-neutral-800/60 bg-neutral-900/40 p-3 transition duration-200 hover:bg-neutral-900/70 hover:scale-101 delay-100 "
                      >
                        <div className="h-2 w-2 shrink-0 rounded-full bg-bg-tertiary shadow-[0_0_6px_#E25543]" />
                        <p className="text-text-secondary text-xs leading-relaxed font-medium md:text-sm">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
