import React, { useLayoutEffect, useState } from "react";
import * as S from "./style";
import { getArtileInformation, getArtileVideo } from "@/util/apis/EntireApis";

interface IModalProps {
  id: string;
  onClick: () => void;
}

const NewsModal = ({ id, onClick }: IModalProps) => {
  const [isVideo, setIsVideo] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [context, setContext] = useState<string>("");
  const [video, setVideo] = useState<string>("");

  const GetArticleInfo = async () => {
    await getArtileInformation(id)
      .then((e) => {
        setTitle(e.data.article.title);
        setImageUrl(e.data.article.thumbnail);
        const split: string[] = e.data.article.content.split("/n");
        setContext(() => {
          let a: string = "";
          for (let i = 0; i < split.length; i++) a += split[i];
          return a;
        });
      })
      .catch((e) => console.log(e));
  };

  const GetArticleVideo = async () => {
    getArtileVideo(id)
      .then((e) => setVideo(e.data.video))
      .catch((e) => console.log(e));
  };

  useLayoutEffect(() => {
    GetArticleInfo();
    GetArticleVideo();
  }, []);

  return (
    <S.MainModalContainer top={window.scrollY}>
      <S.ModalContainer>
        <S.ModalContents>
          <S.ExitButton onClick={onClick}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20.4447" cy="16" r="13.3333" fill="#404446" />
              <path
                d="M20 0C8.98 0 0 8.98 0 20C0 31.02 8.98 40 20 40C31.02 40 40 31.02 40 20C40 8.98 31.02 0 20 0ZM26.72 24.6C27.3 25.18 27.3 26.14 26.72 26.72C26.42 27.02 26.04 27.16 25.66 27.16C25.28 27.16 24.9 27.02 24.6 26.72L20 22.12L15.4 26.72C15.1 27.02 14.72 27.16 14.34 27.16C13.96 27.16 13.58 27.02 13.28 26.72C12.7 26.14 12.7 25.18 13.28 24.6L17.88 20L13.28 15.4C12.7 14.82 12.7 13.86 13.28 13.28C13.86 12.7 14.82 12.7 15.4 13.28L20 17.88L24.6 13.28C25.18 12.7 26.14 12.7 26.72 13.28C27.3 13.86 27.3 14.82 26.72 15.4L22.12 20L26.72 24.6Z"
                fill="#EDF0FE"
              />
            </svg>
          </S.ExitButton>
          <S.Title>{title}</S.Title>
          <S.ContentsHeader>
            <S.ContentsHeaderContext
              isVideo={!isVideo}
              onClick={() => setIsVideo(false)}
            >
              📰 단일 뉴스 기사
            </S.ContentsHeaderContext>
            <S.ContextLine />
            <S.ContentsHeaderContext
              isVideo={isVideo}
              onClick={() => setIsVideo(true)}
            >
              🎥 단일 뉴스 동영상
            </S.ContentsHeaderContext>
          </S.ContentsHeader>
          {isVideo ? (
            <S.VideoWrap>
              <S.Video controls src={video}></S.Video>
            </S.VideoWrap>
          ) : (
            <S.ContextWrap>
              <S.Image src={imageUrl} />
              <S.Context>{context}</S.Context>
            </S.ContextWrap>
          )}
        </S.ModalContents>
      </S.ModalContainer>
      <S.MainModalContainer onClick={onClick}></S.MainModalContainer>
    </S.MainModalContainer>
  );
};

export default NewsModal;
