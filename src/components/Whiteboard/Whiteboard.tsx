"use client";

import WhiteboardBackground from "./WhiteboardBackground";
import GoalCard from "./GoalCard";
import CoreAbilities from "./CoreAbilities";
import AvatarCard from "./AvatarCard";
import StatsCard from "./StatsCard";

export default function Whiteboard() {
  return (
    <section className="relative w-full px-3 py-6 sm:px-6 sm:py-12 lg:px-16">
      <div
        className="
          relative
          mx-auto
          max-w-7xl
          overflow-hidden
          rounded-[20px] sm:rounded-[28px]
          border-[3px] sm:border-[5px]
          border-[#3E3124]
          bg-[#E9D3BB]
          shadow-[0_18px_50px_rgba(0,0,0,0.25)]
        "
      >
        <WhiteboardBackground />

        <div
          className="
            relative
            z-10
            grid
            grid-cols-1
            gap-3 sm:gap-5
            p-3 sm:p-6
            lg:grid-cols-2
            lg:items-start
          "
        >
          {/* Left Column */}
          <div className="flex flex-col gap-3 sm:gap-5">
            <GoalCard />
            <CoreAbilities />
          </div>

          {/* Right Column */}
          <div className="hidden lg:flex lg:flex-col lg:gap-5">
            <AvatarCard />
            <StatsCard />
          </div>
        </div>
      </div>
    </section>
  );
}