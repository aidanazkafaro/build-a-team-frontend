import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Footer from "../components/Footer";
import { ResponsiveNavBar } from "../components/Navbar";

const ProfilePage = ({isLoggedIn, setIsLoggedIn}) => {

  const [teamProfile, setTeamProfile] = useState(null);

  useEffect(() => {
    // ⬇ This calls my get request from the server
    getTeamProfile();
  }, []);


  async function getTeamProfile() {
    try {
      const response = await axios.get("http://localhost:8000/getteam");
      console.log(response);
      setTeamProfile(response);
    }
    catch (error) {
      console.log(error);
    }
  }

  // redirect ke index apabila ada user belum login 
  // yang ingin akses profile page
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return (
    <>
      <ResponsiveNavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      {/* {teamProfile} */}

      <Footer />

    </>
  );
};
export default ProfilePage;