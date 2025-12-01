import { supabase } from "../lib/supabaseClient";
import { showError } from "../components/ui/toast";

export async function loginWithGithub() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: "http://localhost:5173/auth/callback",
      scopes: "repo user:email",
    }
  });

  if (error) {
    showError("Unable to start GitHub login.");
    // console.error(error);
  }
  return data;
}
