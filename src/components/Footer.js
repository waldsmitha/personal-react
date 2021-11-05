import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

//Media

const Footer = () => {
  return (
    <SFooter>
      <h3>&copy</h3>
    </SFooter>
  );
};

export default Footer;

const SFooter = styled(motion.div)`
  ${({ theme }) => `
    color: ${theme.colour.primary};
    font-family: ${theme.font.family};
    font-size: ${theme.font.size.special};
  `}
`;
