import { Octokit } from "octokit";

export async function getRepos() {
  const token = process.env.GITHUB_TOKEN;
  const octokit = new Octokit({ auth: token });
  const response = await octokit.rest.repos.listForAuthenticatedUser({
    affiliation: "owner",
  });
  return response.data;
}
