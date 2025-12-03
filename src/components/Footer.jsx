import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { flex } from "../util";

const Footer = () => {
  return (
    <SFooter align="center" justify="center">
      <p>Email:</p>
      <a href="mailto:austin.waldsmith@gmail.com">austin.waldsmith@gmail.com</a>
    </SFooter>
  );
};

export default Footer;

const SFooter = styled(motion.div)`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    ${flex}
    display: flex;
    min-height: 20vh;
    background: #131313;
    color: #cfcfb1;
    gap: 4px;

    p,
    a {
      font-size: 1rem;
      color: #cfcfb1;
    }
  `}
`;
