"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="nav container" role="navigation">
      <div className="brand">
        <div className="logo">Z</div>
        <div>
          <div style={{fontSize:14, opacity:0.95}}>ZixCre8</div>
          <div style={{fontSize:11,color:"var(--muted)"}}>AI studio</div>
        </div>
      </div>

      <nav className="nav-links small" aria-label="main">
        <Link href="/"><a>Home</a></Link>
        <Link href="/#tools"><a>Tools</a></Link>
        <Link href="/#news"><a>News</a></Link>
        <button className="button">Get Started</button>
      </nav>
    </header>
  );
}
