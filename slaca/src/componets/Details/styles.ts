import styled from "styled-components";

export const Container = styled.div`
    max-width: 300px !important;
    height: auto;
    max-height: inherit;
    border: 1px solid #ECECEC;
    position: relative;
    display: flex;
    flex-direction: column;

    .container-details{
        width: 100%;
        height: calc(100% - 55px);
        padding-bottom: 25px;
        overflow: auto;
    }

    header {
        display: flex;
        align-items: center;
        height: 55px;
        background-color: var(--bars-color);
        padding: 15px 0px 15px 14px;

        h4 {
            font-size: 20px;
            color: #4E4E4E;
        }
    }


    & div {
        padding: 0px 7px 0px 7px;

        p{
            color: #ADA0A0;

            strong {
                color: #5C5C5C;
            }
        }
    }

    div:nth-child(1) {
        display: flex;
        flex-direction: column;
        margin-bottom: 25px;
        margin-top: 20px;

        strong {
            padding-left: 5px;
        }
    }


    div:nth-child(2) {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }
`;