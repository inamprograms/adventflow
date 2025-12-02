import type { FC } from "react";

interface Props {
  year: string;
  day: string;
  setYear: (y: string) => void;
  setDay: (d: string) => void;
}

const YearDaySelector: FC<Props> = ({ year, day, setYear, setDay }) => {
  const years = Array.from({ length: 11 }, (_, i) => 2015 + i).reverse();
  const days = Array.from({ length: 25 }, (_, i) => i + 1);

  return (
    <div className="flex gap-4">

      {/* Year dropdown */}
      <select
        value={year}
        onChange={(e) => setYear(e.target.value)}
        className="bg-[#1c2333]/60 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-2 text-white"
      >
        <option value="">Year</option>
        {years.map((y) => (
          <option key={y} value={y}>{y}</option>
        ))}
      </select>

      {/* Day dropdown */}
      <select
        value={day}
        onChange={(e) => setDay(e.target.value)}
        className="bg-[#1c2333]/60 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-2 text-white"
      >
        <option value="">Day</option>
        {days.map((d) => (
          <option key={d} value={d}>Day {d}</option>
        ))}
      </select>
      
    </div>
  );
};

export default YearDaySelector;
