import React from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { flex } from "../util";

const Nav = () => {
  return (
    <SNav>
      <div className="left-line"></div>
      <div className="nav-links">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="right-line"></div>
    </SNav>
  );
};

export default Nav;

const SNav = styled(motion.nav)`
  ${({ theme }) => css`
    ${flex}
    width: 100%;
    padding: 2rem 0;
    .nav-links {
      display: none;
      ul {
        ${flex}
        list-style: none;
      }

      li {
        padding: 0 1rem;
      }
    }
    .left-line,
    .right-line {
      background: ${theme.color.primary};
      width: 100%;
      height: 0.1rem;
    }
    .left-line {
      margin-right: 2rem;
    }
    .right-line {
      margin-left: 2rem;
    }
  `}
`;
