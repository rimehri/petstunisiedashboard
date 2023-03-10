import React from "react";
import theme from "./libs/mui/theme";
import Routes from "./routes";
import { ThemeProvider, CssBaseline } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
