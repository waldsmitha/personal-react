import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

//Components
import Website from "./Website";
import { maxWidth } from "../util";

const Showcase = () => {
  return (
    <SShowcase>
      <header>
        <h1>showcase</h1>
      </header>
      <div className="line-design"></div>
      <div className="showcase-filter"></div>
      <div className="pieces">
        <Website />
        <Website />
        <Website />
        <Website />
      </div>
    </SShowcase>
  );
};

export default Showcase;

const SShowcase = styled(motion.div)`
  header {
    background: #cf7878;
    width: 100vw;
    text-align: center;
  }
  h1 {
    font-family: "Montserrat", sans-serif;
    text-transform: uppercase;
    font-size: 288px;
    font-weight: 300;
    color: #131313;
  }
  .pieces {
    ${maxWidth}
    margin: 0 auto;
  }
`;
