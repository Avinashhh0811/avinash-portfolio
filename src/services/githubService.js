const GITHUB_USERNAME = "Avinashhh0811";

function inferTags(repo) {
  const tags = [];
  const text = `${repo.name} ${repo.description || ""}`.toLowerCase();
  if (text.includes("spring")) tags.push("Spring Boot");
  else if (text.includes("react")) tags.push("React");
  else if (text.includes("sql") || text.includes("mysql")) tags.push("SQL");
  else if (text.includes("docker")) tags.push("Docker");
  return tags.slice(0, 2);
}

export async function getGitHubProjects() {
  const response = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?type=owner&sort=updated&per_page=100`,
    { headers: { Accept: "application/vnd.github+json" } }
  );

  if (!response.ok) throw new Error(`GitHub API Error: ${response.status}`);

  const repositories = await response.json();
  return repositories
    .filter((repo) => !repo.fork && !repo.archived)
    .map((repo) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description || "Project built as part of my software development journey.",
      htmlUrl: repo.html_url,
      homepage: repo.homepage,
      language: repo.language,
      stars: repo.stargazers_count,
      updatedAt: repo.updated_at,
      extraTags: inferTags(repo),
    }));
}
