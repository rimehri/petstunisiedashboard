import { Typography } from "@mui/material";
import WithRoles from "../hoc/withRoles";
import useUser from "../hooks/auth/useUser";

const Home = () => {
  const { roles } = useUser();

  console.log(roles);

  return <Typography variant="h1">Welcome !</Typography>;
};

export default WithRoles(Home, ["ADMIN"]);
