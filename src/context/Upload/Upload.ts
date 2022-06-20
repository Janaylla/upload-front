import { createContext, useContext } from "react";
import { DropEvent } from "react-dropzone";
import { FilesUpload, FileUpload, SavedFiles } from "./StateUpload";

interface StatesUpload{
    newUploaded: (files: File[], event: DropEvent) =>  void,
    uploadedFiles: FilesUpload,
    tryAgainFUploadedFile: (file: FileUpload) => void,
    savedFiles: SavedFiles[]
}
export const Upload= createContext<StatesUpload>({
} as StatesUpload)

export const useUpload= () => useContext(Upload)