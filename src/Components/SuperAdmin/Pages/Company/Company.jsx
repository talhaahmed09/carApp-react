import * as React from "react";
import { useState } from "react";
import { InputAdornment, TablePagination, Toolbar } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import ToolTip from "@mui/material/Tooltip"
import TextField from "@mui/material/TextField";
import { LastPage, FirstPage, KeyboardArrowLeft, KeyboardArrowRight, Search } from "@mui/icons-material";
import {Box, IconButton} from "@mui/material";
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
import { Pageloader } from "../Page loader/Pageloader";
import usePagination from "../Pagination/Pagination";
import SelectPopover from "../SelectPopover";
import { getAllCompanies } from "../../../../apis/company";

function TablePaginationActions(props) {
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5, mb: "1rem" }} >
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        <FirstPage />
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        <KeyboardArrowRight />
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
         <LastPage />
      </IconButton>
    </Box>
  );
}

export function Company() {
  const { http } = AuthUser();
  const [companylist, setCompanylist] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [loading, setLoading] = useState(false);
  const [editItem, setEditItem] = useState();

  React.useEffect(() => {
    fetchListCompany();
  }, []);

  const [compCheck, setCompCheck] = useState(false);
  const fetchListCompany = async () => {
    // api call
    setLoading(true);
    let res = await getAllCompanies();
    setCompanylist(res.data.responseMessage);

    setLoading(false);
  };

  // pagination
  let [page, setPage] = useState(0);
  const PER_PAGE = 5;
  const [rowsPerPage, setRowsPerPage] = useState(PER_PAGE);

  const count = companylist.length
  const _DATA = usePagination(companylist, rowsPerPage);

  const paginationHandler = (e,p) => {
    setPage(p);
    _DATA.jump(p);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      {compCheck || editIndex != null ? (
        <Createcompany editIndex={editIndex} editItem={editItem} />
      ) : (
        <>
          <div style={{ height: 400, width: "100%" }}>
          <Toolbar />
            <div className="flex justify-between">
              <h1 className="text-base text-bold mb-0 ml-5">List of Company</h1>
              <div className="mr-5 flex justify-between gap-2">
                  <form>
                    <TextField
                      id="search-bar"
                      className="text"
                      onInput={(e) => {
                        console.log(e.target.value);
                      }}
                      name="s"
                      label="Search"
                      variant="outlined"
                      placeholder="Search..."
                      size="small"
                      endAdornment={
                        <InputAdornment>
                          <IconButton type="submit" aria-label="search">
                            <Search style={{ fill: "blue" }} />
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </form>
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
                            <TableCell align="center">{data.mobile}</TableCell>
                            <TableCell align="center">{data.city}</TableCell>
                            <TableCell align="center">
                              <SelectPopover
                                {...data}
                                apiName="company"
                                SetState={setCompanylist}
                                state={companylist}
                                setEditIndex={setEditIndex}
                                index={index}
                                setEditItem={setEditItem}
                              />
                            </TableCell>
                          </TableRow>
                        );
                      })}
                  </TableBody>
                )}
              </Table>
            </TableContainer>
            {editIndex != null ? null : !loading ? (
              <div className="mt-3 flex justify-end">
                <TablePagination
                  count={count}
                  variant="outlined"
                  shape="rounded"
                  onPageChange={paginationHandler}
                  rowsPerPage={rowsPerPage}
                  SelectProps={{sx: {mb: '1rem'}}}
                  page={page}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  rowsPerPageOptions={[5, 10, 25]}
                  ActionsComponent={TablePaginationActions}
                />
                {/* <Pagination
                  count={count}
                  variant="outlined"
                  shape="rounded"
                  onChange={paginationHandler}
                /> */}
              </div>
            ) : null}
          </div>
        </>
      )}
    </>
  );
}
