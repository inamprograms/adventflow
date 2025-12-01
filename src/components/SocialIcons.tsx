const SocialIcons = () => {
  return (
    <div className="flex gap-4">
      <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10 transition">
        <span className="text-cyan-300">X</span>
      </div>
      <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10 transition">
        <span className="text-cyan-300">IG</span>
      </div>
      <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10 transition">
        <span className="text-cyan-300">LN</span>
      </div>
    </div>
  );
};

export default SocialIcons;
