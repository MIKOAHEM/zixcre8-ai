"use client";

export default function Navbar() {
  return (
    <header className="nav container">
      <div className="brand">
        <div className="logo">Z</div>
        <div>
          <div style={{fontSize:14, opacity:0.9}}>ZixCre8</div>
          <div style={{fontSize:11,color:"var(--muted)"}}>AI studio</div>
        </div>
      </div>

      <nav className="nav-links small">
        <a href="#" style={{color:"var(--muted)",textDecoration:"none"}}>Home</a>
        <a href="#work" style={{color:"var(--muted)",textDecoration:"none"}}>Work</a>
        <a href="#tools" style={{color:"var(--muted)",textDecoration:"none"}}>Tools</a>
        <button className="button">Get Started</button>
      </nav>
    </header>
  );
}
