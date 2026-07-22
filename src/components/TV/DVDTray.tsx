"use client";

import React, { useState } from "react";
import { projects } from "@/lib/data";
import CassetteTape from "./CassetteTape";
import { TriangleIcon } from "lucide-react";

interface DVDTrayProps {
  open: boolean;
  current: number;
  select: (index: number) => void;
}

export default function DVDTray({ open, current, select }: DVDTrayProps) {
  const [topIndex, setTopIndex] = useState(0);

  const handleStackUp = () => {
    if (topIndex > 0) setTopIndex((prev) => prev - 1);
  };

  const handleStackDown = () => {
    if (topIndex < projects.length - 1) setTopIndex((prev) => prev + 1);
  };

  return (
    <div
      className={`bg-bg-primary -z-1 absolute left-1/2 w-[90vw] max-w-md rounded-2xl border border-[#5b4d42] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-400 ease-in-out ${
        open
          ? "pointer-events-auto bottom-[-250px] z-1 -translate-x-1/2 scale-100 opacity-100"
          : "pointer-events-none bottom-[0px] -translate-x-1/2 scale-95 opacity-0 blur-sm"
      } `}
    >
      <div className="flex flex-col gap-4">

        {/* Dynamic Horizontal Stage Wrapper */}
        <div className="flex items-center gap-4">
          {/* Mechanical Rack Navigation Deck */}
          <div className="flex shrink-0 flex-col gap-2">
            <span className="text-center text-xs text-text-secondary">
              {topIndex + 1} / {projects.length}
            </span>
            <button
              onClick={handleStackUp}
              disabled={topIndex === 0}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-[#4f4337] bg-[#2a2928] text-sm font-bold text-text-secondary transition-all hover:bg-[#353332] active:translate-y-[1px] disabled:pointer-events-none disabled:opacity-30"
            >
              <TriangleIcon fill="#D4BAA3"/>
            </button>
            <button
              onClick={handleStackDown}
              disabled={topIndex === projects.length - 1}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-[#4f4337] bg-[#2a2928] text-sm font-bold text-text-secondary transition-all hover:bg-[#353332] active:translate-y-[1px] disabled:pointer-events-none disabled:opacity-30 rotate-180"
            >
              <TriangleIcon fill="#D4BAA3"/>
            </button>
          </div>

          {/* The Physical Tape Stack Display Box */}
          <div className="relative flex h-52 flex-1 items-center justify-center overflow-hidden rounded-xl border border-neutral-900 bg-black/40 p-5">
            <div className="relative flex h-full w-full items-center justify-center">
              {projects.map((project, idx) => {
                const offset = idx - topIndex;
                const isVisible = offset >= 0 && offset < 3;

                if (!isVisible) return null;

                const scale = 1 - offset * 0.05;
                const translateY = offset * -12;
                const zIndex = 30 - offset;
                const opacity = 1 - offset * 0.3;

                return (
                  <div
                    key={project.id}
                    className="absolute w-full transition-all duration-300 ease-out"
                    style={{
                      transform: `translate3d(0, ${translateY}px, 0) scale(${scale})`,
                      zIndex: zIndex,
                      opacity: opacity,
                      pointerEvents: offset === 0 ? "auto" : "none",
                    }}
                  >
                    <CassetteTape
                      title={project.title}
                      active={current === idx}
                      onClick={() => select(idx)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
