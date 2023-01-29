import { Tab, Tabs, Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import SwipeableViews from 'react-swipeable-views';
import Addresses from '../Address/Addresses';
import Vehicles from '../Vehicles/Vehicles';




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
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  


const Mandatory = () => {

    const theme = useTheme();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = (index) => {
      setValue(index);
    };
  return (
    <>
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
          <Tab label="Vahicle" {...a11yProps(0)} />
          <Tab label=" Address  " {...a11yProps(1)} />
          <Tab label="Create Document" {...a11yProps(2)} />
          <Tab label="Templates" {...a11yProps(3)} />
          
        </Tabs>
       
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >


          
        <TabPanel value={value} index={0} dir={theme.direction}>
        <Vehicles/>
        </TabPanel>      
        <TabPanel value={value} index={1} dir={theme.direction}>
        <Addresses/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        
        </TabPanel>

        {/* Photos */}
        <TabPanel value={value} index={3} dir={theme.direction}>
        
        </TabPanel>

    
      </SwipeableViews>
 
    </>
  )
}

export default Mandatory