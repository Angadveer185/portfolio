"use client";

import { Project } from "@/types/types";
import ProjectCarousel from "./ProjectCarousel";
import ScreenEffects from "./ScreenEffects";
import { PlayerState } from "@/hooks/useDVDPlayer";

interface Props {
  project: Project;

  direction: "next" | "prev";

  volume: number;

  playerState: PlayerState;
}

export default function CRTScreen({ project, direction, volume, playerState }: Props) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[28px] border border-[#5f5145] bg-[#111] shadow-[inset_0_0_60px_rgba(0,0,0,.85)] sm:rounded-[34px]">
      <div className="h-full w-full rounded-[22px] border border-[#847060] bg-[#161616] p-3 sm:rounded-[28px] sm:p-4">
        <div
          className="relative h-full w-full overflow-hidden rounded-[18px] bg-black sm:rounded-[20px]"
          style={{
            filter: `
              brightness(${0.82 + volume / 350})
              saturate(${0.9 + volume / 200})
              drop-shadow(0 0 ${volume / 7}px rgba(255,255,255,.08))
            `,
          }}
        >
          <div
            className={`relative h-full w-full overflow-hidden transition-all duration-500 ${
              playerState === "loading"
                ? "scale-y-[0.02]"
                : playerState === "stopped"
                  ? "opacity-0"
                  : "opacity-100"
            }`}
          >
            <ProjectCarousel
              project={project}
              direction={direction}
              playerState={playerState}
            />
          </div>

          <ScreenEffects playerState={playerState} />
        </div>
      </div>
    </div>
  );
}