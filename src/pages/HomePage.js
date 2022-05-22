import React, { useState } from 'react'
import { ResponsiveNavBar } from '../components/Navbar';

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ResponsiveNavBar />
    </>
  );
};


export default HomePage