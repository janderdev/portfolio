import * as Styled from "./styles";
import { iconSizes } from "../../theme";
import {
  UilLinkedinAlt,
  UilGithubAlt,
  UilInstagram,
} from "@iconscout/react-unicons";
import ButtonLink from "../ButtonLink";

const { VITE_LINKEDIN, VITE_GITHUB, VITE_INSTAGRAM } =
  import.meta.env;

export const SocialMedia = () => {
  return (
    <Styled.SocialMedia>
      <ButtonLink href={VITE_LINKEDIN} target="_blank">
        <UilLinkedinAlt size={iconSizes.normal} />
      </ButtonLink>

      <ButtonLink href={VITE_GITHUB} target="_blank">
        <UilGithubAlt size={iconSizes.normal} />
      </ButtonLink>

      <ButtonLink href={VITE_INSTAGRAM} target="_blank">
        <UilInstagram size={iconSizes.normal} />
      </ButtonLink>
    </Styled.SocialMedia>
  );
};
