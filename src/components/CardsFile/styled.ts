import styled, { keyframes } from "styled-components";

interface PropsShowFiles {
    showFiles: boolean
}
export const ContainerCardsFile = styled.div<PropsShowFiles>`
    flex-direction: column;
    display: flex;
    min-width: 300px;
    width: 400px;
    max-width: 90vw;
    position: fixed;
    right: 1rem;
    bottom: 0rem;
    background-color: white;
    max-height: 500px;
    padding: 1rem;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    animation: ${(p) => changeSize(p.showFiles )} forwards 0.5s;
`
const changeSize = (showFiles: boolean) =>{ 
    const sizeTo = !showFiles ? "0": "calc(100% - 60px)"
    const sizeFrom = showFiles ? "0": "calc(100% - 60px)"
    return keyframes`
    to{
            transform: translateY(${sizeTo});
    }
    100% {
            transform: translateY(${sizeFrom});
    }
`}
export const ContainerCardFile = styled.ul<PropsShowFiles>`
    margin-top: 10px;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
    /* transition-duration: 1s; */
    /* transition-property: height; */
`

export const ChangeShow = styled.button<PropsShowFiles>`
    cursor: pointer;
    align-self: flex-end;
    outline: none;
    border: none;
    background-color: transparent;
    transform: ${(p) => p.showFiles ?'rotate(0deg)' :'rotate(180deg)'};
        transition-duration: 1s;
    transition-property: transform;
`

export const Header = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`