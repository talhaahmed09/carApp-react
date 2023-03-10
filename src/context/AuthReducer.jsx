export const initialState = {
  user: {},
  isLoggedIn: false,
  isLoading: false,
  isError: false,
};
const authReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_LOGIN":
      console.log("log-start", payload);
      return {
        ...state,
        isLoading: true,
      };

    case "SET_LOGIN_SUCCESS":
      console.log("logged-in", payload);
      return {
        ...state,
        user: payload.user,
        isLoggedIn: true,
        isLoading: false,
      };

    case "SET_LOGIN_ERROR":
      console.log("logged-error", payload);
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
        isError: true,
      };

    case "LOG_OUT":
      console.log("logged-out", payload);
      return {
        ...state,
        user: {},
        isLoggedIn: false,
        isLoading: false,
      };

    default:
      throw new Error(`No case for type ${type} found in appReducer.`);
  }
};

export default authReducer;
