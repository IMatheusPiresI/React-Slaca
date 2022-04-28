import styled from "styled-components";

export const Container = styled.section`
    height: 100%;

    div:nth-child(1){
        display: flex;
        width: 100%;
        gap: 20px;

        h2 {
            color: var(--title-item-color);
            font-weight: 700;
            font-size: 1.5rem;
            text-align: justify;
            max-width: 1000px;
        }

        div:nth-child(2){
            width: 300px;
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
                font-size: 16px;

                &:nth-child(1) {
                    width: 130px;

                    svg{
                        font-size:18px;
                    }
                }                    
            }

        }
    }
    .video-section{
        display: flex;
        gap: 20px;
        margin: 25px 0px;
        width: 100%;
        height: 100%;
    }
`;