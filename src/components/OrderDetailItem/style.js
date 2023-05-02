import styled from "styled-components";

export const ItemContainer = styled.li`
    background: #ffffff;
    height: 138px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    margin: 3px 0;
`;

export const ProductImage = styled.div`
    img{
        width: 102px;
        height: 102px;
        border-radius: 10px;
    }
`;

export const ProductInfo = styled.div`
    height: 90px;
    margin: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const ProductName = styled.h3`
    font-weight: 700;
    font-size: 14px;
`;

export const ProductSize = styled.span`
    font-weight: 500;
    font-size: 12px;
`;

export const Quantity = styled.p`
    font-weight: 400;
    font-size: 10px;
`;

export const Price = styled.span`
    font-weight: 700;
    font-size: 20px;
`;

export const InfoContainer  = styled.div`
    display: flex;
    justify-content: center;
`

