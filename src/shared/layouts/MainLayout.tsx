import { Outlet } from "react-router-dom";
import classNameMerge from "../utils/classNameMerge";
import type { ReactNode } from "react";

const MainLayout = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <>
      <div
        className={classNameMerge(
          `font-pretendard flex h-fit w-full`,
          className
        )}
      >
        {/* main content area */}
        <div className="ml-[265px] h-fit flex-1">
          <div className="mt-[75px] flex w-full justify-center px-[17.3%]">
            {children || <Outlet />}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
