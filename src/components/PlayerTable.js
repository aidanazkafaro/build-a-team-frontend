import * as React from "react";
import { ReactSession } from "react-client-session";
import axios from "axios";

import { DataGrid } from "@mui/x-data-grid";
import {
  Button, Box,
  FormControl,
  TextField,
} from "@mui/material";

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
// {
//   field: 'fullName',
//   headerName: 'Full name',
//   description: 'This column has a value getter and is not sortable.',
//   sortable: false,
//   width: 160,
//   valueGetter: (params) =>
//     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
// },

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

export default function PlayerTable() {
  console.log("MASUK PLAYERTABLE");
  let dataTimArray = [];

  const [selectionModel, setSelectionModel] = React.useState(null);
  const [showCheckbox, setShowCheckbox] = React.useState(false);

  const [selectedPlayer, setSelectedPlayer] = React.useState([]);
  const [pageSize, setPageSize] = React.useState(5);
  const [hasilGetPlayer, setHasilGetPlayer] = React.useState(null);
  const [hasilGetSelectedPlayer, setHasilGetSelectedPlayer] =
    React.useState(null);
  const [hasPlayers, setHasPlayers] = React.useState(false);
  const [hasSelectedPlayers, setHasSelectedPlayers] = React.useState(false);

  const [ambilSelectedPlayer, setAmbilSelectedPlayer] = React.useState(false);

  React.useEffect(() => {
    getPlayer();
  }, []);

  const getPlayer = () => {
    axios
      .get(
        "http://localhost:8000/getplayer",
        { params: { user_id: ReactSession.get("user_id") } },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then(function (response) {
        console.log("GETTING PLAYER DATA FROM SERVER");
        //PlayerTable(response.data);
        //hasilGetPlayer = response.data;
        console.log("HASIL GET PLAYER");
        console.log(response.data);
        setHasilGetPlayer(response.data);
        setHasPlayers(true);
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
  };

  const getSelectedPlayer = () => {
    // dataTimArray.splice(0, dataTimArray.length)
    console.log("MASUK GET SELECTED PLAYER");
    // setHasilGetPlayer(undefined);
    // console.log(hasilGetPlayer);
    axios
      .get(
        "http://localhost:8000/getselectedplayer",
        { params: { id_tim: ReactSession.get("id_tim") } },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then(function (response) {
        console.log("GETTING SELECTED PLAYER DATA FROM SERVER");
        //PlayerTable(response.data);
        //hasilGetPlayer = response.data;
        console.log("HASIL GET SELECTED PLAYER");
        console.log(response.data);
        setHasilGetPlayer(response.data);
        setHasPlayers(true);
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
  };

  const selectToStart = () => {
    axios
      .put("http://localhost:8000/setSelectedPlayer", {
        id_tim: ReactSession.get("id_tim"),
        playerID: selectedPlayer,
      })
      .then(function (response) {
        console.log("HASIL QUERY SET SELECTED PLAYER");
        console.log(response.data);
        //window.location.reload(false);
        getPlayer();
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  // const updateStatistik = () => {
  //   axios
  //     .put("http://localhost:8000/setSelectedPlayer", {
  //       id_tim: ReactSession.get("id_tim"),
  //       playerID: selectedPlayer,
  //     })
  //     .then(function (response) {
  //       console.log("HASIL QUERY SET SELECTED PLAYER");
  //       console.log(response.data);
  //       //window.location.reload(false);
  //       getPlayer();
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // };

  const removeFromStarting = () => {
    axios
      .put("http://localhost:8000/unsetselectedplayer", {
        id_tim: ReactSession.get("id_tim"),
        playerID: selectedPlayer,
      })
      .then(function (response) {
        console.log("HASIL QUERY UNSET SELECTED PLAYER");
        console.log(response.data);
        //window.location.reload(false);
        getPlayer();
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const removeFromTeam = () => {
    axios
      .post("http://localhost:8000/deleteplayer", {
        id_pemain: selectedPlayer,
      })
      .then(function (response) {
        console.log("HASIL QUERY DELETE PLAYER");
        console.log(response.data);
        //window.location.reload(false);
        getPlayer();
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  if (hasPlayers && hasilGetPlayer.length !== 0) {
    for (let i = 0; i < hasilGetPlayer.length; i++) {
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
      {/* {console.log("SELECTED PLAYER LENGTH = ", selectedPlayer.length)}
      {console.log(selectedPlayer)} */}
      <h1>{ReactSession.get("")}</h1>
      <div className="grid grid-cols-6 gap-4 my-5">
        <div className="col-start-1 col-end-5">
          <div className="flex gap-4 justify-start">
            <Button
              variant="contained"
              sx={{ ml: 0 }}
              href={"PageAddPlayer"}
              size="small"
            >
              Add Player
            </Button>

            <Button
              variant="contained"
              sx={{ ml: 0 }}
              size="small"
              onClick={() => {
                getPlayer();
              }}
            >
              All Players
            </Button>
            <Button
              variant="contained"
              sx={{ ml: 0 }}
              size="small"
              onClick={() => {
                getSelectedPlayer();
              }}
            >
              Starting XI
            </Button>

          </div>
          <FormControl fullWidth sx={{ m: 1 }}>
            <TextField
              id="filled-select-currency-native"
              select
              label="Formation"
              sx={{ m: 1, width: "20ch" }}
              //value={formasis}
              //onChange={handleChange("formasis")}
              SelectProps={{
                native: true,
              }}
            // variant="filled"
            >
              {formations.map((option) => (
                <option key={option.id} value={option.value}>
                  {option.value}
                </option>
              ))}
            </TextField>
          </FormControl>
        </div>

        <div className="col-start-7 ">
          <div className="flex gap-4 justify-end">

            <Button
              variant="outlined"
              sx={{ ml: 0 }}
              size="small"
              onClick={() => {
                setShowCheckbox(!showCheckbox);
              }}
            >
              EDIT
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-4 my-5">
        <div className="col-start-1 col-end-7">
          <div className="flex gap-4 justify-end">
            <div className="col-start-7" hidden={!showCheckbox}>
              <div className="flex gap-4 justify-end">
                <Button
                  variant="contained"
                  sx={{ ml: 0 }}
                  onClick={selectToStart}
                  hidden={true}
                  size="small"
                >
                  SEND TO STARTING XI
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  sx={{ ml: 0 }}
                  onClick={removeFromStarting}
                  hidden={true}
                  size="small"
                >
                  REMOVE FROM STARTING XI
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  sx={{ ml: 0 }}
                  onClick={removeFromTeam}
                  hidden={true}
                  size="small"
                >
                  REMOVE FROM TEAM
                </Button>
                <Button
                  variant="outlined"
                  sx={{ ml: 0 }}

                  hidden={true}
                  size="small"
                >
                  EDIT PLAYER
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-96 w-full">
        <DataGrid
          getRowId={(dataTimArray) => dataTimArray.id_pemain}
          rows={dataTimArray}
          columns={columns}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[5, 10, 20]}
          pagination
          checkboxSelection={showCheckbox}
          onSelectionModelChange={(newSelectionModel) => {
            setSelectionModel(newSelectionModel);
            setSelectedPlayer(newSelectionModel);
            console.log(selectedPlayer);
            // if (!selectedPlayer.includes(newSelectionModel)) {
            //   let lastPlayer = selectedPlayer.length > 1 ? newSelectionModel.pop() : newSelectionModel[0];
            //   selectedPlayer.push(lastPlayer)
            // } else if (selectedPlayer.includes(newSelectionModel)) {
            //   selectedPlayer.filter(newSelectionModel);
            // }
          }}
        />
      </div>
    </>
  );
}
