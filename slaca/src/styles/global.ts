import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --main-color: #FFFFFF;
        --bars-color: #FDF1EB;
        --title-item-color: #ED7839;
        --header-nav-text-color: #725C5C;
    }   

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 780px) {
            font-size: 87.5%;
        }
    }

    body {
        background: var(--main-color);
        padding-left: 220px;

        @media (max-width: 765px) {
            padding-left: 150px;
        }

        @media (max-width: 450px) {
            padding-left: 110px;
        }
    }

    main {
        padding: 20px 45px;

        @media (max-width: 765px) {
            padding: 20px 15px;
        }
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 700;
    }

    button {
        cursor: pointer;
    }

    .modal {
        min-width: 400px;
        max-width: 700px;
        height: auto;
        background-color: var(--main-color);
        border-radius: 10px;
        border: 1px solid var(--title-item-color);
        box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, .3);
        animation: modalAnimation 1s forwards;

        @keyframes modalAnimation {
            0% {
                transform: translateY(-100px);
                opacity: 0;
            }

            100% {
                transform: translateY(-50px);
                opacity: 1;
            }
        }
    }
    .overlay-modal {
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, .2);
    }
`;