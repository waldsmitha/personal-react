import { ThemeProvider } from "styled-components";

const theme = {
  colour: {
    primary: "#3D315B",
    secondary: "#444B6E",
    background: "#708B75",
    link: "#9AB87A",
  },
  font: {
    size: {
      extraSmall: "14px",
      small: "16px",
      medium: "18px",
      large: "20px",
      extraLarge: "24px",
    },
    family: "sans-serif",
  },
  breakpoint: {
    mobile: "375px",
    tablet: "600px",
    laptop: "1200px",
    desktop: "1600px",
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
