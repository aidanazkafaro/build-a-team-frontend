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

export default function PlayerTable({dataTim}) {
console.log("MASUK PLAYERTABLE")
  console.log(dataTim);

  return (

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">nama</TableCell>
            <TableCell align="right">umur</TableCell>
            <TableCell align="right">no_punggung</TableCell>
            <TableCell align="right">tinggi</TableCell>
            <TableCell align="right">berat_badan</TableCell>
            <TableCell align="right">id_pemain</TableCell>
            <TableCell align="right">selected</TableCell>
            <TableCell align="right">posisi_pemain</TableCell>
            <TableCell align="right">user_id</TableCell>
            <TableCell align="right">agility</TableCell>
            <TableCell align="right">defence</TableCell>
            <TableCell align="right">shooting</TableCell>
            <TableCell align="right">speed</TableCell>
            <TableCell align="right">passing</TableCell>
            <TableCell align="right">stamina</TableCell>
            <TableCell align="right">dribbling</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataTim.map((row) => (
            <TableRow
              key={row.nama}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right">{row.nama}</TableCell>
              <TableCell align="right">{row.umur}</TableCell>
              <TableCell align="right">{row.no_punggung}</TableCell>
              <TableCell align="right">{row.tinggi}</TableCell>
              <TableCell align="right">{row.berat_badan}</TableCell>
              <TableCell align="right">{row.id_pemain}</TableCell>
              <TableCell align="right">{row.selected}</TableCell>
              <TableCell align="right">{row.posisi_pemain}</TableCell>
              <TableCell align="right">{row.user_id}</TableCell>
              <TableCell align="right">{row.agility}</TableCell>
              <TableCell align="right">{row.defence}</TableCell>
              <TableCell align="right">{row.shooting}</TableCell>
              <TableCell align="right">{row.speed}</TableCell>
              <TableCell align="right">{row.passing}</TableCell>
              <TableCell align="right">{row.stamina}</TableCell>
              <TableCell align="right">{row.dribbling}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
