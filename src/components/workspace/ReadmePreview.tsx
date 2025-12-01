// src/components/workspace/ReadmePreview.tsx
import MarkdownViewer from "./MarkdownViewer";

export default function ReadmePreview({ payload }: { payload: any | null }) {
  if (!payload || !payload.year || !payload.day) {
    return <div className="text-subtle">README preview will appear after preview.</div>;
  }

  const generatedREADME = `# Day ${payload.day} — Solution (${payload.language})
  
**Part:** ${payload.part}
**Language:** ${payload.language}  

## Problem
*(Problem statement will be fetched from AoC — placeholder here.)*

## Explanation
*(AI explanation / manual explanation will appear here.)*

## My approach
${payload.notes || "_No notes provided._"}

## Files
- part${payload.part}.${payload.language}
`;

  return (
    <div>
      <div className="text-subtle text-sm mb-2">README Preview</div>
      <div className="bg-[#0f172a]/50 border border-white/10 rounded-xl p-4">
        <MarkdownViewer content={generatedREADME} />
      </div>
    </div>
  );
}
