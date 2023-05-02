import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  label{
    font-size: 12px;
    margin-bottom: 5px;
    color: #000;
  }
  input{
    background: transparent;
    border: none;
    border-bottom: 1px solid black;
    padding: 5px;
    outline: none;
    margin-bottom: 20px;
  }
`;