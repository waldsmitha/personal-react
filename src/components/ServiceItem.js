import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useScroll } from "./UseScroll";
import { opacity, revealRight } from "../animations";
//Media
import stock1 from "../img/stock1.png";

const ServicesItem = ({ header, body, images }) => {
  const [element, controls] = useScroll();

  return (
    <SServiceItem>
      <motion.div
        className="art-service"
        ref={element}
        initial="hidden"
        animate={controls}
        variants={revealRight}
      >
        <div className="art-info">
          <h2>{header}</h2>
          <p>{body}</p>
          <a href="#portfolio">See Past Projects</a>
        </div>
        <div className="art-images">
          {images.map((image) => (
            <img src={require(`../img/${image}`).default} alt="" />
          ))}
        </div>
      </motion.div>
    </SServiceItem>
  );
};

export default ServicesItem;

const paddingVert = "10vh";

const SServiceItem = styled(motion.div)`
  margin: 0 auto;

  a {
    font-size: 1rem;

    /* padding: 1rem 0; */
  }
  h2 {
    color: #2aa2bc;
    padding-bottom: 1rem;
  }

  .art-service {
    display: flex;
    padding-bottom: ${paddingVert};
    flex-wrap: wrap;
    .art-info {
      display: flex;
      flex-direction: column;
      flex: 1 1 20rem;
      padding: 1rem;
    }
    .art-images {
      display: flex;
      flex-direction: row;
      flex: 1 1 15rem;
      width: 100%;
      padding: 0 1rem;
      overflow: hidden;

      img {
        object-fit: cover;
        height: auto;
        width: 100%;
      }
    }
  }

  @media screen and (min-width: 768px) {
    padding: 0 2rem;
    .art-service {
      flex-direction: row;

      .art-info {
        padding-right: 5rem;

        a {
          margin-top: auto;
          text-align: right;
        }
      }
      .art-images {
        justify-content: flex-end;
      }
    }
    .mission-statement {
      flex-direction: row;
    }
  }
`;
