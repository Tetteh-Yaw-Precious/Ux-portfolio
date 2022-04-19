import React, { useEffect } from "react";
import styled from "styled-components";
import { rem } from "../helpers/mixins";
import call from "../assets/images/call.png";
import whatsapp from "../assets/images/whatsapp.png";
import linkedin from "../assets/images/linkedIn.png";

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
          <p>~ Contact Us</p>
          <hr />
          <p className="info">
            Interested in working <br />
            together ?
          </p>
        </div>
        <div className="socials">
          <SocialLink
            image={call}
            linkref="(+233) 596555397"
            path="/dfdf"
            alt="i"
          />
          <SocialLink
            image={whatsapp}
            linkref="let’s connect via Whatsapp"
            path="/dfdf"
            alt={whatsapp}
          />
          <SocialLink
            image={linkedin}
            linkref="let’s connect via LinkedIn"
            path="/dfdf"
            alt={linkedin}
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
        <button type="button">send</button>
      </form>
    </StyledContact>
  );
};

const StyledContact = styled(motion.section)`
  height: 90vh;
  background-color: #000707;
  display: flex;
  padding: 5% 12%;
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
      padding: 2rem 3rem;
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
    button {
      color: white;
      background: var(--accent-color);
    }
  }
`;

export default Contact;
