import { Box } from "@mui/material";

import { FC, PropsWithChildren } from "react";

const BlankTemplate: FC<PropsWithChildren> = ({ children }) => {
  return <Box>{children}</Box>;
};

export default BlankTemplate;
