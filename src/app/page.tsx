import { getRepos } from "@/lib/github";

export default async function Home() {
  const repos = await getRepos();

  return (
    <main style={{ padding: "0px 20px" }}>
      <h1 style={{ fontWeight: "bold" }}>Watashi no Git</h1>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.full_name}
            </a>
            ({repo.created_at})
          </li>
        ))}
      </ul>
    </main>
  );
}
