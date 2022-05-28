import React, { useEffect, useState } from "react";
import { ResponsiveNavBar } from "../components/Navbar";
import { ReactSession } from "react-client-session";
import PlayerTable from "../components/PlayerTable";
import axios from "axios";
import Footer from "../components/Footer";

const ShowPlayer = () => {
  const [hasilGetPlayer, setHasilGetPlayer] = useState(null);
  const [hasPlayers, setHasPlayers] = useState(false);
  //console.log(teamProfile);
  useEffect(() => {
    //getSession();
    axios
    .get("http://localhost:8000/getplayer", {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    })
    .then(function (response) {
      console.log("GETTING PLAYER DATA FROM SERVER");
      //PlayerTable(response.data);
      //hasilGetPlayer = response.data;
      console.log("HASIL GET PLAYER");
      console.log(response.data);
      
      if (response.data.length === 0) {
          setHasPlayers(false);
      } else {
          setHasPlayers(true);
      }
      setHasilGetPlayer(response.data);
      //console.log(response.data);
    })
    .catch(function (error) {
      // alert("Can't found your team")
      console.error(error);
    });
    console.log("i fire once");
  }, []);


  return (
    <>
      <ResponsiveNavBar />
      <div className="w-full text-left h-fit p-10 mx-auto">
        <h1 className="text-bold text-4xl">
          Welcome, {ReactSession.get("username")}!
        </h1>

        <div className="w-full h-fit">
          <PlayerTable dataTim={hasilGetPlayer} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShowPlayer;
