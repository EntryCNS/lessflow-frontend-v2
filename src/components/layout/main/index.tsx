import React, { useEffect, useState } from "react";
import * as S from "./style";
import MainTxtImg from "@/../public/asset/mainTxt.svg";
import CharacterImg from "../../../../public/asset/character.svg";
import Button from "../../common/Button";
import ModalBox from "../../common/modalBox";
import DefaultTemplate from "@/components/common/Template/DefaultTemplate";
import { articleListType } from "./type";
import NewsBox from "@/components/common/NewsBox";
import { getArticleToday } from "@/util/apis/EntireApis";
import { getToday } from "@/util/getToday";

const Main = () => {
  const NEWSTITLELIST = [
    "이선균 논란",
    "홍준표 논란",
    "이재명 논란",
    "윤석열 논란",
    "승리 논란",
  ];

  const [articleList, setArticleList] = useState<articleListType[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [articleNum, setArticleNum] = useState<string>();

  useEffect(() => {
    getArticleToday(getToday())
      .then((res) => setArticleList(res.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <DefaultTemplate>
      <S.MainLayout>
        <S.HeaderPlace />
        <S.MainBannerBox>
          <S.MainTxtImg src={MainTxtImg} alt="" />
          <S.MainCharacterImg src={CharacterImg} alt="" />
        </S.MainBannerBox>
        <S.MainContentBox>
          <Button onClick={() => {}} disable={false} active={true}>
            오늘의 최신 뉴스
          </Button>
          <S.NewsWrapper>
            {articleList.map((data, idx) => (
              <div key={data.id}>
                <NewsBox
                  id={data.id}
                  keyword={data.keyword}
                  thumbnail={data.thumbnail}
                  onClick={(): any => {
                    setIsOpen(true);
                    setArticleNum(data.id);
                  }}
                />
              </div>
            ))}
          </S.NewsWrapper>

          <ModalBox
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            articleNum={articleNum}
          />
        </S.MainContentBox>
      </S.MainLayout>
    </DefaultTemplate>
  );
};

export default Main;
