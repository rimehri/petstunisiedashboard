import { ComponentType } from "react";
import intersection from "lodash/intersection";
import { Box, Stack, Typography } from "@mui/material";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

const ShowError = () => (
  <Stack justifyContent="center" alignItems="center" mt={12} spacing={1.5}>
    <Box>
      <SentimentVeryDissatisfiedIcon
        sx={{ height: 50, width: 50 }}
        color="primary"
      />
    </Box>
    <Typography variant="h1" fontSize="1.6rem" fontWeight={600} color="primary">
      Vous n'êtes pas autorisé à accéder à cette page
    </Typography>
  </Stack>
);

const WithRoles = <T extends object>(
  Component: ComponentType<T>,
  roles: string[]
) => {
  const Hoc = (props: T) => {
    const isAllowed = !!intersection(roles, ["ADMIN"]).length;

    if (!isAllowed) return <ShowError />;

    return <Component {...props} />;
  };

  return Hoc;
};

export default WithRoles;
