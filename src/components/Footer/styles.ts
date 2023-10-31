import styled from "styled-components";
import { colors } from "./../../theme/index";

export const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${colors.blue};
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column-reverse;
  padding: 2rem 3rem 5rem;
  gap: 1rem;

  div:last-child  {
    color: ${colors.white};
    flex-direction: row;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    text-align: start;
    margin: 0 2rem;
    padding: 2rem 0;
  }

  @media screen and (min-width: 960px) {
    flex-direction: row;
    justify-content: space-between;
    text-align: start;
    margin: 0 10rem;
    padding: 2rem 0;
  }
  
  @media screen and (min-width: 1550px) {
    margin: 0 20rem;
    padding: 2rem 0;
  }
`;

export const Copy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  span {
    font-size: 0.75rem;
    line-height: 150%;
    font-weight: 400;
  }
`;
