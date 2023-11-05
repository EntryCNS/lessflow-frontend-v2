import React, { ReactElement } from "react";
import * as S from "./style";
import Header from "../../Header";

const DefaultTemplate = (children: ReactElement | any) => {
  return (
    <S.DefaultTemplate>
      <Header />
      {children}
    </S.DefaultTemplate>
  );
};

export default DefaultTemplate;
