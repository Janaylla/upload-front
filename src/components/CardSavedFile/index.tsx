import { CheckCircle, CloudUploadOutlined, ErrorOutline, UploadFileOutlined } from "@mui/icons-material"
import { date } from "../../constants/mask/maskDate"
import { SavedFiles } from "../../context/Upload/StateUpload"
import { BoxFileInfo, ContainerCardFile } from "./styled"
interface PropsCardFile {
    file: SavedFiles
}
const CardSavedFile = ({ file }: PropsCardFile) => {
    const { name,createdAt } = file
    return <ContainerCardFile>
        <BoxFileInfo>
            <p>{name}</p>
            <span>
                {date(createdAt)}
            </span>
        </BoxFileInfo>
        <CloudUploadOutlined/>
    </ContainerCardFile>
}
export default CardSavedFile