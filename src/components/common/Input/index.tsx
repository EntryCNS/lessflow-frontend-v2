import React, { useState } from "react";
import { IInputProps } from "./type";
import * as S from "./style";

const Input = ({
  width,
  fontSize,
  borderRadius,
  placeholder,
  setState,
  state,
  ...props
}: IInputProps) => {
  const [activePlaceholder, setActivePlaceholder] = useState<boolean>(false);

  const setInputFocus = (focus?: boolean) => {
    if (focus) {
      setActivePlaceholder(true);
      return;
    }
    if (state !== "") {
      setActivePlaceholder(true);
      return;
    }
    setActivePlaceholder(false);
  };

  return (
    <S.Container>
      <S.Placeholder active={activePlaceholder} fontSize={fontSize}>
        {placeholder}
      </S.Placeholder>
      <S.Input
        type="text"
        value={state}
        onChange={(event) => setState(event.target.value)}
        onFocus={() => setInputFocus(true)}
        onBlur={() => setInputFocus(false)}
        width={width}
        border={activePlaceholder}
        borderRadius={borderRadius}
        {...props}
      />
    </S.Container>
  );
};

export default Input;
