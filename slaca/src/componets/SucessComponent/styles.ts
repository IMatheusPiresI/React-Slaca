import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 2rem 1rem !important;
    height: 414px;
    position: absolute;
    top: 69px;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    border-radius: 0px 0px 10px 10px;
    border-bottom: 1px solid #CCCCCC;

    h4 {
        margin-top: 20px;
        color: var(--title-item-color);
        font-size: 30px;
    }

    p {
        color: #595959;
        font-size: 20px;
        margin: 80px 0px;
        text-align: center;
    }

    a {
        color: var(--title-item-color);
        font-size: 22px;
    }

    button {
        width: 300px;
        height: 40px;
        font-size: 20px;
        color: #fff;
        border: none;
        border-radius: 6px;
        background-image: linear-gradient(to bottom, rgba(254, 178, 84, 1), rgba(240, 129, 61, 1));
        position: absolute;
        bottom: -20px;
    }
`;