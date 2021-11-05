import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <SHeader>
      <div>
        <h3 className="logo">abw</h3>
        <div className="date">Monday, November 1, 2021</div>
      </div>
      <h1>Austin Waldsmith</h1>
      <h3 className="logo">abw</h3>
    </SHeader>
  );
};

export default Header;

const SHeader = styled(motion.div)`
  width: 100%;
`;
