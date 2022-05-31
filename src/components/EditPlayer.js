import { Button, FormControl, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ReactSession } from "react-client-session";

const EditPlayer = () => {
  const positions = [
    {
      value: "Select position",
      id: "0",
    },
    {
      value: "GK",
      id: "1",
    },
    {
      value: "CB",
      id: "2",
    },
    {
      value: "LB",
      id: "3",
    },
    {
      value: "RB",
      id: "4",
    },
    {
      value: "CM",
      id: "5",
    },
    {
      value: "RW",
      id: "6",
    },
    {
      value: "LW",
      id: "7",
    },
    {
      value: "ST",
      id: "8",
    },
  ];

 const updatePlayerJsonFormat = {
    nama: "",
    umur: "",
    no_punggung: "",
    tinggi: "",
    berat_badan: "",
    agility: "",
    defence: "",
    shooting: "",
    speed: "",
    passing: "",
    stamina: "",
    dribbling: "",
    posisi: "",
    id_tim: "",
   };

  const [updatePlayerData, setUpdatePlayerData] = useState(updatePlayerJsonFormat);

  const [currentPlayerData, setCurrentPlayerData] = useState(null);

  const [hasPlayer, setHasPlayer] = useState(false);

  var playerData = [];

  useEffect(() => {
    console.log(ReactSession.get("sessionSelectedPlayer"));
    getPlayer();
  }, []);

  const getPlayer = () => {
    console.log(ReactSession.get("sessionSelectedPlayer"));
    axios
      .get(
        "http://localhost:8000/getsingleplayer",
        { params: { player_id: ReactSession.get("sessionSelectedPlayer") } },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then(function (response) {
        console.log("GETTING PLAYER DATA FROM SERVER");
        console.log("HASIL GET PLAYER");
        console.log(response.data);
        setCurrentPlayerData(response.data);
        playerData = response.data;
        setHasPlayer(true);
        if (response.data.length === 0) {
          setHasPlayer(false);
        } else {
          setHasPlayer(true);
        }
      })
      .catch(function (error) {
        alert("Can't find your players");
        console.error(error);
      });
  };


  const handleChange = (prop) => (event) => {
    setUpdatePlayerData({ ...updatePlayerData, [prop]: event.target.value });
  };

  const onSubmitForm = (e) => {
    e.preventDefault(); //prevent refresh
    console.log("ID TIM REACT SESSION DI BAWAH");
    console.log(ReactSession.get("id_tim"));
    console.log(currentPlayerData[0].id_identitas)
    console.log(updatePlayerData.nama)
    axios
      .put(
        "http://localhost:8000/updatestatistikplayer",
        {

          id_identitas: currentPlayerData[0].id_identitas,
          inputNama: updatePlayerData.nama,
          inputUmur: updatePlayerData.umur,
          inputTinggi: updatePlayerData.tinggi,
          inputBeratBadan: updatePlayerData.berat_badan,
          inputNoPunggung: updatePlayerData.no_punggung,
          
          id_statistik: currentPlayerData[0].id_statistik,
          inputAgility: updatePlayerData.agility,
          inputDefence: updatePlayerData.defence,
          inputShooting: updatePlayerData.shooting,
          inputSpeed: updatePlayerData.speed,
          inputPassing: updatePlayerData.passing,
          inputStamina: updatePlayerData.stamina,
          inputDribbling: updatePlayerData.dribbling,

        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then(function (response) {
        console.log(response.data);
        alert("Player updated successfully");
        window.location.reload();
      })
      .catch(function (error) {
        alert("Failed to update player");
        window.location.href = "/LandingPage";
        console.error(error);
      });
  };

  if (!hasPlayer && !currentPlayerData) {
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
        {getPlayer()};{" "}
      </>
    );
  }

  return (
    <>
      {console.log("Console log didalam return: " + playerData)}
      {console.log(typeof(currentPlayerData[0].agility))}
      <h1 className="text-2xl my-2 ">Let's update the player's statistics!</h1>
      <div className="  w-1/2 justify-center">
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <div>
            <h1 className="text-xl mt-5">Ability</h1>
            <FormControl fullWidth sx={{ m: 1 }}>
              <TextField
                label="Nama"
                id="outlined-start-adornment"
                sx={{ m: 1, width: "50ch" }}
                //defaultValue={currentPlayerData[0].nama}
                value={updatePlayerData.nama}
                onChange={handleChange("nama")}
                type="string"

          
              />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }}>
              <TextField
              label="Umur"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "50ch" }}
              value={updatePlayerData.umur}
              onChange={handleChange("umur")}
              type="number"
              //defaultValue={currentPlayerData[0].umur}
              />
            </FormControl>

            <FormControl fullWidth sx={{ m: 1 }}>
              <TextField
              label="Tinggi"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "50ch" }}
              value={updatePlayerData.tinggi}
              onChange={handleChange("tinggi")}
              type="number"
              //defaultValue={currentPlayerData[0].tinggi}
              />
            </FormControl>

            <FormControl fullWidth sx={{ m: 1 }}>
              <TextField
              label="Berat Badan"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "50ch" }}
              value={updatePlayerData.berat_badan}
              onChange={handleChange("berat_badan")}
              type="number"
              //defaultValue={currentPlayerData[0].berat_badan}
              />
            </FormControl>

            <FormControl fullWidth sx={{ m: 1 }}>
              <TextField
              label="Nomor Punggung"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "50ch" }}
              value={updatePlayerData.no_punggung}
              onChange={handleChange("no_punggung")}
              type="number"
              //defaultValue={currentPlayerData[0].no_punggung}
              />
            </FormControl>
            
            <FormControl fullWidth sx={{ m: 1 }}>
              <TextField
                label="Agility"
                id="outlined-start-adornment"
                sx={{ m: 1, width: "50ch" }}
                value={updatePlayerData.agility}
                onChange={handleChange("agility")}
                type="number"
                //defaultValue={currentPlayerData[0].agility}

              />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }}>
              <TextField
                label="Defence"
                id="outlined-start-adornment"
                sx={{ m: 1, width: "50ch" }}
                value={updatePlayerData.defence}
                onChange={handleChange("defence")}
                type="number"
                //defaultValue={currentPlayerData[0].defence}

                // InputProps={{
                //   startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                // }}
              />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }}>
              <TextField
                label="Stamina"
                id="outlined-start-adornment"
                sx={{ m: 1, width: "50ch" }}
                value={updatePlayerData.stamina}
                onChange={handleChange("stamina")}
                type="number"
                //defaultValue={currentPlayerData[0].stamina}

                // InputProps={{
                //   startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                // }}
              />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }}>
              <TextField
                label="Passing"
                id="outlined-start-adornment"
                sx={{ m: 1, width: "50ch" }}
                value={updatePlayerData.passing}
                onChange={handleChange("passing")}
                type="number"
                //defaultValue={currentPlayerData[0].passing}

                // InputProps={{
                //   startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                // }}
              />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }}>
              <TextField
                label="Dribbling"
                id="outlined-start-adornment"
                sx={{ m: 1, width: "50ch" }}
                value={updatePlayerData.dribbling}
                onChange={handleChange("dribbling")}
                type="number"
                //defaultValue={currentPlayerData[0].dribbling}

                // InputProps={{
                //   startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                // }}
              />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }}>
              <TextField
                label="Speed"
                id="outlined-start-adornment"
                sx={{ m: 1, width: "50ch" }}
                value={updatePlayerData.speed}
                onChange={handleChange("speed")}
                type="number"
                //defaultValue={currentPlayerData[0].speed}

                // InputProps={{
                //   startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                // }}
              />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }}>
              <TextField
                label="Shooting"
                id="outlined-start-adornment"
                sx={{ m: 1, width: "50ch" }}
                value={updatePlayerData.shooting}
                onChange={handleChange("shooting")}
                type="number"
                //defaultValue={currentPlayerData[0].shooting}

                // InputProps={{
                //   startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                // }}
              />
            </FormControl>

            <Button
              variant="contained"
              onClick={onSubmitForm}
              // to="/TeamProfile"
              sx={{ ml: 2 }}
            >
              Update Player
            </Button>
            <Button variant="" href="/TeamProfile" sx={{ ml: 2 }}>
              Back to Team page
            </Button>
          </div>
        </Box>
      </div>
      <br></br>
    </>
  );
};

export default EditPlayer;
