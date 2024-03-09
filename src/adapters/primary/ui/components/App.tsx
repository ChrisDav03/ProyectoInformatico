import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import SignIn from "./SignIn"; 
import Home from "./Home";
import "./App.css";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      <Route path="/signin" element={isAuthenticated ? <Navigate replace to="/your-protected-route" /> : <SignIn />} />
      <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate replace to="/signin" />} />
      <Route path="/" element={<Navigate replace to={isAuthenticated ? "/home" : "/signin"} />} />
    </Routes>
  );
}

export default App;
