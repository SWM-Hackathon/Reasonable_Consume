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
                    소비자가 개별적, 도덕적 신념을 가지고 인간, 사회, 환경에 대한 사회적 책임을 실천하는 소비행동
                    입니다.
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
