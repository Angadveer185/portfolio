"use client";

import { useEffect, Suspense, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useProgress } from "@react-three/drei";
import * as THREE from "three";
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

// Wrapper component to handle Y-axis rotation on scroll
function SpinningAsh(props: any) {
  const groupRef = useRef<THREE.Group>(null);
  const targetRotation = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll multiplier (adjust 0.005 to speed up/slow down rotation speed)
      targetRotation.current = window.scrollY * 0.005;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      // Lerp (smooth interpolation) towards the target scroll rotation
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetRotation.current,
        0.1 // Smooth factor
      );
    }
  });

  return (
    <group ref={groupRef}>
      <Ash {...props} />
    </group>
  );
}

export default function Scene() {
  const [isGrabbing, setIsGrabbing] = useState(false);

  return (
    <div className={`relative w-full h-screen ${isGrabbing ? "cursor-grabbing" : "cursor-grab"}`}>
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
          <SpinningAsh scale={2.2} position={[0.4, -2.5, 0]} />
        </Suspense>

        <OrbitControls
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          enableZoom={false}
          enablePan={false}
          onStart={() => setIsGrabbing(true)}
          onEnd={() => setIsGrabbing(false)}
        />
      </Canvas>
    </div>
  );
}