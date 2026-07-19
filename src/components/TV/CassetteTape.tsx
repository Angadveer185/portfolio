"use client";

import { Settings } from "lucide-react";

interface Props {
  title: string;
  active: boolean;
  onClick: () => void;
}

export default function CassetteTape({ title, active, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`group relative flex w-full max-w-md cursor-pointer flex-col justify-between rounded-xl border-2 p-3 transition-all duration-200 outline-none select-none hover:scale-[1.02] active:translate-y-[2px] active:scale-[0.98] ${
        active
          ? "border-text-primary bg-[#2d1f1a] shadow-[0_8px_24px_rgba(226,85,67,0.15)]"
          : "border-[#4a3d35] bg-[#1e1b19] shadow-md hover:border-[#69584a]"
      } `}
    >
      {/* Dynamic Hum Glow Indicator Bar at the very top edge */}
      <div
        className={`absolute inset-x-8 top-0 h-[2px] rounded-full transition-all duration-300 ${
          active ? "bg-bg-primary shadow-[0_0_8px_#ff7563]" : "bg-transparent"
        }`}
      />

      {/* 1. CASSETTE BODY TOP: Writing Label Sticker */}
      <div
        className={`w-full rounded-lg border border-dashed p-3 transition-colors duration-300 ${
          active
            ? "border-[#E25543]/40 bg-[#3d2e26]"
            : "border-[#4a3d35] bg-[#282421]"
        }`}
      >
        {/* Subtle retro alignment stripes */}
        <div className="mb-2 flex items-center justify-between border-b border-[#4a3d35]/40 pb-1 font-mono text-[10px] tracking-widest text-[#756456]">
          <span>SIDE A</span>
          <span className="font-sans text-xs">NR [⌾]</span>
        </div>

        <p className="font-gochi truncate text-left text-xl tracking-wide text-[#E9D3BB] md:text-2xl">
          {title}
        </p>
      </div>

      {/* 2. CASSETTE BODY CENTER: Clear Media Window & Spindle Wheels */}
      <div className="my-3 flex items-center justify-between px-6">
        {/* Left Spindle Gear */}
        <div className="relative flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#4a3d35]/60 bg-neutral-950 shadow-inner">
          <span
            className={`text-base text-[#D4BAA3]/40 select-none ${
              active ? "animate-spin [animation-duration:3s]" : ""
            }`}
          >
            <Settings />
          </span>
          <div className="absolute h-2 w-2 rounded-full bg-black" />
        </div>

        {/* Center Transparent Magnetic Film Window */}
        <div className="relative mx-4 flex h-7 max-w-[120px] flex-1 items-center justify-center overflow-hidden rounded border border-[#4a3d35]/30 bg-neutral-950/90">
          {/* Faux Brown Magnetic Tape Core Bridge */}
          <div className="absolute inset-y-1 right-2 left-2 flex items-center justify-around rounded-sm border-x-4 border-amber-950 bg-[#514035] px-1 opacity-80">
            <div className="h-full w-[1px] bg-black/40" />
            <div className="h-full w-[1px] bg-black/40" />
          </div>
          {/* Scale lines */}
          <div className="absolute inset-x-0 bottom-0.5 flex scale-75 justify-center gap-1 font-mono text-[8px] text-[#756456]">
            <span>·</span>
            <span>·</span>
            <span>·</span>
          </div>
        </div>

        {/* Right Spindle Gear */}
        <div className="relative flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#4a3d35]/60 bg-neutral-950 shadow-inner">
          <span
            className={`text-base text-[#D4BAA3]/40 select-none ${
              active ? "animate-spin [animation-duration:3s]" : ""
            }`}
          >
            <Settings />
          </span>
          <div className="absolute h-2 w-2 rounded-full bg-black" />
        </div>
      </div>

      {/* 3. CASSETTE BODY BOTTOM: Trapezoid Mechanical Guard Base */}
      <div className="mx-auto flex h-5 w-4/5 items-center justify-around rounded-b-md border-x-2 border-t border-b-2 border-[#4a3d35]/30 bg-[#141211] px-4">
        {/* Small faux pressure pad holes */}
        <div className="h-1.5 w-1.5 rounded-full bg-black shadow-inner" />
        <div className="h-1.5 w-2.5 rounded bg-black shadow-inner" />
        <div className="h-1.5 w-2.5 rounded bg-black shadow-inner" />
        <div className="h-1.5 w-1.5 rounded-full bg-black shadow-inner" />
      </div>
    </button>
  );
}
