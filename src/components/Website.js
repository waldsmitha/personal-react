import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
// import { useScroll } from "./UseScroll";
import { popIn } from "../animations";

import { useHistory } from "react-router-dom";

const Website = ({ setPathId, itemDetail }) => {
  const { name, description, type, mainImg, gallery, id } = itemDetail[0];

  const history = useHistory();
  const setPath = () => {
    history.push("");
    setPathId(null);
  };

  return (
    <SWebsite
      variants={popIn}
      initial="hidden"
      animate="show"
      exit="exit"
      onClick={() => setPath()}
    >
      <div className="container">
        <div className="website-info">
          <motion.h2 layoutId={`title ${name}`}>{name}</motion.h2>
          <motion.p layoutId={`type ${name}`}>{type}</motion.p>
          <motion.img
            src={require(`../img/${mainImg}`).default}
            alt="bliss"
            className="main-img"
            layoutId={`image-${id}`}
          />
          <p>{description}</p>
          <a href="/">View</a>
        </div>
        <div className="website-gallery">
          {gallery.map((image, i) => (
            <img
              src={require(`../img/${image}`).default}
              key={`${image}${i}`}
              alt={image}
            />
          ))}
        </div>
      </div>
      <div className="line"></div>
    </SWebsite>
  );
};

export default Website;

const SWebsite = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin: 0 auto;
  overflow: scroll;
  background: #131313;
  z-index: 100;
  h1 {
    color: white;
  }

  img {
    object-fit: cover;
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1rem 2rem 1rem;
    max-width: 1300px;
    margin: 0 auto;
  }

  .main-img {
    width: 100%;
    height: 100%;
    max-height: 450px;
  }

  .website-info {
    h2 {
      margin-top: 1rem;
    }
    p {
      margin: 2rem 0;
    }
    margin-bottom: 2rem;
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
  a {
    color: #cf7878;
    /* font-size: 1rem; */
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
