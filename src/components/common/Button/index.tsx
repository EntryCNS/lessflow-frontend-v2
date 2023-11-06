import React from "react";
import { IButtonProps } from "./type";
import * as S from "./style";

const Button = ({
  onClick,
  disable,
  children,
  width,
  height,
  active,
  ...props
}: IButtonProps) => {
  return (
    <S.Button
      onClick={onClick}
      disable={disable}
      width={width}
      height={height}
      active={active}
      {...props}
    >
      {children}
    </S.Button>
  );
};

export default Button;
