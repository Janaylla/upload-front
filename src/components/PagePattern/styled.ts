import styled from "styled-components";


export const ContainerPagePattern = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    color: black;
    font-size: 2rem;
`

export const ButtonExit = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 2rem;
    cursor: pointer;
    color: #ed8975;
    opacity: 0.9;
    :hover{
        opacity: 1;
    }
`
export const Main = styled.main`
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    /* height: 100%; */
`
export const BoxPageContext= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 800px;
    padding: 1rem;
`
