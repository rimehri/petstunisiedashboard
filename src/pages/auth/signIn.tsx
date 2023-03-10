import BlankTemplate from "../../components/templates/blank";
import {
  Box,
  Container,
  Typography,
  TextField,
  Stack,
  Button,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { LoadingButton } from "@mui/lab";
import EastIcon from "@mui/icons-material/East";
import { useForm } from "react-hook-form";
import Logo from "../../components/common/logo";
import { useAuth } from "../../hooks/auth/useAuth";
import { Navigate } from "react-router-dom";
import { demoJwtToken } from "../../const";
import { JwtToken } from "../../types/app";

type FormData = {
  email: string;
  password: string;
};

export default function SignIn() {
  const { login, token } = useAuth();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const authPromise = (token: JwtToken, ms = 2000) =>
    new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve(token);
      }, ms);
    });

  const onSubmit = async (data: FormData) => {
    login(await authPromise(demoJwtToken));
  };

  if (token) return <Navigate to="/" />;

  return (
    <BlankTemplate>
      <Stack
        justifyContent="center"
        sx={{
          minHeight: "100vh",
          backgroundColor: "#eee",
        }}
      >
        <Container>
          <Grid container>
            <Grid lgOffset={3} lg={6} xs={12}>
              <Logo height={150} width={400} mb={2} mx="auto" display="block" />
              <Box
                sx={{
                  boxShadow: "rgb(0 0 0 / 7%) 1px 11px 25px 0px",
                  backgroundColor: "#fff",
                  px: 4,
                  py: 3.5,
                  borderRadius: 2.5,
                }}
              >
                <Typography variant="h1" color="primary" textAlign="center">
                  Se connecter
                </Typography>
                <Box component="form" mt={3} onSubmit={handleSubmit(onSubmit)}>
                  <Stack direction="column" gap={3}>
                    <TextField
                      label="Email"
                      error={!!errors.email}
                      fullWidth
                      {...register("email", {
                        required: true,
                        pattern: /\S+@\S+\.\S+/,
                      })}
                    />
                    <Box>
                      <TextField
                        label="Mot de passe"
                        error={!!errors.password}
                        {...register("password", { required: true })}
                        fullWidth
                      />
                      <Box sx={{ float: "right", mt: 0.5 }}>
                        <Button
                          variant="text"
                          color="secondary"
                          sx={{ fontWeight: 400 }}
                        >
                          Mot de passe oublié ?
                        </Button>
                      </Box>
                    </Box>
                    <Box mx="auto" textAlign="center">
                      <LoadingButton
                        type="submit"
                        loading={isSubmitting}
                        loadingPosition="center"
                        variant="contained"
                        size="large"
                        startIcon={<EastIcon />}
                      >
                        Se connecter
                      </LoadingButton>
                    </Box>
                  </Stack>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Stack>
    </BlankTemplate>
  );
}
