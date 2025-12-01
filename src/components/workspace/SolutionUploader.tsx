// src/components/workspace/SolutionUploader.tsx
import { useState } from "react";
import YearDaySelector from "./YearDaySelector";
import ButtonGlow from "../ui/ButtonGlow";

interface Payload {
  year: string;
  day: string;
  part: string;
  language: string;
  code: string;
  approach: string;
  extension: string;
}

export default function SolutionUploader({
  initialYear = "",
  onPreview,
  onGeneratePost,
  onPublishSolution,
  loadingPublish = false,
  loadingPost = false,

}: {
  initialYear?: string;
  onPreview: (payload: Payload) => void;
  onGeneratePost?: (payload: Payload) => void;
  onPublishSolution?: (payload: Payload) => void;
  loadingPublish?: boolean;
  loadingPost?: boolean;

}) {
  const [year, setYear] = useState(initialYear);
  const [day, setDay] = useState("");
  const [part, setPart] = useState("1");
  const [language, setLanguage] = useState("python");
  const [code, setCode] = useState("");
  const [approach, setApproach] = useState("");
  // const isPreviewDisabled = !year || !day || !code.trim();
  const isPreviewDisabled = true;

  const EXT_MAP: Record<string, string> = {
    python: "py",
    javascript: "js",
    typescript: "ts",
    cpp: "cpp",
    rust: "rs",
    go: "go",
  };

  return (
    <div className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <YearDaySelector year={year} day={day} setYear={setYear} setDay={setDay} />

        <div className="flex gap-3">
          <div className="flex-1">
            <label className="text-subtle text-sm">Part</label>
            <select
              value={part}
              onChange={(e) => setPart(e.target.value)}
              className="w-full rounded-xl px-3 py-2 bg-[#1c2333]/60 border border-white/10 text-white"
            >
              <option value="1">Part 1</option>
              <option value="2">Part 2</option>
            </select>
          </div>

          <div className="flex-1">
            <label className="text-subtle text-sm">Language</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full rounded-xl px-3 py-2 bg-[#1c2333]/60 border border-white/10 text-white"
            >
              <option value="python">Python</option>
              <option value="javascript">JavaScript</option>
              <option value="typescript">TypeScript</option>
              <option value="cpp">C++</option>
              <option value="rust">Rust</option>
              <option value="go">Go</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <label className="text-subtle text-sm">Paste Solution Code</label>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Paste your solution here..."
          className="w-full min-h-[160px] rounded-xl p-3 bg-[#0f172a]/50 border border-white/10 text-white font-mono text-sm"
        />
      </div>

      <div>
        <label className="text-subtle text-sm">Your Approach (optional)</label>
        <textarea
          value={approach}
          onChange={(e) => setApproach(e.target.value)}
          placeholder="Add your approach, optimizations, or anything to appear in day README"
          className="w-full min-h-[80px] rounded-xl p-3 bg-[#0f172a]/50 border border-white/10 text-white text-sm"
        />
      </div>

      <div className="flex gap-3">
        <ButtonGlow
          onClick={() =>
            onPreview && onPreview({ year, day, part, language, code, approach, extension: EXT_MAP[language] ?? "txt", })
          }
          disabled={isPreviewDisabled}
        >
          Preview Files
        </ButtonGlow>

        <ButtonGlow
          onClick={() =>
            onPublishSolution && onPublishSolution({ year, day, part, language, code, approach, extension: EXT_MAP[language] ?? "txt", })
          }
          disabled={loadingPublish}
        >
          {loadingPublish ? "Publishing..." : "Publish Solution"}
        </ButtonGlow>

        <ButtonGlow
          onClick={() => {
            onGeneratePost && onGeneratePost({
                year, day, part, language, code, approach, extension: EXT_MAP[language] ?? "txt", });
          }}
          disabled={loadingPost}
          >
          {loadingPost ? "Generating..." : "Generate Post"}
        </ButtonGlow>

      </div>
    </div>
  );
}
