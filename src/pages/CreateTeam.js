import {
  Box,
  Button,
  FormControl,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { ReactSession } from "react-client-session";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { ResponsiveNavBar } from "../components/Navbar";

const CreateTeam = () => {
  const nav = useNavigate();
  const formations = [
    {
      value: "4-4-2",
      id: "1",
    },
    {
      value: "4-3-3",
      id: "2",
    },
    {
      value: "4-5-1",
      id: "3",
    },
    {
      value: "3-5-2",
      id: "4",
    },
    {
      value: "5-4-1",
      id: "5",
    },
  ];
  const createTeamJsonFormat = {
    nama_tim: "",
    manager: "",
    formasis: "",
  };

  const [createTeamData, setCreateTeamData] = useState(createTeamJsonFormat);

  const handleChange = (prop) => (event) => {
    setCreateTeamData({ ...createTeamData, [prop]: event.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault(); //prevent refresh

    axios
      .post(
        "http://localhost:8000/createteam",
        {
          nama_tim: createTeamData.nama_tim,
          manager: createTeamData.manager,
          formasis: createTeamData.formasis,
          user_id: ReactSession.get("user_id"),
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then(function (response) {
        console.log(response.data);
        ReactSession.set("nama_tim", response.data.nama_tim);
        window.location.href = "/TeamProfile";
      })
      .catch(function (error) {
        //alert("Can't find your account.");

        console.error(error);
      });

    nav("/TeamProfile");
  };

  return (
    <>
      <ResponsiveNavBar />
      <div className="h-screen p-20">
        <h1 className="text-3xl">Let's create your team!</h1>
        <div className=" py-5 pt-10 w-1/2 justify-center">
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <div>
              <FormControl fullWidth sx={{ m: 1 }}>
                <TextField
                  label="Team Name"
                  id="outlined-start-adornment"
                  sx={{ m: 1, width: "50ch" }}
                  value={createTeamData.nama_tim}
                  onChange={handleChange("nama_tim")}
                  // InputProps={{
                  //   startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                  // }}
                />
              </FormControl>
              <FormControl fullWidth sx={{ m: 1 }}>
                <TextField
                  label="Manager Name"
                  id="outlined-start-adornment"
                  sx={{ m: 1, width: "50ch" }}
                  value={createTeamData.manager}
                  onChange={handleChange("manager")}
                  // InputProps={{
                  //   startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                  // }}
                />
              </FormControl>
              <FormControl fullWidth sx={{ m: 1 }}>
                <TextField
                  id="filled-select-currency-native"
                  select
                  label="Formation"
                  sx={{ m: 1, width: "50ch" }}
                  value={createTeamData.formasis}
                  onChange={handleChange("formasis")}
                  SelectProps={{
                    native: true,
                  }}
                  helperText="Formation can be changed later on"
                  // variant="filled"
                >
                  {formations.map((option) => (
                    <option key={option.id} value={option.value}>
                      {option.value}
                    </option>
                  ))}
                </TextField>
              </FormControl>
              <Button variant="contained" onClick={onSubmitForm} sx={{ ml: 2 }}>
                Submit Team
              </Button>
            </div>
          </Box>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default CreateTeam;
