import React from "react";
import TicketLeft from "./TicketLeft";
import TicketRight from "./TicketRight";
import { Experience } from "@/types/types";

export default function Ticket({ experience }: { experience: Experience }) {
  return (
    <div className="bg-bg-primary @container relative w-full rounded-[1.75rem] transition-all duration-300 md:rounded-[2.25rem]">

      {/* Top Left */}
      <div className="bg-bg-tertiary absolute top-0 left-0 aspect-square min-w-20 -translate-x-1/2 -translate-y-1/2 rounded-full" />
      {/* Top Right */}
      <div className="bg-bg-tertiary absolute top-0 right-0 aspect-square min-w-20 translate-x-1/2 -translate-y-1/2 rounded-full" />
      {/* Bottom Left */}
      <div className="bg-bg-tertiary absolute bottom-0 left-0 aspect-square min-w-20 -translate-x-1/2 translate-y-1/2 rounded-full" />
      {/* Bottom Right */}
      <div className="bg-bg-tertiary absolute right-0 bottom-0 aspect-square min-w-20 translate-x-1/2 translate-y-1/2 rounded-full" />

      {/* 
        ================= 5-COLUMN STRUCTURAL GRID =================
        Mobile (< md): Stacks into 1 column automatically.
        Desktop (>= md): Layout maps perfectly across 5 dedicated dynamic channels:
        [Left Holes] | [Left Stub] | [Divider Channel] | [Right Content] | [Right Holes]
      */}
      <div className="grid h-full grid-cols-1 items-stretch gap-6 p-6 sm:p-8 md:aspect-[2.05/1] md:grid-cols-[4%_28%_4%_60%_4%] md:gap-0 md:p-[3.5%_2%]">
        {/* COL 1: Left Perforation Holes */}
        <div className="flex w-full flex-row items-center justify-between self-center px-2 py-2 md:h-full md:w-auto md:flex-col md:px-0">
          {Array.from({ length: 14 }).map((_, i) => (
            <span
              key={`left-hole-${i}`}
              className="bg-bg-tertiary h-2 max-h-[16px] w-2 max-w-[16px] rounded-full opacity-80 sm:h-3 sm:w-3 md:h-[2cqw] md:w-[2cqw]"
            />
          ))}
        </div>

        {/* COL 2: Left/Top Panel Card */}
        <div className="border-bg-tertiary/80 overflow-hidden rounded-xs border-2 border-dashed bg-[#1d1d1d] md:mx-1 md:border-[2.5px]">
          <TicketLeft experience={experience} />
        </div>

        {/* COL 3: Center Divider Channel + Bounded Absolute Edge Cutouts */}
        <div className="relative my-2 flex h-full items-center justify-center md:my-0">
          {/* Dashed vertical track */}
          <div className="border-bg-tertiary/60 w-full border-t-2 border-dashed md:h-full md:w-auto md:border-t-0 md:border-l-2" />

          {/* 
            By placing the top/bottom cutouts INSIDE the relative divider column, 
            they scale natively with the grid column without using arbitrary screen percentages!
          */}
          {/* Center - Top Cutout */}
          <div className="bg-bg-tertiary absolute top-0 z-30 hidden h-[4.5cqw] max-h-[56px] w-[4.5cqw] max-w-[56px] -translate-y-[130%] rounded-full md:block" />

          {/* Center - Bottom Cutout */}
          <div className="bg-bg-tertiary absolute bottom-0 z-30 hidden h-[4.5cqw] max-h-[56px] w-[4.5cqw] max-w-[56px] translate-y-[130%] rounded-full md:block" />
        </div>

        {/* COL 4: Right/Bottom Panel Card */}
        <div className="border-bg-tertiary/80 rounded-xl border-2 border-dashed bg-[#1d1d1d] md:mx-1 md:rounded-sm md:border-[2.5px]">
          <TicketRight experience={experience} />
        </div>

        {/* COL 5: Right Perforation Holes */}
        <div className="flex w-full flex-row items-center justify-between self-center px-2 py-2 md:h-full md:w-auto md:flex-col md:px-0">
          {Array.from({ length: 14 }).map((_, i) => (
            <span
              key={`right-hole-${i}`}
              className="bg-bg-tertiary h-2 max-h-[16px] w-2 max-w-[16px] rounded-full opacity-80 sm:h-3 sm:w-3 md:h-[2cqw] md:w-[2cqw]"
            />
          ))}
        </div>
      </div>

      {/* Mobile-Only Cutouts (Rendered when grid stacks vertically) */}
      <div className="bg-bg-tertiary absolute top-[33%] left-0 z-30 h-8 w-8 -translate-x-1/2 rounded-full md:hidden" />
      <div className="bg-bg-tertiary absolute top-[33%] right-0 z-30 h-8 w-8 translate-x-1/2 rounded-full md:hidden" />
    </div>
  );
}
