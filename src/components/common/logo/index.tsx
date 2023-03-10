import { Box, BoxProps } from "@mui/material";
import primaryLogo from "./primary-logo.svg";
import logo from "./logo.svg";

type Props = BoxProps & {
  primary?: boolean;
};

export default function Logo({ primary = true, ...props }: Props) {
  return (
    <Box component="img" alt="" src={primary ? primaryLogo : logo} {...props} />
  );
}
