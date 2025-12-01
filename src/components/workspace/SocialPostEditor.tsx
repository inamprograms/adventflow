// src/components/workspace/SocialPostEditor.tsx
export default function SocialPostEditor({ payload }: { payload: any }) {
  if (!payload) return null;

  // const { year, day, part, language, notes } = payload;

  // const defaultPost = `I just solved Day ${day} Part ${part} of Advent of Code ${year} using ${language}! Here's my approach:\n${notes || "_No notes provided_"}`;
  const { generatedPost } = payload;

  return (
    <div className="space-y-4">
      <div className="text-subtle text-sm mb-2">Social Post Preview</div>
      <textarea
        className="w-full min-h-[120px] p-3 rounded-xl bg-[#0f172a]/50 border border-white/10 text-white"
        defaultValue={generatedPost || ""}
      />
      <div className="flex gap-3">
        <button className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-black font-bold">
          Copy Post
        </button>
      </div>
    </div>
  );
}
