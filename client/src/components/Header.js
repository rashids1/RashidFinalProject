import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { device } from "./screenSizes";
const Header = () => {
  return (
    <HeaderWrapper>
      <h1 className="logo">Logo</h1>
      <IconContext.Provider value={{ color: "black", size: "30px" }}>
        <div className="mobileMenuIcon">
          <AiOutlineMenu />
        </div>
      </IconContext.Provider>
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
  .mobileMenuIcon {
    margin: 0 12px 0 0;
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
