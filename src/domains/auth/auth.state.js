import * as React from "react";

const AUTH_DEFAULT_STATE = {
  status: "anonymous",
  accessToken: null,
};

const authReducer = (state, event) => {
  switch (event.type) {
    case "login":
      return {
        accessToken: event.accessToken,
        status: "authenticated",
      };

    case "logout":
      return {
        accessToken: null,
        status: "anonymous",
      };

    default:
      throw new Error(`Unsupported event type ${event.type} in authReducer`);
  }
};

export const useAuthState = () => {
  const [state, dispatch] = React.useReducer(authReducer, AUTH_DEFAULT_STATE);

  const login = (accessToken) =>
    dispatch({
      type: "login",
      accessToken,
    });

  const logout = () =>
    dispatch({
      type: "logout",
    });

  return {
    ...state,
    login,
    logout,
  };
};
