import styled from "styled-components";
import { GlobalContext } from "../globalContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const DrawerMenu = () => {
  const {
    currentUser,
    setCurrentUser,
    visibleDrawerMenu,
    setVisibleDrawerMenu,
  } = useContext(GlobalContext);
  const { user, isAuthenticated, logout, loginWithRedirect, loginWithPopup } =
    useAuth0();

  const closeDrawer = () => {
    if (visibleDrawerMenu === true) {
      return setVisibleDrawerMenu(false);
    }
  };

  console.log(visibleDrawerMenu);
  return (
    <StyledDrawerDiv visible={visibleDrawerMenu}>
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
        <NavLink to={"/eventsNearYou"}>
          <h5
            onClick={() => {
              closeDrawer();
            }}
          >
            Events near you
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

      <button>Create Your Own Event!</button>
    </StyledDrawerDiv>
  );
};
export default DrawerMenu;

const StyledDrawerDiv = styled.div`
  a {
    text-decoration: none;
    color: inherit;
  }
  opacity: 0;
  ${(props) =>
    props.visible
      ? `
      display: flex;
      width:75%;  
      opacity: 1;
    `
      : `display: none;
      `};
  transition: opacity 3s;
  flex-direction: column;
  position: absolute;
  z-index: 3;
  background-color: #e8e8e8;

  height: 100vh;
`;
