import React, { useEffect, useState } from 'react';
import { BiSearchAlt } from "react-icons/bi";
import axios from 'axios';
import * as S from './style'

const offset = {
    사과: 0, 배: -57, 무: -171, 배추: -114, 양파: -228, 상추: -285, 오이: -342, 애호박: -399, 쇠고기: -456, 돼지고기: -513, 닭고기: -570, 조기: -684, 명태: -741, 오징어: -798,
    고등어: -855, '달걀(10개)': -627, '달걀(30개)': -627, 동태: -1710, 카트: -1767, '호박': -912
}

const guName = [
    {
      "gu": "노원", 
      "gu_code": 350000
    },
    {
      "gu": "도봉", 
      "gu_code": 320000
    },
    {
      "gu": "강북", 
      "gu_code": 305000
    },
    {
      "gu": "성북", 
      "gu_code": 290000
    },
    {
      "gu": "중랑", 
      "gu_code": 260000
    },
    {
      "gu": "동대문", 
      "gu_code": 230000
    },
    {
      "gu": "종로", 
      "gu_code": 110000
    },
    {
      "gu": "은평", 
      "gu_code": 380000
    },
    {
      "gu": "서대문", 
      "gu_code": 410000
    },
    {
      "gu": "중구", 
      "gu_code": 140000
    },
    {
      "gu": "성동", 
      "gu_code": 200000
    },
    {
      "gu": "광진", 
      "gu_code": 215000
    },
    {
      "gu": "강동", 
      "gu_code": 740000
    },
    {
      "gu": "마포", 
      "gu_code": 440000
    },
    {
      "gu": "용산", 
      "gu_code": 170000
    },
    {
      "gu": "강서", 
      "gu_code": 500000
    },
    {
      "gu": "양천", 
      "gu_code": 470000
    },
    {
      "gu": "영등포", 
      "gu_code": 560000
    },
    {
      "gu": "구로", 
      "gu_code": 530000
    },
    {
      "gu": "동작", 
      "gu_code": 590000
    },
    {
      "gu": "금천", 
      "gu_code": 545000
    },
    {
      "gu": "관악", 
      "gu_code": 620000
    },
    {
      "gu": "서초", 
      "gu_code": 650000
    },
    {
      "gu": "강남", 
      "gu_code": 680000
    },
    {
      "gu": "송파", 
      "gu_code": 710000
    }
]

function Intro() {
    const [activeTab, setActiveTab] = useState(0);

    const hanldleClick = e => {
        setActiveTab(e.target.value);
    }

    return (
        <S.PricePage>
            <S.Banner />
            <S.MainContainer>
                <S.TabContainer>
                    <S.Tab active={activeTab === 0} value={0} onClick={hanldleClick}>착한 물가</S.Tab>
                    <S.Tab active={activeTab === 1} value={1} onClick={hanldleClick}>구별 물가</S.Tab>
                </S.TabContainer>
                {
                    activeTab===0?<Price />:<GuPrice/>
                }
            </S.MainContainer>
        </S.PricePage>
    );
}

function Price(props) {
    const [query, setQuery] = useState("");
    const [average, setAverage] = useState([]);
    const handleQuery = e => {
        setQuery(e.target.value);
    }
    
    const getAverage = async () => {
        const Data = await axios.get('/api/price/average').then(response => response.data);
        setAverage(Data);
    }

    useEffect(() => {
        if (average.length === 0) {
            getAverage();
        }
    }, []);
    
    let [queryResult,] = average;
    const getAble = (text) => {
        const filteredAverage = average.filter((item) => (
            item.name.indexOf(text) !== -1
        ));

        if (filteredAverage.length === 0) {
            queryResult = {
                name: '카트',
                etc: '검색 결과가 없습니다'
            };
        } else {
            [queryResult,] = filteredAverage;
        }

        return filteredAverage;
    }

    return (
        <S.PriceContainer>
            <S.PriceQueryContainer active={query !== ''}>
                <S.Title>
                    착한 물가 정보
                    </S.Title>
                <S.SearchContainer>
                    <S.SearchBar>
                        <BiSearchAlt style={{ position: 'absolute', margin: '17px 0px 0px 17px', color: '#4f5b66' }} />
                        <S.SearchField type="text" name="search" value={query} onChange={handleQuery} />
                        <S.SearchUl>
                            {
                                query === '' || getAble(query).length === 0 ? null
                                    : getAble(query).map((item, i) => (
                                        <S.SearchLi> {item.name} </S.SearchLi>
                                    ))
                            }
                        </S.SearchUl>
                    </S.SearchBar>
                    {
                        average.length === 0 ? null : <FruitBox name={queryResult.name} price={queryResult.price} etc={queryResult.etc} unit={queryResult.unit} active={query !== ''} />
                    }
                </S.SearchContainer>
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

function GuPrice(props) {
    const [selectedGu, setSelectedGu] = useState("");
    const [selectedData, setSelectedData] = useState([]);
    const [data, setData] = useState([]);
    
    const getData = async () => {
        const result = await axios.get('/api/price/all').then(response => response.data);
        setData(result);
    }
    function getGu(guCode) {
        let result = ""
        for (let i = 0; i < guName.length; i += 1) {
            if (guName[i].gu_code === guCode) {
                result = guName[i].gu
            }
        }
        return result
    }
    function selectGu(guCode) {
        function isInGu(item) {
            if (String(item.gu_code) === guCode)
                return true
            return false
        }
        const filteredData = data.filter(isInGu);
        setSelectedData(filteredData[0].items)
        setSelectedGu(getGu(filteredData[0].gu_code))
    }

    useEffect(() => {
        if (data.length === 0) {
            getData();
        }
    }, []);
    return (
        <S.PriceContainer>
            <S.PriceMapContainer>
                <S.Title>
                    {selectedGu}구 착한 물가 정보
                    </S.Title>
                <S.SearchContainer>
                    <S.Img />
                    <map name="Map">
                        <area shape="poly" coords="276,30,284,29,287,22,297,33,307,32,300,41,307,53,304,68,306,84,315,88,320,99,312,102,312,110,295,115,285,118,270,104,276,93,280,66,274,55" href="#nowon" alt="노원" onClick={() => { selectGu('350000') }} />
                        <area shape="poly" coords="236,25,250,23,251,32,267,33,271,41,272,53,277,69,268,100,251,81,234,68" href="#dobong" alt="도봉" onClick={() => selectGu('320000')} />
                        <area shape="poly" coords="222,42,231,40,229,66,240,82,253,92,263,113,250,124,237,122,233,104,211,94,212,66" href="#gangbuk" alt="강북" onClick={() => selectGu('305000')} />
                        <area shape="poly" coords="204,98,211,97,231,109,240,129,261,128,266,117,274,124,282,130,258,141,244,154,238,158,223,144,213,140,218,125" href="#sungbuk" alt="성북" onClick={() => selectGu('290000')} />
                        <area shape="poly" coords="289,124,312,118,325,125,319,133,322,146,309,162,294,172" href="#jungrang" alt="중랑" onClick={() => selectGu('260000')} />
                        <area shape="poly" coords="249,159,260,152,263,141,284,137,287,172,284,185,267,178,262,170,245,174" href="#dongdaemun" alt="동대문" onClick={() => selectGu('230000')} />
                        <area shape="poly" coords="191,102,202,100,212,125,207,137,212,144,231,164,241,166,218,173,201,171,188,163,191,146,186,132" href="#jongno" alt="종로" onClick={() => selectGu('110000')} />
                        <area shape="poly" coords="149,81,156,84,177,75,190,94,182,107,178,128,138,155,132,145,145,124" href="#eunpyeong" alt="은평" onClick={() => selectGu('380000')} />
                        <area shape="poly" coords="150,154,162,154,165,146,172,143,178,135,186,148,181,169,190,176,174,183,146,163" href="#seodaemun" alt="서대문" onClick={() => selectGu('410000')} />
                        <area shape="poly" coords="193,181,205,176,240,176,229,196,209,193,192,193" href="#jungu" alt="중구" onClick={() => selectGu('140000')} />
                        <area shape="poly" coords="244,179,259,176,281,190,273,220,257,211,240,213,233,199" href="#seongdong" alt="성동" onClick={() => selectGu('200000')} />
                        <area shape="poly" coords="292,176,310,170,308,184,314,196,295,221,278,220" href="#gwangjin" alt="광진" onClick={() => selectGu('215000')} />
                        <area shape="poly" coords="324,200,334,184,369,171,376,181,376,202,349,212,342,233,327,224" href="#gangdong" alt="강동" onClick={() => selectGu('740000')} />
                        <area shape="poly" coords="103,160,115,154,121,147,158,185,187,189,173,215,125,195" href="#mapo" alt="마포" onClick={() => selectGu('440000')} />
                        <area shape="poly" coords="189,197,209,196,227,203,233,214,205,236,191,237,177,219" href="#yongsan" alt="용산" onClick={() => selectGu('170000')} />
                        <area shape="poly" coords="50,138,109,196,101,198,94,215,81,210,66,197,50,202,26,192" href="#gangseo" alt="강서" onClick={() => selectGu('500000')} />
                        <area shape="poly" coords="70,210,80,217,100,221,106,202,113,201,119,213,114,237,95,234,88,239,73,235" href="#yangcheon" alt="양천" onClick={() => selectGu('470000')} />
                        <area shape="poly" coords="121,200,147,211,149,225,158,234,152,251,138,266,135,270,128,267,125,240,119,237" href="#yeongdungpo" alt="영등포" onClick={() => selectGu('560000')} />
                        <area shape="poly" coords="69,243,75,248,92,244,105,248,119,242,124,265,112,272,107,261,96,261,82,285,64,284" href="#guro" alt="구로" onClick={() => selectGu('530000')} />
                        <area shape="poly" coords="164,235,174,233,195,252,205,256,205,280,191,284,184,265,158,261,143,267" href="#dongjak" alt="동작" onClick={() => selectGu('590000')} />
                        <area shape="poly" coords="112,277,125,274,137,276,141,299,152,316,130,328" href="#geumcheon" alt="금천" onClick={() => selectGu('545000')} />
                        <area shape="poly" coords="142,272,157,267,180,270,189,285,201,289,210,301,168,327,149,305" href="#gwanak" alt="관악" onClick={() => selectGu('620000')} />
                        <area shape="poly" coords="206,248,230,230,240,255,247,275,258,293,267,302,287,294,297,307,271,335,253,330,249,297,228,306,207,291" href="#seocho" alt="서초" onClick={() => selectGu('650000')} />
                        <area shape="poly" coords="241,222,275,234,275,254,307,266,327,297,307,305,293,286,281,286,267,292,255,272,247,270,234,229" href="#gangnam" alt="강남" onClick={() => selectGu('680000')} />
                        <area shape="poly" coords="285,234,307,229,320,208,322,229,338,236,334,245,353,260,345,274,335,288,329,291,311,264,286,253" href="#songpa" alt="송파" onClick={() => selectGu('710000')} />
                    </map>
                </S.SearchContainer>
            </S.PriceMapContainer>
            {
                selectedData.length === 0 ? null :
                <S.PriceListContainer>
                        {
                            (selectedData.map((item, i) => (<FruitBox name={item.name} price={item.price} etc={item.etc} unit={item.unit} active='true' /> )))
                        }
                </S.PriceListContainer>
            }
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
