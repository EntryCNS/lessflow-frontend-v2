import * as S from "./style";
import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import SubscribeImage from "@/../public/asset/subscribeIcon.svg";
import Input from "@/components/common/Input";
import CheckBox from "@/components/common/CheckBox";
import Button from "@/components/common/Button";
import SendTemplate from "@/components/common/Template/SendTemplate";
import { SendTemplateLeftContents } from "@/components/common/Template/SendTemplate/type";
import { sendSubscribeEmail } from "@/util/apis/SubscribeApis";
import { loadingAtom } from "@/store/loadingAtom";
import { subscribeCheckHandler } from "@/util/subscribeCheckHandler";
import { subscribeEmailCheckHandler } from "@/util/subscribeCheckHandler";

const Subscribe = () => {
  const LeftContents: SendTemplateLeftContents = {
    title: "매일 새로운 뉴스를 받아보세요!",
    subTitle: "뉴스를 구독하여",
    image: SubscribeImage,
    pointContext: "매일 아침 9시,",
    context: "요약된 전체 뉴스를이메일로?",
  };

  const SuccessInfo = {
    title: "구독이 완료되었습니다",
    context: "매일 아침 9시, 전체 단축 뉴스를 이메일에서 확인하실 수 있습니다",
  };

  const [email, setEmail] = useState<string>("");
  const [sendEmail, setSendEmail] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);

  const setLoading = useSetRecoilState(loadingAtom);

  const onclickHandler = () => {
    if (active) {
      setLoading(true);
      sendSubscribeEmail({ email })
        .then((e) => {
          console.log(e);
          setLoading(false);
          setIsSuccess(true);
        })
        .catch((e) => {
          console.log(e);
        });
    } else if (!subscribeEmailCheckHandler({ email }) && sendEmail) {
      alert("이메일 형식이 올바르지 않습니다.");
    } else if (!sendEmail && subscribeEmailCheckHandler({ email })) {
      alert("이메일 수신 미동의 시, 뉴스 구독이 불가합니다.");
    } else {
      alert("아래의 형식을 모두 작성해 주세요.");
    }
  };

  useEffect(() => {
    setActive(subscribeCheckHandler({ email, sendEmail }));
  }, [email, sendEmail]);

  return (
    <SendTemplate
      leftContents={LeftContents}
      isSuccess={isSuccess}
      SuccessInfo={SuccessInfo}
    >
      <div>
        <S.InputWrap>
          <S.InputTitle>📨 뉴스 구독 이메일</S.InputTitle>
          <Input
            state={email}
            setState={setEmail}
            placeholder="이메일 입력"
            fontSize={18}
            padding="22px 20px"
          />
        </S.InputWrap>
        <S.CheckBoxWrap>
          <CheckBox
            context="이메일 수신에 동의합니다."
            state={sendEmail}
            setState={setSendEmail}
          />
        </S.CheckBoxWrap>
        <S.ButtonWrap>
          <Button onClick={onclickHandler} disable={!active} active={active}>
            단일 뉴스 구독
          </Button>
        </S.ButtonWrap>
      </div>
    </SendTemplate>
  );
};

export default Subscribe;
