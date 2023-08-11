import { FiChevronDown } from "react-icons/fi"
const Heading = ({linkName, downClass}: any) => {
    return(
        <div className="row">
            <p className="centerPara">{linkName}</p>
            <div className={downClass}>
                <FiChevronDown />
            </div>
        </div>
    )
}
export default Heading