import { createGlobalStyle, keyframes } from "styled-components";
import { colors } from "./colors";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0%);
  }
`;

const GlobalStyles = createGlobalStyle`
  html {
    background: ${colors.purple};
  }
  html {
	  scroll-behavior: smooth;
    @media (prefers-reduced-motion) {
      scroll-behavior: none;
    }
  }
  button {
    border: none;
    cursor: pointer;
  }
  body, html, * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  /* Positioning classes */
  .pos-full {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .pos-center {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .pos-horiz-center {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  h1, h2, h3, h4, h5, h6 {
    font-size: 2rem;
    color: #fff;
    text-shadow: -.05em .05em #000;
    font-family: UrbaneAdscriptBoldItalic, sans-serif;
  }
  h1 {
    text-shadow: -10px 10px #000;
  }
  body {
    font-family: Sriracha, sans-serif;
    color: #fff;
  }
  .animateIn {
    opacity: 0;
    transform: translateY(8px);
    pointer-events: none;
  }
  
  .animateIn.start {
    animation: ${fadeIn} .225s cubic-bezier(0.645, 0.045, 0.355, 1) both;
    pointer-events: all;
  }
`;

export default GlobalStyles;
