import { useNavigate } from "react-router-dom"
import PagePattern from "../../components/PagePattern"
import { goToHome } from "../../route/coordinator"
import { ContainerError , Button} from "./styled"

const Error = () => {
    const navigate = useNavigate()
    return <PagePattern>
        <ContainerError>
            Pagina não encontrada
            <Button onClick={() => goToHome(navigate)}>
                Ir para {window.localStorage.getItem('token') ? "Home": "Login"}
            </Button>
        </ContainerError>
    </PagePattern>
}
export default Error