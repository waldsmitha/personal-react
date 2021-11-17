import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const NavLinks = ({ navActive, setNavActive, desktop }) => {
  const links = ["home", "services", "portfolio", "about", "contact"];
  const navToggle = () => {
    if (!desktop) setNavActive(!navActive);
  };

  return (
    <ul>
      {links.map((item) => (
        <li onClick={() => navToggle()}>
          <a href={`#${item}`}>{item}</a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
