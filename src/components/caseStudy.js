import React from "react";
import styled from "styled-components";
import { rem, device } from "../helpers/mixins";

//Framer-motion
import { motion } from "framer-motion";
import {
  pageAnimation,
  titleAnim,
  nameAnimation,
} from "../animations/animation";

const caseStudy = ({
  weblink,
  caseStudyName,
  caseStudyDetail,
  coverImg,
  arrow,
}) => {
  return (
    <StyledCaseStudy variants={pageAnimation} initial="hidden" animate="show">
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
          <motion.a
            href={weblink}
            target="_blank"
            rel="noreferrer"
            variants={titleAnim}
          >
            Read case study <span>{arrow}</span>
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
  @media ${device.phone} {
    flex-direction: column-reverse;
  }
  .info {
    width: 50%;
    display: flex;
    padding: 4rem;
    padding-left: 0;
    @media ${device.phone} {
      width: 100%;
      padding: 2rem;  
      padding-left: 0;
      padding-right: 0;

    }
    .casestudy-summary {
      display: flex;
      flex-direction: column;
      gap: ${rem(10)};
      @media ${device.phone} {
    }

      h6 {
        color: hsla(231, 91%, 21%, 1);
        font-weight: 600;
        font-family: var(--primary-font);
      }
      a {
        cursor: pointer;
        color: hsla(231, 91%, 21%, 1);
        display: flex;
        gap: 0.5rem;
        color: var(--case-study-link-color);
        span {
          .arrow {
            font-size: 1.1rem;
            color: var(--case-study-link-color);
          }
        }
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
