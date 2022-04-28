import styled from "styled-components";

export const Container = styled.section`
    margin-bottom: 30px;
    div{
        border: 1px solid #ECECEC;
        border-radius: 10px;
        overflow: hidden;

        .text-resume{
            padding: 15px 25px 15px 25px;
            font-size: 18px;
            color: #5C5C5C;
            text-align: justify;
            transition: 1s linear ease-in-out;
            height: 100%;


            span {
                display: block;
                margin: 20px 0px;
            }

            strong {
                cursor: pointer;
            }

            
            @media (max-width: 450px) {
                font-size: 14px;
                padding: 13px 7px 13px 7px;          
            }
        }
    }
`;

export const TitleSession = styled.h3`
        background-color: var(--bars-color);
        border-radius: 10px 10px 0px 0px;
        color: #4E4E4E;
        border-bottom: 1px solid #ECECEC;
        font-size: 30px;
        padding: 15px 25px 15px 25px;

        @media (max-width: 935px) {
            font-size: 25px;
        }

        @media (max-width: 450px) {
            font-size: 20px;
            padding: 5px 7px 5px 7px;          
        }
`;