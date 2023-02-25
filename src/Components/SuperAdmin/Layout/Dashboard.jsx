import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Avatar,
  Breadcrumbs,
  Button,
  FormControlLabel,
  FormGroup,
  Link,
  Menu,
  MenuItem,
  Stack,
  Switch,
  Tab,
  Tabs,
  Toolbar,
} from "@mui/material";
import { Outlet, Link as RouterLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import logo from "../../img/Oldtimer coach.png";
import BasicPopover from "../BasicPopover";
import AuthUser from "../Auth/AuthUser";
import Login from "../Pages/Login/Login";

const drawerWidth = 250;

function Dashbaord(props) {
  const { getToken, token, logout, user } = AuthUser();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorElModal, setAnchorElModal] = React.useState(null);
  const open = Boolean(anchorElModal);
  const handleClickModal = (event) => {
    setAnchorElModal(event.currentTarget);
  };
  const handleCloseModal = () => {
    setAnchorElModal(null);
  };
  const logoutUser = () => {
    // eslint-disable-next-line eqeqeq
    if (token != undefined) {
      logout();
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  function handleClick(event) {
    event.preventDefault();
  }

  // language switcher

  const [checked, setChecked] = React.useState(false);

  const handleChangeLanguage = (event) => {
    setChecked(event.target.checked);
  };

  // tabs
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
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
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }
  const [valueTab, setValueTab] = React.useState(0);

  const handleChangeTabs = (event, newValue) => {
    setValueTab(newValue);
  };

  function LinkTab(props) {
    return (
      <Tab
        component={RouterLink}
        {...props}
      />
    );
  }
  
  // side bar
  const drawer = (
    <div className="">
      <img src={logo} alt="logo" className="img-fluid " />

      <div className="mt-3  ">
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={false}
          aria-label="Vertical tabs example"
          // sx={{ borderRight: 1, borderColor: "divider" }}
          sx={{
            "& button:hover,a:hover": { background: "#F4EAE4" },
            "& button.Mui-selected,a.Mui-selected": {
              background: "#F4EAE4",
              color: "#5A4A42",
            },
          }}
          textColor="secondary"
          TabIndicatorProps={{
            style: {
              backgroundColor: "#5B4A42",
            },
          }}
        >
          <LinkTab
            label="Dashbaord"
            {...a11yProps(0)}
            style={{ display: "flex", alignItems: "start" }}
            to="/dashboard"
          />
          <LinkTab
            label="Companies"
            {...a11yProps(1)}
            style={{ display: "flex", alignItems: "start" }}
            to="/companylist"
            // to='/companylist'
            // component={Routerlink}
          ></LinkTab>
          <LinkTab
            to="/users"
            label="User Management"
            {...a11yProps(2)}
            style={{ display: "flex", alignItems: "start" }}
          />
          <LinkTab
            to="/vehicles"
            label="Vehicles Management"
            {...a11yProps(3)}
            style={{ display: "flex", alignItems: "start" }}
          />
          <Tab
            label="File/dossier Management"
            {...a11yProps(4)}
            style={{ display: "flex", alignItems: "start" }}
          />
          <Tab
            label="Address Management"
            {...a11yProps(5)}
            style={{ display: "flex", alignItems: "start" }}
          />
          <Tab
            label="Settings"
            {...a11yProps(6)}
            style={{ display: "flex", alignItems: "start" }}
          />
        </Tabs>
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  if (!getToken()) {
    return <Login />;
  }
  return (
    <div className="">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            bgcolor: "white",
            boxShadow: "none",
            // borderBottom:'1px solid black'
          }}
        >
          {/* header  */}
          <div className="border-b flex justify-center lg:justify-between ">
            <div className="hidden lg:block">
              <div className="d-flex align-items-center pl-5 mt-4">
                <div role="presentation" onClick={handleClick}>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                      Dashboard
                    </Link>

                    {valueTab === 1 ? (
                      <Typography color="text.primary">Company</Typography>
                    ) : null}
                    {valueTab === 2 ? (
                      <Typography color="text.primary">
                        User management
                      </Typography>
                    ) : null}
                    {valueTab === 3 ? (
                      <Typography color="text.primary">
                        Vehicles Management
                      </Typography>
                    ) : null}
                    {valueTab === 4 ? (
                      <Typography color="text.primary">
                        File/dossier Management{" "}
                      </Typography>
                    ) : null}
                    {valueTab === 5 ? (
                      <Typography color="text.primary">
                        {" "}
                        Address Management{" "}
                      </Typography>
                    ) : null}
                    {valueTab === 6 ? (
                      <Typography color="text.primary"> Settings </Typography>
                    ) : null}
                  </Breadcrumbs>
                </div>
              </div>
            </div>
            <Toolbar>
              {/* language swicher */}
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch onChange={handleChangeLanguage} checked={checked} />
                  }
                  label="German"
                  style={{ color: "black" }}
                />
              </FormGroup>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
                style={{ background: "gray" }}
              >
                <MenuIcon />
              </IconButton>

              <Stack direction="row" spacing={1}>
                <div className="d-flex align-items-center">
                  <BasicPopover />

                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

                  <Button
                    style={{ textTransform: "none" }}
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClickModal}
                  >
                    <h5 className="text-base text-neutral-800 mb-0 ml-3">
                      {user.myRole[0]} <ExpandMoreIcon />
                    </h5>
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorElModal}
                    open={open}
                    onClose={handleCloseModal}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleCloseModal}>Profile</MenuItem>
                    <MenuItem onClick={handleCloseModal}>My account</MenuItem>
                    <MenuItem onClick={logoutUser}>Logout</MenuItem>
                  </Menu>
                </div>
              </Stack>
            </Toolbar>
          </div>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>

        <div className="w-100 ">
          <TabPanel>
            <Outlet />
          </TabPanel>
          {/* <TabPanel value={valueTab} index={0}>
            <MainDashboard />
          </TabPanel>
          <TabPanel value={valueTab} index={1}>
            <Company />
          </TabPanel>
          <TabPanel value={valueTab} index={2}>
            <Usermanagment />
          </TabPanel>
          <TabPanel value={valueTab} index={3}>
            <Vehicles />
          </TabPanel>
          <TabPanel value={valueTab} index={4}>
            <Fdm />
          </TabPanel>
          <TabPanel value={valueTab} index={5}>
            <Addresses />
          </TabPanel>
          <TabPanel value={valueTab} index={6}>
            <SettingsRoot />
          </TabPanel> */}
        </div>
      </Box>
    </div>
  );
}

Dashbaord.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashbaord;
