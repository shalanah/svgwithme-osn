import styled from "styled-components";

const Section = styled.section`
  position: relative;
  min-height: max(100vh, 600px);
  display: flex;
  flex-direction: column;
  ol,
  ul {
    margin-left: 0.75em;
  }
  a {
    color: inherit;
    text-underline-offset: 0.175em;
  }
  .layout-center {
    margin: auto;
    transform: translateY(-2vh);
    font-size: 2.5rem;
    line-height: 1.4;
    min-width: 75%;
    max-width: calc(100% - 60px);
    & *:first-child {
      margin-top: 0px;
    }
    h1 {
      margin-top: 0.5em;
      margin-bottom: 0.25em;
      font-size: max(5vw, 3rem);
      text-shadow: -10px 10px #000;
    }
    h2 {
      text-shadow: -10px 10px #000;
      margin-top: 1em;
      margin-bottom: 0.25em;
      font-size: max(3vw, 3rem);
    }
  }
`;

export default Section;
