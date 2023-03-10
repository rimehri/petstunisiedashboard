import { useAuth } from "../../hooks/auth/useAuth";
import { Navigate, Outlet } from "react-router-dom";
import Template from "../templates/dashboard";

const PrivateRoute = () => {
  const isAuthenticated = !!useAuth().token;

  if (!isAuthenticated) return <Navigate to="login" />;

  return (
    <Template>
      <Outlet />
    </Template>
  );
};

export default PrivateRoute;
