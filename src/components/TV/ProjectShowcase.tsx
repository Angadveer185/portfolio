"use client";

import CRTScreen from "./CRTScreen";
import DVDControls from "./DVDControls";
import NowPlaying from "./NowPlaying";
import VolumeKnob from "./VolumeKnob";
import DVDTray from "./DVDTray";

import { useDVDPlayer } from "@/hooks/useDVDPlayer";
import { projects } from "@/lib/data";

export default function ProjectShowcase() {
  const player = useDVDPlayer();

  return (
    <section className="flex w-full items-start justify-center px-2 py-4 sm:px-4 md:items-center md:p-6">
      <div className="relative flex w-full max-w-7xl flex-col rounded-[28px] border border-[#5b4d42] bg-[#2B2825] sm:rounded-[34px]">
        <div />

        <div className="w-full flex-1 p-2 sm:p-4 h-[80vh]">
          <CRTScreen
            project={player.project}
            direction={player.direction}
            volume={player.volume}
            playerState={player.playerState}
          />
        </div>

        <div className="border-t border-[#44372E] px-3 py-3 sm:px-4 md:px-9 md:py-2">
          <div className="flex flex-col items-center justify-between gap-4 lg:flex-row lg:gap-4">
            <div className="flex w-full justify-center lg:w-auto">
              <DVDControls
                onPrevious={player.previous}
                onNext={player.next}
                onPlayPause={player.togglePlay}
                onStop={player.stop}
                onEject={player.eject}
                isPlaying={player.playerState === "playing"}
              />
            </div>

            <div className="flex w-full justify-center lg:w-auto">
              <NowPlaying
                project={player.project}
                playerState={player.playerState}
              />
            </div>

            <div className="hidden lg:flex w-full justify-center lg:w-auto">
              <VolumeKnob volume={player.volume} setVolume={player.setVolume} />
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-between gap-3 rounded-b-[28px] border-t border-[#44372E] bg-[#252220] px-3 py-2 sm:flex-row sm:gap-4 sm:px-4 sm:rounded-b-[34px] md:gap-6 md:px-6">
          <div className="flex shrink-0 items-center gap-2">
            <div
              className={`h-3 w-3 shrink-0 rounded-full transition-all duration-300 ${
                player.playerState === "playing"
                  ? "bg-green-400 shadow-[0_0_12px_#22c55e]"
                  : player.playerState === "loading"
                    ? "bg-yellow-300 shadow-[0_0_12px_gold]"
                    : player.playerState === "paused"
                      ? "bg-orange-400 shadow-[0_0_12px_orange]"
                      : "bg-red-500 shadow-[0_0_12px_red]"
              } `}
            />
            <p className="font-bree text-md tracking-[0.3em] whitespace-nowrap text-[#D4BAA3] lg:text-xl">
              DVD VIDEO
            </p>
          </div>

          <div className="w-full min-w-[120px] flex-1 px-2 sm:px-4 md:min-w-37.5 md:px-6">
            <div className="h-4 w-full rounded-full border border-neutral-800 bg-black shadow-inner" />
          </div>

          <div className="hidden shrink-0 sm:block">
            <p className="text-sm tracking-[0.25em] whitespace-nowrap text-[#7E6E61]">
              DIGITAL PLAYER
            </p>
          </div>

          <DVDTray
            open={player.trayOpen}
            current={projects.findIndex((p) => p.id === player.project.id)}
            select={player.selectProject}
          />
        </div>
      </div>
    </section>
  );
}
