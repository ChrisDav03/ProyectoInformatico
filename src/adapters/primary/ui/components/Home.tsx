import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "./Navbar";
import KanbanBoard from "../components/KanbanBoard";
import { CircularProgress, Box } from "@mui/material";

const Home: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <Box className="flex justify-center items-center h-screen">
        <CircularProgress />
      </Box>
    );
  }

  if (!isAuthenticated) {
    return (
      <div>
        <Navbar />
        <p>
          El usuario no está autenticado. ¿Quieres{" "}
          <a
            href="/signin"
            style={{ color: "red", textDecoration: "underline" }}
          >
            iniciar sesión
          </a>
          ?
        </p>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="d-flex justify-content-center p-4">
        <KanbanBoard />
      </div>
    </div>
  );
};

export default Home;
