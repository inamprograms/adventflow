import type { FC } from "react";

interface Props {
  active: string;
  onChange: (val: string) => void;
}

const sections = [
  { id: "puzzle", label: "Puzzle" },
  { id: "generate", label: "Generate" },
];

const SectionTabs: FC<Props> = ({ active, onChange }) => {
  return (
    <div className="flex gap-6 border-b border-white/10 pb-3">
      {sections.map((sec) => (
        <button
          key={sec.id}
          onClick={() => onChange(sec.id)}
          className={`pb-2 transition ${
            active === sec.id
              ? "text-cyan-300 border-b-2 border-cyan-300"
              : "text-subtle hover:text-cyan-200"
          }`}
        >
          {sec.label}
        </button>
      ))}
    </div>
  );
};

export default SectionTabs;
