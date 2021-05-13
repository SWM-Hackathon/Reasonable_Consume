import React, { useEffect, useState } from 'react';
import { BiSearchAlt } from "react-icons/bi";
import axios from 'axios';
import * as S from './style'

const offset = {
    사과: 0, 배: -57, 무: -171, 배추: -114, 양파: -228, 상추: -285, 오이: -342, 애호박: -399, 쇠고기: -456, 돼지고기: -513, 닭고기: -570, 조기: -684, 명태: -741, 오징어: -798,
    고등어: -855, '달걀(10개)': -627, '달걀(30개)': -627, 동태: -1710, 카트: -1767
}

function Intro() {
    return (
        <S.PricePage>
            <S.Banner />
            <Price />
        </S.PricePage>
    );
}

function Price(props) {
    
    const [average, setAverage] = useState([]);
    const getAverage = async () => {
        const Data = await axios.get('/api/price/market/350000').then(response => response.data);
        setAverage(Data.items);
    }
    useEffect(() => {
        getAverage();
    }, []);

    return (
        <S.PriceContainer>
            <S.PriceQueryContainer>
                <S.Title>
                     공릉동 도깨비시장
                </S.Title>
            </S.PriceQueryContainer>
            <S.PriceListContainer>
            {
                average.length === 0 ? null : (average.map((item, i) => (
                    <FruitBox name={item.name} price={item.price} etc={item.etc} unit={item.unit} active='true' />
                )
                ))
            }
            </S.PriceListContainer>
        </S.PriceContainer>
    );
}

function FruitBox(props) {
    return (
        <S.FruitContainer active={ props.active }>
            <tr>
                <S.FruitInfoHolder rowSpan="3">
                    <S.FruitIcon style={{backgroundPositionY:offset[props.name]}}/>
                </S.FruitInfoHolder>
                <S.FruitName>{props.name}<S.FruitBar /></S.FruitName>
                <S.FruitPrice>가격:{props.price}</S.FruitPrice>
            </tr>
            <tr>
                <S.FruitUnit colSpan="2">단위:{props.unit}</S.FruitUnit>
            </tr>
            <tr>
                <S.FruitEtc colSpan="2">{props.etc}</S.FruitEtc>
            </tr>
        </S.FruitContainer>
    )
}

export default Intro;
