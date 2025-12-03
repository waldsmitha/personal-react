import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { portfolio } from "../data";

//Components
import { Typography } from "@mui/material";
import ShowcaseItem from "./ShowcaseItem";
import Website from "./Website";

const Showcase = () => {
  const [filteredData, setFilteredData] = useState(portfolio);
  const sections = ["website", "art", "all"];
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
    const body = document.querySelector("body");

    if (currentPath) {
      let filteredPort = portfolio.filter((item) => item.id === currentPath);
      setItemDetail(filteredPort);
      body.style.overflow = "hidden";
    } else {
      setItemDetail("");
      body.style.overflow = "auto";
    }
  };

  useEffect(() => {
    setPathId(currentPath);
    updateItemDetail();
  }, [location]);

  return (
    <SShowcase id="portfolio">
      <LayoutGroup type="crossfade">
        <header>
          <h1>portfolio</h1>
          <Typography variant="h5" color="error" sx={{ fontWeight: "bold" }}>
            DISCLAIMER: Portfolio is in the process of being updated. Current
            Items are 4 years old.
          </Typography>
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
      </LayoutGroup>
    </SShowcase>
  );
};

export default Showcase;

const SShowcase = styled(motion.div)`
  margin-top: 250px;
  padding-top: 40px;
  header {
    background: #cfcfb1;
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
    max-width: 1300px;
    padding: 48px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
    grid-column-gap: 4rem;
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
