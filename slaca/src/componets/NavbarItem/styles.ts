import styled from "styled-components";

interface isOpen {
    isOpen: boolean;
}

export const Container = styled.div<isOpen>`
    width: 100%;
    height: 33px;
    display: flex;
    align-items: center;
    text-align: justify;
    border-top: 1px solid #E7E7E7;
    border-bottom: 1px solid #E7E7E7;
    border-left: ${({isOpen}) => isOpen && '5px solid rgba(255, 180, 85)'};
    background-color: ${({isOpen}) => isOpen ? 'var(--bars-color)' : '#FFF'};

    a{
        text-decoration: none;
        padding-left: 24px;
        color: #725C5C;
    }
`;