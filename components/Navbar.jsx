"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="nav container">
      <div className="brand">
        <div className="logo">Z</div>
        <div>
          <div className="brand-title">ZixCre8</div>
          <div className="brand-sub">AI studio</div>
        </div>
      </div>

      <nav className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/#tools">Tools</Link>
        <button className="button">Get Started</button>
      </nav>
    </header>
  );
}
