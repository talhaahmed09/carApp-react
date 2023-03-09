import { createContext, useEffect, useState } from "react";
import AuthUser from "../Components/SuperAdmin/Auth/AuthUser";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const { token, user } = AuthUser();

  useEffect(() => {
    console.log({ token, user });
    setAuth({ token, user });
    console.log(auth);
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
