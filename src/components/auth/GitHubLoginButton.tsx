import { loginWithGithub } from "../../auth/loginWithGithub";
import ButtonGlow from "../ui/ButtonGlow";

export default function GitHubLoginButton() {
  return (
    <ButtonGlow onClick={() => loginWithGithub()}>
      Continue with GitHub
    </ButtonGlow>
  );
}
