import { createGlobalStyle } from 'styled-components';
import { Fonts } from './fonts';
import { Locomotive } from './locomotive';

const GlobalStyles = createGlobalStyle`
  ${Fonts}
  ${Locomotive}
  :root {
    --black: #000322;
    --burlywood: #fff;
    --grey: #866c55;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  a {
    color: var(--burlywood);
  }

  h1,
  h2,
  h3,
  h4,
  a {
    font-family: Monument, sans-serif;
  }

  li {
    list-style: none;
  }

  img {
    width: 100%;
    display: block;
  }

  html {
    overflow: hidden;
    min-height: -webkit-fill-available;
  }

  body {
    background-color: var(--black);
    cursor: none;
    isolation: isolate;
    min-height: 100vh;
    min-height: -webkit-fill-available;
  }

  p {
    font-size: calc(var(--VW) * 1.5);
    font-weight: 400;
    font-family: Grotesk, sans-serif;
    word-spacing: calc(var(--VW) * 0.2);
    line-height: 120%;
    overflow-wrap: break-word;
    word-wrap: break-word;
    -webkit-hyphens: auto;
    -ms-hyphens: auto;
    -moz-hyphens: auto;
    hyphens: auto;

    @media (hover: none) and (pointer: coarse) {
      font-size: calc(var(--VW) * 3);
      word-spacing: calc(var(--VW) * 0.5);
    }

    @media (hover: none) and (pointer: coarse) and (max-width: 500px), (max-width: 500px) {
      font-size: calc(var(--VW) * 5);
      word-spacing: calc(var(--VW) * 0.5);
    }
  }

  a {
    text-decoration: none;
    font-weight: 800;
    text-transform: uppercase;
    mix-blend-mode: difference;
    outline: none;

    &:hover,
    &:focus {
      -webkit-text-fill-color: var(--black);
      -webkit-text-stroke: calc(var(--VW) * 0.14) var(--burlywood);
      cursor: none;
    }
  }

`;

export { GlobalStyles };
