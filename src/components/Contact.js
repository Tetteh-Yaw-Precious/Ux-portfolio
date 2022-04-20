import React, { useEffect } from "react";
import styled from "styled-components";
import { rem } from "../helpers/mixins";

//icons
import { FaWhatsapp, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

//framer motion
import { motion } from "framer-motion";

//importing component
import SocialLink from "./socialLink";
import { UseScroll } from "./useScroll";

const Contact = ({ setContactStatus }) => {
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
          />
          <SocialLink
            image={<FaWhatsapp className="img" />}
            linkref="let’s connect via Whatsapp"
            path="https://wa.me/233552646695"
          />
          <SocialLink
            image={<FaLinkedin className="img" />}
            linkref="let’s connect via LinkedIn"
            path="https://www.linkedin.com/in/precious-tetteh-431b0418b/"
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
  height: 90vh;
  background-color: #000707;
  display: flex;
  padding: 5% 14%;
  .contact-info {
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
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
      }
    }
    .socials {
      display: flex;
      flex-direction: column;
      gap: ${rem(20)};
    }
  }
  form {
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: ${rem(20)};
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
