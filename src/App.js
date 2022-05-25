import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import "./App.css";
import ProfilePage from "./pages/ProfilePage";
import { useState } from "react";
import ProtectedRoute from "./ProtectedRoute";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index isLoggedIn={isLoggedIn} />} />
        <Route path="/SignIn" element={<SignIn isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/teamProfile" element={<ProfilePage />} />
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
