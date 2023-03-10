import {
  BrowserRouter,
  Route,
  Routes as ReactRoutes,
  Navigate,
} from "react-router-dom";
import PrivateRoute from "../components/security/privateRoute";
import Home from "../pages";
import SignIn from "../pages/auth/signIn";

export default function Routes() {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/" element={<PrivateRoute />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/login" element={<SignIn />} />
        <Route path="*" element={<Navigate to="/" />} />
      </ReactRoutes>
    </BrowserRouter>
  );
}
