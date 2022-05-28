import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { ResponsiveNavBar } from "./Navbar";
import { ReactSession } from "react-client-session";
import PlayerTable from "./PlayerTable";
import AddPlayers from "./AddPlayers";
import { useNavigate } from "react-router-dom";

const TeamProfile = () => {
  const [hasilGetPlayer, setHasilGetPlayer] = useState(null);
  const [hasPlayers, setHasPlayers] = useState(false);

  //console.log(teamProfile);
  // useEffect(() => {
  //   //getSession();
  //   const fetchData = async () => {
  //     const requestPlayer = await axios
  //       .get("http://localhost:8000/getplayer", {
  //         headers: { "Content-Type": "application/json" },
  //         withCredentials: true,
  //       })
  //       .then(function (response) {
  //         console.log("GETTING PLAYER DATA FROM SERVER");
  //         //PlayerTable(response.data);
  //         //hasilGetPlayer = response.data;
  //         console.log("HASIL GET PLAYER");
  //         console.log(response.data);
  //         if (response.data.length === 0) {
  //           setHasPlayers(false);
  //         } else {
  //           setHasPlayers(true);
  //         }
  //         setHasilGetPlayer(response.data);
  //         //console.log(response.data);
  //       })
  //       .catch(function (error) {
  //         // alert("Can't found your team")
  //         console.error(error);
  //       });

  //     const requestSessio = await axios
  //     .get("http://localhost:8000/login", {
  //       headers: { "Content-Type": "application/json" },
  //       withCredentials: true,
  //     })
  // .then(function (response) {
  //   console.log("GETTING SESSION DATA FROM SERVER");
  //   console.log(response.data);
  //   ReactSession.set("username", response.data.username);
  //   ReactSession.set("user_id", response.data.user_id);
  //   ReactSession.set("id_tim", response.data.id_tim);
  // })
  //     .catch(function (error) {
  //       // alert("Can't found your team")
  //       console.error(error);
  //     });

  //     fetchData();
  //   };
  //   console.log("i fire once");
  // }, []);

  useEffect(() => {
    (async () => {
      
      const requestSession = await axios.get("http://localhost:8000/login", {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      console.log("HASIL REQUEST SESSION DI BAWAH");
      console.log(requestSession);
      ReactSession.set("username", requestSession.data.username);
      ReactSession.set("user_id", requestSession.data.user_id);
      ReactSession.set("id_tim", requestSession.data.id_tim);
      console.log("USER ID PAKE REACT SESSION DI BAWAH");
      console.log(ReactSession.get("user_id"));

      const requestPlayer = await axios
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
          setHasilGetPlayer(response.data);
          if (response.data.length === 0) {
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
    })();
  }, []);
  if (!hasilGetPlayer) {
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
          <PlayerTable dataTim={hasilGetPlayer} />
          {/* <PlayerTable dataTim={hasilGetPlayer} /> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TeamProfile;
