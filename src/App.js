import { Routes, Route, Link, Navigate } from "react-router-dom";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
const { ToastContainer } = React.lazy(() => import("react-toastify"));
import Addresses from "./Components/SuperAdmin/Pages/Address/Addresses";
const { Company: Companylist } = React.lazy(() => import("./Components/SuperAdmin/Pages/Company/Company"));
const Vehicles = React.lazy(() => import("./Components/SuperAdmin/Pages/Vehicles/Vehicles"));
const Login = React.lazy(() => import("./Components/SuperAdmin/Pages/Login/Login"));
const Forgotpas = React.lazy(() => import("./Components/SuperAdmin/Pages/Login/Forgotpas"));
const Email = React.lazy(() => import("./Components/SuperAdmin/Pages/Email/Email"));
const Dashboard = React.lazy(() => import("./Components/SuperAdmin/Layout/Dashboard"));
const { Createcompany } = React.lazy(() => import("./Components/SuperAdmin/Pages/Company/Createcompany"));

const ProtectedRoutes = React.lazy(() => import("./ProtectedRoute"));
const AccessDenied = React.lazy(() => import("./Components/SuperAdmin/Pages/AccessDenied/AccessDenied"));
const AuthUser = React.lazy(() => import("./Components/SuperAdmin/Auth/AuthUser"));
const Usermanagment = React.lazy(() => import("./Components/SuperAdmin/Pages/Usermanagement/Usermanagment"));
const RequireAuth = React.lazy(() => import("./Components/RequireAuth"));
const MainDashboard = React.lazy(() => import("./Components/SuperAdmin/Pages/Dashboard/MainDashboard"));
const { Usermanagementcreate } = React.lazy(() => import("./Components/SuperAdmin/Pages/Usermanagement/Usermanagementcreate"));

function App() {
  return (
    <>
      <Routes>
        <Route element={<RequireAuth />}>
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
            <Route path="createcompany" element={<Createcompany />} />
            <Route path="users" element={<Usermanagment />} />
            <Route path="users/create" element={<Usermanagementcreate />} />
            <Route path="users/edit/:id" element={<Usermanagementcreate />} />
          </Route>
        </Route>
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
