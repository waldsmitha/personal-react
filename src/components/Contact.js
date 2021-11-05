import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

//Media
import stock1 from "../img/stock1.png";

const Contact = () => {
  return (
    <SContact>
      <img src={stock1} alt="" />
      <div className="social-media-icons"></div>
      <form action="#" method="POST">
        {/* <label for="name">First & Last Name:</label> */}
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
  width: 100%;
`;
