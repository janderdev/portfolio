import { SocialMedia } from "../SocialMedia";
import * as Styled from "./styles";

export const Footer = () => {
  return (
    <Styled.Container>
      <Styled.Copy>
        <span>Direitos de imagem Copyright © JDM · 2023</span>
        <span>Feito com 💙 por @jander_douglas</span>
      </Styled.Copy>
      <SocialMedia />
    </Styled.Container>
  );
};
