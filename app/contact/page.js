// Folder: app/contact/page.js

import Navbar from "../Navbar";
import Footer from "../Footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <section className="page">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you. Reach out anytime! You can contact us through the details below:</p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email Address" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>

<div className="contact-details">
  <p><strong>Email:</strong> zixcre8@gmail.com</p>
  <p><strong>Phone:</strong> +2347017512874</p>
  <p><strong>WhatsApp:</strong> <a href="https://wa.me/2347017512874">Chat on WhatsApp</a></p>
  <p><strong>TikTok:</strong> @mikoahem</p>
</div>
      </section>
      <Footer />
    </>
  );
}
