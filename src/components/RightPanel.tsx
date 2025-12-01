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
        <div className="text-lg text-cyan-300">🔥 Insights - highlights Advent Flow features like "AI Automation Hub</div>
        <div className="flex gap-2">
          <div className="w-2 h-2 bg-cyan-300 rounded-full"></div>
          <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
        </div>
      </div>

      {/* Insight Grid */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <div className="text-cyan-300">Tone</div>
          <div className="text-sm text-[#8ea8c3]">Reflective</div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <div className="text-cyan-300">Pacing</div>
          <div className="text-sm text-[#8ea8c3]">Steady</div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <div className="text-cyan-300">Structure</div>
          <div className="text-sm text-[#8ea8c3]">Balanced</div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <div className="text-cyan-300">Viewpoint</div>
          <div className="text-sm text-[#8ea8c3]">Close Third</div>
        </div>
      </div>

      {/* Featured Content Block */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <div className="text-cyan-300 mb-2">Featured Content</div>
        <p className="text-sm text-[#8ea8c3] leading-relaxed">
          Let’s craft a striking homepage interface that embodies the essence of your brand.
        </p>
      </div>
    </div>
  );
};

export default RightPanel;
