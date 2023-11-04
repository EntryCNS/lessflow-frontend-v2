import SendTemplate from "@/components/common/Template/SendTemplate";
import { SendTemplateLeftContents } from "@/components/common/Template/SendTemplate/type";
import SummaryImage from "@/../public/asset/keywordIcon.svg";
import React, { useState } from "react";
import Input from "@/components/common/Input";
import CheckBox from "@/components/common/CheckBox";
import Button from "@/components/common/Button";

const LeftContents: SendTemplateLeftContents = {
  title: "뉴스를 요약해보세요!",
  subTitle: "키워드를 사용하여",
  image: SummaryImage,
  pointContext: "키워드에 해당하는",
  context: "요약된 뉴스를 이메일로?",
};

const SummaryPage = () => {
  const [email, setEmail] = useState<string>("");
  const [keyword, setKeyword] = useState<string>("");
  const [TTSService, setTTSService] = useState<boolean>(false);
  const [sendEmail, setSendEmail] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);

  const onclickHandler = () => {};

  return (
    <>
      <SendTemplate leftContents={LeftContents}>
        <div>
          <div>
            <p>뉴스 전솓 이메일</p>
            <Input
              state={email}
              setState={setEmail}
              placeholder="이메일 입력"
              fontSize={18}
              padding="22px 20px"
            />
          </div>
          <div>
            <p>뉴스 생성 키워드</p>
            <Input
              state={keyword}
              setState={setKeyword}
              placeholder="뉴스 키워드 입력"
              fontSize={18}
              padding="22px 20px"
            />
          </div>
          <div>
            <CheckBox
              context="TTS 서비스를 이용하시겠습니까?"
              state={TTSService}
              setState={setTTSService}
            />
          </div>
          <div>
            <CheckBox
              context="이메일 수신에 동의합니다.?"
              state={sendEmail}
              setState={setSendEmail}
            />
          </div>
          <Button
            onClickHandler={onclickHandler}
            disable={!active}
            active={active}
          >
            단일 뉴스 생성
          </Button>
        </div>
      </SendTemplate>
    </>
  );
};

export default SummaryPage;
