import React from "react";
import { IButtonProps } from "./type";
import * as S from "./style";

const Button = ({
  onClick,
  children,
  width,
  disable,
  height,
  active,
  ...props
}: IButtonProps) => {
  return (
    <S.Button
      onClick={!disable ? onClick : () => {}}
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
