import { useState } from "react";
import { showSuccess, showError } from "../components/ui/toast";
import { config } from "../config";

export function usePublishSolution() {
  const [loading, setLoading] = useState(false);

  const publishSolution = async (payload: any) => {
    setLoading(true);
    try {
      // console.log("Payload being sent:", payload);
      const res = await fetch(`${config.apiBaseUrl}/publish/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to publish solution");

      const data = await res.json();
      showSuccess("Solution published successfully!");
      return data;
    } catch (err: any) {
      // console.error(err);
      showError(err.message || "Publish failed");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { publishSolution, loading };
}
