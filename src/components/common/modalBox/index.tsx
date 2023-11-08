import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";
import DummyImg1 from "../../../../../public/asset/dummy/dummy1.svg";
import axios from "axios";
import { articleType } from "../../layout/main/type";
import NewsBox from "@/components/common/NewsBox";
import { getArtileInformation, getArtileVideo } from "@/util/apis/EntireApis";

const Modal = ({ isOpen, setIsOpen, articleNum }: any) => {
  const [videoUrl, setVideoUrl] = useState<string>();
  const [writingPainting, setWritingPainting] = useState<articleType>();
  const [isText, setIsText] = useState<boolean>(true);
  const modalOutsideRef = useRef(null);

  useEffect(() => {
    getArtileVideo(articleNum)
      .then((res) => {
        setVideoUrl(res.data.video);
      })
      .catch(() => {});

    getArtileInformation(articleNum)
      .then((res) => {
        setWritingPainting(res.data);
      })
      .catch(() => {});
  }, [articleNum]);

  return (
    <>
      {isOpen && (
        <S.ModalLayout
          ref={modalOutsideRef}
          onClick={(e) => {
            if (modalOutsideRef.current === e.target) {
              setIsOpen(false);
            }
          }}
        >
          <S.ModalBox>
            <S.CancelBtnWrapper>
              <S.CancelBtnSvg
                xmlns="http://www.w3.org/2000/svg"
                width="2vw"
                height="2vw"
                viewBox="0 0 40 40"
                fill="none"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <circle cx="20.4447" cy="16" r="13.3333" fill="#404446" />
                <path
                  d="M20 0C8.98 0 0 8.98 0 20C0 31.02 8.98 40 20 40C31.02 40 40 31.02 40 20C40 8.98 31.02 0 20 0ZM26.72 24.6C27.3 25.18 27.3 26.14 26.72 26.72C26.42 27.02 26.04 27.16 25.66 27.16C25.28 27.16 24.9 27.02 24.6 26.72L20 22.12L15.4 26.72C15.1 27.02 14.72 27.16 14.34 27.16C13.96 27.16 13.58 27.02 13.28 26.72C12.7 26.14 12.7 25.18 13.28 24.6L17.88 20L13.28 15.4C12.7 14.82 12.7 13.86 13.28 13.28C13.86 12.7 14.82 12.7 15.4 13.28L20 17.88L24.6 13.28C25.18 12.7 26.14 12.7 26.72 13.28C27.3 13.86 27.3 14.82 26.72 15.4L22.12 20L26.72 24.6Z"
                  fill="#EDF0FE"
                />
              </S.CancelBtnSvg>
            </S.CancelBtnWrapper>

            <S.Title>{writingPainting?.article.title}</S.Title>

            <S.MidTitleWrapper>
              <S.MidTitle
                isText={isText}
                onClick={() => {
                  setIsText(true);
                }}
              >
                📰 단일 뉴스 기사{" "}
              </S.MidTitle>
              <S.MidDevideLine />
              <S.MidTitle
                isText={!isText}
                onClick={() => {
                  setIsText(false);
                }}
              >
                🎥 단일 뉴스 동영상
              </S.MidTitle>
            </S.MidTitleWrapper>

            <S.MainContent>
              {isText && (
                <>
                  <S.MainPic src={writingPainting?.article.thumbnail} />

                  <S.MainText>{writingPainting?.article.content}</S.MainText>
                </>
              )}

              {!isText && (
                <S.MainVideo
                  width="100%"
                  height="99%"
                  src={videoUrl}
                  title="news video"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                />
              )}
            </S.MainContent>
            <S.InfoBoxWrapper></S.InfoBoxWrapper>
          </S.ModalBox>
        </S.ModalLayout>
      )}
    </>
  );
};

export default Modal;
