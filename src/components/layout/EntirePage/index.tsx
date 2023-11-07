import Button from "@/components/common/Button";
import NewsBox from "@/components/common/NewsBox";
import DefaultTemplate from "@/components/common/Template/DefaultTemplate";
import React, { useEffect, useState } from "react";
import * as S from "./style";
import { getArticleList } from "@/util/apis/EntireApis";
import { INewsBoxProps } from "@/components/common/NewsBox/type";
import NewsModal from "@/components/common/NewsModal";

const EntirePage = () => {
  const [newsList, setNewsList] = useState<INewsBoxProps[]>([]);
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [modalId, setModalId] = useState<string>("");

  const onclickHandler = () => {
    getArticleList()
      .then((value) => {
        console.log(value);
        setNewsList([...value.data]);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    onclickHandler();
  }, []);

  useEffect(() => {
    if (modalActive) {
      document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    }
    console.log(window.scrollY);

    return () => {
      if (modalActive) {
        const scrollY = document.body.style.top;
        document.body.style.cssText = "";
        window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
      }
    };
  }, [modalActive]);

  return (
    <DefaultTemplate>
      <>
        {modalActive && (
          <NewsModal id={modalId} onClick={() => setModalActive(false)} />
        )}
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
                        newsList[idx1 * 5 + idx2].thumbnail
                      )
                    }
                  >
                    {newsList[idx1 * 5 + idx2] && (
                      <NewsBox
                        keyword={newsList[idx1 * 5 + idx2].keyword}
                        thumbnail={newsList[idx1 * 5 + idx2].thumbnail}
                        onClick={() => {
                          setModalId(newsList[idx1 * 5 + idx2].id);
                          setModalActive(true);
                        }}
                        id={newsList[idx1 * 5 + idx2].id}
                      />
                    )}
                  </div>
                ))}
              </S.NewsBoxWrap>
            </S.NewsContentsWrap>
          ))}
        </S.MainContainer>
      </>
    </DefaultTemplate>
  );
};

export default EntirePage;

//
