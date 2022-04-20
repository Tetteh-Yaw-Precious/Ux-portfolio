import React from "react";
import styled from "styled-components";
import { rem } from "../helpers/mixins";

const socialLink = ({ image, linkref, path, alt }) => {
  return (
    <StyledSocial>
      <div className="imageCt">{image}</div>
      <a href={linkref} target="_blank" rel="noreferrer">
        <p>{linkref}</p>
      </a>
    </StyledSocial>
  );
};

const StyledSocial = styled.section`
  display: flex;
  align-items: center;
  gap: ${rem(20)};
  .imageCt {
    width: 4%;
    color: white;
    .img{
      font-size: 1.5rem;
    }
  }
  a {
    text-decoration: none;
    font-family: var(--primary-font);
    color: white !important;
  }
  p {
    color: white;
  }
`;

export default socialLink;
