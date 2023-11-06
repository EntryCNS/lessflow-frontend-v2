import Button from "@/components/common/Button";
import NewsBox from "@/components/common/NewsBox";
import DefaultTemplate from "@/components/common/Template/DefaultTemplate";
import React, { useEffect } from "react";
import * as S from "./style";
import { getArticleList } from "@/util/apis/EntireApis";

const testObj = [
  {
    title: "홍준표",
    image:
      "https://www.kyongbuk.co.kr/news/photo/202311/2146379_594092_5440.jpg",
  },
  {
    title: "포항 축구",
    image:
      "https://www.kyongbuk.co.kr/news/photo/202311/2146379_594092_5440.jpg",
  },
  {
    title: "홍준표1",
    image:
      "https://www.kyongbuk.co.kr/news/photo/202311/2146379_594092_5440.jpg",
  },
  {
    title: "포항 축구1",
    image:
      "https://www.kyongbuk.co.kr/news/photo/202311/2146379_594092_5440.jpg",
  },
  {
    title: "홍준표2",
    image:
      "https://www.kyongbuk.co.kr/news/photo/202311/2146379_594092_5440.jpg",
  },
];

const EntirePage = () => {
  const onclickHandler = () => {
    getArticleList()
      .then((e) => console.log(e))
      .catch((e) => console.log(e));
  };

  return (
    <DefaultTemplate>
      <S.MainContainer>
        {new Array(Math.ceil(testObj.length / 5)).fill(0).map((_, idx1) => (
          <S.NewsContentsWrap>
            <Button disable={false} active onClick={onclickHandler}>
              안녕하세요
            </Button>
            <S.NewsBoxWrap>
              {new Array(5).fill(0).map((_, idx2) => {
                console.log(idx1 * 5 + idx2, testObj[idx1 * 5 + idx2]);
                return (
                  <div
                    key={idx2}
                    onClick={() =>
                      console.log(
                        testObj[idx1 * 5 + idx2].title,
                        testObj[idx1 * 5 + idx2].image
                      )
                    }
                  >
                    {testObj[idx1 * 5 + idx2] && (
                      <NewsBox
                        title={testObj[idx1 * 5 + idx2].title}
                        image={testObj[idx1 * 5 + idx2].image}
                      />
                    )}
                  </div>
                );
              })}
            </S.NewsBoxWrap>
          </S.NewsContentsWrap>
        ))}
      </S.MainContainer>
    </DefaultTemplate>
  );
};

export default EntirePage;
