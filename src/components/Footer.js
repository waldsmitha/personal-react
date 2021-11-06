import React from "react";
import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { flex } from "../util";
//Media
import email from "../img/email-bl.svg";
import insta from "../img/insta-bl.svg";
import twitter from "../img/twitter-bl.svg";
const Footer = () => {
  return (
    <SFooter align="center" direction="column" justify="center">
      <p>&#169; Austin Waldsmith. All rights reserved.</p>
      <p>austin.waldsmith@gmail.com</p>
      <div className="social-media-icons">
        <img src={email} alt="" />
        <img src={insta} alt="" />
        <img src={twitter} alt="" />
      </div>
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
