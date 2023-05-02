import styled from "styled-components";

export const Container = styled.main`
    background-color: #F2F2F2;
    width: 100%;
    min-height: calc(100vh - 190px);
    display: flex;

    section{
        width: 100%;
        height: calc(100vh - 195px);
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-y: scroll;
        padding-top: 20px;
        padding-bottom: 30px;

        svg{
            width: 90px;
            height: 90px;
            margin-bottom: 35px;
        }
    }
   a {
        color: #000;
        text-decoration: underline;
        cursor: pointer;
        margin-top: 35px;
   }
`;