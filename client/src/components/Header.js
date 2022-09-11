import styled from "styled-components";
import { useContext } from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { IoMdLogOut } from "react-icons/io";
import { device } from "./screenSizes";
import { MdAccountCircle } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { GlobalContext } from "../globalContext";
import { useAuth0 } from "@auth0/auth0-react";
import DrawerMenu from "./DrawerMenu";
import logo from "../pictures/ExteriorDynamic.png";

const Header = () => {
  const { user, isAuthenticated, logout, loginWithRedirect } = useAuth0();
  const {
    currentUser,
    setCurrentUser,
    visibleDrawerMenu,
    setVisibleDrawerMenu,
  } = useContext(GlobalContext);

  const logmeout = async (event) => {
    event.preventDefault();
    setCurrentUser(false);
    logout();
  };

  const settheDrawer = () => {
    if (visibleDrawerMenu === "initial") {
      setVisibleDrawerMenu("visible");
    } else if (visibleDrawerMenu === "visible") {
      setVisibleDrawerMenu("notVisible");
    } else if (visibleDrawerMenu === "notVisible") {
      setVisibleDrawerMenu("visible");
    }
  };

  return (
    <HeaderWrapper>
      <IconContext.Provider value={{ color: "black", size: "30px" }}>
        <div className="mobileMenuIcon">
          <button onClick={() => settheDrawer()}>
            <AiOutlineMenu />
          </button>
        </div>
      </IconContext.Provider>

      <NavLink to="/">
        <div className="logoDiv"></div>
      </NavLink>

      <div className="MobileAccountMenuDiv">
        {currentUser ? (
          <IconContext.Provider value={{ color: "black", size: "30px" }}>
            <div className="acountIcon">
              <span>{currentUser?.given_name}</span>
              <button onClick={(event) => logmeout(event)}>
                <IoMdLogOut />
              </button>
            </div>
          </IconContext.Provider>
        ) : (
          <IconContext.Provider
            value={{ color: "black", size: "30px", width: "10px" }}
          >
            <div className="acountIcon">
              <button onClick={() => loginWithRedirect()}>
                <MdAccountCircle />
              </button>
            </div>
          </IconContext.Provider>
        )}
      </div>

      <IconContext.Provider value={{ color: "black", size: "22.5px" }}>
        <div className="searchBar">
          <textarea className="textArea" placeholder="Search..."></textarea>
          <BsSearch />
        </div>
      </IconContext.Provider>
    </HeaderWrapper>
  );
};
export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 8vh;

  margin: 0;
  background-color: white;

  .logoDiv {
    width: 200px;
    height: 200px;
    background-image: url(${logo});
    background-size: cover;
    background-position: center;
  }
  .textArea {
    display: none;
  }

  .searchBar {
    display: none;
  }
  .logo {
    margin: 0 0 0 12px;
  }

  .acountIcon {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: var(--4th-color);
    border-radius: 3px;
    border: 1px solid rgb(118, 118, 118);
    padding: 1px;
    margin: 14px;

    button {
      border: none;
      background-color: var(--4th-color);
      border-radius: 2px;
    }
  }

  .mobileMenuIcon {
    margin: 14px;
  }

  @media ${device.laptop} {
    justify-content: space-between;
    .mobileMenuIcon {
      display: none;
    }
    .textArea {
      display: flex;
    }

    .searchBar {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
