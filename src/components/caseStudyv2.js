import React from "react";
import styled from "styled-components";
import { rem, device } from "../helpers/mixins";

//framer
import { motion } from "framer-motion";
// import {
//   pageAnimation,
//   titleAnim,
//   nameAnimation,
// } from "../animations/animation";

const caseStudyv2 = ({
  weblink,
  caseStudyName,
  caseStudyDetail,
  coverImg,
  color,
  arrow,
}) => {
  return (
    <StyledCaseStudy>
      <div className="cover">
        <motion.img src={coverImg} alt="case study cover" />
      </div>
      <div className="info">
        <div className="casestudy-summary">
          <motion.h6 color={color}>{caseStudyName}</motion.h6>
          <motion.p>{caseStudyDetail}</motion.p>
          <motion.a href={weblink} target="_blank" rel="noreferrer">
            Read case study <span>{arrow}</span>
          </motion.a>
        </div>
      </div>
    </StyledCaseStudy>
  );
};

const StyledCaseStudy = styled(motion.section)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media ${device.tab_port} {
    flex-direction: column;
  }
  @media ${device.phone} {
    flex-direction: column;
  }
  .info {
    width: 50%;
    display: flex;
    padding: 4rem;
    @media ${device.tab_land} {
      width: 50%;
    }
    @media ${device.tab_port} {
      width: 100%;
      padding: 2rem;
      padding-left: 0;
      padding-right: 0;
    }
    @media ${device.phone} {
      width: 100%;
      padding: 2rem;
      padding-left: 0;
      padding-right: 0;
    }
    .casestudy-summary {
      display: flex;
      flex-direction: column;
      gap: ${rem(24)};
      h6 {
        /* color: hsla(212, 100%, 23%, 1); */
        font-weight: 600;
        font-family: var(--primary-font);
        color: hsla(294, 49%, 30%, 1);
      }
      a {
        cursor: pointer;
        color: var(--case-study-link-color);
        display: flex;
        gap: 0.5rem;
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

export default caseStudyv2;
