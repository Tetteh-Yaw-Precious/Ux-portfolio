import React from "react";
import styled from "styled-components";

//importing components
import Navbar from "./nav";
import HeroSection from "./heroSection";

const landingPage = () => {
  return (
    <StyledLandingPage>
      <Navbar/>
      <HeroSection/>
    </StyledLandingPage>
  );
};

const StyledLandingPage = styled.section`
  height: 100vh;
`;

export default landingPage;
