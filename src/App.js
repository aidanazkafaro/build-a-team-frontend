import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import "./App.css";
import ProfilePage from "./pages/ProfilePage";
import React, { useState } from "react";
import ProtectedRoute from "./ProtectedRoute";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import TeamProfile from "./components/TeamProfile";
import { ReactSession } from "react-client-session";
import LandingPage from "./pages/LandingPage";
import CreateTeam from "./pages/CreateTeam";

ReactSession.setStoreType("localStorage");
export const UserContext = React.createContext(false);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route
          path="/CreateTeam"
          element={
            <ProtectedRoute>
              <CreateTeam />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ProfilePage"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/teamProfile"
          element={
            <ProtectedRoute>
              <TeamProfile />
            </ProtectedRoute>
          }
        />
        {/* <Route path="*" element={<Index />} /> */}

        <Route path="*" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;
