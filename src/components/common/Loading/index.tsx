import React, { useEffect, useState } from "react";
import * as S from "./style";

const Loading = () => {
  const [context, setContext] = useState<string>("Loading.");
  const [circle, setCircle] = useState<number>(0);
  useEffect(() => {
    setTimeout(() => {
      setContext((prev) => {
        if ((prev + ".").length > 10) return "Loading.";
        else return prev + ".";
      });
    }, 700);
  }, [context]);

  useEffect(() => {
    setTimeout(() => {
      setCircle((prev) => (prev + 1) % 365);
    }, 5);
  }, [circle]);

  return (
    <S.MainContainer>
      <S.LoadingBox>
        <S.LoadingView circle={circle}>
          <S.LoadingMiddlePoint />
        </S.LoadingView>
        {context}
      </S.LoadingBox>
    </S.MainContainer>
  );
};

export default Loading;
