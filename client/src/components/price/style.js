import styled, { css } from 'styled-components';

export const PricePage = styled.div`
    background-color: smokeshite;
`;

export const Banner = styled.div`   
    position: fixed;
    background-image: url("/images/price_banner.jpg");
    background-position: center;
    width: 100%;
    height: 400px;
    z-index: 1;
    top: 0px;
`;

export const PriceContainer = styled.div`
    position: relative;
    width: 1000px;
    margin: 0 auto;
    padding-top: 200px;
    padding-bottom: 100px;
    z-index: 2;
    top: 0;
`;
    
export const PriceQueryContainer = styled.div`
    background-color: white;
    width: 100%;
    ${(props) => props.active ? css`
        height: 500px;
        transition: height 0.5s ease-out;
    `: css`
        height: 300px;
        transition: height 0.5s ease-out 0.3s;
    `}
    padding: 50px;
    border: 1px solid #ccc;
`;

export const PriceListContainer = styled.div`
    background-color: #fdfaf7;
    padding: 50px 50px 0px 50px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    border: 1px solid #ccc;
    border-top: none;
`;

export const Title = styled.div`
    font-size: 2em;
    margin-bottom: 20px;
    padding-bottom: 5px;
    border-bottom: 1px solid #ccc;
`;

export const Content = styled.div`
    font-size: 1.3em;
    color: black;
    line-height: 30px;
`;

export const SearchContainer = styled.div`
    width: 100%;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export const SearchBar = styled.div`
    position: relative;
    width: 80%;
    height: 50px;
    margin-top: 50px;
    margin-bottom: 100px;
`;

export const SearchField = styled.input`
  width: 100%;
  height: 3em;
  background: whitesmoke;
  border: none;
  font-size: 12pt;
  color: #63717f;
  padding-left: 45px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #ccc;
`;

export const SearchUl = styled.ul`
    display: block;
    position: absolute;
    list-style-type: none;
    width: 640px;
    z-index: 4;
    left: 40px;
`;

export const SearchLi = styled.li`
    border: 1px solid #ccc;
    width: 100%;
    padding: 10px;
    background-color: #eee;
    color: #63717f;
`;

export const FruitContainer = styled.tbody`
    width: 400px;
    border: 1px solid #ccc;
    background-color: white;
    margin: 0px 0px 50px 0px;

    ${(props) => props.active ? css`
        opacity: 1;
        transition: opacity 0.5s ease-out 0.3s;
    `: css`
        opacity: 0;
        transition: opacity 0.5s ease-out 0s;
    `}
`;

export const FruitIconHolder = styled.td`
    border-right: 1px solid #ccc;
`;

export const FruitIcon = styled.div`
    background-image: url('/images/icon-food.jpg');
    background-repeat: no-repeat;
    width: 57px;
    height: 57px;
    text-align: center;
    margin: auto;
`;

export const FruitInfoHolder = styled.td`
    box-sizing: content-box;
    height: 100%;
    width: 100px;
    height: 100px;
    border-right: 1px solid #ccc;
`;

export const FruitName = styled.td`
    position: relative;
    font-size: 1em;
    color: #3c9bd1;
    height: 35px;
    width: 200px;
    vertical-align: top;
    padding: 15px 10px 0px 20px;
`;

export const FruitBar = styled.span`
    position: absolute;
    left: 20px;
    bottom: 0px;
    width: 15px;
    height: 2px;
    background: #000;
`;

export const FruitPrice = styled.td`
    font-size: 1em;
    font-weight: bold;
    width: 100px;
    color: #454545;
    padding: 12px 10px 0px 10px;
`

export const FruitUnit = styled.td`
    font-size: 0.8em;
    position: relative;
    padding: 5px 10px 0px 20px;
    height: 20px;
    color: #333;
`;

export const FruitEtc = styled.td`
    font-size: 0.8em;
    position: relative;
    padding: 0px 10px 10px 20px;
    height: 20px;
    color: #666666;
`;



export const IconBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 50px;
    & > svg {
        font-size: 4em;
        color: #909090;
    }
    @media only screen and (max-width: 800px) {
        & > svg {
            display: none;
        }
        margin-top : 20px;
    }
`;

export const IconItem = styled.div`
    display: flex;
    flex-direction: column;
    width: 150px;
    height: 150px;
    align-items: center;
    border: 3px solid #909090;
    border-radius: 50%;
    justify-content: center;
    font-size: 1.3rem;
    & > svg {
        font-size: 2.5rem;
        margin-bottom: 10px;
    }
    @media only screen and (max-width: 800px) {
        width: 120px;
        height: 120px;
        margin: 5px;
    }
`;
