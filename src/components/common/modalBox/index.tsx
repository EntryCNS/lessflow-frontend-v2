import React, { useEffect, useRef, useState } from 'react';
import * as S from "./style"
import DummyImg1 from "../../../../../public/asset/dummy/dummy1.svg"
import axios from 'axios';
import { articleType } from '../../layout/main/type';
import NewsBox from '@/components/common/NewsBox';

const Modal = ( {
    isOpen,
    setIsOpen,
    articleNum
} :any ) => {

    const [videoUrl,setVideoUrl] = useState<string>()
    const [writingPainting, setWritingPainting] = useState<articleType>()
    const [isText,setIsText] = useState<boolean>(true)
    const modalOutsideRef = useRef(null)

    useEffect(()=>{
        axios.get(`http://43.202.215.8:8080/article/video/${articleNum}`)
        .then((res)=>{
            setVideoUrl(res.data.video)
        })
        .catch(()=>{
    
        })

        axios.get(`http://43.202.215.8:8080/article/${articleNum}`)
        .then((res)=>{
            setWritingPainting(res.data)
        })
        .catch(()=>{
    
        })
    },[articleNum])

    return (
        <>
            {
                isOpen &&
                    <S.ModalLayout ref={modalOutsideRef} onClick={(e)=>{
                        if(modalOutsideRef.current === e.target){
                            setIsOpen(false)
                        }
                    }}>
                        <S.ModalBox>
                            <S.CancelBtnWrapper>
                                <S.CancelBtnSvg xmlns="http://www.w3.org/2000/svg" width="2vw" height="2vw" viewBox="0 0 40 40" fill="none"
                                    onClick={()=>{
                                        setIsOpen(false)
                                    }}
                                >
                                    <circle cx="20.4447" cy="16" r="13.3333" fill="#404446"/>
                                    <path d="M20 0C8.98 0 0 8.98 0 20C0 31.02 8.98 40 20 40C31.02 40 40 31.02 40 20C40 8.98 31.02 0 20 0ZM26.72 24.6C27.3 25.18 27.3 26.14 26.72 26.72C26.42 27.02 26.04 27.16 25.66 27.16C25.28 27.16 24.9 27.02 24.6 26.72L20 22.12L15.4 26.72C15.1 27.02 14.72 27.16 14.34 27.16C13.96 27.16 13.58 27.02 13.28 26.72C12.7 26.14 12.7 25.18 13.28 24.6L17.88 20L13.28 15.4C12.7 14.82 12.7 13.86 13.28 13.28C13.86 12.7 14.82 12.7 15.4 13.28L20 17.88L24.6 13.28C25.18 12.7 26.14 12.7 26.72 13.28C27.3 13.86 27.3 14.82 26.72 15.4L22.12 20L26.72 24.6Z" fill="#EDF0FE"/>
                                </S.CancelBtnSvg>
                            </S.CancelBtnWrapper>

                            <S.Title>
                                {writingPainting?.article.title}
                            </S.Title>

                            <S.MidTitleWrapper>
                                <S.MidTitle isText={isText}
                                    onClick={()=>{setIsText(true)}}
                                >📰 단일 뉴스 기사 </S.MidTitle>
                                <S.MidDevideLine/>
                                <S.MidTitle isText={!isText}
                                    onClick={()=>{setIsText(false)}}
                                >🎥  단일 뉴스  동영상</S.MidTitle>
                            </S.MidTitleWrapper>

                            <S.MainContent>
                                {
                                    isText &&
                                <>
                                        <S.MainPic src={writingPainting?.article.thumbnail}/>
                                    
                                        <S.MainText>{writingPainting?.article.content}</S.MainText>

                                </>    
                                }

                                {
                                    !isText &&
                                    <S.MainVideo width="100%" height="99%" src={videoUrl} title="news video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen/>
                                }
                            </S.MainContent>
                            <S.InfoBoxWrapper>
                                <S.InfoBox>
                                    <S.InfoSvg xmlns="http://www.w3.org/2000/svg" width="1vw" height="0.75vw" viewBox="0 0 20 15" fill="none">
                                        <path d="M10.0006 10.5C11.4734 10.5 12.6673 9.15685 12.6673 7.5C12.6673 5.84315 11.4734 4.5 10.0006 4.5C8.52788 4.5 7.33398 5.84315 7.33398 7.5C7.33398 9.15685 8.52788 10.5 10.0006 10.5Z" fill="#394050"/>
                                        <path d="M19.7857 6.68438C18.6832 4.76625 17.2528 3.13688 15.6495 1.97203C13.8757 0.682032 11.9174 0 9.98659 0C8.21494 0 6.47287 0.569531 4.80871 1.69266C3.11164 2.83781 1.57415 4.51078 0.238746 6.66469C0.0879907 6.90811 0.00496385 7.19646 0.000215679 7.49309C-0.0045325 7.78973 0.0692124 8.08125 0.21208 8.33063C1.31249 10.268 2.72873 11.8997 4.30705 13.0486C6.08412 14.3438 7.99661 15 9.98659 15C11.9328 15 13.8953 14.3236 15.6616 13.0444C17.264 11.8833 18.6915 10.2478 19.7899 8.31375C19.9278 8.07017 20.0007 7.78719 20 7.49838C19.9993 7.20956 19.9249 6.92705 19.7857 6.68438ZM10.0008 12C9.20964 12 8.43629 11.7361 7.7785 11.2416C7.1207 10.7471 6.60802 10.0443 6.30527 9.22208C6.00252 8.39981 5.92331 7.49501 6.07765 6.62209C6.23199 5.74918 6.61295 4.94736 7.17235 4.31802C7.73176 3.68868 8.44449 3.2601 9.2204 3.08647C9.99632 2.91283 10.8006 3.00195 11.5315 3.34254C12.2624 3.68314 12.8871 4.25991 13.3266 4.99993C13.7661 5.73995 14.0007 6.60998 14.0007 7.5C13.9995 8.69306 13.5777 9.83685 12.8278 10.6805C12.078 11.5241 11.0612 11.9986 10.0008 12Z" fill="#394050"/>
                                    </S.InfoSvg>
                                    {}회
                                </S.InfoBox>
                            </S.InfoBoxWrapper>
                        </S.ModalBox>
                    </S.ModalLayout>
            }
        </>
    );
};

export default Modal;