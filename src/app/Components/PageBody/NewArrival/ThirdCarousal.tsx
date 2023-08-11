import "../FlashDeal/FlashDeal.css"
import { BigDiscountData } from "@/app/data/BigDiscountData"
import Carousal from "../Carousal"

const ThirdCarousal = () => {
    const carNum = 3;
    const val = 11;
    const temp = 3;
    return(
        <Carousal carNum={carNum} val={val} carousalData={BigDiscountData} temp={temp}/>
    )
}
export default ThirdCarousal