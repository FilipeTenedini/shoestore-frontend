import styled from "styled-components";

export const HomeContainer = styled.div`
    min-height: 100vh;
    background-color:#F2F2F2;
    padding-top: 160px;
    padding-bottom: 120px;
    
    ul{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 10px;
    }
`
export const HomeHeader = styled.header`
    position: fixed;
    top: 0px;
    right: 0px;
    z-index: 2;
    height: 130px;
    width: 100%;
    background-color:#1C1C1C;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
    div:first-child{
        h1{
        font-weight:700;
        font-size:24px;
        line-height:30px;
        color: #FAFAFA;
        margin-left: 20px;
        margin-right: 20px;
        }
        display: flex;
        align-items: center;
    }
    div:last-child{
        display:flex;
        justify-content: space-around;
    }
    button{
        background-color:#1C1C1C;
        border: 1px solid #FAFAFA;
        width: 110px;
        height: 30px;
        border-radius: 23px;
        display:flex;
        justify-content: space-around;
        align-items: center;
        div{
            color: #FAFAFA;
            font-weight:500;
            font-size: 14px;
            line-height: 17px;
        }
    }
`
export const ProductsExibition = styled.li`
    width: 160px;
    height: 200px;
    border-radius: 10px;
    background-color:#1C1C1C;
    border: 1px solid #0000001A;

    a{
        text-decoration: none;
    }

    img{
        width: 100%;
        height: 130px;
        object-fit: cover;
        border-radius: 10px;
        border: 1px solid #0000001A;
    }
`

export const ProductsDescription = styled.div`
    padding: 0px 10px;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    h1{
        color: #FAFAFA;
        font-weight: 500;
        font-size: 14px;
        line-height: 18px
    }
    h2{
        color: #FAFAFA;
        font-weight: 600;
        font-size: 14px;
        line-height: 18px
    }
    div{
        display: flex;
        justify-content: space-between;

        h1{
            margin-left: 3px;
        }
    }
`