import React, { createContext, useContext, useReducer } from "react";
// Preparing the Data layer
export const StateContext = createContext();
// higher order component to refer app.js as children component
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
// Hooks which allows us to pull information from the data layer
export const useStateValue = () => useContext(StateContext);
