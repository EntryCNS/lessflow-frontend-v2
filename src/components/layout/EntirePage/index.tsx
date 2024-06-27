import Button from "@/components/common/Button";
import NewsBox from "@/components/common/NewsBox";
import DefaultTemplate from "@/components/common/Template/DefaultTemplate";
import React, { useEffect, useState } from "react";
import * as S from "./style";
import { getArticleList, getArticlePage } from "@/util/apis/EntireApis";
import NewsModal from "@/components/common/NewsModal";
import { StartScroll, StopScroll } from "@/util/scrollEvent";
import { IEntireValue } from "./type";

const EntirePage = () => {
  const [newsList, setNewsList] = useState<IEntireValue[]>([]);
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [modalId, setModalId] = useState<string>("");
  const [pageIndex, setPageIndex] = useState<number>(5);
  const [blockGetNews, setBlockGetNews] = useState<boolean>(false);

  const getListPage = async () => {
    const copyList: IEntireValue[] = [];
    new Array(pageIndex).fill(1).map((_, i) => {
      if (!blockGetNews) {
        getArticlePage(i + 1)
          .then((value) => {
            if (value.data.length === 0) {
              setBlockGetNews(true);
            }
            copyList[i] = { title: i + 1 + "", list: [...value.data] };
            setNewsList([...copyList]);
          })
          .catch((e) => console.log(e));
      }
    });
  };

  useEffect(() => {
    getListPage();
  }, [pageIndex]);

  useEffect(() => {
    StopScroll(modalActive);
    return () => {
      StartScroll(modalActive);
    };
  }, [modalActive]);

  return (
    <DefaultTemplate>
      <S.MainContainer>
        {modalActive && (
          <NewsModal id={modalId} onClick={() => setModalActive(false)} />
        )}
        <>
          {new Array(newsList.length).fill(0).map((_, idx1) => (
            <>
              {newsList[idx1] && newsList[idx1].list.length > 0 && (
                <S.NewsBoxWrap>
                  {new Array(newsList[idx1]?.list.length)
                    .fill(0)
                    .map((_, idx2) => (
                      <div key={idx2}>
                        <NewsBox
                          keyword={newsList[idx1].list[idx2].keyword}
                          thumbnail={newsList[idx1].list[idx2].thumbnail}
                          id={newsList[idx1].list[idx2].id}
                          createAt={newsList[idx1].list[idx2].createAt}
                          onClick={() => {
                            setModalId(newsList[idx1].list[idx2].id);
                            setModalActive(true);
                          }}
                        ></NewsBox>
                      </div>
                    ))}
                </S.NewsBoxWrap>
              )}
            </>
          ))}
        </>
        <S.GetNewsButton
          onClick={
            !blockGetNews
              ? () => setPageIndex((prev) => prev + 5)
              : () => {
                  alert("더 이상 뉴스가 없습니다!");
                  console.log(newsList);
                }
          }
        >
          뉴스 불러오기
        </S.GetNewsButton>
      </S.MainContainer>
    </DefaultTemplate>
  );
};

export default EntirePage;

//
/* {new Array(Math.ceil(newsList.length / 5)).fill(0).map((_, idx) => (
    <S.NewsContentsWrap>
      <Button disable={false} active onClick={() => {}}>
        {newsList[idx].title}
      </Button>
      <S.NewsBoxWrap></S.NewsBoxWrap>
    </S.NewsContentsWrap>
  ))} */
/* <button onClick={() => console.log(getToday())}>dfdf</button> */
/* {new Array(Math.ceil(newsList.length / 5)).fill(0).map((_, idx1) => (
  <S.NewsContentsWrap>
    <Button disable={false} active onClick={() => {}}>
      최신 뉴스
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
))} */
