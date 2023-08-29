import "../FlashDeal/FlashDeal.css"
import { BigDiscountData } from "@/app/data/BigDiscountData"
import Carousal from "../Carousal"
import { useEffect, useState } from "react"

const ThirdCarousal = () => {
    const carNum = 3;
    const [val, setVal] = useState(11)
    const [temp, setTemp] = useState(3)
    useEffect(() => {
        setVal(window.innerWidth >= 949 ? 11 : 11.11) 
        setTemp(window.innerWidth >= 950 ? 3 : ((window.innerWidth >= 650 ? 5 : (window.innerWidth >= 500 ? 7 : 8))))
    })

    return(
        <Carousal carNum={carNum} val={val} carousalData={BigDiscountData} temp={temp}/>
    )
}
export default ThirdCarousal