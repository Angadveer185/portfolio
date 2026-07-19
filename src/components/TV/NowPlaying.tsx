"use client";

import { Project } from "@/types/types";
import { PlayerState } from "@/hooks/useDVDPlayer";

interface Props {
  project: Project;

  playerState: PlayerState;
}

export default function NowPlaying({
  project,

  playerState,
}: Props) {
  return (
    <div className="w-full rounded-md border border-[#4b3c31] bg-black px-4 py-2 sm:px-6 md:px-8 pointer-events-none">
      <p className="font-mono text-xs capitalize text-green-500 sm:text-sm">
        {playerState}
      </p>

      <p className="font-mono text-base text-green-300 break-words sm:text-lg md:text-2xl">
        {project.title}
      </p>
    </div>
  );
}
