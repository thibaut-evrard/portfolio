"use client";
import { COLORS } from "@/constants/style";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle<{ $whiteColor?: boolean }>`
@font-face {
  font-family: work-sans;
  src: url(/fonts/WorkSans-VariableFont_wght.ttf);
}

@font-face {
  font-family: gummy;
  src: url(/fonts/PPAgrandir-GrandHeavy.otf);
}

* {
  box-sizing: border-box;
  font-family: work-sans;
  font-smooth: always;
}

html {
  font-size: 1px;
  @media screen and (max-width: 768px) {
    font-size: 0.7px;
  }
}

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

body {
  background-color: ${COLORS.BLACK};
}



* {
  font-size: 16rem;
}

/* TYPOGRAPHY */
ul,
li,
h1,
h2,
h3,
h4,
h5,
p,
button {
  color: ${COLORS.WHITE};
  margin: 0.2em 0;
}

`;

export default GlobalStyles;
