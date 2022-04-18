import React from "react";
import { Link } from "react-scroll/modules";
import styled from "styled-components";
import { rem } from "../helpers/mixins";

//importing Framer motion
import { motion } from "framer-motion";

const navLinks = () => {
  return (
    <NavWrapper>
      <li>
        <Link activeClass="active" to="projects" spy={true} smooth={true}>
          Work
        </Link>
        <Line
          transition={{ duration: 0.75 }}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
        />
      </li>
      <li>
        <Link activeClass="active" to="home" spy={true} smooth={true}>
          About
        </Link>
      </li>
      <li>
        <Link activeClass="active" to="home" spy={true} smooth={true}>
          Contact
        </Link>
      </li>
      <li>
        <Link activeClass="active" to="home" spy={true} smooth={true}>
          Download CV
        </Link>
      </li>
    </NavWrapper>
  );
};

const NavWrapper = styled.ul`
  display: flex;
  gap: ${rem(48)};
  li {
    color: var(--text-black) !important;
    font-family: var(--secondary-font);
    position: relative;
    :last-child {
      color: var(--accent-color) !important;
    }
    .active {
      border: 1px solid green;
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.2rem;
  background: var(--accent-color);
  width: 0%;
  position: absolute;
  bottom: -30%;
  left: -2%;
`;

export default navLinks;
