import { useEffect, useState } from "react";
import { getGitHubProjects } from "../services/githubService";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;
    getGitHubProjects()
      .then((data) => { if (!cancelled) setProjects(data); })
      .catch(() => { if (!cancelled) setError("Unable to load GitHub projects right now."); })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, []);

  return (
    <section id="projects" className="section projects">
      <div className="section-container wide-container">
        <div className="section-heading left-heading">
          <span className="section-kicker">MY WORK</span>
          <h2>GitHub <span>Projects</span></h2>
        </div>

        {loading && <div className="projects-state">Loading projects...</div>}
        {error && <div className="projects-state error-state">{error}</div>}

        {!loading && !error && (
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className={`project-card ${index === 1 ? "hover-demo" : ""}`} key={project.id}>
                <div className="project-topline">
                  <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
                  {project.language && <span className="language-pill">{project.language}</span>}
                </div>
                <h3>{project.name.replaceAll("-", " ")}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.language && <span>{project.language}</span>}
                  {project.extraTags?.map((tag) => <span key={tag}>{tag}</span>)}
                  {project.stars > 0 && <span>⭐ {project.stars}</span>}
                </div>
                <div className="project-actions">
                  <a href={project.htmlUrl} target="_blank" rel="noopener noreferrer">⌘&nbsp; View on GitHub <span>↗</span></a>
                  {project.homepage && <a className="live-link" href={project.homepage} target="_blank" rel="noopener noreferrer">Live Demo <span>↗</span></a>}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
