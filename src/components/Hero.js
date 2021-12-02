import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import CurrentDate from "./Date";
import { revealUp, stagger } from "../animations";

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
                austinb
                <br />
                dev
                <br />
                .com
              </div>
            </motion.header>
          </div>
          <motion.div
            className="cta"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            <div className="no-overflow">
              <motion.h1 variants={revealUp}>design</motion.h1>
            </div>
            <div className="no-overflow">
              <motion.h1 className="smaller-ft" variants={revealUp}>
                your
              </motion.h1>
            </div>
            <div className="no-overflow">
              <motion.h1 variants={revealUp}>future</motion.h1>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="middle-section"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
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
        </motion.div>
        <div className="no-overflow">
          <motion.h1 variants={revealUp} initial="hidden" animate="show">
            austin
            <br />
            waldsmith
          </motion.h1>
        </div>
      </div>
    </SHero>
  );
};

export default Hero;

const SHero = styled(motion.div)`
  text-transform: uppercase;
  min-height: 80vh;

  .no-overflow {
    overflow: hidden;
  }
  .main-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    & > * {
      padding: 2rem 0;
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
    padding-top: 0;
    h1 {
      padding: 0;
      margin: 0;
    }
  }
  h1 {
    font-weight: 600;
    text-transform: uppercase;
    line-height: 80%;
    text-align: center;
    padding: 1rem 0;
    color: #2aa2bc;
    .smaller-ft {
      font-size: 2.5rem;
    }
  }
  .middle-section {
    text-align: center;
    padding-top: 0;
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
`;
