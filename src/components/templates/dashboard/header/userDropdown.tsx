import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { useAuth } from "../../../../hooks/auth/useAuth";

export default function UserDropdown() {
  const { logout } = useAuth();

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <>
          <Avatar {...bindTrigger(popupState)}>H</Avatar>
          <Menu
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            {...bindMenu(popupState)}
          >
            <MenuItem sx={{ fontSize: 14 }} onClick={popupState.close}>
              Mon compte
            </MenuItem>
            <MenuItem sx={{ fontSize: 14 }} onClick={logout}>
              Se déconnecter
            </MenuItem>
          </Menu>
        </>
      )}
    </PopupState>
  );
}
