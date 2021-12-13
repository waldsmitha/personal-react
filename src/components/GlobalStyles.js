import { createGlobalStyle } from "styled-components";

const primaryFontSize = 3.5;
const secondaryFontSize = (primaryFontSize * 4) / 7;
const primaryFontSizeFinal = `${primaryFontSize}rem`;
const secondaryFontSizeFinal = `${secondaryFontSize}rem`;

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: darkgray;
    }
    scrollbar-color: darkgray white;
    scrollbar-width: .5rem;
    scroll-behavior: smooth;
}

body {
    /* font-family: 'Lora', serif; */
    font-family: 'Poppins', sans-serif;
    width: 100%;
    background: #131313;
    color: #cfcfb1;
}


//Font Size
h1 {
    font-size: ${primaryFontSizeFinal};
}

h2 {
    font-size: ${secondaryFontSizeFinal}
}

h3 {
    font-size: 1.3rem;
    font-weight: 300;
}
a,li,p {
      line-height: 140%;
    font-weight: 300;
}
a {
    text-decoration: none;
    /* color: #ababab; */
    transition: 0.2s;
}
li {
    list-style: none;
    font-size: .8rem;
}
a,p {
    font-size: 1rem;
    line-height: 140%;
}

@media screen and (min-width: 550px) {
  h1 {
      font-size: 4rem;
  }
  h2 {
      font-size:2.5rem;
  }
  h3 {
    font-size: 1.3rem;
    }
  a,li,p {
    font-size: 1rem; 
    }
  }

@media screen and (min-width: 768px) {
  h1 {
      font-size: 6rem;
  }
  h2 {
      font-size:3rem;
  }
  h3 {
    font-size: 2rem;
        }
  a,li,p {
    font-size: 1.25rem; 
    }
  }
  
img {
    display: block;
}

`;

export default GlobalStyles;
