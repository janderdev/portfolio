import styled, { keyframes } from "styled-components";
import { colors, fonts, theme } from "../../theme";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;

  @media screen and (min-width: 768px) {
    padding: 0 10rem;
  }
`

export const Content = styled.div`
  display: grid;
  grid-template-areas:
    "social introduce"
    "description description"
    "button button";
  grid-template-columns: 1.5rem auto;
  column-gap: 2rem;
  row-gap: 1.5rem;
  align-self: center;
  justify-self: center;
  margin-top: 1.5rem;

  @media screen and (min-width: 767px) {
    grid-template-areas:
    "social introduce"
    "social description"
    "social button";
    column-gap: 5rem;
  }

  @media screen and (max-width: 767px) {
    margin: 0 1.5rem 5rem 1.5rem;
  }
`;

export const Social = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  grid-area: social;
`;

export const Introduce = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  grid-area: introduce;
  font-size: ${fonts.mobileSize.big};
  font-weight: ${fonts.weight.normal};
  gap: 0.375rem;
  @media screen and (min-width: 768px) {
    font-size: ${fonts.desktopSize.h1};
  }
`;

export const TypoCall = styled.div``;

export const TypoName = styled.span`
  display: inline-block;
  font-weight: ${fonts.weight.semiBold};
  position: relative;
  ::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    background-image: linear-gradient(to right, ${colors.blue}, ${colors.blueLight});
    transition: width 0.3s ease-out;
    height: 4px;
    border-radius: 1rem;
  }
  :hover::before {
    width: 100%;
    left:0;
    right: auto;
  }
`;

export const TypoStack = styled.div`
  font-size: ${fonts.mobileSize.h3};
  font-weight: ${fonts.weight.medium};
  @media screen and (min-width: 768px) {
    font-size: ${fonts.desktopSize.h3};
  }
`;

export const Paragraph = styled.div`
  grid-area: description;
  font-size: ${fonts.mobileSize.normal};
  @media screen and (min-width: 768px) {
    max-width: 42rem;
    font-size: ${fonts.desktopSize.normal};
  }
`;

export const Button = styled.div`
  grid-area: button;
  width: 100%;
  display: flex;
`;
