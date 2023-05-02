import styled from 'styled-components';

export const Container = styled.main`
    background-color: #F2F2F2;
    width: 100%;
    min-height: calc(100vh - 190px);
    display: flex;
    
    span {
        min-width: 100%;
        margin-top: 25px;
        display: flex;
        height: 25px;
        justify-content: center;
    }

    section{
        width: 100%;
        height: calc(100vh - 195px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow-y: scroll;
        padding-top: 50px;
        padding-bottom: 30px;
    }
`;

export const OrderDetailsContainer = styled.div`
    width: 100%;
    height: 38px;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    position: absolute;
    bottom: 90px;
    display: ${({totalPrice}) => totalPrice > 0 ? 'flex' : 'none    '};
`;