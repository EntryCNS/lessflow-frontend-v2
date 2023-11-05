import React, { ReactElement } from "react";
import * as S from "./style";
import Header from "../../Header";

const DefaultTemplate = (children: ReactElement) => {
  return (
    <S.DefaultTemplate>
      <Header />
      {children}
    </S.DefaultTemplate>
  );
};

export default DefaultTemplate;
