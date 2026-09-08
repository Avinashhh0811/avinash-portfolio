import skills from "../data/Skills";

const icons = ["💻", "🚀", "🗄️", "🛠️", "☁️", "📐"];

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="section-container wide-container">
        <div className="section-heading left-heading">
          <span className="section-kicker">MY TECHNOLOGIES</span>
          <h2>Skills &amp; <span>Tools</span></h2>
        </div>

        <div className="skills-grid">
          {skills.map((group, index) => (
            <article className={`skill-card ${index === 0 ? "featured-card" : ""}`} key={group.category}>
              <div className="skill-title"><span>{icons[index] || "⚙️"}</span><h3>{group.category}</h3></div>
              <div className="skill-list">
                {group.items.map((skill) => <span className="skill-tag" key={skill}>{skill.trim()}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
