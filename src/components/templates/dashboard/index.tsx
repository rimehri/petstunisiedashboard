import { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";
import SideBar from "./sidebar";
import Header from "./header";

const Template: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      minHeight="100vh"
      sx={{
        background: "#f3f4f3",
      }}
    >
      <SideBar />
      <Box
        component="main"
        sx={{
          marginLeft: "250px",
          transition: "margin-left .3s ease-in-out",
          height: "100%",
          px: 5,
        }}
      >
        <Header />
        <Box> {children}</Box>
      </Box>
    </Box>
  );
};

export default Template;
