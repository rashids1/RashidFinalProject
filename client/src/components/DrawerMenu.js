import styled from "styled-components";
import { GlobalContext } from "../globalContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./css/animationForDrawer.css";

const DrawerMenu = () => {
  const {
    currentUser,
    setCurrentUser,
    visibleDrawerMenu,
    setVisibleDrawerMenu,
  } = useContext(GlobalContext);
  const { user, isAuthenticated, logout, loginWithRedirect } = useAuth0();

  const closeDrawer = () => {
    if (visibleDrawerMenu === "visible" || "initial") {
      return setVisibleDrawerMenu("notVisible");
    }
  };

  return (
    <div
      className={
        visibleDrawerMenu === "initial"
          ? "initialState"
          : visibleDrawerMenu === "visible"
          ? "visibleDrawer"
          : visibleDrawerMenu === "notVisible"
          ? "hiddenDrawer"
          : "visible"
      }
    >
      <div className="drawerMenu">
        <NavLink to={"/events/allEvents"}>
          <h5
            onClick={() => {
              closeDrawer();
            }}
          >
            Explore All Events
          </h5>
        </NavLink>

        {currentUser ? (
          <NavLink to={`/user/${currentUser._id}`}>
            <h5
              onClick={() => {
                closeDrawer();
              }}
            >
              Your Account Dashboard
            </h5>
          </NavLink>
        ) : (
          <h5 onClick={() => loginWithRedirect()}>Sign In</h5>
        )}
      </div>
      {currentUser ? (
        <NavLink to={"/createYourOwnEvent"}>
          <button
            onClick={() => {
              closeDrawer();
            }}
          >
            Create Your Own Event!
          </button>
        </NavLink>
      ) : (
        <button onClick={() => loginWithRedirect()}>
          Create Your Own Event!
        </button>
      )}
    </div>
  );
};
export default DrawerMenu;
