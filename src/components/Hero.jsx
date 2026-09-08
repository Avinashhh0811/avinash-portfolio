function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-profile">
          <div className="profile-wrapper">
            <img src="/profile.png" alt="Avinash Bachhav" />
            <span className="profile-status" aria-label="Available" />
          </div>
        </div>

        <p className="hero-greeting">Hello, I'm</p>
        <h1>Avinash <span>Bachhav</span></h1>
        <h2>Full Stack Java Developer</h2>
        <p className="hero-subtitle">
          Specializing in Spring Boot &amp; React | Building Scalable Enterprise Solutions
        </p>
        <p className="hero-description">
          Computer Science graduate and Java Full Stack Developer passionate about building reliable,
          scalable and user-friendly web applications using Java, Spring Boot, React, REST APIs and SQL.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="button button-primary">View Projects <span>↗</span></a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="button button-outline">
            View Resume <span>↗</span>
          </a>
        </div>
      </div>

      <div className="hero-contact-strip">
        <a href="mailto:avinashbachhav67@gmail.com" className="hero-contact-card">
          <span className="contact-symbol">✉</span>
          <span><small>Email</small><strong>avinashbachhav67@gmail.com</strong></span>
        </a>
        <a href="https://www.linkedin.com/in/avinash-bachhav-7871042a0/" target="_blank" rel="noopener noreferrer" className="hero-contact-card">
          <span className="contact-symbol linkedin-symbol">in</span>
          <span><small>LinkedIn</small><strong>Avinash Bachhav</strong></span>
        </a>
        <a href="https://github.com/Avinashhh0811" target="_blank" rel="noopener noreferrer" className="hero-contact-card">
          <span className="contact-symbol github-symbol">⌘</span>
          <span><small>GitHub</small><strong>Avinashhh0811</strong></span>
        </a>
        <div className="hero-contact-card">
          <span className="contact-symbol">⌖</span>
          <span><small>Location</small><strong>Pune, Maharashtra, India</strong></span>
        </div>
        <div className="hero-contact-card">
          <span className="contact-symbol available-symbol">●</span>
          <span><small>Availability</small><strong>Open to Opportunities</strong></span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
