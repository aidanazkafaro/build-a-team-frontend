import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactSession } from 'react-client-session';


const axios = require("axios");

export const ResponsiveNavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = useNavigate();

  const onSubmitFormLogOut = async (e) => {
    e.preventDefault(); //prevent refresh

    axios
      .get("http://localhost:8000/logout")
      .then(function (response) {
        console.log(response);
        ReactSession.set("userLoggedIn", false)
        console.log(`userLoggedIn = ${ReactSession.get("userLoggedIn") }`)
        nav("/");
      })
      .catch(function (error) {
        alert("Log out failed.")
        console.error(error);
      });
  };

  // isi navbar saat user belum login
  const navLinks = (
    <>
      <a
        key="SignUp"
        className="no-underline text-white rounded-lg font-semibold  bg-black border-2 border-black py-2 px-3"
        href={`SignUp`}
      >
        Sign Up
      </a>
      <a
        key="SignIn"
        className="no-underline text-black rounded-lg font-semibold  bg-white border-2 border-black py-2 px-3"
        href={"SignIn"}
      >
        Sign In
      </a>
    </>
  );

  // isi navbar saat user sudah login
  const navLinksLoggedIn = (
    <>
      {/* <button
        key="ProfilePage"
        className="no-underline text-white rounded-lg font-semibold  bg-black border-2 border-black py-2 px-3"
        href={`ProfilePage`}
      >
        Home Page
      </button> */}
      <button
        key="SignOut"
        className="no-underline text-black rounded-lg font-semibold  bg-white border-2 border-black py-2 px-3"
        // eslint-disable-next-line no-undef
        onClick={onSubmitFormLogOut}
      >
        Sign Out
      </button>
    </>
  );

  // 
  const Navbar = ({ menuOpen, setMenuOpen }) => (
    <div
      className={`md:px-20 lg:px-20 flex items-center justify-between p-4 border-b-2 border-gray-100`}
    >
      <div className="flex items-center">
        <a
          href="/"
          className="text-xl font-bold no-underline text-gray-800 hover:text-gray-600"
        >
          Build "A" Team
        </a>
      </div>
      <nav className="hidden md:block space-x-6">{ReactSession.get("userLoggedIn") ? navLinksLoggedIn : navLinks}</nav>
      <button
        type="button"
        aria-label="Toggle mobile menu"
        onClick={() => setMenuOpen(!menuOpen)}
        className="rounded md:hidden focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50"
      >
        <MenuAlt4Svg menuOpen={menuOpen} />
      </button>
    </div>
  );

  const MobileMenu = ({ children }) => (
    <nav className="p-4 flex flex-col space-y-3 md:hidden">{children}</nav>
  );

  const MenuAlt4Svg = ({ menuOpen, setMenuOpen }) => (
    <div
      className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
      onClick={() => {
        setMenuOpen(!menuOpen);
      }}
    >
      {/* hamburger button */}
      <span
        className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
          menuOpen ? "rotate-45 translate-y-3.5" : ""
        }`}
      />
      <span
        className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
          menuOpen ? "w-0" : "w-full"
        }`}
      />
      <span
        className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
          menuOpen ? "-rotate-45 -translate-y-3.5" : ""
        }`}
      />
    </div>
  );

    return (
      <div className="bg-white">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        {menuOpen && <MobileMenu>{navLinksLoggedIn}</MobileMenu>}
      </div>
    );
};
