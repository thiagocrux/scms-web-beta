import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;1,700&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    font-family: 'Roboto', sans-serif;
  }

  body {
    font-size: 1.6rem;
    color: ${(props) => props.theme.color};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;
