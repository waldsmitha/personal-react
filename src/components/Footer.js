import React from "react";
import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { flex, flex2 } from "../util";
//Media

const Footer = () => {
  return (
    <SFooter align="center" direction="column" justify="center">
      <p>&#169; Austin Waldsmith. All rights reserved.</p>
      <p>austin.waldsmith@gmail.com</p>
      <div className="social-media-icons"></div>
    </SFooter>
  );
};

export default Footer;

const SFooter = styled(motion.div)`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    ${flex}

    min-height: 20vh;
    background: ${theme.color.secondary};
    color: ${theme.color.background};
    .social-media-icons {
      height: 50px;
      width: 300px;
      background: gray;
    }
  `}
  > * {
    padding: 0.5rem;
  }
`;
