import React, { useEffect, useState } from "react";
import { ReactSession } from "react-client-session";
import Footer from "../components/Footer";
import { ResponsiveNavBar } from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LandingPage = () => {
  const nav = useNavigate();
  const [username, setUsername] = useState(null);

  //console.log(teamProfile);
  useEffect(() => {
    axios
    .get("http://localhost:8000/login", {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    })
    .then(function (response) {
      console.log("GETTING SESSION DATA FROM SERVER");
      console.log(response.data);
      ReactSession.set("username", response.data.username);
      setUsername(response.data.username)
      ReactSession.set("user_id", response.data.user_id);
      ReactSession.set("id_tim", response.data.id_tim);
    })
    .catch(function (error) {
      // alert("Can't found your team")
      console.error(error);
    });
    console.log("i fire once");
  }, []);

  const getSession = async (e) => {
    axios
      .get("http://localhost:8000/login", {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then(function (response) {
        console.log("GETTING SESSION DATA FROM SERVER");
        console.log(response.data);
        ReactSession.set("username", response.data.username);
        ReactSession.set("user_id", response.data.user_id);
        ReactSession.set("id_tim", response.data.id_tim);
      })
      .catch(function (error) {
        // alert("Can't found your team")
        console.error(error);
      });
  };

  return (
    <>
      <ResponsiveNavBar />
      <div className="w-full text-left h-screen p-10">
        <h1 className="text-bold text-4xl">
          Welcome, {username}!
        </h1>
        <h3 className="text-2xl mt-10 mb-10">Let's create your team!</h3>
        <a
          key="CreateTeam"
          className="no-underline text-black rounded-lg font-semibold  bg-white border-2 border-black py-2 px-3"
          // eslint-disable-next-line no-undef
          // onClick={nav("/CreateTeam")}
          href={"/CreateTeam"}
        >
          Create Team
        </a>
      </div>

      <Footer />
    </>
  );
};

export default LandingPage;
