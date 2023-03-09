import { createContext, useEffect, useState } from "react";
import AuthUser from "../Components/SuperAdmin/Auth/AuthUser";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider value={{auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
