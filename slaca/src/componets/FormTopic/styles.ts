import styled from "styled-components";

export const Container = styled.form`
    width: 100%;
    padding: 20px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 500px) {
        padding: 10px 15px;
    }

    h4 {
        color: #5C5C5C;
        font-weight: 400;
        text-align: center;
    }

    div{
        padding: 20px 0px 0px 0px;
        width: 100%;

        label {
            color: var(--title-item-color);
            font-weight: bold;
            font-size: 23px;

            @media (max-width: 830px) {
                font-size: 20px;
            }
        }

        input[type=text] {
            width: 100%;
            padding: 15px 0px 15px 20px;
            font-size: 18px;
            border: 1px solid #CCCCCC;
            border-radius: 5px;
            outline: none;

            @media (max-width: 830px) {
                font-size: 14px;
            }

            @media (max-width: 625px) {
                padding: 10px 0px 10px 10px;
            }
        }

    }

    textarea {
        width: 100%;
        border: 1px solid #CCCCCC;
        outline: none;
        padding: 10px 20px;
        height: 6rem;
        resize: none;
    }

    .format{
        display: flex;
        align-items: center;
        background-color: #EAF1F2;
        margin: 0px;
        padding: 0px 0px 0px 10px;
        position: relative;
        height: 45px;
        bottom: 4px;
        font-size: 22px;

        p{
            width: 100%;
        }
        span {
            position: relative;
            bottom: -4px;
        }

        span:first-child{
            margin-right: 25px;
            cursor: pointer;

            @media (max-width: 500px) {
                margin-right: 15px;
            }
        }

        span{
            @media (max-width: 500px) {
                font-size: 16px;
            }
        }

        button {
            width: 300px;
            height: 100%;
            border: none;
            font-size: 18px;
            color: white;
            background-image: linear-gradient(to bottom, rgba(254, 178, 84, 1), rgba(240, 129, 61, 1));
        }
    }
`;