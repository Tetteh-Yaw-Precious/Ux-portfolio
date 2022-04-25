import React, { useContext } from "react";
import { Link } from "react-scroll/modules";
import styled from "styled-components";
import { rem, device } from "../helpers/mixins";

//importing Framer motion
// import { motion } from "framer-motion";

//Context
import { NavLinksContext } from "../contexts/NavlinksContext";

const NavLinks = () => {
  const { setWorkStatus, setNavStatus, navStatus } =
    useContext(NavLinksContext);

  //setting homeStatus
  function settingHomeStatus() {
    if (window.innerWidth <= 600) {
      setNavStatus(!navStatus);
    }
  }

  //setting workstatus
  function settingWorkStat(passLinkState, passNavState) {
    if (window.innerWidth <= 600) {
      setWorkStatus(true);
      setNavStatus(!navStatus);
    }
  }

  //setting homeStatus
  function settingContactStatus() {
    if (window.innerWidth <= 600) {
      setNavStatus(!navStatus);
    }
  }

  return (
    <NavWrapper>
      <li>
        <Link
          activeClass="active"
          to="heroSection"
          spy={true}
          smooth={true}
          onClick={settingHomeStatus}
        >
          Home
        </Link>
        {/* <Line
          transition={{ duration: 0.75 }}
          initial={{ width: "0  // const { workStatus, homeStatus, contactStatus } = useContext(NavLinksContext);%" }}
          animate={{ width: homeStatus === true ? "100%" : "0%" }}
        /> */}
      </li>
      <li>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          onClick={settingWorkStat}
        >
          Work
        </Link>
        {/* <Line
          transition={{ duration: 0.75 }}
          initial={{ width: "0%" }}
          animate={{ width: workStatus === true ? "100%" : "0%" }}
        /> */}
      </li>
      {/* <li>
        <Link activeClass="active" to="About" spy={true} smooth={true}>
          About
        </Link>
      </li> */}
      <li>
        <Link
          activeClass="active"
          to="contactPage"
          spy={true}
          smooth={true}
          onClick={settingContactStatus}
        >
          Contact
        </Link>
        {/* <Line
          transition={{ duration: 0.75 }}
          initial={{ width: "0%" }}
          animate={{ width: contactStatus === true ? "100%" : "0%" }}
        /> */}
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
  @media ${device.phone} {
    flex-direction: column;
  }
  li {
    color: var(--text-black) !important;
    font-family: var(--secondary-font);
    position: relative;
    :last-child {
      color: var(--accent-color) !important;
    }
  }
  .active {
    color: #00915c;
    /* border-bottom: 2px solid #00915c; */
    padding: 0 0 0.5rem 0;
  }
`;

// const Line = styled(motion.div)`
//   height: 0.2rem;
//   background: var(--accent-color);
//   width: 0%;
//   position: absolute;
//   bottom: -30%;
//   left: -2%;
// `;

export default NavLinks;
