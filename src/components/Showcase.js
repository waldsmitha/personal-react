import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { portfolio } from "../data";
import { useLocation } from "react-router-dom";

//Components
import Website from "./Website";
import ShowcaseItem from "./ShowcaseItem";
import { maxWidth } from "../util";

const Showcase = () => {
  const [filteredData, setFilteredData] = useState(portfolio);
  const sections = ["website", "design", "art", "all"];
  const location = useLocation();
  const currentPath = location.pathname.split("/")[2];
  const [itemDetail, setItemDetail] = useState(null);
  const [pathId, setPathId] = useState(null);

  const filterData = (filter) => {
    if (filter === "all") {
      setFilteredData(portfolio);
    } else {
      setFilteredData(portfolio.filter((item) => item.type === filter));
    }
  };

  const updateItemDetail = () => {
    if (currentPath) {
      let filteredPort = portfolio.filter((item) => item.name === currentPath);
      setItemDetail(filteredPort);
    } else {
      setItemDetail("");
    }
  };

  useEffect(() => {
    setPathId(currentPath);
    updateItemDetail();
  }, [location]);

  return (
    <SShowcase id="portfolio">
      <AnimateSharedLayout type="crossfade">
        <header>
          <h1>showcase</h1>
        </header>
        <div className="line-design"></div>
        <div className="showcase-filter">
          <h3>Category</h3>
          <div className="line"></div>
          <ul>
            {sections.map((item) => (
              <motion.li onClick={() => filterData(item)} key={item}>
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
        <AnimatePresence>
          {pathId && <Website setPathId={setPathId} itemDetail={itemDetail} />}
        </AnimatePresence>
        <div className="pieces">
          <AnimatePresence>
            {filteredData.map((item) => (
              <motion.div
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={`showcase ${item.id}`}
              >
                <ShowcaseItem data={item} key={item.id} layoutID={item.id} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </AnimateSharedLayout>
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
    h1 {
      text-transform: uppercase;
      font-size: clamp(3.5rem, 15vw, 10rem);
      line-height: 100%;
      font-weight: 300;
      color: #131313;
    }
  }

  .pieces {
    ${maxWidth}
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    & > * {
      flex: 1 1 300px;
    }
  }
  .showcase-filter {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2rem;

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
      height: 0.05rem;
      margin: 0.5rem;
      margin-top: 0rem;
      width: 10%;
      background: #f2f2f2;
    }
  }
`;
