import styled from "styled-components"

export const StyledCard = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 15px;
    grid-gap: 15px;
    align-items: center;
    justify-content: center;
    padding-left: 10px;
    h1 {
        font-family: helvetica;
        font-size: 25px;
    }
    p {
        font-size: 20px;
        font-family: helvetica;
    }
    img {
        width: 100%;
        height: auto; 
        border-radius: 8px;
    }
`
