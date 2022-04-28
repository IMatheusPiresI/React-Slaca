import styled from "styled-components";

export const Container = styled.section`

    div{
        border: 1px solid #ECECEC;
        border-radius: 10px;
        overflow: hidden;

        h3{
            background-color: var(--bars-color);
            color: #4E4E4E;
            border-bottom: 1px solid #ECECEC;
            font-size: 30px;
            padding: 15px 25px 15px 25px;
        }

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
        }
    }

    
`;