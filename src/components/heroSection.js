import React from "react";
import styled from "styled-components";
import pattern from "../assets/images/background.png";
import { rem } from "../helpers/mixins";
import { Link } from "react-scroll";

//importing animation
import { motion } from "framer-motion";
import { pageAnimation, slideIn, titleAnim } from "../animations/animation";

const heroSection = () => {
  return (
    <StyledHero variants={pageAnimation} initial="hidden" animate="show">
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
            <Link>my projects</Link>
          </motion.button>
        </div>
      </div>
    </StyledHero>
  );
};

const StyledHero = styled(motion.section)`
  height: 90vh;
  display: flex;
  img {
    position: absolute;
    top: -7rem;
    left: 23.8rem;
    overflow-y: hidden !important;
    width: 80%;
    z-index: -1;
  }
  .details {
    padding-top: ${rem(162)};
    padding-left: ${rem(218)};
    .title {
      h1 {
        font-weight: 200 !important;
        letter-spacing: -0.4rem;
        line-height: 120%;
        span {
          font-weight: 700;
          color: var(--accent-color);
        }
      }
      h6 {
        padding-left: 9rem;
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
        }
      }
      p {
        padding-left: 9rem;
        padding-bottom: ${rem(20)};
      }
      button {
        padding: 0.8rem 3rem;
        border-radius: 0.2rem;
        margin-left: 9rem;
      }
    }
  }
`;

export default heroSection;
