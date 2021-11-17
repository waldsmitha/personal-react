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
          nibh vulputate risus.
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

const paddingVert = "10vh";

const SServices = styled(motion.div)`
  padding: 0 1rem;
  margin: 0 auto;

  h2 {
    padding-bottom: 1rem;
  }

  .approach {
    display: flex;
    flex-direction: column;
    padding-bottom: ${paddingVert};
  }
  .web-service,
  .design-service,
  .art-service {
    display: flex;
    flex-direction: column;
    padding-bottom: ${paddingVert};
  }

  .art-service {
    display: flex;
    padding-bottom: ${paddingVert};
    .art-info {
      display: flex;
      flex-direction: column;
      a {
        margin: 1rem 0;
      }
    }
    .art-images {
      display: flex;
      flex-direction: column;

      img {
        object-fit: cover;
        height: auto;
        width: 100%;
      }
    }
  }
`;
