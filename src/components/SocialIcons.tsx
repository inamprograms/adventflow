import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiHuggingface } from "react-icons/si";

const SocialIcons = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      {/* Label with lines */}
      <div className="flex items-center w-full">
        <div className="flex-grow h-px bg-white/10"></div>
        <span className="px-3 text-sm text-[#8ea8c3]">Connect</span>
        <div className="flex-grow h-px bg-white/10"></div>
      </div>

      {/* Icons */}
      <div className="flex gap-4">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/inamulrehman"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10 transition"
        >
          <FaLinkedin className="text-cyan-300 text-lg" />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/inamprograms"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10 transition"
        >
          <FaGithub className="text-cyan-300 text-lg" />
        </a>

        {/* Hugging Face */}
        <a
          href="https://huggingface.co/inam09"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10 transition"
        >
          <SiHuggingface className="text-cyan-300 text-lg" />
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;
