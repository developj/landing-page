import { Outlet } from "react-router-dom";
import classNameMerge from "../utils/classNameMerge";
import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <>
     {/* Navbar */}
      <Navbar />
      <div
        className={classNameMerge(
          `font-pretendard flex h-fit w-full`,
          className
        )}
      >
       
        {/* main content area */}
        <div className="h-fit flex-1">
          <div className="mt-[75px] flex w-full justify-center px-8 sm:px-12 md:px-16 lg:px-10 xl:px-16">
            {children || <Outlet />}
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default MainLayout;
