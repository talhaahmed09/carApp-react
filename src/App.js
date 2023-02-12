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
import Dashbaord from "./Components/SuperAdmin/Pages/Dashboard/Dashboard";
import { Createcompany } from "./Components/SuperAdmin/Pages/Company/Createcompany";

import ProtectedRoutes from "./ProtectedRoute";
import AccessDenied from "./Components/SuperAdmin/Pages/AccessDenied/AccessDenied";
import AuthUser from "./Components/SuperAdmin/Auth/AuthUser";

function App() {
  return (
    <>
      <Routes>
        <Route path="/denied" element={<AccessDenied />} />
        {/* <Route path="/dashboard" element={<ProtectedRoutes roleRequired={"super-admin"} Component ={Dashbaord} /> } /> */}
        <Route path="/dashboard" element={<Dashbaord />} />
        <Route path="/address" render={() => <Addresses />} />
        <Route path="/companylist" element={<Companylist />} />
        <Route exact path="/companies/create" element={<Createcompany />} />
        <Route exact path="/companies/edit/:id" element={<Createcompany />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/" element={<Login />} />
        <Route path="/forgot" element={<Forgotpas />} />
        <Route path="/email" element={<Email />} />
        <Route path="/createcompany" element={<Createcompany />} />
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
