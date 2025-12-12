// app/page.js
"use client";

import Scene from "@/components/Scene";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <section style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <div className="hero">
        <div>
          <h1>Create. Animate. Deploy — with ZixCre8 AI</h1>
          <p>A modern creative playground: 3D scenes, motion UI, and AI tools in one place.</p>
          <button className="cta">Start Project</button>

          <div className="grid">
            <div className="card"><strong>Realtime</strong><div style={{color:"#6b7280"}}>3D Preview</div></div>
            <div className="card"><strong>Motion</strong><div style={{color:"#6b7280"}}>Framer Animations</div></div>
            <div className="card"><strong>AI</strong><div style={{color:"#6b7280"}}>Chat & Tools</div></div>
          </div>
        </div>

        <div className="scene-wrap">
          <Scene />
        </div>
      </div>

      <ChatWidget />
    </section>
  );
}
