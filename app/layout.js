// app/layout.js
import "./globals.css";
import BackgroundSlideshow from "./components/BackgroundSlideshow";

export const metadata = {
  title: "ZixCre8 AI",
  description: "AI-powered creative tools",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative overflow-hidden">
        {/* 🔥 Global Background Slideshow */}
        <BackgroundSlideshow />

        {/* 🔥 Your main website content */}
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
