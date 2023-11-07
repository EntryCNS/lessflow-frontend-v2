import React, { ReactElement } from "react";
import * as S from "./style";
import Header from "../../Header";

interface IDefaultTemplateProps {
  children: ReactElement;
}

const DefaultTemplate = ({ children }: IDefaultTemplateProps) => {
  return (
    <S.DefaultTemplate>
      <Header />
      <>{children}</>
    </S.DefaultTemplate>
  );
};

export default DefaultTemplate;
