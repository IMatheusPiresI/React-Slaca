import styled from "styled-components";

export const Container = styled.section`
    padding:  20px 45px;
    min-height: 100%;


    div:nth-child(1){
        display: flex;
        width: 100%;

        p {
            color: var(--title-item-color);
            font-weight: 700;
            font-size: 1.5rem;
            text-align: justify;
        }

        div:nth-child(2){
            width: 600px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 10px;

            &:nth-child(2){           
                svg{
                    font-size:25px;
                }
            }

            &:nth-child(3){           
                img{
                    width: 30px;
                    height: 30px;
                }
            }

            button {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 5px 10px;
                background-color: var(--title-item-color);
                color: #fff;
                gap: 7px;
                height:35px;
                border: none;
                border-radius: 5px;
                font-size: 14px;

                &:nth-child(1) {
                    width: 100px;
                }                    
            }

        }
    }
`;