import React from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { maxWidth } from "../util";

//Media
import stock1 from "../img/stock1.png";

const About = () => {
  return (
    <SAbout>
      <header>
        <h1>I don't do this for the money.</h1>
      </header>
      <div className="flex-container">
        <div className="image">
          <img src={stock1} alt="" />
        </div>
        <div className="bio">
          <h2>
            Pleasure to meet you,
            <br />
            I'm <span>Austin Waldsmith</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
            faucibus libero hendrerit a, sed nisl elementum habitasse
            scelerisque. Porta et cum ultrices arcu. Viverra nunc adipiscing
            praesent id. Etiam orci aliquam fermentum morbi. Facilisi adipiscing
            amet eget feugiat id adipiscing. Sed mauris viverra quisque id mi
            dolor, pellentesque. In magna varius quam convallis. Varius erat
            massa eget tellus urna ipsum nullam. Ullamcorper lectus turpis vitae
            eu mauris.
          </p>
        </div>
        {/* <div className="arrow-down"></div> */}
      </div>
      <div className="cta">
        <h2>Let's get in touch.</h2>
        <div className="social-media-icons"></div>
        <form action="#" method="POST">
          {/* <label for="name">First & Last Name:</label> */}
          <div className="flex-container">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="First & Last Name"
              required
            />
            {/* <label for="email">Email:</label> */}
            <input
              type="email"
              name="_replyto"
              id="email"
              placeholder="email"
              required
            />
          </div>
          {/* <label for="message" placeholder='Message '>Message</label> */}
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
          <button type="submit" value="Send">
            Send
          </button>
        </form>
      </div>

      <div className="comment">Otherwise I'd be broke.</div>
    </SAbout>
  );
};

export default About;

const SAbout = styled(motion.div)`
  ${({ theme }) => css`
    ${maxWidth}
    margin: 0 auto;
    position: relative;
    width: 100%;
    padding: 20vh 0;
    display: flex;
    flex-direction: column;

    header {
      margin: 20vh 0;

      h1 {
        font-size: 90px;
      }
    }

    .flex-container {
      display: flex;
      flex-direction: row;

      h2 {
        padding-bottom: 5rem;
      }
      .image {
        margin-right: 5rem;

        img {
          object-fit: cover;
          height: 100%;
          width: 350px;
        }
      }

      .bio {
        span {
          color: #7ed1eb;
        }
      }
    }
    .cta {
      padding-top: 20vh;
      text-align: end;
      h2 {
        color: ${theme.color.secondary};
      }
    }
    .comment {
      position: absolute;
      bottom: 0;
      left: 0;
    }

    form {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      min-width: 40vw;
      min-height: 60vh;
      margin: 0 5rem;
      input,
      textarea {
        width: 100%;
      }
      .flex-container {
        display: flex;
        width: 100%;
      }
    }
  `}
`;
