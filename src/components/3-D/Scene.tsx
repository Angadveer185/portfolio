"use client";

import { Canvas } from "@react-three/fiber";
import SpinningCottage from "@/components/Models/SpinningCottage";

export default function Scene() {
  return (
    <Canvas
      camera={{
        position: [10, 2, 6],
        fov: 45,
      }}
    >
      <ambientLight intensity={2} />

      <directionalLight
        position={[5, 10, -4]}
        intensity={2}
      />

      <SpinningCottage
        scale={2}
        speed={0.1}
      />
    </Canvas>
  );
}