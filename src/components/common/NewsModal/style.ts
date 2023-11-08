import styled, { css } from "styled-components";
import Exit from "@/../public/asset/exit.svg";

interface IModalStyle {
  top?: number;
  isVideo?: boolean;
}

const ModalHeaderContextColor = {
  active: css`
    color: ${({ theme }) => theme.Normal};
  `,
  none: css`
    color: ${({ theme }) => theme.Gray100};
  `,
};

export const MainModalContainer = styled.div<IModalStyle>`
  top: -${({ top }) => top}px;
  position: fixed;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const ModalContents = styled.div`
  width: 100%;
  height: 90%;
  overflow: auto;
`;

export const ModalContainer = styled.div`
  width: 30rem;
  padding: 3rem;
  z-index: 2;
  height: 75%;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.backgroundColor100};
  position: relative;
`;

export const ExitButton = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.backgroundColor300};
  background-image: url(${Exit});
  position: absolute;
  right: 0;
  top: 0;
  margin: 1rem;
`;

export const Title = styled.p`
  width: 300px;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 1.5rem auto 3rem auto;
  word-break: keep-all;
`;

export const Context = styled.p`
  line-height: 30px;
  letter-spacing: 0.075rem;
`;

export const ContentsHeader = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

export const ContextLine = styled.div`
  width: 1px;
  height: 1.25rem;
  margin: 0px 8px;
  background-color: ${({ theme }) => theme.Gray100};
`;

export const ContentsHeaderContext = styled.p<IModalStyle>`
  font-size: 1rem;
  font-weight: 600;
  ${({ isVideo }) =>
    isVideo ? ModalHeaderContextColor.active : ModalHeaderContextColor.none}};
`;

export const Image = styled.img`
  width: 100%;
  margin-bottom: 1rem;
`;

export const ContextWrap = styled.div`
  display: inline-block;
  padding: 1rem 0rem;
`;

export const VideoWrap = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Video = styled.video`
  max-height: 100%;
`;
