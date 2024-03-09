import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, SxProps, ThemeProvider } from "@mui/material/styles";
import { useAuth0 } from "@auth0/auth0-react";

interface CopyrightProps {
  sx?: SxProps;
}

const theme = createTheme({
  typography: {
    fontFamily: "Raleway, Arial, sans-serif",
  },
  palette: {
    primary: { main: "#556cd6" },
    secondary: { main: "#19857b" },
    error: { main: "#ff1744" },
    background: { default: "#f0f2f5" },
    text: { primary: "#333", secondary: "#555" },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 10 },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: { borderRadius: 10 },
      },
    },
  },
});

function Copyright(props: CopyrightProps) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <u>TaskManager</u> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignIn() {
  const { loginWithRedirect } = useAuth0();

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            position: "relative",
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "10%",
              left: "5%",
              padding: "16px",
              borderRadius: "4px",
            }}
          >
            <Typography
              variant="h6"
              component="h2"
              sx={{
                color: "white",
              }}
            >
              Welcome to <br />
            </Typography>
            <Typography
              variant="h4"
              component="h1"
              sx={{
                color: "white",
                fontWeight: "bold",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              <i>TaskManager</i>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.85)",
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 4,
              borderRadius: 2,
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h2" sx={{ marginTop: 5, marginBottom: 10 }}>
              Welcome back!
            </Typography>
            <Button
              fullWidth
              variant="contained"
              onClick={() => loginWithRedirect()}
              sx={{ mt: 3, mb: 2 }}
            >
              Sign in
            </Button>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
