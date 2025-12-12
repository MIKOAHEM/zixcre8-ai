"use client";

import { useState, useRef, useEffect } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(true);
  const [messages, setMessages] = useState([{ role: "assistant", content: "Hi — ask me anything about ZixCre8." }]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const bodyRef = useRef();

  useEffect(()=>{ if(bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight; }, [messages, open]);

  async function send() {
    if (!text.trim()) return;
    const userMsg = { role: "user", content: text.trim() };
    setMessages(m => [...m, userMsg]);
    setText("");
    setLoading(true);

    try {
      // try real API first
      const res = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ message: userMsg.content }) });
      const data = await res.json();
      if (data?.reply) {
        setMessages(m => [...m, { role: "assistant", content: data.reply }]);
      } else {
        // fallback mock
        setMessages(m => [...m, { role: "assistant", content: "Sorry — no reply." }]);
      }
    } catch (err) {
      // fallback mock reply so widget works without API key
      setMessages(m => [...m, { role: "assistant", content: "Thanks — I got your message. (Mock reply)" }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="chat-widget">
      <div style={{ background: "white", borderRadius: 10, padding: 8 }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <strong>AI Assistant</strong>
          <button onClick={() => setOpen(false)} style={{ background: "transparent", border: "none" }}>Close</button>
        </div>

        <div ref={bodyRef} style={{ maxHeight: 260, overflow: "auto", marginTop: 8 }}>
          {messages.map((m,i)=>(
            <div key={i} style={{ margin: "8px 0", textAlign: m.role==="user" ? "right" : "left" }}>
              <div style={{ display: "inline-block", padding: "8px 12px", borderRadius: 10, background: m.role==="user" ? "#0ea5a4" : "rgba(0,0,0,0.06)", color: m.role==="user" ? "#fff" : "#000" }}>
                {m.content}
              </div>
            </div>
          ))}
          {loading && <div style={{ marginTop: 8 }}>Thinking...</div>}
        </div>

        <div style={{ display:"flex", gap:8, marginTop: 8 }}>
          <input value={text} onChange={(e)=>setText(e.target.value)} placeholder="Ask something..." style={{ flex:1, padding:8, borderRadius:8, border:"1px solid #e6e6e6" }} />
          <button className="cta" onClick={send} disabled={loading}>{loading ? "..." : "Send"}</button>
        </div>
      </div>
      {!open && <button onClick={()=>setOpen(true)}>Open AI</button>}
    </div>
  );
}
