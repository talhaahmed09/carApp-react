
import { Button } from "@mui/material";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../img/Oldtimer coach.png";
import "./layout.css";

const Sidebar = () => {
  return (
    <div className="w-[100%]">
      <img src={logo} alt="logo" className="img-fluid " />

      <div className="mt-3">
        <div className="sidebarButtons" >
            <Link to={"/address"}>
          <button  >Dashboard</button>
          </Link>
        </div>

        <div className="sidebarButtons">
          <button>Companies</button>
        </div>
        <div className="sidebarButtons">
          <button>User Management</button>
        </div>
        <div className="sidebarButtons">
          <button>Vehicles Management</button>
        </div>
        <div className="sidebarButtons">
          <button>File/dossier Management</button>
        </div>
        <div className="sidebarButtons">
          <button>Create mandatory</button>
        </div>
        <div className="sidebarButtons">
          <button>Settings</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
