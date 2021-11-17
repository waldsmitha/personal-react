import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { maxWidth } from "../util";

const Website = ({ data }) => {
  const gallery = data.gallery;
  // console.log(gallery);

  return (
    <SWebsite>
      <div className="container">
        <img
          src={require(`../img/${data.mainImg}`).default}
          alt="bliss"
          className="main-img"
        />
        <div className="website-info">
          <h2>{data.name}</h2>
          <p>{data.description}</p>
          <a href="#">View</a>
        </div>
        <div className="website-gallery">
          <img
            src={require(`../img/${data.gallery[0]}`).default}
            alt="stock1"
          />
          <img
            src={require(`../img/${data.gallery[1]}`).default}
            alt="stock1"
          />
          <img
            src={require(`../img/${data.gallery[2]}`).default}
            alt="stock1"
          />
          <img
            src={require(`../img/${data.gallery[3]}`).default}
            alt="stock1"
          />
        </div>
      </div>
      <div className="line"></div>
    </SWebsite>
  );
};

export default Website;

const SWebsite = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;

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
  }

  .website-info {
    h2 {
      margin-top: 1rem;
    }
    p {
      margin: 1rem 0;
    }
    margin-bottom: 2rem;
  }
  .website-gallery {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 1rem;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  a {
    color: #cf7878;
  }
  .line {
    width: 75%;
    margin: 0 auto;
    height: 0.1rem;
    background: #ababab;
  }
`;
