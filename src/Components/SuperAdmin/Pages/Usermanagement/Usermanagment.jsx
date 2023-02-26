import * as React from "react";
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
import TablePagination from "@mui/material/TablePagination";
import SelectPopover from "../SelectPopover";
import { CreateBtn } from "../../../Buttons";
import { Usermanagementcreate } from "./Usermanagementcreate";
import AuthUser from "../../Auth/AuthUser";
import usePagination from "../Pagination/Pagination";
import { PageloaderAll } from "../Page loader/Pageloader";
import { getAllUsers } from "../../../../apis/user";
import { useNavigate } from "react-router-dom";
import TablePaginationActions from "../../shared/TablePaginationAction";
import { getAllCompanies } from "../../../../apis/company";

export default function Usermanagment() {
  const { http } = AuthUser();
  const navigate = useNavigate();
  const [userList, setUserList] = React.useState([]);
  const [editIndex, setEditIndex] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [editItem, setEditItem] = React.useState();
  const [count, setCount] = React.useState(0);
  const [controller, setController] = React.useState({
    page: 0,
    per_page: 5,
  });

  const fetchListUser = async (data) => {
    // api call
    setLoading(true);
    const params = {
      page: controller.page + 1,
      size: controller.per_page,
    };
    let res = await getAllUsers(params);
    if (res.objData) {
      setUserList(res.objData.data);
      setCount(res.objData.total);
      fetchListCompany();
    }
    setLoading(false);
  };
  // console.log("Userlist:", Userlist[0].first_name);
  React.useEffect(() => {
    fetchListUser();
  }, [controller]);
  const [companylist, setCompanylist] = React.useState([]);

  const fetchListCompany = async () => {
    // api call

    let res = await getAllCompanies();
    if (!res.objData) {
      setCompanylist(res.objData.data);
    } else {
      setCompanylist([]);
    }
  };

  const getCompanyName = (id) => {
    const company = companylist.find((item) => item.id === Number(id));
    return company ? company.name : "-";
  };

  const handleEdit = (id) => {
    navigate(`/users/edit/${id}`);
  };

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
          <h1 className="text-base text-bold mb-0 ml-5">
            List Of Experts And Clerks
          </h1>
          <div className="mr-5">
            <CreateBtn
              name="Create "
              icon={<AddIcon />}
              onClick={() => navigate("create")}
            />
          </div>
        </div>

        <TableContainer component={Paper}>
          {loading ? (
            <PageloaderAll />
          ) : (
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="">Name</TableCell>
                  <TableCell align="center">Company</TableCell>
                  <TableCell align="center">Contact</TableCell>
                  <TableCell align="center">Address</TableCell>

                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userList &&
                  userList.map((data, index) => {
                    return (
                      <TableRow key={data.id}>
                        <TableCell component="th" scope="row">
                          <p className="mb-0">
                            {data.first_name} {data.last_name}
                          </p>
                          <p className="mb-0 text-slate-400">{data.myRole}</p>
                        </TableCell>
                        <TableCell align="center">
                          {companylist && getCompanyName(data.company_id)}
                        </TableCell>
                        <TableCell align="center">{data.mobile}</TableCell>
                        <TableCell align="center">
                          {data.street_no}, {data.city}, {data.country}
                        </TableCell>

                        <TableCell align="center">
                          <SelectPopover
                            {...data}
                            apiName="user"
                            SetState={setUserList}
                            state={userList}
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
            </Table>
          )}
        </TableContainer>
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
      </div>
    </>
  );
}
