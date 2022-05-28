import React from "react";
import AddPlayers from "../components/AddPlayers";
import Footer from "../components/Footer";
import { ResponsiveNavBar } from "../components/Navbar";

const PageAddPlayer = () => {
  return (
    <>
      <ResponsiveNavBar />
      <div className="w-full text-left h-fit p-10 mx-auto">
        <AddPlayers />
      </div>
      <Footer />
    </>
  );
};

export default PageAddPlayer;
