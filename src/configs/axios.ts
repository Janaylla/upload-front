import axios from "axios";

export const axiosUpload = axios.create({
    baseURL: process.env.REACT_APP_API,
    headers: {
        Authorization: window.localStorage.getItem(`token`) as string
    }
})
