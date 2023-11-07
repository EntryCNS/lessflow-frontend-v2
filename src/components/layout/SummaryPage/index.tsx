import SendTemplate from "@/components/common/Template/SendTemplate";
import { SendTemplateLeftContents } from "@/components/common/Template/SendTemplate/type";
import SummaryImage from "@/../public/asset/keywordIcon.svg";
import React, { useEffect, useState } from "react";
import Input from "@/components/common/Input";
import CheckBox from "@/components/common/CheckBox";
import Button from "@/components/common/Button";
import * as S from "./style";
import { summaryCheckHandler } from "@/util/summaryCheckHandler";
import { sendCreateArticle } from "@/util/apis/SummaryApis";
import { useSetRecoilState } from "recoil";
import { loadingAtom } from "@/store/loadingAtom";

const LeftContents: SendTemplateLeftContents = {
  title: "뉴스를 요약해보세요!",
  subTitle: "키워드를 사용하여",
  image: SummaryImage,
  pointContext: "키워드에 해당하는",
  context: "요약된 뉴스를 이메일로?",
};

const SuccessInfo = {
  title: "이메일로 전송되었습니다 ",
  context: "생성 단일 뉴스를 이메일에서 확인하실 수 있습니다",
};

const SummaryPage = () => {
  const [email, setEmail] = useState<string>("");
  const [keyword, setKeyword] = useState<string>("");
  const [TTSService, setTTSService] = useState<boolean>(false);
  const [sendEmail, setSendEmail] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);

  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const setLoading = useSetRecoilState(loadingAtom);

  const onclickHandler = () => {
    setLoading(true);

    sendCreateArticle({ email, keyword })
      .then((e) => {
        console.log(e);
        setLoading(false);
        setIsSuccess(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    setActive(summaryCheckHandler({ email, keyword, TTSService, sendEmail }));
  }, [email, keyword, TTSService, sendEmail]);

  return (
    <SendTemplate
      leftContents={LeftContents}
      isSuccess={isSuccess}
      SuccessInfo={SuccessInfo}
    >
      <S.RightContainer>
        <S.InputWrap>
          <S.InputTitle>📨 뉴스 전송 이메일</S.InputTitle>
          <Input
            state={email}
            setState={setEmail}
            placeholder="이메일 입력"
            fontSize={18}
            padding="22px 20px"
          />
        </S.InputWrap>
        <S.InputWrap>
          <S.InputTitle>📰 뉴스 생성 키워드</S.InputTitle>
          <Input
            state={keyword}
            setState={setKeyword}
            placeholder="뉴스 키워드 입력"
            fontSize={18}
            padding="22px 20px"
          />
        </S.InputWrap>
        <S.CheckBoxWrap>
          <CheckBox
            context="TTS 서비스를 이용하시겠습니까?"
            state={TTSService}
            setState={setTTSService}
          />
        </S.CheckBoxWrap>
        <S.CheckBoxWrap>
          <CheckBox
            context="이메일 수신에 동의합니다."
            state={sendEmail}
            setState={setSendEmail}
          />
        </S.CheckBoxWrap>
        <S.ButtonWrap>
          <Button onClick={onclickHandler} disable={!active} active={active}>
            단일 뉴스 생성
          </Button>
        </S.ButtonWrap>
      </S.RightContainer>
    </SendTemplate>
  );
};

export default SummaryPage;
