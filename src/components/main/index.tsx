import React, { useState } from 'react';
import * as S from "./style"
import MainTxtImg from "../../../public/asset/mainTxt.svg"
import CharacterImg from "../../../public/asset/character.svg"
import Button from '../common/Button';
import Modal from './modal';

const Main = () => {
    const NEWSTITLELIST = ['이선균 논란','홍준표 논란','이재명 논란','윤석열 논란','승리 논란']
    
    const [isOpen,setIsOpen] = useState<boolean>(false)

    return (
        <S.MainLayout>
            <S.HeaderPlace/>

            <S.MainBannerBox>
                <S.MainTxtImg src={MainTxtImg}/>

                <S.MainCharacterImg src={CharacterImg}/>
            </S.MainBannerBox>

            <S.MainContentBox>
                <Button
                    onClickHandler={()=>{}}
                    disable={false}
                    active={true}
                    children={'인기 뉴스'}
                ></Button>

                <S.NewsWrapper>
                    {
                        NEWSTITLELIST.map((title,idx)=>(
                            <S.NewsBox key={idx}
                                onClick={()=>{setIsOpen(true)}}
                            >
                                {/*<S.NewsBoxImg />*/}

                                <S.NewsText>{title}</S.NewsText>
                            </S.NewsBox>
                        ))
                    }
                </S.NewsWrapper>

                <Modal 
                    isOpen={isOpen} 
                    setIsOpen={setIsOpen}
                />

            </S.MainContentBox>
        </S.MainLayout>
    );
};

export default Main;