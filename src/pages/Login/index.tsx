
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Form from "../../components/Form"
import PagePattern from "../../components/PagePattern"
import { axiosUpload } from "../../configs/axios"
import useForm, { Form as TypeForm } from "../../hooks/useForm"
import {  goToHome, goToSignUp } from "../../route/coordinator"
const Login = () => {
    const inputs: {
        name: string;
        text?: string;
        type?: string;
    }[] = [
        {
            name: 'email',
            text: `E-mail`,
        },
        {
            name: 'password',
            type: 'password'
        },
    ]
    const initialForm:TypeForm = {
        email: "",
        password: ""
    }
    const [form, onChange] = useForm(initialForm)
    const navigate = useNavigate()
    const submit = () => {
        axiosUpload.post("/login", form)
        .then((res) => {
            window.localStorage.setItem("token", res.data.token)
            window.localStorage.setItem("nickname", res.data.nickname)
            goToHome(navigate)
        })
        .catch((err) => {
            alert(err.response.data)
        })
    }
    return <>
        <PagePattern>
        <Form
            form={form}
            inputs={inputs}
            onChange={onChange}
            submit={
                {
                    function: submit,
                    text: "Login"
                }
            }
            title={"Login"}
            redirect={
                {
                    goTo: goToSignUp,
                    text: "Ir para cadastro"
                }
            }
        /> 
        </PagePattern>
    </>
}
export default Login