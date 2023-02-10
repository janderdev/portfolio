import React from "react";
import * as Styled from "./styles";

interface ButtonProps {
  href?: string;
  target?: string;
  download?: string;
  children?: React.ReactNode;
  onClick?: VoidFunction;
}

export const Button = ({
  href,
  target,
  download,
  children,
  onClick,
}: ButtonProps) => {
  const rel = target ? "noreferrer noopener" : "";

  return (
    <Styled.Button
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      download={download}
    >
      {children}
    </Styled.Button>
  );
};
