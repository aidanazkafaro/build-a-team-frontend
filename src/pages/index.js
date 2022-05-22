import React, { useState } from "react";
import { ResponsiveNavBar } from "../components/Navbar";
import HeroArea from "../components/HeroArea";
import Footer from "../components/Footer";


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ResponsiveNavBar />
      <HeroArea />
      <Footer/>
    </>
  );
};

export default Home;
