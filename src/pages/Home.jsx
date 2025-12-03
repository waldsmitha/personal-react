import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { opacity, pulse, revealNavMobile } from "../animations";
import About from "../components/About";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MobileNav from "../components/MobileNav";
import Showcase from "../components/Showcase";

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
        <Showcase />
        <About />
        <Experience />
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
        NAV
      </motion.button>
    </SHome>
  );
};

const SHome = styled(motion.div)`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  #nav-icon {
    position: fixed;
    bottom: 5%;
    left: 5%;
    height: 3rem;
    width: 3rem;
    background: #131313;
    color: #ababab;
    border-radius: 50%;
    border: 3px solid #4ec0d4;
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
