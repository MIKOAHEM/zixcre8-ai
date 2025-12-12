// app/layout.js
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "ZixCre8 AI",
  description: "AI-powered creative studio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Background slideshow (reads images from /public) */}
        <div id="background-3d" aria-hidden="true"></div>

        {/* Page content wrapper */}
        <div className="content-wrapper">
          <Navbar />
          <main style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
