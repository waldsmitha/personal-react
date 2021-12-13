import React from "react";
import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { flex } from "../util";

const Footer = () => {
  return (
    <SFooter align="center" direction="column" justify="center">
      <p>&#169; Austin Waldsmith. All rights reserved.</p>
      <p>austin.waldsmith@gmail.com</p>
    </SFooter>
  );
};

export default Footer;

const SFooter = styled(motion.div)`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    ${flex}

    min-height: 20vh;
    background: #131313;
    color: #cfcfb1;

    p {
      font-size: 1rem;
    }
    .social-media-icons {
      display: flex;
      & > * {
        padding: 0 1rem;
      }
    }
  `}
  > * {
    padding: 0.5rem;
  }
`;
