import Dropzone from "react-dropzone"
import { useUpload } from "../../context/Upload/Upload"
import { InformLabel, Label } from "./styled"

const DropZone = () => {
    const { newUploaded, uploadedFiles } = useUpload()
    return <>
       <Dropzone onDropAccepted={newUploaded}>
                    {({ getRootProps, getInputProps, isDragActive, isDragReject }) => <Label
                        {...getRootProps()}
                        isDragActive={isDragActive}
                        isDragReject={isDragReject}
                    >
                        <InformLabel>
                            {!isDragActive && "Arraste ou selecione arquivos para fazer upload"}
                            {isDragActive && isDragReject && "Arquivo não suportado"}
                            {isDragActive && "Solte os arquivos"}
                        </InformLabel>
                        <input type="file" {...getInputProps()} />
                        { }
                    </Label>
                    }
                </Dropzone>
    </>
}
export default DropZone