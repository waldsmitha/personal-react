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
  const [filteredData, setFilteredData] = useState(
    portfolio.filter((item) => item.type === "website")
  );
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
          <h1>portfolio</h1>
        </header>
        <div className="showcase-filter">
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
    background: #cfcfb1;
    width: 100vw;
    text-align: center;
    padding: 2rem;
    h1 {
      text-transform: uppercase;
      font-size: clamp(3.5rem, 15vw, 10rem);
      line-height: 100%;
      font-weight: 600;
      color: #131313;
    }
  }

  .pieces {
    ${maxWidth}
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-column-gap: 2rem;
  }
  .showcase-filter {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2rem;

    ul {
      padding-top: 1rem;
      display: flex;
      list-style: none;
    }
    li {
      padding: 0 0.75rem;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      transition: 0.2s;
      text-transform: capitalize;
      cursor: pointer;
      border-top: 1px solid #4ec0d4;
      border-bottom: 1px solid #4ec0d4;
      &:hover {
        color: #4ec0d4;
      }
    }
  }
`;
