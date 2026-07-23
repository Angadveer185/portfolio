import { useGLTF } from "@react-three/drei";
import { ThreeElements, useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import * as THREE from "three";
import { useLoading } from "@/context/LoadingContext";

export default function Ash(props: ThreeElements["group"]) {
  const { scene } = useGLTF("/models/Ash.glb");
  const innerRef = useRef<THREE.Group>(null);
  const { isLoading } = useLoading();
  const spawnStarted = useRef(false);

  useEffect(() => {
    if (!isLoading) {
      spawnStarted.current = true;
    }
  }, [isLoading]);

  useFrame((state, delta) => {
    if (!innerRef.current) return;

    if (!spawnStarted.current) {
      // Spawn position offset: from a distance/corner
      innerRef.current.position.set(6, -2, -10);
      innerRef.current.scale.set(0.1, 0.1, 0.1);
      innerRef.current.rotation.set(0, Math.PI / 1.5, -0.2);
      return;
    }

    // Lerp to target: position 0, scale 1, rotation 0
    innerRef.current.position.lerp(new THREE.Vector3(0, 0, 0), 0.04);
    innerRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.04);
    
    innerRef.current.rotation.x = THREE.MathUtils.lerp(innerRef.current.rotation.x, 0, 0.04);
    innerRef.current.rotation.y = THREE.MathUtils.lerp(innerRef.current.rotation.y, 0, 0.04);
    innerRef.current.rotation.z = THREE.MathUtils.lerp(innerRef.current.rotation.z, 0, 0.04);
  });

  return (
    <group {...props}>
      <group ref={innerRef}>
        <primitive object={scene} />
      </group>
    </group>
  );
}

useGLTF.preload("/models/Ash.glb");