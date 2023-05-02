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
        align-items: center;
        overflow-y: scroll;
        padding-top: 20px;
        padding-bottom: 30px;
    }
`;

export const OrderDetails = styled.article`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    position: fixed;
    bottom: 90px;
    box-shadow: 0px 21px 43px rgba(58, 76, 130, 0.08);
    padding: 10px;
    display: ${({totalPrice}) => totalPrice > 0 ? 'flex' : 'none'};

    div{
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        font-size: 12px;
        span {
            font-size: 12px;
            margin-top:0;
            min-width: 0;
            font-weight: 600;
        }
        
    }
    div:last-child{
        margin-bottom: 0;
        span{
            display: flex;
            align-items: flex-end;
        }
    }
`;