import Scene from "@/components/Scene";
import FadeIn from "@/components/FadeIn";

export default function HomePage() {
  return (
    <main
      style={{
        padding: "40px",
        textAlign: "center",
        color: "white",
      }}
    >
      <FadeIn>
        <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
          ZixCre8 AI
        </h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "40px", opacity: 0.8 }}>
          Creative Intelligence — Powered by Next.js, R3F & Framer Motion
        </p>
      </FadeIn>

      <FadeIn>
        <Scene />
      </FadeIn>
    </main>
  );
}
