import * as React from "react";
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { ReactSession } from "react-client-session";
import axios from "axios";

// export default function PlayerTable({ dataTim }) {
//   console.log("MASUK PLAYERTABLE")
//   console.log(dataTim);

//   return (

//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell align="right">nama</TableCell>
//             <TableCell align="right">umur</TableCell>
//             <TableCell align="right">no_punggung</TableCell>
//             <TableCell align="right">tinggi</TableCell>
//             <TableCell align="right">berat_badan</TableCell>
//             <TableCell align="right">id_pemain</TableCell>
//             <TableCell align="right">selected</TableCell>
//             <TableCell align="right">posisi_pemain</TableCell>
//             <TableCell align="right">user_id</TableCell>
//             <TableCell align="right">agility</TableCell>
//             <TableCell align="right">defence</TableCell>
//             <TableCell align="right">shooting</TableCell>
//             <TableCell align="right">speed</TableCell>
//             <TableCell align="right">passing</TableCell>
//             <TableCell align="right">stamina</TableCell>
//             <TableCell align="right">dribbling</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {dataTim.map((row) => (
//             <TableRow
//               key={row.nama}
//               sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//             >
//               <TableCell align="right">{row.nama}</TableCell>
//               <TableCell align="right">{row.umur}</TableCell>
//               <TableCell align="right">{row.no_punggung}</TableCell>
//               <TableCell align="right">{row.tinggi}</TableCell>
//               <TableCell align="right">{row.berat_badan}</TableCell>
//               <TableCell align="right">{row.id_pemain}</TableCell>
//               <TableCell align="right">{row.selected}</TableCell>
//               <TableCell align="right">{row.posisi_pemain}</TableCell>
//               <TableCell align="right">{row.user_id}</TableCell>
//               <TableCell align="right">{row.agility}</TableCell>
//               <TableCell align="right">{row.defence}</TableCell>
//               <TableCell align="right">{row.shooting}</TableCell>
//               <TableCell align="right">{row.speed}</TableCell>
//               <TableCell align="right">{row.passing}</TableCell>
//               <TableCell align="right">{row.stamina}</TableCell>
//               <TableCell align="right">{row.dribbling}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }


// function descendingComparator(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// function getComparator(order, orderBy) {
//   return order === 'desc'
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy);
// }

// const headCells = [
//   {
//     id: 'nama',
//     numeric: false,
//     disablePadding: true,
//     label: 'Nama',
//   },
//   {
//     id: 'umur',
//     numeric: false,
//     disablePadding: false,
//     label: 'Umur',
//   },
//   {
//     id: 'no_punggung',
//     numeric: false,
//     disablePadding: false,
//     label: 'No. Punggung',
//   },
//   {
//     id: 'tinggi',
//     numeric: false,
//     disablePadding: false,
//     label: 'Tinggi',
//   },
//   {
//     id: 'berat_badan',
//     numeric: false,
//     disablePadding: false,
//     label: 'Berat Badan',
//   },
//   {
//     id: 'id_pemain',
//     numeric: false,
//     disablePadding: false,
//     label: 'ID Pemain',
//   },
//   {
//     id: 'selected',
//     numeric: false,
//     disablePadding: false,
//     label: 'Selected',
//   },
//   {
//     id: 'posisi_pemain',
//     numeric: false,
//     disablePadding: false,
//     label: 'Posisi Pemain',
//   },
//   {
//     id: 'agility',
//     numeric: false,
//     disablePadding: false,
//     label: 'Agility',
//   },
//   {
//     id: 'defence',
//     numeric: false,
//     disablePadding: false,
//     label: 'Defence',
//   },
//   {
//     id: 'shooting',
//     numeric: false,
//     disablePadding: false,
//     label: 'Shooting',
//   },
//   {
//     id: 'speed',
//     numeric: false,
//     disablePadding: false,
//     label: 'Speed',
//   },
//   {
//     id: 'passing',
//     numeric: false,
//     disablePadding: false,
//     label: 'Passing',
//   },
//   {
//     id: 'stamina',
//     numeric: false,
//     disablePadding: false,
//     label: 'Stamina',
//   },
//   {
//     id: 'dribbling',
//     numeric: false,
//     disablePadding: false,
//     label: 'Dribbling',
//   },
// ];

// function EnhancedTableHead(props) {
//   const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
//     props;
//   const createSortHandler = (property) => (event) => {
//     onRequestSort(event, property);
//   };

//   return (
//     <TableHead>
//       <TableRow>
//         <TableCell padding="checkbox">
//           <Checkbox
//             color="primary"
//             indeterminate={numSelected > 0 && numSelected < rowCount}
//             checked={rowCount > 0 && numSelected === rowCount}
//             onChange={onSelectAllClick}
//             inputProps={{
//               'aria-label': 'select all desserts',
//             }}
//           />
//         </TableCell>
//         {headCells.map((headCell) => (
//           <TableCell
//             key={headCell.id}
//             align={headCell.numeric ? 'right' : 'left'}
//             padding={headCell.disablePadding ? 'none' : 'normal'}
//             sortDirection={orderBy === headCell.id ? order : false}
//           >
//             <TableSortLabel
//               active={orderBy === headCell.id}
//               direction={orderBy === headCell.id ? order : 'asc'}
//               onClick={createSortHandler(headCell.id)}
//             >
//               {headCell.label}
//               {orderBy === headCell.id ? (
//                 <Box component="span" sx={visuallyHidden}>
//                   {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
//                 </Box>
//               ) : null}
//             </TableSortLabel>
//           </TableCell>
//         ))}
//       </TableRow>
//     </TableHead>
//   );
// }

// EnhancedTableHead.propTypes = {
//   numSelected: PropTypes.number.isRequired,
//   onRequestSort: PropTypes.func.isRequired,
//   onSelectAllClick: PropTypes.func.isRequired,
//   order: PropTypes.oneOf(['asc', 'desc']).isRequired,
//   orderBy: PropTypes.string.isRequired,
//   rowCount: PropTypes.number.isRequired,
// };

// const EnhancedTableToolbar = (props) => {
//   const { numSelected } = props;

//   return (
//     <Toolbar
//       sx={{
//         pl: { sm: 2 },
//         pr: { xs: 1, sm: 1 },
//         ...(numSelected > 0 && {
//           bgcolor: (theme) =>
//             alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
//         }),
//       }}
//     >
//       {numSelected > 0 ? (
//         <Typography
//           sx={{ flex: '1 1 100%' }}
//           color="inherit"
//           variant="subtitle1"
//           component="div"
//         >
//           {numSelected} selected
//         </Typography>
//       ) : (
//         <Typography
//           sx={{ flex: '1 1 100%' }}
//           variant="h6"
//           id="tableTitle"
//           component="div"
//         >
//           Nutrition
//         </Typography>
//       )}

//       {numSelected > 0 ? (
//         <Tooltip title="Delete">
//           <IconButton>
//             <DeleteIcon />
//           </IconButton>
//         </Tooltip>
//       ) : (
//         <Tooltip title="Filter list">
//           <IconButton>
//             <FilterListIcon />
//           </IconButton>
//         </Tooltip>
//       )}
//     </Toolbar>
//   );
// };

// EnhancedTableToolbar.propTypes = {
//   numSelected: PropTypes.number.isRequired,
// };

// export default function PlayerTable(dataTim) {
//   console.log("Masuk PlayerTable");
//   console.log(dataTim);

//   const [order, setOrder] = React.useState('asc');
//   const [orderBy, setOrderBy] = React.useState('calories');
//   const [selected, setSelected] = React.useState([]);
//   const [page, setPage] = React.useState(0);
//   const [dense, setDense] = React.useState(false);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);

//   const handleRequestSort = (event, property) => {
//     const isAsc = orderBy === property && order === 'asc';
//     setOrder(isAsc ? 'desc' : 'asc');
//     setOrderBy(property);
//   };

//   const handleSelectAllClick = (event) => {
//     if (event.target.checked) {
//       const newSelecteds = Object.entries(dataTim).map((n) => n.name);
//       setSelected(newSelecteds);
//       return;
//     }
//     setSelected([]);
//   };

//   const handleClick = (event, name) => {
//     const selectedIndex = selected.indexOf(name);
//     let newSelected = [];

//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected, name);
//     } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(selected.slice(1));
//     } else if (selectedIndex === selected.length - 1) {
//       newSelected = newSelected.concat(selected.slice(0, -1));
//     } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(
//         selected.slice(0, selectedIndex),
//         selected.slice(selectedIndex + 1),
//       );
//     }

//     setSelected(newSelected);
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const handleChangeDense = (event) => {
//     setDense(event.target.checked);
//   };

//   const isSelected = (name) => selected.indexOf(name) !== -1;

//   // Avoid a layout jump when reaching the last page with empty rows.
//   const emptyRows =
//     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - dataTim.length) : 0;

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Paper sx={{ width: '100%', mb: 2 }}>
//         <EnhancedTableToolbar numSelected={selected.length} />
//         <TableContainer>
//           <Table
//             sx={{ minWidth: 750 }}
//             aria-labelledby="tableTitle"
//             size={dense ? 'small' : 'medium'}
//           >
//             <EnhancedTableHead
//               numSelected={selected.length}
//               order={order}
//               orderBy={orderBy}
//               onSelectAllClick={handleSelectAllClick}
//               onRequestSort={handleRequestSort}
//               rowCount={dataTim.length}
//             />
//             <TableBody>
//               {/* if you don't need to support IE11, you can replace the `stableSort` call with:
//                  rows.slice().sort(getComparator(order, orderBy)) */}
//               {Object.entries(dataTim).slice().sort(getComparator(order, orderBy))
//                 .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                 .map((row, index) => {
//                   const isItemSelected = isSelected(row.name);
//                   const labelId = `enhanced-table-checkbox-${index}`;

//                   return (
//                     <TableRow
//                       hover
//                       onClick={(event) => handleClick(event, row.nama)}
//                       role="checkbox"
//                       aria-checked={isItemSelected}
//                       tabIndex={-1}
//                       key={row.nama}
//                       selected={isItemSelected}
//                     >
//                       <TableCell padding="checkbox">
//                         <Checkbox
//                           color="primary"
//                           checked={isItemSelected}
//                           inputProps={{
//                             'aria-labelledby': labelId,
//                           }}
//                         />
//                       </TableCell>
//                       <TableCell
//                         component="th"
//                         id={labelId}
//                         scope="row"
//                         padding="none"
//                       >
//                         {row.nama}
//                       </TableCell>
//                       <TableCell align="right">{row.umur}</TableCell>
//                       <TableCell align="right">{row.no_punggung}</TableCell>
//                       <TableCell align="right">{row.tinggi}</TableCell>
//                       <TableCell align="right">{row.berat_badan}</TableCell>
//                       <TableCell align="right">{row.id_pemain}</TableCell>
//                       <TableCell align="right">{row.selected}</TableCell>
//                       <TableCell align="right">{row.posisi_pemain}</TableCell>
//                       <TableCell align="right">{row.agility}</TableCell>
//                       <TableCell align="right">{row.defence}</TableCell>
//                       <TableCell align="right">{row.shooting}</TableCell>
//                       <TableCell align="right">{row.speed}</TableCell>
//                       <TableCell align="right">{row.passing}</TableCell>
//                       <TableCell align="right">{row.stamina}</TableCell>
//                       <TableCell align="right">{row.dribbling}</TableCell>
//                     </TableRow>
//                   );
//                 })}
//               {emptyRows > 0 && (
//                 <TableRow
//                   style={{
//                     height: (dense ? 33 : 53) * emptyRows,
//                   }}
//                 >
//                   <TableCell colSpan={6} />
//                 </TableRow>
//               )}
//             </TableBody>
//           </Table>
//         </TableContainer>
//         <TablePagination
//           rowsPerPageOptions={[5, 10, 25]}
//           component="div"
//           count={dataTim.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </Paper>
//       <FormControlLabel
//         control={<Switch checked={dense} onChange={handleChangeDense} />}
//         label="Dense padding"
//       />
//     </Box>
//   );
// }

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
