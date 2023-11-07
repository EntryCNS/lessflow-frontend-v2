import Image from "next/image";
import styled from "styled-components";
import { theme } from "@/styles/theme";

export const MainLayout = styled.div`
  height: 100%;
  min-height: calc(100vh - 73px);

  background-color: ${theme.backgroundColor100};
`;

export const HeaderPlace = styled.div`
  // width: 100vw;
  height: 73px;
`;

export const MainBannerBox = styled.div`
  padding: 0 12.8vw;

  width: 100%;
  height: 25.6vw;
  background-color: #ffffff;

  display: flex;
  justify-content: space-between;
  align-items: end;
`;

/* export const MainBannerSmallText = styled.div`
    font-family: 'NanumSquareRound';
    font-size: 2.2vw;
    font-weight: 800;
` */

export const MainTxtImg = styled(Image)`
  margin-bottom: 5vw;

  width: 34vw;
  overflow-y: visible;
  object-fit: cover;
`;

export const MainCharacterImg = styled(Image)`
  width: 26.4vw;
  height: 23.2vw;
  object-fit: cover;
`;

export const MainContentBox = styled.div`
  padding: 3vw 3vw 0 3vw;
  width: 100%;
`;

export const NewsWrapper = styled.div`
    width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const NewsBox = styled.div`
    margin: 1.9vw 0;

  width: 16.3vw;
  height: 23.2vw;

  position: relative;
`;

export const NewsBoxImg = styled.img`
    width: inherit;
    height: inherit;
    border-radius: 15px;

    object-fit: cover;

    position: absolute;
`

export const NewsText = styled.div`
  width: 100%;
  height: 4.3vw;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #394050;
  border-radius: 0 0 15px 15px;

  font-size: 1.2vw;
  color: #fff;
  font-family: Pretendard;
  font-weight: 700;
  letter-spacing: -0.025rem;

  position: absolute;
  bottom: 0;
  z-index: 1;
`;
