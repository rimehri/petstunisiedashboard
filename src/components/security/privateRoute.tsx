import { useAuth } from "../../hooks/auth/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const isAuthenticated = !!useAuth().token;

  if (!isAuthenticated) return <Navigate to="login" />;

  return <Outlet />;
};

export default PrivateRoute;
