import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useScroll } from "./UseScroll";
import { revealRight } from "../animations";
//Media

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
          {images.map((image, i) => (
            <img
              src={require(`../img/${image}`).default}
              key={`service ${image} ${i}`}
              alt=""
            />
          ))}
        </div>
      </motion.div>
    </SServiceItem>
  );
};

export default ServicesItem;

const SServiceItem = styled(motion.div)`
  margin: 0 auto;

  h2 {
    color: #2aa2bc;
    padding-bottom: 1rem;
  }

  .art-service {
    display: flex;
    flex-wrap: wrap;

    .art-info {
      display: flex;
      flex-direction: column;
      flex: 1 1 20rem;
      padding: 1rem;
      a {
        padding-top: 1rem;
        font-size: 1rem;
        color: #e48383e5;
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
