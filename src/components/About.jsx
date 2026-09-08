function About() {
  return (
    <section id="about" className="section about">
      <div className="section-container">
        <div className="section-heading left-heading">
          <span className="section-kicker">ABOUT ME</span>
          <h2>About <span>Me</span></h2>
        </div>

        <div className="about-grid">
          <div className="about-copy">
            <h3>Passionate about building modern web applications.</h3>
            <p>
              I'm Avinash Bachhav, a Java Full Stack Developer who enjoys building reliable,
              scalable and user-friendly web applications.
            </p>
            <p>
              I work with Java, Spring Boot, React, REST APIs, SQL and modern web development
              technologies. I focus on writing clean code and continuously improving my technical skills through practical projects.
            </p>
            <p>
              My goal is to grow as a software developer while contributing to real-world projects and solving meaningful problems.
            </p>
          </div>

          <div className="about-highlights">
            <article className="about-card"><span>01</span><div><h4>Backend Development</h4><p>Building REST APIs and backend applications using Java and Spring Boot.</p></div></article>
            <article className="about-card"><span>02</span><div><h4>Frontend Development</h4><p>Creating responsive and interactive interfaces using React and modern JavaScript.</p></div></article>
            <article className="about-card"><span>03</span><div><h4>Problem Solving</h4><p>Improving my development skills through projects, debugging and continuous learning.</p></div></article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
