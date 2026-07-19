"use client";

import React from "react";
import DVDButton from "./Player/DVDButton"; // Adjust reference relative path
import { Play, LucideSkipForward, LucideSkipBack, Square, LucideArrowBigUpDash } from "lucide-react";

interface Props {
  onPrevious: () => void;
  onNext: () => void;
  onPlayPause: () => void;
  onStop: () => void;
  onEject: () => void;
  isPlaying: boolean;
}

export default function DVDControls({
  onPrevious,
  onNext,
  onPlayPause,
  onStop,
  onEject,
  isPlaying,
}: Props) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4">
      <DVDButton onClick={onPrevious}>
        <LucideSkipBack fill="#D4BAA3" />
      </DVDButton>

      <DVDButton onClick={onPlayPause} isActive={isPlaying}>
        <Play fill={isPlaying ? "#E25543" : "#D4BAA3"} />
      </DVDButton>

      <DVDButton onClick={onStop}>
        <Square fill="#D4BAA3" />
      </DVDButton>

      <DVDButton onClick={onNext}>
        <LucideSkipForward fill="#D4BAA3" />
      </DVDButton>

      <DVDButton onClick={onEject}>
        <LucideArrowBigUpDash fill="#D4BAA3" />
      </DVDButton>
    </div>
  );
}
