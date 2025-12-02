const RightPanel = () => {
  return (
    <div
      className="
        bg-[#1c2333]/40 backdrop-blur-xl 
        border border-white/10 rounded-3xl 
        p-8 md:p-10 
        shadow-[0_0_25px_rgba(0,0,0,0.4)]
        animate-float
      "
    >
      {/* Top Icons Row */}
      <div className="flex justify-between items-center mb-8">
        <div className="text-lg text-cyan-300"> AdventFlow - AI Powered Automation Toolkit </div>
        <div className="flex gap-2">
          <div className="w-2 h-2 bg-cyan-300 rounded-full"></div>
          <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
        </div>
      </div>

      {/* Insight Grid */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <div className="text-cyan-300">Fetch & Summarize</div>
          <div className="text-sm text-[#8ea8c3]">Auto fetch and summarize puzzles</div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <div className="text-cyan-300">Organize Files</div>
          <div className="text-sm text-[#8ea8c3]">Auto-create structured solution files</div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <div className="text-cyan-300">Instant Repo Sync</div>
          <div className="text-sm text-[#8ea8c3]">Instant Auto-publish solutions</div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <div className="text-cyan-300">Generate Shareable Posts</div>
          <div className="text-sm text-[#8ea8c3]">Generate ready to share posts</div>
        </div>
      </div>

      {/* Featured Content Block */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <div className="text-cyan-300 mb-2">Featured Content</div>
        <p className="text-sm text-[#8ea8c3] leading-relaxed">
          AdventFlow never solves puzzles | <span className="text-cyan-300 font-semibold">Understand - Organize - Generate</span>
        </p>
      </div>
    </div>
  );
};

export default RightPanel;
