import styled from "styled-components";

export const ItemContainer = styled.li`
    background: #ffffff;
    height: 68px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    margin: 3px 0;
`;

export const Date = styled.div`
    background-color: lightgrey;
    padding: 5px;
    border-radius: 5px;
    color: #1c1c1c;
    font-weight: 700;
    font-size: 13px;
`;

export const Value = styled.span`
    font-weight: 700;
    font-size: 16px;
    color: #1c1c1c;
`;

export const SeeOrder = styled.button`
    width: 95px;
    height: 20px;
    background-color: #1c1c1c;
    color: #ffffff;
    font-weight: 500;
    font-size: 10px;
    text-align: center;
    border-radius: 24px;
`;