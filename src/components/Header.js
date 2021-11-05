import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { flex } from "../util";

const Header = () => {
  return (
    <SHeader align="flex-end" justify="space-between">
      <div className="flex-container">
        <h3 className="logo-left">abw</h3>
        <div className="date">Monday, November 1, 2021</div>
      </div>
      <h1 className="my-name">Austin Waldsmith</h1>
      <h3 className="logo-right">abw</h3>
    </SHeader>
  );
};

export default Header;

const SHeader = styled(motion.div)`
  ${flex}

  min-height: 10vh;
  display: flex;
  /* font-family: "Lora", serif; */
  .logo-left,
  .logo-right,
  .date {
    font-weight: 300;
  }

  .flex-container {
    ${flex}
  }

  h1 {
    font-weight: 300;
    text-transform: uppercase;
    font-family: "Lora", serif;
  }
`;
