import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import CurrentDate from "./Date";
import { revealUp, stagger } from "../animations";
import downarrow from "../img/down-arrow.svg";

const Hero = () => {
  return (
    <SHero>
      <div className="main-content">
        <div>
          <div className="no-overflow">
            <motion.header
              variants={revealUp}
              initial="hidden"
              animate={"show"}
            >
              <CurrentDate />{" "}
              <div className="website">
                <p>
                  austinb
                  <br />
                  dev
                  <br />
                  .com
                </p>
              </div>
            </motion.header>
          </div>
          <div className="no-overflow">
            <motion.h1 variants={revealUp} initial="hidden" animate="show">
              austin
              <br />
              waldsmith
            </motion.h1>
          </div>
        </div>
        <motion.div
          className="middle-section"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <div className="line"></div>
          <div className="no-overflow">
            <motion.div className="services" variants={revealUp}>
              <ul>
                <li>beautiful & responsive websites</li>
                <li>graphic design</li>
              </ul>
              <ul>
                <li>logos</li>
                <li>physical / digital art</li>
              </ul>
            </motion.div>
          </div>
          <div className="no-overflow">
            <motion.h2 variants={revealUp}>skills & tools</motion.h2>
          </div>
          <div className="no-overflow">
            <motion.div className="skills" variants={revealUp}>
              <ul>
                <li>javascript</li>
                <li>css/sass</li>
                <li>wordpress</li>
              </ul>
              <ul>
                <li>react</li>
                <li>html</li>
                <li>webflow</li>
              </ul>
            </motion.div>
          </div>
          <div className="line"></div>
        </motion.div>
        <motion.div
          className="cta"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <div className="no-overflow">
            <motion.h1 variants={revealUp}>design your future.</motion.h1>
          </div>
          <div className="no-overflow">
            <motion.img src={downarrow} alt="" variants={revealUp} />
          </div>
        </motion.div>
      </div>
    </SHero>
  );
};

export default Hero;

const SHero = styled(motion.div)`
  text-transform: uppercase;

  img {
    margin: 0 auto;
    padding-top: 2rem;
  }

  .no-overflow {
    overflow: hidden;
  }
  .line {
    padding: 0.1rem;
    width: 100px;
    background: #4ec0d4;
    margin: 1rem auto;
  }
  .main-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height: 80vh;
    & > * {
      padding: 1rem 0;
    }
  }
  header {
    display: flex;
    justify-content: space-between;
    font-weight: 300;
    padding: 0 0.25rem 1rem 0.25rem;
    line-height: 95%;
    .website {
      text-align: right;
    }
  }

  .cta {
    display: flex;
    flex-direction: column;

    h1 {
      padding: 0;
      margin: 0;
      font-size: 3rem;
      font-style: italic;
      color: #4ec0d4;
      line-height: 120%;
    }
  }
  h1 {
    font-weight: 600;
    text-transform: uppercase;
    line-height: 80%;
    text-align: center;
    padding: 1rem 0;
    color: #4ec0d4;
    .smaller-ft {
      font-size: 2.5rem;
    }
  }
  .middle-section {
    text-align: center;
    h2 {
      padding: 0.5rem 0;
    }
  }

  ul {
    display: flex;
    justify-content: center;

    li {
      padding: 0 0.5rem;
    }
  }
  @media screen and (min-width: 1300px) {
    h1 {
      font-size: 7rem;
    }
    .cta {
      h1 {
        font-size: 4rem;
      }
    }
  }
`;
