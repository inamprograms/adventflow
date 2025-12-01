import { useState } from "react";
import SectionHeading from "../SectionHeading";
import ButtonGlow from "../ui/ButtonGlow.tsx";
import MarkdownViewer from "./MarkdownViewer";
import YearDaySelector from "./YearDaySelector";
import { fetchPuzzle, explainPuzzle } from "../../api/aocAPI.ts";


const PuzzleSection = () => {
  const [year, setYear] = useState("");
  const [day, setDay] = useState("");
  const [puzzleText, setPuzzleText] = useState("");
  const [explanation, setExplanation] = useState("");
  const [fetching, setFetching] = useState(false);
  const [explaining, setExplaining] = useState(false);

  const handleFetchPuzzle = async () => {
  if (!year || !day) return alert("Select year & day");
  setFetching(true);
  try {
    const data = await fetchPuzzle(year, day);
    setPuzzleText(data.puzzle);
  } finally {
    setFetching(false);
  }
};

  const handleExplainPuzzle = async () => {
  if (!puzzleText) return alert("Fetch puzzle first!");
  setExplaining(true);
  try {
    const data = await explainPuzzle(puzzleText);
    setExplanation(data.explanation);
  } finally {
    setExplaining(false);
  }
};


  return (
    <div className="space-y-6">

      <SectionHeading>Fetch & Understand Puzzle</SectionHeading>

      {/* Year + Day */}
      <YearDaySelector
        year={year}
        day={day}
        setYear={setYear}
        setDay={setDay}
      />

      {/* Fetch Puzzle Button */}
      <ButtonGlow onClick={handleFetchPuzzle} disabled={fetching}>
        {fetching ? "Fetching..." : "Fetch Puzzle"}
      </ButtonGlow>

      {/* Puzzle Content Viewer */}
      <MarkdownViewer content={puzzleText} />

      {/* Explain Puzzle */}
      <div className="pt-2">
        <ButtonGlow onClick={handleExplainPuzzle} disabled={explaining}>
         {explaining ? "Explaining..." : "Explain Puzzle"}
        </ButtonGlow>
      </div>

      {/* Explanation Viewer */}
      {explanation && (
        <div className="bg-[#1c2333]/40 border border-white/10 rounded-xl p-4">
          <h3 className="text-cyan-300 mb-2 font-semibold">Explanation</h3>
          <MarkdownViewer content={explanation} />
        </div>
      )}

    </div>
  );
};
export default PuzzleSection;