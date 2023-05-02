import styled from "styled-components";

export const PageContainer = styled.section`
    height: 100vh;
    background-color:#F2F2F2;
    font-family: 'Montserrat', sans-serif;
    padding-top: 72px;
    padding-bottom: 90px;
`;

export const PageHeader = styled.header`
    position: fixed;
    top: 0px;
    right: 0px;
    z-index: 2;
    height: 72px;
    width: 100%;
    padding: 16px;
    background-color:#1C1C1C;
    color: #ffffff;
    font-weight: 700;
    font-size: 24px;
    display: flex;
    align-items: center;
`;

export const OrdersContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    h2{
        color: #212121;
        font-weight: 700;
        font-size: 20px;
        padding: 16px;
    }
`;

export const OrdersList = styled.ul`
    display: flex;
    flex-direction: column;
    height: calc(100vh - 227px);
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
    & {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
`;

