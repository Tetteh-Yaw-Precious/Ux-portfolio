import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { rem, device } from "../helpers/mixins";
import { v4 as uuid } from "uuid";

//icons
import { FaWhatsapp, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

//framer motion
import { motion } from "framer-motion";

//importing component
import SocialLink from "./socialLink";
import { UseScroll } from "./useScroll";
//context
import { NavLinksContext } from "../contexts/NavlinksContext";

const Contact = () => {
  //contexts
  const { setContactStatus } = useContext(NavLinksContext);

  //react intersection observer
  const [element, controls, view] = UseScroll();

  //useEffect
  useEffect(() => {
    setContactStatus(view);
    // console.log(workStatus);
  });

  return (
    <StyledContact ref={element} id="contactPage" animate={controls}>
      <div className="contact-info">
        <div className="ad">
          <p>~ Contact me</p>
          <hr />
          <p className="info">
            Interested in working <br />
            together ?
          </p>
        </div>
        <div className="socials">
          <SocialLink
            image={<FaPhoneAlt className="img" />}
            linkref="tel:(+233)596555397"
            path="tel:(+233)596555397"
            key={uuid()}
          />
          <SocialLink
            image={<FaWhatsapp className="img" />}
            linkref="let’s connect via Whatsapp"
            path="https://wa.me/233552646695"
            key={uuid()}
          />
          <SocialLink
            image={<FaLinkedin className="img" />}
            linkref="let’s connect via LinkedIn"
            path="https://www.linkedin.com/in/precious-tetteh-431b0418b/"
            key={uuid()}
          />
        </div>
      </div>
      <form>
        <input type="email" placeholder="Enter your email" required />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Enter your message"
        ></textarea>
        <div className="buttonCt">
          <button type="button">send</button>
        </div>
      </form>
    </StyledContact>
  );
};

const StyledContact = styled(motion.section)`
  min-height: 100vh;
  background-color: #000707;
  display: flex;
  align-items: center;
  padding: 5% 14%;

  @media ${device.tab_land} {
    padding: 5% 5%;
  }
  @media ${device.tab_port} {
    flex-direction: column;
    padding: 15% 5%;
    min-height: 100vh;
    gap: 2rem;
  }
  @media ${device.phone} {
    flex-direction: column;
    padding: 15% 5%;
    min-height: 100vh;
    gap: 2rem;
  }
  .contact-info {
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    @media ${device.tab_port} {
      width: 100%;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
    @media ${device.phone} {
      flex-direction: column;
      width: 100%;
      gap: 1rem;
      align-items: flex-start;
    }
    align-items: flex-start;
    .ad {
      display: flex;
      flex-direction: column;
      gap: ${rem(8)};
      p {
        color: white;
        font-weight: 600;
      }
      .info {
        font-weight: 600;
        font-size: ${rem(32)};
        color: white;
      }
      hr {
        width: 20%;
        color: var(--accent-color);
        border: 1px solid var(--accent-color);
        @media ${device.tab_port} {
          width: 35%;
        }
        @media ${device.phone} {
          width: 40%;
        }
      }
    }
    .socials {
      display: flex;
      flex-direction: column;
      gap: ${rem(20)};
      padding-top: 6rem;
      @media ${device.phone} {
        justify-content: flex-start;
      }
    }
  }
  form {
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: ${rem(20)};
    @media ${device.phone} {
      width: 100%;
    }
    @media ${device.tab_port} {
      width: 100%;
    }
    input {
      padding: 1rem 3rem;
      outline: none;
      min-height: 4rem;
      &:focus {
        border: 2px solid var(--accent-color);
        font-family: var(--secondary-font);
        font-size: 1rem;
      }
      &::placeholder {
        color: #7b7b7b;
        font-family: var(--secondary-font);
        font-size: ${rem(16)};
      }
    }
    textarea {
      height: 50%;
      padding: 2rem 3rem;
      outline: none;
      &:focus {
        border: 2px solid var(--accent-color);
      }
      &::placeholder {
        color: #7b7b7b;
        font-family: var(--secondary-font);
        font-size: ${rem(16)};
      }
      &:focus {
        font-family: var(--secondary-font);
        font-size: 1rem;
      }
    }
    .buttonCt {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      button {
        color: white;
        background: var(--accent-color);
        padding-left: 6rem;
        padding-right: 6rem;
      }
    }
  }
`;

export default Contact;
