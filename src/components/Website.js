import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

//Media
import stock1 from "../img/stock1.png";

const Website = () => {
  return (
    <SWebsite>
      <img src={stock1} alt="stock1" />
      <div className="website-info">
        <h2>Ignite</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie
          cursus donec in turpis. Justo ultricies ultrices bibendum nisl,
          pellentesque est lacus blandit ac. Lacus, ut est nullam pretium,
          pretium pellentesque quam. Blandit lectus et diam blandit. Hendrerit a
          sollicitudin ultrices lacus. In tempor in eget sit interdum.
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
  width: 100%;
`;
