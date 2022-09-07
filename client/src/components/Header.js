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

const Header = () => {
  const { user, isAuthenticated, logout, loginWithRedirect } = useAuth0();
  const { currentUser, setCurrentUser } = useContext(GlobalContext);

  const logmeout = async (event) => {
    event.preventDefault();
    setCurrentUser(false);
    logout();
  };

  return (
    <HeaderWrapper>
      <NavLink to="/">
        <h1 className="logo">Logo</h1>
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
          <IconContext.Provider value={{ color: "black", size: "30px" }}>
            <div className="acountIcon">
              <button onClick={() => loginWithRedirect()}>
                <MdAccountCircle />
              </button>
            </div>
          </IconContext.Provider>
        )}

        <IconContext.Provider value={{ color: "black", size: "30px" }}>
          <div className="mobileMenuIcon">
            <AiOutlineMenu />
          </div>
        </IconContext.Provider>
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
  height: 10vh;
  border: solid red 1px;
  margin: 0;
  .textArea {
    display: none;
  }

  .searchBar {
    display: none;
  }
  .logo {
    margin: 0 0 0 12px;
  }

  .MobileAccountMenuDiv {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .acountIcon {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    button {
      border: none;
      background-color: white;
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
