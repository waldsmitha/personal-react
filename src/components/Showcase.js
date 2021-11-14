import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import portfolio from "../data";

//Components
import Website from "./Website";
import { maxWidth } from "../util";

const Showcase = () => {
  const [data, setData] = useState(portfolio);
  const [filteredData, setFilteredData] = useState(portfolio);
  const sections = ["website", "design", "art", "all"];

  const filterData = (filter) => {
    if (filter === "all") {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter((item) => item.type === filter));
    }
  };

  return (
    <SShowcase id="portfolio">
      <header>
        <h1>showcase</h1>
      </header>
      <div className="line-design"></div>
      <div className="showcase-filter">
        <h3>Category</h3>
        <div className="line"></div>
        <ul>
          {sections.map((item) => (
            <li onClick={() => filterData(item)}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="pieces">
        {filteredData.map((item) => (
          <Website data={item} key={item.name} />
        ))}
      </div>
    </SShowcase>
  );
};

export default Showcase;

const SShowcase = styled(motion.div)`
  header {
    background: #cf7878;
    width: 100vw;
    text-align: center;
    padding: 2rem;
  }
  h1 {
    font-family: "Montserrat", sans-serif;
    text-transform: uppercase;
    font-size: 3.5rem;
    font-weight: 300;
    color: #131313;
  }
  .pieces {
    ${maxWidth}
    margin: 0 auto;
  }
  .showcase-filter {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 2rem;

    h3 {
      font-size: 3rem;
      font-family: "Montserrat", sans-serif;
      font-weight: 300;
    }
    h2 {
      font-size: 3.6rem;
    }
    ul {
      display: flex;
      list-style: none;
    }
    li {
      padding: 0 0.75rem;
      transition: 0.2s;
      text-transform: capitalize;
      cursor: pointer;
      &:hover {
        color: #e48383e5;
      }
    }
    .line {
      height: 0.1rem;
      margin: 0.5rem;
      margin-top: 0rem;
      width: 10%;
      background: #f2f2f2;
    }
  }
`;
