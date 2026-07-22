"use client";

import Image from "next/image";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef, useState } from "react";

export default function AvatarMagnet() {
  const ref = useRef<HTMLDivElement>(null);

  const [flipped, setFlipped] = useState(false);

  const imagePath = "/images/Avatar2.png";

  // ---------------------------
  // Motion Values
  // ---------------------------

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 180,
    damping: 18,
    mass: 0.4,
  });

  const y = useSpring(mouseY, {
    stiffness: 180,
    damping: 18,
    mass: 0.4,
  });

  const rx = useSpring(rotateX, {
    stiffness: 180,
    damping: 18,
  });

  const ry = useSpring(rotateY, {
    stiffness: 180,
    damping: 18,
  });

  // ---------------------------
  // Shine
  // ---------------------------

  const shineX = useMotionValue(50);
  const shineY = useMotionValue(50);

  const background = useMotionTemplate`
radial-gradient(
circle at ${shineX}% ${shineY}%,
rgba(255,255,255,.45),
rgba(255,255,255,.08) 20%,
transparent 55%
)
`;

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (flipped) return;

    const rect = ref.current?.getBoundingClientRect();

    if (!rect) return;

    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const dx = e.clientX - cx;
    const dy = e.clientY - cy;

    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 220) {
      mouseX.set(dx * 0.12);
      mouseY.set(dy * 0.12);

      rotateY.set(dx / 18);
      rotateX.set(-dy / 18);
    } else {
      mouseX.set(0);
      mouseY.set(0);

      rotateX.set(0);
      rotateY.set(0);
    }

    shineX.set(((e.clientX - rect.left) / rect.width) * 100);
    shineY.set(((e.clientY - rect.top) / rect.height) * 100);
  }

  function reset() {
    mouseX.set(0);
    mouseY.set(0);

    rotateX.set(0);
    rotateY.set(0);

    shineX.set(50);
    shineY.set(50);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onClick={() => setFlipped((prev) => !prev)}
      className="relative flex h-full items-center justify-center"
      style={{
        perspective: "1200px",
      }}
    >
      {/* Marker Circle */}

      <div className="absolute h-[320px] w-[320px] rounded-full border-[5px] border-dashed border-[#3E3124]/15" />

      <motion.div
        style={{
          x,
          y,
          rotateX: rx,
          rotateY: ry,
          transformStyle: "preserve-3d",
        }}
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="will-change-transform"
      >
        <motion.div
          animate={{
            rotateY: flipped ? 180 : 0,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            transformStyle: "preserve-3d",
          }}
          className="relative h-[520px] w-[380px]"
        >
          {/* FRONT */}

          <div
            className="absolute inset-0 overflow-hidden rounded-[28px] border-[5px] border-[#3E3124] bg-[#F7E8D8] shadow-[0_20px_45px_rgba(0,0,0,.28)]"
            style={{
              backfaceVisibility: "hidden",
            }}
          >
            <Image
              src={imagePath}
              alt="Avatar"
              fill
              className="pointer-events-none object-cover select-none"
            />

            <motion.div
              style={{
                background,
              }}
              className="pointer-events-none absolute inset-0"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />
          </div>

          {/* BACK */}

          <div
            className="absolute inset-0 flex flex-col items-center justify-center rounded-[28px] border-[5px] border-[#3E3124] bg-[#F8EDDF] px-10 text-center shadow-[0_20px_45px_rgba(0,0,0,.28)]"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <h2
              className="font-meddon text-3xl text-[#3E3124] md:text-4xl lg:text-5xl"
              //   style={{
              //     fontFamily: '"Great Vibes", cursive',
              //   }}
            >
              Angadveer
            </h2>

            <div className="my-8 h-px w-40 bg-[#3E3124]/20" />

            <p className="max-w-xs text-lg leading-8 text-[#5A4A3B]">
              Thanks for taking the time to explore my little corner of the
              internet.
            </p>

            <p className="mt-8 text-sm text-[#8B7663] italic">
              "See you somewhere in the source code."
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
