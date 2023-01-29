import * as React from "react";
import { useState } from "react";
import { Toolbar } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import AddIcon from "@mui/icons-material/Add";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CreateBtn } from "../../../Buttons";
import { Createcompany } from "./Createcompany";
import AuthUser from "../../Auth/AuthUser";
import {Pageloader} from "../Page loader/Pageloader";
import usePagination from "../Pagination/Pagination";
import SelectPopover from "../SelectPopover";



export function Company() {
  const { http } = AuthUser();
  const [companylist, setCompanylist] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [loading, setLoading] = useState(false);
  const [editItem, setEditItem] = useState()

  React.useEffect(() => {
    fetchListCompany();
  }, []);

  const [compCheck, setCompCheck] = useState(false);
  const fetchListCompany = async () => {
    // api call
    setLoading(true);
    let res = await http.get("/company");
    setCompanylist(res.data.responseMessage);

    setLoading(false);
  };

 

  // pagination
  let [page, setPage] = useState(1);
  const PER_PAGE = 5;

  const count = Math.ceil(companylist.length / PER_PAGE);
  const _DATA = usePagination(companylist, PER_PAGE);


  const paginationHandler = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <>
      {compCheck || editIndex != null ? (
        <Createcompany editIndex={editIndex}  editItem = {editItem} />
      ) : (
        <>
          <div style={{ height: 400, width: "100%" }}>
            <Toolbar />
          
              <div className="flex justify-between">
                <h1 className="text-base text-bold mb-0 ml-5">
                  List of Company
                </h1>
                <div className="mr-5">
                  <CreateBtn
                    name="Create"
                    icon={<AddIcon />}
                    onClick={() => setCompCheck(!compCheck)}
                  />
                </div>
              </div>
            

            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
               
                  <TableHead>
                    <TableRow>
                      <TableCell>Title</TableCell>
                      <TableCell align="center">Contact</TableCell>
                      <TableCell align="center">Address</TableCell>
                      <TableCell align="center">Action</TableCell>
                    </TableRow>
                  </TableHead>
                
                {loading ? (
                  <Pageloader />
                ) : (
                  <TableBody>
                    {companylist &&
                    _DATA.currentData().map((data, index) => {
                      return (
                                <TableRow
                                  key={data.id}
                                  sx={{
                                    "&:last-child td, &:last-child th": {
                                      border: 0,
                                    },
                                  }}
                                >
                                  <TableCell component="th" scope="row">
                                    <p className="mb-0">{data.name}</p>
                                    <p className="mb-0 text-slate-400">
                                      {data.email}
                                    </p>
                                  </TableCell>
                                  <TableCell align="center">
                                    {data.mobile}
                                  </TableCell>
                                  <TableCell align="center">
                                    {data.city}
                                  </TableCell>
                                  <TableCell align="center">
                                 
                                    <SelectPopover
                                    {...data}
                                    apiName="company"
                                    SetState={setCompanylist}
                                    state={companylist}
                                    setEditIndex={setEditIndex}
                                    index={index}
                                    setEditItem ={setEditItem}
                                  />
                                  
                                  </TableCell>

                                </TableRow>
                             
                      )
                    })
                  
                  }
                  </TableBody>
                )}
              </Table>
            </TableContainer>
            {editIndex != null ? null : !loading ? (
              <div className="mt-3 flex justify-end">
                <Pagination
                  count={count}
                  variant="outlined"
                  shape="rounded"
                  onChange={paginationHandler}
                />
              </div>
            ) : null}
          </div>
        </>
      )}
    </>
  );
}
