import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "ZixCre8 AI",
  description: "AI-powered creative studio — 3D UI, motion, bright aesthetic.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {/* 3D Background Slideshow */}
        <div id="background-3d"></div>

        <main className="page-content">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
