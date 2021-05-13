import React from 'react';
import { Link } from 'react-router-dom';
import { BsPersonFill } from "react-icons/bs";
import * as S from './style'

function Intro() {
    return (
        <S.IntroContainer>
            <S.TitleContainer>
                <S.Title>
                    Who We are
                </S.Title>
                <S.Content>
                    안녕하세요!<br/>
                </S.Content>
                <S.Content>
                    <S.TempDiv>저희는 소비자들의 착한 소비를 돕는 &nbsp;</S.TempDiv>
                    <S.BoldContent>
                        우리 소비가 착해졌어요&nbsp;
                    </S.BoldContent>
                    <S.TempDiv>팀입니다.<br/></S.TempDiv>
                </S.Content>
                <S.Content>
                    착한 소비를 위해 착한업소, 착한가격에 대한 모든 것을 알려드립니다!<br/>
                </S.Content>
                <S.Content>
                    <S.BoldContent>
                    우리 동네 착한업소가 어디인지, 내가 지금 사는 물건이 착한가격인지, 저희 서비스에서 모두 확인해보세요!
                    </S.BoldContent>
                </S.Content>
            </S.TitleContainer>
            <S.TitleContainer>
                <S.Title>
                    Our Teams
                </S.Title>
                <S.TeamContent>
                    <BsPersonFill/>
                    &nbsp;고동현&nbsp;<a href="https://github.com/godonghyun">(@godonghyun)</a>
                </S.TeamContent>
                <S.TeamContent>
                    <BsPersonFill/>
                    &nbsp;김동현&nbsp;<a href="https://github.com/dooking">(@dooking)</a>
                </S.TeamContent>
                <S.TeamContent>
                    <BsPersonFill/>
                    &nbsp;김장영&nbsp;<a href="https://github.com/longshiine">(@longshiine)</a>
                </S.TeamContent>
                <S.TeamContent>
                    <BsPersonFill/>
                    &nbsp;성인규&nbsp;<a href="https://github.com/cakenbake">(@cakenbake)</a>
                </S.TeamContent>
                <S.TeamContent>
                    <BsPersonFill/>
                    &nbsp;이중훈&nbsp;<a href="https://github.com/DoubleHoon">(@DoubleHoon)</a>
                </S.TeamContent>
                <S.TeamContent>
                    <BsPersonFill/>
                    &nbsp;허승우&nbsp;<a href="https://github.com/1214sw">(@1214sw)</a>
                </S.TeamContent>


            </S.TitleContainer>
            <S.TitleContainer>
                <S.Repo>
                    Visit Our Repository
                </S.Repo>
                <S.RepoContent>
                    <a href="https://github.com/SWM-Hackathon/Reasonable_Consume">
                        - https://github.com/SWM-Hackathon/Reasonable_Consume
                    </a>
                </S.RepoContent>
            </S.TitleContainer>
        </S.IntroContainer>
    );
}

export default Intro;
