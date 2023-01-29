import * as React from "react";
import {useState} from "react";
import { TextField, Toolbar } from "@mui/material";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import AuthUser from "../../../Auth/AuthUser";
import AddressLocationList from "./AddressLocationList";
import WestIcon from '@mui/icons-material/West';

import {toast} from 'react-toastify';




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <p>{children}</p>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function AddressLocRoot() {

  const { http } = AuthUser();

  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [addressCheck, setAddressCheck] = useState(false)

   // Fields States
   const [name, setName] = useState("");
   const [director, setDirector] = useState("");
   const [person, setPerson] = useState("");
   const [taxNumber, setTaxNumber] = useState("");
   const [email, setEmail] = useState("");
   const [phone, setPhone] = useState("");
   const [mobile, setMobile] = useState("");
   const [fax, setFax] = useState("");
   const [country, setCountry] = useState("");
   const [zipCity, setZipCity] = useState("");
   const [streetNo, setStreetNo] = useState("");
   const [mailbox, setMailbox] = useState("");
 
   const [register, setRegister] = useState("");
   const [homepage, setHomepage] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

 const handleCancel = () => {
  setAddressCheck(!addressCheck)
 }


 
 const handleSave = () => {
  const formData = new FormData();

  formData.append("name", name)
  formData.append("director", director)
  formData.append("person", person)
  formData.append("tax_number", taxNumber)
  formData.append("email", email)
  formData.append("phone", phone)
  formData.append("mobile", mobile)
  formData.append("fax", fax)
  formData.append("country", country)
  formData.append("city", zipCity)
  formData.append("street_no", streetNo)
  formData.append("mailbox", mailbox)
  formData.append("register", register)
  formData.append("homepage", homepage)

  

  http.post(`/company`, formData)
  .then((res) => {
    toast.success('create successfully')
    setAddressCheck(!addressCheck)
  }).catch(err => toast.error(err.message))
 }
  return (
    <>
   
          { addressCheck ? <AddressLocationList /> :
          <div style={{ height: 400, width: "100%" }}>
            {/* <Toolbar /> */}

            
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor=""
              textColor="inherit"
              variant=""
              aria-label="full width tabs example"
              sx={{
                "& button:hover": { background: "#fff" },
                "& button.Mui-selected": {
                  background: "#fff",
                  color: "#000",
                },
              }}
            >
              <Tab label="Location" {...a11yProps(0)} />
              <Tab label="Number Range" {...a11yProps(1)} />
              
            </Tabs>

            
              {/* Address Tab */}
              <TabPanel value={value} index={0} dir={theme.direction}>
              <div>
                 
                  
          <div className="generl">
            <p>General</p>
          </div>

          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="company">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Company Name
                </p>

                <TextField
                onChange={(e) => setName(e.target.value)}
                fullWidth label="Company name" id="0317258963" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="managing">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Managing Director
                </p>

                <TextField
                 onChange={(e) => setDirector(e.target.value)}
                  fullWidth
                  label="Enter your position"
                  id="0317258963"
                />
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="contact">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Contact person
                </p>

                <TextField
                 onChange={(e) => setPerson(e.target.value)}
                fullWidth label="Enter your name" id="0317258963" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="Commerical">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Commerical Register
                </p>

                <TextField
                 onChange={(e) => setRegister(e.target.value)}
                fullWidth label="Enter your text" id="0317258963" />
              </div>
            </div>

            <div className="col-lg-6 mt-5">
              <div className="Tax">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Tax number
                </p>

                <TextField
                 onChange={(e) => setTaxNumber(e.target.value)}
                  fullWidth
                  label="Enter your tax"
                  id="0317258963"
                />
              </div>
            </div>
          </div>

          <div className="Contactcent mt-5">
            <p>Contact</p>
          </div>

          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="E-mail">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>E-mail</p>

                <TextField
                 onChange={(e) => setEmail(e.target.value)}
                fullWidth label="Enter email" id="0317258963" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="Homepage">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>Homepage</p>

                <TextField 
                 onChange={(e) => setHomepage(e.target.value)}
                fullWidth label="http:/" id="0317258963" />
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="Telephone">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Telephone
                </p>

                <TextField
                 onChange={(e) => setPhone(e.target.value)}
                fullWidth label="0317258963" id="0317258963" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="Homepage">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>Mobile</p>

                <TextField
                 onChange={(e) => setMobile(e.target.value)}
                 fullWidth label="Enter Mobile number" id="0317258963" />
              </div>
            </div>


            <div className="col-lg-6 mt-5">
              <div className="Homepage">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>Fax</p>

                <TextField
                 onChange={(e) => setFax(e.target.value)}
                 fullWidth label="Enter Fax" id="0317258963" />
              </div>
            </div>
          </div>

          <div className="Address mt-5">
            <p>Address</p>
          </div>

          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="country">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>Country</p>

                <TextField 
                 onChange={(e) => setCountry(e.target.value)}
                fullWidth label="Country name" id="Country name" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="ZIP / City">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  ZIP / City
                </p>

                <TextField
                 onChange={(e) => setZipCity(e.target.value)}
                fullWidth label="City" id="City" />
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="Street Number">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                  Street Number
                </p>

                <TextField 
                 onChange={(e) => setStreetNo(e.target.value)}
                fullWidth label="Street No*" id="Street No*" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="Mail">
                <p style={{ fontWeight: "bold", fontSize: "12px" }}>Mailbox</p>

                <TextField
                 onChange={(e) => setMailbox(e.target.value)}
                  fullWidth
                  label="Enter your mail box"
                  id="Enter your mail box"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-5 mb -5">
                                <Button
                                  className="text-black"
                                  onClick={handleCancel}
                                >
                                  Cancel
                                </Button>

                                <Button
                                  className="text-white"
                                  style={{ backgroundColor: "#5A4A42" }}
                                  onClick={handleSave}
                                  >
                                  Save
                                </Button>
          </div>

                </div>
              </TabPanel>

              {/* Address Location tab */}
              <TabPanel value={value} index={1} dir={theme.direction}>
               
              </TabPanel>

           
            
          </div>
            }
       </>
  );
}
