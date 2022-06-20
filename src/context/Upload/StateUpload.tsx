
import { useEffect, useState } from "react"
import { Upload } from "./Upload"
import { DropEvent } from "react-dropzone"
import { axiosUpload } from "../../configs/axios"
interface PropsStateNewUpload {
    children: JSX.Element | JSX.Element[]
}
export interface FileUpload {
    file: File,
    id: string,
    name: string,
    progress: number,
    error: false | string,
    success: boolean
}
export interface FileUploadUpdate {
    file?: File,
    id?: string,
    name?: string,
    progress?: number,
    error?: false | string,
    success?: boolean
}
export interface SavedFiles {
    id: string,
    name: string,
    key: string,
    url: string,
    createdAt: number
}
export interface FilesUpload { [key: string]: FileUpload }

const StateUpload = ({ children }: PropsStateNewUpload): JSX.Element => {
    const [uploadedFiles, setUploadedFiles] = useState<FilesUpload>({})
    const [savedFiles, setSavedFiles] = useState<SavedFiles[]>([])

    const newUploaded = async (files: File[], event: DropEvent) => {
        const newFiles: FilesUpload = {}
        for (let i = 0; i < files.length; i++) {
            const file = files[i]
            const id = (Date.now() + i).toString()
            newFiles[id] = {
                file,
                id,
                name: file.name,
                progress: 0,
                error: false,
                success: false
            }
        }
        // console.log([...uploadedFiles, ...newFiles])
        setUploadedFiles((prev) => ({ ...prev, ...newFiles }))
        for (const file of Object.values(newFiles)) {
            sendFile(file)
        }
    }
    const sendFile = async (file: FileUpload) => {
        try {
            const data = new FormData()
            data.append('file', file.file, file.name)
            const result = await axiosUpload.post(`/file`, data, {
                onUploadProgress: (e) => {
                    const progress = Math.floor((e.loaded * 100) / e.total)
                    updateFile(file.id, { progress: progress })
                }
            })

            updateFile(file.id, { success: true })
            setSavedFiles((prev) => [result.data, ...prev ])
            setTimeout(() => {
                deleteFile(file.id)
            }, 3000)

        } catch (error: any) {
            console.log(error)
            updateFile(file.id, { error: error.response.data})
        }

    }
    const deleteFile = (id: string) => {
        setUploadedFiles((prev) => {
            delete prev[id]
            return {...prev}
        })
    }
    const updateFile = (id: string, file: FileUploadUpdate) => {
        setUploadedFiles((prev) => ({ ...prev, [id]: { ...prev[id], ...file } }))
    }
    const getFiles = () => {
        axiosUpload.get(`/file`)
        .then((res) => {
            setSavedFiles(res.data)
        })
    }
    const tryAgainFUploadedFile = (file: FileUpload) => {
        updateFile(file.id, {
            error: false,
            progress: 0
        })
        sendFile(file) 
    }
    useEffect(() => {
        getFiles()
    }, [])
    return <Upload.Provider
        value={{
            newUploaded,
            uploadedFiles,
            savedFiles,
            tryAgainFUploadedFile
        }}>
        {children}
    </Upload.Provider>
}

export default StateUpload