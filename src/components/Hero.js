import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { flex, maxWidth } from "../util";

//Media
import stock1 from "../img/stock1.png";

const Hero = () => {
  return (
    <SHero>
      <div className="background">
        <h1>
          design <br />
          your <br />
          <span>future</span>
        </h1>
      </div>
      <div className="line"></div>
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
  width: 100%;

  .background {
    ${flex}
    min-height: 60vh;
    margin: 0 2rem;
    background: linear-gradient(
      116.06deg,
      rgba(228, 131, 131, 0.9) 0.23%,
      rgba(191, 65, 65, 0.9) 115.04%
    );
    h1 {
      font-size: 200px;
      font-weight: 300;
      font-family: "Montserrat", sans-serif;
      text-transform: uppercase;
      line-height: 95%;
      text-align: center;
      padding: 5rem;

      span {
        font-family: "Abril Fatface", cursive;
        color: #7ed1eb;
      }
    }
  }
  .line {
    margin-top: 2rem;
    width: 100%;
    height: 0.1rem;
    background: #f2f2f2;
  }
  .mission-statement {
    padding: 20vh 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${maxWidth}
    p {
      font-size: 64px;
      line-height: 120%;
      width: 60%;
      padding-bottom: 20vh;
    }
  }

  img {
    padding-bottom: 20vh;
  }
`;
