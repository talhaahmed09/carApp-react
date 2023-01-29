
import * as React from "react";
import { useState, useEffect } from "react";
import { Toolbar } from "@mui/material";
import Pagination from '@mui/material/Pagination';
import AddIcon from '@mui/icons-material/Add';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CreateBtn } from "../../../../Buttons";
import AuthUser from "../../../Auth/AuthUser";
import {Pageloader} from "../../Page loader/Pageloader";
import usePagination from "../../Pagination/Pagination";
import '../../All.css'
import SelectPopover from "../../SelectPopover";
import AddressLocRoot from "./AddressLocRoot";


export default function AddressLocationList() {
  const [addressCheck, serAddressCheck] = useState(false);

  const { http } = AuthUser();
  const [addressList , setAddressList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [itemId, setItemId] = useState();
  const [editIndex,setEditIndex] = useState(null)
  const [editItem,setEditItem] = useState(null)


    // Fields States
    const [title, setTitle] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [fax, setFax] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [streetNo, setStreetNo] = useState("");
    const [mailbox, setMailbox] = useState("");
    const [companyId, setCompanyId] = useState("");
    const [salutaion, setSalutaion] = useState("");
    const[ homepage, setHomepage] = useState("");
    const [telephone, setTelephone] = useState("");
    const [ addComment, setAddComment] = useState("");

  // Api Call Function Fetch Address List
  const fetchAddressList = async () => {
    setLoading(true);
    let res = await http.get("/address");
    if (res.data.responseStatus === 200) {
      setAddressList(res.data.responseMessage);
        
      }
    setLoading(false);
  };

  // Api Call in useEffect
  useEffect(() => {
    fetchAddressList();
  }, []);

    // Pagination
    let [page, setPage] = useState(1);
    const PER_PAGE = 5;
  
    const count = Math.ceil(addressList.length / PER_PAGE);
    const _DATA = usePagination(addressList, PER_PAGE);
  
    const paginationHandler = (e, p) => {
      setPage(p);
      _DATA.jump(p);
    };

  return (
    <>
      {addressCheck || editIndex != null ? (
        <AddressLocRoot editIndex={editIndex} editItem ={editItem} />
      ) : (
        <>
    <div style={{ height: 400, width: "100%" }}>
      {/* <Toolbar /> */}
     
      <div className='flex justify-between'>

          <h1 className='text-base text-bold mb-0 ml-5'>Address Location</h1>
          <div className='mr-5'>
          <CreateBtn
          onClick ={ () => serAddressCheck(!addressCheck)}
          name='Create ' icon={<AddIcon/>} />
          
          </div>

        </div>

      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
             
                 <TableHead>
                    <TableRow>
                      <TableCell>Title</TableCell>
                      <TableCell align="center">Company</TableCell>
                      <TableCell align="center">Address</TableCell>
                      <TableCell align="center">Action</TableCell>
                    </TableRow>
                  </TableHead>
                {loading ? (
                  <Pageloader />
                ) : (
                  <TableBody>
                    {addressList && _DATA.currentData().map((data, index) => {
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
                            <p className="mb-0">{data.title}</p>
                            
                          </TableCell>
                          <TableCell align="center">
                            {data.title}
                          </TableCell>
                          <TableCell align="center">
                            {data.city}
                          </TableCell>
                          <TableCell align="center">
                            <SelectPopover
                              {...data}
                              apiName="address"
                              SetState={setAddressList}
                              state={addressList}
                              setEditIndex={setEditIndex}
                              index={index}
                              setEditItem ={setEditItem}
                            />
                          </TableCell>
                         
                        </TableRow>
                      
                      );
                    })}
                  </TableBody>
                )}
              </Table>
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
    </>)
    }
    </>
      
  );
}

