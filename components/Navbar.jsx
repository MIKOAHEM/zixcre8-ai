"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">ZixCre8</div>

      <ul className="nav-links">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/services">Tools</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>

      <a className="btn small" href="/contact">Get Started</a>
    </nav>
  );
}
