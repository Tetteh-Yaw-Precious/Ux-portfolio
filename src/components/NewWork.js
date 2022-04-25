import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { device, rem } from "../helpers/mixins";
import { UseScroll } from "./useScroll";
import { motion } from "framer-motion";
//context
import { NavLinksContext } from "../contexts/NavlinksContext";

import CaseStudy from "./caseStudy";
import CaseStudyv2 from "./caseStudyv2";
import seguahBookswap from "../assets/images/seguah.jpg";

import WestPort from "../assets/images/Westport.jpg";
import SeguahBrand from "../assets/images/brandingSeguah.png";
//import uuid v4
import { v4 as uuid } from "uuid";
import { FaArrowRight } from "react-icons/fa";

const NewWork = () => {
  const { workStatus, setWorkStatus } = useContext(NavLinksContext);
  const [element, controls, view] = UseScroll();

  // useEffect(() => {
  //   setWorkStatus(view);
  //   console.log(workStatus);
  // });

  return (
    <StyledWork id="projects" animate={controls} ref={element}>
      <div className="heading">
        <p>~Recent Works</p>
        <hr />
      </div>
      <div className="caseStudyCt">
        <CaseStudyv2
          coverImg={seguahBookswap}
          key={uuid()}
          caseStudyDetail={`
          Seguah Bookswap is a platform that aims at bringing all and sundry
          who love reading and the creative arts  console.log(workStatus); together, together we aim at
          creating a community of book lovers by donating , buying and
          swapping of books within Accra and Ghana as a whole.
      `}
          caseStudyName={"1. Seguah Bookswap UI/UX"}
          weblink="https://www.behance.net/gallery/142178211/Seguah-Bookswap"
          arrow={<FaArrowRight className="arrow" />}
        />
        <CaseStudy
          coverImg={WestPort}
          caseStudyDetail={`
          A web application that helps the managers of  Wesport Petroleum
          take control of day to day operations by keeping track of sale stocks
           that they sell.
    `}
          caseStudyName={"2. WestPort Petroleum UI/UX"}
          weblink="https://www.behance.net/gallery/142086471/WestPort-Petroluem-MDashboard-Case-Study"
          arrow={<FaArrowRight className="arrow" />}
        />
        <CaseStudyv2
          coverImg={SeguahBrand}
          caseStudyDetail={`
          Seguah Bookswap is a platform that aims at bringing all and sundry
          who love reading and the creative arts together, together we aim at
          creating a community of book lovers by donating , buying and
          swapping of books within Accra and Ghana as a whole.
      `}
          caseStudyName={"3. Bookswap Brand Design"}
          weblink="https://www.behance.net/gallery/142190819/Seguah-Bookswap-Brand-Identity"
          arrow={<FaArrowRight className="arrow" />}
          key={uuid()}
        />
      </div>
    </StyledWork>
  );
};

const StyledWork = styled(motion.section)`
  width: 100%;
  min-height: 100vh;
  padding: 5% 10%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  .heading {
    p {
      color: var(--accent-color);
      font-weight: 600;
    }
    hr {
      width: 9%;
      border: 1px solid var(--accent-color);
      @media ${device.tab_land} {
        width: 20%;
      }
      @media ${device.tab_port} {
        width: 20%;
      }
      @media ${device.phone} {
        width: 40%;
      }
    }
  }
  .caseStudyCt {
    display: flex;
    flex-direction: column;
    gap: ${rem(100)};
    min-height: 90vh;
    @media ${device.tab_port} {
      gap: ${rem(50)};
    }
    @media ${device.phone} {
      gap: ${rem(50)};
    }
  }
`;

export default NewWork;
