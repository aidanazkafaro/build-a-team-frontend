import React from "react";
import Footer from "../components/Footer";
import { ResponsiveNavBar } from "../components/Navbar";
import SignUp from "../components/SignUp";

const SignUpPage = () => {
  return (
    <>
      <ResponsiveNavBar />
      <SignUp />
      <Footer />
    </>
  );
};

export default SignUpPage;
