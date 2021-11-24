import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { revealNavBar } from "../animations";
import NavLinks from "./NavLinks";

const Header = ({ navActive, setNavActive, navBarActive }) => {
  const navToggle = () => {
    setNavActive(!navActive);
  };

  return (
    <SHeader
      variants={revealNavBar}
      initial="hidden"
      animate={navBarActive ? "show" : "hidden"}
    >
      <div className="flex-container">
        <div className="logo-left">
          <h3>
            <span>abw</span>
          </h3>
        </div>
      </div>
      <NavLinks
        navActive={navActive}
        setNavActive={setNavActive}
        desktop={true}
      />
      <div className="logo-right">
        <h3>
          <span>abw</span>
        </h3>
      </div>
    </SHeader>
  );
};

export default Header;

const SHeader = styled(motion.div)`
  display: flex;
  position: fixed;
  top: 0;
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding-top: 1rem;
  width: 100vw;

  .logo-left,
  .logo-right {
    font-weight: 300;
    h3 {
      text-transform: uppercase;
      font-size: 1rem;
      span {
        border: 1px solid #ababab;
      }
    }
  }
  .logo-left {
    margin-left: 1rem;
  }
  .logo-right {
    margin-right: 1rem;
    span {
      background: #ababab;
      color: #131313;
    }
  }

  .flex-container {
    display: flex;
    align-items: center;
  }
  ul {
    display: none;
    justify-content: center;
    text-transform: uppercase;

    li {
      padding: 0 0.5rem;
    }
  }
  button {
    border-radius: 0;
    background: #ababab;
    border: none;
    height: 1rem;
    width: 1rem;
    transform: rotate(45deg);
  }
  @media screen and (min-width: 768px) {
    ul {
      display: flex;
    }
  }
`;
