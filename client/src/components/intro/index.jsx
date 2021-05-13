import React from 'react';
import { GrMoney } from "react-icons/gr";
import { BsBucket, BsPlus } from "react-icons/bs";
import { IoShirtOutline, IoSunnyOutline } from "react-icons/io5";
import * as S from './style'

function Intro() {
    return (
        <S.IntroContainer>
            <S.TitleContainer>
                <S.Title>
                    착한 소비(Ethical Consumption) 란?
                </S.Title>
                <S.Content>
                    소비자가 개별적, 도덕적 신념을 가지고 인간, 사회, 환경에 대한 사회적 책임을 실천하는 소비행동
                    입니다.
                </S.Content>
                <S.Content>
                    저희 서비스를 통해 우리 모두 착한 소비를 꼭 실천해보도록 해요!
                </S.Content>
            </S.TitleContainer>
            <S.TitleContainer>
                <S.Title>
                    착한가격업소?
                </S.Title>
                <S.Content>
                    착한 가격, 청결한 가게운영, 기분좋은 서비스 제공으로 소비자에게 만족을 드리기 위해 정부와 지방자치단체가 선정한 우수업소가 바로 ‘착한가격업소’ 입니다.
                </S.Content>
                <S.Content>
                    우리 동네에 있는 착한가격업소를 찾아보시고 안심하고 즐겁게 이용해 주세요.
                </S.Content>
                <S.IconBox>
                    <S.IconItem>
                        <GrMoney />
                        저렴한 가격
                    </S.IconItem>
                    <BsPlus />
                    <S.IconItem>
                        <BsBucket />
                        안전한 재료
                    </S.IconItem>
                    <BsPlus />
                    <S.IconItem>
                        <IoShirtOutline />
                        친절한 서비스
                    </S.IconItem>
                    <BsPlus />
                    <S.IconItem>
                        <IoSunnyOutline />
                        청결한 가게
                    </S.IconItem>
                </S.IconBox>
            </S.TitleContainer>
        </S.IntroContainer>
    );
}

export default Intro;
