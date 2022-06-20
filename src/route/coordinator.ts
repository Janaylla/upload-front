import { NavigateFunction } from "react-router-dom"

export const goToHome = (navigate: NavigateFunction) => {
    navigate("/")
}
export const goToLogin = (navigate: NavigateFunction) => {
    navigate("/login")
}
export const goToSignUp = (navigate: NavigateFunction) => {
    navigate("/singup")
}