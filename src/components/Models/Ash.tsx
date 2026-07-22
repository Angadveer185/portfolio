import { useGLTF } from "@react-three/drei";
import { ThreeElements } from "@react-three/fiber";

export default function Ash(props: ThreeElements["group"]) {
  const { scene } = useGLTF("/models/Ash.glb");

  return <primitive object={scene} {...props} />;
}