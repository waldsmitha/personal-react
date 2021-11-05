import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Nav = () => {
  return (
    <SNav>
      <div className="left-line"></div>
      <div className="nav-links">
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="right-line"></div>
    </SNav>
  );
};

export default Nav;

const SNav = styled(motion.nav)`
  width: 100%;
`;
