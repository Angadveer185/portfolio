"use client";

import { animate, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

interface Props {
  value: number;
  suffix?: string;
}

export default function AnimatedCounter({
  value,
  suffix = "",
}: Props) {
  const motionValue = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const unsubscribe = motionValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });

    const controls = animate(motionValue, value, {
      duration: 1.3,
      ease: "easeOut",
    });

    return () => {
      unsubscribe();
      controls.stop();
    };
  }, [motionValue, value]);

  return (
    <>
      {displayValue}
      {suffix}
    </>
  );
}