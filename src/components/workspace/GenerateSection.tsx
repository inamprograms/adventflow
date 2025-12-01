// src/components/workspace/SolutionSection.tsx
import { useState, useEffect } from "react";
import SectionHeading from "../SectionHeading";
import SolutionUploader from "./SolutionUploader";
import FolderPreview from "./FolderPreview";
import ReadmePreview from "./ReadmePreview";
import SocialPostEditor from "./SocialPostEditor";
import RepoSelector from "./RepoSelector";
import { supabase } from "../../lib/supabaseClient";
import { usePublishSolution } from "../../hooks/usePublishSolution";
import { useGeneratePost } from "../../hooks/useGeneratePost";

export default function SolutionSection() {
  const [payload, setPayload] = useState<any | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [showSocial, setShowSocial] = useState(false);
  const [selectedRepo, setSelectedRepo] = useState<string | null>(null); // track repo
  const { publishSolution, loading } = usePublishSolution();
  const { generatePost, loadingPost } = useGeneratePost();

  const handlePreview = (data: any) => {
    setPayload(data);
    setShowPreview(true);
  };

  const handleGeneratePost = async (data: any) => {
    setShowSocial(false);
    setPayload(null); 

    const result = await generatePost(data);
    if (!result) return;

    setPayload({ ...data, generatedPost: result.post });
    setShowSocial(true);
  };

  const handlePublishSolution = async (data: any) => {
    setPayload(data);

    if (!selectedRepo) {
      alert("Please select a repository first!");
      return;
    }

    // Fetch the current logged-in user from Supabase
    const { data: userData } = await supabase.auth.getUser();
    const user = userData?.user;
    if (!user) {
      alert("User not logged in!");
      return;
    }

    const userPayload = { ...data, user_id: user.id };
    await publishSolution(userPayload);
  };

  useEffect(() => {
    async function loadSelectedRepo() {
      const { data: userData } = await supabase.auth.getUser();
      const user = userData?.user;
      if (!user) return;

      const { data, error } = await supabase
        .from("profiles")
        .select("selected_repo")
        .eq("id", user.id)
        .single();

      if (data?.selected_repo) {
        setSelectedRepo(data.selected_repo);
      }
    }

    loadSelectedRepo();
  }, []);

  return (
    <div className="space-y-6">
      <SectionHeading>Publish Solution & Share</SectionHeading>

      {/* Repo buttons */}
      <RepoSelector selectedRepo={selectedRepo} onSelectRepo={setSelectedRepo} />

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Left column: Uploader */}
        <div className="space-y-4">
          <SolutionUploader
            initialYear={String(new Date().getFullYear())}
            onPreview={handlePreview}
            onPublishSolution={handlePublishSolution} // use new clearly named prop
            onGeneratePost={handleGeneratePost}
            loadingPublish={loading}
            loadingPost={loadingPost}
          />
        </div>

        {/* Right column: Preview */}
        {showPreview && payload && (
          <div className="space-y-4">
            <FolderPreview payload={payload} />
            <ReadmePreview payload={payload} />
          </div>
        )}
      </div>

      {/* Social Post Section */}
      {showSocial && payload && (
        <div className="mt-6">
          <SocialPostEditor payload={payload} />
        </div>
      )}
    </div>
  );
}
