import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { navRevealUp, navStagger } from "../animations";

const NavLinksMobile = ({ navActive, setNavActive, desktop }) => {
  const links = ["home", "services", "portfolio", "about", "contact"];
  const navToggle = () => {
    if (!desktop) setNavActive(!navActive);
  };

  return (
    <motion.ul
      variants={navStagger}
      initial="hidden"
      animate={!navActive ? "show" : "hidden"}
    >
      {links.map((item) => (
        <SOverflow key={item}>
          <motion.li variants={navRevealUp} onClick={() => navToggle()}>
            <a href={`#${item}`}>{item}</a>
          </motion.li>
        </SOverflow>
      ))}
    </motion.ul>
  );
};

const SOverflow = styled(motion.div)`
  overflow: hidden;
`;

export default NavLinksMobile;
