import type { FC, ReactNode, ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick?: () => void;
}

const ButtonGlow: FC<Props> = ({ children, onClick, disabled, ...rest }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        px-6 py-3 rounded-full 
        bg-[#1c2333]/60 border border-white/10 
        text-cyan-300 font-medium 
        hover:border-cyan-300/40 
        hover:shadow-[0_0_15px_rgba(107,233,255,0.45)] 
        transition-all duration-300 
        flex items-center gap-2
        ${disabled ? "opacity-50 cursor-not-allowed hover:border-white/10 hover:shadow-none" : ""}
      `}
      {...rest}
    >
      {children}
    </button>
  );
};

export default ButtonGlow;
