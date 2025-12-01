import type { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout: FC = () => {
  return (
    <div className="page-bg">
      <div className="absolute inset-0 bg-noise opacity-[0.06] pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b1220]/40 to-[#0b1220] pointer-events-none"></div>
      
      <Header />

      <main className="relative z-10 container-xl px-4 md:px-8 py-6">
        <Outlet /> {/* ← Child pages will render here */}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
