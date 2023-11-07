import Button from "@/components/common/Button";
import NewsBox from "@/components/common/NewsBox";
import DefaultTemplate from "@/components/common/Template/DefaultTemplate";
import React, { useEffect, useState } from "react";
import * as S from "./style";
import { getArticleList } from "@/util/apis/EntireApis";
import { INewsBoxProps } from "@/components/common/NewsBox/type";

const EntirePage = () => {
  const [newsList, setNewsList] = useState<INewsBoxProps[]>([]);

  const onclickHandler = () => {
    getArticleList()
      .then((value) => setNewsList([...value.data]))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    onclickHandler();
  }, []);

  return (
    <DefaultTemplate>
      <S.MainContainer>
        {new Array(Math.ceil(newsList.length / 5)).fill(0).map((_, idx1) => (
          <S.NewsContentsWrap>
            <Button disable={false} active onClick={() => {}}>
              안녕하세요
            </Button>
            <S.NewsBoxWrap>
              {new Array(5).fill(0).map((_, idx2) => (
                <div
                  key={idx2}
                  onClick={() =>
                    console.log(
                      newsList[idx1 * 5 + idx2].keyword,
                      newsList[idx1 * 5 + idx2].thumbnail,
                      newsList[idx1 * 5 + idx2].id
                    )
                  }
                >
                  {newsList[idx1 * 5 + idx2] && (
                    <NewsBox
                      keyword={newsList[idx1 * 5 + idx2].keyword}
                      id={newsList[idx1 * 5 + idx2].id}
                    />
                  )}
                </div>
              ))}
            </S.NewsBoxWrap>
          </S.NewsContentsWrap>
        ))}
      </S.MainContainer>
    </DefaultTemplate>
  );
};

export default EntirePage;

//thumbnail={newsList[idx1 * 5 + idx2].thumbnail}
