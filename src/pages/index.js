import React from "react";
import { ResponsiveNavBar } from "../components/Navbar";
import HeroArea from "../components/HeroArea";
import Footer from "../components/Footer";
import { ReactSession } from "react-client-session";


const Home = () => {

  ReactSession.set("userLoggedIn", false)
  ReactSession.set("username", null);
  ReactSession.set("user_id", null);
  ReactSession.set("id_tim", null);

  return (
    <>
      <ResponsiveNavBar  />
      <HeroArea  />
      <Footer/>
    </>
  );
};

export default Home;
