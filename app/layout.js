import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "ZixCre8 AI",
  description: "AI-powered creative studio — 3D, motion, chat",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="page">
          <Navbar />
          <main className="container">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
