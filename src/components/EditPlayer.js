import { Button, FormControl, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { ReactSession } from "react-client-session";
import Footer from "./Footer";
import { ResponsiveNavBar } from "./Navbar";

const EditPlayer = ({id_pemain}) => {
  const positions = [
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

  const createPlayerJsonFormat = {
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
    posisi:"",
    id_tim:"",
  };

  const [createPlayerData, setCreatePlayerData] = useState(
    createPlayerJsonFormat
  );

  const handleChange = (prop) => (event) => {
    setCreatePlayerData({ ...createPlayerData, [prop]: event.target.value });
  };

  const onSubmitForm = (e) => {
    e.preventDefault(); //prevent refresh
    console.log("ID TIM REACT SESSION DI BAWAH")
    console.log(ReactSession.get("id_tim"))
    axios
      .post(
        "http://localhost:8000/createplayer",
        {
          nama: createPlayerData.nama,
          umur: createPlayerData.umur,
          no_punggung: createPlayerData.no_punggung,
          tinggi: createPlayerData.tinggi,
          berat_badan: createPlayerData.berat_badan,
          agility: createPlayerData.agility,
          defence: createPlayerData.defence,
          shooting: createPlayerData.shooting,
          speed: createPlayerData.speed,
          passing: createPlayerData.passing,
          stamina: createPlayerData.stamina,
          dribbling: createPlayerData.dribbling,
          posisi: createPlayerData.posisi,
          id_tim: ReactSession.get("id_tim"),
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then(function (response) {
        console.log(response.data);
        alert("Player created successfully")
        window.location.reload()

      })
      .catch(function (error) {
        alert("Failed to create player")
        window.location.href = '/LandingPage';
        console.error(error);
      });
  };

  return (
    <>      
        <ResponsiveNavBar />
      <h1 className="text-2xl my-2 ">
        Let's add players into your team!
      </h1>
      <div className=" py-5 pt-10 w-1/2 justify-center">
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <div>
          <h1 className="text-xl mt-5">Identity</h1>

            <FormControl fullWidth sx={{ m: 1 }}>
              <TextField
                label="Nama"
                id="outlined-start-adornment"
                sx={{ m: 1, width: "50ch" }}
                value={createPlayerData.nama}
                onChange={handleChange("nama")}
                
                // InputProps={{
                //   startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                // }}
              />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }}>
              <TextField
                label="Age"
                id="outlined-start-adornment"
                sx={{ m: 1, width: "50ch" }}
                value={createPlayerData.umur}
                onChange={handleChange("umur")}
                type='number'
                // InputProps={{
                //   startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                // }}
              />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }}>
              <TextField
                label="Player Number"
                id="outlined-start-adornment"
                sx={{ m: 1, width: "50ch" }}
                value={createPlayerData.no_punggung}
                onChange={handleChange("no_punggung")}
                type='number'

                // InputProps={{
                //   startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                // }}
              />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }}>
              <TextField
                label="Height"
                id="outlined-start-adornment"
                sx={{ m: 1, width: "50ch" }}
                value={createPlayerData.tinggi}
                onChange={handleChange("tinggi")}
                type='number'

                // InputProps={{
                //   startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                // }}
              />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }}>
              <TextField
                label="Weight"
                id="outlined-start-adornment"
                sx={{ m: 1, width: "50ch" }}
                value={createPlayerData.berat_badan}
                onChange={handleChange("berat_badan")}
                type='number'

                // InputProps={{
                //   startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                // }}
              />
            </FormControl>
            <h1 className="text-xl mt-5">Abiilty</h1>
            <FormControl fullWidth sx={{ m: 1 }}>
              <TextField
                label="Agility"
                id="outlined-start-adornment"
                sx={{ m: 1, width: "50ch" }}
                value={createPlayerData.agility}
                onChange={handleChange("agility")}
                type='number'

                // InputProps={{
                //   startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                // }}
              />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }}>
              <TextField
                label="Defence"
                id="outlined-start-adornment"
                sx={{ m: 1, width: "50ch" }}
                value={createPlayerData.defence}
                onChange={handleChange("defence")}
                type='number'

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
                value={createPlayerData.stamina}
                onChange={handleChange("stamina")}
                type='number'

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
                value={createPlayerData.passing}
                onChange={handleChange("passing")}
                type='number'

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
                value={createPlayerData.dribbling}
                onChange={handleChange("dribbling")}
                type='number'

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
                value={createPlayerData.speed}
                onChange={handleChange("speed")}
                type='number'

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
                value={createPlayerData.shooting}
                onChange={handleChange("shooting")}
                type='number'

                // InputProps={{
                //   startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                // }}
              />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }}>
              <TextField
                id="filled-select-currency-native"
                select
                label="Position"
                sx={{ m: 1, width: "50ch" }}
                value={createPlayerData.posisi}
                onChange={handleChange("posisi")}
                SelectProps={{
                  native: true,
                }}
                helperText="Formation can be changed later on"
                // variant="filled"
              >
                {positions.map((option) => (
                  <option key={option.id} value={option.value}>
                    {option.value}
                  </option>
                ))}
              </TextField>
            </FormControl>
            <Button
              variant="contained"
              onClick={onSubmitForm}
              // to="/TeamProfile"
              sx={{ ml: 2 }}
            >
              Add Player
            </Button>
            <Button
              variant=""
              href="/TeamProfile"
              sx={{ ml: 2 }}
            >
              Back to Team page
            </Button>
          </div>
        </Box>
      </div>
      <br></br>
      <Footer />

    </>
  );
};

export default EditPlayer;
