import { createGlobalStyle } from "styled-components";
import { colors, fonts } from "./theme";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  body {
    width: 100%;
    height: 100vh;
    font-family: ${fonts.family};
    background-color: ${colors.dark};
    color: ${colors.white};

    &::-webkit-scrollbar {
      width: 1rem;
    }

    &::-webkit-scrollbar-track {
      background: ${colors.dark};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${colors.blue};
      border-radius: .5rem;
      border: 0.25rem solid ${colors.dark};
    }
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;
