import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { maxWidth } from "../util";
//Media
import stock1 from "../img/stock1.png";

const Website = () => {
  return (
    <SWebsite justify="space-evenly">
      <img src={stock1} alt="stock1" className="main-img" />
      <div className="website-info">
        <h2>Ignite</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie
          cursus donec in turpis. Justo ultricies ultrices bibendum nisl,
          pellentesque est lacus blandit ac.
        </p>
        <div className="link">See Past Projects</div>
      </div>
      <div className="website-gallery">
        <img src={stock1} alt="stock1" />
        <img src={stock1} alt="stock1" />
        <img src={stock1} alt="stock1" />
        <img src={stock1} alt="stock1" />
      </div>
    </SWebsite>
  );
};

export default Website;

const SWebsite = styled(motion.div)`
  ${maxWidth}

  display: grid;
  grid-template-columns: auto auto auto;
  overflow: hidden;
  padding: 5rem 0;

  img {
    object-fit: cover;
  }

  .main-img {
    width: 350px;
    height: 100%;
    padding-right: 2rem;
  }

  .website-info {
    padding: 0 2rem;
  }
  .website-gallery {
    display: grid;
    grid-template-columns: auto auto;
    padding-left: 2rem;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  .link {
    color: #cf7878;
  }
`;
