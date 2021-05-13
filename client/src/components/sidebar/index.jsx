import React from 'react';
import { AiTwotoneHome } from "react-icons/ai";
import { BsBucket, BsBarChart, BsPersonFill, BsPeopleFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import * as S from './style'

function Sidebar(props) {
    const { toggle, toggleHandler } = props
    return (
        <S.Container>
            <S.OutSide onClick={toggleHandler} />
            <S.SidebarContainer>
                <S.Title>
                    착한 소비
                </S.Title>
                <Link to="/">
                    <S.ItemBox onClick={toggleHandler}>
                        <AiTwotoneHome />
                        <S.ItemMenu>홈</S.ItemMenu>
                    </S.ItemBox>
                </Link>

                <S.Divider />

                <Link to="/intro">
                    <S.ItemBox onClick={toggleHandler}>
                        <BsBucket />
                        <S.ItemMenu>착한 소비란?</S.ItemMenu>
                    </S.ItemBox>
                </Link>

                <S.Divider />

                <Link to="/shop">
                    <S.ItemBox onClick={toggleHandler}>
                        <BsBucket />
                        <S.ItemMenu>착한 업소</S.ItemMenu>
                    </S.ItemBox>
                </Link>


                <Link to="/price">
                    <S.ItemBox onClick={toggleHandler}>
                        <BsBarChart />
                        <S.ItemMenu>착한 물가</S.ItemMenu>
                    </S.ItemBox>
                </Link>

                <S.Divider />
                <S.ItemBox>
                    <BsPeopleFill />
                    <S.ItemMenu>About Us</S.ItemMenu>
                </S.ItemBox>
            </S.SidebarContainer>
        </S.Container >

    );
}

export default Sidebar;
