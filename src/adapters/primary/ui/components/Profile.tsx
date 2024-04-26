import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Avatar, Paper, Typography, Button, Box } from "@mui/material";

const Profile: React.FC = () => {
  const { user, logout } = useAuth0();

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <Paper elevation={3} className="p-4 max-w-sm mx-auto mt-10">
      <Box className="flex flex-col items-center">
        <Avatar
          alt="User's Avatar"
          src={user.picture ?? undefined}
          sx={{ width: 100, height: 100 }}
        />
        <Typography variant="h5" className="my-2">
          {user.name}
        </Typography>
        <Typography variant="body1" className="mb-2">
          {user.email}
        </Typography>

        <Button
          variant="contained"
          color="secondary"
          className="mt-4"
          onClick={() => logout()}
        >
          Logout
        </Button>
      </Box>
    </Paper>
  );
};

export default Profile;
