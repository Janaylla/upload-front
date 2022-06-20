
import { useNavigate } from "react-router-dom"
import Form from "../../components/Form"
import PagePattern from "../../components/PagePattern"
import { axiosUpload } from "../../configs/axios"
import useForm, { Form as TypeForm } from "../../hooks/useForm"
import {  goToHome, goToLogin } from "../../route/coordinator"
const SignUp = () => {
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
            name: "nickname"
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
        axiosUpload.post("/singup", form)
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
                    function:submit,
                    text: "Cadastrar"
                }
            }
            title={"Cadastro"}
            redirect={
                {
                    goTo: goToLogin,
                    text: "Ir para Login"
                }
            }
        /> 
        </PagePattern>
    </>
}
export default SignUp