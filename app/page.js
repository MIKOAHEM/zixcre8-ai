import Scene from "@/components/Scene";

export default function Home() {
  return (
    <section className="container">
      <h1 className="hero-title">
        Create. Animate. Deploy — with <span className="accent">ZixCre8 AI</span>
      </h1>

      <p className="hero-sub">
        A modern creative playground: 3D scenes, motion UI, and AI tools in one place.
      </p>

      <div style={{ marginTop: "40px" }}>
        <Scene />
      </div>
    </section>
  );
}
