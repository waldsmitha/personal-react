import { createGlobalStyle } from "styled-components";

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
    /* font-family: 'Montserrat', sans-serif; */
      font-family: "Lora", serif;
    width: 100%;
    background: #131313;
    color: #f2f2f2;
}

h2 {
    font-size: 4.8rem;
    font-family: 'Abril Fatface', cursive;
    font-weight: lighter
}

h3 {
    font-size: 1.3rem;
    padding: 1.5rem 0 ;
}
a,li,p {
    font-size: 1.6rem;
    line-height: 140%;
}
a {
    text-decoration: none;
    color: #f2f2f2;
    transition: 0.2s;
        &:hover {
          color: #E48383E5;
        }

}

img {
    display: block;
}

`;

export default GlobalStyles;
