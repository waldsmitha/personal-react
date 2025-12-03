import { motion } from "framer-motion";
import styled from "styled-components";
// import { useScroll } from "./UseScroll";
import { popIn } from "../animations";

import { useNavigate } from "react-router-dom";

const Website = ({ setPathId, itemDetail }) => {
  const { name, description, link, type, mainImg, gallery, id } = itemDetail[0];

  const navigate = useNavigate();
  const setPath = () => {
    navigate("/");
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
          <motion.p className="type" layoutId={`type ${name}`}>
            {type}
          </motion.p>
          <motion.img
            src={mainImg}
            alt="bliss"
            className={type === "website" ? "main-img-website" : "main-img"}
            layoutId={`image-${id}`}
          />
          <div className="description">
            <p>{description}</p>
            {link && (
              <a href={link} target="_blank" rel="noreferrer">
                View
              </a>
            )}
          </div>
        </div>
        <div className="website-gallery">
          {gallery.map((image, i) => (
            <img src={image} key={`${image}${i}`} alt={"gallery image"} />
          ))}
        </div>
      </div>
    </SWebsite>
  );
};

export default Website;

const SWebsite = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  overflow-y: auto;
  margin: 0 auto;
  background: #131313;
  z-index: 100;
  scrollbar-color: #ff7676 white;
  scrollbar-width: 0.5rem;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #cf7878;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
  h2 {
    color: #4ec0d4;
  }

  img {
    object-fit: cover;
  }
  .container {
    width: 90%;
    border-radius: 1rem;
    background: whitesmoke;
    /* color: #131313; */
    background: #131313;
    color: #cfcfb1;
    position: absolute;
    left: 5%;
  }

  .main-img-website {
    width: 100%;
    height: 100%;
    max-height: 450px;
    margin-bottom: 2rem;
  }

  .main-img {
    width: 100%;
    height: 100%;
    max-width: 1000px;
    max-height: 60vh;
    margin-bottom: 2rem;
    margin: 0 auto;
    object-fit: contain;
  }

  .website-info {
    h2 {
      margin-top: 1rem;
    }
    p {
      margin-bottom: 2rem;
    }
    margin-bottom: 2rem;
    h2,
    p {
      padding: 0 1rem;
    }

    .description {
      text-align: center;
      max-width: 40rem;
      margin: 0 auto;
      margin-top: 5rem;
      margin-bottom: 5rem;
    }
    .type {
      text-transform: uppercase;
    }
  }
  .website-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-gap: 1rem;
    padding-bottom: 24px;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      border: 2px solid #4ec0d4;
    }
  }
  a {
    color: #4ec0d4;
    border: 2px solid #4ec0d4;
    padding: 0.1rem 1rem;
    border-radius: 1rem;
    transition: 0.2s;

    &:hover {
      color: #131313;
      background: #4ec0d4;
    }
  }

  @media screen and (min-width: 1000px) {
    .container {
      /* padding: 10vh 0; */
    }
  }
`;
