import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { flex, maxWidth } from "../util";
import CurrentDate from "./Date";
import Nav from "./Nav";

//Media
import stock1 from "../img/stock1.png";

const Hero = () => {
  return (
    <SHero>
      <div className="main-content">
        <div>
          <header>
            <CurrentDate />{" "}
            <div className="website">
              austinb
              <br />
              dev
              <br />
              .com
            </div>
          </header>
          <h1 className="cta">
            <span>design</span>
            <span className="smaller-ft">your</span>
            <span>future</span>
          </h1>
        </div>
        <div className="middle-section">
          <div className="services">
            <ul>
              <li>beautiful & responsive websites</li>
              <li>graphic design</li>
            </ul>
            <ul>
              <li>logos</li>
              <li>physical / digital art</li>
            </ul>
          </div>
          <h2>skills & tools</h2>
          <div className="skills">
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
          </div>
        </div>
        <h1>
          austin
          <br />
          waldsmith
        </h1>
      </div>
      <div className="mission-statement">
        <p>
          Whether you are seeking to design a logo, commission a piece of art,
          or build a website, I have the skillset to exceed your expectations
          and deliver something truly beautiful.{" "}
        </p>
        <img src={stock1} alt="stock1" />
      </div>
    </SHero>
  );
};

export default Hero;

const SHero = styled(motion.div)`
  text-transform: uppercase;
  padding-top: 2.5rem;

  .main-content {
    display: flex;
    flex-direction: column;
    align-items: center;
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
    padding-top: 0;
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

  .mission-statement {
    padding: 10vh 1rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;

    p {
      padding-bottom: 10vh;
      width: 70%;
      text-transform: none;
    }
  }
`;
