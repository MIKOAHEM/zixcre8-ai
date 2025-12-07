"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function Scene() {
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <Canvas shadows camera={{ position: [3, 2, 3], fov: 40 }}>
        <color attach="background" args={["#000"]} />

        <mesh castShadow>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#00ffea" />
        </mesh>

        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />

        <OrbitControls />
      </Canvas>
    </div>
  );
}
