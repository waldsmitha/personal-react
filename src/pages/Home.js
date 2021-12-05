import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
//import styling
import styled from "styled-components";
import { motion } from "framer-motion";
// //Components
// import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Showcase from "../components/Showcase";
import About from "../components/About";
// import Contact from "../components/Contact";
import Footer from "../components/Footer";
import MobileNav from "../components/MobileNav";
import { revealNavMobile, pulse, opacity } from "../animations";

const Home = () => {
  const [navActive, setNavActive] = useState(true);
  const [navBarActive, setNavBarActive] = useState(true);

  const calcDeltaY = (e) => {
    e.deltaY > 0 ? setNavBarActive(false) : setNavBarActive(true);
  };

  const navToggle = () => {
    setNavActive(!navActive);
  };

  return (
    <div>
      <SHome
        id="home"
        onWheel={(e) => {
          calcDeltaY(e);
        }}
      >
        <motion.div
          variants={opacity}
          initial="show"
          animate={!navActive ? "hidden" : "show"}
        >
          <Header
            navActive={navActive}
            setNavActive={setNavActive}
            navBarActive={navBarActive}
          />
          <Hero />
          <Services />
          <Showcase />
          <About />
          <Footer />
        </motion.div>
        <SMobileNav
          variants={revealNavMobile}
          initial="hidden"
          animate={navActive ? "hidden" : "show"}
        >
          <MobileNav navActive={navActive} setNavActive={setNavActive} />
        </SMobileNav>
        <motion.button
          variants={pulse}
          initial="hidden"
          animate={navActive ? "hidden" : "show"}
          id="nav-icon"
          onClick={() => navToggle()}
        >
          Nav
        </motion.button>
      </SHome>
    </div>
  );
};

const SHome = styled(motion.div)`
  padding-top: 10vh;
  overflow-x: hidden;
  #nav-icon {
    position: fixed;
    bottom: 5%;
    left: 5%;
    height: 3rem;
    width: 3rem;
    background: #131313;
    color: #ababab;
    border-radius: 50%;
    border: 3px solid #2aa2bc;
    z-index: 20;
    @media screen and (min-width: 768px) {
      display: none;
    }
  }
`;
const SMobileNav = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background: #131313;
`;

export default Home;
