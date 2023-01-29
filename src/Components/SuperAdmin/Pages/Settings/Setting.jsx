import * as React from "react";
import { TextField, Toolbar } from "@mui/material";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Createsetting } from "./Createsetting";
import {  CompanyProfile } from "./CompanyProfile/CompanyProfile";
import { Company } from "../Company/Company";
import AddressLocRoot from "./AddressLocation/AddressLocRoot";
import AddressLocationList from "./AddressLocation/AddressLocationList";
import '../All.css'
import UserRoot from "./Users/UserRoot";


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

export default function Setting() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

 

  

  return (
  
          <div style={{ height: 400, width: "100%" }} className='mt-[-30px]'>
            {/* <Toolbar /> */}

            <div className="flex  p-3     border-inherit cursor-pointer">
              <h1 className="mb-0 text-sm text-black font-semibold me-3">
                Company Settings
              </h1>
            </div>
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
              <Tab label="Company" {...a11yProps(0)} />
              <Tab label=" Address Location  " {...a11yProps(1)} />
              <Tab label="Users" {...a11yProps(2)} />
              <Tab label="Profile" {...a11yProps(3)} />

              
            </Tabs>

            
              {/* Company Tab */}
              <TabPanel value={value} index={0} dir={theme.direction}>
              
                <Company  />
              </TabPanel>

              {/* Address Location tab */}
              <TabPanel value={value} index={1} dir={theme.direction}>
               <AddressLocationList />
              </TabPanel>

              {/* Users */}
              <TabPanel value={value} index={2} dir={theme.direction}>
               <UserRoot />
              </TabPanel>

               {/* Profile */}
               <TabPanel value={value} index={3} dir={theme.direction}>
                < CompanyProfile />
              </TabPanel>
           
            
          </div>
       
    
  );
}