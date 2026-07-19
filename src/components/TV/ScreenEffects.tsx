"use client";

import { PlayerState } from "@/hooks/useDVDPlayer";

interface Props {
  playerState: PlayerState;
}

export default function ScreenEffects({ playerState }: Props) {
  return (
    <>
      {/* Scanlines */}

      <div
        className="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, transparent 0px, transparent 2px, rgba(255,255,255,.08) 3px)",
        }}
      />

      <div className="pointer-events-none animate-syncLine absolute inset-x-0 h-0.5 bg-white/30" />

      {/* Vignette */}

      <div
        className="pointer-events-none absolute inset-0 rounded-[20px]"
        style={{
          boxShadow: "inset 0 0 120px rgba(0,0,0,.95)",
        }}
      />

      {/* Moving Highlight */}

      <div className="pointer-events-none animate-screenSweep absolute top-0 left-[-40%] h-full w-[35%] rotate-12 bg-linear-to-r from-transparent via-white/5 to-transparent" />
      {/* Horizontal distortion */}

      <div
        className="pointer-events-none animate-vhsSweep absolute top-0 left-[-120%] h-full w-[120%]"

        style={{
          background:
            "linear-gradient(180deg, transparent 48%, rgba(255,255,255,.08) 50%, transparent 52%)",
        }}
      />
    </>
  );
}
