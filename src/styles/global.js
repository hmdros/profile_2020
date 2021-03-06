import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  @import url("https://fonts.googleapis.com/css?family=Great+Vibes|Italianno|Parisienne|Pinyon+Script&display=swap");

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #F4F4F4;
    -webkit-font-smoothin: antialiased;
  }

  body, input, button {
    font: 14px Nunito, sans-serif;
  }

  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  button {
    cursor: pointer;
  }
`;
