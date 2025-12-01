// This uses the OAuth token from Supabase to fetch repos
// import { supabase } from "./supabaseClient";
import { getGithubToken } from "./githubToken";

export async function fetchUserRepos() {
  // const session = await supabase.auth.getSession();
  // const accessToken = session.data.session?.provider_token;
  const accessToken = await getGithubToken();
  
  if (!accessToken) return [];

  const res = await fetch("https://api.github.com/user/repos?per_page=100", {
    headers: {
      Authorization: `token ${accessToken}`,
      Accept: "application/vnd.github+json",
    },
  });

  if (!res.ok) return [];
  const data = await res.json();

  // return array of repo names
  return data.map((repo: any) => repo.name);
}