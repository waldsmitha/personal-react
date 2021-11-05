import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

//Media
import stock1 from "../img/stock1.png";

const Hero = () => {
  return (
    <SHero>
      <div className="background">
        <h1>
          design your <span>future</span>
        </h1>
      </div>
      <div className="mission-statement">
        Whether you are seeking to design a logo, commission a piece of art, or
        build a website, I have the skillset to exceed your expectations and
        deliver something truly beautiful.{" "}
      </div>
      <img src={stock1} alt="stock1" />
    </SHero>
  );
};

export default Hero;

const SHero = styled(motion.div)`
  width: 100%;
`;
