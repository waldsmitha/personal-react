// import React, { useEffect } from "react";
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

const Home = () => {
  //Get the current location
  // const location = useLocation();
  // const pathId = location.pathname.split("/")[2];

  return (
    <SHome id="home">
      <Header />
      <Nav />
      <Hero />
      <Services />
      <Showcase />
      <About />
      <Footer />
    </SHome>
  );
};

const SHome = styled(motion.div)``;

export default Home;
