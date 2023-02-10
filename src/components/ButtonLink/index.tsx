import React from "react";
import * as Styled from "./styles";

interface ButtonLinkProps {
  id?: string;
  href?: string;
  target?: string;
  children?: React.ReactElement | Array<React.ReactElement>;
  onClick?: VoidFunction;
}

export const ButtonLink = ({
  id,
  href,
  target,
  children,
  onClick,
}: ButtonLinkProps) => {
  const rel = target ? "noreferrer noopener" : "";

  return (
    <Styled.ButtonLink
      id={id}
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
    >
      {children}
    </Styled.ButtonLink>
  );
};

export default ButtonLink;
