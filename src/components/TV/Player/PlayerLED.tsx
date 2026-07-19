"use client";

import { PlayerState } from "@/hooks/useDVDPlayer";

interface Props {
  state: PlayerState;
}

export default function PowerLED({ state }: Props) {
  const colour =
    state === "playing"
      ? "bg-green-400 shadow-[0_0_12px_#22c55e]"
      : state === "loading"
        ? "bg-yellow-300 shadow-[0_0_16px_gold] animate-pulse"
        : state === "paused"
          ? "bg-orange-400 shadow-[0_0_10px_orange]"
          : state === "stopped"
            ? "bg-red-500 shadow-[0_0_10px_red]"
            : "bg-blue-400 shadow-[0_0_12px_skyblue]";

  return (
    <div className="flex items-center gap-3">
      <div
        className={`h-3 w-3 rounded-full transition-all duration-300 ${colour} `}
      />

      <span className="text-xs tracking-[.4em] text-[#89786A]">POWER</span>
    </div>
  );
}
