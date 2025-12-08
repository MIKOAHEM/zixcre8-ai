"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";

export default function Scene() {
  return (
    <div style={{ height: "400px", marginTop: "50px" }}>
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[2, 2, 2]} intensity={1} />

        <Sphere args={[1, 64, 64]}>
          <meshStandardMaterial
            color="#00eaff"
            metalness={0.9}
            roughness={0.1}
          />
        </Sphere>

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
