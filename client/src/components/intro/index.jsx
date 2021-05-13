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
                    소비자가 소비를 할 때 개인의 사적인 이익만을 생각하지 않고, 자신의 소비가 이웃, 사회, 환경 등 더 넓
                    은 범위에 어떠한 영향을 미치는지 고려하여 의사결정을 내리는 것을 말합니다.
                </S.Content>
                <S.Content>
                    나아가 윤리적 소비는 구매의사 결정뿐만 아니라 궁극적으로 일상생활 전 과정에서 불필요한 소비를 줄이고 간소한 삶을 지향하며 절제하고 나
                    누는 삶을 실천함으로써 인간, 사회, 환경의 지속가능성을 구현하는 소비 실천행동을 의미합니다.
                </S.Content>
            </S.TitleContainer>
            <S.TitleContainer>
                <S.Title>
                    착한가격업소?
                </S.Title>
                <S.Content>
                    정부와 지방자치단체가 지정한 물가안정 모범업소
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
