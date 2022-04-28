import styled from "styled-components";

export const Container = styled.form`
    width: 100%;
    padding: 20px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h4 {
        color: #5C5C5C;
        font-weight: 400;
    }

    div{
        padding: 20px 0px 0px 0px;
        width: 100%;

        label {
            color: var(--title-item-color);
            font-weight: bold;
            font-size: 23px;
        }

        input[type=text] {
            width: 100%;
            padding: 15px 0px 15px 20px;
            font-size: 18px;
            border: 1px solid #CCCCCC;
            border-radius: 5px;
            outline: none;
        }

    }

    textarea {
        width: 100%;
        border: 1px solid #CCCCCC;
        outline: none;
        padding: 10px 20px;
        height: 6rem;
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