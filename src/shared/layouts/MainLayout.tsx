import { Outlet } from "react-router-dom";
import classNameMerge from "../utils/classNameMerge";
import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HeroSection from "../../features/main/components/organisms/Hero/HeroSection";

const MainLayout = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <div className="w-full relative">
     {/* Navbar */}
      <Navbar />
      <HeroSection />
      <div
        className={classNameMerge(
          `font-pretendard flex flex-col h-fit w-full`,
          className
        )}
      >
     
        {/* main content area */}
        <div className="h-fit w-full">
          <div className="mt-[40px] flex w-full justify-center sm:px-12 md:px-8 lg:px-8 xl:px-8">
            {children || <Outlet />}
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
