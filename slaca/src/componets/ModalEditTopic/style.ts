import styled from "styled-components";

export const Container = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    padding: 2rem 1rem 4rem 1rem;

    & h2 {
        color: var(--title-item-color);
        font-size: 30px;
        text-shadow: -1px 1px #fff;
        filter: drop-shadow(0px 0px 10px var(--title-item-color));
    }

    .close-modal {
        position: absolute;
        right: 15px;
        top: 15px;
        border: none;
        background-color: transparent;
        padding: 0px !important;
        color: var(--title-item-color);
        font-size: 35px;
        filter: drop-shadow(0px 0px 10px var(--title-item-color));
        transition: .3s ease-in-out;
        display: flex;
        align-items: center;
        justify-content: center;
        
        &:hover {
            transform: scale(1.1);
        }

        @media (max-width: 510px) {
            right: 5px;
            top: 5px;
        }   
    }

    .btn-final-form {
        position: absolute;
        bottom: -20px;
        border-radius: 6px;
        border: none;
        font-size: 19px;
        padding: 10px 15px;
        background-image: linear-gradient(to bottom, rgba(254, 178, 84, 1), rgba(240, 129, 61, 1));
        color: var(--main-color);
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, .2);
    }
`; 

export const BoxInputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;

    label {
        color: var(--title-item-color);
        font-size: 21px;
    }

    input, textarea{
        width: 100%;
        resize: none;
        padding: 5px 10px;
        font-size: 1rem;
        display: block;
    }
`;