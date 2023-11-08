import React, { useEffect, useState } from "react";
import * as S from "./style";
import { useRouter } from "next/router";
import Logo from "@/../public/asset/logo.svg";

interface IHandlerProps {
  path: string;
}

const Header = () => {
  const router = useRouter();
  const [pageIdx, setPageIdx] = useState<number>(0);
  const OnClickHandler = ({ path }: IHandlerProps) => {
    router.push(path);
  };

  useEffect(() => {
    switch (router.pathname) {
      case "/":
        setPageIdx(0);
        break;
      case "/entire":
        setPageIdx(1);
        break;
      case "/summary":
        setPageIdx(2);
        break;
      case "/susbscribe":
        setPageIdx(3);
        break;
    }
  }, [router]);

  return (
    <S.HeaderContainer>
      <S.LogoImage src={Logo} alt="image error" />
      <S.ContentsWrap>
        <S.ContentsContext
          isActive={pageIdx === 0}
          onClick={() => OnClickHandler({ path: "/" })}
        >
          최신뉴스보기
        </S.ContentsContext>
        <S.ContentsContext
          isActive={pageIdx === 1}
          onClick={() => OnClickHandler({ path: "/entire" })}
        >
          전체뉴스보기
        </S.ContentsContext>
        <S.ContentsContext
          isActive={pageIdx === 2}
          onClick={() => OnClickHandler({ path: "/summary" })}
        >
          뉴스생성하기
        </S.ContentsContext>
        <S.ContentsContext
          isActive={pageIdx === 3}
          onClick={() => OnClickHandler({ path: "/susbscribe" })}
        >
          뉴스구독하기
        </S.ContentsContext>
      </S.ContentsWrap>
    </S.HeaderContainer>
  );
};

export default Header;
