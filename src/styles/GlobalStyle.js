import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
      font-family: 'Montserrat', sans-serif;
    }

    button {
        border: none;
        cursor: pointer;
    }
    
    a{
      text-decoration: none;
    }
    
    b{
      font-weight: 700;
    }
`;
