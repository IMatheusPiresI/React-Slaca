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

            @media(max-width: 999px){
                font-size: 1.2rem;
            }

            @media(max-width: 460px){
                font-size: 1rem;
            }
        }

        div:nth-child(2){
            width: 400px !important;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 10px;

            @media(max-width: 800px){
                width: auto !important;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-end;
            }

            &:nth-child(2){           
                svg{
                    font-size:25px;
                }
            }

            &:nth-child(3){       
                width: 450px;
                background-color: #000;
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

                @media(max-width: 600px){
                        padding: 5px 5px;
                    }

                &:nth-child(2){
                    @media(max-width: 600px){
                        width: 35px; 
                        
                    }
                }

                &:nth-child(3){
                    width: 45px;     
                    
                    @media(max-width: 600px){
                        width: 35px; 
                    }
                }

                &:nth-child(1) {
                    width: 130px;

                    @media(max-width: 999px){
                        width: 100px;
                        font-size: 13px;
                    }

                    @media(max-width: 800px){
                        width: 45px;
                        padding: 5px 10px;

                        span{
                            display: none;
                        }
                    }

                    @media(max-width: 600px){
                        width: 35px; 
                    }

                    svg{
                        font-size:18px;
                    }
                }
                
                @media(max-width: 999px){
                    
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

        @media (max-width:1650px) {
            height: 400px;
        }

        @media (max-width:1345px) {
            height: 300px;
        }

        @media (max-width:1145px) {
            height: 200px;
        }

        @media (max-width:935px) {
            flex-direction: column;
            height: 100%;
        }
    }
`;