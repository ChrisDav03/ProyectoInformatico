import React from "react";
import Navbar from "./Navbar";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Avatar,
  Paper,
  Typography,
  Button,
  Box,
  CircularProgress,
} from "@mui/material";

const Profile: React.FC = () => {
  const { user, logout, isLoading, error } = useAuth0();

  if (isLoading) {
    return (
      <Box className="flex justify-center items-center h-screen">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box className="flex justify-center items-center h-screen">
        <Typography variant="h6" color="error">
          Ocurrió un error al cargar el perfil: {error.message}
        </Typography>
      </Box>
    );
  }

  if (!user) {
    return (
      <Box className="flex justify-center items-center h-screen">
        <Typography variant="h6">
          No se encontró información del usuario.
        </Typography>
      </Box>
    );
  }

  return (
    <>
      <Navbar />
      <Paper elevation={3} className="p-4 max-w-sm mx-auto mt-20">
        <Box className="flex flex-col items-center">
          <Avatar
            alt="User's Avatar"
            src={user.picture ?? undefined}
            sx={{ width: 100, height: 100 }}
          />
          <Typography variant="h5" className="my-2 text-center mt-4">
            {user.name}
          </Typography>
          <Typography variant="body1" className="mb-2 mt-2">
            <b>Correo:</b> {user.email}
          </Typography>
          {user.nickname && (
            <Typography variant="body2" className="mb-2">
              <b>Usuario:</b> {user.nickname}
            </Typography>
          )}
          {user.updated_at && (
            <Typography variant="body2" className="mb-2">
              <b>Creación:</b> {new Date(user.updated_at).toLocaleDateString()}
            </Typography>
          )}
          <Button
            variant="contained"
            color="error"
            className="mt-4"
            onClick={() => logout()}
          >
            Cerrar Sesión
          </Button>
        </Box>
      </Paper>
    </>
  );
};

export default Profile;
