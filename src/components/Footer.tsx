import type { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="w-full flex justify-center">
      <div className="container-xl frosted-dark px-8 py-6 rounded-t-2xl shadow-bottom flex flex-col lg:flex-row items-center justify-between">

        <div className="text-subtle text-sm">
          © 2025 Advent Flow. All rights reserved.
        </div>

        <div className="text-subtle text-sm text-center">
          Built with <span className="text-red-500">❤️</span> by Inam ul Rehman
        </div>

        <div className="flex gap-4 mt-4 lg:mt-0">
          <a href="#" className="hover:text-cyan-300 transition">Privacy</a>
          <a href="#" className="hover:text-cyan-300 transition">Terms</a>
          <a href="#" className="hover:text-cyan-300 transition">Contact</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
