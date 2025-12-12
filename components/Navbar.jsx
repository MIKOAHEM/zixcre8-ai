"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="nav">
      <div className="logo">ZixCre8 AI</div>
      <div className="menu-toggle" onClick={() => setOpen(!open)}>☰</div>
      <ul className={open ? "nav-links open" : "nav-links"}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
