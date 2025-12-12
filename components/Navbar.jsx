"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav" role="navigation">
      <div className="brand">
        <div className="logo">ZixCre8</div>
      </div>

      <nav>
        <div className="menu-toggle" onClick={() => setOpen(!open)}>☰</div>
        <div className={open ? "nav-links open" : "nav-links"}>
          <Link href="/">Home</Link>
          <Link href="/#tools">Tools</Link>
          <Link href="/#contact">Contact</Link>
          <button className="cta" style={{ marginLeft: 12 }}>Get Started</button>
        </div>
      </nav>
    </header>
  );
}

