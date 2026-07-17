import React from "react";
import Image from "next/image";

const highlights = [
  {
    label: "Currently",
    value: "Building polished systems with calm, practical architecture.",
  },
  {
    label: "Strength",
    value: "Backend logic, thoughtful UI details, and clean handoffs.",
  },
  {
    label: "Style",
    value: "Sketch-first, detail-aware, and a little bit playful.",
  },
];

const notes = [
  "Likes clear structure over noise.",
  "Turns rough ideas into dependable products.",
  "Keeps room for personality in the details.",
];

function TopPage() {
  return (
    <div className="bg-bg-tertiary relative flex w-full max-w-220 flex-1 overflow-hidden rounded-[2.75rem] border-t-2 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.18)]">

      <div className="bg-bg-secondary relative flex w-full overflow-hidden rounded-[2.25rem]">
        <div className="text-text-quaternary/65 absolute inset-x-6 top-5 flex items-center justify-between text-[0.65rem] tracking-[0.35em] uppercase">
          <span>Field notes</span>
          <span>2026 / vol. 04</span>
        </div>

        <div className="absolute top-1/2 left-5 h-[72%] w-px -translate-y-1/2 bg-black/10" />
        <div className="absolute inset-y-0 left-0 w-7 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),transparent_18%,rgba(0,0,0,0.02)_50%,transparent_82%)]" />

        <div className="grid min-h-[32rem] w-full grid-cols-1 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative flex flex-col justify-between gap-6 px-8 pt-20 pb-8 lg:px-10">
            <div className="space-y-5">
              <span className="font-bree text-text-quaternary/70 inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white/45 px-4 py-1 text-[0.7rem] tracking-[0.3em] uppercase shadow-[0_4px_0_rgba(0,0,0,0.04)]">
                Sketchbook entry
              </span>

              <div className="space-y-3">
                <p className="font-gochi text-text-quaternary/80 text-lg">
                  Hello, I&apos;m
                </p>
                <h1 className="font-gochi text-text-primary text-6xl leading-none sm:text-7xl lg:text-[5rem]">
                  Angadveer
                </h1>
                <p className="font-bree text-text-tertiary max-w-md text-2xl sm:text-3xl">
                  Software Engineer who likes turning rough ideas into polished
                  systems.
                </p>
              </div>

              <p className="text-text-quaternary/80 max-w-xl text-sm leading-7 sm:text-base">
                I design and build dependable software with a hand-drawn feel:
                clear structure, thoughtful details, and enough personality to
                make the page feel alive.
              </p>
            </div>

            {/* <div className="grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.25rem] border border-black/10 bg-white/50 p-4 shadow-[0_8px_20px_rgba(0,0,0,0.05)]"
                >
                  <p className="text-[0.65rem] uppercase tracking-[0.3em] text-text-quaternary/55">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-text-tertiary/85">
                    {item.value}
                  </p>
                </div>
              ))}
            </div> */}
          </div>

          <div className="relative flex items-start justify-center px-6 pt-24 pb-8">
            {/* <div className="absolute right-6 top-20 rotate-[-8deg] rounded-full border border-black/10 bg-white/60 px-4 py-1 text-[0.65rem] uppercase tracking-[0.28em] text-text-quaternary/70 shadow-sm">
              Pinned memory
            </div> */}

            <div className="relative w-full max-w-[22rem] rotate-[2deg] rounded-[1rem] border border-black/10 bg-white p-3 shadow-[0_25px_50px_rgba(0,0,0,0.16)]">
              <div
                className="absolute top-4 -left-2 z-10 h-8 w-42 rotate-[-12deg] bg-bg-secondary/80 shadow-[0_6px_12px_rgba(0,0,0,0.08)]"
                style={{
                  clipPath:
                    "polygon(8% 0%, 100% 0%, 100% 100%, 8% 100%, 0% 90%, 6% 80%, 0% 70%, 6% 60%, 0% 50%, 6% 40%, 0% 30%, 6% 20%, 0% 10%)",
                }}
              />
              <div
                className="absolute top-5 -right-1 z-10 h-8 w-42 rotate-[8deg] bg-bg-secondary/80 shadow-[0_6px_12px_rgba(0,0,0,0.08)]"
                style={{
                  clipPath:
                    "polygon(0% 0%, 92% 0%, 100% 10%, 94% 20%, 100% 30%, 94% 40%, 100% 50%, 94% 60%, 100% 70%, 94% 80%, 100% 90%, 92% 100%, 0% 100%)",
                }}
              />

              <div className="relative overflow-hidden rounded-[0.5rem] border border-black/10 bg-[#f6efe6]">
                <Image
                  src="/doodles/Red_Room.png"
                  alt="Angadveer in a red room sketch"
                  width={1000}
                  height={1000}
                  className="h-[22rem] w-full object-cover object-top"
                  priority={false}
                />

                {/* <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent p-5 text-white">
                  <p className="text-[0.65rem] tracking-[0.35em] text-white/75 uppercase">
                    Margin note
                  </p>
                  <p className="mt-2 max-w-xs text-sm leading-6 text-white/90">
                    Build with care, leave room for surprise, and let the page
                    feel handwritten.
                  </p>
                </div> */}
              </div>

              <div className="text-text-quaternary/80 mt-4 space-y-2 text-sm">
                {notes.map((note) => (
                  <div
                    key={note}
                    className="flex items-start gap-3 rounded-[1rem] bg-[#f5ecdf] px-3 py-2"
                  >
                    <span className="bg-text-primary mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
                    <p>{note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopPage;
