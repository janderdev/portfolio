import styled, { keyframes } from "styled-components";
import { colors, fonts, theme } from "../../theme";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3rem;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: ${colors.blue};
  padding: 0 1.5rem;
  align-content: center;
  font-size: ${fonts.mobileSize.small};
  font-weight: ${fonts.weight.medium};

  @media screen and (min-width: 767px) {
    font-size: ${fonts.desktopSize.normal};
    font-weight: ${fonts.weight.normal};
    top: 0;
    bottom: initial;
    background: ${colors.dark};
    height: 5rem;
  }

  @media screen and (min-width: 960px) {
    padding: 0 10rem;
  }
`;

export const Backdrop = styled.div<{ open: boolean }>`
  @media screen and (max-width: 767px) {
    position: absolute;
    left: 0;
    background: 0;
    width: 100%;
    height: 100vmax;
    display: ${({ open }) => (open ? "block " : "none")};
  }
`;

export const Logo = styled.a`
  color: ${colors.white};
  font-weight: ${fonts.weight.medium};
  transition: 0.2s;
  :hover {
    color: ${colors.grayDark};
    cursor: pointer;
  }
`;

export const NavMenu = styled.div<{ open: boolean }>`
  z-index: 1000;
  @media screen and (max-width: 767px) {
    display: grid;
    position: fixed;
    left: 0;
    width: 100%;
    background: ${colors.black};
    padding: 2.5rem 1.5rem 4rem;
    box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
    border-radius: 1.5rem 1.5rem 0 0;
    bottom: -100%;
    bottom: ${({ open }) => (open ? "-1px" : "-100%")};
    transition: all 0.2s;
    gap: 1.875rem;
  }

  @media screen and (min-width: 767px) {
    top: 0;
    svg,
    #contact-item {
      display: none;
    }
  }
`;

export const NavList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0;
  margin: 0;
  row-gap: 1.5rem;

  @media screen and (min-width: 767px) {
    grid-template-columns: repeat(6, auto);
    column-gap: 2rem;
  }
`;

export const NavItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.white};
  transition: 0.2s;
  :hover {
    color: ${colors.blue};
  }
  svg {
    margin-bottom: 0.3rem;
  }
`;

export const ContactButton = styled.a`
  font-size: ${fonts.desktopSize.small};
  display: flex;
  height: 2rem;
  width: 7rem;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  cursor: pointer;
  background-color: ${colors.blue};
  :hover {
    background-color: ${colors.blueLight};
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const CloseButton = styled.a`
  display: flex;
  align-items: center;
  position: absolute;
  right: 1.3rem;
  bottom: 0.5rem;
  cursor: pointer;
  color: ${colors.blue};
  transition: 0.2s;
  :hover {
    color: ${colors.blueLight};
  }

  @media screen and (min-width: 767px) {
    display: none;
  }
`;

export const ToggleButton = styled.a`
  display: flex;
  align-items: center;
  color: ${colors.white};
  font-weight: ${fonts.weight.medium};
  transition: 0.2s;
  :hover {
    color: ${colors.grayDark};
    cursor: pointer;
  }

  @media screen and (min-width: 767px) {
    display: none;
  }
`;
