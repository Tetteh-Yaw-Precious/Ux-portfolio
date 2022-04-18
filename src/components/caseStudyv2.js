import React from "react";
import styled from "styled-components";
import { rem } from "../helpers/mixins";
import arrowIcon from "../assets/images/arrow.png";

const caseStudyv2 = ({ weblink, caseStudyName, caseStudyDetail, coverImg }) => {
  return (
    <StyledCaseStudy>
      <div className="cover">
        <img src={coverImg} alt="case study cover" />
      </div>
      <div className="info">
        <div className="casestudy-summary">
          <h6>{caseStudyName}</h6>
          <p>
            {/* Seguah Bookswap is a platform that aims at bringing all and sundry{" "}
          <br />
          who love reading and the creative arts together, together we aim at{" "}
          <br />
          creating a community of book lovers by donating , buying and <br />
          swapping of books within Accra and Ghana as a whole */}
            {caseStudyDetail}
          </p>
          <a href={weblink} target="_blank" rel="noreferrer">
            Read case study <img src={arrowIcon} alt="forward icon" />
          </a>
        </div>
      </div>
    </StyledCaseStudy>
  );
};

const StyledCaseStudy = styled.section`
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
        color:hsla(212, 100%, 23%, 1);
;
        font-weight: 600;
        font-family: var(--primary-font);
      }
      a {
        cursor: pointer;
        color: var(--case-study-link-color);
        display: flex;
        gap: 0.5rem;
      }
    }
  }
  .cover {
    img {
      width: 100%;
    }
  }
`;

export default caseStudyv2;
