import React from "react";
import styled from "styled-components";
import { rem } from "../helpers/mixins";

const socialLink = ({ image, linkref,path, alt }) => {
  return (
    <StyledSocial>
      <img src={image} alt={alt} />
      <a href={linkref} target="_blank" rel="noreferrer">
        <p>{linkref}</p>
      </a>
    </StyledSocial>
  );
};

const StyledSocial = styled.section`
  display: flex;
  gap: ${rem(20)};
  img{
      width: 4%;
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
