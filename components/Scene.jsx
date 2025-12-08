"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function Scene() {
  return (
    <div style={{ height: "500px", width: "100%" }}>
      <Canvas>
        <ambientLight intensity={1.2} />
        <pointLight position={[10, 10, 10]} />
        <mesh>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="#00f7ff" roughness={0.1} metalness={1} />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
