import React from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { maxWidth } from "../util";
import { useScroll } from "./UseScroll";
import { revealRight2, revealUp, revealUp2, revealUp3 } from "../animations";
//Media
import email from "../img/email.svg";
import insta from "../img/insta.svg";
import twitter from "../img/twitter.svg";

//Media
import stock1 from "../img/stock1.png";

const About = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();
  const [element4, controls4] = useScroll();

  return (
    <SAbout id="about">
      <header>
        <div className="container">
          <h1>I don't do</h1>
          <motion.div
            className="reveal"
            ref={element2}
            initial="hidden"
            animate={controls2}
            variants={revealUp2}
          ></motion.div>
        </div>
        <div className="container">
          <h1>this for the</h1>
          <motion.div
            className="reveal"
            ref={element3}
            initial="hidden"
            animate={controls3}
            variants={revealUp2}
          ></motion.div>
        </div>
        <div className="container">
          <h1>money.</h1>
          <motion.div
            className="reveal"
            ref={element4}
            initial="hidden"
            animate={controls4}
            variants={revealUp2}
          ></motion.div>
        </div>
        <div className="container">
          <p>Otherwise I'd be broke.</p>
          <motion.div
            className="reveal"
            ref={element}
            initial="hidden"
            animate={controls}
            variants={revealUp2}
          ></motion.div>
        </div>
      </header>
      <div className="flex-container">
        <div className="bio">
          <h2>
            Pleasure to meet you, I'm <span>Austin Waldsmith</span>
          </h2>
          <div className="image">
            <img src={stock1} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
              faucibus libero hendrerit a, sed nisl elementum habitasse
              scelerisque. Porta et cum ultrices arcu. Viverra nunc adipiscing
              praesent id.
            </p>
          </div>
        </div>
        {/* <div className="arrow-down"></div> */}
      </div>
      <div className="cta">
        <h1 id="contact">Let's get in touch.</h1>
        <form action="#" method="POST">
          {/* <label for="name">First & Last Name:</label> */}
          <div className="flex-container">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="First & Last Name"
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
          <img src={email} alt="" />
          <img src={insta} alt="" />
          <img src={twitter} alt="" />
        </div>
      </div>
    </SAbout>
  );
};

export default About;
const paddingVert = "10vh";
const SAbout = styled(motion.div)`
  ${({ theme }) => css`
    margin: 0 auto;
    position: relative;
    padding: 0 1rem;
    padding-bottom: ${paddingVert};
    display: flex;
    flex-direction: column;

    header {
      margin: ${paddingVert} auto;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      flex-direction: column;
      position: relative;

      h1 {
        font-size: clamp(70px, 15vw, 144px);
        padding-bottom: 2rem;
        line-height: 110%;
      }
    }

    .container {
      margin: 0 auto 0 0;
      overflow: hidden;
      position: relative;
      .reveal {
        position: absolute;
        height: 100%;
        width: 100%;
        background: #131313;
        top: 0;
        left: 0;
      }
      .comment {
        color: #ababab;
        /* z-index: 10; */
        padding: 0.1rem;
      }
    }

    .flex-container {
      .image {
        display: flex;
        flex-wrap: wrap;
        margin-top: 1rem;
        & > * {
          flex: 1 1 300px;
        }
        img {
          object-fit: cover;
          height: 100%;
          width: 100%;
        }
        p {
          margin-left: 1rem;
        }
      }

      .bio {
        max-width: 800px;
        margin: 0 auto;

        span {
          color: #7ed1eb;
        }
      }
    }
    .cta {
      text-align: end;
      margin-bottom: ${paddingVert};

      h1 {
        color: ${theme.color.secondary};
        padding: 20vh 0;
      }
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
        background: none;
        border: none;
        border-bottom: 1px solid #ababab;
        color: #ababab;
        width: 100%;
      }
      input {
        width: 90%;
        padding: 0.5rem 0;
        margin: 0.5rem 0;
      }
      textarea {
        margin: 0.5rem;
        padding: 0.5rem 0;
      }
      button {
        width: 100%;
        background: ${theme.color.secondary};
        border: none;
        color: #131313;
        padding: 1rem 0;
        margin-top: 2rem;
      }

      .flex-container {
        display: flex;
        width: 100%;
      }
    }
    .social-media-icons {
      display: flex;
      justify-content: center;
      & > * {
        padding: 0 1rem;
      }
    }
  `}
`;
