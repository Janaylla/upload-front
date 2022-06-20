import styled, { keyframes } from "styled-components";

interface PropsContainer {
    success: boolean
}
const changePosition = (success: boolean) => keyframes`
    100% {
           ${success && "transform: translateX(-102%);"}
    }
`
export const ContainerCardFile = styled.li<PropsContainer>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #444;
    margin-top: 15px;
    width: 100%;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    padding: 1rem 0rem 0 0rem;
    animation: ${p => changePosition(p.success)} forwards 1s;
    animation-delay: 2s;
`

export const BoxFileInfo = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 0.0rem 0.5rem;
    gap: 1rem;
    p{
        word-wrap: break-word;
    }
`

export const FileName = styled.p`
    font-size: 1rem;`


export const Name = styled.div`
    span{
        color: #ED8975 ;
        font-size: 0.8rem;
        cursor: pointer;
    }
    
`