import styled from "styled-components";

export const SignUpContainer = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #1C1C1C;
    color: #FFFFFF;
    font-family: 'Montserrat', sans-serif;
    h1{
        margin-bottom: 50px;
        font-weight: 500;
        font-size: 24px;
    }
    span{
        font-weight: 400;
        font-size: 16px;
        margin: 40px 0;
    }
    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
        width: 100%;
    }
    input{
        background: #1C1C1C;
        color: #FFFFFF;
        font-size: 20px;
        width: calc(100% - 30px);
        outline: none;
        border: 1px solid #FFFFFF;
        border-radius: 24px;
        padding: 15px;
        margin: 1px;
    }
    button{
        display: flex;
        align-items: center;
        justify-content: center;
        width: calc(100% - 30px);
        background-color: #FFFFFF;
        color: #1C1C1C;
        font-weight: 500;
        font-size: 16px;
        border-radius: 24px;
        padding: 12px;
    }
    a{
        margin: 50px 0;
        text-decoration: none;
    }
    a:-webkit-any-link {
      color: #FFFFFF;
    }
`;