import React, { useContext } from "react";
//importing components
import { rem, device } from "../helpers/mixins";
import NavLinks from "./NavLinks";
//styled components
import styled from "styled-components";
//importing images
import brandLogo from "../assets/images/logo.png";
//context
import { NavLinksContext } from "../contexts/NavlinksContext";

const Nav = () => {
  const { navStatus } = useContext(NavLinksContext);
  console.log(`nav:::${navStatus}`)
  return (
    <NavigationBar className="activeNav">
      <div className={`navbar ${navStatus === true ? "activeNav" : ""}`}>
        <img src={brandLogo} alt="my-logo" />
        <NavLinks />
      </div>
    </NavigationBar>
  );
};

const NavigationBar = styled.nav`
  .navbar {
    width: 100%;
    min-height: 10%;
    padding-top: ${rem(16)};
    padding-left: ${rem(60)};
    padding-right: ${rem(60)};
    padding-bottom: ${rem(16)};
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    @media ${device.phone} {
      background-color: white !important;
      height: 100vh;
      flex-direction: column;
      padding-left: ${rem(0)};
      padding-right: ${rem(0)};
      padding-bottom: 70%;
      padding-top: 30%;
      justify-content: space-between;
      z-index: 2;
      transform: translateX(100%);
      transition: all 0.5s ease;
      opacity: 1;
      overflow: hidden;
      position: fixed;
    }
  }
  .activeNav {
    transform: translateX(0%);
    opacity: 1;
  }
`;

export default Nav;
