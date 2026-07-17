import { useGLTF } from "@react-three/drei";
import { ThreeElements } from "@react-three/fiber";

export default function Cottage(props: ThreeElements["group"]) {
  const { scene } = useGLTF("/models/Cottage.glb");

  return <primitive object={scene} {...props} />;
}