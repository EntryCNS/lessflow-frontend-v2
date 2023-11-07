import React, { useEffect, useState } from "react";
import * as S from "./style";
import MainTxtImg from "@/../public/asset/mainTxt.svg";
import CharacterImg from "../../../../public/asset/character.svg";
import Button from "../../common/Button";
import Modal from "./modal";
import DefaultTemplate from "@/components/common/Template/DefaultTemplate";
import axios from "axios";
import { articleListType } from "./type";

const Main = () => {
  const NEWSTITLELIST = [
    "이선균 논란",
    "홍준표 논란",
    "이재명 논란",
    "윤석열 논란",
    "승리 논란",
  ];

  const [articleList,setArticleList] = useState<articleListType[]>([])
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [articleNum, setArticleNum] = useState<string>();

  useEffect(()=>{
    axios.get('http://43.202.215.8:8080/article/')
    .then((res)=>{
      setArticleList(res.data)
    })
    .catch(()=>{

    })
  },[])

  return (
    <DefaultTemplate>
      <S.MainLayout>
        <S.HeaderPlace />

        <S.MainBannerBox>
          <S.MainTxtImg src={MainTxtImg} alt="" />

          <S.MainCharacterImg src={CharacterImg} alt="" />
        </S.MainBannerBox>

        <S.MainContentBox>
          <Button
            onClick={() => {}}
            disable={false}
            active={true}
            children={"인기 뉴스"}
          ></Button>

          <S.NewsWrapper>
            {articleList.map((data, idx) => (
              <S.NewsBox
                key={idx}
                onClick={() => {
                  setIsOpen(true);
                  setArticleNum(data.id)
                }}
              >
                <S.NewsBoxImg src={data.thumbnail}/>

                <S.NewsText>{data.keyword}</S.NewsText>
              </S.NewsBox>
            ))}
          </S.NewsWrapper>

          <Modal isOpen={isOpen} setIsOpen={setIsOpen} articleNum={articleNum}/>
        </S.MainContentBox>
      </S.MainLayout>
    </DefaultTemplate>
  );
};

export default Main;
