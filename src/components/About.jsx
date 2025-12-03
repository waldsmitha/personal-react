import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { revealUp2 } from "../animations";
import { useScroll } from "./UseScroll";

import { Box, Stack } from "@mui/material";

import DownArrow from "../assets/down-arrow.svg";

const About = () => {
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();
  const [element4, controls4] = useScroll();

  return (
    <SAbout id="about">
      <Stack alignSelf="center" sx={{ gap: 10 }}>
        <Box>
          <div className="container">
            <h2>Boston-origin, Atlanta-based.</h2>
            <motion.div
              className="reveal"
              ref={element2}
              initial="hidden"
              animate={controls2}
              variants={revealUp2}
            ></motion.div>
          </div>
          <div className="container">
            <h2>Developer, designer, and artist.</h2>
            <motion.div
              className="reveal"
              ref={element3}
              initial="hidden"
              animate={controls3}
              variants={revealUp2}
            ></motion.div>
          </div>
          <div className="container cta">
            <h2>Check out my professional experience below.</h2>
            <motion.div
              className="reveal"
              ref={element4}
              initial="hidden"
              animate={controls4}
              variants={revealUp2}
            ></motion.div>
          </div>
        </Box>
        <Box className="arrow">
          <img src={DownArrow} alt="down arrow" width={100} height={100} />
        </Box>
      </Stack>
    </SAbout>
  );
};

export default About;
const paddingVert = "10vh";
const SAbout = styled(motion.div)`
  ${({ theme }) => css`
    margin: 0 auto;
    position: relative;
    padding: 0 1rem;
    padding-bottom: ${paddingVert};
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: center;
    margin-top: 100px;

    header {
      margin: ${paddingVert} auto;
      margin-bottom: 2.5vh;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      flex-direction: column;
      position: relative;

      h1 {
        font-size: clamp(70px, 15vw, 144px);
        padding-bottom: 0.75rem;
        line-height: 100%;
      }
    }
    .arrow {
      margin: 0 auto;
      margin-bottom: 2rem;
      img {
        width: clamp(30vw, 30vw, 200px);
      }
    }
    .container {
      margin: 0 auto 0 0;
      overflow: hidden;
      position: relative;
      .reveal {
        position: absolute;
        height: 100%;
        width: 100%;
        background: #131313;
        top: 0;
        left: 0;
      }
    }

    .cta {
      color: #4ec0d4;
    }

    .flex-container {
      .image {
        display: flex;
        flex-wrap: wrap;
        margin-top: 1rem;
        & > * {
          flex: 1 1 300px;
        }
        img {
          object-fit: cover;
          height: 100%;
          width: 100%;
        }
        p {
          margin-left: 1rem;
        }
      }

      .bio {
        max-width: 800px;
        margin: 0 auto;

        span {
          color: #7ed1eb;
        }
      }
    }
  `}
  @media screen and (min-width: 1300px) {
    .arrow {
      img {
        width: 15vw;
      }
    }
  }
`;
