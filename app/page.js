import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="hero">
        <h1>Welcome to ZixCre8 AI</h1>
        <p>Your creative AI companion for designs, scripts, music & more.</p>
        <button className="cta">Get Started</button>
      </div>
      <Footer />
    </>
  );
}
