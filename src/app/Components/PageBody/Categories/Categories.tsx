import {BiSolidCategory} from "react-icons/bi"
import SecondCarousal from "./SecondCarousal"
import "./Categories.css"

const Categories = () => {
    return(
        <div className="categoryMainDiv">
            <div className="row headingMainDiv catHeadDiv">
            <BiSolidCategory className="butIcon flashIcon"/>
            <h1 className="flashHead">Top Categories</h1>
            </div>
            <div>
            <SecondCarousal />
            </div>
        </div>
    )
}
export default Categories