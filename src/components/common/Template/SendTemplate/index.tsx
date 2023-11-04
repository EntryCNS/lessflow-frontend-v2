import React from "react";
import * as S from "./style";
import { ISendTemplateProps } from "./type";
import LeftContents from "./LeftContents";

const SendTemplate = ({ leftContents, children }: ISendTemplateProps) => {
  return (
    <S.MainContainer>
      <S.SubContainer>
        <LeftContents
          subTitle={leftContents.subTitle}
          title={leftContents.title}
          image={leftContents.image}
          pointContext={leftContents.pointContext}
          context={leftContents.context}
        />
        <S.RightContainer>{children}</S.RightContainer>
      </S.SubContainer>
    </S.MainContainer>
  );
};

export default SendTemplate;
