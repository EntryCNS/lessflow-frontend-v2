import React from "react";
import { IButtonProps } from "./type";
import * as S from "./style";

const Button = ({
  onClickHandler,
  disable,
  children,
  width,
  height,
  active,
  ...props
}: IButtonProps) => {
  return (
    <S.Button
      onClick={onClickHandler}
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
