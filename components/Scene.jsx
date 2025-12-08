"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, Html } from "@react-three/drei";

function RotatingModel() {
  const ref = useRef();
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.45;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.06;
  });

  return (
    <mesh ref={ref} position={[0, -0.15, 0]} scale={[1.35,1.35,1.35]} castShadow>
      <icosahedronGeometry args={[0.9, 2]} />
      <meshStandardMaterial roughness={0.12} metalness={0.96} color={"#00ffd5"} />
    </mesh>
  );
}

export default function Scene() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Canvas camera={{ position: [2.7, 1.2, 3.5], fov: 45 }} shadows>
        <ambientLight intensity={0.35} />
        <directionalLight intensity={0.9} position={[5, 6, 2]} castShadow />
        <Suspense fallback={<Html center>Loading 3D…</Html>}>
          <RotatingModel />
          <Environment preset="studio" />
        </Suspense>
        <OrbitControls enablePan={false} autoRotate autoRotateSpeed={0.7} />
      </Canvas>
    </div>
  );
}
