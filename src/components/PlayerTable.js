import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ReactSession } from "react-client-session";
import axios from "axios";

import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

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
  { field: "id_pemain", headerName: "ID Pemain", type: "number", width: 90 },
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

export default function PlayerTable({ dataTim }) {
  const nav = useNavigate();

  console.log("MASUK PLAYERTABLE");
  console.log(dataTim);

  var dataTimArray = [];
  for (let i = 0; i < dataTim.length; i++) {
    dataTimArray.push({
      nama: dataTim[i].nama,
      umur: dataTim[i].umur,
      no_punggung: dataTim[i].no_punggung,
      tinggi: dataTim[i].tinggi,
      berat_badan: dataTim[i].berat_badan,
      id_pemain: dataTim[i].id_pemain,
      selected: dataTim[i].selected,
      posisi_pemain: dataTim[i].posisi_pemain,
      agility: dataTim[i].agility,
      defence: dataTim[i].defence,
      shooting: dataTim[i].shooting,
      speed: dataTim[i].speed,
      passing: dataTim[i].passing,
      stamina: dataTim[i].stamina,
      dribbling: dataTim[i].dribbling,
    });
  }

  console.log(dataTimArray);
  return (
    <>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-start-1 col-end-3">
          <div className="flex space-x-2 justify-start">
            <Button
              variant="contained"
              // onClick={onSubmitForm}
              sx={{ ml: 0 }}
              // onClick={() => {nav("PageAddPlayer")}}
              href={'PageAddPlayer'}
            >
              Add Player
            </Button>

            <button
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Show Selected Pemain
            </button>
          </div>
        </div>

        <div className="col-start-7">
          <div>
            <div className="dropdown relative">
              <button
                className="
          dropdown-toggle
          px-6
          py-2.5
          bg-blue-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg active:text-white
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        "
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown button
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="caret-down"
                  className="w-2 ml-2"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                  ></path>
                </svg>
              </button>
              <ul
                className="
          dropdown-menu
          min-w-max
          absolute
          hidden
          bg-white
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          hidden
          m-0
          bg-clip-padding
          border-none
        "
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a
                    className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                    href="#"
                  >
                    Action
                  </a>
                </li>
                <li>
                  <a
                    className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                    href="#"
                  >
                    Another action
                  </a>
                </li>
                <li>
                  <a
                    className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                    href="#"
                  >
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex space-y-2 justify-end">
        <button
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Terapkan
        </button>
      </div>

      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          getRowId={(dataTimArray) => dataTimArray.id_pemain}
          rows={dataTimArray}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </>
  );
}
