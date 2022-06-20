import { ContainerProgress } from "./styled"
interface PropsProgress {
    percent: number
}
const Progress = ({percent}: PropsProgress) => {
    return <ContainerProgress percent={percent}>
       <div/>
    </ContainerProgress>
}
export default Progress