import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import Login from "../pages/Login/Login";
import AuthLayout from "../shared/layouts/AuthLayout";
import MainLayout from "../shared/layouts/MainLayout";

const Router = () => {
    return (
      <Routes>
        {/* auth layout */}
        <Route element={<AuthLayout />}>
          <Route path={routes.login} element={<Login />} />
          <Route path={routes.signup} element={<div>signup</div>} />
        </Route>
  
        {/* main layout */}
        <Route element={<MainLayout />}>
          <Route path={routes.default} element={<div className="text-red-300">default</div>} />
          <Route path={routes.main} element={<div>home</div>} />
        </Route>
  
      </Routes>
    );
  };
  
  export default Router;