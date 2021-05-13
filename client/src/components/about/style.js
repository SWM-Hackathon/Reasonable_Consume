import styled from 'styled-components';

export const IntroContainer = styled.div`
    padding-top: 100px;
`;

export const TitleContainer = styled.div`
    margin: 30px 50px;
    margin-bottom: 50px;
`;

export const Repo = styled.div`
    font-size: 1.8em;
    margin-bottom: 20px;
    color: black;
`;

export const Title = styled.div`
    font-size: 2em;
    margin-bottom: 20px;
`;

export const BoldContent = styled.span`
    color: #6e849a;
    font-weight: bold;
`;

export const TempDiv = styled.div``

export const TeamContent = styled.div`
    font-size: 1.3em;
    color: gray;
    margin-top: 5px;
    line-height: 30px;
    display: flex;
    align-items: center;
    & > svg {
        color: black;
    }
`;
export const Content = styled.div`
    font-size: 1.3em;
    color: #a2a0a0;
    margin-top: 5px;
    line-height: 30px;
    display: flex;
    align-items: center;
`;
export const RepoContent = styled.div`
    font-size: 1.3em;
    color: #a2a0a0;
    margin-top: 5px;
    line-height: 30px;
    display: flex;
    align-items: center;
    margin-bottom: 30px;
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
