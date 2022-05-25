import React, { useState } from "react";
import { ResponsiveNavBar } from "../components/Navbar";
import HeroArea from "../components/HeroArea";
import Footer from "../components/Footer";


const Home = ({isLoggedIn, setIsLoggedIn}) => {

  return (
    <>
      <ResponsiveNavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <HeroArea isLoggedIn={isLoggedIn} />
      <Footer/>
    </>
  );
};

export default Home;
