"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface SketchCardProps {
  children: ReactNode;
  className?: string;
  rotate?: "left" | "right" | "none";
}

export default function SketchCard({
  children,
  className,
  rotate = "none",
}: SketchCardProps) {
  const rotation = {
    left: "-rotate-1",
    right: "rotate-1",
    none: "",
  };

  return (
    <div
      className={clsx(
        "relative overflow-hidden rounded-[28px]",
        "border-[4px] border-[#3E3124]",
        "bg-[#F5E1CD]",
        "shadow-[0_12px_28px_rgba(0,0,0,.18)]",
        "transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(0,0,0,.22)]",
        "p-7",
        rotation[rotate],
        className
      )}
    >
      {/* Paper grain */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:14px_14px]" />

      {/* Top tape */}
      <div className="absolute -top-3 left-8 h-8 w-28 rotate-[-7deg] rounded-sm bg-[#ead9c7] shadow-md" />

      {/* Bottom tape */}
      <div className="absolute -bottom-2 right-10 h-7 w-20 rotate-[8deg] rounded-sm bg-[#ead9c7]/80 shadow-md" />

      {children}
    </div>
  );
}