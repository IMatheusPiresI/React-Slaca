import styled from "styled-components";

export const Container = styled.article`
    border: 1px solid #E7E7E7;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, .12);
    padding: 15px 25px;

    h5 {
        color: var(--title-item-color);
        font-size: 25px;
    }

    p:nth-child(2) {
        margin-top: 2px;
        color: #5C5C5C;
    }

    p:nth-child(3) {
        margin: 12px 0px;
        color: #4D4D4D;
    }

    div {
        display: flex;
        align-items: center;

        p {
            color: #757575 !important;
            margin-left: 15px !important;
        }


    }

    button:first-child {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        max-height: 30px;
        border: none;
        color: var(--title-item-color);
        background-color: transparent;
        position: relative;
        right: 10px;
    }

    button:nth-child(2){
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px 8px;
        font-size: 1rem;
        max-height: 30px;
        background-color: var(--title-item-color);
        color: var(--main-color);
        border: none;
    }
`;