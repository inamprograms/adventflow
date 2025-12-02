import { useNavigate } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import ButtonGlow from "../components/ui/ButtonGlow";
import SocialIcons from "../components/SocialIcons";
import RightPanel from "../components/RightPanel";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-4 lg:px-8 py-4 gap-6 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white">

      <div className="flex-1 space-y-4 lg:space-y-6 max-w-lg">
        <SectionHeading>
          Advent Flow - 
             <br /> 
             Stay Organized, Share Instantly, Save time

        </SectionHeading>

        <p className="text-subtle text-lg">
          Solving Advent of Code puzzles is fun, but managing code, READMEs, GitHub, 
          and social posts can be time consuming. AdventFlow organizes your solutions,
          updates GitHub automatically, and helps you generate ready to share posts
          so you can focus on solving puzzles while keeping everything structured 
          and shareable.
        </p>

        <div className="flex gap-3 mt-3">
          <ButtonGlow onClick={() => navigate("/workspace")}>Start Creating →</ButtonGlow>
          <ButtonGlow>Explore Features</ButtonGlow>
        </div>

        <div className="pt-4">
          <SocialIcons />
        </div>
      </div>

      <div className="frosted-light rounded-3xl p-8 md:p-10 shadow-[0_10px_25px_rgba(0,0,0,0.35)] animate-float">
        <RightPanel />
      </div>

    </div>
  );
};

export default Home;
