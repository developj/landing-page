import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
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
          <Route path={routes.default} element={<Home />} />
          <Route path={routes.main} element={<div>home</div>} />
        </Route>
  
      </Routes>
    );
  };
  
  export default Router;