import styled from "styled-components";

export const Container = styled.nav`
    width: 220px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    word-break: break-all;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, .2);
    background: var(--main-color);

    img{
        width: 100%;
        height: auto;
    }

    .header__name {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 68px;
        background-image: linear-gradient(to bottom, rgba(255, 179, 84, 1), rgba(238, 122, 58));


        h1{
            font-size: 30px;
            color: var(--main-color);
        }
    }

    @media (max-width: 765px) {
        width: 150px;

        .header__name{
            h1 {
                font-size: 23px;
            }
        }
    }

    @media (max-width: 450px) {
        width: 110px;

        .header__name{
            h1 {
                font-size: 18px;
            }
        }
    }
`;