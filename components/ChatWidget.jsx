"use client";

import { useState, useRef, useEffect } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(true);
  const [messages, setMessages] = useState([{ role: "assistant", content: "Hi — ask me anything about ZixCre8." }]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const bodyRef = useRef();

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [messages, open]);

  async function send() {
    if (!text.trim()) return;
    const userMsg = { role: "user", content: text.trim() };
    setMessages((m) => [...m, userMsg]);
    setText("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg.content }),
      });

      const data = await res.json();

      if (data?.reply) {
        setMessages((m) => [...m, { role: "assistant", content: data.reply }]);
      } else {
        // fallback mock reply if API key not set or route returned no reply
        setMessages((m) => [...m, { role: "assistant", content: "Sorry — no reply." }]);
      }
    } catch (err) {
      setMessages((m) => [...m, { role: "assistant", content: "Error: " + (err.message || "Network") }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="chat-widget card" style={{ display: open ? "block" : "none" }}>
      <div className="chat-header">
        <div style={{ fontWeight: 700 }}>AI Assistant</div>
        <div><button className="small" onClick={() => setOpen(false)}>Close</button></div>
      </div>

      <div ref={bodyRef} className="chat-body">
        {messages.map((m, i) => (
          <div key={i} className={"msg " + (m.role === "user" ? "me" : "")}>
            <div style={{ fontSize: 13 }}>{m.content}</div>
          </div>
        ))}
        {loading && <div className="msg"><em>Thinking…</em></div>}
      </div>

      <div className="input-area">
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Ask something..." />
        <button className="button" onClick={send} disabled={loading}>{loading ? "..." : "Send"}</button>
      </div>

      {!open && <button style={{ position: "fixed", right: 20, bottom: 20 }} onClick={() => setOpen(true)}>Open AI</button>}
    </div>
  );
}
