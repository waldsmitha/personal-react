import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

//Components
import Website from "./Website";

const Showcase = () => {
  return (
    <SShowcase>
      <h1>showcase</h1>
      <div className="line-design"></div>
      <div className="showcase-filter">
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
  width: 100%;
`;
