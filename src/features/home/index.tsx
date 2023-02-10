import React from "react";
import { Button } from "../../components/Button";
import { SocialMedia } from "../../components/SocialMedia";
import { iconSizes } from "../../theme";
import * as Styled from "./styles";
import { UilMessage } from "@iconscout/react-unicons";

export const Home = () => {
  return (
    <Styled.Container>
    <Styled.Content>
      <Styled.Social>
        <SocialMedia />
      </Styled.Social>
      <Styled.Introduce>
        <Styled.TypoCall>
          Oi, me chamo <Styled.TypoName>Jander Douglas</Styled.TypoName>
        </Styled.TypoCall>
        <Styled.TypoStack>Frontend Developer</Styled.TypoStack>
      </Styled.Introduce>

      <Styled.Paragraph>
        Fascinado por tecnologia desde garoto. Meu objetivo é evoluir como dev e
        um dia me tornar um profissional de referência. Para isso, estou aberto
        a aprender novas tecnologias e a compartilhar novas experiências. 👨‍💻🚀
      </Styled.Paragraph>
      <Styled.Button>
        <Button href="#contact">
          Contate-me
          <UilMessage size={iconSizes.small} />
        </Button>
      </Styled.Button>
    </Styled.Content>
    </Styled.Container>
  );
};
