import styled from "styled-components";
interface ContainerProgress {
    percent: number
}
export const ContainerProgress = styled.div<ContainerProgress>`
    height: 5px;
    border-radius: 20px;
    padding: 1px;
    background-color: #ccc;
    display: flex;
    width: 100%;
    >div{
        content: "";
        width: calc(${p => p.percent} * 1%);
        background-color: #304d63;
        transition-duration: 0.5s;
        transition-property: width;
    }
`