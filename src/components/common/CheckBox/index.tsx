import React from "react";
import * as S from "./style";
import { ICheckBoxProps } from "./type";
import CheckIcon from "@/../public/asset/Check.svg";

const CheckBox = ({ context, setState, state }: ICheckBoxProps) => {
  return (
    <S.Container onClick={() => setState(!state)}>
      <S.SubContainer>
        <S.CheckBox active={state}>
          <S.Check src={CheckIcon} alt="image error" />
        </S.CheckBox>
        <S.Context>{context}</S.Context>
      </S.SubContainer>
    </S.Container>
  );
};

export default CheckBox;
