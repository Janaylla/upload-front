
import { CloseOutlined, ExpandMoreOutlined } from "@mui/icons-material"
import { useState } from "react"
import { useUpload } from "../../context/Upload/Upload"
import CardFile from "../CardFile"
import { ChangeShow, ContainerCardFile, ContainerCardsFile, Header } from "./styled"

const CardsFile = () => {
    const { uploadedFiles } = useUpload()
    const [showFiles, setShowFiles] = useState<boolean>(true)
    return <ContainerCardsFile showFiles={showFiles}>
        <Header>
            <p>Arquivos em upload</p>
            <ChangeShow
                showFiles={showFiles}
                onClick={() => setShowFiles(!showFiles)}>
                <ExpandMoreOutlined style={{ fontSize: "32px" }} />
            </ChangeShow>
        </Header>
        <ContainerCardFile showFiles={showFiles}>
            {
                Object.values(uploadedFiles).length ?
                    Object.values(uploadedFiles).map((file) => {
                        return <CardFile key={file.id} file={file} />
                    })
                    :
                    <p>
                        Nenhum arquivo em upload
                    </p>
            }

        </ContainerCardFile>
    </ContainerCardsFile>
}
export default CardsFile