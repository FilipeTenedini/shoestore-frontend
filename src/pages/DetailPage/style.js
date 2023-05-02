import styled from "styled-components";

export const DetailsConteiner = styled.div`
    min-height: 100vh;
    background-color:#F2F2F2;
    padding-top: 70px;
    padding-bottom: 120px;
`
export const DetaiHeader = styled.header`
    position: fixed;
    top: 0px;
    right: 0px;
    z-index: 2;
    height: 70px;
    width: 100%;
    background-color:#1C1C1C;
    display: flex;
    align-items: center;


    h1{
        font-weight:700;
        font-size:24px;
        line-height:30px;
        color: #FAFAFA;
        margin-left: 20px;
        margin-right: 20px;
    }
`

export const ProducDetail = styled.div`

    img{
        width: 100%;
        height: 250px;
        object-fit: cover ;
        border: 5px solid #1c1c1c;
        border-top: none;
    }
`
export const DetailBody = styled.div`
    padding: 20px;
    h1{
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
    }
    h2{
        font-weight: 700;
        font-size: 15px;
        line-height: 30px;
    }
    h3{
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        margin-right:20px;
    }
`

export const Sizebuttons = styled.div`
    display: flex;
    justify-content:center;
    padding: 10px 0px;
`
export const ButtonCircle = styled.button`
    height: 40px;
    width: 40px;
    border: 1px solid #1c1c1c;
    border-radius: 20px;
    font-weight:700;
    font-size: 13px;
    margin-right:10px;
    background-color: ${props => props.marked ? '#fafafa' : '#1c1c1c'};
    color: ${props => props.marked ? '#1c1c1c' : '#fafafa'};
`

export const BuyForm = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
    input{
        border-radius: 10px;
        text-align: center;
        border: 1px solid #1c1c1c;
        width: 80px;
        height: 20px;
    }
    button{
        width:175px;
        height: 45px;
        border-radius: 70px;
        background-color: #1c1c1c;
        color: #fafafa;
        font-weight: 700;
        font-size: 16px;
    }
`