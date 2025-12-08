"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, Html } from "@react-three/drei";

function Rotator() {
  const ref = useRef();
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.45;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.18) * 0.05;
  });

  return (
    <mesh ref={ref} position={[0, -0.12, 0]} scale={[1.3, 1.3, 1.3]} castShadow>
      <icosahedronGeometry args={[0.9, 3]} />
      <meshStandardMaterial roughness={0.15} metalness={0.95} color={"#00ffd5"} />
    </mesh>
  );
}

export default function Scene() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Canvas camera={{ position: [2.6, 1.1, 3.2], fov: 45 }} shadows>
        <ambientLight intensity={0.35} />
        <directionalLight intensity={0.9} position={[5, 6, 2]} castShadow />
        <Suspense fallback={<Html center>Loading 3D…</Html>}>
          <Rotator />
          <Environment preset="studio" />
        </Suspense>
        <OrbitControls enablePan={false} autoRotate autoRotateSpeed={0.55} />
      </Canvas>
    </div>
  );
}
