"use client";

import { motion } from "framer-motion";
import Scene from "@/components/Scene";
import ChatWidget from "@/components/ChatWidget";

export default function HomePage() {
  return (
    <>
      <section className="hero container">
        <div>
          <motion.h1 initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.6}}>
            Create. Animate. Deploy — with ZixCre8 AI
          </motion.h1>
          <motion.p initial={{y:10,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.1}}>
            A modern creative playground: 3D scenes, motion UI, and AI tools in one place.
          </motion.p>

          <div style={{marginTop:24,display:"flex",gap:12}}>
            <motion.button whileHover={{scale:1.03}} className="button">Start Project</motion.button>
            <motion.a whileHover={{scale:1.03}} href="#tools" className="small" style={{alignSelf:"center",textDecoration:"none",color:"var(--muted)"}}>Explore tools →</motion.a>
          </div>

          <div className="grid">
            <div className="card">
              <div className="small">Realtime</div>
              <div className="metrics"><strong>3D Preview</strong><span className="small">Interactive scenes with low latency</span></div>
            </div>
            <div className="card">
              <div className="small">Motion</div>
              <div className="metrics"><strong>Framer Animation</strong><span className="small">Smooth hero transitions</span></div>
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

      <ChatWidget />
    </>
  );
}
