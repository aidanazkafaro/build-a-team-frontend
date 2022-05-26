import * as React from "react";
import { visuallyHidden } from '@mui/utils';
import { ReactSession } from "react-client-session";
import axios from "axios";

import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'nama', headerName: 'Nama', width: 140 },
  { field: 'umur', headerName: 'Umur', type: 'number', width: 80 },
  { field: 'no_punggung', headerName: 'No. Punggung', type: 'number', width: 120 },
  { field: 'tinggi', headerName: 'Tinggi', type: 'number', width: 90 },
  { field: 'berat_badan', headerName: 'Berat Badan', type: 'number', width: 100 },
  { field: 'id_pemain', headerName: 'ID Pemain', type: 'number', width: 90 },
  { field: 'selected', headerName: 'Selected', type: 'boolean', width: 90 },
  { field: 'posisi_pemain', headerName: 'Posisi', type: 'string', width: 80 },
  { field: 'agility', headerName: 'Agility', type: 'number', width: 80 },
  { field: 'defence', headerName: 'Defence', type: 'number', width: 80 },
  { field: 'shooting', headerName: 'Shooting', type: 'number', width: 80 },
  { field: 'speed', headerName: 'Speed', type: 'number', width: 80 },
  { field: 'passing', headerName: 'Passing', type: 'number', width: 80 },
  { field: 'stamina', headerName: 'Stamina', type: 'number', width: 80 },
  { field: 'dribbling', headerName: 'Dribbling', type: 'number', width: 80 },
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
  console.log("MASUK PLAYERTABLE");
  console.log(dataTim);

  var dataTimArray = [];
  for(let i = 0; i < dataTim.length; i++) {

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
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        getRowId={dataTimArray => dataTimArray.id_pemain}
        rows={dataTimArray}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
