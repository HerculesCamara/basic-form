import { styled } from "styled-components";

export const Container = styled.main`
    /* width: 100%; */
    /* max-width: 1105px; */

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Title = styled.div`
    text-align: left;
    width: 100%;
    h1 {
        color: #0050C9;
        margin: 0;
    }

    h2 {
        font-weight: 400;
        margin: 0;
    }
`

export const Form = styled.form`
    min-width: 100%;
    padding: 39px 48px;
    margin-top: 20px;

    background: #d9d9d925;

    border: 1px solid #00000010;
    border-radius: 16px;

    display: flex;
    flex-direction: column;
    gap: 14px;

    input {
        font-size: 20px;
        font-weight: 300;
        color: #000000;

        padding: 10px 20px;

        background: #fff;
        border: 1px solid #0050C9;
        border-radius: 8px;
    }

    textarea {
        font-size: 20px;

        font-weight: 300;
        color: #000000;

        padding: 10px 20px;

        background: #fff;
        border: 1px solid #0050C9;
        border-radius: 8px;
    }
`

export const SubmitButton = styled.button`
    background: #0050C9;

    padding: 12px 75px;
    margin-top: 20px;


    color: #fff;
    font-weight: 600;
    font-size: 20px;

    border: none;
    border-radius: 8px;
`