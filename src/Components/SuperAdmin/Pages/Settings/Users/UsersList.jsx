import * as React from "react";
import react, { useState } from "react";
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
import SelectPopover from "../../SelectPopover";
import { CreateBtn } from "../../../../Buttons";
import AuthUser from "../../../Auth/AuthUser";
import usePagination from "../../Pagination/Pagination";
import { PageloaderAll } from "../../Page loader/Pageloader";
import { CreateUser } from "./CreateUser";
import WestIcon from '@mui/icons-material/West';
import '../../All.css'


export default function UsersList(props) {
  const [UserCheck, setUserCheck] = React.useState(false);
  const { http } = AuthUser();
  const [Userlist, setUserlist] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [loading, setLoading] = useState(false);
  const [editItem, setEditItem] = useState()
  
  const fetchListCompany = async (data) => {
    // api call
    setLoading(true);
    let res = await http.get("/user");
    setUserlist(res.data.responseMessage);
    setLoading(false);
  };
  // console.log("Userlist:", Userlist[0].first_name);
  React.useEffect(() => {
    fetchListCompany();
  }, []);
  // pagination
  let [page, setPage] = useState(1);
  const PER_PAGE = 10;

  const count = Math.ceil(Userlist.length / PER_PAGE);
  const _DATA = usePagination(Userlist, PER_PAGE);

  const paginationHandler = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  // console.log("edit index :",editIndex);
  return (
    <>
      {UserCheck || editIndex != null ? (
        <CreateUser  editIndex={editIndex} UserCheck={UserCheck} editItem = {editItem} />
      ) : (
        <>
          <div style={{ height: 400, width: "100%" }}>
            {/* <Toolbar /> */}
            <div className="flex justify-between">
              <div className="flex" >
                <WestIcon className="backButton" onClick={() => props.setCheckUser(false)} />
              <h1 className="text-base text-bold mb-0 ml-5">
                List Of Users
              </h1>
              </div>
              <div className="mr-5">
                <CreateBtn
                  name="Create "
                  icon={<AddIcon />}
                  onClick={() => setUserCheck(!UserCheck)}
                />
              </div>
              
            </div>
            <br />
            
            <TableContainer component={Paper}>
              {loading ? (
                <PageloaderAll />
              ) : (
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                     
                      <TableCell align="center">User Name</TableCell>
                      <TableCell align="center">Mobile Number</TableCell>
                      <TableCell align="center">Title</TableCell>
                      <TableCell align="center">Address Location</TableCell>
                      <TableCell align="center">Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    { Userlist &&
                    _DATA.currentData().map((data, index) => {
                      return (
                        <TableRow key={data.id}>
                          
                          <TableCell align="center">
                            {data.first_name} {data.last_name}
                          </TableCell>
                          <TableCell align="center">{data.mobile}</TableCell>
                          <TableCell align="center">{data.title}</TableCell>
                          <TableCell align="center">{data.street_no}</TableCell>

                          <TableCell align="center">
                            <SelectPopover
                              {...data}
                              apiName="user"
                              SetState={setUserlist}
                              state={Userlist}
                              setEditIndex={setEditIndex}
                              index={index}
                              setEditItem ={setEditItem}
                            />
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              )}
            </TableContainer>
            <div className="mt-3 flex justify-end">
              <Pagination
                count={count}
                variant="outlined"
                shape="rounded"
                onChange={paginationHandler}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}
