import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const MobileNav = () => {
  const links = ["home", "services", "portfolio", "about", "contact"];

  return (
    <SMobileNav>
      <h1 className="mobile-nav-logo">ABW</h1>
      <div className="center-container">
        <ul>
          {links.map((item) => (
            <li>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
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
  display: none;

  .center-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .mobile-nav-logo {
    position: absolute;
  }
  ul {
    list-style: none;
  }
  li {
    text-transform: capitalize;
    padding: 0.75rem 0;
  }
`;
export default MobileNav;
