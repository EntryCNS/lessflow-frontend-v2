import NewsBox from "@/components/common/NewsBox";
import DefaultTemplate from "@/components/common/Template/DefaultTemplate";
import React, { useState } from "react";
import styled from "styled-components";

const ContentsWrap = styled.div`
  width: 70%;
  background-color: blue;
  display: flex;
  justify-content: space-between;
`;

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
  {
    title: "포항 축구2",
    image:
      "https://www.kyongbuk.co.kr/news/photo/202311/2146379_594092_5440.jpg",
  },
  {
    title: "홍준표3",
    image:
      "https://www.kyongbuk.co.kr/news/photo/202311/2146379_594092_5440.jpg",
  },
  {
    title: "포항 축구3",
    image:
      "https://www.kyongbuk.co.kr/news/photo/202311/2146379_594092_5440.jpg",
  },
  {
    title: "홍준표4",
    image:
      "https://www.kyongbuk.co.kr/news/photo/202311/2146379_594092_5440.jpg",
  },
  {
    title: "포항 축구5",
    image:
      "https://www.kyongbuk.co.kr/news/photo/202311/2146379_594092_5440.jpg",
  },
  {
    title: "홍준표5",
    image:
      "https://www.kyongbuk.co.kr/news/photo/202311/2146379_594092_5440.jpg",
  },
  {
    title: "포항 축구5",
    image:
      "https://www.kyongbuk.co.kr/news/photo/202311/2146379_594092_5440.jpg",
  },
  {
    title: "홍준표6",
    image:
      "https://www.kyongbuk.co.kr/news/photo/202311/2146379_594092_5440.jpg",
  },
  {
    title: "포항 축구6",
    image:
      "https://www.kyongbuk.co.kr/news/photo/202311/2146379_594092_5440.jpg",
  },
];

const EntirePage = () => {
  const [boxCount, setBoxCount] = useState<number>(4);
  return (
    <DefaultTemplate>
      <>
        {new Array(Math.ceil(testObj.length / boxCount))
          .fill(0)
          .map((_, idx1) => (
            <ContentsWrap key={idx1}>
              {new Array(4).fill(0).map((_, idx2) => {
                console.log(
                  idx1 * boxCount + idx2,
                  testObj[idx1 * boxCount + idx2]
                );
                return (
                  <div
                    key={idx2}
                    onClick={() =>
                      console.log(
                        testObj[idx1 * boxCount + idx2].title,
                        testObj[idx1 * boxCount + idx2].image
                      )
                    }
                  >
                    {testObj[idx1 * boxCount + idx2] && (
                      <NewsBox
                        title={testObj[idx1 * boxCount + idx2].title}
                        image={testObj[idx1 * boxCount + idx2].image}
                      />
                    )}
                  </div>
                );
              })}
            </ContentsWrap>
          ))}
      </>
    </DefaultTemplate>
  );
};

export default EntirePage;
