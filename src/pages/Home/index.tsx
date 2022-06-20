import DropZone from "../../components/DropZone";
import CardsFile from "../../components/CardsFile";
import PagePattern from "../../components/PagePattern";
import StateUpload from "../../context/Upload/StateUpload";
import useProtectedPage from "../../hooks/useProtectPage";
import CardsSavedFile from "../../components/CardsSavedFile";


const Home = () => {
    useProtectedPage()
    return <StateUpload>
        <PagePattern>
            <DropZone />
            <CardsSavedFile/>
            <CardsFile />
        </PagePattern>
    </StateUpload>
}
export default Home