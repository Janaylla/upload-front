import styled from "styled-components";

export const ContainerForm = styled.form`
    display: flex;  
    flex-direction: column;
    /* max-width: 800px; */
    width: 100%;
    max-width: 500px;
`
export const ButtonSubmit = styled.button`
    width: 100%;
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
export const Label = styled.label`
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    margin: 0.5rem 0 ;
    text-transform: capitalize;
    font-size: 1rem;
`

export const Input = styled.input`
    border: #304d63 solid 1px;
    outline: none;
    margin-top: 0.5rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 10px;
`
export const Title = styled.h3`
    font-size: 2rem;
    text-align: center;
`

export const Link = styled.a`
    cursor: pointer;
    text-decoration: underline 2px black;
    color:  #304d63;
    opacity: 0.9;
    margin: 0.5rem 0;
    align-self: center;
    :hover{
        opacity: 1;
    }
`