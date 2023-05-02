import styled from "styled-components";

export const PageContainer = styled.section`
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

export const ProductsContainer = styled.div`
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

export const ProductsList = styled.ul`
    display: flex;
    flex-direction: column;
`;

export const AddressInfo = styled.div`
    background: #ffffff;
    width: 100%;
    padding: 16px;
    margin: 10px 0;
    h3{
        font-weight: 700;
        font-size: 16px;
        margin-bottom: 20px;
    }
    p{
        font-weight: 500;
        font-size: 14px;
        margin-bottom: 10px;
        color: #606A7B;
    }
`;

export const TotalAmount = styled.div`
    background: #ffffff;
    width: 100%;
    padding: 16px;
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3{
        font-weight: 700;
        font-size: 16px;
    }
    span{
        font-weight: 700;
        font-size: 18px;
    }
`;