import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1C1C1C;
    font-size: 24px;
    position: relative;
    color: #FFF;

    svg{
        position: absolute;
        left: 10px;
        cursor: pointer;
    }
`;