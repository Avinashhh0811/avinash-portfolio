function Experience() {
  const experiences = [
    {
      date: "2025 - 2026",
      title: "Java Backend Developer",
      company: "Profound Edutech Pvt. Ltd. — Pune, India",
      points: [
        "Developed 15+ RESTful APIs using Java, Spring Boot, JPA/Hibernate and MySQL.",
        "Worked on backend development involving CRUD operations, database integration and REST API implementation.",
        "Developed and worked with microservices-based applications as part of internship assignments.",
        "Implemented and tested REST endpoints using Postman.",
        "Worked with SQL queries and MySQL database operations, including debugging application and database errors.",
        "Followed Controller, Service and Repository architecture for backend development.",
      ],
    },
    {
      date: "January 2026",
      title: "Software Engineering Job Simulation",
      company: "JPMorgan Chase & Co. — Forage",
      points: [
        "Worked with REST APIs and backend integration as part of the Software Engineering job simulation.",
        "Executed and analyzed 8+ REST APIs and worked on Apache Kafka and backend integration tasks.",
        "Worked on backend troubleshooting and improved response time during the simulation.",
      ],
    },
  ];

  return (
    <section id="experience" className="section experience">
      <div className="section-container">
        <div className="section-heading left-heading">
          <span className="section-kicker">MY EXPERIENCE</span>
          <h2>Experience &amp; <span>Training</span></h2>
        </div>

        <div className="experience-list">
          {experiences.map((item, index) => (
            <article className={`experience-card ${index === 0 ? "featured-card" : ""}`} key={item.title}>
              <div className="experience-top">
                <div><h3>{item.title}</h3><h4>{item.company}</h4></div>
                <span className="date-badge">{item.date}</span>
              </div>
              <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
