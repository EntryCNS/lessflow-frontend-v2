import Button from "@/components/common/Button";
import CheckBox from "@/components/common/CheckBox";
import Input from "@/components/common/Input";
import React, { useState } from "react";
const test = () => {
  const [email, setEmail] = useState<string>("");
  const onClick = () => {
    console.log("dfdfd");
  };
  const [button, setButton] = useState<boolean>(false);
  const [checkBox, setCheckBox] = useState<boolean>(false);
  return (
    <div style={{ margin: "10rem" }}>
      <div>
        <p>사용방법</p>
        <p>state, setState, placeholder는 필수 입니다.</p>
        <p>그외 width, fontSize 등으로 커스텀 하실 수 있습니다. </p>
        <div style={{ marginTop: "1rem" }}>
          <Input
            state={email}
            setState={setEmail}
            placeholder="이메일을 입력해주세요."
          />
        </div>
      </div>
      <div style={{ marginTop: "2rem" }}>
        <p>사용방법</p>
        <p>onClickHandler, disable, active는 필수 입니다.</p>
        <p>
          disable, active는 반대로 작동되기 때문에 변수 하나를 사용해서 쓰실 수
          있습니다.
        </p>
        <p>children으로 문자열 혹은 컴포넌트를 넣으실 수 있습니다.</p>
        <p>그외 width, height 등으로 커스텀 하실 수 있습니다. </p>
        <div style={{ marginTop: "1rem" }}>
          <Button disable={!button} active={button} onClickHandler={onClick}>
            단일 뉴스 생성
          </Button>
        </div>
      </div>
      <div style={{ marginTop: "2rem" }}>
        <p>사용방법</p>
        <p>state, setState, context로만 이루어져있으며 필수 입니다.</p>
        <p>
          children이 아닌 context로 값을 넣기 때문에 이점 유의하시고
          사용하셔야합니다.
        </p>
        <div style={{ marginTop: "1rem" }}>
          <CheckBox
            state={checkBox}
            setState={setCheckBox}
            context="TTS 서비스를 사용하시겠습니까?"
          />
        </div>
      </div>
    </div>
  );
};

export default test;
