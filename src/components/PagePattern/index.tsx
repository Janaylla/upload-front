import { CloudUploadOutlined } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"
import { goToLogin } from "../../route/coordinator"
import { BoxPageContext, ButtonExit, ContainerPagePattern, Header, Main } from "./styled"
interface PropsPagePattern {
    children: JSX.Element | JSX.Element[]
}
const PagePattern = ({ children }: PropsPagePattern) => {
    const navigate = useNavigate()
    const logout = () => {
        window.localStorage.removeItem("token")
        window.localStorage.removeItem("nickname")
        goToLogin(navigate)
    }
    return <ContainerPagePattern>

        <Header>
            {
                window.localStorage.getItem("nickname") && <>
                    <p>{window.localStorage.getItem("nickname")} </p>
                    <ButtonExit onClick={logout}>
                        Sair
                    </ButtonExit>
                </>
            }
        </Header>
        <Main>
            <CloudUploadOutlined sx={{ fontSize: 200 }} />
            <BoxPageContext>
                {children}
            </BoxPageContext>
        </Main>
    </ContainerPagePattern>
}
export default PagePattern