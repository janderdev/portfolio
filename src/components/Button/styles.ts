import styled from "styled-components";
import { colors, fonts } from "../../theme";

export const Button = styled.a`
  display: flex;
  background: ${colors.blue};
  color: ${colors.white};
  padding: 1rem;
  border-radius: 0.5rem;
  font-weight: ${fonts.weight.normal};
  align-items: center;
  transition: 0.3s;
  gap: 0.5rem;
  :hover {
    background: ${colors.blueLight};
  }
  @media screen and (max-width: 767px) {
    font-size: ${fonts.mobileSize.small};
  }
`;
