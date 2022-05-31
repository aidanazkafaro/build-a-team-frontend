import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import "./App.css";
import React, { useState } from "react";
import ProtectedRoute from "./ProtectedRoute";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import TeamProfile from "./components/TeamProfile";
import { ReactSession } from "react-client-session";
import LandingPage from "./pages/LandingPage";
import CreateTeam from "./pages/CreateTeam";
import PageAddPlayer from "./pages/PageAddPlayer";
import ShowPlayer from "./pages/ShowPlayer";
import PageEditPlayer from "./pages/PageEditPlayer";
import FindStrategy from "./components/FindStrategy";

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
          path="/PageAddPlayer"
          element={
            <ProtectedRoute>
              <PageAddPlayer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ShowPlayer"
          element={
            <ProtectedRoute>
              <ShowPlayer />
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
        <Route
          path="/FindStrategy"
          element={
              <FindStrategy />
          }
        />
        <Route
          path="/PageEditPlayer"
          element={
            <ProtectedRoute>
              <PageEditPlayer />
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
