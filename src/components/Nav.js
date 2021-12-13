import React from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { flex } from "../util";
import NavLinks from "./NavLinks";

const Nav = () => {
  return (
    <SNav>
      <div className="nav-links">
        <NavLinks />
      </div>
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
      ul {
        ${flex}
        list-style: none;
      }

      li {
        padding: 0 1rem;
      }
    }
  `}
`;
