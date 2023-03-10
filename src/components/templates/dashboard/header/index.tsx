import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import UserDropdown from "./userDropdown";

export default function Header() {
  return (
    <>
    <Stack justifyContent="end" direction="row" sx={{py: 1.5}}>
      <UserDropdown />
    </Stack>
    <Divider light sx={{mb: 3}}  />
    </>
  );
}
