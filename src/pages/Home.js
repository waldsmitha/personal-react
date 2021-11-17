import React, { useState, useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
//import styling
import styled from "styled-components";
import { motion } from "framer-motion";
// //Components
// import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Showcase from "../components/Showcase";
import About from "../components/About";
// import Contact from "../components/Contact";
import Footer from "../components/Footer";
import MobileNav from "../components/MobileNav";
import { revealNavMobile } from "../animations";

const Home = () => {
  //Get the current location
  // const location = useLocation();
  // const pathId = location.pathname.split("/")[2];

  const [navActive, setNavActive] = useState(true);

  // window.addEventListener("scroll", (e) => console.log(e));
  const [navBarActive, setNavBarActive] = useState(true);
  const calcDeltaY = (e) => {
    if (e.deltaY > 100) {
      setNavBarActive(false);
    } else {
      setNavBarActive(true);
    }
  };

  return (
    <SHome
      id="home"
      onWheel={(e) => {
        calcDeltaY(e);
      }}
    >
      <Header
        navActive={navActive}
        setNavActive={setNavActive}
        navBarActive={navBarActive}
      />
      <SMobileNav
        variants={revealNavMobile}
        initial="hidden"
        animate={navActive ? "hidden" : "show"}
      >
        <MobileNav navActive={navActive} setNavActive={setNavActive} />
      </SMobileNav>
      <Hero />
      <Services />
      <Showcase />
      <About />
      <Footer />
    </SHome>
  );
};

const SHome = styled(motion.div)`
  padding-top: 10vh;
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
