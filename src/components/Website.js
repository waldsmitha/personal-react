import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { maxWidth } from "../util";

const Website = ({ data }) => {
  const gallery = data.gallery;
  console.log(gallery);

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
  ${maxWidth}
  display: flex;
  flex-direction: column;

  img {
    object-fit: cover;
  }
  .container {
    display: grid;
    grid-template-columns: auto auto auto;
    overflow: hidden;
    padding: 5rem 0;
  }

  .main-img {
    width: 350px;
    height: 100%;
    padding-right: 2rem;
  }

  .website-info {
    padding: 0 2rem;

    p {
      margin: 2rem 0;
    }
  }
  .website-gallery {
    display: grid;
    grid-template-columns: auto auto;
    padding-left: 2rem;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      padding: 0.2rem;
    }
  }
  .link {
    color: #cf7878;
    padding-top: 2rem;
  }
  .line {
    width: 75%;
    margin: 0 auto;
    height: 0.1rem;
    background: #f2f2f2;
  }
`;
