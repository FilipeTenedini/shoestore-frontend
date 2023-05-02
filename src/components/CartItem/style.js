import styled from "styled-components";

export const ItemContainer = styled.article`
    width: 100%;
    height: 138px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    margin-bottom: 10px;
    position: relative;

    img{
        width: 115px;
        height: 115px;
        margin: 0 15px;
    }

    svg {
        position: absolute;
        right: 8px;
        cursor: pointer;
    }
`;
export const ItemInfos = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 1;

    p{
        margin-bottom: 25px;
        font-size: 14px;
        font-style: normal;
    }
    p:nth-child(1){
        font-weight: bold;
    }
    p:nth-child(2),
    p:nth-child(3){
        font-weight: 500;
    }
    p:nth-child(3),
    p:nth-child(4){
        margin-bottom: 0;
    }
    p:nth-child(4){
        position: absolute;
        right: 10px;
        bottom: 10px;
        font-weight: bold;
    }
`;