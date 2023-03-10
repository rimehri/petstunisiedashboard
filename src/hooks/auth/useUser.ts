import jwtDecode from "jwt-decode";
import { UserPayload } from "../../types/api";
import { useAuth } from "./useAuth";

const useUser = () => {
  const { token } = useAuth();

  if (!token) {
    throw new Error("User not authenticated");
  }

  return jwtDecode<UserPayload>(token);
};

export default useUser;
