import React from "react";
import styled from "styled-components";

//importing components
import Navbar from "./nav";
import HeroSection from "./heroSection";

const landingPage = ({workStatus,homeStatus,setHomeStatus}) => {
  return (
    <StyledLandingPage>
      <Navbar workStatus={workStatus} homeStatus={homeStatus}/>
      <HeroSection homeStatus={homeStatus} setHomeStatus={setHomeStatus} />
    </StyledLandingPage>
  );
};

const StyledLandingPage = styled.section`
  height: 100vh;
`;

export default landingPage;
