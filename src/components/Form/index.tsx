import { NavigateFunction, useNavigate } from "react-router-dom"
import { Form as TypeForm } from "../../hooks/useForm"
import { ButtonSubmit, ContainerForm, Input, Label, Link, Title } from "./styled"


interface PropsForm {
    title: string,
    inputs: Array<{
        name: string;
        text?: string;
        type?: string;
    }>,
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    form: TypeForm,
    submit: {
        text: string,
        function: () => void
    },
    redirect: {
        goTo: (navigate: NavigateFunction) => void,
        text: string
    }
}
const Form = ({ inputs, onChange, submit, title, form , redirect}: PropsForm) => {
    const navigate = useNavigate()
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        submit.function()
    }
    return <ContainerForm onSubmit={onSubmit}>
        <Title>
            {title}
        </Title>
        {
            inputs.map((input) => (
                <Label key={input.name}>
                    {input.text || input.name}
                    <Input
                        type={input.type || "text"}
                        name={input.name}
                        onChange={onChange}
                        value={form[input.name]} />
                </Label>
            ))
        }
        
        <ButtonSubmit type="submit" >
            {submit.text}
        </ButtonSubmit>
        <Link onClick={() => redirect.goTo(navigate)}>
            {redirect.text}
        </Link>
    </ContainerForm>
}
export default Form