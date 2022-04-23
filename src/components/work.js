import React, { useEffect } from "react";
import styled from "styled-components";
import { rem, device } from "../helpers/mixins";
import CaseStudy from "./caseStudy";
import CaseStudyv2 from "./caseStudyv2";
import seguahBookswap from "../assets/images/seguah.jpg";
import WestPort from "../assets/images/Westport.jpg";
// import SeguahBrand from "../assets/images/brandingSeguah.png";

//import uuid v4
import { v4 as uuid } from "uuid";

//framer-motion
import { motion } from "framer-motion";
import { titleAnim, pageAnimation } from "../animations/animation";

//icons
import { FaArrowRight } from "react-icons/fa";

//UseScroll

//react intersection observer
import { UseScroll } from "./useScroll";

const Work = ({ workStatus, setWorkStatus }) => {
  //intersection api
  const [element, controls, view] = UseScroll();
  // console.log(workStatus);

  useEffect(() => {
    setWorkStatus(view);
    // console.log(workStatus);
  });

  return (
    <StyledWork
      ref={element}
      animate={controls}
      initial="hidden"
      variants={pageAnimation}
      id="projects"
    >
      <div className="workAd">
        <motion.p variants={titleAnim}>~Recent Works</motion.p>
        <hr />
      </div>
      <div className="caseStudyShowcase">
        <CaseStudyv2
          coverImg={seguahBookswap}
          key={uuid()}
          caseStudyDetail={`
          Seguah Bookswap is a platform that aims at bringing all and sundry
          who love reading and the creative arts together, together we aim at
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
        {/* <CaseStudyv2
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
        /> */}
      </div>
    </StyledWork>
  );
};
const StyledWork = styled(motion.section)`
  width: 100%;
  min-height: 100rem;
  padding-left: 15%;
  padding-right: 15%;
  padding-top: 5%;
  padding-bottom: 10%;
  display: flex;
  flex-direction: column;
  @media ${device.tab_land} {
    padding-top: 10%;
    padding-left: 5%;
    padding-right: 5%;
  }
  @media ${device.tab_port} {
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 15%;
  }
  @media ${device.phone} {
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 30%;
  }
  gap: ${rem(20)};
  .workAd {
    p {
      color: var(--accent-color);
      font-weight: 600;
    }
    .info {
      font-weight: 600;
      font-size: ${rem(32)};
      color: white;
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
  .caseStudyShowcase {
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

export default Work;
