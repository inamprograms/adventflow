// src/components/workspace/FolderPreview.tsx
export default function FolderPreview({ payload }: { payload: any | null }) {
  if (!payload || !payload.year || !payload.day) {
    return <div className="text-subtle">Folder preview will appear after preview.</div>;
  }

  const dayNum = String(payload.day).padStart(2, "0");
  const folder = `${payload.year}/day${dayNum}`;

  const extMap: Record<string, string> = {
    python: ".py",
    javascript: ".js",
    typescript: ".ts",
    cpp: ".cpp",
    rust: ".rs",
    go: ".go",
  }; 

  const ext = extMap[payload.language] ?? ".txt";

  return (
    <div className="bg-[#0f172a]/40 border border-white/10 rounded-xl p-4">
      <div className="text-sm text-subtle mb-3">Folder structure</div>
      <div className="font-mono text-sm text-white">
        <div>{folder}/</div>
        <div className="pl-4">part{payload.part}{ext}</div>
        {payload.notes && <div className="pl-4">NOTES_part{payload.part}.md</div>}
        <div className="pl-4">README.md</div>
      </div>
    </div>
  );
}
