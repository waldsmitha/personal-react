import React from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { useScroll } from "./UseScroll";
import { opacity } from "../animations";
//Media
import stock1 from "../img/stock1.png";
import { serviceData } from "../data";
import ServicesItem from "./ServiceItem";

const Services = () => {
  const [element, controls] = useScroll();

  return (
    <SServices id="services">
      <motion.div
        className="mission-statement"
        ref={element}
        initial="hidden"
        animate={controls}
        variants={opacity}
      >
        {/* <div>
          <h2>My Promise</h2>
          <p>
            Whether you are seeking to design a logo, commission a piece of art,
            or build a website, I have the skillset to exceed your expectations
            and deliver something truly beautiful.
          </p>
        </div>*/}
        {/* <img src={stock1} alt="stock1" /> */}
      </motion.div>
      {serviceData.map((item) => (
        <ServicesItem
          key={item.id}
          header={item.header}
          body={item.body}
          images={item.gallery}
        />
      ))}
    </SServices>
  );
};

export default Services;

const SServices = styled(motion.div)`
  ${({ theme }) => css`
    padding: 0 1rem;
    padding-bottom: 10vh;
    margin: 0 auto;
    max-width: 1300px;

    a {
      margin: 1rem 0;
    }
    h2 {
      color: #2aa2bc;
      padding-bottom: 1rem;
    }

    & > * {
      padding: ${theme.spacing.sectionPaddingMobile} 0;
    }

    /* .mission-statement {
      padding: ${theme.spacing.sectionPaddingMobile} 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      img {
        width: 100%;
        object-fit: cover;
      }
      p {
        padding-bottom: 10vh;
        width: 70%;
        text-transform: none;
      }
    } */
  `}
`;
