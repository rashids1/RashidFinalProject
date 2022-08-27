import { createContext, useReducer } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  //1/if user exists send back user object from the database
  //2 if user does not exist in db , create a new user and send back the user object from tnhe db
  // so create new user then send it back to us to use it

  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
};
