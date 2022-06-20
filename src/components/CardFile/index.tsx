import { CheckCircle, ErrorOutline } from "@mui/icons-material"
import { FileUpload } from "../../context/Upload/StateUpload"
import { useUpload } from "../../context/Upload/Upload"
import Progress from "../Progress"
import { BoxFileInfo, ContainerCardFile, Name } from "./styled"
interface PropsCardFile {
    file: FileUpload
}
const CardFile = ({ file }: PropsCardFile) => {
    const { name, progress, success, error } = file
    const { tryAgainFUploadedFile } = useUpload()
    return <ContainerCardFile success={success}>
        <BoxFileInfo>
            <Name>
                <p>
                    {name}
                </p>
                {error &&  <span onClick={() => tryAgainFUploadedFile(file)}>
                    Tentar novamente
                </span>}
            </Name>
            <div>
                {success && <CheckCircle style={{ color: "#8fb9aa" }} />}
                {error && <ErrorOutline style={{ color: "#ED8975" }} />}
            </div>
        </BoxFileInfo>
        <Progress percent={progress} />
    </ContainerCardFile>
}
export default CardFile