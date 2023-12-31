import React from "react";
import * as S from "./style";
import { ISendTemplateProps } from "./type";
import LeftContents from "./LeftContents";
import EmailIcon from "@/../public/asset/emailIcon.svg";
import Header from "../../Header";
import { useRecoilValue } from "recoil";
import { loadingAtom } from "@/store/loadingAtom";
import Loading from "../../Loading";

const SendTemplate = ({
  leftContents,
  children,
  isSuccess,
  SuccessInfo,
}: ISendTemplateProps) => {
  const isLoading = useRecoilValue(loadingAtom);
  return (
    <S.MainContainer>
      <Header />
      {isLoading && <Loading />}
      <S.SubContainer>
        <LeftContents
          subTitle={leftContents.subTitle}
          title={leftContents.title}
          image={leftContents.image}
          pointContext={leftContents.pointContext}
          context={leftContents.context}
        />
        <S.RightContainer>
          {isSuccess ? (
            <S.SuccessContainer>
              <S.EmailIcon src={EmailIcon} alt="" />
              <S.SuccessTitle>{SuccessInfo.title}</S.SuccessTitle>
              <S.SuccessContext>{SuccessInfo.context}</S.SuccessContext>
            </S.SuccessContainer>
          ) : (
            children
          )}
        </S.RightContainer>
      </S.SubContainer>
    </S.MainContainer>
  );
};

export default SendTemplate;
