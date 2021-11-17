import { createGlobalStyle } from "styled-components";

const primaryFontSize = 3.5;
const secondaryFontSize = (primaryFontSize * 4) / 9;
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
    color: #ababab;
}



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
    font-size: .625rem;
    line-height: 140%;
}
a {
    text-decoration: none;
    color: #ababab;
    transition: 0.2s;
        &:hover {
          color: #E48383E5;
        }

}
li {
    list-style: none;
}
p {
    font-size: 1.25rem;
    line-height: 140%;
    font-weight: 300;
}

img {
    display: block;
}

`;

export default GlobalStyles;
