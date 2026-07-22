"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Ash from "@/components/Models/Ash";

export default function Scene() {
  return (
    <Canvas
      camera={{
        position: [0, -4, 6],
        fov: 45,
      }}
    >
      <ambientLight intensity={2} />
      <directionalLight position={[5, 5, 5]} intensity={2} />

      <Ash scale={2.2} position={[0.4, -2.5, 0]} />

      {/* Lock vertical rotation to force Y-axis only rotation */}
      <OrbitControls
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        enableZoom={false}
        enablePan={false} // Optional: prevents panning off-center
      />
    </Canvas>
  );
}
