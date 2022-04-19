import React from "react";

//importing components
import { rem } from "../helpers/mixins";
import NavLinks from "../components/navLinks";
//styled components
import styled from "styled-components";
//importing images
import brandLogo from "../assets/images/logo.png";

const nav = ({ workStatus, setWorkStatus,homeStatus, contactStatus}) => {
  return (
    <NavigationBar>
      <img src={brandLogo} alt="my-logo" />
      <NavLinks workStatus={workStatus} setWorkStatus={setWorkStatus} homeStatus={homeStatus} contactStatus={contactStatus}/>
    </NavigationBar>
  );
};

const NavigationBar = styled.nav`
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
  background-color: white;
`;

export default nav;
