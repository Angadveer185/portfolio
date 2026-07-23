"use client";

import { useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useProgress } from "@react-three/drei";
import Ash from "@/components/Models/Ash";
import { useLoading } from "@/context/LoadingContext";

function ProgressTracker() {
  const { progress } = useProgress();
  const { setProgress } = useLoading();

  useEffect(() => {
    setProgress(progress);
  }, [progress, setProgress]);

  return null;
}

export default function Scene() {
  return (
    <div className="relative w-full h-screen">
      <Canvas
        camera={{
          position: [0, -4, 6],
          fov: 45,
        }}
      >
        <ambientLight intensity={2} />
        <directionalLight position={[5, 5, 5]} intensity={2} />

        <ProgressTracker />

        <Suspense fallback={null}>
          <Ash scale={2.2} position={[0.4, -2.5, 0]} />
        </Suspense>

        <OrbitControls
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          enableZoom={false}
          enablePan={false}
        />
      </Canvas>
    </div>
  );
}