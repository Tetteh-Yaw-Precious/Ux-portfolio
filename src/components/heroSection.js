import React, { useEffect } from "react";
import styled from "styled-components";
import pattern from "../assets/images/background.png";
import { rem, device } from "../helpers/mixins";
import { Link } from "react-scroll";

//importing animation
import { motion } from "framer-motion";
import { pageAnimation, slideIn, titleAnim } from "../animations/animation";

//react intersection observer import React from "react"; import styled from "styled-components"; import { device } from "../helpers/Mixins"; import Tetteh_Yaw_Precious from "../images/Tetteh_Yaw_Precious.png"; //importing Animation import { motion } from "framer-motion"; import { pageAnimation } from "../animations/Pageanimation"; import { UseScroll } from "./Usescroll";  const About = () => {   const [element, controls] = UseScroll();   return (     <StyledAbout id="about">       <motion.div         ref={element}         className="mainaboutCt"         variants={pageAnimation}         intial="hidden"         animate={controls}         exit="exit"       >         <div className="abouttext">           <h4>About</h4>           <h1>Here is something little about me </h1>           <p>             Hello! My name is Tetteh Yaw Precious, I love to design and work on             digital products. Me being introduced closely to the tech industry             during a three-week boot camp in 2019, gave me the urge to know more             and add to what I have been introduced to as a lifelong learner             built and developed my interest in Web development, Graphic Design,             User Interface Design, and IoT. Since then I’ve worked par-time and             freelance as Graphic Designer, Brand Identity Designer, UI/UX             designer and frontend Developer on teams to working on various             projects.           </p>         </div>         <div className="myimage">           <img src={Tetteh_Yaw_Precious} alt="Tetteh Yaw Precious" />         </div>       </motion.div>     </StyledAbout>   );
import { UseScroll } from "./useScroll";

const HeroSection = ({ homeStatus, setHomeStatus }) => {
  //intersection api
  const [element, controls, view] = UseScroll();

  //setting homeStatus import React from "react"; import styled from "styled-components"; import { device } from "../helpers/Mixins"; import Tetteh_Yaw_Precious from "../images/Tetteh_Yaw_Precious.png"; //importing Animation import { motion } from "framer-motion"; import { pageAnimation } from "../animations/Pageanimation"; import { UseScroll } from "./Usescroll";  const About = () => {   const [element, controls] = UseScroll();   return (     <StyledAbout id="about">       <motion.div         ref={element}         className="mainaboutCt"         variants={pageAnimation}         intial="hidden"         animate={controls}         exit="exit"       >         <div className="abouttext">           <h4>About</h4>           <h1>Here is something little about me </h1>           <p>             Hello! My name is Tetteh Yaw Precious, I love to design and work on             digital products. Me being introduced closely to the tech industry             during a three-week boot camp in 2019, gave me the urge to know more             and add to what I have been introduced to as a lifelong learner             built and developed my interest in Web development, Graphic Design,             User Interface Design, and IoT. Since then I’ve worked par-time and             freelance as Graphic Designer, Brand Identity Designer, UI/UX             designer and frontend Developer on teams to working on various             projects.           </p>         </div>         <div className="myimage">           <img src={Tetteh_Yaw_Precious} alt="Tetteh Yaw Precious" />         </div>       </motion.div>     </StyledAbout>   );
  useEffect(() => {
    setHomeStatus(view);
  });
  return (
    <StyledHero
      variants={pageAnimation}
      ref={element}
      animate={controls}
      id="heroSection"
    >
      {/* <img src={pattern} alt="pattern" /> */}
      <div className="details">
        <div className="title">
          <motion.h1 variants={titleAnim}>
            👋🏾 I’m <span>Yaw Precious</span>
          </motion.h1>
          <motion.h6 variants={titleAnim}>
            ~a UX/UI Designer from Accra, Ghana 🇬🇭.
          </motion.h6>
          <motion.div className="divider" variants={slideIn}>
            <motion.hr />
          </motion.div>
          <motion.p variants={titleAnim}>
            Hi, call me Yaw, that’s the name given to a male child born on
            thursday in Ghana, as a <br />
            proud Yaw I love adventure and I thrive in strking a balance between
            clean and <br />
            considered outcomes that breathe life into product.
          </motion.p>
          <motion.button variants={slideIn}>
            <Link to="projects" spy={true} smooth={true}>
              my projects
            </Link>
          </motion.button>
        </div>
      </div>
    </StyledHero>
  );
};

const StyledHero = styled(motion.section)`
  height: 100vh;
  display: flex;
  background: url(${pattern});
  width: 100%;
  background-size: cover;
  background-position: center;
  @media ${device.phone} {
    justify-content: center;
    height: 90vh;
    align-items: center;
  }

  .details {
    padding-top: ${rem(200)};
    padding-left: 10%;
    @media ${device.phone} {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
    }

    .title {
      @media ${device.phone} {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      h1 {
        font-weight: 200 !important;
        letter-spacing: -0.4rem;
        line-height: 120%;
        @media ${device.phone} {
          font-size: ${rem(40)};
        }
        span {
          font-weight: 700;
          color: var(--accent-color);
        }
      }
      h6 {
        padding-left: 9rem;
        @media ${device.phone} {
          padding-left: 0;
          font-size: ${rem(16)};
          padding-top: 0.5rem;
        }
      }
      .divider {
        display: flex;
        width: 67%;
        justify-content: flex-end;
        padding-top: ${rem(40)};
        padding-bottom: ${rem(40)};
        hr {
          padding-left: 9rem !important;
          border: 0.01rem solid var(--text-black);
          width: 75%;
          @media ${device.phone} {
            padding-left: 0 !important;
            width: 100%;
          }
        }
      }
      p {
        padding-left: 9rem;
        padding-bottom: ${rem(20)};
        @media ${device.phone} {
          padding: 0 10% 10% 10%;
          text-align: center;
        }
      }
      button {
        padding: 0.8rem 3rem;
        border-radius: 0.2rem;
        margin-left: 9rem;
        background-color: var(--accent-color);
        color: white;
        @media ${device.phone} {
          margin-left: 0;
          margin: 0 10%;
          width: 80%;
        }
      }
    }
  }
`;

export default HeroSection;
