import styled from "styled-components";

export const Container = styled.article`
    border: 1px solid #E7E7E7;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, .12);
    padding: 15px 25px;
    word-break: break-all;
    position: relative;

    @media (max-width: 750px) {
        padding: 10px 18px;
    }

    h5 {
        color: var(--title-item-color);
        font-size: 25px;

        @media (max-width: 750px) {
            font-size: 22px;
        }

        @media (max-width: 450px) {
            font-size: 19px;
        }
    }

    p {
        @media (max-width: 750px) {
            font-size: 12px;
        }

        
        @media (max-width: 450px) {
            font-size: 11px;
        }   
    }

    p:nth-child(2) {
        margin-top: 2px;
        color: #5C5C5C;
    }

    p:nth-child(3) {
        margin: 12px 0px;
        color: #4D4D4D;
    }

    .btn-section {
        display: flex;
        align-items: center;

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

        p {
            color: #757575 !important;
            margin-left: 15px !important;
        }


    }

    .box-btn-remove{
        border: 1px solid #CCCCCC;
        width: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: 60px;
        left: 25px;
        background-color: rgba(255,255,255, .9);
        box-shadow: 0px 0px 10px 0px #5C5C5C;

        button{
            width: 100%;
            height: 100%;
            background-color: var(--main-color);
            color: var(--title-item-color) ;
            font-size: 18px ;
            display: flex;
            gap: 5px;
            transition: .2s linear ;
            position: relative;
            text-align: left;
            bottom: 0 ;
            border: none;
            padding: 5px 10px;

            &:hover {
                background-color: var(--title-item-color);
                color: var(--main-color);
            }
        }
    }
`;