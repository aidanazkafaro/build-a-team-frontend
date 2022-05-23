import React from "react";
import Footer from "../components/Footer";
import { ResponsiveNavBar } from "../components/Navbar";
import SignIn from "../components/SignIn";

const LoginPage = () => {
  return (
    <>
      <ResponsiveNavBar />
      <SignIn />
      <Footer />

    </>
  );
};

export default LoginPage;
