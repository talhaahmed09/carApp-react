import { Routes, Route, Link, Navigate } from "react-router-dom";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import Addresses from "./Components/SuperAdmin/Pages/Address/Addresses";
import { Company as Companylist } from "./Components/SuperAdmin/Pages/Company/Company";
import Vehicles from "./Components/SuperAdmin/Pages/Vehicles/Vehicles";
import Login from "./Components/SuperAdmin/Pages/Login/Login";
import Forgotpas from "./Components/SuperAdmin/Pages/Login/Forgotpas";
import Email from "./Components/SuperAdmin/Pages/Email/Email";
import Dashboard from "./Components/SuperAdmin/Layout/Dashboard";
import { Createcompany } from "./Components/SuperAdmin/Pages/Company/Createcompany";

import Usermanagment from "./Components/SuperAdmin/Pages/Usermanagement/Usermanagment";
import RequireAuth from "./Components/RequireAuth";
import MainDashboard from "./Components/SuperAdmin/Pages/Dashboard/MainDashboard";
import { Usermanagementcreate } from "./Components/SuperAdmin/Pages/Usermanagement/Usermanagementcreate";
import Fdm from "./Components/SuperAdmin/Pages/FDM/Fdm";
import SettingsRoot from "./Components/SuperAdmin/Pages/Settings/SettingsRoot";

function App() {
  return (
    <>
      <Routes>
        {/* <Route element={<RequireAuth />}> */}
        <Route path="/" element={<Dashboard />}>
          <Route path="dashboard" element={<MainDashboard />} />
          <Route path="companylist" element={<Companylist />} />
          <Route
            exact
            path="company/create"
            element={<Createcompany edit={false} />}
          />
          <Route
            exact
            path="company/edit/:id"
            element={<Createcompany edit={true} />}
          />
          <Route path="vehicles" element={<Vehicles />} />
          <Route path="fdm" element={<Fdm />} />
          <Route path="settings" element={<SettingsRoot />} />
          <Route path="createcompany" element={<Createcompany />} />
          <Route path="users" element={<Usermanagment />} />
          <Route path="users/create" element={<Usermanagementcreate />} />
          <Route path="users/edit/:id" element={<Usermanagementcreate />} />
        </Route>
        {/* </Route> */}
        <Route path="/address" render={<Addresses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<Forgotpas />} />
        <Route path="/email" element={<Email />} />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
