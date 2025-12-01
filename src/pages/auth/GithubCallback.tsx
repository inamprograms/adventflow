import { useEffect } from "react";
import { supabase } from "../../lib/supabaseClient";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/ui/Loader";
import { showSuccess, showError } from "../../components/ui/toast";
import { getGithubToken } from "../../lib/githubToken";


export default function GithubCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const fn = async () => {
      // 1) Check session
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        showError("Login failed. Please try again.");
        return;
      }

      if (!data.session) return;

      // 2) Retrieve the authenticated user
      const { data: userData } = await supabase.auth.getUser();
      const user = userData?.user;

      if (!user) {
        showError("Unable to fetch user details.");
        return;
      }

      // 3) Extract GitHub metadata
      const fullName = user.user_metadata.full_name;
      const avatarUrl = user.user_metadata.avatar_url;
      const githubUsername = user.user_metadata.user_name;
      const token = await getGithubToken();
      console.log(token);
      // 4) Save / Update in `profiles` table
      await supabase.from("profiles").upsert({
        id: user.id,
        full_name: fullName,
        github_username: githubUsername,
        avatar_url: avatarUrl,
        github_token: token
      });

      // 5) Store in localStorage for frontend quick access
      localStorage.setItem(
        "user",
        JSON.stringify({
          id: user.id,
          full_name: fullName,
          github_username: githubUsername,
          avatar_url: avatarUrl
        })
      );

      // 6) Notify + redirect
      showSuccess("Logged in successfully!");
      navigate("/workspace");
    };

    fn();
  }, []);

  return <Loader text="Finishing login…" />;
}
