"use client";

import { Button } from "sketchbook-ui";
import 'sketchbook-ui/style.css';
import { COLORS } from "@/lib/colors";
import Tag from "@/components/ui/Tag";
import Sketchbook from "@/components/Sketchbook/Sketchbook";
import { Canvas } from "@react-three/fiber";
import Scene from "@/components/3-D/Scene";

export default function Landing() {
  return (
    <section className="flex min-h-screen w-full">
      {/* LEFT */}
      <div className="flex w-full items-center justify-center px-8 py-20 lg:w-[50%] lg:px-20">
        <div className="w-full max-w-2xl">
          {/* Greeting */}
          <p className="text-text-secondary font-bree text-4xl md:text-5xl">
            Hi, I'm
          </p>

          {/* Name */}
          <h1 className="text-text-primary font-splash mt-4 text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
            Angadveer
          </h1>

          {/* Tags */}
          <div className="mt-10 flex flex-wrap gap-3">
            {["Dev-Ops", "Java Programmer", "Full-Stack", "Game Developer"].map(
              (tag) => (
                <Tag text={tag} />
              ),
            )}
          </div>

          {/* Description */}

          <p className="font-gochi mt-10 max-w-xl leading-8 text-white text-lg">
            Passionate developer focused on building meaningful software
            experiences. I enjoy backend architecture, creating polished
            interfaces and bringing ideas to life through code.
          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap gap-6">
            <Button size="sm"
              colors={{
                bg: "transparent",
                bgOverlay: "transparent",
                stroke: COLORS.primary,
                text: COLORS.primary,
              }}
              typography={{
                fontFamily: "Gochi Hand"
              }}
            >
              Project
            </Button>

            <Button size="sm"
              colors={{
                bg: "transparent",
                bgOverlay: "transparent",
                stroke: COLORS.primary,
                text: COLORS.primary,
              }}
              typography={{
                fontFamily: "Gochi Hand"
              }}
            >
              Experience
            </Button>
          </div>
        </div>
      </div>

      {/* RIGHT (Sketchbook Placeholder) */}

      <div className="hidden w-[50%] items-center justify-center lg:flex overflow-clip">
        <Scene />
      </div>
    </section>
  );
}
