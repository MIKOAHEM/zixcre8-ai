// app/page.js
"use client";

import { useEffect, useState } from "react";
import Scene from "@/components/Scene";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("/api/news")
      .then((r) => r.json())
      .then((d) => { if (d?.items) setNews(d.items); })
      .catch(() => {});
  }, []);

  return (
    <>
      <section className="hero container">
        <div>
          <h1>Create. Animate. Deploy — with ZixCre8 AI</h1>
          <p className="muted">A modern creative playground: 3D scenes, motion UI, and AI tools in one place.</p>

          <div style={{ marginTop: 24, display: "flex", gap: 12 }}>
            <button className="button">Start Project</button>
            <a className="small" href="#tools" style={{alignSelf:"center",textDecoration:"none",color:"var(--muted)"}}>Explore tools →</a>
          </div>

          <div className="grid">
            <div className="card">
              <div className="small">Realtime</div>
              <div className="metrics"><strong>3D Preview</strong><span className="small">Interactive scenes with low latency</span></div>
            </div>
            <div className="card">
              <div className="small">Motion</div>
              <div className="metrics"><strong>Framer Animations</strong><span className="small">Smooth hero transitions</span></div>
            </div>
            <div className="card">
              <div className="small">AI</div>
              <div className="metrics"><strong>Chat & Tools</strong><span className="small">Smart content generation</span></div>
            </div>
          </div>
        </div>

        <div className="card scene-wrap">
          <Scene />
        </div>
      </section>

      <section id="news" className="container" style={{marginTop:36}}>
        <h2 style={{marginBottom:12}}>Latest</h2>
        <div className="grid">
          {news.length === 0 ? (
            <div className="card">No news yet.</div>
          ) : news.map((n, i) => (
            <div key={i} className="card">
              <strong>{n.title}</strong>
              <div className="small" style={{marginTop:6}}>{n.body}</div>
            </div>
          ))}
        </div>
      </section>

      <ChatWidget />
    </>
  );
}
