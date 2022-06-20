import { BrowserRouter, Route, Routes } from "react-router-dom"
import Error from "../pages/Error"
import Home from "../pages/Home"
import Login from "../pages/Login"
import SignUp from "../pages/SignUp"

const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/singup" element={<SignUp/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
    </BrowserRouter>
}
export default Router