import {BiSolidCategory} from "react-icons/bi"
import SecondCarousal from "./SecondCarousal"
import "./Categories.css"
import Heading from "../Heading"

const Categories = () => {
    return(
        <div className="categoryMainDiv">
            <Heading icon={<BiSolidCategory className="butIcon flashIcon"/>} name="Top Categories" 
            nameClass="flashHead" divClass="row headingMainDiv catHeadDiv" viewHead={'viewHeadDiv'}
            />
            <div>
            <SecondCarousal />
            </div>
        </div>
    )
}
export default Categories