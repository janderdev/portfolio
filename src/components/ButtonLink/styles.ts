import styled, { keyframes } from "styled-components";
import { colors } from "../../theme";

export const ButtonLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  :hover {
    color: ${colors.blueLight};
  }
`;
