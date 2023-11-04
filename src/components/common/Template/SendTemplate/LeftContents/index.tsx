import React from "react";
import { SendTemplateLeftContents } from "../type";
import * as S from "./style";

const LeftContents = ({
  subTitle,
  title,
  image,
  pointContext,
  context,
}: SendTemplateLeftContents) => {
  return (
    <S.LeftContainer>
      <S.TitleWrap>
        <S.SubTitle>{subTitle}</S.SubTitle>
        <S.Title>{title}</S.Title>
      </S.TitleWrap>
      <S.SymbolImage src={image} alt="" />
      <S.ContextWrap>
        {pointContext + " "}
        <S.Context>{context}</S.Context>
      </S.ContextWrap>
    </S.LeftContainer>
  );
};

export default LeftContents;
