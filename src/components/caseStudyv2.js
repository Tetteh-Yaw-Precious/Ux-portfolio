import React from "react";
import styled from "styled-components";
import { rem } from "../helpers/mixins";

//framer
import { motion } from "framer-motion";
import {
  pageAnimation,
  titleAnim,
  nameAnimation,
} from "../animations/animation";

const caseStudyv2 = ({
  weblink,
  caseStudyName,
  caseStudyDetail,
  coverImg,
  color,
  arrow
}) => {
  return (
    <StyledCaseStudy variants={pageAnimation} initial="hidden" animate="show">
      <div className="cover">
        <motion.img
          src={coverImg}
          alt="case study cover"
          variants={nameAnimation}
        />
      </div>
      <div className="info">
        <div className="casestudy-summary">
          <motion.h6 variants={titleAnim} color={color}>
            {caseStudyName}
          </motion.h6>
          <motion.p variants={titleAnim}>
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
        span{
          .arrow{
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
