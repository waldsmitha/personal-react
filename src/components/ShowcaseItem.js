import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
// import { useScroll } from "./UseScroll";
import { popIn } from "../animations";

import { Link } from "react-router-dom";

const ShowcaseItem = ({ data }) => {
  //   const [element, controls] = useScroll();

  return (
    <SItem
      //   ref={element}
      variants={popIn}
      initial="hidden"
      animate="show"
    >
      <Link to={`/showcase/${data.name}`}>
        <div className="container">
          <div className="website-info">
            <motion.h2 layoutId={`title ${data.name}`}>{data.name}</motion.h2>
            <motion.p layoutId={`type ${data.name}`}>{data.type}</motion.p>
            <motion.img
              src={require(`../img/${data.mainImg}`).default}
              alt="bliss"
              className="main-img"
              layoutId={`image-${data.id}`}
            />
          </div>
        </div>
        {/* <div className="line"></div> */}
      </Link>
    </SItem>
  );
};

export default ShowcaseItem;

const SItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin: 1rem auto;

  img {
    object-fit: cover;
  }
  .container {
    box-shadow: rgba(255, 255, 255, 0.15) 0px 3px 8px;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    margin: 0 1rem 1rem 1rem;
  }

  .main-img {
    width: 100%;
    height: 100%;
    max-height: 450px;
    border-radius: 2rem;
    margin-bottom: 1rem;
  }

  .website-info {
    h2 {
      margin-top: 1rem;
      text-transform: uppercase;
    }
    p {
      margin: 1rem 0;
      text-transform: uppercase;
    }
  }
  .website-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-gap: 1rem;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  .line {
    width: 75%;
    margin: 5rem auto;
    height: 0.1rem;
    background: #ababab;
  }
  @media screen and (min-width: 768px) {
    .container {
      padding: 0 2rem 2rem 2rem;
    }
  }
  @media screen and (min-width: 1000px) {
  }
`;
