import Image from "next/image";
import styled from "styled-components";
import { theme } from "@/styles/theme";

export const ModalLayout = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(3, 2, 2, 0.50);

    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
`

export const ModalBox = styled.div`
    padding: 1.5vw 2vw 1.5vw 3.5vw ;

    width: 35vw;
    height: 50vw;
    // height: 67vw;
    background-color: #ffffff;
`

export const CancelBtnWrapper = styled.div`
    width: calc(100% + 3%);

    display: flex;
    justify-content: end;
    align-items: center;    
`

export const CancelBtnSvg = styled.svg`
    
`

export const Title = styled.div`
    margin-top: 1.5vw;
    margin-bottom: 3.4vw;

    font-family: Inter;
    text-align: center;
    font-size: 1.5vw;
    font-weight: 600;
`

export const MidTitleWrapper = styled.div`
    margin-bottom: 0.6vw;
    
    display: flex;
    align-items: center;
`

export const MidDevideLine = styled.div`
    margin: 0 1vw;

    width: 0.1vw;
    height: 1.5vw;

    background-color: ${theme.Gray100};
`

export const MidTitle = styled.div<{isText:boolean}>`

    color: ${(props)=>props.isText ? "#000": theme.Gray100 };
    font-family: Pretendard;
    font-size: 1.2vw;
    font-weight: 700;
`

export const MainContent = styled.div`
    padding-right: 2vw;

    width: 100%;
    height: 60%;
    
    overflow-y: scroll;

    &::-webkit-scrollbar{
        width: 10px;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #7E82A6;
        border-radius: 100px;
    }

`

export const MainPic = styled.img`
    width: 100%;
    object-fit:cover
`

export const MainText = styled.div`
    margin-top: 1.5vw;

    width: 100%;

    font-family: Inter;
    font-size: 0.8vw;
    font-weight: 500;
    line-height: 166.667%;
`

export const InfoBoxWrapper = styled.div`
    margin-top: 7%;
    padding-right: 55%;

    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

`

export const InfoBox = styled.div`
    padding: 0.7vw;
    width: 5.6vw;
    height: 1.9vw;
    background-color: ${theme.backgroundColor300};
    border-radius: 5px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    color: Normal;
    font-family: Inter;
    font-size: 0.7vw;
    font-weight: 500;
`

export const InfoSvg = styled.svg`

`

export const MainVideo = styled.iframe`

`
