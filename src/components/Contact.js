import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

//Media
import stock1 from "../img/stock1.png";
import { maxWidth } from "../util";

const Contact = () => {
  return (
    <SContact>
      <div className="image">
        <img src={stock1} alt="" />
      </div>
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
    </SContact>
  );
};

export default Contact;

const SContact = styled(motion.div)`
  ${maxWidth}
  margin: 0 auto;
  display: flex;
  padding: 20vh 0;
  .image {
    width: 500px;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
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
  }
  .flex-container {
    display: flex;
    width: 100%;
  }
`;
