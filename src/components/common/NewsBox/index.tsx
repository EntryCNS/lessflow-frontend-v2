import React from "react";
import * as S from "./style";
import { INewsBoxProps } from "./type";
import Image from "next/image";

const NewsBox = ({ keyword, thumbnail, id }: INewsBoxProps) => {
  return (
    <S.InlineBox>
      <S.MainContainer>
        {thumbnail && <Image src={thumbnail} alt="" width={400} height={400} />}
        <S.TitleBox>{keyword}</S.TitleBox>
      </S.MainContainer>
    </S.InlineBox>
  );
};

export default NewsBox;
