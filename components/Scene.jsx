"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";

function Rotator() {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.4;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.25) * 0.05;
  });
  return (
    <mesh ref={ref} scale={1.1}>
      <icosahedronGeometry args={[0.9, 3]} />
      <meshStandardMaterial roughness={0.12} metalness={0.95} color={"#00b6a9"} />
    </mesh>
  );
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [2.2, 1.2, 3], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 6, 2]} intensity={0.9} />
      <Suspense fallback={null}>
        <Rotator />
        <Environment preset="city" />
      </Suspense>
      <OrbitControls enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
}
