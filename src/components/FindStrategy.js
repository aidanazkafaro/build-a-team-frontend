import * as React from "react";
import { ReactSession } from "react-client-session";
import axios from "axios";

import { DataGrid } from "@mui/x-data-grid";
import { Button, FormControl, TextField } from "@mui/material";
import { ResponsiveNavBar } from "./Navbar";
import Footer from "./Footer";

const columns = [
  { field: "nama", headerName: "Nama", width: 140 },
  { field: "umur", headerName: "Umur", type: "number", width: 80 },
  {
    field: "no_punggung",
    headerName: "No. Punggung",
    type: "number",
    width: 120,
  },
  { field: "tinggi", headerName: "Tinggi", type: "number", width: 90 },
  {
    field: "berat_badan",
    headerName: "Berat Badan",
    type: "number",
    width: 100,
  },
  {
    field: "id_pemain",
    headerName: "ID Pemain",
    type: "number",
    width: 90,
    hide: true,
  },
  { field: "selected", headerName: "Selected", type: "boolean", width: 90 },
  { field: "posisi_pemain", headerName: "Posisi", type: "string", width: 80 },
  { field: "agility", headerName: "Agility", type: "number", width: 80 },
  { field: "defence", headerName: "Defence", type: "number", width: 80 },
  { field: "shooting", headerName: "Shooting", type: "number", width: 80 },
  { field: "speed", headerName: "Speed", type: "number", width: 80 },
  { field: "passing", headerName: "Passing", type: "number", width: 80 },
  { field: "stamina", headerName: "Stamina", type: "number", width: 80 },
  { field: "dribbling", headerName: "Dribbling", type: "number", width: 80 },
];

export default function FindStrategy() {
  console.log("MASUK FindStrategy");
  let dataTimArray = [];

  const [selectedPlayer, setSelectedPlayer] = React.useState([]);
  const [pageSize, setPageSize] = React.useState(11);
  const [hasilGetPlayer, setHasilGetPlayer] = React.useState([]);

  let posisiPemain = "";
  let limitPemain = "";
  let orderByWhat = "";
  let arraySuggestedPlayer = [];

  const [hasUsername, setHasUsername] = React.useState(false);
  const [formation, setFormation] = React.useState(null);

  const handleChangeFormation = (event) => {
    setFormation(event.target.value);
    console.log(formation);
  };
  const formations = [
    {
      value: "Select strategy",
      id: "0",
    },
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

  const getSuggestedPlayer = () => {
    axios
      .get("http://localhost:8000/getsuggestedplayer", {
        params: {
          id_tim: ReactSession.get("id_tim"),
          posisi_pemain: posisiPemain,
          limit_pemain: limitPemain,
          requestedAttribute: orderByWhat,
        },
      })
      .then(function (response) {
        console.log("GETTING PLAYER DATA FROM SERVER");
        console.log("HASIL GET PLAYER");
        console.log(response.data);
        arraySuggestedPlayer.push(...response.data);
        console.log("ARRAY SUGGESTED PLAYER");
        console.log(arraySuggestedPlayer);
        setHasilGetPlayer(arraySuggestedPlayer);
      })
      .catch(function (error) {
        alert("Can't find your players");
        console.error(error);
      });
  };
  const findBestPlayer = () => {
    //defender
    console.log(formation);

    // Goalkeeper
    posisiPemain = "GK";
    limitPemain = "1";
    orderByWhat = "defence";
    getSuggestedPlayer();

    // Defender
    if (formation[0] === "3") {
      posisiPemain = "CB";
      limitPemain = "3";
      orderByWhat = "defence";
      getSuggestedPlayer();
    } else if (formation[0] === "4") {
      posisiPemain = "CB";
      limitPemain = "2";
      orderByWhat = "defence";
      getSuggestedPlayer();
      posisiPemain = "RB";
      limitPemain = "1";
      orderByWhat = "defence";
      getSuggestedPlayer();
      posisiPemain = "LB";
      limitPemain = "1";
      orderByWhat = "defence";
      getSuggestedPlayer();
    } else if (formation[0] === "5") {
      posisiPemain = "CB";
      limitPemain = "3";
      orderByWhat = "defence";
      getSuggestedPlayer();
      posisiPemain = "RB";
      limitPemain = "1";
      orderByWhat = "defence";
      getSuggestedPlayer();
      posisiPemain = "LB";
      limitPemain = "1";
      orderByWhat = "defence";
      getSuggestedPlayer();
    }

    // Midfielder
    if (formation[2] === "3") {
      posisiPemain = "CM";
      limitPemain = "3";
      orderByWhat = "passing";
      getSuggestedPlayer();
    } else if (formation[2] === "4") {
      posisiPemain = "CM";
      limitPemain = "2";
      orderByWhat = "passing";
      getSuggestedPlayer();
      posisiPemain = "RW";
      limitPemain = "1";
      orderByWhat = "speed";
      getSuggestedPlayer();
      posisiPemain = "LW";
      limitPemain = "1";
      orderByWhat = "speed";
      getSuggestedPlayer();
    } else if (formation[2] === "5") {
      posisiPemain = "CM";
      limitPemain = "3";
      orderByWhat = "passing";
      getSuggestedPlayer();
      posisiPemain = "RW";
      limitPemain = "1";
      orderByWhat = "speed";
      getSuggestedPlayer();
      posisiPemain = "LW";
      limitPemain = "1";
      orderByWhat = "speed";
      getSuggestedPlayer();
    }

    // Attacker
    if (formation[4] === "1") {
      posisiPemain = "ST";
      limitPemain = "1";
      orderByWhat = "shooting";
      getSuggestedPlayer();
    } else if (formation[4] === "2") {
      posisiPemain = "ST";
      limitPemain = "2";
      orderByWhat = "shooting";
      getSuggestedPlayer();
    } else if (formation[2] === "3") {
      posisiPemain = "ST";
      limitPemain = "1";
      orderByWhat = "shooting";
      getSuggestedPlayer();
      posisiPemain = "RW";
      limitPemain = "1";
      orderByWhat = "speed";
      getSuggestedPlayer();
      posisiPemain = "LW";
      limitPemain = "1";
      orderByWhat = "speed";
      getSuggestedPlayer();
    }

    setHasilGetPlayer(arraySuggestedPlayer);
  };

  if (hasilGetPlayer !== null) {
    for (let i = 0; i < hasilGetPlayer.length; i++) {
      console.log("MASUK FOR LOOPPPPPPP");
      dataTimArray.push({
        nama: hasilGetPlayer[i].nama,
        umur: hasilGetPlayer[i].umur,
        no_punggung: hasilGetPlayer[i].no_punggung,
        tinggi: hasilGetPlayer[i].tinggi,
        berat_badan: hasilGetPlayer[i].berat_badan,
        id_pemain: hasilGetPlayer[i].id_pemain,
        selected: hasilGetPlayer[i].selected,
        posisi_pemain: hasilGetPlayer[i].posisi_pemain,
        agility: hasilGetPlayer[i].agility,
        defence: hasilGetPlayer[i].defence,
        shooting: hasilGetPlayer[i].shooting,
        speed: hasilGetPlayer[i].speed,
        passing: hasilGetPlayer[i].passing,
        stamina: hasilGetPlayer[i].stamina,
        dribbling: hasilGetPlayer[i].dribbling,
      });
    }
  }

  return (
    <>
      <ResponsiveNavBar />

      <div className="h-screen w-full p-20">
        <h1 className="text-3xl">Suggested Starting XI</h1>
        <FormControl fullWidth sx={{ m: 1 }}>
          <TextField
            id="filled-select-currency-native"
            select
            label="Formation"
            sx={{ m: 1, width: "50ch" }}
            value={formation}
            onChange={handleChangeFormation}
            SelectProps={{
              native: true,
            }}
            helperText="Try different formations"
          >
            <option value={"0-0-0"}>Select Formation</option>
            <option value={"4-4-2"}>4-4-2</option>
            <option value={"4-3-3"}>4-3-3</option>
            <option value={"4-5-1"}>4-5-1</option>
            <option value={"3-5-2"}>3-5-2</option>
            <option value={"5-4-1"}>5-4-1</option>
          </TextField>
          <Button
            variant="contained"
            sx={{ mt: 1, mb: 1, width: "30ch" }}
            onClick={findBestPlayer}
            hidden={true}
            size="small"
          >
            See Suggested Players
          </Button>
        </FormControl>
        <div className="h-96 w-full">
          {!hasilGetPlayer && (
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
          )}
          {hasilGetPlayer && (
            <DataGrid
              getRowId={(dataTimArray) => dataTimArray.id_pemain}
              rows={dataTimArray}
              columns={columns}
              pageSize={pageSize}
              onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            />
          )}
        </div>
        <Button variant="outlined" href="/TeamProfile" sx={{ mt: 2 }}>
          Back to Team page
        </Button>
      </div>

      <Footer />
    </>
  );
}
