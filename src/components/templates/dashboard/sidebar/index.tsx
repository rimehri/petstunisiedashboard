import { Box } from "@mui/material";
import Logo from "../../../common/logo";

export default function SideBar() {
  return (
    <Box
      component="aside"
      sx={{
        position: "fixed",
        left: 0,
        height: "100%",
        boxShadow: "0 12px 30px rgb(80 143 244 / 10%)",
        backgroundColor: "#fff",
        width: 250,
        overflowY: "hidden",
        zIndex: 1038,
        transition: "margin-left .3s ease-in-out,width .3s ease-in-out",
      }}
    >
      <Box my={3} textAlign="center">
        <Logo height={100} width={150} />
      </Box>
    </Box>
  );
}
