import * as React from "react";
import { Toolbar, Avatar } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import AddIcon from "@mui/icons-material/Add";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
export default function MainTable() {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Company", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  return (
    <div style={{ height: 400, width: "100%", marginTop:"15px" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, overflow:"hidden" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell> Company </TableCell>
              <TableCell align="center">Location</TableCell>
              <TableCell align="center">Experts</TableCell>
              <TableCell align="center">Clerks</TableCell>
              <TableCell align="center">Vehicles</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                <p className="mb-0 flex items-center">
                
                  <Avatar className="me-3" /> name
                </p>
              </TableCell>
              <TableCell align="center"> unverified</TableCell>
              <TableCell align="center">400</TableCell>
              <TableCell align="center">400</TableCell>
              <TableCell align="center">600.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <p className="mb-0 flex items-center">
                
                  <Avatar className="me-3" /> name
                </p>
              </TableCell>
              <TableCell align="center"> unverified</TableCell>
              <TableCell align="center">400</TableCell>
              <TableCell align="center">400</TableCell>
              <TableCell align="center">600.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <p className="mb-0 flex items-center">
                
                  <Avatar className="me-3" /> name
                </p>
              </TableCell>
              <TableCell align="center"> unverified</TableCell>
              <TableCell align="center">400</TableCell>
              <TableCell align="center">400</TableCell>
              <TableCell align="center">600.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <p className="mb-0 flex items-center">
                
                  <Avatar className="me-3" /> name
                </p>
              </TableCell>
              <TableCell align="center"> unverified</TableCell>
              <TableCell align="center">400</TableCell>
              <TableCell align="center">400</TableCell>
              <TableCell align="center">600.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <div className="mt-3 flex lg:justify-end justify-center">
        <Pagination count={5} variant="outlined" shape="rounded" />
      </div>
    </div>
  );
}
