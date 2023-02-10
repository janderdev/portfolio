import * as Styled from "./styles";
import { useState } from "react";
import { iconSizes } from "../../theme";
import {
  UilEstate,
  UilUser,
  UilFileAlt,
  UilBriefcaseAlt,
  UilScenery,
  UilMessage,
  UilTimes,
  UilApps,
} from "@iconscout/react-unicons";

export const NavMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <Styled.Backdrop open={openMenu} onClick={toggleMenu} />
      <Styled.Nav>
        <Styled.Logo>Jander</Styled.Logo>
        <Styled.NavMenu open={openMenu}>
          <Styled.NavList>
            <Styled.NavItem>
              <UilEstate size={iconSizes.normal} />
              Home
            </Styled.NavItem>
            <Styled.NavItem>
              <UilUser size={iconSizes.normal} />
              Sobre
            </Styled.NavItem>
            <Styled.NavItem>
              <UilFileAlt size={iconSizes.normal} />
              Skills
            </Styled.NavItem>
            <Styled.NavItem>
              <UilBriefcaseAlt size={iconSizes.normal} />
              Serviços
            </Styled.NavItem>
            <Styled.NavItem>
              <UilScenery size={iconSizes.normal} />
              Portfólio
            </Styled.NavItem>
            <Styled.NavItem id="contact-item">
              <UilMessage size={iconSizes.normal} />
              Contato
            </Styled.NavItem>
          </Styled.NavList>
          <Styled.CloseButton onClick={toggleMenu}>
            <UilTimes size={iconSizes.bigger} />
          </Styled.CloseButton>
        </Styled.NavMenu>
        <Styled.ContactButton>Contato</Styled.ContactButton>
        <Styled.ToggleButton onClick={toggleMenu}>
          <UilApps size={iconSizes.normal} />
        </Styled.ToggleButton>
      </Styled.Nav>
    </>
  );
};
