import React, { useState } from 'react'
import Footer from '../components/Footer';
import { ResponsiveNavBar } from '../components/Navbar';

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ResponsiveNavBar />
      <Footer />

    </>
  );
};


export default HomePage