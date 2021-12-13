import React from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { useScroll } from "./UseScroll";
import email from "../img/email-bl.svg";
import insta from "../img/insta-bl.svg";
import { moveHalfDown } from "../animations";

const Contact = () => {
  const [element, controls] = useScroll();
  return (
    <SContact>
      <div className="cta">
        <h1 id="contact">
          Get in
          <br />
          Touch.
        </h1>
        <motion.div
          className="filter"
          ref={element}
          initial="hidden"
          animate={controls}
          variants={moveHalfDown}
        ></motion.div>
      </div>
      <form action="#" method="POST">
        {/* <label for="name">First & Last Name:</label> */}
        <div className="flex-container">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
          {/* <label for="email">Email:</label> */}
          <input
            type="email"
            name="_replyto"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        {/* <label for="message" placeholder='Message '>Message</label> */}
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="1"
          placeholder="Message"
        ></textarea>
        <button type="submit" value="Send">
          Send
        </button>
      </form>
      <div className="social-media-icons">
        <a href="mailto:austin.waldsmith@gmail.com">
          <img src={email} alt="" />
        </a>
        <a
          href="https://www.instagram.com/austinwaldsmith/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={insta} alt="" />
        </a>
      </div>
    </SContact>
  );
};

export default Contact;

const paddingVert = "10vh";
const SContact = styled(motion.div)`
  ${({ theme }) => css`
    margin: 0 auto;
    position: relative;
    padding-top: 10vh;
    min-height: 100vh;
    background: whitesmoke;

      h1 {
        font-size: clamp(70px, 12vw, 144px);
        
        padding-bottom: 2rem;
        line-height: 110%;
      }
    }

    .cta {
      position: relative;
      margin-bottom: ${paddingVert};    
      text-align: center;

      h1 {
        color: #131331;;
     }
    }
    .filter {
      position: absolute;
      top: 0;
      left: 0%;
      width: 100%;
      height:46%;
      background: #E2E2E2;
      mix-blend-mode: difference;
      pointer-events: none;
          }

    form {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      max-width: 30rem;
      margin: 0 auto;
      margin-bottom: 2rem;
      
      & > * {
        padding: 2rem 0;
      }

      input,
      textarea {
        background: #131313;
        border: none;
        border-radius: 1rem;;
        color: whitesmoke;
        width: 100%;
        padding: 1rem 2rem;
        font-size: 1rem;
              }
      input {     
        &:first-child {
          margin-right: 1rem;
        }

        }
      textarea {
        margin: 0.5rem 1rem;
        font-family: 'Poppins', sans-serif;
        
      }
      button {
        padding: 0.5rem 2rem;
        border-radius: 1rem;
        margin-top: 2rem;
        color: #131313;
        background: whitesmoke;
        border: 2px solid #131313;
        transition: 0.2s;
        z-index: 10;


        &:hover {
          background: #131313;
          color: whitesmoke;
          cursor: pointer;
                  }
      }

      .flex-container {
        display: flex;
        width: 100%;
      }
    }
    .social-media-icons {
      display: flex;
      justify-content: center;
      align-items: center;
      & > * {
        padding: .2rem;
        cursor: pointer;
                margin: 0 1rem;
      }
    }
  `}
`;
