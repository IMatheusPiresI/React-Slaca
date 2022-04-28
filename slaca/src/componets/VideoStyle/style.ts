import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    img {
        width: 100%;
        max-width: 1000px;
        height: 100%;
        z-index: 2;
    }

    @media (max-width: 1650px) {
        img {
            width: auto;
            max-width: 1000px;
        }
    }

    @media (max-width:935px) {
        img {
            width: 100%;
            height: auto;
        }
    }
`;