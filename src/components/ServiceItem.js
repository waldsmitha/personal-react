import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useScroll } from "./UseScroll";
import { revealRight } from "../animations";
//Media

const ServicesItem = ({ data }) => {
  const [element, controls] = useScroll();
  const { link, header, body } = data;

  return (
    <SServiceItem>
      <motion.div
        className="art-service"
        ref={element}
        initial="hidden"
        animate={controls}
        variants={revealRight}
      >
        <h2>{header}</h2>
        <p>{body}</p>
        <div className="link">
          <a href="#portfolio">{link}</a>
        </div>
      </motion.div>
    </SServiceItem>
  );
};

export default ServicesItem;

const SServiceItem = styled(motion.div)`
  margin: 0 auto;

  h2 {
    color: #4ec0d4;
    padding-bottom: 1rem;
    line-height: 120%;
  }

  .art-service {
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    align-items: center;
    padding: 1rem;
    height: 100%;
    .link {
      padding-top: 2rem;
      margin-top: auto;
      align-self: flex-start;
    }
    a {
      color: #4ec0d4;
      border: 2px solid #4ec0d4;
      padding: 0.2rem 1.5rem;
      border-radius: 1rem;

      &:hover {
        background: #2aa2bc;
        border-color: #2aa2bc;
        color: #131313;
      }
    }
    .art-images {
      display: flex;
      flex-direction: row;
      flex: 1 1 15rem;
      width: 100%;
      padding: 0 1rem;
      overflow: hidden;
      img {
        margin: 0 0.25rem;
        max-width: 200px;

        :nth-child(2) {
          width: 25%;
          height: 80%;
        }
        :nth-child(3) {
          width: 12.5%;
          height: 70%;
        }
      }

      img {
        object-fit: cover;
        height: auto;
        width: 100%;
      }
    }
  }

  @media screen and (min-width: 768px) {
    padding: 0 2rem;
  }
`;
