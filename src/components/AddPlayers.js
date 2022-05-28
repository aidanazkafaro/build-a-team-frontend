import { Button, FormControl, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { ReactSession } from "react-client-session";

const AddPlayers = () => {
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

  const onSubmitForm = async (e) => {
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

      })
      .catch(function (error) {
        alert("Failed to create player")
        window.location.href = '/LandingPage';
        console.error(error);
      });
  };

  return (
    <>      
    
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
      {/* <form className="w-full max-w-lg">
        <h3 className="text-xl my-2 ">Identity</h3>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Ronaldo"
              onChange={handleChange("nama")}
            ></input>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-age"
            >
              Age
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="number"
              placeholder="28"
              onChange={handleChange("umur")}

            ></input>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-height"
            >
              Height
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="number"
              placeholder="cm"
              onChange={handleChange("tinggi")}

            ></input>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-weight"
            >
              Weight
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="number"
              placeholder="kg"
              onChange={handleChange("berat_badan")}

            ></input>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-palyernumber"
            >
              Player Number
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="number"
              placeholder="7"
              onChange={handleChange("no_punggung")}

            ></input>
          </div>
        </div>
        <h3 className="text-xl my-2 ">Ability</h3>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-agility"
            >
              Agility
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="number"
              placeholder="0-100"
              onChange={handleChange("agility")}

            ></input>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-age"
            >
              Defence
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="number"
              placeholder="0-100"
              onChange={handleChange("defence")}

            ></input>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-height"
            >
              Passing
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="number"
              placeholder="0-100"
              onChange={handleChange("passing")}

            ></input>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-weight"
            >
              Dribbling
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="number"
              placeholder="0-100"
              onChange={handleChange("dribbling")}

            ></input>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-palyernumber"
            >
              Stamina
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="number"
              placeholder="0-100"
              onChange={handleChange("stamina")}

            ></input>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-palyernumber"
            >
              Speed
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="number"
              placeholder="0-100"
              onChange={handleChange("speed")}

            ></input>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-palyernumber"
            >
              Shooting
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="number"
              placeholder="0-100"
              onChange={handleChange("shooting")}

            ></input>
          </div>
        </div>
      </form> */}
      {/* <Button
        variant="contained"
        // onClick={onSubmitForm}
        href="/TeamProfile"
        sx={{ ml: 0 }}
        onClick={onSubmitForm}
      >
        Add Player
      </Button> */}
      

    </>
  );
};

export default AddPlayers;
