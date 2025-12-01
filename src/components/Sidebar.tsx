import type { FC } from "react";
import folderIcon from "../assets/icons/folder.svg";
import aiIcon from "../assets/icons/ai.svg";
import githubIcon from "../assets/icons/github.svg";
// import socialIcon from "..//assets/icons/social.svg";
import logIcon from "../assets/icons/log.svg";

const Sidebar: FC = () => {
  const navItems = [
    { name: "Home", icon: folderIcon },
    { name: "Generate Project", icon: folderIcon },
    { name: "Solve with AI", icon: aiIcon },
    { name: "Your Solutions", icon: folderIcon },
    { name: "Publish to GitHub", icon: githubIcon },
    { name: "Settings", icon: logIcon },
  ];

  return (
    <aside className="w-64 min-h-screen bg-[#1c2333]/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col gap-6">
      <h2 className="text-cyan-300 text-2xl font-bold mb-4">AoC Dashboard</h2>
      <nav className="flex flex-col gap-3">
        {navItems.map((item) => (
          <div
            key={item.name}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#6be9ff]/10 cursor-pointer transition"
          >
            <img src={item.icon} alt={item.name} className="w-5 h-5" />
            <span className="text-[#8ea8c3] font-medium">{item.name}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
