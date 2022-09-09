import { createContext, useReducer } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import { device } from "./components/screenSizes";
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [visibleDrawerMenu, setVisibleDrawerMenu] = useState(false);

  const [currentUser, setCurrentUser] = useState(() => {
    const currentUserFromLocalStorage = localStorage.getItem("currentUser");
    if (currentUserFromLocalStorage) {
      return JSON.parse(currentUserFromLocalStorage);
    } else {
      return false;
    }
  });

  const { user, isAuthenticated, logout, loginWithRedirect, loginWithPopup } =
    useAuth0();

  useEffect(() => {
    const currentUserFromLocalStorage = localStorage.getItem("currentUser");
    if (currentUserFromLocalStorage) {
      setCurrentUser(JSON.parse(currentUserFromLocalStorage));
    }
  }, []);

  const pushUserToDb = async () => {
    if (user) {
      let userInfo = {
        ...(user.name && { name: user.name }),
        email: user.email,
        ...(user.locale && { locale: user.locale }),
        ...(user.given_name && { given_name: user.given_name }),
        ...(user.family_name && { family_name: user.family_name }),
        eventsJoined: [],
      };

      try {
        const postUser = await fetch("/newUser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(userInfo),
        });
        const fetchResponse = await postUser.json();
        setCurrentUser(fetchResponse?.data);
      } catch (err) {
        console.log("err", err);
      }
    }
  };

  useEffect(() => {
    pushUserToDb();
  }, [user]);

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  });

  console.log("currentUser", currentUser);

  //1/if user exists send back user object from the database
  //2 if user does not exist in db , create a new user and send back the user object from tnhe db
  // so create new user then send it back to us to use it

  return (
    <GlobalContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        visibleDrawerMenu,
        setVisibleDrawerMenu,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
