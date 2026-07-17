"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";
import Cottage from "./Cottage";

interface SpinningCottageProps {
  speed?: number; // radians per second
  scale?: number;
}

export default function SpinningCottage({
  speed = 1,
  scale = 1,
}: SpinningCottageProps) {
  const ref = useRef<Group>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += speed * delta;
    }
  });

  return (
    <group ref={ref}>
      <Cottage scale={scale} position={[0, -2, 0]} />
    </group>
  );
}