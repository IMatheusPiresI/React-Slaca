import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    img {
        width: 100%;
        max-width: 1000px;
        height: 100%;
    }

    @media (max-width: 1650px) {
        img {
            width: auto;
            max-width: 1000px;
        }
    }

    @media (max-width:1180px) {
        img {
            width: 100%;
            height: auto;
        }
    }
`;