import { useState } from "react";

function Contacts() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const message = form.get("message");
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:avinashbachhav67@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="section contact">
      <div className="section-container wide-container">
        <div className="section-heading left-heading">
          <span className="section-kicker">GET IN TOUCH</span>
          <h2>Contact <span>Me</span></h2>
        </div>

        <div className="contact-layout">
          <form className="message-card featured-card" onSubmit={handleSubmit}>
            <div className="contact-card-heading"><span>▢</span><h3>Send a Message</h3></div>
            <label>Name *<input name="name" required placeholder="Your name" /></label>
            <label>Email *<input name="email" required type="email" placeholder="your.email@example.com" /></label>
            <label>Message *<textarea name="message" required placeholder="Tell me about your project or inquiry..." /></label>
            <button type="submit">{sent ? "Opening Email…" : "Send Message"} <span>➤</span></button>
          </form>

          <aside className="contact-info-card">
            <div className="contact-card-heading"><h3>Contact Information</h3></div>
            <div className="contact-details">
              <a href="mailto:avinashbachhav67@gmail.com"><span>✉</span><div><strong>Email</strong><p>avinashbachhav67@gmail.com</p></div></a>
              <div><span>⌖</span><div><strong>Location</strong><p>Pune, Maharashtra, India</p></div></div>
              <a href="https://www.linkedin.com/in/avinash-bachhav-7871042a0/" target="_blank" rel="noopener noreferrer"><span>in</span><div><strong>LinkedIn</strong><p>Avinash Bachhav</p></div></a>
              <a href="https://github.com/Avinashhh0811" target="_blank" rel="noopener noreferrer"><span>⌘</span><div><strong>GitHub</strong><p>Avinashhh0811</p></div></a>
            </div>
            <div className="contact-note">Open to software development opportunities, internships and interesting projects.</div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
