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
        <div id="background-3d"></div>
        <div className="page content-wrapper">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
