import type { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const SectionHeading: FC<Props> = ({ children }) => {
  return (
    <h1
      className="
        text-5xl md:text-6xl font-bold 
        text-cyan-300 leading-tight 
        drop-shadow-[0_0_12px_rgba(107,233,255,0.45)]
      "
    >
      {children}
    </h1>
  );
};

export default SectionHeading;
