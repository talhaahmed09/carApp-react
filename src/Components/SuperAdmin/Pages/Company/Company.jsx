import * as React from "react";
import { useState } from "react";
import { InputAdornment, TablePagination, Toolbar } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import ToolTip from "@mui/material/Tooltip";
import TextField from "@mui/material/TextField";
import {
  LastPage,
  FirstPage,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  Search,
} from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
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
import { Pageloader } from "../Page loader/Pageloader";
import SelectPopover from "../SelectPopover";
import { getAllCompanies, searchCompany as search } from "../../../../apis/company";
import { Link, useNavigate } from "react-router-dom";

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
    <Box sx={{ flexShrink: 0, ml: 2.5, mb: "1rem" }}>
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
  const [companylist, setCompanylist] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [loading, setLoading] = useState(false);
  const [editItem, setEditItem] = useState();
  const [count, setCount] = React.useState(0);
  const queryForm = React.useRef(null)

  const fetchListCompany = async (query=null) => {
    // api call
    const params = {
      page: controller.page + 1,
      size: controller.per_page,
    };
    setLoading(true);
    let res;
    if(query !== null){
      res = await search(query, params);
    } else {
      res = await getAllCompanies(params);
    }
    const { objData } = res;
    setCompanylist(objData.data);
    setCount(objData.total);
    setLoading(false);
  };

  const searchCompany = async (e) => {
    e.preventDefault();
    const query = new FormData(e.target).get("query")
    fetchListCompany(query);
  }

  // pagination
  let [controller, setController] = useState({
    page: 0,
    per_page: 5,
  });

  const navigate = useNavigate();
  const handleEdit = (id) => {
    navigate(`/company/edit/${id}`);
  };

  React.useEffect(() => {
    const query = new FormData(queryForm.current)?.get("query")
    if(query && query.length !== 0){
      fetchListCompany(query);
      return;
    }
    fetchListCompany();
  }, [controller]);
  // const _DATA = usePagination(companylist, rowsPerPage);

  const paginationHandler = (e, p) => {
    setController((prev) => ({
      ...prev,
      page: p,
    }));
  };

  const handleChangeRowsPerPage = (event) => {
    setController((prev) => ({
      ...prev,
      per_page: parseInt(event.target.value, 10),
    }));
  };

  return (
    <>
      <div style={{ height: 400, width: "100%" }}>
        <Toolbar />
        <div className="flex justify-between">
          <h1 className="text-base text-bold mb-0 ml-5">List of Company</h1>
          <div className="mr-5 flex justify-between gap-2">
            <form onSubmit={searchCompany} ref={queryForm}>
              <TextField
                id="search-bar"
                className="text"
                onInput={(e) => {
                  console.log(e.target.value);
                }}
                name="query"
                label="Search"
                variant="outlined"
                placeholder="Search..."
                size="small"
                InputProps={{
                endAdornment:
                  (<InputAdornment>
                    <IconButton type="submit" aria-label="search">
                      <Search style={{ fill: "blue" }} />
                    </IconButton>
                  </InputAdornment>)
                }}
              />
            </form>
            <CreateBtn
              name="Create"
              icon={<AddIcon />}
              btnProps={{
                component: Link,
                to: "../company/create",
                replace: true,
              }}
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
                  companylist.map((data, index) => {
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
                          <p className="mb-0 text-slate-400">{data.email}</p>
                        </TableCell>
                        <TableCell align="center">{data.mobile}</TableCell>
                        <TableCell align="center">{data.city}</TableCell>
                        <TableCell align="center">
                          <SelectPopover
                            {...data}
                            apiName="company"
                            refresh={fetchListCompany}
                            setEditIndex={setEditIndex}
                            index={index}
                            setEditItem={setEditItem}
                            handleEdit={handleEdit}
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
              rowsPerPage={controller.per_page}
              SelectProps={{ sx: { mb: "1rem" } }}
              page={controller.page}
              onRowsPerPageChange={handleChangeRowsPerPage}
              rowsPerPageOptions={[5, 10, 15, 20]}
              ActionsComponent={TablePaginationActions}
            />
          </div>
        ) : null}
      </div>
    </>
  );
}
