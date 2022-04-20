import React from "react";
import styled from "styled-components";
import { rem } from "../helpers/mixins";
import arrowIcon from "../assets/images/arrow.png";

//Framer-motion
import { motion } from "framer-motion";
import {  pageAnimation,titleAnim ,nameAnimation} from "../animations/animation";

const caseStudy = ({ weblink, caseStudyName, caseStudyDetail, coverImg }) => {
  return (
    <StyledCaseStudy variants={pageAnimation} initial="hidden" animate="show" >
      <div className="info">
        <div className="casestudy-summary">
          <motion.h6 variants={titleAnim}>{caseStudyName}</motion.h6>
          <motion.p variants={titleAnim}>
            {/* Seguah Bookswap is a platform that aims at bringing all and sundry{" "}
            <br />
            who love reading and the creative arts together, together we aim at{" "}
            <br />
            creating a community of book lovers by donating , buying and <br />
            swapping of books within Accra and Ghana as a whole */}
            {caseStudyDetail}
          </motion.p>
          <motion.a href={weblink} target="_blank" rel="noreferrer" variants={titleAnim}>
            Read case study <img src={arrowIcon} alt="forward icon" />
          </motion.a>
        </div>
      </div>
      <div className="cover">
        <motion.img
          src={coverImg}
          alt="case study cover"
          variants={nameAnimation}
        />
      </div>
    </StyledCaseStudy>
  );
};
const StyledCaseStudy = styled(motion.section)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  .info {
    width: 50%;
    display: flex;
    padding: 4rem;
    padding-left: 0;
    .casestudy-summary {
      display: flex;
      flex-direction: column;
      gap: ${rem(24)};
      h6 {
        color: hsla(294, 49%, 30%, 1);
        font-weight: 600;
        font-family: var(--primary-font);
      }
      a {
        cursor: pointer;
        color: hsla(231, 91%, 21%, 1);
        display: flex;
        gap: 0.5rem;
        color: var(--case-study-link-color);
      }
    }
  }
  .cover {
    width: 100%;
    img {
      width: 100%;
    }
  }
`;

export default caseStudy;
