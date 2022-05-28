import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { ResponsiveNavBar } from "./Navbar";
import { ReactSession } from "react-client-session";
import PlayerTable from "./PlayerTable";

const TeamProfile = () => {
  const [username, setUsername] = useState(null);
  const [idTim, setIdTim] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/login", {
        withCredentials: true,
      })
      .then(function (response) {
        console.log("HASIL REQUEST SESSION DI BAWAH");
        console.log(response);
        ReactSession.set("username", response.data.username);
        setUsername(response.data.username);
        ReactSession.set("user_id", response.data.user_id);
        ReactSession.set("id_tim", response.data.id_tim);
        setIdTim(ReactSession.get("id_tim"))
        console.log("USER ID PAKE REACT SESSION DI BAWAH");
        console.log(ReactSession.get("user_id"));
      })
      .catch(function(error){
        console.log("ERROR GET LOGIN DI TEAM PROFILE")
        console.error(error);
      });
  }, []);

  if (!username && !idTim ) {
    return (
      <>
        <div className="grid place-items-center h-screen">
          <div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
            role="status"
          >
            <span className="visually-hidden"></span>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <ResponsiveNavBar />
      <div className="w-full text-left h-fit p-10 mx-auto">
        <h1 className="text-bold text-4xl">
          Welcome, {ReactSession.get("username")}!
        </h1>

        <div className="w-full h-fit">
          {/* {hasPlayers ? <PlayerTable dataTim={hasilGetPlayer} /> : ''} */}
          <PlayerTable />
          {/* <PlayerTable dataTim={hasilGetPlayer} /> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TeamProfile;
