import React, { useEffect } from "react";
import styled from "styled-components";
import { rem } from "../helpers/mixins";
import CaseStudy from "./caseStudy";
import CaseStudyv2 from "./caseStudyv2";
import seguahBookswap from "../assets/images/seguah.jpg";
import WestPort from "../assets/images/Westport.jpg";

//framer-motion
import { motion } from "framer-motion";
import { pageAnimation,titleAnim } from "../animations/animation";

//UseScroll 

//react intersection observer
import { UseScroll } from "./useScroll";

const Work = ({ workStatus, setWorkStatus }) => {
  //intersection api
  const [element, controls, view] = UseScroll();
  // console.log(workStatus);

  useEffect(() => {
    setWorkStatus(view);
    // console.log(workStatus);
  });

  return (
    <StyledWork ref={element} animate={controls} initial="hidden" variants={pageAnimation}id="projects" exit="exit">
      <div className="workAd">
        <motion.p variants={titleAnim}>~Recent Works</motion.p>
        <hr />
      </div>
      <div className="caseStudyShowcase" variants={titleAnim}>
        <CaseStudyv2
          coverImg={WestPort}
          variants={titleAnim}
          caseStudyDetail={`
        A web application that helps the managers of  Wesport Petroleum
         take control of day to day operations by keeping track of sale stocks
          that they sell.
      ` }
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
          caseStudyName={"2. Seguah Bookswap"}
        />
      </div>
    </StyledWork>
  );
};
const StyledWork = styled(motion.section)`
  width: 100%;
  min-height: 100vh;
  padding-left: 15%;
  padding-right: 15%;
  padding-top: 5%;
  padding-bottom: 10%;
  display: flex;
  flex-direction: column;
  gap: ${rem(20)};
  .workAd {
    p {
      color: var(--accent-color);
      font-weight: 600;
    }
    .info {
      font-weight: 600;
      font-size: ${rem(32)};
      color: white;
    }
    hr {
      width: 9%;
      border: 1px solid var(--accent-color);

    }
  }
  .caseStudyShowcase {
    display: flex;
    flex-direction: column;
    gap: ${rem(182)};
  }
`;

export default Work;
