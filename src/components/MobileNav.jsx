import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import NavLinksMobile from "./NavLinksMobile";

const MobileNav = ({ navActive, setNavActive }) => {
  const navToggle = () => {
    setNavActive(!navActive);
  };

  return (
    <SMobileNav>
      <h1 className="mobile-nav-logo" onClick={() => navToggle()}>
        ABW
      </h1>
      <div className="center-container">
        <NavLinksMobile navActive={navActive} setNavActive={setNavActive} />
      </div>
    </SMobileNav>
  );
};

const SMobileNav = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background: #131313;

  .center-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .mobile-nav-logo {
    cursor: pointer;
    position: absolute;
  }
  ul {
    list-style: none;
  }
  li {
    text-transform: uppercase;
    padding: 0.75rem 0;
  }
  a {
    font-size: 1.25rem;
    color: #4ec0d4;
  }
`;
export default MobileNav;
