"use client";
import { useEffect, useState } from "react";

export default function BackgroundSlideshow() {
  const images = ["/bg1.jpg", "/bg2.jpg", "/bg3.jpg"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 6000); // 6 seconds per image
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      {images.map((img, i) => (
        <div
          key={i}
          className="slide"
          style={{
            backgroundImage: `url(${img})`,
            opacity: index === i ? 1 : 0,
          }}
        />
      ))}
    </div>
  );
}
