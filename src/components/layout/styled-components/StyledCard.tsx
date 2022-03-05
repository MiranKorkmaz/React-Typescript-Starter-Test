import styled from "styled-components"

export const StyledCard = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: 1fr;
    grid-gap: 10px;
    padding-bottom: 50px;
    padding-top: 30px;
    margin: auto;
    width: 50%;
    text-align: center;
    h1 {
        font-family: helvetica;
        font-size: 25px;
    }
    p {
        font-size: 20px;
        font-family: helvetica;
        padding-bottom: 15px;
    }
    img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 40%;
    }
`
