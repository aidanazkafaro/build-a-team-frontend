import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import "./App.css";
import ProfilePage from "./pages/ProfilePage";
import React, { useState } from "react";
import ProtectedRoute from "./ProtectedRoute";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import TeamProfile from "./components/TeamProfile";
import { ReactSession } from 'react-client-session';

ReactSession.setStoreType("localStorage");
export const UserContext = React.createContext(false);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index isLoggedIn={isLoggedIn} />} />
        <Route path="/SignIn" element={<SignIn isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/teamProfile" element={<TeamProfile isLoggedIn={isLoggedIn}/>} />
        {/* <Route path="/gudang" element={<Gudang />} /> */}
        <Route
          path="/ProfilePage"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <ProfilePage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
            </ProtectedRoute>
          }
        />
                {/* <Route path="*" element={<Index />} /> */}

      </Routes>
    </Router>
  );
}

export default App;
