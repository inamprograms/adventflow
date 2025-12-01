import { supabase } from "./supabaseClient";

export async function getGithubToken() {
  const { data } = await supabase.auth.getSession();
  return data.session?.provider_token; // GitHub OAuth token
}
