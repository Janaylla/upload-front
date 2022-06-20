
import { useUpload } from "../../context/Upload/Upload"
import CardSavedFile from "../CardSavedFile"
import { ContainerCardFile, ContainerCardsFile, } from "./styled"

const CardsSavedFile = () => {
    const {  savedFiles } = useUpload()
    return <ContainerCardsFile>
        <ContainerCardFile>
            {
               savedFiles.length ?
               savedFiles.map((file) => {
                        return <CardSavedFile key={file.id} file={file} />
                    })
                    :
                    <p>
                        Nenhum arquivo em Salvo
                    </p>
            }

        </ContainerCardFile>
    </ContainerCardsFile>
}
export default CardsSavedFile