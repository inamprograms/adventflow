import type { FC } from "react";

const Loader: FC<{ text?: string }> = ({ text = "Loading…" }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#0b1220]/70 backdrop-blur-sm z-50">
      <div className="flex flex-col items-center gap-4">
        {/* Glow spinning circle */}
        <div className="w-12 h-12 border-4 border-cyan-300 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-cyan-300 font-medium">{text}</p>
      </div>
    </div>
  );
};

export default Loader;
