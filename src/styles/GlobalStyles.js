import { createGlobalStyle } from "styled-components"
import NunitoRegular from "fonts/Nunito-Regular.ttf"
import NunitoBlack from "fonts/Nunito-Black.ttf"

export const colors = {
  white: "#fff",
  bgDark: "#151510",
  bgLight: "#fefcfc",
  deepDarkGrey: "#404040",
  myColor1: "#332600",
  myColor2: "#ffcc99",
  myColor2L: "#995555",
  myColor3: "#fff2e6",
}
export const darkTheme = {
  colors: {
    background: colors.bgDark,
    menuBackground: colors.myColor1,
    textDark: colors.myColor3,
    textMain: colors.myColor2,
    textSecondary: colors.myColor3,
  },
}
export const lightTheme = {
  colors: {
    background: colors.bgLight,
    menuBackground: colors.myColor3,
    textDark: colors.myColor1,
    textMain: colors.myColor2L,
    textSecondary: colors.deepDarkGrey,
  },
}
export const GlobalStyles = createGlobalStyle`
  :root{
    --site-max-width: 1200px;
  }
  @font-face {
    font-family: "Nunito Regular";
    src: 
    local("Nunito Regular"), local("NunitoRegular"),
    url(${NunitoRegular}) format('ttf');
    font-weight:300;
    font-style:normal;
  }
  @font-face {
    font-family: "Nunito Black";
    src: 
    local("Nunito Black"), local("NunitoBlack"),
    url(${NunitoBlack}) format('ttf');
    font-weight:300;
    font-style:normal;
  }
  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.textSecondary};
    font-family: "Nunito Regular", Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0 20px 80px 20px;
  }
  img {
    transition: all 0.5s ease;
  }
  main {
    max-width: 960px;
    margin: 40px auto;
  }
  h1,h2,h3,h4,h5,h6 {
    color: ${props => props.theme.colors.textMain};
    font-family: "Nunito Black", Arial, Helvetica, sans-serif;
    transition: all 0.5s ease;
    letter-spacing: 1px;
  }
  p {
    font-size: 0.9rem;
    line-height: 1.2;

    @media screen and (min-width: 768px) {
      font-size: 1.1rem;
      line-height: 1.5;
    }
  }
  h2 {
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 1.8px;

    @media screen and (min-width: 768px) {
      font-size: 1.5rem;
    } 
  }
  h3 {
    font-size: 0.8rem;
    letter-spacing: 1.5px;
    margin: 30px 0 -15px 0;

    @media screen and (min-width: 768px) {
      font-size: 1.2rem;
    } 
  }
  a {
    text-decoration:none;
  }
`
