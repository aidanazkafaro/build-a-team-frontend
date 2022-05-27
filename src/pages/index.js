import React from "react";
import { ResponsiveNavBar } from "../components/Navbar";
import HeroArea from "../components/HeroArea";
import Footer from "../components/Footer";
import { ReactSession } from "react-client-session";


const Home = () => {

  ReactSession.set("userLoggedIn", false)


  return (
    <>
      <ResponsiveNavBar  />
      <HeroArea  />
      <Footer/>
    </>
  );
};

export default Home;
