"use client";
import { useEffect, useState } from "react";

const images = ["/bg1.jpg", "/bg2.jpg", "/bg3.jpg"];

export default function BackgroundSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          className={`absolute w-full h-full object-cover transition-opacity duration-[2000ms] 
            ${current === index ? "opacity-100" : "opacity-0"}`}
        />
      ))}
    </div>
  );
}
