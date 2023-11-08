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

  const getListPage = (pageIdx: number) => {
    if (!blockGetNews) {
      getArticlePage(pageIdx)
        .then((value) => {
          const copyList: IEntireValue[] = [];
          if (value.data.length === 0) {
            setBlockGetNews(true);
            return;
          }
          copyList.push({ title: pageIdx + "", list: [...value.data] });
          console.log(pageIdx, value.data, copyList);
          setNewsList([...newsList, ...copyList]);
        })
        .catch((e) => console.log(e));
    } else {
      return;
    }
  };

  useEffect(() => {
    new Array(pageIndex).fill(1).map((_, i) => getListPage(i + 1));
  }, [pageIndex]);

  useEffect(() => {
    StopScroll(modalActive);
    return () => {
      StartScroll(modalActive);
    };
  }, [modalActive]);

  return (
    <DefaultTemplate>
      <>
        {modalActive && (
          <NewsModal id={modalId} onClick={() => setModalActive(false)} />
        )}
        <S.MainContainer>
          <>
            {new Array(pageIndex).fill(0).map((_, idx1) => (
              <div>
                <Button disable={false} active onClick={() => {}}>
                  {"오늘의 뉴스><"}
                </Button>
                <S.NewsBoxWrap>
                  {new Array(5).fill(0).map((_, idx2) => (
                    <div>
                      <NewsBox
                        keyword=""
                        thumbnail=""
                        id=""
                        onClick={() => {
                          // setModalId(newsList[idx1]);
                          setModalActive(true);
                        }}
                      ></NewsBox>
                      {/* {newsList[idx1 * 5 + idx2] && (
                        <NewsBox
                          keyword={newsList[idx1 * 5 + idx2].keyword}
                          thumbnail={newsList[idx1 * 5 + idx2].thumbnail}
                          onClick={() => {
                            setModalId(newsList[idx1 * 5 + idx2].id);
                            setModalActive(true);
                          }}
                          id={newsList[idx1 * 5 + idx2].id}
                        />
                      )} */}
                    </div>
                  ))}
                </S.NewsBoxWrap>
              </div>
            ))}
          </>
          <button
            onClick={
              !blockGetNews
                ? () => setPageIndex((prev) => prev + 5)
                : () => {
                    alert("더 이상 뉴스가 없습니다!");
                    console.log(newsList);
                  }
            }
          >
            dd
          </button>
        </S.MainContainer>
      </>
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
