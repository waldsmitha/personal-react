import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { maxWidth } from "../util";
//Media
import stock1 from "../img/stock1.png";

const Services = () => {
  return (
    <SServices>
      <div id="services" className="approach">
        <h2>My Approach</h2>
        <p>
          Beautiful design is no accident. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Velit sapien, elit, turpis ac scelerisque
          nibh vulputate risus. At quam purus lorem mauris consectetur. Lobortis
          auctor sit purus cursus orci mattis posuere pulvinar felis. Purus
          lorem rhoncus sit dictum nunc faucibus. Semper adipiscing imperdiet
          sodales nec, semper nec elit. Consequat amet, adipiscing convallis dis
          eget pretium, id viverra ultricies.
        </p>
      </div>
      <div className="web-service">
        <h2>Create a web presence with style</h2>
        <div className="web-service-info">
          <p>
            Whether you want a website built in Wordpress, Webflow, or coded
            from scratch, I will work with you to develop your digital presence
            and bring your website to life.
          </p>
          <div className="link">See Past Projects</div>
        </div>
      </div>
      <div className="design-service" align>
        <h2>Design a unique logo for your unique business</h2>
        <div className="design-service-info">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
            sapien, elit, turpis ac scelerisque nibh vulputate risus. At quam
            purus lorem mauris consectetur.
          </p>
          <div className="link">See Past Projects</div>
        </div>
      </div>
      <div className="art-service">
        <div className="art-info">
          <h2>Commission a beautiful, one of a kind piece of art</h2>
          <p>
            Physical or digital, I can create that one of a kind piece you have
            been dreaming of.
          </p>
          <a href="#portfolio">See Past Projects</a>
        </div>
        <div className="art-images">
          <img src={stock1} alt="" />
          <img src={stock1} alt="" />
          <img src={stock1} alt="" />
        </div>
      </div>
    </SServices>
  );
};

export default Services;

const SServices = styled(motion.div)`
  ${maxWidth}
  margin: 0 auto;

  .approach {
    display: flex;
    flex-direction: column;
    padding-bottom: 20vh;

    p {
      width: 100%;
    }
  }
  .web-service,
  .design-service,
  .art-service {
    display: flex;
    padding-bottom: 20vh;
  }

  .art-service {
    display: flex;
    padding-bottom: 20vh;
    .art-info {
      display: flex;
      flex-direction: column;
      a {
        margin-top: 5rem;
      }
      h2 {
        margin-bottom: 5rem;
      }
    }
    .art-images {
      display: flex;
      padding-left: 2rem;
      align-items: flex-end;
      img {
        object-fit: cover;
        height: 50%;
        width: 350px;
      }
    }
  }
`;
