import styled from "styled-components";
import { device } from "./screenSizes";

const NavBar = () => {
  return (
    <NavBarWrapper>
      <span>option1</span>
      <span>option1</span>
      <span>option1</span>
      <span>option1</span>
    </NavBarWrapper>
  );
};
export default NavBar;

const NavBarWrapper = styled.div`
  display: none;
  @media ${device.laptop} {
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
  }
`;
