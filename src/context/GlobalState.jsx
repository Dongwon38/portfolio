import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  aboutToggled: false,
};

const GlobalContext = createContext(initialState);

function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const toggleAbout = () => {
    dispatch({
      type: "ABOUT_TOGGLE",
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        aboutToggled: state.aboutToggled,
        toggleAbout,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalContext, GlobalProvider };
