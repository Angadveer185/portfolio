import React, { lazy, Suspense } from "react";
import { Experience } from "@/types/types";

// Lazy load the child panel components
const TicketLeft = lazy(() => import("./TicketLeft"));
const TicketRight = lazy(() => import("./TicketRight"));

// Lightweight skeleton fallbacks matching the panels' inner containers
function PanelSkeleton() {
  return (
    <div className="h-full w-full animate-pulse bg-white/5 p-4 min-h-[160px] md:min-h-full rounded-md" />
  );
}

export default function Ticket({ experience }: { experience: Experience }) {
  return (
    <div className="bg-bg-primary @container relative w-full rounded-[1.5rem] transition-all duration-300 md:rounded-[2.25rem]">
      {/* Corner Cutouts */}
      <div className="bg-bg-tertiary absolute top-0 left-0 z-20 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full sm:h-12 sm:w-12 md:h-15 md:w-15" />
      <div className="bg-bg-tertiary absolute top-0 right-0 z-20 h-12 w-12 translate-x-1/2 -translate-y-1/2 rounded-full sm:h-12 sm:w-12 md:h-15 md:w-15" />
      <div className="bg-bg-tertiary absolute bottom-0 left-0 z-20 h-12 w-12 -translate-x-1/2 translate-y-1/2 rounded-full sm:h-12 sm:w-12 md:h-15 md:w-15" />
      <div className="bg-bg-tertiary absolute right-0 bottom-0 z-20 h-12 w-12 translate-x-1/2 translate-y-1/2 rounded-full sm:h-12 sm:w-12 md:h-15 md:w-15" />

      {/* Structural Layout Grid */}
      <div className="grid h-full grid-cols-1 items-stretch gap-4 p-4 xs:p-5 sm:p-6 md:aspect-[2.05/1] md:grid-cols-[4%_28%_4%_60%_4%] md:gap-0 md:p-[3.5%_2%]">
        
        {/* COL 1: Perforation Holes */}
        {/* Mobile (15 holes) */}
        <div className="flex w-full flex-row items-center justify-between px-2 py-1 md:hidden">
          {Array.from({ length: 15 }).map((_, i) => (
            <span
              key={`left-hole-mobile-${i}`}
              className="bg-bg-tertiary h-2 w-2 rounded-full opacity-60 sm:h-2 sm:w-2"
            />
          ))}
        </div>
        {/* Desktop (10 holes) */}
        <div className="hidden md:flex md:h-full md:w-auto md:flex-col md:items-center md:justify-between md:px-0">
          {Array.from({ length: 10 }).map((_, i) => (
            <span
              key={`left-hole-desktop-${i}`}
              className="bg-bg-tertiary md:h-[1.5cqw] md:w-[1.5cqw] rounded-full opacity-60"
            />
          ))}
        </div>

        {/* COL 2: Top / Left Card Panel */}
        <div className="border-bg-tertiary/80 overflow-hidden rounded-lg border-2 border-dashed bg-[#1d1d1d] md:mx-1 md:rounded-xs md:border-[2.5px]">
          <Suspense fallback={<PanelSkeleton />}>
            <TicketLeft experience={experience} />
          </Suspense>
        </div>

        {/* COL 3: Divider Track */}
        <div className="relative my-2 flex items-center justify-center md:my-0 md:h-full">
          <div className="border-bg-tertiary/60 w-full border-t-2 border-dashed md:h-full md:w-auto md:border-t-0 md:border-l-2" />

          {/* Desktop Center Notch Cutouts */}
          <div className="bg-bg-tertiary absolute top-0 z-30 hidden h-[3.5cqw] max-h-[42px] w-[3.5cqw] max-w-[42px] -translate-y-[135%] rounded-full md:block" />
          <div className="bg-bg-tertiary absolute bottom-0 z-30 hidden h-[3.5cqw] max-h-[42px] w-[3.5cqw] max-w-[42px] translate-y-[135%] rounded-full md:block" />
        </div>

        {/* COL 4: Bottom / Right Card Panel */}
        <div className="border-bg-tertiary/80 overflow-hidden rounded-lg border-2 border-dashed bg-[#1d1d1d] md:mx-1 md:rounded-sm md:border-[2.5px]">
          <Suspense fallback={<PanelSkeleton />}>
            <TicketRight experience={experience} />
          </Suspense>
        </div>

        {/* COL 5: Perforation Holes */}
        {/* Mobile (15 holes) */}
        <div className="flex w-full flex-row items-center justify-between px-2 py-1 md:hidden">
          {Array.from({ length: 15 }).map((_, i) => (
            <span
              key={`right-hole-mobile-${i}`}
              className="bg-bg-tertiary h-2 w-2 rounded-full opacity-60 sm:h-2 sm:w-2"
            />
          ))}
        </div>
        {/* Desktop (10 holes) */}
        <div className="hidden md:flex md:h-full md:w-auto md:flex-col md:items-center md:justify-between md:px-0">
          {Array.from({ length: 10 }).map((_, i) => (
            <span
              key={`right-hole-desktop-${i}`}
              className="bg-bg-tertiary md:h-[1.5cqw] md:w-[1.5cqw] rounded-full opacity-60"
            />
          ))}
        </div>
      </div>

      {/* Mobile Center Edge Cutouts */}
      <div className="bg-bg-tertiary absolute top-[45%] left-0 z-30 h-5 w-5 -translate-x-1/2 rounded-full md:hidden" />
      <div className="bg-bg-tertiary absolute top-[45%] right-0 z-30 h-5 w-5 translate-x-1/2 rounded-full md:hidden" />
    </div>
  );
}