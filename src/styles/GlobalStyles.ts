import { createGlobalStyle } from 'styled-components';
import { darkGray, white } from '../configs/colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    /* font-size: 62.5%; // 1rem = 10px */
  }

  body {
    font-family: sans-serif;
    font-weight: 400;
    font-family: 'Montserrat', sans-serif;
    background-color: ${darkGray};

  }

  .App {
    margin: 0 auto;
    max-width: 865px;
    width: 100%;
    min-height: 100vh;
    background-color: ${white};

  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
  }
`;
