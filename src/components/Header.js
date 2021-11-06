import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Date from "./Date";

const Header = () => {
  return (
    <SHeader>
      <div className="flex-container">
        <div className="logo-left">
          <h3>
            <span>abw</span>
          </h3>
        </div>
        <Date />
      </div>
      <h1 className="my-name">Austin Waldsmith</h1>
      <div className="logo-right">
        <h3>
          <span>abw</span>
        </h3>
      </div>
    </SHeader>
  );
};

export default Header;

const SHeader = styled(motion.div)`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: flex-end;
  min-height: 10vh;
  display: flex;

  .logo-left,
  .logo-right {
    font-weight: 300;
    h3 {
      text-transform: uppercase;
      span {
        border: 1px solid white;
        padding: 0.1rem;
      }
    }
  }
  .logo-left {
    margin-right: 1rem;
    margin-left: 2rem;
  }
  .logo-right {
    margin-right: 2rem;
    span {
      background: #f2f2f2;
      color: #131313;
      padding: 0.1rem;
    }
  }

  .flex-container {
    display: flex;
    align-items: center;
  }

  .my-name {
    font-weight: 300;
    text-transform: uppercase;
    font-family: "Lora", serif;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
  }
`;
