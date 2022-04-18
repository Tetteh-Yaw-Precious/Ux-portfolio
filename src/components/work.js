import React from "react";
import styled from "styled-components";
import { rem } from "../helpers/mixins";
import CaseStudy from "./caseStudy";
import CaseStudyv2 from "./caseStudyv2";
import seguahBookswap from "../assets/images/seguah.jpg";
import WestPort from "../assets/images/Westport.jpg";

//framer-motion
import { motion } from "framer-motion";

//react intersection observer
import { UseScroll } from "./useScroll";
const work = () => {
  const [element, controls] = UseScroll();
  return (
    <StyledWork ref={element} animate={controls} id="projects">
      <CaseStudyv2
        coverImg={WestPort}
        caseStudyDetail={`
        A web application that helps the managers of  Wesport Petroleum
         take control of day to day operations by keeping track of sale stocks
          that they sell.
      `}
        caseStudyName={"1. WestPort Petroleum"}
      />{" "}
      <CaseStudy
        coverImg={seguahBookswap}
        caseStudyDetail={`
      Seguah Bookswap is a platform that aims at bringing all and sundry
      who love reading and the creative arts together, together we aim at
      creating a community of book lovers by donating , buying and
      swapping of books within Accra and Ghana as a whole.
    `}
        caseStudyName={"1. Seguah Bookswap"}
      />
    </StyledWork>
  );
};
const StyledWork = styled(motion.section)`
  width: 100%;
  min-height: 100vh;
  padding-left: 15%;
  padding-right: 15%;
  padding-top: 10%;
  padding-bottom: 10%;
  display: flex;
  flex-direction: column;
  gap: ${rem(182)};
`;

export default work;
