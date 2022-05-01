import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 100%;
    max-height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0px;
    position: relative;

    h4 {
        color: var(--title-item-color);
        text-align: center;
    }

    div {
        padding: 35px 0px;
        display: flex;
        gap: 30px;

        img {
            width: 70px;
            height: auto;

            @media (max-width:500px) {
                width: 40px;
            }
        }
    }

    p {
        text-align: center;
        max-width: 900px;
        color: #595959;
        padding: 10px 0px 20px 0px;

        @media (max-width: 500px) {
                font-size: 12px;
        }
    }

    button {
        display: flex;
        gap: 5px;
        align-items: center;
        justify-content: center;
        font-size: 1.4rem;
        padding: 10px 20px;
        color: var(--main-color);
        fill: var(--main-color);
        border-radius: 8px;
        border: none;
        background-image: linear-gradient(to bottom, rgba(254, 178, 84, 1), rgba(240, 129, 61, 1));
        position: absolute;
        bottom: -30px;

        span {
            font-size: 1.7rem;
        }
    }
`;