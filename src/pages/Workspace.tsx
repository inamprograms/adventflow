import SectionTabs from "../components/workspace/SectionTabs";
import PuzzleSection from "../components/workspace/PuzzleSection";
import GenerateSection from "../components/workspace/GenerateSection";
import { useState } from "react";

const Workspace = () => {
  const [activeTab, setActiveTab] = useState("puzzle");

  return (
    <div className="space-y-6">

      <SectionTabs active={activeTab} onChange={setActiveTab} />

      {/* ... render */}
      <div className="frosted-light rounded-2xl p-6 shadow-lg">
        {activeTab === "puzzle" && <PuzzleSection />}
        {activeTab === "generate" && <GenerateSection />}
        {/* Other tabs will be added later */}
      </div>

    </div>
  );
};

export default Workspace;
