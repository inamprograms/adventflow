import { supabase } from "../lib/supabaseClient";
import { showError } from "../components/ui/toast";
import { config } from "../config";

export async function loginWithGithub() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: `${config.AFUrl}/auth/callback`,
      scopes: "repo user:email",
    }
  });

  if (error) {
    showError("Unable to start GitHub login.");
    // console.error(error);
  }
  return data;
}
