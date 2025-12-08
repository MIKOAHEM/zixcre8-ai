// app/page.js
"use client";

import { motion } from "framer-motion";
import Scene from "@/components/Scene";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <section className="hero container">
        <div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Create. Animate. Deploy — <span className="accent">ZixCre8 AI</span>
          </motion.h1>

          <motion.p
            className="muted"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.12 }}
          >
            A modern creative playground: 3D scenes, motion UI, and AI tools in one place.
          </motion.p>

          <div style={{ marginTop: 24, display: "flex", gap: 12 }}>
            <motion.button whileHover={{ scale: 1.03 }} className="button">
              Start Project
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.03 }}
              href="#tools"
              className="small"
              style={{ alignSelf: "center", textDecoration: "none", color: "var(--muted)" }}
            >
              Explore tools →
            </motion.a>
          </div>

          <div className="grid">
            <div className="card">
              <div className="small">Realtime</div>
              <div className="metrics"><strong>3D Preview</strong><span className="small">Interactive scenes</span></div>
            </div>
            <div className="card">
              <div className="small">Motion</div>
              <div className="metrics"><strong>Framer Animations</strong><span className="small">Smooth transitions</span></div>
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

      <section id="tools" className="container" style={{ marginTop: 28 }}>
        <h2 style={{ marginBottom: 12 }}>Tools & Features</h2>
        <div className="grid">
          <div className="card">
            <strong>Music & Lyrics</strong>
            <div className="small">Generate melodies, chord progressions, and lyrics.</div>
          </div>
          <div className="card">
            <strong>Graphics</strong>
            <div className="small">Export images & vector assets with AI assistance.</div>
          </div>
          <div className="card">
            <strong>3D</strong>
            <div className="small">Interactive previews using react-three-fiber.</div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
