import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

//Media
import stock1 from "../img/stock1.png";

const About = () => {
  return (
    <SAbout>
      <header>
        <h1>I don't do this for the money.</h1>
        <div className="flex-container">
          <img src={stock1} alt="" />
          <div>
            <h2>Pleasure to meet you, I'm Austin Waldsmith</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
              faucibus libero hendrerit a, sed nisl elementum habitasse
              scelerisque. Porta et cum ultrices arcu. Viverra nunc adipiscing
              praesent id. Etiam orci aliquam fermentum morbi. Facilisi
              adipiscing amet eget feugiat id adipiscing. Sed mauris viverra
              quisque id mi dolor, pellentesque. In magna varius quam convallis.
              Varius erat massa eget tellus urna ipsum nullam. Ullamcorper
              lectus turpis vitae eu mauris.
            </p>
          </div>
          <div className="arrow-down"></div>
        </div>
        <div>Let's get in touch.</div>
      </header>
      <div className="comment">Otherwise I'd be broke.</div>
    </SAbout>
  );
};

export default About;

const SAbout = styled(motion.div)`
  width: 100%;
`;
