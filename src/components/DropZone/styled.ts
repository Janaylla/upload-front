import styled from "styled-components";

interface PropsLabel{
    isDragActive: boolean,
    isDragReject: boolean
}
const backgroundColorLabel = (
    isDragActive: boolean,
    isDragReject: boolean) => {
    if(isDragActive)
        return `background-color: #8FB9AA;`
    if(isDragReject)
        return `background-color: #ED8975;`
    return `background-color: #ffffff;`
}
export const Label = styled.label<PropsLabel>`
    font-size: 1.4rem;
    text-align: center;
    margin: 1rem;
    border: 2px black dashed;
    padding: 1rem;
    cursor: pointer;
    ${(p) => backgroundColorLabel(p.isDragActive, p.isDragReject)}
`

export const InformLabel = styled.p`

`