import { type FC, useState } from "react";
import ButtonGlow from "../ui/ButtonGlow";
import { fetchUserRepos } from "../../lib/github";
import { supabase } from "../../lib/supabaseClient";
import { showSuccess, showError } from "../ui/toast";

interface RepoSelectorProps {
  selectedRepo?: string | null;
  onSelectRepo?: (repoName: string) => void;
}

const RepoSelector: FC<RepoSelectorProps> = ({ selectedRepo, onSelectRepo }) => {
  const [showList, setShowList] = useState(false);
  const [repos, setRepos] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleChooseRepo = async () => {
    setLoading(true);
    try {
      const fetchedRepos = await fetchUserRepos();
      setRepos(fetchedRepos);
      setShowList(!showList);
    } catch (err) {
      showError("Failed to fetch repos.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleRepoClick = async (repo: string) => {
    const confirmed = window.confirm(`Do you want to select "${repo}" as your repository?`);
    if (!confirmed) return;

    try {
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      if (!user?.id) throw new Error("User not logged in");

      // await supabase.from("profiles").upsert({
      //   id: user.id,
      //   selected_repo: repo,
      // });

      await supabase
      .from("profiles")
      .update({ selected_repo: repo })
      .eq("id", user.id);

      showSuccess(`Repo "${repo}" selected!`);
      onSelectRepo?.(repo);
      setShowList(false);
    } catch (err) {
      showError("Failed to save selected repo.");
      console.error(err);
    }
  };

  const handleCreateRepo = () => {
    alert("Create repo functionality coming soon!");
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <ButtonGlow onClick={handleCreateRepo}>Create Repo</ButtonGlow>
        <ButtonGlow onClick={handleChooseRepo} disabled={loading}>
          {loading ? "Loading..." : "Choose Repo"}
        </ButtonGlow>
        {/* {selectedRepo && <span className="text-white/70">Selected: {selectedRepo}</span>} */}
        <span className="text-white/70">
          {selectedRepo ? `Selected Repo: ${selectedRepo}` : "No repo selected"}
        </span>

      </div>

      {showList && (
        <div className="frosted-dark p-3 rounded-xl mt-2 space-y-2 max-w-sm">
          {repos.length === 0 && !loading && <div>No repos found.</div>}
          {repos.map((repo) => (
            <div
              key={repo}
              className="cursor-pointer hover:bg-white/10 p-2 rounded transition"
              onClick={() => handleRepoClick(repo)}
            >
              {repo}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RepoSelector;
