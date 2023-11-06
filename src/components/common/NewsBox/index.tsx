import React from "react";
import * as S from "./style";
import { INewsBoxProps } from "./type";
import Image from "next/image";

const NewsBox = ({ title, image }: INewsBoxProps) => {
  return (
    <S.InlineBox>
      <S.MainContainer>
        <Image src={image} alt="" width={400} height={400} />
        <S.TitleBox>{title}</S.TitleBox>
      </S.MainContainer>
    </S.InlineBox>
  );
};

export default NewsBox;
