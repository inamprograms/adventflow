import { useState } from "react";
import { showError } from "../components/ui/toast";
import { config } from "../config";

export function useGeneratePost() {
  const [loadingPost, setLoadingPost] = useState(false);

  const generatePost = async (payload: any) => {
    setLoadingPost(true);
    try {
      const res = await fetch(`${config.apiBaseUrl}/social/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to generate post");
      return await res.json();
    } catch (err: any) {
      showError(err.message || "Error generating post");
      return null;
    } finally {
      setLoadingPost(false);
    }
  };

  return { generatePost, loadingPost };
}
