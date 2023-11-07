import React from "react";
import * as S from "./style";
import { INewsBoxProps } from "./type";

const NewsBox = ({ keyword, thumbnail, onClick }: INewsBoxProps) => {
  return (
    <S.InlineBox onClick={onClick}>
      <S.MainContainer>
        {thumbnail && <S.Image src={thumbnail} alt="" />}
        <S.TitleBox>{keyword}</S.TitleBox>
      </S.MainContainer>
    </S.InlineBox>
  );
};

export default NewsBox;
