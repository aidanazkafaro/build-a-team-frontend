import React from "react";
import AddPlayers from "../components/AddPlayers";
import EditPlayer from "../components/EditPlayer";
import Footer from "../components/Footer";
import { ResponsiveNavBar } from "../components/Navbar";

const PageEditPlayer = () => {
  return (
    <>
      <ResponsiveNavBar />
      <div className="w-full text-left h-fit p-20 mx-auto">
        <EditPlayer />
      </div>
      <Footer />
    </>
  );
};

export default PageEditPlayer;
