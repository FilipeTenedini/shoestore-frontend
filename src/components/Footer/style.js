import styled from 'styled-components';

export const FooterDiv = styled.div`
    position: fixed;
    z-index:2;
    border: 0px;
    bottom: 0px;
    left: 0px;
    height: 90px;
    width: 100%;
    background-color:#1C1C1C;
    box-shadow: 0px -19px 38px 0px #3A4C8212;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const NavigateButton = styled.button`
    display: flex;
    flex-direction: column;
    align-items:center;
    background-color:#1C1C1C;
    width:70px;
    div{
        font-size:10px;
        font-weight:500;
        line-height: 18px;
        color: #fafafa;
    }
`