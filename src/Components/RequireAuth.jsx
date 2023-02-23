import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth'

const RequireAuth = (props) => {
    const {auth} = useAuth();
    const location = useLocation();

  return (
    auth?.authorized ? <Outlet /> : <Outlet /> //auth?.user ? <Navigate to="/unauthorized" state={{from: location}} replace/> : <Navigate to="/login" state={{from: location}} replace/> 
  )
}

export default RequireAuth