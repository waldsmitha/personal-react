import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
// import { useScroll } from "./UseScroll";
import { popIn } from "../animations";

import { Link } from "react-router-dom";

const ShowcaseItem = ({ data }) => {
  //   const [element, controls] = useScroll();
  const { name, type, mainImg, id } = data;

  return (
    <SItem
      //   ref={element}
      variants={popIn}
      initial="hidden"
      animate="show"
      whileHover={{
        y: "-3vh",
        transition: { duration: 0.2 },
      }}
    >
      <Link to={`/showcase/${name}`}>
        <div className="container">
          <div className="website-info">
            <motion.h2 layoutId={`title ${name}`}>{name}</motion.h2>
            <motion.p layoutId={`type ${name}`}>{type}</motion.p>
          </div>
          <motion.img
            src={require(`../img/${mainImg}`).default}
            alt="bliss"
            className="main-img"
            layoutId={`image-${id}`}
          />
        </div>
      </Link>
    </SItem>
  );
};

export default ShowcaseItem;

const SItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem auto;

  .container {
    box-shadow: rgba(255, 255, 255, 0.15) 0px 3px 8px;
    border-radius: 1rem;
    display: flex;
    background: #242424;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 1rem 1rem 1rem;
    overflow: hidden;
  }

  .website-info {
    padding: 1rem;

    h2 {
      margin-top: 1rem;
      text-transform: capitalize;
      color: #4ec0d4;
      line-height: 100%;
    }
    p {
      margin: 1rem 0;
      text-transform: uppercase;
      color: #cfcfb1;
    }
  }
  img {
    min-width: 300px;
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }

  @media screen and (min-width: 768px) {
    .container {
      /* padding: 0 2rem 2rem 2rem; */
    }
  }
  @media screen and (min-width: 1000px) {
  }
`;
