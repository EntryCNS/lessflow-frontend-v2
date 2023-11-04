import SendTemplate from "@/components/common/Template/SendTemplate";
import { SendTemplateLeftContents } from "@/components/common/Template/SendTemplate/type";
import SummaryImage from "@/../public/asset/keywordIcon.svg";
import React from "react";

const LeftContents: SendTemplateLeftContents = {
  title: "뉴스를 요약해보세요!",
  subTitle: "키워드를 사용하여",
  image: SummaryImage,
  pointContext: "키워드에 해당하는",
  context: "요약된 뉴스를 이메일로?",
};

const SummaryPage = () => {
  return (
    <>
      <SendTemplate leftContents={LeftContents}>
        <div>
          <div>dfdf</div>
        </div>
      </SendTemplate>
    </>
  );
};

export default SummaryPage;
