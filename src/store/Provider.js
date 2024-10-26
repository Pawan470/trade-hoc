"use client";

import { createContext, useContext, useReducer } from "react";
import { USER_DETAILS, LOGIN, LOGOUT } from "./action";
const MyContext = createContext();

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const action = (type, payload = "") => {
    dispatch({ type, payload });
  };

  return (
    <MyContext.Provider value={{ state, dispatch, action }}>
      {children}
    </MyContext.Provider>
  );
};

// Custom hook to use the context
export const useSelector = () => {
  return useContext(MyContext);
};


const initialState = {
  userDetails: {},
  isAuthenticated: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
      };
    case USER_DETAILS:
      return {
        ...state,
        userDetails: action.payload,
        isAuthenticated: true,
      };
    case LOGOUT:
      return {
        ...state,
        userDetails: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};