import { type FC } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import { supabase } from "../lib/supabaseClient";
import { LogOut } from "lucide-react";
import { showSuccess } from "../components/ui/toast";
import ButtonGlow from "./ui/ButtonGlow";

const Header: FC = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUser();

  const navItems = ["Home", "Create Project", "Solutions", "Publish", "Settings"];

  const handleLogout = async () => {
    await supabase.auth.signOut();
    localStorage.removeItem("user");
    setUser(null);
    showSuccess("You have been logged out.");
    navigate("/login");
  };

  return (
    <header className="w-full flex justify-center">
      <div className="container-xl frosted-dark px-8 py-3 rounded-t-2xl shadow-top flex items-center justify-between">

        {/* Logo */}
        <div
          className="text-white text-2xl font-bold cursor-pointer hover:text-cyan-400 transition"
          onClick={() => navigate("/")}
        >
          Advent Flow
        </div>

        {/* Navigation */}
        <nav className="flex gap-6">
          {navItems.map((item) => (
            <div
              key={item}
              className="nav-item"
              onClick={() => item === "Home" && navigate("/")}
            >
              {item}
            </div>
          ))}
        </nav>

        {/* User section */}
        <div className="flex items-center gap-4">

          {/* Username */}
          <span className="text-white text-sm">
            {user?.github_username || "Guest"}
          </span>

          {/* Avatar */}
          <img
            src={
              user?.avatar_url ||
              `https://api.dicebear.com/7.x/shapes/svg?seed=${user?.github_username || "guest"}`
            }
            className="w-8 h-8 rounded-full border border-white/20"
          />

          {/* Separator */}
          <span className="w-px h-6 bg-white/20" />

          {/* Auth Controls */}
          {user ? (
            <>
              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="p-2 rounded-lg hover:bg-white/10 transition text-red-400 hover:text-red-300"
                title="Logout"
              >
                <LogOut size={18} />
              </button>
            </>
          ) : (
            <>
              <ButtonGlow onClick={() => navigate("/login")} >Login</ButtonGlow>
            </>
          )}

        </div>

      </div>
    </header>
  );
};

export default Header;
