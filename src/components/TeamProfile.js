import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { ResponsiveNavBar } from "./Navbar";
import { ReactSession } from "react-client-session";
import PlayerTable from "./PlayerTable";
import AddPlayers from "../pages/AddPlayers";

const TeamProfile = () => {
  const [hasilGetPlayer, setHasilGetPlayer] = useState(null);
  const [hasPlayers, setHasPlayers] = useState(false);
  
  //console.log(teamProfile);
  useEffect(() => {
    getSession();
    if (ReactSession.get("id_tim") !== undefined) {
      getPlayer();
      // setTimeout(2000);
      ReactSession.set("hasilGetPlayer", hasilGetPlayer);
    }
    console.log("i fire once");
  }, []);

  const getSession = (e) => {
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
        // if (ReactSession.get(""))
      })
      .catch(function (error) {
        // alert("Can't found your team")
        console.error(error);
      });
  };

  const getPlayer = (e) => {
    axios
      .get("http://localhost:8000/getplayer", {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then(function (response) {
        console.log("GETTING PLAYER DATA FROM SERVER");
        //PlayerTable(response.data);
        //hasilGetPlayer = response.data;
        setHasilGetPlayer(response.data);
        console.log("HASIL GET PLAYER")
        console.log(response.data)
        if(response.data.length === 0){
          setHasPlayers(false);
        } else {
          setHasPlayers(true);
        }
        //console.log(response.data);
      })
      .catch(function (error) {
        // alert("Can't found your team")
        console.error(error);
      });
  };

  if (!hasilGetPlayer || !ReactSession.get("username")) {
    return (
      <>
        <div class="grid place-items-center h-screen">
          <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <ResponsiveNavBar />
      <div className="w-full text-left h-fit p-10 mx-auto">
        <h1 className="text-bold text-4xl">
          Welcome, {ReactSession.get("username")}!
        </h1>

        <div className="w-full h-fit">
          {hasPlayers ? <PlayerTable dataTim={hasilGetPlayer} /> : <AddPlayers />}
          {/* <PlayerTable dataTim={hasilGetPlayer} /> */}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TeamProfile;
