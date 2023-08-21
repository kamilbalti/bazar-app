import Heading from "../Heading"
import ThirdCarousal from "./ThirdCarousal"
import { AiOutlineGift } from "react-icons/ai"

const BigDiscount = () => {
    return(
        <div className="BigDiscountDiv">
            <Heading icon={<AiOutlineGift className="butIcon flashIcon bigDiscIcon"/>} 
            name="Big Discounts" nameClass="flashHead" divClass="row newArrHeadDiv bigDiscHeadDiv" 
            viewHead={'viewHeadDiv3'}
            />
            {/* <div className="row newArrHeadDiv bigDiscHeadDiv">
                <AiOutlineGift className="butIcon flashIcon bigDiscIcon" />
                <h1 className="flashHead">Big Discounts</h1>
            </div> */}
            <div className="flashRelative">
            <ThirdCarousal />
        </div>
        </div>
    )
}
export default BigDiscount