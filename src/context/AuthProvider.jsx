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
  const [token, setToken] = useLocalStorage("token", null);
  const navigate = useNavigate();

  const logIn = async (userInfo) => {
    dispatch({
      type: "SET_LOGIN",
    });
    const {
      success: { token, user },
    } = await loginUser(userInfo);
    if (token) {
      setisLoggedIn(true);
      setUser(user);
      setToken(token);
      await dispatch({
        type: "SET_LOGIN_SUCCESS",
        payload: {
          user: user,
        },
      });
      return { token, user };
    } else {
      return dispatch({
        type: "SET_LOGIN_ERROR",
      });
    }
  };

  const logOut = () => {
    setisLoggedIn(false);
    setUser(null);
    setToken(null);
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
