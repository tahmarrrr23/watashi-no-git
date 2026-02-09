import { Octokit } from "octokit";

export async function getRepos() {
  const token = process.env.GITHUB_TOKEN;
  const octokit = new Octokit({ auth: token });
  const res = await octokit.rest.repos.listForAuthenticatedUser({
    affiliation: "owner",
  });
  return res.data;
}

export async function getStars() {
  const token = process.env.GITHUB_TOKEN;
  const octokit = new Octokit({ auth: token });
  const res = await octokit.rest.activity.listReposStarredByAuthenticatedUser();
  return res.data;
}
