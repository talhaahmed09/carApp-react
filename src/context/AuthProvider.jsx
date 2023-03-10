import { createContext, useContext, useMemo, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../apis/auth";
import useLocalStorage from "../hooks/useLocalStorage";
import authReducer, { initialState } from "./AuthReducer";
const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const [isLoggedIn, setisLoggedIn] = useLocalStorage("isLoggedIn", null);
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  const logIn = async (userInfo) => {
    dispatch({
      type: "SET_LOGIN",
    });
    const data = await loginUser(userInfo);
    if (data) {
      setisLoggedIn(true);
      setUser(data);
      await dispatch({
        type: "SET_LOGIN_SUCCESS",
        payload: {
          user: user,
        },
      });
      return data;
    } else {
      return dispatch({
        type: "SET_LOGIN_ERROR",
      });
    }
  };

  const logOut = () => {
    setisLoggedIn(null);
    setUser(null);
    dispatch({
      type: "LOG_OUT",
    });
    return navigate("/login");
  };

  const values = useMemo(
    () => ({
      state: state,
      logIn,
      logOut,
      isLoggedIn,
    }),
    [state]
  );
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("No context available");
  }
  return context;
};
