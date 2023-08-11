import {BiSolidCategory} from "react-icons/bi"
import {AiOutlineRight} from "react-icons/ai"
import Heading from "./Heading"
const Navbar3 = () => {
    const linkArr = ["Home", "Mega Menu", "Full Screen Menu", "Pages", "User Account", "Vendor Account"]
    return(
        <div className="nav3 whiteBgColor">
            <button className="categories">
            <BiSolidCategory className="butIcon row"/>
            <p className="catPara">Categories</p>
            <AiOutlineRight className="butIcon left row"/>
            </button>
            <div className="row">
                {linkArr.map((item: any, index: number) => 
                    <div className="linkPara">
                        <Heading linkName={item} downClass="allNavDownIcon"/>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Navbar3;