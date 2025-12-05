import Image from "next/font/google"
import { Canvas } from "@react-three/fiber"
import { Float, OrbitControls, Sphere } from "@react-three/drei"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 overflow-hidden">
      {/* 3D Hero */}
      <Canvas className="absolute inset-0">
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
          <Sphere args={[1, 100, 100]} scale={2.5}>
            <meshStandardMaterial color="#9333ea" metalness={0.8} roughness={0.1} />
          </Sphere>
        </Float>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center px-8">
        <h1 className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-pink-300 mb-8">
          Zixcre8-ai
        </h1>
        <p className="text-2xl md:text-4xl text-purple-200 mb-12 max-w-4xl">
          Veo 3 Video • Gemini AI • 3D Magic
        </p>
        <button className="px-12 py-6 bg-white text-purple-900 rounded-full text-2xl font-bold hover:scale-110 transition-all shadow-2xl">
          Start Creating Now
        </button>
      </div>
    </main>
  )
}
