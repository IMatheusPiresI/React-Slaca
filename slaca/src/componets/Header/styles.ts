import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 68px;
    background-color: var(--bars-color);
    padding: 5px 36px 5px 36px;
    display: flex;
    justify-content: space-between;

    .header__boxtext {
        display: flex;
        flex-direction: column;
        justify-content: center;

        p {
            color: #725C5C;
            font-size: 14px;
        }

        p:nth-child(2) {
            font-size: 22px;
        }
    }

    

    .header__user {
        display: flex;
        color: #333333;

        div:nth-child(1) {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 2.5rem;
        select {
            background: var(--bars-color);
            border-radius: 4px;
            align-items: center;
            padding: 5px 0px 5px 25px;
            color: #333333;
            
        }

        i {
            position: relative;
            left: 23px;
            color: #333333;
        }
    }

        div:nth-child(2) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: right;
            margin-right: 10px;
        }

        .header__user-num {
            font-size: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            padding: 5px;
            position: absolute;
            right: 36px;
            width: 20px;
            height: 20px;
            color: var(--main-color);
            background-color: #F85959;
        }
    }

    
`;