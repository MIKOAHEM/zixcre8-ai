// Folder: app/services/page.js

import Navbar from "../Navbar";
import Footer from "../Footer";

export default function Services() {
  return (
    <>
      <Navbar />
      <section className="page">
        <h1>Our Services</h1>
        <p>
          ZixCre8 AI provides tools for scriptwriting, music creation, graphic design,
          brand identity development, and advanced AI content generation.
        </p>
      </section>
      <Footer />
    </>
  );
}
