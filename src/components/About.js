import React from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { useScroll } from "./UseScroll";
import downarrow from "../img/down-arrow.svg";
import { revealUp2 } from "../animations";

const About = () => {
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();
  const [element4, controls4] = useScroll();

  return (
    <SAbout id="about">
      <header>
        <div className="container">
          <h1>Boston-based freelance</h1>
          <motion.div
            className="reveal"
            ref={element2}
            initial="hidden"
            animate={controls2}
            variants={revealUp2}
          ></motion.div>
        </div>
        <div className="container">
          <h1>designer with an</h1>
          <motion.div
            className="reveal"
            ref={element3}
            initial="hidden"
            animate={controls3}
            variants={revealUp2}
          ></motion.div>
        </div>
        <div className="container">
          <h1>emphasis on style & branding.</h1>
          <motion.div
            className="reveal"
            ref={element4}
            initial="hidden"
            animate={controls4}
            variants={revealUp2}
          ></motion.div>
        </div>
        <div className="container cta">
          <h1> Let's work together.</h1>
          <motion.div
            className="reveal"
            ref={element4}
            initial="hidden"
            animate={controls4}
            variants={revealUp2}
          ></motion.div>
        </div>
      </header>
      <div className="arrow">
        <img src={downarrow} alt="" />
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
      margin-bottom: 2.5vh;
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
    .arrow {
      margin: 0 auto;
      margin-bottom: 2rem;
      img {
        width: clamp(30vw, 30vw, 200px);
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
    }

    .cta {
      color: #4ec0d4;
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
  `}
  @media screen and (min-width: 1300px) {
    .arrow {
      img {
        width: 15vw;
      }
    }
  }
`;
