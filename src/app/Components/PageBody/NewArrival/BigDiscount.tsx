import { BigDiscountData } from "@/app/data/BigDiscountData"
import ThirdCarousal from "./ThirdCarousal"
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineGift } from "react-icons/ai"

const BigDiscount = () => {
    return(
        <div className="BigDiscountDiv">
            <div className="row newArrHeadDiv bigDiscHeadDiv">
                <AiOutlineGift className="butIcon flashIcon bigDiscIcon" />
                <h1 className="flashHead">Big Discounts</h1>
            </div>
            <div className="flashRelative">
            <ThirdCarousal />
        </div>
        </div>
    )
}
export default BigDiscount