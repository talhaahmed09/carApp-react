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
      return {
        ...state,
        isLoading: true,
      };

    case "SET_LOGIN_SUCCESS":
      return {
        ...state,
        user: payload.user,
        isLoggedIn: true,
        isLoading: false,
      };

    case "SET_LOGIN_ERROR":
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
        isError: true,
      };

    case "LOG_OUT":
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
