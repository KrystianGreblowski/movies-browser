import loadingImage from "../../images/icon-spinner.png"
import { CircleLoader, CircleWrapper } from "./styled"

const Loader = () => {
    return (
        <CircleWrapper>
        <CircleLoader src={loadingImage} alt="" />
        </CircleWrapper>
    )
};

export default Loader;