"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="brand">ZixCre8 AI</div>

      <nav className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
