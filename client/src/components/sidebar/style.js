import styled, { keyframes } from 'styled-components';

const boxFade =  keyframes `
    from {
        right:-250px
    }

    to {
        right: 0px
    }
`

export const Container = styled.div`
    position: fixed;
    z-index: 1300;
    inset: 0px;
`;

export const SidebarContainer = styled.div`
    background: white;
    width: 250px;
    position: absolute;
    height: 100%;
    right: 0;
    top: 0;
    text-align: center;
    padding: 40px;
    animation: ${boxFade} 0.5s;
    & > a {
        color: black;
    }
`;

export const OutSide = styled.div`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    z-index: -1;
    position: fixed;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-tap-highlight-color: transparent;
`;

export const ItemBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    font-size: 1.5rem;
    & > svg {
        width: 20%;
    }
`

export const ItemMenu = styled.div`
    width: 80%;
    margin-left: 20px;
`

export const Divider = styled.div`
    border: 1px solid #e2e2e2;
    margin: 40px -40px 0px -40px;
`