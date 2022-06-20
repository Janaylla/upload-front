import styled from "styled-components";

export const ContainerError = styled.div`
    font-size: 2rem;
    flex-direction: column;
    display: flex;
`

export const Button = styled.button`
    margin: 1rem;
    background-color: black;
    color: white;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    border: black 2px solid;
    outline: none;
    opacity: 0.8;
    cursor: pointer;
    :hover{
        opacity: 1;
    }
`