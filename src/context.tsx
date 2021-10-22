import React, { createContext, useReducer } from "react";
import { IModes } from "./interface";

const INITIAL_STATE = { darkMode: true };
export const ThemeContext = createContext<IModes>(INITIAL_STATE);

const themeReducer = (state: IModes, action: IModes): IModes => {
  switch (action?.type) {
    case "TOGGLE":
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

export const ThemeProvider = ({ children }: { children?: React.ReactNode }) => {
  const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);
  return <ThemeContext.Provider value={{ state, dispatch }}>{children}</ThemeContext.Provider>;
};
