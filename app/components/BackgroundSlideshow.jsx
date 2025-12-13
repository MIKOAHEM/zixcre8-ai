"use client";

import { useState, useEffect } from "react";

const images = ["/bg1.jpg", "/bg2.jpg", "/bg3.jpg"];

export default function BackgroundSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="bg-slideshow"
      style={{ backgroundImage: `url(${images[index]})` }}
    />
  );
}
