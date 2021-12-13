import React from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
//Media
import { serviceData } from "../data";
import ServicesItem from "./ServiceItem";

const Services = () => {
  return (
    <SServices id="services">
      {serviceData.map((item) => (
        <ServicesItem key={item.id} data={item} />
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
    display: flex;
    flex-wrap: wrap;

    a {
      margin: 1rem 0;
    }
    h2 {
      color: #4ec0d4;
      padding-bottom: 1rem;
    }

    & > * {
      padding: ${theme.spacing.sectionPaddingMobile} 0;
      flex: 1 1 350px;
    }
    @media screen and (min-width: 768px) {
      & > * {
        margin: 0 2rem;
      }
    }
  `}
`;
