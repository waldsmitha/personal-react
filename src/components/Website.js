import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useScroll } from "./UseScroll";
import { revealUp2 } from "../animations";

import { useLocation, useHistory } from "react-router-dom";

const Website = ({ data, setPathId }) => {
  const images = data.gallery;
  const location = useLocation();
  const currentPath = location.pathname.split("/")[1];
  console.log(currentPath);
  console.log(data);

  const history = useHistory();
  const setPath = () => {
    history.push("");
    setPathId(null);
  };
  return (
    <SWebsite onClick={() => setPath()}>
      <h1>Test</h1>
      {/* <div className="container">
        <div className="website-info">
          <h2>{data.name}</h2>
          <img
            src={require(`../img/${data.mainImg}`).default}
            alt="bliss"
            className="main-img"
          />
          <p>{data.description}</p>
          <a href="#">View</a>
        </div>
        <div className="website-gallery">
          {images.map((image) => (
            <img src={require(`../img/${image}`).default} alt="" />
          ))}
        </div>
      </div>
      <div className="line"></div> */}
    </SWebsite>
  );
};

export default Website;

const SWebsite = styled(motion.div)`
  display: flex;
  flex-direction: column;
  max-width: 1300px;
  margin: 0 auto;
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
