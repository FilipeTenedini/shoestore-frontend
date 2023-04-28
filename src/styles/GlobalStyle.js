import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
      font-family: 'Montserrat', sans-serif;
    }

    button {
        outline: none;
        border: none;
        border-radius: 24px;
        font-size: 16px;
        cursor: pointer;
        padding: 12px;
    }
    input {
        font-size: 20px;
        width: calc(100% - 30px);
        outline: none;
        border: 1px solid #FFFFFF;
        border-radius: 24px;
        padding: 15px;
        margin: 1px;
    }
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
        width: 100%;
    }
    a{
      text-decoration: none;
    }
    a:-webkit-any-link {
      color: #FFFFFF;
    }
    b{
      font-weight: 700;
    }
`;
