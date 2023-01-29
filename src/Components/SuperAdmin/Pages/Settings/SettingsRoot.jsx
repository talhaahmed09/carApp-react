import * as React from "react";
import {  Toolbar } from "@mui/material";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Setting from "./Setting";
import { QsAns } from "./Questions/QsAns";
import kuhl from '../../../img/kuhl.png'
import QuestionAnswers from "./Questions/QuestionAnswers";

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


// Setting Root Update
export default function SettingsRoot() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };


  return (
   
    
          <div style={{ height: 400, width: "100%" }}>
            <Toolbar />

            
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
              <Tab label="Company Settings" {...a11yProps(0)} />
              <Tab label=" Question Settings" {...a11yProps(1)} />
              
            </Tabs>

          
              {/* Company Settings */}
              <TabPanel value={value} index={0} dir={theme.direction}>
               <Setting />
              </TabPanel>

              {/* Question Settings */}
              <TabPanel value={value} index={1} dir={theme.direction}>
                <QuestionAnswers />
              </TabPanel>
             
            
          </div>
  )
}
