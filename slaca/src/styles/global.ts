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
`;